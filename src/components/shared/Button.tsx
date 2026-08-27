import type * as React from "react";

const base =
  "inline-block rounded font-bold text-sm leading-5 px-5 py-2.5 transition-colors";

const variantClasses = {
  primary: "bg-brand2 text-white hover:brightness-110",
  secondary: "border border-border text-text1 hover:border-text1",
};

export function Button({
  href,
  variant = "primary",
  external = false,
  children,
}: {
  href: string;
  variant?: "primary" | "secondary";
  external?: boolean;
  children?: React.ReactNode;
}) {
  return (
    <a
      href={href}
      className={`${base} ${variantClasses[variant]}`}
      {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
    >
      {children}
    </a>
  );
}
