import type * as React from "react";

// One entry in a "what it does differently" grid: a short title over a
// one-sentence explanation. `icon` adds a small tinted badge above the
// title, for grids that want more visual weight than plain text.
export function Principle({
  icon,
  title,
  children,
}: {
  icon?: React.ReactNode;
  title: string;
  children?: React.ReactNode;
}) {
  return (
    <div>
      {icon && (
        <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-brand1/10 text-brand1">
          {icon}
        </div>
      )}
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-text2">{children}</p>
    </div>
  );
}
