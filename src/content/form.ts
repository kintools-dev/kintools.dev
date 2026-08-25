import navJson from "../../../form/docs/nav.json" with { type: "json" };
import type { DocsModule, NavConfig } from "./nav-types.ts";

export const formNav = navJson as NavConfig;

const modules = import.meta.glob<DocsModule>("../../../form/docs/**/*.md");

function slugFromPath(path: string): string {
  const slug = path.replace(/^.*\/form\/docs\//, "").replace(/\.md$/, "");
  return slug === "index" ? "" : slug.replace(/\/index$/, "");
}

export const formPages: Record<string, () => Promise<DocsModule>> = Object
  .fromEntries(
    Object.entries(modules).map(([path, loader]) => [
      slugFromPath(path),
      loader,
    ]),
  );
