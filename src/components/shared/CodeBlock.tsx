import type * as React from "react";
import { useRef, useState } from "react";
import { cn } from "#/lib/cn.ts";

function CopyIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <rect x="9" y="9" width="11" height="11" rx="2" />
      <path d="M5 15V5a2 2 0 0 1 2-2h10" />
    </svg>
  );
}

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="m5 13 4 4L19 7" />
    </svg>
  );
}

/**
 * A fenced code block with a copy-to-clipboard button in its top-right corner.
 *
 * Registered as the `pre` element override for rendered markdown, so every
 * fenced block gets the button, whether standalone or inside a `<CodeGroup>`.
 * The button reveals on hover or keyboard focus and briefly confirms after a
 * successful copy.
 */
export function CodeBlock(props: React.ComponentPropsWithoutRef<"pre">) {
  const ref = useRef<HTMLPreElement>(null);
  const [copied, setCopied] = useState(false);
  const resetTimer = useRef<ReturnType<typeof setTimeout>>(undefined);

  async function copy(): Promise<void> {
    const el = ref.current;
    if (!el) return;

    try {
      await navigator.clipboard.writeText(el.textContent);
      setCopied(true);
      clearTimeout(resetTimer.current);
      resetTimer.current = setTimeout(() => setCopied(false), 2000);
    } catch (e) {
      console.error(e);
      // Clipboard writes reject in insecure contexts or when the permission is
      // denied; leave the button untouched so the user can try again.
    }
  }

  return (
    <div className="group relative">
      <pre {...props} ref={ref} />
      <button
        type="button"
        onClick={copy}
        aria-label={copied ? "Copied" : "Copy code"}
        title={copied ? "Copied" : "Copy code"}
        className={cn(
          "absolute right-2 top-2 flex h-8 w-8 items-center justify-center rounded",
          "border border-border bg-code-bg text-text2 opacity-0 transition-opacity",
          "hover:text-brand1 focus-visible:opacity-100 group-hover:opacity-100",
          copied && "text-brand1 opacity-100",
        )}
      >
        {copied
          ? <CheckIcon className="h-4 w-4" />
          : <CopyIcon className="h-4 w-4" />}
      </button>
    </div>
  );
}
