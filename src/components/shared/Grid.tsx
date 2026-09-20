import type * as React from "react";
import { cn } from "#/lib/cn.ts";

const colsClasses: Record<2 | 3, string> = {
  2: "sm:grid-cols-2",
  3: "md:grid-cols-3",
};

// Static class names so Tailwind can see them. The runtime value comes from
// the `--grid-cols` custom property set on the element.
const weightedColsClasses = {
  2: "sm:grid-cols-(--grid-cols)",
  3: "md:grid-cols-(--grid-cols)",
};

/**
 * A responsive multi-column layout for a set of parallel items (primitives,
 * principles, comparison trees).
 *
 * `cols` is either 2 or 3 for equal-width columns, or an array of relative
 * widths where the length is the number of columns (e.g. `[2, 3]` gives a
 * 40/60 split). Stacks to one column on narrow viewports; `divided` adds a
 * rule between columns once the grid actually splits into columns.
 */
export function Grid({
  cols = 2,
  divided = false,
  className = "",
  children,
}: {
  cols?: 2 | 3 | readonly number[];
  divided?: boolean;
  className?: string;
  children?: React.ReactNode;
}) {
  const style: React.CSSProperties & Record<`--${string}`, string> = {};
  let colsClass: string;
  if (typeof cols === "number") {
    colsClass = colsClasses[cols];
  } else {
    colsClass = weightedColsClasses[cols.length > 2 ? 3 : 2];
    // `minmax(0, ...)` keeps long content (e.g. code) from widening a track.
    style["--grid-cols"] = cols.map((w) => `minmax(0,${w}fr)`).join(" ");
  }
  if (divided) style.columnRule = "1px solid var(--color-border)";

  return (
    <div
      className={cn(
        "grid grid-cols-1 gap-x-8 gap-y-6",
        colsClass,
        className,
      )}
      style={style}
    >
      {children}
    </div>
  );
}
