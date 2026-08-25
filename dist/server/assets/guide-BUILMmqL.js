import { Fragment, jsx, jsxs } from "react/jsx-runtime";
//#region ../store/docs/guide/index.md
var frontmatter = { "description": "Why Kin Store exists: three primitives (createStore, withPlugins, derive), zero dependencies, full type inference, and opt-in complexity you only pay for when you use it." };
function _createMdxContent(props) {
	const _components = {
		a: "a",
		code: "code",
		h1: "h1",
		h2: "h2",
		li: "li",
		p: "p",
		span: "span",
		table: "table",
		tbody: "tbody",
		td: "td",
		th: "th",
		thead: "thead",
		tr: "tr",
		ul: "ul",
		...props.components
	};
	return jsxs(Fragment, { children: [
		jsxs(_components.h1, {
			id: "why-kin-store",
			children: [jsx(_components.a, {
				className: "header-anchor",
				"aria-label": "Permalink to \"Why Kin Store?\"",
				href: "#why-kin-store",
				children: jsx(_components.span, {
					"aria-hidden": "true",
					children: "#"
				})
			}), "Why Kin Store?"]
		}),
		"\n",
		jsx(_components.p, { children: "Kin Store starts from one constraint: the smallest set of ideas a state library\nactually needs, and nothing past that." }),
		"\n",
		jsxs(_components.h2, {
			id: "what-that-meant-in-practice",
			children: [jsx(_components.a, {
				className: "header-anchor",
				"aria-label": "Permalink to \"What that meant in practice\"",
				href: "#what-that-meant-in-practice",
				children: jsx(_components.span, {
					"aria-hidden": "true",
					children: "#"
				})
			}), "What that meant in practice"]
		}),
		"\n",
		jsxs(_components.p, { children: [
			"Three primitives came out of that constraint: ",
			jsx(_components.code, { children: "createStore" }),
			", ",
			jsx(_components.code, { children: "withPlugins" }),
			", and\n",
			jsx(_components.code, { children: "derive" }),
			"."
		] }),
		"\n",
		jsxs(_components.table, { children: [jsx(_components.thead, { children: jsxs(_components.tr, { children: [jsx(_components.th, { children: "Primitive" }), jsx(_components.th, { children: "What it does" })] }) }), jsxs(_components.tbody, { children: [
			jsxs(_components.tr, { children: [jsx(_components.td, { children: jsx(_components.a, {
				href: "/store/guide/create-store",
				children: jsx(_components.code, { children: "createStore" })
			}) }), jsxs(_components.td, { children: [
				"The irreducible floor. ",
				jsx(_components.code, { children: "get" }),
				" · ",
				jsx(_components.code, { children: "set" }),
				" · ",
				jsx(_components.code, { children: "subscribe" }),
				". Nothing else."
			] })] }),
			jsxs(_components.tr, { children: [jsx(_components.td, { children: jsx(_components.a, {
				href: "/store/guide/with-plugins",
				children: jsx(_components.code, { children: "withPlugins" })
			}) }), jsx(_components.td, { children: "Opt-in structure: methods, reducers, middleware, lifecycle hooks, namespaced plugins." })] }),
			jsxs(_components.tr, { children: [jsx(_components.td, { children: jsx(_components.a, {
				href: "/store/guide/derive",
				children: jsx(_components.code, { children: "derive" })
			}) }), jsx(_components.td, { children: "Lazy, dependency-tracked, read-only views composed from one or more stores." })] })
		] })] }),
		"\n",
		jsxs(_components.p, { children: [
			"None of them carry a framework's worth of internal bookkeeping. A bare\n",
			jsx(_components.code, { children: "createStore" }),
			" is a value and three methods, nothing else. Whatever structure you\nadd on top, methods, reducers, middleware, only exists because you ",
			jsx(_components.code, { children: ".use()" }),
			"'d a\nplugin for it through ",
			jsx(_components.code, { children: "withPlugins" }),
			"; the store doesn't route everything through\na slice and a dispatch table by default."
		] }),
		"\n",
		jsxs(_components.p, { children: [
			"Nothing runs through a proxy or a full reactive graph either. A bare store costs\nexactly what ",
			jsx(_components.code, { children: "get" }),
			"/",
			jsx(_components.code, { children: "set" }),
			"/",
			jsx(_components.code, { children: "subscribe" }),
			" cost, and each plugin you layer on adds its\nown cost on top, stacking rather than multiplying against what was already\nthere."
		] }),
		"\n",
		jsx(_components.p, { children: "Type inference comes along on top of that: reducer arguments, dispatch calls,\nand plugin methods are fully inferred, so you're not hand-annotating what the\ncompiler already knows." }),
		"\n",
		jsxs(_components.p, { children: [
			"Curious how this holds up against Redux, Zustand, Jotai, or MobX in practice?\nSee the full ",
			jsx(_components.a, {
				href: "/store/comparison/",
				children: "comparison"
			}),
			" — line-by-line, with the tradeoffs\nnamed directly."
		] }),
		"\n",
		jsxs(_components.h2, {
			id: "next",
			children: [jsx(_components.a, {
				className: "header-anchor",
				"aria-label": "Permalink to \"Next\"",
				href: "#next",
				children: jsx(_components.span, {
					"aria-hidden": "true",
					children: "#"
				})
			}), "Next"]
		}),
		"\n",
		jsxs(_components.ul, { children: [
			"\n",
			jsxs(_components.li, { children: [jsx(_components.a, {
				href: "/store/guide/getting-started",
				children: "Getting Started"
			}), " — install and write your first\nstore."] }),
			"\n",
			jsxs(_components.li, { children: [jsx(_components.a, {
				href: "/store/guide/design-principles",
				children: "Design Principles"
			}), " — the reasoning behind\neach API choice."] }),
			"\n"
		] })
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
