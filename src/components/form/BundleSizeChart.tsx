import { BarChart, type BarChartEntry } from "#/components/shared/BarChart.tsx";

// Sorted ascending. Regenerate via `deno task --cwd scripts bundle-size` in
// the form repo and keep in sync with its readme's "Bundle size" table.
const bars: BarChartEntry[] = [
  {
    label: "Kin Form",
    full: "Kin Form (core + react)",
    value: 5.0,
    formatted: "5.0 KB",
    highlight: true,
  },
  { label: "React Hook Form", value: 13.0, formatted: "13.0 KB" },
  { label: "Formik", value: 13.9, formatted: "13.9 KB" },
  {
    label: "TanStack Form",
    full: "@tanstack/react-form",
    value: 18.5,
    formatted: "18.5 KB",
  },
];

export function BundleSizeChart({ title }: { title?: string }) {
  return (
    <div>
      {title && <h4 className="mb-2.5 text-sm font-semibold">{title}</h4>}
      <BarChart bars={bars} />
    </div>
  );
}
