import { BarChart, type BarChartEntry } from "#/components/shared/BarChart.tsx";

function lib(label: string, value: number, highlight = false): BarChartEntry {
  return { label, value, formatted: `${value.toFixed(1)} ms`, highlight };
}

// Wall-clock, ms, burst=800x, Happy DOM -- the "Flat field update burst"
// scenario from PerformanceCharts.tsx, kept in sync with it (reproduce via
// `deno task --cwd scripts speed-bench` in the form repo).
const bars: BarChartEntry[] = [
  lib("Kin Form", 1.39, true),
  lib("React Hook Form", 66.55),
  lib("Formik", 3.3),
  lib("TanStack Form", 564.24),
];

export function PerformanceHighlight({ title }: { title?: string }) {
  return (
    <div>
      {title && <h4 className="mb-2.5 text-sm font-semibold">{title}</h4>}
      <BarChart bars={bars} />
    </div>
  );
}
