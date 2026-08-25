import type * as React from "react";

export function SectionHeader({
  as: Tag = "h2",
  children,
}: {
  as?: "h1" | "h2";
  children?: React.ReactNode;
}) {
  return (
    <Tag className="mb-4 max-w-180 text-3xl font-medium sm:text-5xl">
      {children}
    </Tag>
  );
}
