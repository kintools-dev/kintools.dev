import type * as React from "react";
import {
  cloneElement,
  createContext,
  isValidElement,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { cn } from "#/lib/cn.ts";

type DropdownMenuContextValue = {
  open: boolean;
  setOpen: (open: boolean) => void;
};

const DropdownMenuContext = createContext<DropdownMenuContextValue | null>(
  null,
);

// Exposed for a composing menu's own bespoke behavior (e.g. LibrarySwitcher
// autofocusing its first item on open) that the structural pieces below
// don't cover on their own.
export function useDropdownMenu(): DropdownMenuContextValue {
  const context = useContext(DropdownMenuContext);
  if (!context) {
    throw new Error("useDropdownMenu must be used within a <DropdownMenu>");
  }
  return context;
}

/**
 * The open/dismiss behavior behind every button-triggered popover menu on
 * the site: tracks `open`, and closes it on an outside pointerdown or
 * Escape. Composes with `DropdownMenuTrigger`, `DropdownMenuContent`, and
 * `DropdownMenuItem` -- each site (a split button's chevron, the library
 * switcher, the mobile nav menu) supplies its own trigger visuals and menu
 * items around this shared shell.
 */
export function DropdownMenu(
  { className, children }: {
    className?: string;
    children?: React.ReactNode;
  },
) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    function onPointerDown(event: PointerEvent): void {
      if (!rootRef.current?.contains(event.target as Node)) setOpen(false);
    }
    function onKeyDown(event: KeyboardEvent): void {
      if (event.key === "Escape") setOpen(false);
    }
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <DropdownMenuContext value={{ open, setOpen }}>
      <div ref={rootRef} className={cn("relative inline-flex", className)}>
        {children}
      </div>
    </DropdownMenuContext>
  );
}

export function DropdownMenuTrigger({
  label,
  className,
  children,
}: {
  label: string;
  className?: string;
  children?: React.ReactNode;
}) {
  const { open, setOpen } = useDropdownMenu();
  return (
    <button
      type="button"
      aria-haspopup="menu"
      aria-expanded={open}
      aria-label={label}
      onClick={() => setOpen(!open)}
      className={className}
    >
      {children}
    </button>
  );
}

export function DropdownMenuContent({
  ref,
  align = "right",
  className,
  children,
}: {
  ref?: React.Ref<HTMLDivElement>;
  align?: "left" | "right";
  className?: string;
  children?: React.ReactNode;
}) {
  const { open } = useDropdownMenu();
  if (!open) return null;
  return (
    <div
      ref={ref}
      role="menu"
      className={cn(
        "absolute top-full z-20 mt-2 rounded-md border border-border bg-bg-elv shadow-popover",
        align === "right" ? "right-0" : "left-0",
        className,
      )}
    >
      {children}
    </div>
  );
}

const itemBase = "hover:bg-bg-hover";

/**
 * One menu entry: an `<a href>` by default, closing the menu (and calling
 * `onSelect`) when clicked. Pass `asChild` with a single child element (a
 * router `<Link>`, `NavLinkItem`, anything already rendering its own
 * interactive element) to apply that same role/click/className/hover
 * handling to it instead of rendering an anchor of its own.
 */
export function DropdownMenuItem({
  href,
  external = false,
  asChild = false,
  onSelect,
  className,
  children,
}: {
  href?: string;
  external?: boolean;
  asChild?: boolean;
  onSelect?: () => void;
  className?: string;
  children?: React.ReactNode;
}) {
  const { setOpen } = useDropdownMenu();

  if (
    isValidElement<
      {
        role?: string;
        onClick?: (event: React.MouseEvent) => void;
        className?: string;
      }
    >(children) && asChild
  ) {
    return cloneElement(children, {
      role: "menuitem",
      onClick: (event: React.MouseEvent) => {
        children.props.onClick?.(event);
        onSelect?.();
        setOpen(false);
      },
      className: cn(itemBase, className, children.props.className),
    });
  }

  return (
    <a
      href={href}
      role="menuitem"
      onClick={() => {
        onSelect?.();
        setOpen(false);
      }}
      className={cn(itemBase, className)}
      {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
    >
      {children}
    </a>
  );
}
