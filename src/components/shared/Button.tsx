import type * as React from "react";
import { cloneElement, isValidElement } from "react";
import { cn } from "#/lib/cn.ts";

const base = "font-bold text-sm leading-5 transition-colors";

const variantClasses = {
  primary:
    "inline-block rounded px-5 py-2.5 bg-brand2 text-bg hover:brightness-110",
  secondary:
    "inline-block rounded px-5 py-2.5 border border-border text-text1 hover:border-text1",
  text: "text-brand1 hover:text-brand2 underline-offset-2 hover:underline",
};

/**
 * A call-to-action link, styled as a filled/outlined button (`primary`/
 * `secondary`) or as plain emphasized text (`text`).
 *
 * Every button on the site today just navigates, so this renders an `<a
 * href>` by default. Pass `asChild` with a single child element instead
 * (e.g. a real `<button type="button" onClick={...}>`, for whenever one is
 * needed) to apply this same styling to that element rather than rendering
 * an anchor of its own.
 */
export function Button({
  href,
  variant = "primary",
  external = false,
  asChild = false,
  className,
  children,
}: {
  href?: string;
  variant?: "primary" | "secondary" | "text";
  external?: boolean;
  asChild?: boolean;
  className?: string;
  children?: React.ReactNode;
}) {
  const classes = cn(base, variantClasses[variant], className);

  if (asChild && isValidElement(children)) {
    const child = children as React.ReactElement<{ className?: string }>;
    return cloneElement(child, {
      className: cn(classes, child.props.className),
    });
  }

  return (
    <a
      href={href}
      className={classes}
      {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
    >
      {children}
    </a>
  );
}
