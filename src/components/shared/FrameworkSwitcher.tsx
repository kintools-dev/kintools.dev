import { frameworks, useFramework } from "./framework-store.ts";

// Rendered by DocsLayout itself (form docs only), not invoked from markdown
// -- the original site mounted this in the sidebar via Layout.vue.
export function FrameworkSwitcher() {
  const [framework, setFramework] = useFramework();

  return (
    <div className="mb-4 flex flex-col gap-2 border-b border-border pb-4">
      <label
        htmlFor="framework-select"
        className="text-xs font-semibold text-text2 uppercase"
      >
        Framework:
      </label>
      <select
        id="framework-select"
        value={framework}
        onChange={(event) =>
          setFramework(event.target.value as (typeof frameworks)[number]["id"])}
        className="h-8 w-full rounded-md border border-border bg-bg-soft px-2.5 text-text1"
      >
        {frameworks.map((fw) => (
          <option key={fw.id} value={fw.id}>
            {fw.label}
          </option>
        ))}
      </select>
    </div>
  );
}
