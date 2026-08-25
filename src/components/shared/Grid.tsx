import type * as React from "react";
import { cn } from "#/lib/cn.ts";

const colsClasses: Record<2 | 3, string> = {
  2: "sm:grid-cols-2",
  3: "md:grid-cols-3",
};

/**
 * A responsive multi-column layout for a set of parallel items (primitives,
 * principles, comparison trees).
 *
 * Stacks to one column on narrow viewports; `divided` adds a rule between
 * columns once the grid actually splits into columns.
 */
export function Grid({
  cols = 2,
  divided = false,
  className = "",
  children,
}: {
  cols?: 2 | 3;
  divided?: boolean;
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "grid grid-cols-1 gap-x-8 gap-y-6",
        colsClasses[cols],
        className,
      )}
      style={divided ? { columnRule: "1px solid var(--color-border)" } : {}}
    >
      {children}
    </div>
  );
}
