import { useEffect, useState } from "react";
import { cn } from "#/lib/cn.ts";

interface TocItem {
  id: string;
  text: string;
  level: 2 | 3;
}

/**
 * The docs page's "on this page" table of contents: every `h2`/`h3` in the
 * active page's rendered content, with the currently-visible section
 * highlighted as the reader scrolls.
 *
 * Reads headings straight from the DOM (via `contentRef`) rather than from
 * MDX build output, since `rehypeSlug` (see vite.config.ts) already gives
 * every heading the stable `id` this component links to.
 */
export function DocsToc({
  activePath,
  contentRef,
}: {
  activePath: string;
  contentRef: React.RefObject<HTMLElement | null>;
}) {
  const [items, setItems] = useState<TocItem[]>([]);
  const [activeId, setActiveId] = useState("");

  // Re-scan whenever the active page changes -- by the time `DocsLayout`
  // renders `children`, the MDX module is already resolved (see
  // page-cache.ts), so the headings are present in the DOM on first paint.
  useEffect(() => {
    const container = contentRef.current;
    if (!container) return;

    const headings = Array.from(
      container.querySelectorAll<HTMLHeadingElement>("h2[id], h3[id]"),
    );
    setItems(
      headings.map((heading) => ({
        id: heading.id,
        text: heading.textContent.slice(1),
        level: heading.tagName === "H2" ? 2 : 3,
      })),
    );
  }, [activePath, contentRef]);

  // Scrollspy: the active heading is the first one fully visible. If no heading
  // is fully visible and user scrolled to the bottom, the last heading will be
  // chosen.
  useEffect(() => {
    if (items.length === 0) return;

    const headings = items
      .map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => el !== null);
    if (headings.length === 0) return;

    // Matches the header's height (`top-14`) plus a little breathing room,
    // and stays in step with `.docs h2/h3`'s own `scroll-mt-20`.
    const headerOffset = 72;

    let ticking = false;

    function updateActive() {
      let current = "";

      for (const heading of headings) {
        if (heading.getBoundingClientRect().top > headerOffset) {
          current = heading.id;
          break;
        }
      }

      if (current === "") {
        const atBottom = globalThis.scrollY + globalThis.innerHeight >=
          document.documentElement.scrollHeight - 1;
        if (atBottom) {
          current = headings[headings.length - 1].id;
        }
      }

      setActiveId(current);
      ticking = false;
    }

    function onScroll() {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(updateActive);
    }

    updateActive();
    globalThis.addEventListener("scroll", onScroll, { passive: true });
    globalThis.addEventListener("resize", onScroll);
    return () => {
      globalThis.removeEventListener("scroll", onScroll);
      globalThis.removeEventListener("resize", onScroll);
    };
  }, [items]);

  if (items.length === 0) return null;

  return (
    <aside className="sticky top-14 hidden h-[calc(100vh-3.5rem)] shrink-0 basis-52 overflow-y-auto py-8 pl-6 xl:block">
      <h3 className="mb-2 text-xs font-bold tracking-wider text-text3 uppercase">
        On this page
      </h3>
      <ul className="m-0 list-none p-0">
        {items.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              className={cn(
                "block py-1 text-sm no-underline hover:text-brand1",
                item.level === 3 && "pl-4",
                activeId === item.id ? "text-brand1" : "text-text2",
              )}
            >
              {item.text}
            </a>
          </li>
        ))}
      </ul>
    </aside>
  );
}
