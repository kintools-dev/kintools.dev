import type * as React from "react";
import { cn } from "#/lib/cn.ts";

/**
 * A body paragraph in the home page's own markdown-authored copy.
 *
 * Not used for `DocsLayout`'s guide/comparison prose, which gets its
 * typography from docs.css instead, since it spans the whole content corpus
 * rather than a handful of home-page paragraphs.
 */
export function Prose({
  className = "",
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <p className={cn("mb-4 max-w-[80ch] text-text2 last:mb-0", className)}>
      {children}
    </p>
  );
}
