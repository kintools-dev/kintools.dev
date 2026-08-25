import type * as React from "react";
import { cn } from "#/lib/cn.ts";

/**
 * A small pill for a short label or stat (a bundle-size number, a status
 * word). Carries no color of its own -- tint it via `className`.
 */
export function Badge({
  className = "",
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <span
      className={cn("rounded-full px-2.5 py-1 font-mono text-xs", className)}
    >
      {children}
    </span>
  );
}
