// Client-side reader for the per-project search index generated at
// build/dev time (see scripts/build-search-index.ts and
// search-index-builder.ts, which walks each doc page's compiled MDX to
// produce it). Fetches the prebuilt JSON from `public/search-index/` and
// hydrates a MiniSearch instance from it -- opening search never has to
// load and walk every doc page's own module.
import MiniSearch from "minisearch";
import type { SearchDoc } from "./search-index-builder.ts";
import { searchIndexOptions } from "./search-index-options.ts";

export type { SearchDoc };

const indexCache = new Map<"form" | "store", Promise<MiniSearch<SearchDoc>>>();

export function loadSearchIndex(
  project: "form" | "store",
): Promise<MiniSearch<SearchDoc>> {
  let promise = indexCache.get(project);
  if (!promise) {
    promise = fetch(`/search-index/${project}.json`)
      .then((response) => response.text())
      .then((json) => MiniSearch.loadJSON<SearchDoc>(json, searchIndexOptions));
    indexCache.set(project, promise);
  }
  return promise;
}
