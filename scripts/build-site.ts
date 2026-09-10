// Runs the real `vite build` CLI (not Vite's JS `build()` API -- that skips
// the environment/builder orchestration TanStack Start's prerender plugin
// relies on, so pages silently come out un-prerendered) as a child process,
// and force-exits once dist/ actually stops changing. TanStack Start's
// prerender crawler (vite.config.ts's `tanstackStart({ prerender: ... })`)
// boots its own server to crawl and render every page after the JS bundles
// finish, and doesn't tear that server fully down afterward, so the CLI
// process hangs instead of exiting once the build has actually finished.
//
// A log-message marker (e.g. rollup's own "built in Xs" line) isn't a safe
// completion signal here: that line prints once the *bundles* are built,
// before the crawl-and-prerender phase (which writes the actual .html
// files) has even started. Watching dist/ itself for a page of HTML output
// plus a period of no further changes is what actually corresponds to the
// crawl having finished.
import { fileURLToPath } from "node:url";

const workspaceRoot = new URL("..", import.meta.url);
const distDir = fileURLToPath(new URL("dist", workspaceRoot));

const command = new Deno.Command(Deno.execPath(), {
  args: ["run", "-A", "--node-modules-dir", "npm:vite", "build"],
  cwd: workspaceRoot,
  stdout: "inherit",
  stderr: "inherit",
});
const child = command.spawn();

async function scanDist(): Promise<{ files: number; hasHtml: boolean }> {
  let files = 0;
  let hasHtml = false;
  async function walk(dir: string): Promise<void> {
    try {
      for await (const entry of Deno.readDir(dir)) {
        const path = `${dir}/${entry.name}`;
        if (entry.isDirectory) {
          await walk(path);
        } else {
          files++;
          if (entry.name.endsWith(".html")) hasHtml = true;
        }
      }
    } catch {
      // dist/ doesn't exist yet, or was mid-write when we listed it.
    }
  }
  await walk(distDir);
  return { files, hasHtml };
}

// TanStack Start serializes each route match's internal id into the inline
// `<script class="$tsr">` hydration payload. Those ids join their segments
// with a raw U+0000 (an in-memory sentinel that can't occur in a URL), and
// Start's serializer writes it out unescaped, so every prerendered page
// ships literal NUL bytes inside `text/html`. That's an invalid document:
// Bing refuses to index it, and Google only tolerates it by replacing the
// bytes per the HTML parse spec. Every NUL sits inside a JS string literal
// in that script, where a backslash-u-0000 escape sequence decodes to the
// exact same character at hydration time, so this rewrite is a runtime
// no-op. Works byte-wise so multi-byte UTF-8 elsewhere is untouched.
async function escapeNulBytesInHtml(): Promise<void> {
  const escape = new TextEncoder().encode("\\u0000"); // 6 ASCII bytes
  let patched = 0;

  async function walk(dir: string): Promise<void> {
    for await (const entry of Deno.readDir(dir)) {
      const path = `${dir}/${entry.name}`;
      if (entry.isDirectory) {
        await walk(path);
        continue;
      }
      if (!entry.name.endsWith(".html")) continue;

      const bytes = await Deno.readFile(path);
      let nulCount = 0;
      for (const b of bytes) if (b === 0) nulCount++;
      if (nulCount === 0) continue;

      const out = new Uint8Array(
        bytes.length + nulCount * (escape.length - 1),
      );
      let j = 0;
      for (let i = 0; i < bytes.length; i++) {
        if (bytes[i] === 0) {
          out.set(escape, j);
          j += escape.length;
        } else {
          out[j++] = bytes[i];
        }
      }
      await Deno.writeFile(path, out);
      patched++;
    }
  }

  await walk(distDir);
  console.log(
    `build-site: escaped NUL bytes in ${patched} prerendered page(s)`,
  );
}

const IDLE_CHECKS_REQUIRED = 4; // ~8s of no new files, once html exists
const idleUntilDone = (async () => {
  let lastFiles = -1;
  let stableStreak = 0;
  while (true) {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    const { files, hasHtml } = await scanDist();
    if (hasHtml && files === lastFiles) {
      stableStreak++;
      if (stableStreak >= IDLE_CHECKS_REQUIRED) return;
    } else {
      stableStreak = 0;
    }
    lastFiles = files;
  }
})();

const outcome = await Promise.race([
  child.status.then((status) => ({ kind: "exited" as const, status })),
  idleUntilDone.then(() => ({ kind: "idle" as const })),
]);

if (outcome.kind === "exited") {
  // The build finished on its own without hanging. A non-zero code means it
  // crashed -- propagate and skip post-processing.
  if (outcome.status.code !== 0) Deno.exit(outcome.status.code);
} else {
  // The build hung after prerendering finished; stop the orphaned server.
  try {
    child.kill();
  } catch {
    // Already exited on its own between the last scan and here.
  }
}

await escapeNulBytesInHtml();

Deno.exit(0);
