import { Fragment, jsx, jsxs } from "react/jsx-runtime";
//#region ../store/docs/guide/faq.md
var frontmatter = { "description": "Frequently asked questions and honest non-goals: what Kin Store deliberately doesn't do, framework support, SSR, DevTools, and where server state belongs." };
function _createMdxContent(props) {
	const _components = {
		a: "a",
		code: "code",
		h1: "h1",
		h2: "h2",
		h3: "h3",
		p: "p",
		span: "span",
		...props.components
	};
	return jsxs(Fragment, { children: [
		jsxs(_components.h1, {
			id: "faq--non-goals",
			children: [jsx(_components.a, {
				className: "header-anchor",
				"aria-label": "Permalink to \"FAQ & Non-Goals\"",
				href: "#faq--non-goals",
				children: jsx(_components.span, {
					"aria-hidden": "true",
					children: "#"
				})
			}), "FAQ & Non-Goals"]
		}),
		"\n",
		jsxs(_components.h2, {
			id: "frequently-asked-questions",
			children: [jsx(_components.a, {
				className: "header-anchor",
				"aria-label": "Permalink to \"Frequently asked questions\"",
				href: "#frequently-asked-questions",
				children: jsx(_components.span, {
					"aria-hidden": "true",
					children: "#"
				})
			}), "Frequently asked questions"]
		}),
		"\n",
		jsxs(_components.h3, {
			id: "is-kin-store-production-ready",
			children: [jsx(_components.a, {
				className: "header-anchor",
				"aria-label": "Permalink to \"Is Kin Store production-ready?\"",
				href: "#is-kin-store-production-ready",
				children: jsx(_components.span, {
					"aria-hidden": "true",
					children: "#"
				})
			}), "Is Kin Store production-ready?"]
		}),
		"\n",
		jsxs(_components.p, { children: [
			"The core API (",
			jsx(_components.code, { children: "createStore" }),
			", ",
			jsx(_components.code, { children: "withPlugins" }),
			", ",
			jsx(_components.code, { children: "derive" }),
			"), the official plugins, and\nthe React bindings are all covered by tests that run on every publish. That\nsaid, the project is young: small community, short track record. Weigh those as\nreal inputs to your own risk assessment, not something the docs will talk you\nout of."
		] }),
		"\n",
		jsxs(_components.h3, {
			id: "does-it-work-outside-react",
			children: [jsx(_components.a, {
				className: "header-anchor",
				"aria-label": "Permalink to \"Does it work outside React?\"",
				href: "#does-it-work-outside-react",
				children: jsx(_components.span, {
					"aria-hidden": "true",
					children: "#"
				})
			}), "Does it work outside React?"]
		}),
		"\n",
		jsxs(_components.p, { children: [
			jsx(_components.code, { children: "@kintools/store-core" }),
			" and ",
			jsx(_components.code, { children: "@kintools/store-plugins" }),
			" have zero framework\ndependency: a store is a plain value with ",
			jsx(_components.code, { children: "get" }),
			"/",
			jsx(_components.code, { children: "set" }),
			"/",
			jsx(_components.code, { children: "subscribe" }),
			", usable from\nany JS/TS environment (vanilla, a framework's own reactivity, a worker, a\nNode/Deno backend). ",
			jsx(_components.code, { children: "@kintools/store-react" }),
			" is the only official framework\nbinding published today."
		] }),
		"\n",
		jsxs(_components.h3, {
			id: "is-there-official-vue-svelte-or-solid-support",
			children: [jsx(_components.a, {
				className: "header-anchor",
				"aria-label": "Permalink to \"Is there official Vue, Svelte, or Solid support?\"",
				href: "#is-there-official-vue-svelte-or-solid-support",
				children: jsx(_components.span, {
					"aria-hidden": "true",
					children: "#"
				})
			}), "Is there official Vue, Svelte, or Solid support?"]
		}),
		"\n",
		jsxs(_components.p, { children: [
			"Not today. Nothing in the architecture is React-specific (",
			jsx(_components.code, { children: "useStore" }),
			" is a thin\n",
			jsx(_components.code, { children: "useSyncExternalStore" }),
			" wrapper), so a similar binding for another framework is\nplausible future work, but no such package exists or is published yet.\n",
			jsx(_components.code, { children: "subscribe" }),
			" is plain enough to wire into another framework's reactivity by hand\nin the meantime."
		] }),
		"\n",
		jsxs(_components.h3, {
			id: "does-it-work-with-ssr--nextjs",
			children: [jsx(_components.a, {
				className: "header-anchor",
				"aria-label": "Permalink to \"Does it work with SSR / Next.js?\"",
				href: "#does-it-work-with-ssr--nextjs",
				children: jsx(_components.span, {
					"aria-hidden": "true",
					children: "#"
				})
			}), "Does it work with SSR / Next.js?"]
		}),
		"\n",
		jsxs(_components.p, { children: [
			"See the ",
			jsx(_components.a, {
				href: "/store/examples/nextjs",
				children: "Next.js example"
			}),
			". SSR mainly changes two\nthings: where the store instance lives (constructed per-request or via a\nprovider, not a module-level singleton shared across requests) and when\n",
			jsx(_components.code, { children: "persist" }),
			" is allowed to touch ",
			jsx(_components.code, { children: "localStorage" }),
			" (skipped on the server, hydrated\nexplicitly on the client)."
		] }),
		"\n",
		jsxs(_components.h3, {
			id: "is-there-a-devtools-integration",
			children: [jsx(_components.a, {
				className: "header-anchor",
				"aria-label": "Permalink to \"Is there a DevTools integration?\"",
				href: "#is-there-a-devtools-integration",
				children: jsx(_components.span, {
					"aria-hidden": "true",
					children: "#"
				})
			}), "Is there a DevTools integration?"]
		}),
		"\n",
		jsxs(_components.p, { children: [
			"The official ",
			jsx(_components.a, {
				href: "/store/plugins/devtools",
				children: jsx(_components.code, { children: "devtools" })
			}),
			" plugin connects a store to\nthe Redux DevTools Extension for time-travel debugging, action replay, and\njump-to-state. It's opt-in like every other plugin; a store that never registers\nit carries no devtools code."
		] }),
		"\n",
		jsxs(_components.h3, {
			id: "can-reducers-or-methods-be-async",
			children: [jsx(_components.a, {
				className: "header-anchor",
				"aria-label": "Permalink to \"Can reducers or methods be async?\"",
				href: "#can-reducers-or-methods-be-async",
				children: jsx(_components.span, {
					"aria-hidden": "true",
					children: "#"
				})
			}), "Can reducers or methods be async?"]
		}),
		"\n",
		jsxs(_components.p, { children: [
			jsx(_components.code, { children: "methods" }),
			" can be async directly; a method is just a function with full access to\n",
			jsx(_components.code, { children: "get" }),
			"/",
			jsx(_components.code, { children: "set" }),
			"/",
			jsx(_components.code, { children: "dispatch" }),
			". ",
			jsx(_components.code, { children: "reducers" }),
			" are pure and synchronous by design,\n",
			jsx(_components.code, { children: "(state, ...args) => nextState" }),
			", so async work (a ",
			jsx(_components.code, { children: "fetch" }),
			" call) belongs in a\nmethod that calls ",
			jsx(_components.code, { children: "dispatch" }),
			" or ",
			jsx(_components.code, { children: "set" }),
			" once the result is ready, not in the\nreducer itself."
		] }),
		"\n",
		jsxs(_components.h3, {
			id: "how-does-kin-store-handle-server-state-caching-and-refetching",
			children: [jsx(_components.a, {
				className: "header-anchor",
				"aria-label": "Permalink to \"How does Kin Store handle server state, caching, and refetching?\"",
				href: "#how-does-kin-store-handle-server-state-caching-and-refetching",
				children: jsx(_components.span, {
					"aria-hidden": "true",
					children: "#"
				})
			}), "How does Kin Store handle server state, caching, and refetching?"]
		}),
		"\n",
		jsxs(_components.p, { children: [
			"It doesn't, on purpose. ",
			jsx(_components.code, { children: "createStore" }),
			"/",
			jsx(_components.code, { children: "withPlugins" }),
			" model state your client\nowns; server-owned data (cached responses, request dedup, background refetch) is\nTanStack Query's job, not Kin Store's. See the\n",
			jsx(_components.a, {
				href: "/store/examples/",
				children: "TanStack Query examples"
			}),
			" for two ways to split the two:\nclient state as one ",
			jsx(_components.code, { children: "withPlugins" }),
			" store, or one ",
			jsx(_components.code, { children: "createStore" }),
			" per field."
		] }),
		"\n",
		jsxs(_components.h3, {
			id: "does-persist-or-broadcast-handle-conflict-resolution-for-concurrent-edits",
			children: [
				jsx(_components.a, {
					className: "header-anchor",
					"aria-label": "Permalink to \"Does persist or broadcast handle conflict resolution for concurrent edits?\"",
					href: "#does-persist-or-broadcast-handle-conflict-resolution-for-concurrent-edits",
					children: jsx(_components.span, {
						"aria-hidden": "true",
						children: "#"
					})
				}),
				"Does ",
				jsx(_components.code, { children: "persist" }),
				" or ",
				jsx(_components.code, { children: "broadcast" }),
				" handle conflict resolution for concurrent edits?"
			]
		}),
		"\n",
		jsxs(_components.p, { children: [
			"No. ",
			jsx(_components.code, { children: "persist" }),
			" writes state to storage and reads it back; ",
			jsx(_components.code, { children: "broadcast" }),
			" mirrors\nstate across tabs with last-write-wins by wall-clock time, so if two tabs change\nstate within the same millisecond, one change is silently dropped. Neither\nmerges concurrent edits. For state that genuinely needs that (real-time\ncollaborative editing), reach for a CRDT library instead."
		] }),
		"\n",
		jsxs(_components.h3, {
			id: "whats-the-bundle-size",
			children: [jsx(_components.a, {
				className: "header-anchor",
				"aria-label": "Permalink to \"What's the bundle size?\"",
				href: "#whats-the-bundle-size",
				children: jsx(_components.span, {
					"aria-hidden": "true",
					children: "#"
				})
			}), "What's the bundle size?"]
		}),
		"\n",
		jsxs(_components.p, { children: [
			jsx(_components.code, { children: "createStore" }),
			" is 231 B gzipped, ",
			jsx(_components.code, { children: "withPlugins" }),
			" is 1.0 KB, and ",
			jsx(_components.code, { children: "derive" }),
			" is 438 B,\neach measured independently since you only pay for what you ",
			jsx(_components.code, { children: ".use()" }),
			". Plugins\nand the React bindings add their own (small) cost on top only when imported."
		] }),
		"\n",
		jsxs(_components.h3, {
			id: "where-do-i-ask-a-question-or-report-a-bug",
			children: [jsx(_components.a, {
				className: "header-anchor",
				"aria-label": "Permalink to \"Where do I ask a question or report a bug?\"",
				href: "#where-do-i-ask-a-question-or-report-a-bug",
				children: jsx(_components.span, {
					"aria-hidden": "true",
					children: "#"
				})
			}), "Where do I ask a question or report a bug?"]
		}),
		"\n",
		jsxs(_components.p, { children: [
			jsx(_components.a, {
				href: "https://github.com/kintools-dev/store/discussions",
				children: "GitHub Discussions"
			}),
			" for\nquestions and design feedback,\n",
			jsx(_components.a, {
				href: "https://github.com/kintools-dev/store/issues",
				children: "Issues"
			}),
			" for bugs."
		] }),
		"\n",
		jsxs(_components.h2, {
			id: "non-goals",
			children: [jsx(_components.a, {
				className: "header-anchor",
				"aria-label": "Permalink to \"Non-goals\"",
				href: "#non-goals",
				children: jsx(_components.span, {
					"aria-hidden": "true",
					children: "#"
				})
			}), "Non-goals"]
		}),
		"\n",
		jsxs(_components.p, { children: [
			"Kin Store has no request cache, no dedup, no background refetch; server state\n(cached responses, in-flight data) is TanStack Query's job, and\n",
			jsx(_components.code, { children: "createStore" }),
			"/",
			jsx(_components.code, { children: "withPlugins" }),
			" only ever model what the client owns."
		] }),
		"\n",
		jsxs(_components.p, { children: [
			"State changes only through ",
			jsx(_components.code, { children: "set" }),
			" or a dispatched reducer. Nothing mutates a\ndraft behind your back unless you explicitly opt into the\n",
			jsx(_components.a, {
				href: "/store/plugins/immer",
				children: jsx(_components.code, { children: "immer" })
			}),
			" plugin, so there's no implicit, proxy-based\nreactivity happening anywhere by default."
		] }),
		"\n",
		jsxs(_components.p, { children: [
			"It's also not a schema-validation library: state shape is whatever TypeScript\ntype you give ",
			jsx(_components.code, { children: "createStore" }),
			", and validating external input (an API response, a\nform submission) is left to a dedicated library. And it's not multi-framework\nyet; ",
			jsx(_components.code, { children: "@kintools/store-react" }),
			" is the only official binding, with no Vue, Svelte,\nor Solid package. If you're interested in Kin Store and want bindings for other\nframeworks, please\n",
			jsx(_components.a, {
				href: "https://github.com/kintools-dev/store/issues",
				children: "file an issue"
			}),
			"."
		] }),
		"\n",
		jsxs(_components.p, { children: [
			"Neither ",
			jsx(_components.code, { children: "persist" }),
			" nor ",
			jsx(_components.code, { children: "broadcast" }),
			" does conflict resolution beyond\nlast-write-wins, so don't reach for either as a substitute for a CRDT on state\nthat genuinely needs merged concurrent edits."
		] }),
		"\n",
		jsxs(_components.p, { children: [
			"Finally, Kin Store isn't trying to out-feature Redux. There's no built-in\nserializable action log format, no time-travel outside the ",
			jsx(_components.code, { children: "devtools" }),
			" plugin,\nand no code-generation step. The ",
			jsx(_components.a, {
				href: "/store/comparison/",
				children: "comparison page"
			}),
			" covers\nthose tradeoffs directly."
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
