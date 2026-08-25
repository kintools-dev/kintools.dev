import type * as React from "react";

// The home page's root container: centers the page content and caps its
// width, matching the rest of the site's reading width.
export function Home({ children }: { children?: React.ReactNode }) {
  return <div className="mx-auto max-w-6xl px-4 sm:px-6">{children}</div>;
}
