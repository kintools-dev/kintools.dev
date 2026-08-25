import { Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { libraries } from "#/content/libraries.ts";
import { Tooltip } from "#/components/shared/Tooltip.tsx";

const menuLinkClassName =
  "block px-3 py-1.5 text-sm text-text2 no-underline hover:bg-bg-soft hover:text-brand1";

// A dropdown next to the docs title that jumps between kintools libraries.
// The title itself still links to the current library's home; this only
// adds the "switch to a different library" affordance next to it.
export function LibrarySwitcher(
  { currentId }: { currentId: "form" | "store" },
) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  const closeMenu = () => setOpen(false);

  useEffect(() => {
    if (!open) return;

    (rootRef.current?.lastElementChild?.firstElementChild as
      | HTMLElement
      | undefined)?.focus();
    function onPointerDown(event: PointerEvent): void {
      if (!rootRef.current?.contains(event.target as Node)) setOpen(false);
    }
    document.addEventListener("pointerdown", onPointerDown);
    return () => document.removeEventListener("pointerdown", onPointerDown);
  }, [open]);

  return (
    <div ref={rootRef} className="relative flex">
      <Tooltip content="Switch library">
        <button
          type="button"
          aria-label="Switch library"
          aria-expanded={open}
          aria-haspopup="menu"
          onClick={() => setOpen((value) => !value)}
          className="flex h-6 w-6 items-center justify-center rounded text-text3 hover:bg-bg-soft hover:text-brand1"
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
        </button>
      </Tooltip>
      {open && (
        <div
          role="menu"
          className="absolute top-full left-0 z-20 mt-2 w-40 rounded-md border border-border bg-bg-elv py-1 shadow-popover"
        >
          {libraries.map((library) => (
            <Link
              key={library.id}
              to={library.base}
              role="menuitem"
              onClick={closeMenu}
              className={`${menuLinkClassName} ${
                library.id === currentId ? "font-semibold text-brand1" : ""
              }`}
            >
              {library.title}
            </Link>
          ))}
          <div className="my-1 border-t border-border" />
          <Link
            to="/"
            role="menuitem"
            onClick={closeMenu}
            className={menuLinkClassName}
          >
            kintools.dev
          </Link>
        </div>
      )}
    </div>
  );
}
