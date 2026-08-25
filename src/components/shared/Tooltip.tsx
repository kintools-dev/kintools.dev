import type * as React from "react";
import { useId, useLayoutEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

const VIEWPORT_MARGIN = 8;
const GAP = 8;

/**
 * A hover/focus tooltip whose bubble renders into `document.body` (React's
 * direct equivalent of Vue's `<Teleport to="body">`), positioned in
 * viewport space so it can't be clipped by an ancestor's `overflow: auto`
 * scroll container. The bubble only mounts while visible.
 *
 * It mounts at a naive spot above the trigger, then a layout effect
 * measures its actual rendered size and settles it into its final position
 * (horizontally clamped to the viewport width, flipped below the trigger if
 * it would otherwise overflow the top) before the browser paints.
 */
export function Tooltip({
  content,
  children,
}: {
  content?: React.ReactNode;
  children?: React.ReactNode;
}) {
  const bubbleId = useId();
  const triggerRef = useRef<HTMLDivElement>(null);
  const bubbleRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [pos, setPos] = useState({ top: 0, left: 0 });

  if (!content) return <>{children}</>;

  function show(): void {
    setVisible(true);
  }

  function hide(): void {
    setVisible(false);
  }

  useLayoutEffect(() => {
    if (!visible) return;

    const bubbleRect = bubbleRef.current?.getBoundingClientRect();
    const triggerRect = triggerRef.current?.getBoundingClientRect();

    if (!bubbleRect || !triggerRect) return;

    const centerX = triggerRect.left + triggerRect.width / 2;
    const left = Math.min(
      Math.max(centerX - bubbleRect.width / 2, VIEWPORT_MARGIN),
      window.innerWidth - bubbleRect.width - VIEWPORT_MARGIN,
    );
    let top = triggerRect.top - bubbleRect.height - GAP;
    if (top < VIEWPORT_MARGIN) top = triggerRect.bottom + GAP;
    setPos({ top, left });
  }, [visible]);

  return (
    <>
      <div
        ref={triggerRef}
        className="inline-block cursor-help"
        tabIndex={0}
        aria-describedby={bubbleId}
        onMouseEnter={show}
        onMouseLeave={hide}
        onFocus={show}
        onBlur={hide}
      >
        {children}
      </div>
      {visible &&
        typeof document !== "undefined" &&
        createPortal(
          <div
            ref={bubbleRef}
            id={bubbleId}
            role="tooltip"
            className="fixed z-9999 w-max max-w-sm rounded-md border border-border bg-bg-elv px-2.5 py-2 text-left text-sm shadow-popover"
            style={{
              top: `${pos.top}px`,
              left: `${pos.left}px`,
            }}
          >
            {content}
          </div>,
          document.body,
        )}
    </>
  );
}
