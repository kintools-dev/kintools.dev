import type { ReactNode } from "react";
import { Table, type TableColumn } from "#/components/shared/Table.tsx";

type Competitor = "rhf" | "formik" | "tanstack";

interface Row extends Record<Competitor, string[]> {
  label: string;
  kin: string[];
}

const rows: Row[] = [
  {
    label: "Types",
    kin: ["FieldApi", "FormApi"],
    rhf: [
      "FieldValues",
      "FieldPath",
      "FieldPathByValue",
      "Control",
      "UseControllerProps",
      "RegisterOptions",
    ],
    formik: ["FormikProps", "FormikHelpers", "FormikErrors", "FieldProps"],
    tanstack: ["AnyFieldApi"],
  },
  {
    label: "Hooks & components",
    kin: ["useForm", "useWatch", "Watch", "useMultistep"],
    rhf: [
      "useForm",
      "useController",
      "Controller",
      "useFieldArray",
      "useWatch",
      "useFormState",
      "useFormContext",
      "FormProvider",
    ],
    formik: [
      "useFormik",
      "Formik",
      "useField",
      "Field",
      "FieldArray",
      "useFormikContext",
      "ErrorMessage",
    ],
    tanstack: [
      "useForm",
      "useAppForm",
      "useField",
      "useFieldContext",
      "useStore",
      "form.Field",
      "form.AppField",
      "form.FormGroup",
      "form.Subscribe",
      "withForm",
      "withFieldGroup",
      "createFormHook",
      "createFormHookContexts",
    ],
  },
];

const competitors: { key: Competitor; header: string }[] = [
  { key: "rhf", header: "React Hook Form" },
  { key: "formik", header: "Formik" },
  { key: "tanstack", header: "TanStack Form" },
];

function CodeList({ items }: { items: string[] }): ReactNode {
  if (items.length === 0) {
    return <span className="text-text3">—</span>;
  }

  return (
    <div className="flex flex-col items-start gap-1">
      {items.map((item) => <code key={item}>{item}</code>)}
    </div>
  );
}

const labelClassName = "max-w-28 align-top text-text2";
const kinCellClassName = "align-top text-brand1 font-bold";
const cellClassName = "align-top";

/**
 * A table of the types and hooks/components a typical app actually works with
 * in each library, so readers can compare how much they'd have to learn
 * rather than being told about it.
 *
 * Not an exhaustive list of every public export: each cell is filtered to
 * symbols an app author works with by name in normal use (a reusable field
 * component, an `onSubmit` signature), the same bar applied to every column.
 */
export function ApiSurfaceMatrix() {
  const columns: TableColumn<Row>[] = [
    {
      key: "label",
      header: "",
      headerClassName: labelClassName,
      cell: (row) => row.label,
      cellClassName: () => labelClassName,
    },
    {
      key: "kin",
      header: "Kin Form",
      headerClassName: "whitespace-nowrap text-brand1 font-bold",
      cell: (row) => <CodeList items={row.kin} />,
      cellClassName: () => kinCellClassName,
    },
    ...competitors.map(
      ({ key, header }): TableColumn<Row> => ({
        key,
        header,
        headerClassName: "whitespace-nowrap",
        cell: (row) => <CodeList items={row[key]} />,
        cellClassName: () => cellClassName,
      }),
    ),
  ];

  return <Table columns={columns} rows={rows} rowKey={(row) => row.label} />;
}
