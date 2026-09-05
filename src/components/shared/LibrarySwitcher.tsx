import { Link } from "@tanstack/react-router";
import { useEffect, useRef } from "react";
import { libraries } from "#/content/libraries.ts";
import { cn } from "#/lib/cn.ts";
import { Tooltip } from "#/components/shared/Tooltip.tsx";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  useDropdownMenu,
} from "#/components/shared/DropdownMenu.tsx";

const menuLinkClassName = "block px-3 py-1.5 text-sm text-text2 no-underline";

function LibraryMenu({ currentId }: { currentId: "form" | "store" }) {
  const { open } = useDropdownMenu();
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (open) {
      (contentRef.current?.firstElementChild as HTMLElement | undefined)
        ?.focus();
    }
  }, [open]);

  return (
    <DropdownMenuContent ref={contentRef} align="left" className="w-40 py-1">
      {libraries.map((library) => (
        <DropdownMenuItem key={library.id} asChild>
          <Link
            to={library.base}
            className={cn(
              menuLinkClassName,
              library.id === currentId && "font-semibold text-brand1",
            )}
          >
            {library.title}
          </Link>
        </DropdownMenuItem>
      ))}
      <div className="my-1 border-t border-border" />
      <DropdownMenuItem asChild>
        <Link to="/" className={menuLinkClassName}>kintools.dev</Link>
      </DropdownMenuItem>
    </DropdownMenuContent>
  );
}

// A dropdown next to the docs title that jumps between kintools libraries.
// The title itself still links to the current library's home; this only
// adds the "switch to a different library" affordance next to it.
export function LibrarySwitcher(
  { currentId }: { currentId: "form" | "store" },
) {
  return (
    <DropdownMenu>
      <Tooltip content="Switch library">
        <DropdownMenuTrigger
          label="Switch library"
          className="flex h-6 w-6 items-center justify-center rounded text-text3 hover:bg-bg-hover hover:text-brand1"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            aria-hidden="true"
          >
            <path
              d="M5 8l5 5 l5-5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </DropdownMenuTrigger>
      </Tooltip>
      <LibraryMenu currentId={currentId} />
    </DropdownMenu>
  );
}
