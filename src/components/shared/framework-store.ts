import { createStore, useStore } from "@kintools/store-react";

export type Framework = "react" | "lit";

export const frameworks: { id: Framework; label: string }[] = [
  { id: "react", label: "React" },
  { id: "lit", label: "Lit" },
];

const STORAGE_KEY = "kintools:framework";
const isClient = typeof window !== "undefined";

function readInitial(): Framework {
  if (!isClient) return "react";
  const stored = localStorage.getItem(STORAGE_KEY);
  return stored === "react" || stored === "lit" ? stored : "react";
}

// Reading localStorage here seeds the client's very first render, which
// must match the server-rendered HTML or React throws a hydration error.
// Dev mode (vite's dev server) actually renders each request through SSR,
// so the mismatch is real there and the default is forced to "react".
// Production is prerendered once at build time to fully static HTML with
// no per-request SSR, so there's no server output to mismatch against.
const frameworkStore = createStore<Framework>(
  import.meta.env.DEV ? "react" : readInitial(),
);

if (isClient) {
  frameworkStore.subscribe((get) => localStorage.setItem(STORAGE_KEY, get()));
}

export function useFramework(): [Framework, (next: Framework) => void] {
  return [useStore(frameworkStore), frameworkStore.set];
}
