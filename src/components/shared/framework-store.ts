import { createStoreWithStorage } from "#/lib/store-with-storage.ts";

export type Framework = "react" | "lit";

export const frameworks: { id: Framework; label: string }[] = [
  { id: "react", label: "React" },
  { id: "lit", label: "Lit" },
];

// The dev server renders each request through real SSR, so reading
// localStorage here would desync from the hydrated HTML; `ssrValue` pins
// both sides to "react". Production is prerendered to static HTML, so the
// client is free to restore the saved choice.
export const frameworkStore = createStoreWithStorage<Framework>({
  key: "kintools:framework",
  parse: (stored) =>
    frameworks.some((fw) => fw.id === stored) ? stored as Framework : "react",
  ssrValue: import.meta.env.DEV ? "react" : undefined,
});
