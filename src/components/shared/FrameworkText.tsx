import type * as React from "react";
import { Children, isValidElement } from "react";
import { useStore } from "@kintools/store-react";
import { frameworkStore } from "./framework-store.ts";

// Picks whichever <FrameworkSlot name="..."> child matches the current
// framework selection, falling back to the first slot if none match.
export function FrameworkText({ children }: { children?: React.ReactNode }) {
  const framework = useStore(frameworkStore);
  const slots = Children.toArray(children).filter(
    isValidElement,
  ) as React.ReactElement<{
    name: string;
  }>[];
  const active = slots.find((slot) => slot.props.name === framework) ??
    slots[0];
  return active ?? null;
}
