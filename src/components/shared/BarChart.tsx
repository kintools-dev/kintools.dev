export interface BarChartEntry {
  label: string;
  value: number;
  formatted: string;
  highlight?: boolean;
  /** Full name for the hover tooltip, if `label` is itself abbreviated. */
  full?: string;
}

export function BarChart({ bars }: { bars: BarChartEntry[] }) {
  const max = Math.max(...bars.map((b) => b.value), 1e-9);

  return (
    <div className="relative flex h-50 gap-3">
      <div className="absolute right-0 bottom-8.25 left-0 h-px bg-border" />
      {bars.map((bar) => (
        <div
          key={bar.label}
          className="flex min-w-0 flex-1 flex-col items-center"
          title={`${bar.full ?? bar.label}: ${bar.formatted}`}
        >
          <div className="mx-auto flex w-full max-w-14 flex-1 flex-col items-center justify-end">
            <span className="mb-1 text-xs font-semibold">
              {bar.formatted}
            </span>
            <div
              className={`w-full max-w-10 min-h-1 rounded-t [transition:height_0.3s_ease] ${
                bar.highlight ? "bg-brand2" : "bg-text1/20"
              }`}
              style={{ height: `${(bar.value / max) * 100}%` }}
            />
          </div>
          <span className="mt-1.5 h-7 text-center text-xs text-text2">
            {bar.label}
          </span>
        </div>
      ))}
    </div>
  );
}
