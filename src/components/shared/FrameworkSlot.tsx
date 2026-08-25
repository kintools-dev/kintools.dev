import type * as React from "react";

// Marker component: one framework's content inside a <FrameworkText>.
// `name` is read off this element's props by FrameworkText (via
// React.Children). form/docs and store/docs author this directly, in place
// of Vue's `<template #name>` syntax.
export function FrameworkSlot({
  children,
}: {
  name: string;
  children?: React.ReactNode;
}) {
  return <>{children}</>;
}
