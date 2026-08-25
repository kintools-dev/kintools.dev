import type { ReactNode } from "react";
import { Table, type TableColumn } from "#/components/shared/Table.tsx";
import { Tooltip } from "#/components/shared/Tooltip.tsx";

type Competitor = "rhf" | "formik" | "tanstack";

type Notes = Partial<Record<Competitor, ReactNode>> & { kin?: ReactNode };

interface Row extends Record<Competitor, string> {
  label: string;
  kin: string;
  trimmed?: boolean;
  notes?: Notes;
}

const rows: Row[] = [
  {
    label: "Zero dependencies",
    kin: "✅",
    rhf: "✅",
    formik: "❌",
    tanstack: "⚠️",
    trimmed: true,
    notes: {
      formik: (
        <>
          Depends on <code>lodash</code>, <code>deepmerge</code>,{" "}
          <code>hoist-non-react-statics</code>, and more.
        </>
      ),
      tanstack: (
        <>
          <code>form-core</code> depends on <code>@tanstack/store</code>{" "}
          for its reactivity model.
        </>
      ),
    },
  },
  {
    label: "Framework-agnostic core",
    kin: "✅",
    rhf: "❌",
    formik: "❌",
    tanstack: "✅",
  },
  {
    label: "Type-safe nested field paths",
    kin: "✅",
    rhf: "⚠️",
    formik: "❌",
    tanstack: "✅",
    trimmed: true,
    notes: {
      rhf: (
        <>
          <code>Path&lt;T&gt;</code>{" "}
          checks literal names at the call site, but composing reusable
          components across generic parents needs <code>FieldPathByValue</code>
          {" "}
          casts.
        </>
      ),
      formik: (
        <>
          <code>name</code> is a plain string — no compile-time path checking.
        </>
      ),
    },
  },
  {
    label: "Standard Schema support",
    kin: "⚠️",
    rhf: "⚠️",
    formik: "❌",
    tanstack: "✅",
    notes: {
      kin: (
        <>
          Via <code>toSchemaValidator()</code> from{" "}
          <code>@kin-form/validators</code> package.
        </>
      ),
      rhf: (
        <>
          Via <code>standardSchemaResolver()</code> from{" "}
          <code>@hookform/resolvers</code> package.
        </>
      ),
    },
  },
  {
    label: "Same primitive for field, group, array, and form",
    kin: "✅",
    rhf: "❌",
    formik: "❌",
    tanstack: "❌",
    notes: {
      kin: (
        <>
          <code>FormApi</code> extends <code>FieldApi</code>{" "}
          — the form root is a field, not a separate object model. Every node
          shares the same{" "}
          <code>value</code>/<code>error</code>/<code>touched</code>/
          <code>subscribe</code> surface.
        </>
      ),
      rhf: (
        <>
          <code>Control</code>, <code>useFieldArray</code>, and{" "}
          <code>useFormState</code>{" "}
          are separate, unrelated APIs for group/array/form-level state.
        </>
      ),
      formik: (
        <>
          <code>Field</code>, <code>FieldArray</code>, and{" "}
          <code>useFormikContext</code>{" "}
          are separate primitives with different props.
        </>
      ),
      tanstack: (
        <>
          <code>FieldApi</code>, <code>FieldGroupApi</code>, and{" "}
          <code>FormApi</code>{" "}
          are distinct types with separate hooks/components and no shared base.
        </>
      ),
    },
  },
  {
    label: "Localized subscription",
    kin: "✅",
    rhf: "❌",
    formik: "❌",
    tanstack: "❌",
    notes: {
      rhf: (
        <>
          One shared <code>Subject</code> on <code>control</code>{" "}
          holds every subscriber — each{" "}
          <code>useWatch</code>/<code>useFormState</code>{" "}
          callback runs on every state change and decides for itself whether to
          re-render.
        </>
      ),
      formik: (
        <>
          One shared context holds all state — every consumer (
          <code>useField</code>/<code>connect</code>) re-renders on any change
          unless wrapped in <code>React.memo</code>.
        </>
      ),
      tanstack: (
        <>
          <code>FieldApi</code>/<code>FieldGroupApi</code> read from one shared
          {" "}
          <code>@tanstack/store</code>{" "}
          — every mutation notifies every subscriber, each one running its own
          selector to decide whether to re-render.
        </>
      ),
    },
  },
  {
    label: "Selective re-rendering",
    kin: "✅",
    rhf: "⚠️",
    formik: "⚠️",
    tanstack: "✅",
    notes: {
      rhf: (
        <>
          <code>useWatch</code>'s <code>compute</code>{" "}
          option narrows the watched value, deduped by deep-equal, but there's
          no equivalent for <code>error</code>/<code>touched</code>{" "}
          — those come from a separate <code>useFormState</code>{" "}
          subscription with no narrowing of its own.
        </>
      ),
      formik: (
        <>
          No selector to narrow further — <code>useField</code>{" "}
          re-renders on any change to that field's whole meta object.
        </>
      ),
    },
  },
  {
    label: "Built-in async-validation debounce",
    kin: "✅",
    rhf: "❌",
    formik: "❌",
    tanstack: "✅",
    trimmed: true,
  },
  {
    label: "Declarative cross-field revalidation",
    kin: "✅",
    rhf: "⚠️",
    formik: "❌",
    tanstack: "✅",
    notes: {
      rhf: (
        <>
          Possible via <code>watch()</code> +{" "}
          <code>trigger()</code>, but wired up by hand, not declared.
        </>
      ),
    },
  },
  {
    label: "Field state survives list virtualization",
    kin: "✅",
    rhf: "⚠️",
    formik: "✅",
    tanstack: "✅",
    notes: {
      kin: (
        <>
          A field's state lives on its <code>FieldApi</code>{" "}
          node, not in the DOM. A recycled row re-subscribes to the same node
          and renders whatever's already there.
        </>
      ),
      rhf: (
        <>
          Only the value resets, not the rest of the state.{" "}
          <code>register()</code>{" "}
          reads it off the DOM node, so a recycled row needs it restored by hand
          via <code>getValues()</code>.{" "}
          <code>dirtyFields</code>/<code>touchedFields</code>/
          <code>errors</code> live in <code>formState</code>{" "}
          and survive on their own.
        </>
      ),
    },
  },
];

const competitors: { key: Competitor; header: string }[] = [
  { key: "rhf", header: "React Hook Form" },
  { key: "formik", header: "Formik" },
  { key: "tanstack", header: "TanStack Form" },
];

const nameClassName = "whitespace-normal text-text2";

export function FeatureMatrix({ full = false }: { full?: boolean }) {
  const visibleRows = full ? rows : rows.filter((r) => r.trimmed);

  const columns: TableColumn<Row>[] = [
    {
      key: "label",
      header: "Features",
      headerClassName: nameClassName,
      cell: (row) => row.label,
      cellClassName: () => nameClassName,
    },
    {
      key: "kin",
      header: "Kin Form",
      align: "center",
      headerClassName: "whitespace-nowrap text-brand1 font-bold",
      cell: (row) => <Tooltip content={row.notes?.kin}>{row.kin}</Tooltip>,
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
          `whitespace-nowrap ${row[key] === "—" ? "text-text3" : ""}`,
      }),
    ),
  ];

  return (
    <div className="flex flex-col">
      <Table columns={columns} rows={visibleRows} rowKey={(row) => row.label} />
      <p className="mx-auto my-3 max-w-[74ch] text-center text-xs text-text2">
        ✅ full support · ⚠️ partial or conditional · ❌ not supported
      </p>
    </div>
  );
}
