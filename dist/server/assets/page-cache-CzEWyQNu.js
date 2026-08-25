//#region src/lib/seo.ts
var SITE_URL = "https://kintools.dev";
var SITE_NAME = "kintools";
var DEFAULT_OG_IMAGE = "/og-image.png";
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
function seoHead({ title, description, path = "/", image = DEFAULT_OG_IMAGE }) {
	const url = new URL(path, SITE_URL).toString();
	const imageUrl = new URL(image, SITE_URL).toString();
	return {
		meta: [
			{ title },
			{
				name: "description",
				content: description
			},
			{
				property: "og:title",
				content: title
			},
			{
				property: "og:description",
				content: description
			},
			{
				property: "og:url",
				content: url
			},
			{
				property: "og:image",
				content: imageUrl
			},
			{
				name: "twitter:title",
				content: title
			},
			{
				name: "twitter:description",
				content: description
			},
			{
				name: "twitter:image",
				content: imageUrl
			}
		],
		links: [{
			rel: "canonical",
			href: url
		}]
	};
}
//#endregion
//#region src/content/page-cache.ts
var cache = /* @__PURE__ */ new Map();
function loadDocsPage(cacheKey, pages, slug) {
	const loader = pages[slug];
	if (!loader) return void 0;
	const key = `${cacheKey}:${slug}`;
	let promise = cache.get(key);
	if (!promise) {
		promise = loader();
		promise.catch(() => cache.delete(key));
		cache.set(key, promise);
	}
	return promise;
}
//#endregion
export { SITE_NAME as n, seoHead as r, loadDocsPage as t };
