import type * as React from "react";
import { cn } from "#/lib/cn.ts";

/**
 * One full-bleed block of the home page, with consistent vertical rhythm
 * between sections and no trailing gap after the last one on the page.
 */
export function Section({
  id,
  className = "",
  children,
}: {
  id?: string;
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <section
      id={id}
      className={cn("pb-20 last:pb-0 sm:pb-32", className)}
    >
      {children}
    </section>
  );
}
