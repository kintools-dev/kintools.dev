// Builds each project's search index JSON by walking the same compiled MDX
// element trees the doc pages themselves render. Walking the compiled tree,
// rather than re-parsing the raw markdown, keeps search text exactly in
// sync with what's actually rendered -- every custom component's literal
// children included -- and heading anchors come straight from rehype-slug's
// own `id`s (see vite.config.ts), guaranteed to match the page.
//
// Server/build-only: run through scripts/build-search-index.ts (via Vite's
// `ssrLoadModule`, so `import.meta.glob` below still works), never imported
// by client code -- see search-index.ts, which reads the JSON this writes.
import type * as React from "react";
import { formComponents } from "#/components/form/components.ts";
import { storeComponents } from "#/components/store/components.ts";
import { formNav, formPages } from "./form.ts";
import type { DocsModule } from "./nav-types.ts";
import { searchIndexOptions } from "./search-index-options.ts";
import { storeNav, storePages } from "./store.ts";
import MiniSearch from "minisearch";

// deno-lint-ignore no-explicit-any
type DocsComponents = Record<string, React.ComponentType<any>>;

export interface SearchDoc {
  id: string;
  /** The page's own title, shown as the result group heading. */
  title: string;
  /** The matched section's heading text, or "" for the page's lead section. */
  heading: string;
  /** Plain-text body of just this section, indexed but not displayed. */
  text: string;
  /** Path to navigate to on selection. */
  path: string;
  /** Fragment to scroll to, or "" for the top of the page. */
  anchor: string;
}

const HEADING_TAGS = new Set(["h1", "h2", "h3", "h4", "h5", "h6"]);
// Prop names, on any component, whose string value is authored copy rather
// than layout plumbing -- e.g. `Hero`'s `title`/`lede`/`description`, which
// live in JSX attributes rather than as children and would otherwise be
// invisible to a walk that only looks at `props.children`.
const TEXT_PROPS = ["title", "lede", "description"] as const;

interface Section {
  heading: string;
  anchor: string;
  text: string[];
}

function walk(
  node: React.ReactNode,
  sections: Section[],
  onTitle: (text: string) => void,
): void {
  if (node == null || typeof node === "boolean") return;
  if (typeof node === "string" || typeof node === "number") {
    sections[sections.length - 1].text.push(String(node));
    return;
  }
  if (Array.isArray(node)) {
    for (const child of node) walk(child, sections, onTitle);
    return;
  }
  if (typeof node !== "object" || !("props" in node)) return;

  const element = node as React.ReactElement<
    Record<string, unknown> & { children?: React.ReactNode }
  >;
  // Decorative content -- e.g. the "#" glyph rehype-autolink-headings appends
  // to each heading (see vite.config.ts) -- isn't real copy and shouldn't
  // pollute the heading text or indexed body text.
  if (element.props["aria-hidden"]) return;

  for (const propName of TEXT_PROPS) {
    const value = element.props[propName];
    if (typeof value === "string") {
      sections[sections.length - 1].text.push(value);
    }
  }

  if (typeof element.type === "string" && HEADING_TAGS.has(element.type)) {
    const headingSection: Section = { heading: "", anchor: "", text: [] };
    walk(element.props.children, [headingSection], onTitle);
    const headingText = headingSection.text.join(" ").trim();
    if (element.type === "h1") {
      onTitle(headingText);
      return; // the page's own title, not a jump target
    }
    sections.push({
      heading: headingText,
      anchor: typeof element.props.id === "string" ? element.props.id : "",
      text: [],
    });
    return;
  }

  walk(element.props.children, sections, onTitle);
}

async function buildDocsForProject(
  project: "form" | "store",
  pages: Record<string, () => Promise<DocsModule>>,
  navTitle: string,
  components: DocsComponents,
): Promise<SearchDoc[]> {
  // Loaded one at a time, not via Promise.all: firing every page's MDX
  // compile concurrently through the same ssrLoadModule graph (see
  // scripts/build-search-index.ts) intermittently corrupted unrelated
  // files' parses (a Vite/mdx transform-pipeline concurrency issue, not
  // anything specific to one file).
  const entries: (readonly [string, DocsModule])[] = [];
  for (const [slug, load] of Object.entries(pages)) {
    entries.push([slug, await load()]);
  }

  return entries.flatMap(([slug, mod]) => {
    const pagePath = slug ? `/${project}/${slug}` : `/${project}`;
    const sections: Section[] = [{ heading: "", anchor: "", text: [] }];
    let pageTitle = mod.frontmatter?.title;

    let root: React.ReactNode;
    try {
      // MDX always compiles a `.md`/`.mdx` file's default export to a plain
      // function component (never a class), so it's safe to call directly.
      // The real `components` map is required here, not just an empty
      // object: MDX's compiled output eagerly throws (before any rendering)
      // if a custom tag it references -- `Container`, `CodeGroup`, etc. --
      // isn't present in `_components`, even though we never actually
      // invoke any of them ourselves.
      const render = mod.default as (
        props: { components?: DocsComponents },
      ) => React.ReactNode;
      root = render({ components });
    } catch (error) {
      console.warn(`[search-index] skipping ${project}/${slug}:`, error);
      return []; // a page whose content can't be evaluated headlessly
    }
    walk(root, sections, (text) => {
      if (!pageTitle) pageTitle = text;
    });

    const title = pageTitle || slug.split("/").pop() || navTitle;

    return sections
      .map((section, index) => ({
        id: `${project}:${slug}:${index}`,
        title,
        heading: section.heading,
        text: section.text.join(" ").replace(/\s+/g, " ").trim(),
        path: pagePath,
        anchor: section.anchor,
      }))
      .filter((doc) => doc.heading !== "" || doc.text !== "");
  });
}

/** Builds `project`'s search index and returns it serialized as JSON. */
export async function buildSearchIndexJson(
  project: "form" | "store",
): Promise<string> {
  const docs = project === "form"
    ? await buildDocsForProject(
      "form",
      formPages,
      formNav.title,
      formComponents,
    )
    : await buildDocsForProject(
      "store",
      storePages,
      storeNav.title,
      storeComponents,
    );
  const miniSearch = new MiniSearch<SearchDoc>(searchIndexOptions);
  miniSearch.addAll(docs);
  return JSON.stringify(miniSearch);
}
