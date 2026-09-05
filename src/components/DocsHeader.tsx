import { Link, useLocation } from "@tanstack/react-router";
import type { NavConfig } from "#/content/nav-types.ts";
import { cn } from "#/lib/cn.ts";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./shared/DropdownMenu.tsx";
import { DocsSearch } from "./shared/DocsSearch.tsx";
import { LibrarySwitcher } from "./shared/LibrarySwitcher.tsx";
import { ThemeToggle } from "./shared/ThemeToggle.tsx";

function normalize(link: string): string {
  return link.length > 1 && link.endsWith("/") ? link.slice(0, -1) : link;
}

function isExternal(link: string): boolean {
  return /^https?:\/\//.test(link);
}

function NavLinkItem({
  base,
  link,
  text,
  className,
  onClick,
}: {
  base: string;
  link: string;
  text: string;
  className?: string;
  onClick?: () => void;
}) {
  const pathname = useLocation({ select: (location) => location.pathname });

  if (isExternal(link)) {
    return (
      <a
        href={link}
        target="_blank"
        rel="noreferrer"
        onClick={onClick}
        className={cn("text-text2 no-underline hover:text-brand1", className)}
      >
        {text}
      </a>
    );
  }
  const to = base + normalize(link);
  return (
    <Link
      to={to}
      onClick={onClick}
      className={cn(
        "no-underline hover:text-brand1",
        pathname === to ? "text-brand1" : "text-text2",
        className,
      )}
    >
      {text}
    </Link>
  );
}

function MenuIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className={className}
      aria-hidden="true"
    >
      <path d="M3 5h14M3 10h14M3 15h14" strokeLinecap="round" />
    </svg>
  );
}

function GitHubIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.221-.253-4.556-1.113-4.556-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.31.678.921.678 1.856 0 1.34-.012 2.421-.012 2.751 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2Z" />
    </svg>
  );
}

/**
 * The site-wide docs header: the current library's title link, the
 * cross-library switcher, its local search, and that library's top nav
 * links.
 *
 * Shared by `DocsLayout` (doc pages) and each library's `layout: home`
 * page, which otherwise renders no chrome at all.
 */
export function DocsHeader({
  project,
  base,
  nav,
}: {
  project: "form" | "store";
  base: string;
  nav: NavConfig;
}) {
  const githubLink = nav.socialLinks.find((link) => link.icon === "github")
    ?.link;

  return (
    <header className="sticky top-0 z-40 h-14 border-b border-border bg-bg">
      <div className="mx-auto flex h-full w-full max-w-7xl items-center justify-between gap-3 px-4 sm:gap-6 sm:px-6">
        <div className="flex min-w-0 items-center gap-1.5">
          <Link
            to={base}
            className="truncate font-bold text-text1 uppercase no-underline"
          >
            {nav.title}
          </Link>
          <LibrarySwitcher currentId={project} />
        </div>
        <div className="flex items-center gap-3">
          <DocsSearch project={project} />
          <nav className="hidden gap-5 text-sm lg:flex">
            {nav.nav.map((item) => (
              <NavLinkItem
                key={item.text}
                base={base}
                link={item.link}
                text={item.text}
              />
            ))}
          </nav>
          <hr className="border-t-0 h-4 w-px bg-border" />
          <ThemeToggle />
          <hr className="border-t-0 h-4 w-px bg-border" />
          {githubLink && (
            <a
              href={githubLink}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="flex h-8 w-8 items-center justify-center rounded text-text2 hover:bg-bg-soft hover:text-brand1"
            >
              <GitHubIcon className="h-5 w-5" />
            </a>
          )}
          <DropdownMenu className="lg:hidden">
            <DropdownMenuTrigger
              label="Menu"
              className="flex h-8 w-8 items-center justify-center rounded text-text2 hover:bg-bg-soft"
            >
              <MenuIcon className="h-5 w-5" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="flex w-48 flex-col gap-1 p-1 text-sm">
              {nav.nav.map((item) => (
                <DropdownMenuItem key={item.text} asChild>
                  <NavLinkItem
                    base={base}
                    link={item.link}
                    text={item.text}
                    className="rounded px-2 py-1.5"
                  />
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}
