import type * as React from "react";

const borderColorClasses: Record<string, string> = {
  tip: "border-brand1",
  info: "border-blue-500",
  warning: "border-amber-500",
  danger: "border-red-500",
};

// Renders a tip/info/warning/danger callout box (form/docs and store/docs
// author `<Container type="..." title="...">` directly, in place of
// VitePress's `::: tip` / `::: info` / `::: warning` / `::: danger` syntax).
export function Container({
  type,
  title,
  children,
}: {
  type: string;
  title?: string;
  children?: React.ReactNode;
}) {
  return (
    <div
      className={`rounded-r-lg border-l-4 bg-bg-soft p-4 ${
        borderColorClasses[type] ?? "border-border"
      }`}
    >
      <p className="mb-1.5 text-xs font-bold tracking-[0.04em]">
        {title ?? defaultTitle(type)}
      </p>
      {children}
    </div>
  );
}

function defaultTitle(type: string): string {
  switch (type) {
    case "tip":
      return "TIP";
    case "info":
      return "INFO";
    case "warning":
      return "WARNING";
    case "danger":
      return "DANGER";
    default:
      return type.toUpperCase();
  }
}
