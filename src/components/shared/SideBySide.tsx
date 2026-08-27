import type * as React from "react";
import { useEffect, useRef, useState } from "react";
import { SideBySideProvider } from "./side-by-side-context.ts";
import { cn } from "#/lib/cn.ts";

// Wraps a <CodeGroup>, adding a fullscreen toggle that lays its tabs out
// side by side instead of switching between them (see
// side-by-side-context.ts for how CodeGroup learns it should do that).
export function SideBySide({ children }: { children?: React.ReactNode }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    function handleFullscreenChange(): void {
      setIsFullscreen(document.fullscreenElement === el);
    }
    document.addEventListener("fullscreenchange", handleFullscreenChange);
    return () =>
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
  }, []);

  function toggle(): void {
    if (document.fullscreenElement) {
      document.exitFullscreen();
    } else {
      containerRef.current?.requestFullscreen();
    }
  }

  return (
    <div
      ref={containerRef}
      className={`relative ${isFullscreen ? "overflow-y-auto bg-bg px-2" : ""}`}
    >
      <button
        type="button"
        className={cn(
          "z-20 cursor-pointer rounded-md px-4 py-1.5",
          "bg-brand1 text-sm font-medium text-bg hover:bg-brand2",
          isFullscreen ? "fixed top-2 right-5" : "absolute top-1 right-1",
        )}
        aria-label="Toggle fullscreen"
        onClick={toggle}
      >
        {isFullscreen ? "Exit" : "View side by side"}
      </button>
      <SideBySideProvider value={isFullscreen}>{children}</SideBySideProvider>
    </div>
  );
}
