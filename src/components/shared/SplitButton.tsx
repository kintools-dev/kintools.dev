import type * as React from "react";
import { cn } from "#/lib/cn.ts";
import { Button } from "./Button.tsx";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./DropdownMenu.tsx";

export type SplitButtonOption = {
  label: string;
  href: string;
  value?: unknown;
};

const base = "inline-flex items-center font-bold text-sm leading-5";
const buttonTone = "border border-border text-text1 hover:border-text1";
const textTone = "text-brand1 hover:text-brand2";

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
      <path d="m5 7.5 5 5 5-5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/**
 * A link with a dropdown of alternative destinations: the main segment goes
 * straight to `href`, and (when `options` isn't empty) a chevron segment
 * opens a menu of every option, each an equally direct link of its own.
 * Purely generic UI -- no notion of what the options represent lives here.
 */
export function SplitButton({
  label,
  href,
  options,
  variant = "button",
  onSelect,
}: {
  label: React.ReactNode;
  href: string;
  options: SplitButtonOption[];
  variant?: "button" | "text";
  onSelect?: (option: SplitButtonOption) => void;
}) {
  const hasOptions = options.length > 0;

  const mainButton = (
    <Button
      asChild
      variant={variant === "button" ? "secondary" : "text"}
      className={variant === "button" && hasOptions
        ? "rounded-r-none"
        : undefined}
    >
      <a href={href} target="_blank" rel="noreferrer">{label}</a>
    </Button>
  );

  if (!hasOptions) return mainButton;

  const tone = variant === "button" ? buttonTone : textTone;

  return (
    <DropdownMenu>
      {mainButton}
      <DropdownMenuTrigger
        label="More options"
        className={cn(
          base,
          tone,
          "justify-center transition-colors",
          variant === "button" ? "rounded rounded-l-none px-2 py-2.5" : "px-1",
        )}
      >
        <ChevronIcon className="h-4 w-4" />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="flex w-32 flex-col gap-1 p-1 text-sm">
        {options.map((option) => (
          <DropdownMenuItem
            key={option.label}
            href={option.href}
            external
            onSelect={() => onSelect?.(option)}
            className="rounded px-2 py-1.5 text-text1 no-underline"
          >
            {option.label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
