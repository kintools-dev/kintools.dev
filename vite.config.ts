import { readFileSync } from "node:fs";
import { join } from "node:path";
import { fileURLToPath } from "node:url";
import deno from "@deno/vite-plugin";
import mdx from "@mdx-js/rollup";
import tailwindcss from "@tailwindcss/vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";
import type { Element } from "hast";
import { toString as hastToString } from "hast-util-to-string";
import { h } from "hastscript";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import remarkFrontmatter from "remark-frontmatter";
import remarkGfm from "remark-gfm";
import remarkMdxFrontmatter from "remark-mdx-frontmatter";
import { defineConfig } from "vite";

const projectRoot = fileURLToPath(new URL(".", import.meta.url));
const workspaceRoot = fileURLToPath(new URL("..", import.meta.url));

const poimandresLight = JSON.parse(
  readFileSync(
    new URL("./src/content/poimandres-light.json", import.meta.url),
    "utf-8",
  ),
);

const config = defineConfig({
  resolve: {
    alias: [
      // deno.json's "imports" map isn't read by Vite's own resolver, so
      // the "#/" alias needs to be spelled out here too.
      { find: /^#\//, replacement: `${join(projectRoot, "src")}/` },
      // Point straight at the sibling repos' own source rather than
      // through JSR/npm -- @kintools/store-react's JSR-published npm
      // artifact ships context.tsx as raw Deno source with an
      // unresolvable literal `npm:react@^19.2.7` import specifier baked
      // in (JSR's npm-compat rewrite only rewrites specifiers in files it
      // fully compiles, and skips .tsx files it leaves as source for the
      // consumer's own bundler). The local source has none of that --
      // plain `"react"`/`"@kintools/store-core"` specifiers, resolved
      // normally.
      {
        find: "@kintools/store-core",
        replacement: join(workspaceRoot, "store/core/index.ts"),
      },
      {
        find: "@kintools/store-react",
        replacement: join(workspaceRoot, "store/react/index.ts"),
      },
    ],
  },
  server: {
    // form/docs and store/docs live one level up, as sibling repos.
    fs: { allow: [workspaceRoot] },
  },
  plugins: [
    deno(),
    tailwindcss(),
    mdx({
      // Route .md through the same JSX-capable parser as .mdx -- MDX's
      // default `mdExtensions: ['.md']` treats .md as plain CommonMark (no
      // JSX), which silently drops custom tags like <CodeGroup>/<Container>
      // instead of resolving them as components. (The blanket `format: 'mdx'`
      // override breaks @mdx-js/rollup's own file-matching entirely -- this
      // is the same effect via the extension lists instead.)
      mdExtensions: [],
      mdxExtensions: [".md", ".mdx"],
      remarkPlugins: [remarkFrontmatter, remarkMdxFrontmatter, remarkGfm],
      rehypePlugins: [
        // Gives every heading an id, which src/content/search-index-builder.ts
        // reads directly off the compiled elements for its search-result
        // anchors, so clicking a section result lands on that section.
        rehypeSlug,
        // Turns each heading's id (from rehypeSlug, above) into a clickable
        // "#" permalink prepended before the heading text, VitePress-style.
        // It's positioned into the left gutter via `.header-anchor` in
        // src/styles/docs.css, rather than sitting inline before the text.
        [
          rehypeAutolinkHeadings,
          {
            behavior: "prepend",
            properties(node: Element) {
              return {
                className: ["header-anchor"],
                ariaLabel: `Permalink to "${hastToString(node)}"`,
                href: `#${node.properties?.id}`,
              };
            },
            content: h("span", { ariaHidden: "true" }, "#"),
          },
        ],
        [
          rehypePrettyCode,
          {
            // Dual-theme (CSS variable) mode: tokens get
            // `color: var(--shiki-light)` instead of a literal hex color, so
            // a `dark` theme can be added later (plus one CSS rule to swap
            // which variable wins) with no renderer changes.
            theme: { light: poimandresLight },
            keepBackground: false,
            // Lays each line out as a CSS grid row sized to the widest line,
            // rather than relying on inline whitespace -- without it, a
            // `[data-highlighted-line]` background (src/styles/docs.css)
            // only paints behind that line's own text instead of spanning
            // the full (possibly horizontally-scrolled) code block width.
            grid: true,
          },
        ],
      ],
    }),
    tanstackStart({
      // Everything here resolves from build-time content (markdown read
      // off disk), so the whole site can be prerendered to static HTML
      // instead of running as a live SSR worker. crawlLinks (on by
      // default) follows every rendered <a href> starting from `pages`
      // below, which is how the /form/$ and /store/$ catch-all splat
      // routes' many concrete pages get discovered -- they have no
      // static route files of their own for autoStaticPathsDiscovery to
      // find.
      prerender: {
        enabled: true,
        crawlLinks: true,
      },
      pages: [{ path: "/" }, { path: "/form" }, { path: "/store" }],
    }),
    viteReact(),
  ],
});

export default config;
