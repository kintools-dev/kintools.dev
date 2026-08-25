import type * as React from "react";
import { Lede } from "./Lede.tsx";
import { Prose } from "./Prose.tsx";
import { Section } from "./Section.tsx";
import { SectionHeader } from "./SectionHeader.tsx";
import { cn } from "#/lib/cn.ts";

// The home page's opening block: title, an emphasized one-line summary, an
// optional supporting sentence, and the call-to-action buttons (passed as
// children, typically a primary and a secondary <Button>). `icon` prefixes
// the title with a small mark, for a mark+wordmark lockup.
export function Hero({
  icon,
  title,
  lede,
  description,
  children,
  className,
}: {
  icon?: React.ReactNode;
  title: string;
  lede: string;
  description?: string;
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <Section className={cn("pt-20 sm:pt-32", className)}>
      <SectionHeader as="h1">
        {icon
          ? (
            <span className="inline-flex items-center gap-3">
              {icon}
              {title}
            </span>
          )
          : title}
      </SectionHeader>
      <Lede>{lede}</Lede>
      {description && <Prose>{description}</Prose>}
      <div className="flex gap-3 pt-2">{children}</div>
    </Section>
  );
}
