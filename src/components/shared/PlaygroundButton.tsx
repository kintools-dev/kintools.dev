import type * as React from "react";
import { Children, isValidElement } from "react";
import { useStore } from "@kintools/store-react";
import { frameworks, frameworkStore } from "./framework-store.ts";
import { SplitButton, type SplitButtonOption } from "./SplitButton.tsx";

/**
 * A "Try it live" link that follows the page's shared framework selection
 * (`frameworkStore`), with a dropdown -- driven by the full `frameworks`
 * list, not hardcoded to today's two bindings -- for opening any other
 * framework's target directly. Picking one from the dropdown also updates
 * `frameworkStore`, so every CodeGroup and FrameworkText on the page
 * switches with it.
 *
 * Children are `<PlaygroundLink name="..." href="...">` entries, one per
 * framework this page has a target for. A page that only ships one
 * binding's example just omits the rest, and the dropdown (and its chevron,
 * hidden by SplitButton when there's nothing else to pick) reflects that.
 */
export function PlaygroundButton({
  label = "Try it live",
  variant = "button",
  children,
}: {
  label?: string;
  variant?: "button" | "text";
  children?: React.ReactNode;
}) {
  const framework = useStore(frameworkStore);

  const links = Children.toArray(children).filter(
    isValidElement,
  ) as React.ReactElement<{ name: string; href: string }>[];
  const ordered = frameworks
    .map((fw) => ({ fw, link: links.find((l) => l.props.name === fw.id) }))
    .filter(
      (
        entry,
      ): entry is {
        fw: typeof frameworks[number];
        link: NonNullable<typeof entry.link>;
      } => entry.link !== undefined,
    );
  const active = ordered.find((entry) => entry.fw.id === framework) ??
    ordered[0];

  if (!active) return null;

  const options: SplitButtonOption[] = ordered.map(({ fw, link }) => ({
    label: fw.label,
    href: link.props.href,
    value: fw.id,
  }));

  return (
    <SplitButton
      variant={variant}
      label={
        <>
          {label} ({active.fw.label}){variant === "text" && " →"}
        </>
      }
      href={active.link.props.href}
      options={options}
      onSelect={(option) =>
        frameworkStore.set(option.value as typeof framework)}
    />
  );
}
