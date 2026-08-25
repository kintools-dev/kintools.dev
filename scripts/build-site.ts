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
  // The build never hung in the first place (or crashed) -- propagate its
  // real exit code either way.
  Deno.exit(outcome.status.code);
}

try {
  child.kill();
} catch {
  // Already exited on its own between the last scan and here.
}
Deno.exit(0);
