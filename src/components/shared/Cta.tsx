import type * as React from "react";

// An emphasized inline or standalone link in the home page's own
// markdown-authored copy ("Build reusable field components →" and similar).
export function Cta({
  href,
  external = false,
  children,
}: {
  href: string;
  external?: boolean;
  children?: React.ReactNode;
}) {
  return (
    <a
      href={href}
      className="font-bold text-brand1 hover:text-brand2 hover:underline"
      {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
    >
      {children}
    </a>
  );
}
