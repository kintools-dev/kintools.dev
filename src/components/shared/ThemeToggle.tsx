import { useEffect, useState } from "react";
import { useStore } from "@kintools/store-react";
import { cn } from "#/lib/cn.ts";
import { themeStore, toggleTheme } from "./theme-store.ts";

function SunIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      className={className}
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
    </svg>
  );
}

function MoonIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M21 12.79A9 9 0 1 1 11.21 3a7 7 0 0 0 9.79 9.79Z" />
    </svg>
  );
}

/**
 * A header button that switches the site between its light and dark themes.
 *
 * The choice is saved to `localStorage` and mirrored onto
 * `document.documentElement`'s `dark`/`light` class, which an inline script
 * in the document head has already applied once before first paint. With no
 * saved choice the site follows the OS preference at load time.
 */
export function ThemeToggle({ className }: { className?: string }) {
  const theme = useStore(themeStore);

  // The server has no DOM to read a theme from, so it renders the "light"
  // button. Match that until mounted, then reflect the real theme; the page
  // colors themselves are already correct via the head script.
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const shown = mounted ? theme : "light";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={shown === "dark"
        ? "Switch to light theme"
        : "Switch to dark theme"}
      className={cn(
        "flex h-8 w-8 items-center justify-center rounded text-text2 hover:bg-bg-hover hover:text-brand1",
        className,
      )}
    >
      {shown === "dark"
        ? <SunIcon className="h-5 w-5" />
        : <MoonIcon className="h-5 w-5" />}
    </button>
  );
}
