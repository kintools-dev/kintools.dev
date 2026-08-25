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
      "FieldPath",
      "FieldPathByValue",
      "FieldArrayPath",
      "UseControllerProps",
    ],
    formik: [],
    tanstack: ["FieldApi", "FieldGroupApi", "FormApi"],
  },
  {
    label: "Hooks & components",
    kin: ["useForm", "useWatch", "Watch", "useMultistep"],
    rhf: [
      "useForm",
      "register",
      "useController",
      "Controller",
      "useFieldArray",
      "useWatch",
      "useFormState",
    ],
    formik: [
      "useFormik",
      "Formik",
      "useField",
      "Field",
      "FieldArray",
      "useFormikContext",
    ],
    tanstack: [
      "useForm",
      "useField",
      "Field",
      "useFieldGroup",
      "useFormGroup",
      "FormGroup",
      "useStore",
      "Subscribe",
      "createFormHook",
      "useAppForm",
      "AppField",
      "AppForm",
      "withForm",
      "withFieldGroup",
      "useFormId",
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
 * A table listing every type and hook/component each library exposes, so
 * readers can see the size of the API surface directly rather than being
 * told about it.
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
