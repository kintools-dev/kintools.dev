import type * as React from "react";

// One entry in a "what it does differently" grid of numbered API surfaces:
// a step number, the API name, its bundle size, and a one-sentence
// description.
export function Primitive({
  step,
  name,
  size,
  children,
}: {
  step: string;
  name: string;
  size: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-2">
      <span className="font-mono text-sm text-brand1">
        {step}
      </span>
      <code className="bg-transparent p-0 text-xl font-semibold">
        {name}
      </code>
      <span className="text-xs tracking-wider text-text3">
        {size}
      </span>
      <p className="text-base text-text2">{children}</p>
    </div>
  );
}
