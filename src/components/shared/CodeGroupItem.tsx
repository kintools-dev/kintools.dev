import type * as React from "react";

// Marker component: one tab's content inside a <CodeGroup>. `label` is read
// off this element's props by CodeGroup itself (via React.Children), so this
// component's own render is just a passthrough.
export function CodeGroupItem({
  children,
}: {
  label: string;
  children?: React.ReactNode;
}) {
  return <>{children}</>;
}
