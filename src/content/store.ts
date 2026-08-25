import navJson from "../../../store/docs/nav.json" with { type: "json" };
import type { DocsModule, NavConfig } from "./nav-types.ts";

export const storeNav = navJson as NavConfig;

const modules = import.meta.glob<DocsModule>("../../../store/docs/**/*.md");

function slugFromPath(path: string): string {
  const slug = path.replace(/^.*\/store\/docs\//, "").replace(/\.md$/, "");
  return slug === "index" ? "" : slug.replace(/\/index$/, "");
}

export const storePages: Record<string, () => Promise<DocsModule>> = Object
  .fromEntries(
    Object.entries(modules).map(([path, loader]) => [
      slugFromPath(path),
      loader,
    ]),
  );
