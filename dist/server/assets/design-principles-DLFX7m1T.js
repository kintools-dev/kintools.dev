import { Fragment, jsx, jsxs } from "react/jsx-runtime";
//#region ../store/docs/guide/design-principles.md
var frontmatter = { "description": "The four principles behind every Kin Store API decision: explicit over implicit, opt-in complexity, type safety by default, and two equally first-class tiers of mutation." };
function _createMdxContent(props) {
	const _components = {
		a: "a",
		code: "code",
		h1: "h1",
		h2: "h2",
		li: "li",
		p: "p",
		span: "span",
		strong: "strong",
		ul: "ul",
		...props.components
	};
	return jsxs(Fragment, { children: [
		jsxs(_components.h1, {
			id: "design-principles",
			children: [jsx(_components.a, {
				className: "header-anchor",
				"aria-label": "Permalink to \"Design Principles\"",
				href: "#design-principles",
				children: jsx(_components.span, {
					"aria-hidden": "true",
					children: "#"
				})
			}), "Design Principles"]
		}),
		"\n",
		jsx(_components.p, { children: "These four principles shaped every API decision in Kin Store. Understanding them\nmakes the library predictable, and explains why things work the way they do." }),
		"\n",
		jsxs(_components.h2, {
			id: "explicit-over-implicit",
			children: [jsx(_components.a, {
				className: "header-anchor",
				"aria-label": "Permalink to \"Explicit over implicit\"",
				href: "#explicit-over-implicit",
				children: jsx(_components.span, {
					"aria-hidden": "true",
					children: "#"
				})
			}), "Explicit over implicit"]
		}),
		"\n",
		jsx(_components.p, { children: "No hidden merges, no auto-propagating destroy, no magic dependency graphs. If\nsomething happens, you triggered it." }),
		"\n",
		jsxs(_components.p, { children: [
			jsx(_components.code, { children: "set" }),
			" replaces the entire state — there is no shallow merge happening behind the\nscenes. ",
			jsx(_components.code, { children: "derive" }),
			" tracks only the stores you explicitly read with ",
			jsx(_components.code, { children: "get(store)" }),
			".\n",
			jsx(_components.code, { children: "destroy" }),
			" must be called manually — nothing propagates to child stores\nautomatically. The ",
			jsx(_components.code, { children: "CANCELED" }),
			" sentinel, named reducers, and the two-tier\nmutation model all follow from this principle."
		] }),
		"\n",
		jsxs(_components.h2, {
			id: "opt-in-complexity",
			children: [jsx(_components.a, {
				className: "header-anchor",
				"aria-label": "Permalink to \"Opt-in complexity\"",
				href: "#opt-in-complexity",
				children: jsx(_components.span, {
					"aria-hidden": "true",
					children: "#"
				})
			}), "Opt-in complexity"]
		}),
		"\n",
		jsxs(_components.p, { children: [
			jsx(_components.code, { children: "createStore" }),
			" is the floor. ",
			jsx(_components.code, { children: "withPlugins" }),
			" adds methods, reducers, middleware,\nand lifecycle hooks, only when you import it. ",
			jsx(_components.code, { children: "derive" }),
			" adds reactive\ncomposition, only when you reach for it. You never pay for capability you\nhaven't opted into."
		] }),
		"\n",
		jsxs(_components.h2, {
			id: "type-safety-by-default",
			children: [jsx(_components.a, {
				className: "header-anchor",
				"aria-label": "Permalink to \"Type safety by default\"",
				href: "#type-safety-by-default",
				children: jsx(_components.span, {
					"aria-hidden": "true",
					children: "#"
				})
			}), "Type safety by default"]
		}),
		"\n",
		jsxs(_components.p, { children: [
			"Every reducer argument, dispatch call, and plugin method is fully inferred, no\n",
			jsx(_components.code, { children: "any" }),
			" or ",
			jsx(_components.code, { children: "unknown" }),
			", no manual annotation at call sites. The type system is\nload-bearing, not decorative."
		] }),
		"\n",
		jsxs(_components.p, { children: [
			jsx(_components.code, { children: "dispatch.addTodo(\"Buy groceries\")" }),
			" knows that ",
			jsx(_components.code, { children: "addTodo" }),
			" takes a ",
			jsx(_components.code, { children: "string" }),
			". A\nmiddleware that reads ",
			jsx(_components.code, { children: "ctx.reducer.args" }),
			" gets the correct tuple type. A plugin\nthat adds methods sees the accumulated store type including every plugin\nregistered before it. Type errors are caught statically, at definition time or\nat the call site."
		] }),
		"\n",
		jsxs(_components.h2, {
			id: "two-tiers-of-mutation",
			children: [jsx(_components.a, {
				className: "header-anchor",
				"aria-label": "Permalink to \"Two tiers of mutation\"",
				href: "#two-tiers-of-mutation",
				children: jsx(_components.span, {
					"aria-hidden": "true",
					children: "#"
				})
			}), "Two tiers of mutation"]
		}),
		"\n",
		jsxs(_components.p, { children: [
			jsx(_components.code, { children: "dispatch.*" }),
			" and ",
			jsx(_components.code, { children: "set" }),
			" are both first-class ways to change state, neither is\na fallback for the other. ",
			jsx(_components.code, { children: "dispatch.*" }),
			" calls a named reducer through the\nmiddleware pipeline, so the change is traceable, loggable, and cancellable.\n",
			jsx(_components.code, { children: "set" }),
			" writes state directly, with no pipeline in between. Which one a team\nreaches for is an architectural choice, not a hierarchy, and Kin Store is\ndeliberately built so any point on that spectrum is a first-class way to use\nthe library:"
		] }),
		"\n",
		jsxs(_components.ul, { children: [
			"\n",
			jsxs(_components.li, { children: [
				jsx(_components.strong, { children: "Primitive composition" }),
				" — ",
				jsx(_components.code, { children: "createStore" }),
				" + ",
				jsx(_components.code, { children: "derive" }),
				" + plain functions, no\n",
				jsx(_components.code, { children: "withPlugins" }),
				" at all."
			] }),
			"\n",
			jsxs(_components.li, { children: [
				jsx(_components.strong, { children: "Methods only" }),
				" — ",
				jsx(_components.code, { children: "withPlugins" }),
				" + ",
				jsx(_components.code, { children: "methods" }),
				" that call ",
				jsx(_components.code, { children: "set" }),
				" directly, no\nreducers or middleware."
			] }),
			"\n",
			jsxs(_components.li, { children: [
				jsx(_components.strong, { children: "Reducers + middleware" }),
				" — ",
				jsx(_components.code, { children: "withPlugins" }),
				" + ",
				jsx(_components.code, { children: "reducers" }),
				" dispatched through\n",
				jsx(_components.code, { children: "dispatch.*" }),
				", with middleware doing the logging/undo/guard work."
			] }),
			"\n",
			jsxs(_components.li, { children: [
				jsx(_components.strong, { children: "Fat store" }),
				" — ",
				jsx(_components.code, { children: "createStore" }),
				" plus colocated top-level logic functions that\ncall ",
				jsx(_components.code, { children: "set" }),
				", no plugin system involved."
			] }),
			"\n"
		] }),
		"\n",
		jsxs(_components.p, { children: [
			"Within a ",
			jsx(_components.code, { children: "withPlugins" }),
			" store, a method can also mix both in the same call:\n",
			jsx(_components.code, { children: "dispatch.*" }),
			" for the parts of a change that should be traceable, ",
			jsx(_components.code, { children: "set" }),
			" for a\ndirect write, matching what that specific change needs rather than a\nstore-wide rule. If your team standardizes on one style — e.g. \"every mutation\ngoes through ",
			jsx(_components.code, { children: "dispatch.*" }),
			"\" — that's a convention to hold at the module\nboundary (export ",
			jsx(_components.code, { children: "dispatch" }),
			" and your methods, not ",
			jsx(_components.code, { children: "set" }),
			", from your store\nmodule), not something Kin Store enforces for you."
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
