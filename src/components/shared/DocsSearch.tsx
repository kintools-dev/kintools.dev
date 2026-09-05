import { useNavigate } from "@tanstack/react-router";
import type MiniSearch from "minisearch";
import type * as React from "react";
import { useEffect, useRef, useState } from "react";
import type { SearchDoc } from "#/content/search-index.ts";
import { loadSearchIndex } from "#/content/search-index.ts";
import { cn } from "#/lib/cn.ts";

interface ResultRow {
  id: string;
  title: string;
  heading: string;
  path: string;
  anchor: string;
}

const MAX_RESULTS = 8;

// The docs header's search trigger and its `Ctrl/Cmd+K` command-palette
// dialog. Indexes only the current library's own docs (`project`), matching
// the sidebar/nav, which are scoped the same way.
export function DocsSearch({ project }: { project: "form" | "store" }) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<ResultRow[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const indexRef = useRef<MiniSearch<SearchDoc> | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setOpen((value) => !value);
      }
    }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, []);

  useEffect(() => {
    if (!open) return;

    setQuery("");
    setResults([]);
    setActiveIndex(0);
    inputRef.current?.focus();

    loadSearchIndex(project).then((miniSearch) => {
      indexRef.current = miniSearch;
    });

    document.body.style.overflow = "hidden";

    function onPointerDown(event: PointerEvent) {
      if (!dialogRef.current?.contains(event.target as Node)) setOpen(false);
    }
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.removeProperty("overflow");
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open, project]);

  function runSearch(value: string) {
    value = value.trim();
    setQuery(value);
    setActiveIndex(0);
    const miniSearch = indexRef.current;

    if (!miniSearch || value === "") {
      setResults([]);
      return;
    }

    setResults(
      miniSearch.search(value).slice(0, MAX_RESULTS).map((result) => ({
        id: String(result.id),
        title: result.title,
        heading: result.heading,
        path: result.path,
        anchor: result.anchor,
      })),
    );
  }

  function selectResult(row: ResultRow) {
    navigate({ to: row.path, hash: row.anchor || undefined });
    setOpen(false);
  }

  function onInputKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.key === "ArrowDown") {
      event.preventDefault();
      setActiveIndex((index) => Math.min(index + 1, results.length - 1));
    } else if (event.key === "ArrowUp") {
      event.preventDefault();
      setActiveIndex((index) => Math.max(index - 1, 0));
    } else if (event.key === "Enter" && results[activeIndex]) {
      event.preventDefault();
      selectResult(results[activeIndex]);
    }
  }

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Search docs"
        className="flex h-8 w-9 items-center justify-center gap-2 rounded-md border border-border bg-bg-soft px-2.5 text-sm text-text3 hover:border-text3 sm:w-56 sm:justify-start"
      >
        <SearchIcon className="h-4 w-4 shrink-0" />
        <span className="hidden flex-1 text-left sm:inline">Search docs</span>
        <kbd className="hidden rounded border border-border bg-bg px-1.5 py-0.5 font-sans text-xs text-text3 sm:inline">
          Ctrl K
        </kbd>
      </button>

      {open && (
        <div className="fixed inset-0 z-50 flex items-start justify-center bg-black/40 px-4 pt-[15vh]">
          <div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-label="Search docs"
            className="w-full max-w-lg overflow-hidden rounded-lg border border-border bg-bg-elv shadow-modal"
          >
            <div className="flex items-center gap-2 border-b border-border px-3">
              <SearchIcon className="h-4 w-4 shrink-0 text-text3" />
              <input
                ref={inputRef}
                value={query}
                onChange={(event) => runSearch(event.target.value)}
                onKeyDown={onInputKeyDown}
                placeholder="Search docs"
                className="h-12 flex-1 bg-transparent text-sm text-text1 outline-none placeholder:text-text3"
              />
            </div>

            {results.length > 0 && (
              <ul className="max-h-[60vh] overflow-y-auto py-2">
                {results.map((row, index) => (
                  <li key={row.id}>
                    <button
                      type="button"
                      onClick={() => selectResult(row)}
                      onMouseEnter={() => setActiveIndex(index)}
                      className={cn(
                        "flex w-full flex-col items-start gap-0.5 px-3 py-2 text-left",
                        index === activeIndex ? "bg-bg-active" : "",
                      )}
                    >
                      <span className="text-sm text-text1">
                        {row.heading || row.title}
                      </span>
                      {row.heading && (
                        <span className="text-xs text-text3">
                          {row.title}
                        </span>
                      )}
                    </button>
                  </li>
                ))}
              </ul>
            )}

            {query !== "" && results.length === 0 && (
              <p className="px-3 py-6 text-center text-sm text-text3">
                No results for "{query}"
              </p>
            )}
          </div>
        </div>
      )}
    </>
  );
}

function SearchIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className={className}
      aria-hidden="true"
    >
      <circle cx="9" cy="9" r="6" />
      <path d="M17 17l-4-4" strokeLinecap="round" />
    </svg>
  );
}
