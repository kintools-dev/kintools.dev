import { createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";
import { seoHead, SITE_NAME } from "#/lib/seo.ts";
// @ts-ignore - CSS URL imports are provided by the bundler/runtime.
import docsCss from "#/styles/docs.css?url";
// @ts-ignore - CSS URL imports are provided by the bundler/runtime.
import appCss from "#/global.css?url";

export const Route = createRootRoute({
  head: () => {
    // Only `meta` is used here, not `links` -- TanStack Router's
    // leaf-over-root head merge dedupes `meta` by name/property (so a
    // page's own title/description cleanly replace these fallbacks), but
    // it does NOT dedupe `links` by `rel`. Spreading this call's canonical
    // link in here would sit alongside every leaf route's own (correct)
    // canonical instead of being replaced by it, leaving two conflicting
    // <link rel="canonical"> tags on every single page.
    const { meta } = seoHead({
      title: SITE_NAME,
      description: "Framework-agnostic TypeScript libraries.",
    });

    return {
      meta: [
        {
          charSet: "utf-8",
        },
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1",
        },
        ...meta,
        {
          name: "robots",
          content: "index, follow",
        },
        {
          property: "og:type",
          content: "website",
        },
        {
          property: "og:site_name",
          content: SITE_NAME,
        },
        {
          property: "og:image:width",
          content: "1200",
        },
        {
          property: "og:image:height",
          content: "630",
        },
        {
          property: "og:image:alt",
          content: `${SITE_NAME}: Framework-agnostic TypeScript libraries.`,
        },
        {
          name: "twitter:card",
          content: "summary_large_image",
        },
      ],
      links: [
        {
          rel: "icon",
          type: "image/svg+xml",
          href: "/favicon.svg",
        },
        {
          rel: "stylesheet",
          href: appCss,
        },
        {
          rel: "stylesheet",
          href: docsCss,
        },
      ],
    };
  },
  shellComponent: RootLayout,
});

function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}
