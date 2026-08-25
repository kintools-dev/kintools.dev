import { Fragment, jsx, jsxs } from "react/jsx-runtime";
//#region ../store/docs/examples/index.md
var frontmatter = { "description": "Guided, runnable examples: Next.js SSR, splitting client and server state with TanStack Query as one store or many, and cross-tab sync recipes." };
function _createMdxContent(props) {
	const _components = {
		a: "a",
		code: "code",
		h1: "h1",
		p: "p",
		span: "span",
		table: "table",
		tbody: "tbody",
		td: "td",
		th: "th",
		thead: "thead",
		tr: "tr",
		...props.components
	};
	return jsxs(Fragment, { children: [
		jsxs(_components.h1, {
			id: "guided-examples",
			children: [jsx(_components.a, {
				className: "header-anchor",
				"aria-label": "Permalink to \"Guided Examples\"",
				href: "#guided-examples",
				children: jsx(_components.span, {
					"aria-hidden": "true",
					children: "#"
				})
			}), "Guided Examples"]
		}),
		"\n",
		jsxs(_components.p, { children: [
			"Full, runnable apps in the\n",
			jsx(_components.a, {
				href: "https://github.com/kintools-dev/store/tree/main/examples",
				children: "repository"
			}),
			", walked\nthrough here for the parts that are specific to Kin Store."
		] }),
		"\n",
		jsxs(_components.table, { children: [jsx(_components.thead, { children: jsxs(_components.tr, { children: [jsx(_components.th, { children: "Guide" }), jsx(_components.th, { children: "What it covers" })] }) }), jsxs(_components.tbody, { children: [
			jsxs(_components.tr, { children: [jsx(_components.td, { children: jsx(_components.a, {
				href: "/store/examples/nextjs",
				children: "Next.js"
			}) }), jsxs(_components.td, { children: [
				"SSR-safe store instantiation, ",
				jsx(_components.code, { children: "StoreProvider" }),
				", and ",
				jsx(_components.code, { children: "persist" }),
				" with manual hydration."
			] })] }),
			jsxs(_components.tr, { children: [jsx(_components.td, { children: jsx(_components.a, {
				href: "/store/examples/tanstack-query-fat-store",
				children: "TanStack Query and One Fat Store"
			}) }), jsxs(_components.td, { children: [
				"Splitting client-owned state (Kin Store) from server-owned state (React Query), as a single ",
				jsx(_components.code, { children: "withPlugins" }),
				" store."
			] })] }),
			jsxs(_components.tr, { children: [jsx(_components.td, { children: jsx(_components.a, {
				href: "/store/examples/tanstack-query-primitive-stores",
				children: "TanStack Query and Primitive Stores"
			}) }), jsxs(_components.td, { children: [
				"The same split, with each field as its own ",
				jsx(_components.code, { children: "createStore" }),
				" merged by ",
				jsx(_components.code, { children: "derive" }),
				"."
			] })] }),
			jsxs(_components.tr, { children: [jsx(_components.td, { children: jsx(_components.a, {
				href: "/store/examples/cross-tab-sync",
				children: "Cross-Tab Sync"
			}) }), jsxs(_components.td, { children: [
				"Recipes for syncing store state across open tabs, with ",
				jsx(_components.code, { children: "persist" }),
				" and the ",
				jsx(_components.code, { children: "storage" }),
				" event, or with ",
				jsx(_components.code, { children: "BroadcastChannel" }),
				" alone."
			] })] })
		] })] })
	] });
}
function MDXContent(props = {}) {
	const { wrapper: MDXLayout } = props.components || {};
	return MDXLayout ? jsx(MDXLayout, {
		...props,
		children: jsx(_createMdxContent, { ...props })
	}) : _createMdxContent(props);
}
//#endregion
export { MDXContent as default, frontmatter };
