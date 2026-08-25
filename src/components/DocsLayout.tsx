import { useRef } from "react";
import type * as React from "react";
import type { NavConfig } from "#/content/nav-types.ts";
import { DocsFooter } from "./DocsFooter.tsx";
import { DocsHeader } from "./DocsHeader.tsx";
import { DocsSidebar } from "./DocsSidebar.tsx";
import { DocsToc } from "./DocsToc.tsx";

export function DocsLayout({
  project,
  base,
  nav,
  activePath,
  children,
}: {
  project: "form" | "store";
  base: string;
  nav: NavConfig;
  activePath: string;
  children?: React.ReactNode;
}) {
  const currentSlashPath = `/${activePath}/`;
  const sidebarKey = Object.keys(nav.sidebar).find((key) =>
    currentSlashPath.startsWith(key)
  );
  const sidebarGroups = sidebarKey ? nav.sidebar[sidebarKey] : undefined;
  const contentRef = useRef<HTMLElement>(null);

  return (
    <div className="flex min-h-full flex-col bg-bg">
      <DocsHeader project={project} base={base} nav={nav} />
      <div className="mx-auto flex w-full max-w-7xl flex-1 flex-col lg:flex-row">
        <DocsSidebar
          project={project}
          base={base}
          activePath={activePath}
          groups={sidebarGroups}
        />
        <main
          ref={contentRef}
          className="docs min-w-0 flex-1 px-4 py-6 sm:px-6 md:px-8 lg:px-10 lg:py-8"
        >
          {children}
        </main>
        <DocsToc activePath={activePath} contentRef={contentRef} />
      </div>
      <DocsFooter />
    </div>
  );
}
