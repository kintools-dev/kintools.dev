import type * as React from "react";

// An emphasized one- or two-sentence summary line, either standalone (a
// section's opening statement) or as a heading (a "fit" card's question).
// `step` prefixes it with a small numbered badge, for a walkthrough's
// sequence of captions (e.g. "01" before "Declare"). Always the same size --
// a smaller variant used inside a Principle card lives on Principle itself,
// since that scoping was never meant to apply here too.
export function Lede({
  as: Tag = "p",
  step,
  children,
}: {
  as?: "p" | "h3";
  step?: string;
  children?: React.ReactNode;
}) {
  return (
    <Tag
      className={step
        ? "mb-4 flex max-w-[80ch] items-baseline gap-3 text-xl font-semibold"
        : "mb-4 max-w-[80ch] text-xl font-semibold"}
    >
      {step && (
        <span className="font-mono text-lg text-brand1">
          {step}
        </span>
      )}
      {children}
    </Tag>
  );
}
