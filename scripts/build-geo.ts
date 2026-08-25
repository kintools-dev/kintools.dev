// Generates public/sitemap.xml, public/llms.txt, and public/llms-full.txt
// from form/docs and store/docs' raw markdown + nav.json. Unlike
// scripts/build-search-index.ts, this never needs to render MDX -- a
// page's frontmatter and raw markdown source are enough for a link index
// and a full-text dump, so this is a plain fs script with no Vite/dev
// server involved.
//
// Run before `dev`/`build` (see deno.json's tasks), never imported by
// application code itself.
import { mkdir, readdir, readFile, writeFile } from "node:fs/promises";
import { dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { SITE_NAME, SITE_URL } from "#/lib/seo.ts";

interface NavLink {
  text: string;
  link: string;
}

interface SidebarGroup {
  text: string;
  items: NavLink[];
}

interface NavConfig {
  title: string;
  description: string;
  sidebar: Record<string, SidebarGroup[]>;
}

interface Page {
  slug: string;
  path: string; // e.g. "/form/guide/basic"
  title: string;
  description: string;
  body: string; // raw markdown, frontmatter stripped
}

type ProjectName = "form" | "store";

const projects: { name: ProjectName; docsDirRelative: string }[] = [
  { name: "form", docsDirRelative: "../../form/docs" },
  { name: "store", docsDirRelative: "../../store/docs" },
];

async function walkMarkdownFiles(dir: string): Promise<string[]> {
  const entries = await readdir(dir, { withFileTypes: true });
  const files: string[] = [];
  for (const entry of entries) {
    const full = `${dir}/${entry.name}`;
    if (entry.isDirectory()) {
      files.push(...await walkMarkdownFiles(full));
    } else if (entry.name.endsWith(".md")) {
      files.push(full);
    }
  }
  return files;
}

// Mirrors src/content/{form,store}.ts's own slugFromPath exactly, so a
// page's URL here always matches the URL the site actually renders it at.
function slugFromRelativePath(relativePath: string): string {
  const slug = relativePath.replace(/\.md$/, "");
  return slug === "index" ? "" : slug.replace(/\/index$/, "");
}

interface Frontmatter {
  title?: string;
  description?: string;
  noindex: boolean;
}

function parseFrontmatter(
  source: string,
): { frontmatter: Frontmatter; body: string } {
  const match = /^---\r?\n([\s\S]*?)\r?\n---\r?\n?/.exec(source);
  if (!match) return { frontmatter: { noindex: false }, body: source };

  const block = match[1];
  const body = source.slice(match[0].length);
  const unquote = (value: string) => value.trim().replace(/^["']|["']$/g, "");
  // Only matches flat, non-indented top-level keys -- nested YAML (e.g. a
  // `head:` list) is indented and so never matches `^title:`/`^description:`.
  const titleMatch = /^title:\s*(.+)$/m.exec(block);
  const descriptionMatch = /^description:\s*(.+)$/m.exec(block);

  return {
    frontmatter: {
      title: titleMatch ? unquote(titleMatch[1]) : undefined,
      description: descriptionMatch ? unquote(descriptionMatch[1]) : undefined,
      noindex: /noindex/.test(block),
    },
    body,
  };
}

function firstHeading(body: string): string | undefined {
  const match = /^#\s+(.+)$/m.exec(body);
  return match ? match[1].trim() : undefined;
}

// Order pages the way each project's own sidebar presents them, so
// llms.txt/llms-full.txt read in the same order a person would click
// through the docs. Pages absent from the sidebar (e.g. the project
// homepage) sort after every sidebar page, in whatever order fs gave them.
function sidebarOrder(nav: NavConfig): Map<string, number> {
  const order = new Map<string, number>();
  let index = 0;
  for (const groups of Object.values(nav.sidebar)) {
    for (const group of groups) {
      for (const item of group.items) {
        const slug = item.link.replace(/^\//, "").replace(/\/$/, "");
        if (!order.has(slug)) order.set(slug, index++);
      }
    }
  }
  return order;
}

async function loadProjectPages(
  project: ProjectName,
  docsDirRelative: string,
  nav: NavConfig,
): Promise<Page[]> {
  const docsDir = fileURLToPath(new URL(docsDirRelative, import.meta.url));
  const files = await walkMarkdownFiles(docsDir);
  const order = sidebarOrder(nav);

  const pages = (await Promise.all(files.map(async (file) => {
    const relativePath = file.slice(docsDir.length + 1).replaceAll("\\", "/");
    const slug = slugFromRelativePath(relativePath);
    const source = await readFile(file, "utf-8");
    const { frontmatter, body } = parseFrontmatter(source);
    // A noindex page (e.g. form/docs/present.md) is opted out of search
    // engines via its own <meta>; a GEO index shouldn't surface it either.
    if (frontmatter.noindex) return null;

    // `||`, not `??`: slug.split("/").pop() is "" (falsy but not
    // nullish) for a project's own homepage (slug ""), which must still
    // fall through to nav.title rather than keep an empty string.
    const title = frontmatter.title || firstHeading(body) ||
      slug.split("/").pop() || nav.title;
    const description = frontmatter.description ?? nav.description;
    const path = slug ? `/${project}/${slug}` : `/${project}`;

    return { slug, path, title, description, body } satisfies Page;
  }))).filter((page) => page !== null);

  pages.sort((a, b) => {
    const aOrder = order.get(a.slug) ?? Number.MAX_SAFE_INTEGER;
    const bOrder = order.get(b.slug) ?? Number.MAX_SAFE_INTEGER;
    return aOrder - bOrder;
  });

  return pages;
}

function buildSitemap(paths: string[]): string {
  const urls = paths.map((path) => `  <url><loc>${SITE_URL}${path}</loc></url>`)
    .join("\n");
  return `<?xml version="1.0" encoding="UTF-8"?>\n` +
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
}

function buildLlmsTxt(
  projectPages: Record<ProjectName, Page[]>,
  navByProject: Record<ProjectName, NavConfig>,
): string {
  const lines: string[] = [
    `# ${SITE_NAME}`,
    "",
    "> Framework-agnostic TypeScript libraries.",
    "",
    `- [Home](${SITE_URL}/): The kintools homepage, linking to every library.`,
    "",
  ];

  for (const project of projects.map((p) => p.name)) {
    const nav = navByProject[project];
    lines.push(`## ${nav.title}`, "");
    for (const page of projectPages[project]) {
      lines.push(
        `- [${page.title}](${SITE_URL}${page.path}.md): ${page.description}`,
      );
    }
    lines.push("");
  }

  return lines.join("\n").trimEnd() + "\n";
}

// Writes each page's raw markdown (frontmatter stripped) to public/<path>.md,
// flat, right next to the <path>.html the site prerenders at that same path
// (vite.config.ts sets autoSubfolderIndex: false for exactly this). See
// src/lib/seo.ts's `markdownMirrorPath`, used by each doc route's
// `<link rel="alternate">` to point at this same file from a slug alone.
async function writeMarkdownMirrors(
  outDir: string,
  projectPages: Record<ProjectName, Page[]>,
): Promise<void> {
  for (const pages of Object.values(projectPages)) {
    for (const page of pages) {
      const filePath = `${outDir}${page.path}.md`;
      await mkdir(dirname(filePath), { recursive: true });
      await writeFile(filePath, page.body.trim() + "\n");
    }
  }
}

function buildLlmsFullTxt(projectPages: Record<ProjectName, Page[]>): string {
  const parts: string[] = [];
  for (const pages of Object.values(projectPages)) {
    for (const page of pages) {
      parts.push(
        `# ${page.title}\n\nURL: ${SITE_URL}${page.path}\n\n${page.body.trim()}\n`,
      );
    }
  }
  return parts.join("\n---\n\n");
}

async function main() {
  const navByProject = {} as Record<ProjectName, NavConfig>;
  const projectPages = {} as Record<ProjectName, Page[]>;

  for (const { name, docsDirRelative } of projects) {
    const navPath = fileURLToPath(
      new URL(`${docsDirRelative}/nav.json`, import.meta.url),
    );
    const nav = JSON.parse(await readFile(navPath, "utf-8")) as NavConfig;
    navByProject[name] = nav;
    projectPages[name] = await loadProjectPages(name, docsDirRelative, nav);
  }

  const allPaths = [
    "/",
    ...projects.flatMap(({ name }) => projectPages[name].map((p) => p.path)),
  ];

  const outDir = fileURLToPath(new URL("../public", import.meta.url));
  await mkdir(outDir, { recursive: true });

  await writeFile(`${outDir}/sitemap.xml`, buildSitemap(allPaths));
  await writeFile(
    `${outDir}/llms.txt`,
    buildLlmsTxt(projectPages, navByProject),
  );
  await writeFile(`${outDir}/llms-full.txt`, buildLlmsFullTxt(projectPages));
  await writeMarkdownMirrors(outDir, projectPages);

  const counts = projects.map(({ name }) =>
    `${projectPages[name].length} ${name}`
  )
    .join(", ");
  console.log(
    `Wrote public/sitemap.xml, public/llms.txt, public/llms-full.txt (${counts} pages)`,
  );
}

await main();
