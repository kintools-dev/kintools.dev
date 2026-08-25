// The MiniSearch config, shared between the build-time index writer
// (search-index-builder.ts, run by scripts/build-search-index.ts) and the
// client-side reader (search-index.ts) -- `MiniSearch.loadJSON` only
// serializes the index data, not this config, so both sides must agree on
// it independently or the client would misread the fields it fetches.
import type { Options } from "minisearch";

export const searchIndexOptions: Options = {
  idField: "id",
  fields: ["title", "heading", "text"],
  storeFields: ["title", "heading", "path", "anchor"],
  searchOptions: {
    boost: { title: 4, heading: 3 },
    prefix: true,
    fuzzy: 0.2,
  },
};
