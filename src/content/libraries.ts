export interface BundleSizeEntry {
  framework: string;
  size: string;
}

export interface LibraryInfo {
  id: "form" | "store";
  title: string;
  base: string;
  tagline: string;
  description: string;
  /**
   * Gzipped size of core + that framework's binding, one entry per framework
   * the library ships bindings for. Regenerate via
   * `deno task --cwd scripts bundle-size` in the library's own repo (see
   * form/scripts/bundle-size.ts) rather than editing these by hand.
   */
  bundleSizes: BundleSizeEntry[];
}

export const libraries: LibraryInfo[] = [
  {
    id: "form",
    title: "Kin Form",
    base: "/form",
    tagline: "Build your field components once. Reuse them everywhere.",
    description: "Form state library.",
    bundleSizes: [
      { framework: "React", size: "5.1 KB" },
      { framework: "Lit", size: "5.4 KB" },
    ],
  },
  {
    id: "store",
    title: "Kin Store",
    base: "/store",
    tagline:
      "Start with a plain store. Add structure only when the app earns it.",
    description: "Reactive state library.",
    bundleSizes: [
      { framework: "React", size: "2.0 KB" },
    ],
  },
];
