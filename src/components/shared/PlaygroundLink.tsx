// Marker component: one framework's target inside a <PlaygroundButton>.
// Never rendered directly -- PlaygroundButton reads `name`/`href` off each
// element via React.Children, the same way FrameworkSlot's contents are read
// by FrameworkText/CodeGroup.
export function PlaygroundLink(
  { name: _name, href: _href }: { name: string; href: string },
) {
  return null;
}
