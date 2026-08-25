import type { ReactNode } from "react";
import { Table, type TableColumn } from "#/components/shared/Table.tsx";
import { Tooltip } from "#/components/shared/Tooltip.tsx";

type Competitor = "zustand" | "redux" | "jotai" | "mobx";

type Notes = Partial<Record<Competitor, ReactNode>>;

interface Row extends Record<Competitor, string> {
  label: string;
  kin: string;
  trimmed?: boolean;
  notes?: Notes;
}

const rows: Row[] = [
  {
    label: "Bundle size",
    kin: "2.0 KB",
    zustand: "389 B",
    redux: "17.5 KB",
    jotai: "4.0 KB",
    mobx: "15.6 KB",
    trimmed: true,
  },
  {
    label: "Zero dependencies",
    kin: "✅",
    zustand: "✅",
    redux: "❌",
    jotai: "✅",
    mobx: "✅",
    trimmed: true,
  },
  {
    label: "Tiny footprint",
    kin: "✅",
    zustand: "✅",
    redux: "❌",
    jotai: "✅",
    mobx: "❌",
  },
  {
    label: "100% type-safe",
    kin: "✅",
    zustand: "⚠️",
    redux: "⚠️",
    jotai: "✅",
    mobx: "✅",
    trimmed: true,
    notes: {
      zustand: (
        <>
          Requires an explicit type annotation — omit it and state infers as
          {" "}
          <code>any</code>.
        </>
      ),
      redux: (
        <>
          <code>RootState</code> and <code>AppDispatch</code>{" "}
          must be manually exported for types to flow through.
        </>
      ),
    },
  },
  {
    label: "Low boilerplate",
    kin: "✅",
    zustand: "⚠️",
    redux: "❌",
    jotai: "⚠️",
    mobx: "⚠️",
    trimmed: true,
    notes: {
      zustand: "Requires explicit type annotation.",
      jotai: "App logic must be wrapped in atoms rather than plain functions.",
      mobx: (
        <>
          Requires classes, <code>makeAutoObservable</code>,{" "}
          <code>runInAction</code>, and <code>observer</code> wrappers.
        </>
      ),
    },
  },
  {
    label: "Linear plugin composition",
    kin: "✅",
    zustand: "❌",
    redux: "❌",
    jotai: "—",
    mobx: "—",
    notes: {
      jotai: "Atom-based — no plugin system concept.",
      mobx: "Class-based — no plugin system concept.",
    },
  },
  {
    label: "Separate state and logic",
    kin: "✅",
    zustand: "❌",
    redux: "✅",
    jotai: "—",
    mobx: "✅",
    trimmed: true,
    notes: {
      zustand: "State and actions must share one type and one object.",
      jotai:
        "Logic is wrapped in atoms — not structurally separate from state atoms.",
    },
  },
  {
    label: "Opt-in complexity",
    kin: "✅",
    zustand: "✅",
    redux: "❌",
    jotai: "⚠️",
    mobx: "❌",
    trimmed: true,
    notes: {
      jotai:
        "Logic must be wrapped in atoms — there is no plain function style even for simple cases.",
    },
  },
  {
    label: "No hidden magic",
    kin: "✅",
    zustand: "✅",
    redux: "✅",
    jotai: "✅",
    mobx: "❌",
    trimmed: true,
    notes: {
      mobx: (
        <>
          <code>makeAutoObservable</code>{" "}
          silently instruments every field and method; async mutations silently
          break without <code>runInAction</code>.
        </>
      ),
    },
  },
  {
    label: "Reactive composition",
    kin: "✅",
    zustand: "⚠️",
    redux: "❌",
    jotai: "✅",
    mobx: "✅",
    notes: {
      zustand:
        "No built-in derived state primitive — requires 3rd party library.",
    },
  },
];

const competitors: { key: Competitor; header: string }[] = [
  { key: "zustand", header: "Zustand" },
  { key: "redux", header: "Redux / RTK" },
  { key: "jotai", header: "Jotai" },
  { key: "mobx", header: "MobX" },
];

function competitorClassName(row: Row, key: Competitor): string {
  if (row[key] === "—") return "text-text3";
  return "";
}

const legendClassName =
  "mx-auto my-3 max-w-[74ch] text-center text-xs text-text2";

export function FeatureMatrix({ full = false }: { full?: boolean }) {
  const visibleRows = full ? rows : rows.filter((r) => r.trimmed);

  const columns: TableColumn<Row>[] = [
    {
      key: "label",
      header: "",
      headerClassName: "whitespace-normal text-text2",
      cell: (row) =>
        full
          ? (
            row.label
          )
          : (
            <a
              href="/store/comparison"
              className="text-inherit no-underline hover:text-brand1 hover:underline"
            >
              {row.label}
            </a>
          ),
      cellClassName: () => "whitespace-normal text-text2",
    },
    {
      key: "kin",
      header: "Kin Store",
      align: "center",
      headerClassName: "whitespace-nowrap text-brand1 font-bold",
      cell: (row) => row.kin,
      cellClassName: () => "whitespace-nowrap text-brand1 font-bold",
    },
    ...competitors.map(
      ({ key, header }): TableColumn<Row> => ({
        key,
        header,
        align: "center",
        headerClassName: "whitespace-nowrap",
        cell: (row) => <Tooltip content={row.notes?.[key]}>{row[key]}</Tooltip>,
        cellClassName: (row) =>
          `whitespace-nowrap ${competitorClassName(row, key)}`,
      }),
    ),
  ];

  return (
    <div className="flex flex-col">
      <Table columns={columns} rows={visibleRows} rowKey={(row) => row.label} />
      <p className={legendClassName}>
        ✅ full support · ⚠️ partial or conditional · — not applicable
        (different model)
      </p>
      <p className={legendClassName}>
        Bundle sizes are each library's full package import, bundled with
        rolldown, minified, and gzipped. Tree-shaking down to only the APIs you
        use will land smaller across the board.
      </p>
      <p className={legendClassName}>
        Kin Store is new: this table is accurate today, but Redux, Zustand,
        Jotai, and MobX all carry years of production use this library doesn't
        have yet. Try it, and{" "}
        <a href="https://github.com/kintools-dev/store/issues">
          tell us where it breaks
        </a>
        .
      </p>
    </div>
  );
}
