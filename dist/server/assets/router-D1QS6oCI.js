import { n as SITE_NAME, r as seoHead, t as loadDocsPage } from "./page-cache-CzEWyQNu.js";
import { HeadContent, Scripts, createFileRoute, createRootRoute, createRouter, lazyRouteComponent, notFound } from "@tanstack/react-router";
import { jsx, jsxs } from "react/jsx-runtime";
//#region \0rolldown/runtime.js
var __defProp = Object.defineProperty;
var __exportAll = (all, no_symbols) => {
	let target = {};
	for (var name in all) __defProp(target, name, {
		get: all[name],
		enumerable: true
	});
	if (!no_symbols) __defProp(target, Symbol.toStringTag, { value: "Module" });
	return target;
};
//#endregion
//#region src/styles/docs.css?url
var docs_default = "/assets/docs-53xYAnwi.css";
//#endregion
//#region src/global.css?url
var global_default = "/assets/global-D_qDb6tx.css";
//#endregion
//#region src/routes/__root.tsx
var Route$3 = createRootRoute({
	head: () => {
		const { meta, links } = seoHead({
			title: SITE_NAME,
			description: "Framework-agnostic TypeScript libraries."
		});
		return {
			meta: [
				{ charSet: "utf-8" },
				{
					name: "viewport",
					content: "width=device-width, initial-scale=1"
				},
				...meta,
				{
					name: "robots",
					content: "index, follow"
				},
				{
					property: "og:type",
					content: "website"
				},
				{
					property: "og:site_name",
					content: SITE_NAME
				},
				{
					property: "og:image:width",
					content: "1200"
				},
				{
					property: "og:image:height",
					content: "630"
				},
				{
					property: "og:image:alt",
					content: `${SITE_NAME}: Framework-agnostic TypeScript libraries.`
				},
				{
					name: "twitter:card",
					content: "summary_large_image"
				}
			],
			links: [
				{
					rel: "icon",
					type: "image/svg+xml",
					href: "/favicon.svg"
				},
				{
					rel: "stylesheet",
					href: global_default
				},
				{
					rel: "stylesheet",
					href: docs_default
				},
				...links
			]
		};
	},
	shellComponent: RootLayout
});
function RootLayout({ children }) {
	return /* @__PURE__ */ jsxs("html", {
		lang: "en",
		children: [/* @__PURE__ */ jsx("head", { children: /* @__PURE__ */ jsx(HeadContent, {}) }), /* @__PURE__ */ jsxs("body", { children: [children, /* @__PURE__ */ jsx(Scripts, {})] })]
	});
}
//#endregion
//#region src/routes/index.tsx
var $$splitComponentImporter$2 = () => import("./routes-CvQzzCok.js");
var description$2 = "Composable, framework-agnostic TypeScript libraries. Zero dependencies, full type inference, no vendor lock-in.";
var Route$2 = createFileRoute("/")({
	head: () => seoHead({
		title: "kintools",
		description: description$2,
		path: "/"
	}),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
//#endregion
//#region src/content/form.ts
var formNav = {
	title: "Kin Form",
	description: "Fast, lightweight, framework-agnostic form state library for TypeScript. Zero-dependencies core, 100% type-safe field paths, React bindings built in.",
	nav: [
		{
			"text": "Guide",
			"link": "/guide/"
		},
		{
			"text": "Validators",
			"link": "/validators/"
		},
		{
			"text": "Comparison",
			"link": "/comparison/"
		},
		{
			"text": "API Reference",
			"link": "https://jsr.io/@kintools/form-core"
		}
	],
	sidebar: {
		"/guide/": [{
			"text": "Introduction",
			"items": [
				{
					"text": "Why Kin Form?",
					"link": "/guide/"
				},
				{
					"text": "Getting Started",
					"link": "/guide/getting-started"
				},
				{
					"text": "Concepts",
					"link": "/guide/concepts"
				},
				{
					"text": "Basic",
					"link": "/guide/basic"
				}
			]
		}, {
			"text": "Guides",
			"items": [
				{
					"text": "Per-node Validation",
					"link": "/guide/per-node-validation"
				},
				{
					"text": "Schema Validation",
					"link": "/guide/schema-validation"
				},
				{
					"text": "Linked Fields",
					"link": "/guide/linked-fields"
				},
				{
					"text": "Listeners",
					"link": "/guide/listeners"
				},
				{
					"text": "Nested Objects",
					"link": "/guide/nested-objects"
				},
				{
					"text": "Dynamic Arrays",
					"link": "/guide/dynamic-arrays"
				},
				{
					"text": "Flat vs. Nested Structure",
					"link": "/guide/flat-vs-nested"
				},
				{
					"text": "Dirty Tracking & Reset",
					"link": "/guide/dirty-tracking-and-reset"
				},
				{
					"text": "Submission Handling",
					"link": "/guide/submission-handling"
				},
				{
					"text": "Async Initial Values",
					"link": "/guide/async-initial-values"
				},
				{
					"text": "Reactivity",
					"link": "/guide/reactivity"
				},
				{
					"text": "Form Composition",
					"link": "/guide/form-composition"
				},
				{
					"text": "Multistep Forms",
					"link": "/guide/multistep"
				},
				{
					"text": "Devtools",
					"link": "/guide/devtools"
				},
				{
					"text": "Server-Side Rendering (SSR)",
					"link": "/guide/ssr"
				},
				{
					"text": "Common Pitfalls",
					"link": "/guide/common-pitfalls"
				}
			]
		}],
		"/validators/": [{
			"text": "Validators",
			"items": [{
				"text": "Overview",
				"link": "/validators/"
			}]
		}],
		"/comparison/": [{
			"text": "Comparison",
			"items": [{
				"text": "Overview",
				"link": "/comparison/"
			}, {
				"text": "vs React Hook Form",
				"link": "/comparison/react-hook-form"
			}]
		}]
	},
	socialLinks: [{
		"icon": "github",
		"link": "https://github.com/kintools-dev/form"
	}],
	editLink: {
		"pattern": "https://github.com/kintools-dev/form/edit/main/docs/:path",
		"text": "Edit this page on GitHub"
	}
};
var modules$1 = /* #__PURE__ */ Object.assign({
	"../../../form/docs/comparison/index.md": () => import("./comparison-C3yaI_Wm.js"),
	"../../../form/docs/comparison/react-hook-form.md": () => import("./react-hook-form-DfK9A7Zh.js"),
	"../../../form/docs/guide/async-initial-values.md": () => import("./async-initial-values-CCqkT0X9.js"),
	"../../../form/docs/guide/basic.md": () => import("./basic-CUXOWw0N.js"),
	"../../../form/docs/guide/common-pitfalls.md": () => import("./common-pitfalls-DpV2lUkh.js"),
	"../../../form/docs/guide/concepts.md": () => import("./concepts-DTcTvn_d.js"),
	"../../../form/docs/guide/devtools.md": () => import("./devtools-BGcmztn7.js"),
	"../../../form/docs/guide/dirty-tracking-and-reset.md": () => import("./dirty-tracking-and-reset-ccxWvD3K.js"),
	"../../../form/docs/guide/dynamic-arrays.md": () => import("./dynamic-arrays-DCpnsNT6.js"),
	"../../../form/docs/guide/flat-vs-nested.md": () => import("./flat-vs-nested-DoHYO7R-.js"),
	"../../../form/docs/guide/form-composition.md": () => import("./form-composition-CRZB3PyP.js"),
	"../../../form/docs/guide/getting-started.md": () => import("./getting-started-09GnKjyE.js"),
	"../../../form/docs/guide/index.md": () => import("./guide-QXXpym22.js"),
	"../../../form/docs/guide/linked-fields.md": () => import("./linked-fields-DNioy97p.js"),
	"../../../form/docs/guide/listeners.md": () => import("./listeners-Cd4Wlueu.js"),
	"../../../form/docs/guide/multistep.md": () => import("./multistep-qLhGDiMS.js"),
	"../../../form/docs/guide/nested-objects.md": () => import("./nested-objects-F9gL7FZ6.js"),
	"../../../form/docs/guide/per-node-validation.md": () => import("./per-node-validation-BwKEXmKH.js"),
	"../../../form/docs/guide/reactivity.md": () => import("./reactivity-BfEMdzNM.js"),
	"../../../form/docs/guide/schema-validation.md": () => import("./schema-validation-DWWD2XXy.js"),
	"../../../form/docs/guide/ssr.md": () => import("./ssr-DQ2lc6Xh.js"),
	"../../../form/docs/guide/submission-handling.md": () => import("./submission-handling-BBFNMfFo.js"),
	"../../../form/docs/index.md": () => import("./docs-BjjtiUvU.js"),
	"../../../form/docs/present.md": () => import("./present-vuu-Vqab.js"),
	"../../../form/docs/validators/index.md": () => import("./validators--ceHLxrP.js")
});
function slugFromPath$1(path) {
	const slug = path.replace(/^.*\/form\/docs\//, "").replace(/\.md$/, "");
	return slug === "index" ? "" : slug.replace(/\/index$/, "");
}
var formPages = Object.fromEntries(Object.entries(modules$1).map(([path, loader]) => [slugFromPath$1(path), loader]));
//#endregion
//#region src/routes/form/$.tsx
var $$splitComponentImporter$1 = () => import("./_-DQIZCNdQ.js");
var Route$1 = createFileRoute("/form/$")({
	loader: async ({ params }) => {
		const slug = params._splat ?? "";
		const page = loadDocsPage("form", formPages, slug);
		if (!page) throw notFound();
		const { frontmatter } = await page;
		return {
			slug,
			frontmatter
		};
	},
	head: ({ loaderData, params }) => seoHead({
		title: loaderData?.frontmatter?.title ?? formNav.title,
		description: loaderData?.frontmatter?.description ?? formNav.description,
		path: `/form/${params._splat ?? ""}`
	}),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
//#endregion
//#region src/content/store.ts
var storeNav = {
	title: "Kin Store",
	description: "A reactive state library for TypeScript. Framework-agnostic, zero dependencies, 100% type-safe.",
	nav: [
		{
			"text": "Guide",
			"link": "/guide/"
		},
		{
			"text": "Plugins",
			"link": "/plugins/"
		},
		{
			"text": "React",
			"link": "/react/"
		},
		{
			"text": "Examples",
			"link": "/examples/"
		},
		{
			"text": "Comparison",
			"link": "/comparison/"
		},
		{
			"text": "API Reference",
			"link": "https://jsr.io/@kintools/store-core"
		}
	],
	sidebar: {
		"/guide/": [{
			"text": "Introduction",
			"items": [
				{
					"text": "Why Kin Store?",
					"link": "/guide/"
				},
				{
					"text": "Getting Started",
					"link": "/guide/getting-started"
				},
				{
					"text": "Design Principles",
					"link": "/guide/design-principles"
				},
				{
					"text": "FAQ & Non-Goals",
					"link": "/guide/faq"
				}
			]
		}, {
			"text": "Core",
			"items": [
				{
					"text": "createStore",
					"link": "/guide/create-store"
				},
				{
					"text": "withPlugins",
					"link": "/guide/with-plugins"
				},
				{
					"text": "derive",
					"link": "/guide/derive"
				},
				{
					"text": "Writing Plugins",
					"link": "/guide/writing-plugins"
				}
			]
		}],
		"/comparison/": [{
			"text": "Comparison",
			"items": [{
				"text": "Overview",
				"link": "/comparison/"
			}]
		}],
		"/plugins/": [{
			"text": "Official Plugins",
			"items": [
				{
					"text": "Overview",
					"link": "/plugins/"
				},
				{
					"text": "broadcast",
					"link": "/plugins/broadcast"
				},
				{
					"text": "devtools",
					"link": "/plugins/devtools"
				},
				{
					"text": "history",
					"link": "/plugins/history"
				},
				{
					"text": "immer",
					"link": "/plugins/immer"
				},
				{
					"text": "persist",
					"link": "/plugins/persist"
				}
			]
		}],
		"/react/": [{
			"text": "React",
			"items": [{
				"text": "Overview",
				"link": "/react/"
			}]
		}],
		"/examples/": [{
			"text": "Guided Examples",
			"items": [
				{
					"text": "Overview",
					"link": "/examples/"
				},
				{
					"text": "Next.js",
					"link": "/examples/nextjs"
				},
				{
					"text": "TanStack Query + Fat Store",
					"link": "/examples/tanstack-query-fat-store"
				},
				{
					"text": "TanStack Query + Primitive Stores",
					"link": "/examples/tanstack-query-primitive-stores"
				},
				{
					"text": "Cross-Tab Sync",
					"link": "/examples/cross-tab-sync"
				}
			]
		}]
	},
	socialLinks: [{
		"icon": "github",
		"link": "https://github.com/kintools-dev/store"
	}],
	editLink: {
		"pattern": "https://github.com/kintools-dev/store/edit/main/docs/:path",
		"text": "Edit this page on GitHub"
	}
};
var modules = /* #__PURE__ */ Object.assign({
	"../../../store/docs/comparison/index.md": () => import("./comparison-Wx5DPDpa.js"),
	"../../../store/docs/examples/cross-tab-sync.md": () => import("./cross-tab-sync-DX7Cmorr.js"),
	"../../../store/docs/examples/index.md": () => import("./examples-COD9wmR5.js"),
	"../../../store/docs/examples/nextjs.md": () => import("./nextjs-BI1eSqFl.js"),
	"../../../store/docs/examples/tanstack-query-fat-store.md": () => import("./tanstack-query-fat-store-nVMtu1D8.js"),
	"../../../store/docs/examples/tanstack-query-primitive-stores.md": () => import("./tanstack-query-primitive-stores-CXfqXXTn.js"),
	"../../../store/docs/guide/create-store.md": () => import("./create-store-D0eCBvsX.js"),
	"../../../store/docs/guide/derive.md": () => import("./derive-Dk6fV-5h.js"),
	"../../../store/docs/guide/design-principles.md": () => import("./design-principles-DLFX7m1T.js"),
	"../../../store/docs/guide/faq.md": () => import("./faq-DVmX7h80.js"),
	"../../../store/docs/guide/getting-started.md": () => import("./getting-started-BkZhJP2p.js"),
	"../../../store/docs/guide/index.md": () => import("./guide-BUILMmqL.js"),
	"../../../store/docs/guide/with-plugins.md": () => import("./with-plugins-DB7P3vt2.js"),
	"../../../store/docs/guide/writing-plugins.md": () => import("./writing-plugins-CKfOXTfv.js"),
	"../../../store/docs/index.md": () => import("./docs-CE7ksHgD.js"),
	"../../../store/docs/plugins/broadcast.md": () => import("./broadcast-CFpQSJpV.js"),
	"../../../store/docs/plugins/devtools.md": () => import("./devtools-C0ssqPrm.js"),
	"../../../store/docs/plugins/history.md": () => import("./history-CtjCxkk2.js"),
	"../../../store/docs/plugins/immer.md": () => import("./immer-DedMKyqO.js"),
	"../../../store/docs/plugins/index.md": () => import("./plugins-IF7kjx6t.js"),
	"../../../store/docs/plugins/persist.md": () => import("./persist-BBUFOnop.js"),
	"../../../store/docs/react/index.md": () => import("./react-BBcIUKkF.js")
});
function slugFromPath(path) {
	const slug = path.replace(/^.*\/store\/docs\//, "").replace(/\.md$/, "");
	return slug === "index" ? "" : slug.replace(/\/index$/, "");
}
var storePages = Object.fromEntries(Object.entries(modules).map(([path, loader]) => [slugFromPath(path), loader]));
//#endregion
//#region src/routes/store/$.tsx
var $$splitComponentImporter = () => import("./_-BghqhVj9.js");
var Route = createFileRoute("/store/$")({
	loader: async ({ params }) => {
		const slug = params._splat ?? "";
		const page = loadDocsPage("store", storePages, slug);
		if (!page) throw notFound();
		const { frontmatter } = await page;
		return {
			slug,
			frontmatter
		};
	},
	head: ({ loaderData, params }) => seoHead({
		title: loaderData?.frontmatter?.title ?? storeNav.title,
		description: loaderData?.frontmatter?.description ?? storeNav.description,
		path: `/store/${params._splat ?? ""}`
	}),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
//#region src/routeTree.gen.ts
var rootRouteChildren = {
	IndexRoute: Route$2.update({
		id: "/",
		path: "/",
		getParentRoute: () => Route$3
	}),
	FormSplatRoute: Route$1.update({
		id: "/form/$",
		path: "/form/$",
		getParentRoute: () => Route$3
	}),
	StoreSplatRoute: Route.update({
		id: "/store/$",
		path: "/store/$",
		getParentRoute: () => Route$3
	})
};
var routeTree = Route$3._addFileChildren(rootRouteChildren)._addFileTypes();
//#endregion
//#region src/router.tsx
var router_exports = /* @__PURE__ */ __exportAll({ getRouter: () => getRouter });
function getRouter() {
	return createRouter({
		routeTree,
		scrollRestoration: true,
		defaultPreload: "intent",
		defaultPreloadStaleTime: 0
	});
}
//#endregion
export { Route$1 as a, getRouter, storePages as i, Route as n, formNav as o, storeNav as r, formPages as s, router_exports as t };
