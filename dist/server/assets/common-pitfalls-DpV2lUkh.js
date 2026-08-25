import { Fragment, jsx, jsxs } from "react/jsx-runtime";
//#region ../form/docs/guide/common-pitfalls.md
var frontmatter = void 0;
function _createMdxContent(props) {
	const _components = {
		a: "a",
		code: "code",
		em: "em",
		h1: "h1",
		h2: "h2",
		p: "p",
		span: "span",
		...props.components
	}, { Container, FrameworkSlot, FrameworkText } = _components;
	if (!Container) _missingMdxReference("Container", true);
	if (!FrameworkSlot) _missingMdxReference("FrameworkSlot", true);
	if (!FrameworkText) _missingMdxReference("FrameworkText", true);
	return jsxs(Fragment, { children: [
		jsxs(_components.h1, {
			id: "common-pitfalls",
			children: [jsx(_components.a, {
				className: "header-anchor",
				"aria-label": "Permalink to \"Common Pitfalls\"",
				href: "#common-pitfalls",
				children: jsx(_components.span, {
					"aria-hidden": "true",
					children: "#"
				})
			}), "Common Pitfalls"]
		}),
		"\n",
		jsx(_components.p, { children: "Every entry here is silent: nothing throws, nothing fails to type-check, the UI\njust doesn't do what you'd expect. Each one links to the guide that covers the\nmechanism in full; this page is only the \"watch out for this\" index." }),
		"\n",
		jsxs(_components.h2, {
			id: "watching-in-the-same-component-that-owns-the-form",
			children: [jsx(_components.a, {
				className: "header-anchor",
				"aria-label": "Permalink to \"Watching in the same component that owns the form\"",
				href: "#watching-in-the-same-component-that-owns-the-form",
				children: jsx(_components.span, {
					"aria-hidden": "true",
					children: "#"
				})
			}), "Watching in the same component that owns the form"]
		}),
		"\n",
		jsxs(FrameworkText, { children: [jsx(FrameworkSlot, {
			name: "react",
			children: jsxs(_components.p, { children: [
				"Calling ",
				jsx(_components.code, { children: "useWatch" }),
				" in the same component that calls ",
				jsx(_components.code, { children: "useForm" }),
				" re-renders the\nwhole form on every change, exactly what ",
				jsx(_components.code, { children: "useForm" }),
				" not subscribing by itself is\nmeant to avoid."
			] })
		}), jsx(FrameworkSlot, {
			name: "lit",
			children: jsxs(_components.p, { children: [
				"Creating a ",
				jsx(_components.code, { children: "WatchController" }),
				" in the same component that creates a ",
				jsx(_components.code, { children: "FormApi" }),
				"\nre-renders the whole form on every change, exactly what a plain ",
				jsx(_components.code, { children: "#form" }),
				" class\nfield (rather than some subscribing helper) is meant to avoid."
			] })
		})] }),
		"\n",
		jsxs(_components.p, { children: [
			"Extract the subscription and the UI it drives into their own component instead.\nSee ",
			jsx(_components.a, {
				href: "/form/guide/reactivity",
				children: "Reactivity"
			}),
			"."
		] }),
		"\n",
		jsxs(_components.h2, {
			id: "disabled-cascades-through-state-not-through-the-dom",
			children: [
				jsx(_components.a, {
					className: "header-anchor",
					"aria-label": "Permalink to \"disabled cascades through state, not through the DOM\"",
					href: "#disabled-cascades-through-state-not-through-the-dom",
					children: jsx(_components.span, {
						"aria-hidden": "true",
						children: "#"
					})
				}),
				jsx(_components.code, { children: "disabled" }),
				" cascades through state, not through the DOM"
			]
		}),
		"\n",
		jsxs(_components.p, { children: [
			"Setting ",
			jsx(_components.code, { children: "form.disabled = true" }),
			" reaches every registered field's\n",
			jsx(_components.code, { children: "FieldApi.disabled" }),
			", but nothing on screen changes until a field's own component\nactually reads it. A ",
			jsx(_components.code, { children: "TextField" }),
			" that never reads ",
			jsx(_components.code, { children: "field.disabled" }),
			" leaves its\n",
			jsx(_components.code, { children: "<input>" }),
			" editable no matter what ",
			jsx(_components.code, { children: "disabled" }),
			" says."
		] }),
		"\n",
		jsxs(_components.p, { children: [
			"Combine the field's own ",
			jsx(_components.code, { children: "disabled" }),
			" with a ",
			jsx(_components.code, { children: "disabled" }),
			" prop the caller can also\nset (",
			jsx(_components.code, { children: "disabled={disabled || field.disabled}" }),
			" in React,\n",
			jsx(_components.code, { children: "this.disabled || field.disabled" }),
			" in Lit) so both an ancestor cascade and a\none-off override work. See ",
			jsx(_components.a, {
				href: "/form/guide/basic",
				children: "Basic"
			}),
			" and\n",
			jsx(_components.a, {
				href: "/form/guide/submission-handling",
				children: "Submission Handling"
			}),
			"."
		] }),
		"\n",
		jsxs(_components.h2, {
			id: "reassigning-validatorsdependents-doesnt-revalidate-by-itself",
			children: [
				jsx(_components.a, {
					className: "header-anchor",
					"aria-label": "Permalink to \"Reassigning validators/dependents doesn't revalidate by itself\"",
					href: "#reassigning-validatorsdependents-doesnt-revalidate-by-itself",
					children: jsx(_components.span, {
						"aria-hidden": "true",
						children: "#"
					})
				}),
				"Reassigning ",
				jsx(_components.code, { children: "validators" }),
				"/",
				jsx(_components.code, { children: "dependents" }),
				" doesn't revalidate by itself"
			]
		}),
		"\n",
		jsxs(_components.p, { children: [
			"Passing a fresh ",
			jsx(_components.code, { children: "validators" }),
			" array on every render (a validator factory like\n",
			jsx(_components.code, { children: "required()" }),
			" returns a new closure each call) doesn't trigger a new validation\nrun on its own — only an actual value change or an explicit ",
			jsx(_components.code, { children: "validate(true)" }),
			"\ndoes. A field can look like it's still validating against its old rules if\nyou're watching for some other signal that the option \"took effect.\""
		] }),
		"\n",
		jsxs(_components.p, { children: [
			"This is deliberate, not a bug: reacting to the reference change alone would turn\nevery render into a validation run. Cache the array yourself (",
			jsx(_components.code, { children: "useMemo" }),
			" in\nReact, a class field in Lit) if you want reassigning the same set to be a true\nno-op. See ",
			jsx(_components.a, {
				href: "/form/guide/per-node-validation",
				children: "Per-node Validation"
			}),
			"."
		] }),
		"\n",
		jsxs(_components.h2, {
			id: "reading-a-siblings-value-inside-a-validator-isnt-a-dependency",
			children: [jsx(_components.a, {
				className: "header-anchor",
				"aria-label": "Permalink to \"Reading a sibling's value inside a validator isn't a dependency\"",
				href: "#reading-a-siblings-value-inside-a-validator-isnt-a-dependency",
				children: jsx(_components.span, {
					"aria-hidden": "true",
					children: "#"
				})
			}), "Reading a sibling's value inside a validator isn't a dependency"]
		}),
		"\n",
		jsxs(_components.p, { children: [
			"A validator can read any other field's value directly (",
			jsx(_components.code, { children: "form.value.password" }),
			"),\nbut that read isn't tracked. Without declaring ",
			jsx(_components.code, { children: "dependents" }),
			", editing ",
			jsx(_components.code, { children: "password" }),
			"\nwon't re-run ",
			jsx(_components.code, { children: "confirmPassword" }),
			"'s validator, leaving a stale \"Passwords must\nmatch\" error until ",
			jsx(_components.code, { children: "confirmPassword" }),
			" is next edited or blurred itself."
		] }),
		"\n",
		jsxs(_components.p, { children: [
			"See ",
			jsx(_components.a, {
				href: "/form/guide/linked-fields",
				children: "Linked Fields"
			}),
			"."
		] }),
		"\n",
		jsxs(_components.h2, {
			id: "index-as-a-list-key",
			children: [jsx(_components.a, {
				className: "header-anchor",
				"aria-label": "Permalink to \"Index as a list key\"",
				href: "#index-as-a-list-key",
				children: jsx(_components.span, {
					"aria-hidden": "true",
					children: "#"
				})
			}), "Index as a list key"]
		}),
		"\n",
		jsxs(_components.p, { children: [
			"Keying an array's rendered rows on their index, instead of the item's own ",
			jsx(_components.code, { children: "id" }),
			",\nmisattributes uncontrolled DOM state (focus, cursor position, scroll) to the\nwrong row after a reorder: the item that ",
			jsx(_components.em, { children: "renders" }),
			" at index 2 changes, but the\ncomponent/element instance React/Lit reuses for index 2 doesn't."
		] }),
		"\n",
		jsxs(_components.p, { children: [
			"Use ",
			jsx(_components.code, { children: "FieldApi.id" }),
			" as the key instead. See\n",
			jsx(_components.a, {
				href: "/form/guide/dynamic-arrays",
				children: "Dynamic Arrays"
			}),
			"."
		] }),
		"\n",
		jsxs(_components.h2, {
			id: "handlesubmit-doesnt-move-the-dirty-baseline",
			children: [
				jsx(_components.a, {
					className: "header-anchor",
					"aria-label": "Permalink to \"handleSubmit doesn't move the dirty baseline\"",
					href: "#handlesubmit-doesnt-move-the-dirty-baseline",
					children: jsx(_components.span, {
						"aria-hidden": "true",
						children: "#"
					})
				}),
				jsx(_components.code, { children: "handleSubmit" }),
				" doesn't move the dirty baseline"
			]
		}),
		"\n",
		jsxs(_components.p, { children: [
			"A successful ",
			jsx(_components.code, { children: "onSubmit" }),
			" doesn't reset anything on its own: ",
			jsx(_components.code, { children: "dirty" }),
			" (and the\nreset baseline it's computed from) stay exactly where they were before you\nsubmitted, so a form that just saved successfully still reports ",
			jsx(_components.code, { children: "dirty: true" }),
			"."
		] }),
		"\n",
		jsxs(_components.p, { children: [
			"Call ",
			jsx(_components.code, { children: "form.reset()" }),
			" or ",
			jsx(_components.code, { children: "form.reset(saved)" }),
			" to reset the baseline. See\n",
			jsx(_components.a, {
				href: "/form/guide/dirty-tracking-and-reset",
				children: "Dirty Tracking & Reset"
			}),
			"."
		] }),
		"\n",
		jsxs(_components.h2, {
			id: "fieldid-in-server-rendered-markup",
			children: [
				jsx(_components.a, {
					className: "header-anchor",
					"aria-label": "Permalink to \"field.id in server-rendered markup\"",
					href: "#fieldid-in-server-rendered-markup",
					children: jsx(_components.span, {
						"aria-hidden": "true",
						children: "#"
					})
				}),
				jsx(_components.code, { children: "field.id" }),
				" in server-rendered markup"
			]
		}),
		"\n",
		jsx(Container, {
			type: "info",
			children: jsx(_components.p, { children: "React only — there's no SSR-oriented guide for the Lit binding in this repo yet." })
		}),
		"\n",
		jsxs(_components.p, { children: [
			jsx(_components.code, { children: "field.id" }),
			" is a stable, module-level counter: good for a React ",
			jsx(_components.code, { children: "key" }),
			" since it\nsurvives array reorders, but not seeded the same way on the server and the\nclient. Rendering it into an actual DOM attribute (an ",
			jsx(_components.code, { children: "<input id={field.id}>" }),
			" /\n",
			jsx(_components.code, { children: "<label htmlFor={field.id}>" }),
			" pair, say) mismatches during hydration. Use\n",
			jsx(_components.code, { children: "useId()" }),
			" for a DOM id instead, and keep ",
			jsx(_components.code, { children: "field.id" }),
			" scoped to ",
			jsx(_components.code, { children: "key" }),
			"."
		] }),
		"\n",
		jsxs(_components.p, { children: [
			"See ",
			jsx(_components.a, {
				href: "/form/guide/ssr",
				children: "Server-Side Rendering (SSR)"
			}),
			" for the full guide."
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
function _missingMdxReference(id, component) {
	throw new Error("Expected " + (component ? "component" : "object") + " `" + id + "` to be defined: you likely forgot to import, pass, or provide it.");
}
//#endregion
export { MDXContent as default, frontmatter };
