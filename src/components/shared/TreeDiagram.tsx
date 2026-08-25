import type * as React from "react";

// The SVG canvas for one "same value, different shape" tree example --
// `children` are `<TreeEdge>`/`<TreeNode>` elements. `titleId` must be
// unique on the page -- it's the SVG's own accessible name, wired via
// `aria-labelledby`. Pair with a `<TreeCaption>` alongside it.
export function TreeDiagram({
  viewBox,
  titleId,
  title,
  children,
}: {
  viewBox: string;
  titleId: string;
  title: string;
  children?: React.ReactNode;
}) {
  return (
    <svg
      className="block max-h-30 w-full"
      viewBox={viewBox}
      role="img"
      aria-labelledby={titleId}
    >
      <title id={titleId}>{title}</title>
      {children}
    </svg>
  );
}

// One right-angle connector between two `<TreeNode>`s, as an SVG path `d`.
export function TreeEdge({ d }: { d: string }) {
  return <path className="fill-none stroke-border stroke-[1.5]" d={d} />;
}

// One labeled box in a `<TreeDiagram>`: a rounded rect at (x, y), with its
// label centered at (labelX, labelY).
export function TreeNode({
  x,
  y,
  width,
  height,
  label,
  labelX,
  labelY,
}: {
  x: number;
  y: number;
  width: number;
  height: number;
  label: string;
  labelX: number;
  labelY: number;
}) {
  return (
    <>
      <rect
        className="fill-bg stroke-border stroke-[1.5]"
        x={x}
        y={y}
        width={width}
        height={height}
        rx={4}
      />
      <text
        className="fill-text2 font-mono text-[10.5px]"
        x={labelX}
        y={labelY}
        textAnchor="middle"
        dominantBaseline="central"
      >
        {label}
      </text>
    </>
  );
}

// The caption below a `<TreeDiagram>`, explaining what it shows.
export function TreeCaption({ children }: { children?: React.ReactNode }) {
  return (
    <p className="m-0 text-sm text-text2 [&_strong]:font-semibold [&_strong]:text-text1">
      {children}
    </p>
  );
}
