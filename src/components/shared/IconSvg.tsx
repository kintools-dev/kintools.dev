import type * as React from "react";

/**
 * A 24x24 stroke-based icon wrapper: shared viewBox, stroke width, and
 * rounded caps/joins so every small line icon on the site reads as one
 * consistent set, no matter which component draws it.
 */
export function IconSvg(
  { className, children }: { className?: string; children: React.ReactNode },
) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}
