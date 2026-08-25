import type * as React from "react";
import { cn } from "#/lib/cn.ts";

export interface TableColumn<T> {
  key: string;
  header: React.ReactNode;
  align?: "left" | "center" | "right";
  headerClassName?: string;
  cell: (row: T) => React.ReactNode;
  cellClassName?: (row: T) => string | undefined;
}

const alignClasses: Record<
  NonNullable<TableColumn<unknown>["align"]>,
  string
> = {
  left: "text-left",
  center: "text-center",
  right: "text-right",
};

/**
 * A `<table>` rendered from a list of column definitions and rows, so
 * callers describe *what* each column shows instead of hand-writing
 * `<thead>`/`<tr>` markup per table.
 */
export function Table<T>({
  columns,
  rows,
  rowKey,
  className = "",
}: {
  columns: TableColumn<T>[];
  rows: T[];
  rowKey: (row: T) => string;
  className?: string;
}) {
  return (
    <div className="overflow-x-auto">
      <table className={cn("w-full border-collapse text-sm", className)}>
        <thead>
          <tr>
            {columns.map((column) => (
              <th
                key={column.key}
                className={cn(
                  "border-b border-border px-4 py-2.5",
                  alignClasses[column.align ?? "left"],
                  column.headerClassName,
                )}
              >
                {column.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={rowKey(row)}>
              {columns.map((column) => (
                <td
                  key={column.key}
                  className={cn(
                    "border-b border-border px-4 py-2.5",
                    alignClasses[column.align ?? "left"],
                    column.cellClassName?.(row),
                  )}
                >
                  {column.cell(row)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
