import type * as React from "react";
import { cn } from "#/lib/cn.ts";

/**
 * A bordered, padded surface for grouping related content (a feature grid,
 * a fit/skip comparison, a chart) so it reads as one unit against the page.
 */
export function Card({
  className = "",
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "rounded-lg border border-border bg-bg-soft p-4 sm:p-6",
        className,
      )}
    >
      {children}
    </div>
  );
}
