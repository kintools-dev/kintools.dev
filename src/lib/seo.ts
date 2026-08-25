/**
 * Computes a doc page's raw-markdown mirror path (written flat by
 * scripts/build-geo.ts, right next to the page's own <path>.html --
 * vite.config.ts sets autoSubfolderIndex: false for exactly this).
 */
export function markdownMirrorPath(base: string, slug: string): string {
  return slug ? `${base}/${slug}.md` : `${base}.md`;
}

export const SITE_URL = "https://kintools.dev";
export const SITE_NAME = "kintools";
export const DEFAULT_OG_IMAGE = "/og-image.png";

export interface SeoOptions {
  title: string;
  description: string;
  /** Root-relative path, e.g. "/form/guide/basic". Defaults to "/". */
  path?: string;
  /** Root-relative or absolute image URL. Defaults to the site's shared OG image. */
  image?: string;
  /**
   * Root-relative path to this page's raw-markdown mirror (e.g.
   * "/form/guide/basic.md"), written by scripts/build-geo.ts. When given,
   * an `alternate` link hints crawlers/agents at the plain-markdown version
   * instead of the rendered HTML. Omit for pages with no markdown source
   * (e.g. the site's own marketing homepage).
   */
  markdownPath?: string;
}

/**
 * Builds the `meta`/`links` fields of a route's `head` option, covering
 * title, description, canonical URL, and the Open Graph/Twitter tags that
 * mirror them.
 *
 * Site-wide defaults (og:type, og:site_name, twitter:card, image dimensions,
 * robots) live on the root route; this only sets the per-page fields that
 * differ from page to page, which TanStack Router's leaf-over-root merge
 * (matched by `name`/`property`) layers on top of those defaults.
 */
export function seoHead(
  { title, description, path = "/", image = DEFAULT_OG_IMAGE, markdownPath }:
    SeoOptions,
) {
  const url = new URL(path, SITE_URL).toString();
  const imageUrl = new URL(image, SITE_URL).toString();

  const links: { rel: string; href: string; type?: string }[] = [
    { rel: "canonical", href: url },
  ];
  if (markdownPath) {
    links.push({
      rel: "alternate",
      type: "text/markdown",
      href: new URL(markdownPath, SITE_URL).toString(),
    });
  }

  return {
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: url },
      { property: "og:image", content: imageUrl },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: imageUrl },
    ],
    links,
  };
}
