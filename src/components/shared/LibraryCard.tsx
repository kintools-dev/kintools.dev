import { Link } from "@tanstack/react-router";
import type * as React from "react";
import type { LibraryInfo } from "#/content/libraries.ts";
import { cn } from "#/lib/cn.ts";
import { Badge } from "./Badge.tsx";
import { Card } from "./Card.tsx";
import { IconSvg } from "./IconSvg.tsx";
import { Prose } from "./Prose.tsx";
import { Tooltip } from "./Tooltip.tsx";

function FormIcon({ className }: { className?: string }) {
  return (
    <IconSvg className={className}>
      <rect x="4" y="3" width="16" height="18" rx="2" />
      <path d="M8 8h8" />
      <path d="M8 12h8" />
      <path d="M8 16h5" />
    </IconSvg>
  );
}

function StoreIcon({ className }: { className?: string }) {
  return (
    <IconSvg className={className}>
      <ellipse cx="12" cy="5" rx="8" ry="3" />
      <path d="M4 5v6c0 1.7 3.6 3 8 3s8-1.3 8-3V5" />
      <path d="M4 11v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6" />
    </IconSvg>
  );
}

const accentByLibrary: Record<
  LibraryInfo["id"],
  { bar: string; tint: string; icon: React.ReactNode }
> = {
  form: {
    bar: "bg-brand1",
    tint: "bg-brand1/10 text-brand2",
    icon: <FormIcon className="h-5 w-5" />,
  },
  store: {
    bar: "bg-accent-store",
    tint: "bg-accent-store/10 text-accent-store",
    icon: <StoreIcon className="h-5 w-5" />,
  },
};

/**
 * One library's entry in the homepage's Libraries grid. The whole card is a
 * single link -- a separate title link and CTA link to the same place would
 * just be two redundant targets -- with one bundle-size badge per framework
 * the library ships bindings for, since those bindings aren't the same
 * weight.
 */
export function LibraryCard({ library }: { library: LibraryInfo }) {
  const accent = accentByLibrary[library.id];

  return (
    <Link to={library.base} className="group block no-underline">
      <Card className="reveal-on-scroll relative overflow-hidden pt-8 transition-shadow group-hover:shadow-popover">
        <span
          aria-hidden
          className={cn("absolute inset-x-0 top-0 h-1.5", accent.bar)}
        />
        <div
          className={cn(
            "mb-4 flex h-11 w-11 items-center justify-center rounded-xl",
            accent.tint,
          )}
        >
          {accent.icon}
        </div>
        <h3 className="mb-2 text-xl font-semibold text-text1 group-hover:text-brand1">
          {library.title}
        </h3>
        <Prose className="mb-2 font-semibold">{library.tagline}</Prose>
        <Prose>{library.description}</Prose>
        <div className="flex items-center gap-1.5 pt-2">
          {library.bundleSizes.map((entry) => (
            <Badge key={entry.framework} className={accent.tint}>
              {entry.size} | {entry.framework}
            </Badge>
          ))}
          <Tooltip content="Gzipped size of the core plus that framework's binding, measured with rolldown. Doesn't include the framework itself (React, Lit) -- your app already ships that.">
            <span
              aria-label="What these numbers mean"
              // Stops the click from following the card's own link -- this
              // is a tooltip trigger, not a second navigation target.
              onClick={(event) => event.preventDefault()}
              className="flex h-4 w-4 items-center justify-center rounded-full text-xs text-text2 hover:text-brand1"
            >
              ?
            </span>
          </Tooltip>
        </div>
      </Card>
    </Link>
  );
}
