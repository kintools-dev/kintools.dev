import { Link } from "@tanstack/react-router";
import { useRef } from "react";
import type { SidebarGroup } from "#/content/nav-types.ts";
import { cn } from "#/lib/cn.ts";
import { FrameworkSwitcher } from "./shared/FrameworkSwitcher.tsx";

function normalize(link: string): string {
  return link.length > 1 && link.endsWith("/") ? link.slice(0, -1) : link;
}

/**
 * The docs page sidebar: the form-only framework switcher, followed by the
 * active section's groups of links (from `nav.sidebar[sidebarKey]`).
 */
export function DocsSidebar({
  project,
  base,
  activePath,
  groups,
}: {
  project: "form" | "store";
  base: string;
  activePath: string;
  groups: SidebarGroup[] | undefined;
}) {
  const detailsRef = useRef<HTMLDetailsElement>(null);

  // Client-side navigation doesn't reload the page, so a closed-on-navigate
  // `<details>` would otherwise stay open over the new page's content.
  function closeMenu(): void {
    if (detailsRef.current) detailsRef.current.open = false;
  }

  const content = (
    <>
      {project === "form" && <FrameworkSwitcher />}
      {groups?.map((group) => (
        <div key={group.text} className="mb-5">
          <h3 className="mb-2 text-xs font-bold tracking-wider text-text3 uppercase">
            {group.text}
          </h3>
          <ul className="m-0 list-none p-0">
            {group.items.map((item) => {
              const isActive = normalize(item.link) === `/${activePath}`;
              return (
                <li key={item.link}>
                  <Link
                    to={base + normalize(item.link)}
                    onClick={closeMenu}
                    className={cn(
                      "block py-1 text-sm no-underline hover:text-brand1",
                      isActive ? "font-semibold text-brand1" : "text-text2",
                    )}
                  >
                    {item.text}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      ))}
    </>
  );

  return (
    <aside className="sidebar-toggle border-b border-border lg:sticky lg:top-14 lg:h-[calc(100vh-3.5rem)] lg:shrink-0 lg:grow-0 lg:basis-60 lg:overflow-y-auto lg:border-r lg:border-b-0 lg:p-6">
      {
        /* `content` deliberately lives outside `<details>`: recent Chromium
      collapses a closed `<details>`'s non-summary content through an
      internal mechanism that a descendant's own `display`/`visibility`
      can't override, so nesting the real sidebar there would make it
      un-force-openable at `lg`. Keeping `<details>` as a bare toggle and
      driving `.sidebar-panel` off its `[open]` state via `:has()` (see
      docs.css) avoids that fight and needs only one copy of `content`. */
      }
      <details ref={detailsRef} className="group">
        <summary className="flex cursor-pointer list-none items-center justify-between px-4 py-3 text-sm font-semibold text-text1 marker:content-none [&::-webkit-details-marker]:hidden lg:hidden">
          <span>Menu</span>
          <ChevronIcon className="h-4 w-4 text-text3 transition-transform group-open:rotate-180" />
        </summary>
      </details>
      <div className="sidebar-panel">{content}</div>
    </aside>
  );
}

function ChevronIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className={className}
      aria-hidden="true"
    >
      <path d="M5 8l5 5 5-5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
