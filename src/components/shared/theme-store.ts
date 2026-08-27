import { createStoreWithStorage } from "#/lib/store-with-storage.ts";

export type Theme = "light" | "dark";

// Kept in sync with the inline head script in `__root.tsx`, which reads the
// same key to set `data-theme` before first paint.
const STORAGE_KEY = "kintools:theme";

// `parse` prefers the theme the inline head script in `__root.tsx` already
// resolved onto <html data-theme> before first paint, then the saved
// choice, then the OS preference. `onChange` keeps that attribute
// (global.css keys the palette off it) in step with later changes. On the
// server there is no DOM, so `parse` returns "light"; `ThemeToggle` shows
// that until it mounts, then swaps to the real value.
export const themeStore = createStoreWithStorage<Theme>({
  key: STORAGE_KEY,
  parse: () => {
    if (typeof document === "undefined") return "light";

    const applied = document.documentElement.dataset.theme;
    if (applied === "light" || applied === "dark") return applied;

    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === "light" || stored === "dark") return stored;

    return globalThis.matchMedia?.("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  },
  onChange: (theme) => {
    document.documentElement.dataset.theme = theme;
  },
});

/** Flips the theme between light and dark and persists the choice. */
export function toggleTheme(): void {
  themeStore.set((theme) => theme === "dark" ? "light" : "dark");
}
