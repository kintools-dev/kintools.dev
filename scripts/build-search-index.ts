// Generates public/search-index/{form,store}.json from each project's doc
// pages. Runs the site's real vite.config.ts as a dev server (in-process,
// on an ephemeral port) and fetches the index over a throwaway HTTP
// endpoint, rather than calling `ssrLoadModule`/`build()` directly:
// both of those intermittently corrupted unrelated files' MDX parses when
// driven cold against this many `import.meta.glob`-loaded doc pages in one
// process, where going through the same real request path an actual
// `deno task dev` session serves every page through did not.
//
// Run before `dev`/`build` (see deno.json's tasks), never imported by
// application code itself.
import { mkdir, writeFile } from "node:fs/promises";
import type { AddressInfo } from "node:net";
import { createServer as createHttpServer } from "node:http";
import { fileURLToPath } from "node:url";
import { createServer, type ViteDevServer } from "vite";

const projects = ["form", "store"] as const;

// A dev-only middleware, mixed into the real config for just this script's
// server instance, that runs search-index-builder.ts inside the server's
// own already-initialized module graph and returns the result as JSON.
const searchIndexEndpoint = {
  name: "search-index-endpoint",
  configureServer(server: ViteDevServer) {
    server.middlewares.use(async (req, res, next) => {
      const match = /^\/__search-index\/(form|store)$/.exec(req.url ?? "");
      if (!match) return next();
      const { buildSearchIndexJson } = await server.ssrLoadModule(
        "/src/content/search-index-builder.ts",
      ) as { buildSearchIndexJson: (project: string) => Promise<string> };
      res.setHeader("content-type", "application/json");
      res.end(await buildSearchIndexJson(match[1]));
    });
  },
};

const server = await createServer({
  configFile: fileURLToPath(new URL("../vite.config.ts", import.meta.url)),
  server: { middlewareMode: true },
  appType: "custom",
  plugins: [searchIndexEndpoint],
});

const httpServer = createHttpServer(server.middlewares);
await new Promise<void>((resolve) => httpServer.listen(0, resolve));
const { port } = httpServer.address() as AddressInfo;
const base = `http://127.0.0.1:${port}`;

// Warms the same module graph via a real doc page request first -- the
// request path proven (by `deno task dev`) to compile every page
// correctly -- before hitting the search-index endpoint above.
await fetch(`${base}/form/guide/getting-started`);

const outDir = fileURLToPath(
  new URL("../public/search-index", import.meta.url),
);
await mkdir(outDir, { recursive: true });

for (const project of projects) {
  const response = await fetch(`${base}/__search-index/${project}`);
  if (!response.ok) {
    throw new Error(
      `search-index/${project} failed: ${response.status} ${await response
        .text()}`,
    );
  }
  await writeFile(`${outDir}/${project}.json`, await response.text());
  console.log(`Wrote public/search-index/${project}.json`);
}

httpServer.close();
await server.close();
// `close()` doesn't stop every handle Vite's dev server opens (its
// dependency optimizer, in particular), so the process hangs instead of
// exiting on its own.
Deno.exit(0);
