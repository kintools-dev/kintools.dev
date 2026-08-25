import type { DocsModule } from "./nav-types.ts";

// React's `use()` hook requires the SAME promise identity across a
// suspended component's retries, so each slug's dynamic import is cached
// here rather than re-created on every render. This also keeps the loaded
// MDX module (which contains a live component function) out of the route
// loader's return value entirely -- TanStack Start serializes loader data
// for SSR/hydration, and a function can't be serialized.
const cache = new Map<string, Promise<DocsModule>>();

export function loadDocsPage(
  cacheKey: string,
  pages: Record<string, () => Promise<DocsModule>>,
  slug: string,
): Promise<DocsModule> | undefined {
  const loader = pages[slug];
  if (!loader) return undefined;

  const key = `${cacheKey}:${slug}`;
  let promise = cache.get(key);
  if (!promise) {
    promise = loader();
    // Don't let a transient failure poison every future request for this
    // slug -- the Cloudflare dev worker keeps this module's state alive
    // across requests, so a cached rejection would otherwise stick forever.
    promise.catch(() => cache.delete(key));
    cache.set(key, promise);
  }
  return promise;
}
