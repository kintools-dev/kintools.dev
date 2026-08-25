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
  { title, description, path = "/", image = DEFAULT_OG_IMAGE }: SeoOptions,
) {
  const url = new URL(path, SITE_URL).toString();
  const imageUrl = new URL(image, SITE_URL).toString();

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
    links: [{ rel: "canonical", href: url }],
  };
}
