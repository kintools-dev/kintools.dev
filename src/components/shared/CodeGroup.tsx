import type * as React from "react";
import { Children, isValidElement, useState } from "react";
import { frameworks, useFramework } from "./framework-store.ts";
import { useSideBySideFullscreen } from "./side-by-side-context.ts";

// Renders a tabbed group of `<CodeGroupItem label="...">` fenced code blocks
// (form/docs and store/docs author these directly, in place of VitePress's
// `::: code-group` syntax). When every tab label matches a known
// framework name ("React"/"Lit"), the active tab is the shared, persisted
// `frameworkStore` selection instead of local state -- mirroring the
// original site's codeGroupSync.ts, which kept every code-group,
// `FrameworkSwitcher`, and `FrameworkText` on a page in sync.
export function CodeGroup({ children }: { children?: React.ReactNode }) {
  const items = Children.toArray(children).filter(
    isValidElement,
  ) as React.ReactElement<{
    label: string;
  }>[];
  const labels = items.map((item) => item.props.label);

  const isFrameworkSynced = labels.length > 0 &&
    labels.every((label) => frameworks.some((fw) => fw.label === label));

  const [framework, setFramework] = useFramework();
  const [localActive, setLocalActive] = useState(0);
  const sideBySideFullscreen = useSideBySideFullscreen();

  const syncedIndex = labels.findIndex(
    (label) => frameworks.find((fw) => fw.label === label)?.id === framework,
  );
  const activeIndex = isFrameworkSynced
    ? Math.max(syncedIndex, 0)
    : localActive;

  function selectTab(index: number): void {
    if (isFrameworkSynced) {
      const fw = frameworks.find((f) => f.label === labels[index]);
      if (fw) setFramework(fw.id);
    } else {
      setLocalActive(index);
    }
  }

  // Side-by-side fullscreen shows every tab at once, so a shared
  // click-to-select tablist above them (still highlighting one as "active")
  // would misrepresent the layout. Each column gets its own static label
  // instead, sized to match the grid below it.
  if (sideBySideFullscreen) {
    return (
      <div className="grid grid-cols-2 gap-4">
        {items.map((item, i) => (
          <div key={labels[i]}>
            <div className="fixed bg-bg w-full border-b border-border py-2 px-4 text-2xl font-bold text-text1">
              {labels[i]}
            </div>
            <div className="mt-10 code-group-panel block">{item}</div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="my-4 overflow-hidden rounded-lg border border-border">
      <div
        className="flex gap-4 px-4 border-b border-border bg-bg-soft"
        role="tablist"
      >
        {labels.map((label, i) => (
          <button
            key={label}
            type="button"
            role="tab"
            aria-selected={i === activeIndex}
            className={`min-w-8 cursor-pointer border-b-2 border-transparent bg-none h-10 text-sm font-semibold ${
              i === activeIndex ? "border-b-brand1 text-brand1" : "text-text2"
            }`}
            onClick={() => selectTab(i)}
          >
            {label}
          </button>
        ))}
      </div>
      {items.map((item, i) => (
        <div
          key={labels[i]}
          className={`code-group-panel ${
            i === activeIndex ? "block" : "hidden"
          }`}
        >
          {item}
        </div>
      ))}
    </div>
  );
}
