import { jsx, jsxs } from "react/jsx-runtime";
//#region ../store/docs/index.md
var frontmatter = { "layout": "home" };
function _createMdxContent(props) {
	const _components = {
		code: "code",
		figure: "figure",
		p: "p",
		pre: "pre",
		span: "span",
		...props.components
	}, { Button, Card, Cta, FeatureMatrix, Grid, Hero, Home, Lede, Primitive, Principle, Prose, Section, SectionHeader } = _components;
	if (!Button) _missingMdxReference("Button", true);
	if (!Card) _missingMdxReference("Card", true);
	if (!Cta) _missingMdxReference("Cta", true);
	if (!FeatureMatrix) _missingMdxReference("FeatureMatrix", true);
	if (!Grid) _missingMdxReference("Grid", true);
	if (!Hero) _missingMdxReference("Hero", true);
	if (!Home) _missingMdxReference("Home", true);
	if (!Lede) _missingMdxReference("Lede", true);
	if (!Primitive) _missingMdxReference("Primitive", true);
	if (!Principle) _missingMdxReference("Principle", true);
	if (!Prose) _missingMdxReference("Prose", true);
	if (!Section) _missingMdxReference("Section", true);
	if (!SectionHeader) _missingMdxReference("SectionHeader", true);
	return jsxs(Home, { children: [
		jsxs(Hero, {
			title: "Kin Store",
			lede: "Start with a plain store. Add structure only when the app earns it.",
			description: "A framework-agnostic reactive state library for TypeScript.",
			children: [jsx(Button, {
				href: "/store/guide/getting-started",
				children: "Get Started"
			}), jsx(Button, {
				href: "https://github.com/kintools-dev/store",
				variant: "secondary",
				external: true,
				children: "View on GitHub"
			})]
		}),
		jsxs(Section, { children: [
			jsx(SectionHeader, { children: "Why it exists" }),
			jsx(Prose, { children: "Most state libraries pick your architecture before you know if the app needs one: actions, reducers, selectors, a provider tree, decided on day one. Kin Store leaves that decision to you." }),
			jsxs(Prose, { children: [
				jsx("code", { children: "set" }),
				" and ",
				jsx("code", { children: "dispatch" }),
				" are equally first-class, not a beginner tier and an advanced one, so the mutation style a store uses is a choice your team makes, not one the library makes for you."
			] })
		] }),
		jsxs(Section, { children: [jsx(SectionHeader, { children: "What it does differently" }), jsxs(Card, { children: [jsxs(Grid, {
			cols: 3,
			divided: true,
			children: [
				jsxs(Primitive, {
					step: "01",
					name: "createStore",
					size: "231 B",
					children: [
						jsx("code", { children: "get" }),
						", ",
						jsx("code", { children: "set" }),
						", ",
						jsx("code", { children: "subscribe" }),
						". Nothing else."
					]
				}),
				jsxs(Primitive, {
					step: "02",
					name: "withPlugins",
					size: "1.0 KB",
					children: [
						"Add methods, reducers, and middleware, one ",
						jsx("code", { children: ".use()" }),
						" at a time."
					]
				}),
				jsx(Primitive, {
					step: "03",
					name: "derive",
					size: "438 B",
					children: "Compose stores into new ones. It tracks what you read, not a graph you maintain."
				})
			]
		}), jsxs(Grid, {
			cols: 2,
			className: "mt-4 pt-4 border-t border-t-border",
			children: [
				jsxs(Principle, {
					title: "Minimal by default",
					children: [
						"A store starts as ",
						jsx("code", { children: "get" }),
						", ",
						jsx("code", { children: "set" }),
						", ",
						jsx("code", { children: "subscribe" }),
						", nothing else. Methods, reducers, middleware, and derived stores are things you add when you reach for them, not things you start with."
					]
				}),
				jsxs(Principle, {
					title: "Explicit, always",
					children: [
						"No proxies, no auto-tracked reactive graph, no immer unless you add it. State only changes where you called ",
						jsx("code", { children: "set" }),
						" or ",
						jsx("code", { children: "dispatch" }),
						"."
					]
				}),
				jsx(Principle, {
					title: "Plugins don't wrap",
					children: "Each plugin declares what it adds. Stack ten of them and the chain still reads top-to-bottom, nothing nested to unwind."
				}),
				jsxs(Principle, {
					title: "Derived state, no wiring",
					children: [jsx("code", { children: "derive" }), " tracks which stores you read automatically. No selector library, no dependency array to keep in sync by hand."]
				})
			]
		})] })] }),
		jsxs(Section, { children: [jsx(SectionHeader, { children: "Is Kin Store a fit?" }), jsx(Card, { children: jsxs(Grid, {
			cols: 2,
			children: [jsxs("div", { children: [jsx(Lede, {
				as: "h3",
				children: "Use it when state should start minimal"
			}), jsxs("ul", {
				className: "list-disc pl-5 [&>li+li]:mt-2",
				children: [
					jsx("li", { children: "State should start minimal, not architected upfront" }),
					jsx("li", { children: "You want typed reducers, middleware, or devtools, only where it matters" }),
					jsx("li", { children: "You want structure and traceability, without the ceremony" })
				]
			})] }), jsxs("div", { children: [jsx(Lede, {
				as: "h3",
				children: "Skip it when the simple thing is enough"
			}), jsxs("ul", {
				className: "list-disc pl-5 [&>li+li]:mt-2",
				children: [
					jsx("li", { children: "You need server-owned state: that's TanStack Query/SWR's job" }),
					jsx("li", { children: "You need non-React bindings today; Vue, Svelte, and Solid aren't published yet" }),
					jsx("li", { children: "Redux or Zustand already works fine for your team" })
				]
			})] })]
		}) })] }),
		jsxs(Section, { children: [
			jsx(SectionHeader, { children: "How it compares" }),
			jsx(FeatureMatrix, {}),
			jsxs("p", {
				className: "mt-6",
				children: ["For full comparison, ", jsx(Cta, {
					href: "/store/comparison/",
					children: "see the details →"
				})]
			})
		] }),
		jsxs(Section, { children: [
			jsx(SectionHeader, { children: "See it for yourself" }),
			jsx(Lede, {
				step: "01",
				children: "Declare"
			}),
			jsx(_components.figure, {
				"data-rehype-pretty-code-figure": "",
				children: jsx(_components.pre, {
					tabIndex: "0",
					"data-language": "ts",
					"data-theme": "poimandres-light",
					children: jsxs(_components.code, {
						"data-language": "ts",
						"data-theme": "poimandres-light",
						style: { display: "grid" },
						children: [
							jsxs(_components.span, {
								"data-line": "",
								children: [
									jsx(_components.span, {
										style: { "--shiki-light": "#0F7D6C" },
										children: "import "
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: "{"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#1A6FB0" },
										children: " createStore"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: " }"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: " from"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: " \""
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#9A5B13" },
										children: "@kintools/store-core"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: "\""
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: ";"
									})
								]
							}),
							"\n",
							jsx(_components.span, {
								"data-line": "",
								children: " "
							}),
							"\n",
							jsxs(_components.span, {
								"data-line": "",
								children: [
									jsx(_components.span, {
										style: { "--shiki-light": "#3D6F94" },
										children: "const"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: " count"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3D6F94" },
										children: " ="
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: " createStore"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: "("
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#9A5B13" },
										children: "0"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: ");"
									})
								]
							}),
							"\n",
							jsx(_components.span, {
								"data-line": "",
								children: " "
							}),
							"\n",
							jsxs(_components.span, {
								"data-line": "",
								children: [
									jsx(_components.span, {
										style: { "--shiki-light": "#3D6F94" },
										children: "const"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: " theme"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3D6F94" },
										children: " ="
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: " createStore"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: "<"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: "\""
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#9A5B13" },
										children: "light"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: "\""
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3D6F94" },
										children: " |"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: " \""
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#9A5B13" },
										children: "dark"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: "\""
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: ">("
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: "\""
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#9A5B13" },
										children: "light"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: "\""
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: ");"
									})
								]
							}),
							"\n",
							jsx(_components.span, {
								"data-line": "",
								children: " "
							}),
							"\n",
							jsxs(_components.span, {
								"data-line": "",
								children: [
									jsx(_components.span, {
										style: { "--shiki-light": "#3D6F94" },
										children: "type"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: " TodoState"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3D6F94" },
										children: " ="
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: " {"
									})
								]
							}),
							"\n",
							jsxs(_components.span, {
								"data-line": "",
								children: [
									jsx(_components.span, {
										style: { "--shiki-light": "#1A6FB0" },
										children: "  items"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3D6F94" },
										children: ":"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: " string[];"
									})
								]
							}),
							"\n",
							jsxs(_components.span, {
								"data-line": "",
								children: [
									jsx(_components.span, {
										style: { "--shiki-light": "#1A6FB0" },
										children: "  status"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3D6F94" },
										children: ":"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: " \""
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#9A5B13" },
										children: "idle"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: "\""
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3D6F94" },
										children: " |"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: " \""
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#9A5B13" },
										children: "loading"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: "\""
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: ";"
									})
								]
							}),
							"\n",
							jsx(_components.span, {
								"data-line": "",
								children: jsx(_components.span, {
									style: { "--shiki-light": "#3C4257" },
									children: "};"
								})
							}),
							"\n",
							jsxs(_components.span, {
								"data-line": "",
								children: [
									jsx(_components.span, {
										style: { "--shiki-light": "#3D6F94" },
										children: "const"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: " todos"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3D6F94" },
										children: " ="
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: " createStore"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: "<TodoState>({"
									})
								]
							}),
							"\n",
							jsxs(_components.span, {
								"data-line": "",
								children: [
									jsx(_components.span, {
										style: { "--shiki-light": "#1A6FB0" },
										children: "  items"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: ":"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: " [],"
									})
								]
							}),
							"\n",
							jsxs(_components.span, {
								"data-line": "",
								children: [
									jsx(_components.span, {
										style: { "--shiki-light": "#1A6FB0" },
										children: "  status"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: ":"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: " \""
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#9A5B13" },
										children: "idle"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: "\""
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: ","
									})
								]
							}),
							"\n",
							jsx(_components.span, {
								"data-line": "",
								children: jsx(_components.span, {
									style: { "--shiki-light": "#3C4257" },
									children: "});"
								})
							})
						]
					})
				})
			}),
			jsx("br", {}),
			jsx("br", {}),
			jsx(Lede, {
				step: "02",
				children: "Read, write, subscribe"
			}),
			jsx(_components.figure, {
				"data-rehype-pretty-code-figure": "",
				children: jsx(_components.pre, {
					tabIndex: "0",
					"data-language": "ts",
					"data-theme": "poimandres-light",
					children: jsxs(_components.code, {
						"data-language": "ts",
						"data-theme": "poimandres-light",
						style: { display: "grid" },
						children: [
							jsxs(_components.span, {
								"data-line": "",
								children: [
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "count"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: "."
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "set"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: "(("
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "n"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: ") "
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3D6F94" },
										children: "=>"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: " n"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3D6F94" },
										children: " +"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#9A5B13" },
										children: " 1"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: ");"
									})
								]
							}),
							"\n",
							jsxs(_components.span, {
								"data-line": "",
								children: [
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "theme"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: "."
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "set"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: "("
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: "\""
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#9A5B13" },
										children: "dark"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: "\""
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: ");"
									})
								]
							}),
							"\n",
							jsxs(_components.span, {
								"data-line": "",
								children: [
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "todos"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: "."
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "set"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: "(("
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "s"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: ") "
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3D6F94" },
										children: "=>"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: " ({"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3D6F94" },
										children: " ..."
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "s"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: ","
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#1A6FB0" },
										children: " items"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: ":"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: " ["
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3D6F94" },
										children: "..."
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "s"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: "."
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "items"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: ","
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: " \""
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#9A5B13" },
										children: "Buy milk"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: "\""
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: "]"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: " }));"
									})
								]
							}),
							"\n",
							jsx(_components.span, {
								"data-line": "",
								children: " "
							}),
							"\n",
							jsxs(_components.span, {
								"data-line": "",
								children: [
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "console"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: "."
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "log"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: "("
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "count"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: "."
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "get"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: "()); "
									}),
									jsx(_components.span, {
										style: {
											"--shiki-light": "#A83A1C",
											"--shiki-light-font-style": "italic"
										},
										children: "// 1"
									})
								]
							}),
							"\n",
							jsx(_components.span, {
								"data-line": "",
								children: " "
							}),
							"\n",
							jsxs(_components.span, {
								"data-line": "",
								children: [
									jsx(_components.span, {
										style: { "--shiki-light": "#3D6F94" },
										children: "const"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: " unsubscribe"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3D6F94" },
										children: " ="
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: " count"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: "."
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "subscribe"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: "(("
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "get"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: ", "
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "prev"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: ") "
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3D6F94" },
										children: "=>"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: " {"
									})
								]
							}),
							"\n",
							jsxs(_components.span, {
								"data-line": "",
								children: [
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "  console"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: "."
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "log"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: "("
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "prev"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: ", "
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: "\""
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#9A5B13" },
										children: "->"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: "\""
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: ", "
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "get"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: "());"
									})
								]
							}),
							"\n",
							jsx(_components.span, {
								"data-line": "",
								children: jsx(_components.span, {
									style: { "--shiki-light": "#3C4257" },
									children: "});"
								})
							}),
							"\n",
							jsxs(_components.span, {
								"data-line": "",
								children: [
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "count"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: "."
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "set"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: "(("
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "n"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: ") "
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3D6F94" },
										children: "=>"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: " n"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3D6F94" },
										children: " +"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#9A5B13" },
										children: " 1"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: "); "
									}),
									jsx(_components.span, {
										style: {
											"--shiki-light": "#A83A1C",
											"--shiki-light-font-style": "italic"
										},
										children: "// logs \"1 -> 2\""
									})
								]
							})
						]
					})
				})
			}),
			jsx("br", {}),
			jsx("br", {}),
			jsx(Lede, {
				step: "03",
				children: "Compose"
			}),
			jsx(Prose, { children: jsxs(_components.p, { children: [
				jsx(_components.code, { children: "derive" }),
				" automatically tracks dependencies without requiring a complex\nreactive graph runtime, thanks to the explicit ",
				jsx(_components.code, { children: "get(store)" }),
				" calls."
			] }) }),
			jsx(_components.figure, {
				"data-rehype-pretty-code-figure": "",
				children: jsx(_components.pre, {
					tabIndex: "0",
					"data-language": "ts",
					"data-theme": "poimandres-light",
					children: jsxs(_components.code, {
						"data-language": "ts",
						"data-theme": "poimandres-light",
						style: { display: "grid" },
						children: [
							jsxs(_components.span, {
								"data-line": "",
								children: [
									jsx(_components.span, {
										style: { "--shiki-light": "#0F7D6C" },
										children: "import "
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: "{"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#1A6FB0" },
										children: " derive"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: " }"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: " from"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: " \""
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#9A5B13" },
										children: "@kintools/store-core"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: "\""
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: ";"
									})
								]
							}),
							"\n",
							jsx(_components.span, {
								"data-line": "",
								children: " "
							}),
							"\n",
							jsxs(_components.span, {
								"data-line": "",
								children: [
									jsx(_components.span, {
										style: { "--shiki-light": "#3D6F94" },
										children: "const"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: " itemCount"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3D6F94" },
										children: " ="
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: " derive"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: "(("
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "get"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: ") "
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3D6F94" },
										children: "=>"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: " get"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: "("
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "todos"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: ")."
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "items"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: "."
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "length"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: ");"
									})
								]
							}),
							"\n",
							jsxs(_components.span, {
								"data-line": "",
								children: [
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "console"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: "."
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "log"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: "("
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "itemCount"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: "."
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "get"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: "()); "
									}),
									jsx(_components.span, {
										style: {
											"--shiki-light": "#A83A1C",
											"--shiki-light-font-style": "italic"
										},
										children: "// 1"
									})
								]
							})
						]
					})
				})
			}),
			jsx("br", {}),
			jsx("br", {}),
			jsx(Lede, {
				step: "04",
				children: "When the store earns it, add structure"
			}),
			jsx(Prose, { children: jsxs(_components.p, { children: [
				"Each ",
				jsx(_components.code, { children: "use()" }),
				" registers a plugin (namespaced or top-level).\nPlugins are plain objects declaring methods, reducers, middleware, lifecycle hooks.\nNothing wraps or patches the store."
			] }) }),
			jsx(_components.figure, {
				"data-rehype-pretty-code-figure": "",
				children: jsx(_components.pre, {
					tabIndex: "0",
					"data-language": "ts",
					"data-theme": "poimandres-light",
					children: jsxs(_components.code, {
						"data-language": "ts",
						"data-theme": "poimandres-light",
						style: { display: "grid" },
						children: [
							jsxs(_components.span, {
								"data-line": "",
								children: [
									jsx(_components.span, {
										style: { "--shiki-light": "#0F7D6C" },
										children: "import "
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: "{"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#1A6FB0" },
										children: " withPlugins"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: " }"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: " from"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: " \""
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#9A5B13" },
										children: "@kintools/store-core"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: "\""
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: ";"
									})
								]
							}),
							"\n",
							jsxs(_components.span, {
								"data-line": "",
								children: [
									jsx(_components.span, {
										style: { "--shiki-light": "#0F7D6C" },
										children: "import "
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: "{"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#1A6FB0" },
										children: " devtools"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: ","
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#1A6FB0" },
										children: " persist"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: " }"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: " from"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: " \""
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#9A5B13" },
										children: "@kintools/store-plugins"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: "\""
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: ";"
									})
								]
							}),
							"\n",
							jsx(_components.span, {
								"data-line": "",
								children: " "
							}),
							"\n",
							jsxs(_components.span, {
								"data-line": "",
								children: [
									jsx(_components.span, {
										style: { "--shiki-light": "#3D6F94" },
										children: "const"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: " store"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3D6F94" },
										children: " ="
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: " withPlugins"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: "("
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "todos"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: ")"
									})
								]
							}),
							"\n",
							jsxs(_components.span, {
								"data-line": "",
								children: [
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: "  ."
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "use"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: "("
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: "\""
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#9A5B13" },
										children: "persist"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: "\""
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: ", "
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "persist"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: "({"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#1A6FB0" },
										children: " key"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: ":"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: " \""
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#9A5B13" },
										children: "todos"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: "\""
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: " }))"
									})
								]
							}),
							"\n",
							jsxs(_components.span, {
								"data-line": "",
								children: [
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: "  ."
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "use"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: "("
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: "\""
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#9A5B13" },
										children: "devtools"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: "\""
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: ", "
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "devtools"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: "())"
									})
								]
							}),
							"\n",
							jsxs(_components.span, {
								"data-line": "",
								children: [
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: "  ."
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "use"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: "({"
									})
								]
							}),
							"\n",
							jsxs(_components.span, {
								"data-line": "",
								children: [
									jsx(_components.span, {
										style: { "--shiki-light": "#1A6FB0" },
										children: "    methods"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: ":"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: " ("
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "store"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: ")"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3D6F94" },
										children: " =>"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: " ({"
									})
								]
							}),
							"\n",
							jsxs(_components.span, {
								"data-line": "",
								children: [
									jsx(_components.span, {
										style: { "--shiki-light": "#1A6FB0" },
										children: "      addTodo"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: "("
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "text"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3D6F94" },
										children: ":"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: " string)"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3D6F94" },
										children: ":"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: " void"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: " {"
									})
								]
							}),
							"\n",
							jsxs(_components.span, {
								"data-line": "",
								children: [
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "        store"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: "."
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "set"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: "(("
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "s"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: ")"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3D6F94" },
										children: " =>"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: " ({"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3D6F94" },
										children: " ..."
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "s"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: ","
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#1A6FB0" },
										children: " items"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: ":"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: " ["
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3D6F94" },
										children: "..."
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "s"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: "."
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "items"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: ","
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: " text"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: "]"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: " }));"
									})
								]
							}),
							"\n",
							jsx(_components.span, {
								"data-line": "",
								children: jsx(_components.span, {
									style: { "--shiki-light": "#3C4257" },
									children: "      },"
								})
							}),
							"\n",
							jsxs(_components.span, {
								"data-line": "",
								children: [
									jsx(_components.span, {
										style: { "--shiki-light": "#0F7D6C" },
										children: "      async"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#1A6FB0" },
										children: " fetchTodos"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: "()"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3D6F94" },
										children: ":"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: " Promise<void>"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: " {"
									})
								]
							}),
							"\n",
							jsxs(_components.span, {
								"data-line": "",
								children: [
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "        store"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: "."
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "set"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: "(("
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "s"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: ")"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3D6F94" },
										children: " =>"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: " ({"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3D6F94" },
										children: " ..."
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "s"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: ","
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#1A6FB0" },
										children: " status"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: ":"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: " \""
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#9A5B13" },
										children: "loading"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: "\""
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: " }));"
									})
								]
							}),
							"\n",
							jsxs(_components.span, {
								"data-line": "",
								children: [
									jsx(_components.span, {
										style: { "--shiki-light": "#3D6F94" },
										children: "        const"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: " items "
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3D6F94" },
										children: "="
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#0F7D6C" },
										children: " await"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: " api"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: "."
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "fetchTodos"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: "();"
									})
								]
							}),
							"\n",
							jsxs(_components.span, {
								"data-line": "",
								children: [
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "        store"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: "."
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "set"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: "({"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: " items"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: ","
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#1A6FB0" },
										children: " status"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: ":"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: " \""
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#9A5B13" },
										children: "idle"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: "\""
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: " });"
									})
								]
							}),
							"\n",
							jsx(_components.span, {
								"data-line": "",
								children: jsx(_components.span, {
									style: { "--shiki-light": "#3C4257" },
									children: "      },"
								})
							}),
							"\n",
							jsx(_components.span, {
								"data-line": "",
								children: jsx(_components.span, {
									style: { "--shiki-light": "#3C4257" },
									children: "    }),"
								})
							}),
							"\n",
							jsx(_components.span, {
								"data-line": "",
								children: jsx(_components.span, {
									style: { "--shiki-light": "#3C4257" },
									children: "  });"
								})
							}),
							"\n",
							jsx(_components.span, {
								"data-line": "",
								children: " "
							}),
							"\n",
							jsxs(_components.span, {
								"data-line": "",
								children: [
									jsx(_components.span, {
										style: { "--shiki-light": "#0F7D6C" },
										children: "await"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: " store"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: "."
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "persist"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: "."
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "hydrate"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: "(); "
									}),
									jsx(_components.span, {
										style: {
											"--shiki-light": "#A83A1C",
											"--shiki-light-font-style": "italic"
										},
										children: "// From the namespaced persist plugin."
									})
								]
							}),
							"\n",
							jsxs(_components.span, {
								"data-line": "",
								children: [
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "store"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: "."
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "addTodo"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: "("
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: "\""
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#9A5B13" },
										children: "Buy milk"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: "\""
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: "); "
									}),
									jsx(_components.span, {
										style: {
											"--shiki-light": "#A83A1C",
											"--shiki-light-font-style": "italic"
										},
										children: "// From the top-level inline plugin."
									})
								]
							})
						]
					})
				})
			}),
			jsx("br", {}),
			jsx("br", {}),
			jsxs(Lede, {
				step: "05",
				children: [
					"Need traceability? Add reducers and replace ",
					jsx("code", { children: "set" }),
					" by\n",
					jsx("code", { children: "dispatch" }),
					" for those changes"
				]
			}),
			jsx(_components.figure, {
				"data-rehype-pretty-code-figure": "",
				children: jsx(_components.pre, {
					tabIndex: "0",
					"data-language": "ts",
					"data-theme": "poimandres-light",
					children: jsxs(_components.code, {
						"data-language": "ts",
						"data-theme": "poimandres-light",
						style: { display: "grid" },
						children: [
							jsxs(_components.span, {
								"data-line": "",
								children: [
									jsx(_components.span, {
										style: { "--shiki-light": "#3D6F94" },
										children: "const"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: " store"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3D6F94" },
										children: " ="
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: " withPlugins"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: "("
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "todos"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: ")"
									})
								]
							}),
							"\n",
							jsxs(_components.span, {
								"data-line": "",
								children: [
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: "  ."
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "use"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: "("
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: "\""
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#9A5B13" },
										children: "persist"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: "\""
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: ", "
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "persist"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: "({"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#1A6FB0" },
										children: " key"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: ":"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: " \""
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#9A5B13" },
										children: "todos"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: "\""
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: " }))"
									})
								]
							}),
							"\n",
							jsxs(_components.span, {
								"data-line": "",
								children: [
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: "  ."
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "use"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: "("
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: "\""
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#9A5B13" },
										children: "devtools"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: "\""
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: ", "
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "devtools"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: "())"
									})
								]
							}),
							"\n",
							jsxs(_components.span, {
								"data-line": "",
								children: [
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: "  ."
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "use"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: "({"
									})
								]
							}),
							"\n",
							jsxs(_components.span, {
								"data-line": "",
								"data-highlighted-line": "",
								children: [
									jsx(_components.span, {
										style: { "--shiki-light": "#1A6FB0" },
										children: "    reducers"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: ":"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: " {"
									})
								]
							}),
							"\n",
							jsxs(_components.span, {
								"data-line": "",
								"data-highlighted-line": "",
								children: [
									jsx(_components.span, {
										style: { "--shiki-light": "#1A6FB0" },
										children: "      addTodo"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: ":"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: " ("
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "s"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: ","
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: " text"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3D6F94" },
										children: ":"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: " string)"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3D6F94" },
										children: " =>"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: " ({"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3D6F94" },
										children: " ..."
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "s"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: ","
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#1A6FB0" },
										children: " items"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: ":"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: " ["
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3D6F94" },
										children: "..."
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "s"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: "."
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "items"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: ","
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: " text"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: "]"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: " }),"
									})
								]
							}),
							"\n",
							jsxs(_components.span, {
								"data-line": "",
								"data-highlighted-line": "",
								children: [
									jsx(_components.span, {
										style: { "--shiki-light": "#1A6FB0" },
										children: "      fetchStart"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: ":"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: " ("
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "s"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: ")"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3D6F94" },
										children: " =>"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: " ({"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3D6F94" },
										children: " ..."
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "s"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: ","
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#1A6FB0" },
										children: " status"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: ":"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: " \""
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#9A5B13" },
										children: "loading"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: "\""
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: " }),"
									})
								]
							}),
							"\n",
							jsxs(_components.span, {
								"data-line": "",
								"data-highlighted-line": "",
								children: [
									jsx(_components.span, {
										style: { "--shiki-light": "#1A6FB0" },
										children: "      fetchDone"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: ":"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: " ("
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "_s"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: ","
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: " items"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3D6F94" },
										children: ":"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: " string[])"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3D6F94" },
										children: " =>"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: " ({"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: " items"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: ","
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#1A6FB0" },
										children: " status"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: ":"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: " \""
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#9A5B13" },
										children: "idle"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: "\""
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: " }),"
									})
								]
							}),
							"\n",
							jsx(_components.span, {
								"data-line": "",
								"data-highlighted-line": "",
								children: jsx(_components.span, {
									style: { "--shiki-light": "#3C4257" },
									children: "    },"
								})
							}),
							"\n",
							jsxs(_components.span, {
								"data-line": "",
								children: [
									jsx(_components.span, {
										style: { "--shiki-light": "#1A6FB0" },
										children: "    methods"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: ":"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: " ("
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "store"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: ")"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3D6F94" },
										children: " =>"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: " ({"
									})
								]
							}),
							"\n",
							jsxs(_components.span, {
								"data-line": "",
								children: [
									jsx(_components.span, {
										style: { "--shiki-light": "#0F7D6C" },
										children: "      async"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#1A6FB0" },
										children: " fetchTodos"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: "()"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3D6F94" },
										children: ":"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: " Promise<void>"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: " {"
									})
								]
							}),
							"\n",
							jsxs(_components.span, {
								"data-line": "",
								"data-highlighted-line": "",
								children: [
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "        store"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: "."
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "dispatch"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: "."
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "fetchStart"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: "();"
									})
								]
							}),
							"\n",
							jsxs(_components.span, {
								"data-line": "",
								children: [
									jsx(_components.span, {
										style: { "--shiki-light": "#3D6F94" },
										children: "        const"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: " items "
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3D6F94" },
										children: "="
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#0F7D6C" },
										children: " await"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: " api"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: "."
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "fetchTodos"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: "();"
									})
								]
							}),
							"\n",
							jsxs(_components.span, {
								"data-line": "",
								"data-highlighted-line": "",
								children: [
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "        store"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: "."
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "dispatch"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: "."
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "fetchDone"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: "("
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "items"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: ");"
									})
								]
							}),
							"\n",
							jsx(_components.span, {
								"data-line": "",
								children: jsx(_components.span, {
									style: { "--shiki-light": "#3C4257" },
									children: "      },"
								})
							}),
							"\n",
							jsx(_components.span, {
								"data-line": "",
								children: jsx(_components.span, {
									style: { "--shiki-light": "#3C4257" },
									children: "    }),"
								})
							}),
							"\n",
							jsx(_components.span, {
								"data-line": "",
								children: jsx(_components.span, {
									style: { "--shiki-light": "#3C4257" },
									children: "  });"
								})
							}),
							"\n",
							jsx(_components.span, {
								"data-line": "",
								children: " "
							}),
							"\n",
							jsxs(_components.span, {
								"data-line": "",
								children: [
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "store"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: "."
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "dispatch"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: "."
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "addTodo"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: "("
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: "\""
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#9A5B13" },
										children: "Buy milk"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: "\""
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: "); "
									}),
									jsx(_components.span, {
										style: {
											"--shiki-light": "#A83A1C",
											"--shiki-light-font-style": "italic"
										},
										children: "// Full intellisense, logged in devtools."
									})
								]
							})
						]
					})
				})
			}),
			jsx("br", {}),
			jsxs(Prose, { children: [
				jsx("code", { children: "set" }),
				"/",
				jsx("code", { children: "dispatch" }),
				" are both first-class here: pick\nwhichever fits this store or method, not a ladder from one to the other."
			] }),
			jsx("br", {}),
			jsx(Lede, { children: "In React" }),
			jsx(_components.figure, {
				"data-rehype-pretty-code-figure": "",
				children: jsx(_components.pre, {
					tabIndex: "0",
					"data-language": "tsx",
					"data-theme": "poimandres-light",
					children: jsxs(_components.code, {
						"data-language": "tsx",
						"data-theme": "poimandres-light",
						style: { display: "grid" },
						children: [
							jsxs(_components.span, {
								"data-line": "",
								children: [
									jsx(_components.span, {
										style: { "--shiki-light": "#0F7D6C" },
										children: "import "
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: "{"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#1A6FB0" },
										children: " useSelector"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: ","
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#1A6FB0" },
										children: " useStore"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: " }"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: " from"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: " \""
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#9A5B13" },
										children: "@kintools/store-react"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: "\""
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: ";"
									})
								]
							}),
							"\n",
							jsx(_components.span, {
								"data-line": "",
								children: " "
							}),
							"\n",
							jsxs(_components.span, {
								"data-line": "",
								children: [
									jsx(_components.span, {
										style: { "--shiki-light": "#3D6F94" },
										children: "function"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#1A6FB0" },
										children: " Counter"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: "()"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3D6F94" },
										children: ":"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: " JSX.Element {"
									})
								]
							}),
							"\n",
							jsx(_components.span, {
								"data-line": "",
								children: jsx(_components.span, {
									style: {
										"--shiki-light": "#A83A1C",
										"--shiki-light-font-style": "italic"
									},
									children: "  // Re-renders on every change. Works great for primitive stores."
								})
							}),
							"\n",
							jsxs(_components.span, {
								"data-line": "",
								"data-highlighted-line": "",
								children: [
									jsx(_components.span, {
										style: { "--shiki-light": "#3D6F94" },
										children: "  const"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: " value"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3D6F94" },
										children: " ="
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: " useStore"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: "("
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "count"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: ");"
									})
								]
							}),
							"\n",
							jsx(_components.span, {
								"data-line": "",
								children: " "
							}),
							"\n",
							jsxs(_components.span, {
								"data-line": "",
								"data-highlighted-line": "",
								children: [
									jsx(_components.span, {
										style: { "--shiki-light": "#0F7D6C" },
										children: "  return"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: " <"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#0F7D6C" },
										children: "button"
									}),
									jsx(_components.span, {
										style: {
											"--shiki-light": "#3D6F94",
											"--shiki-light-font-style": "italic"
										},
										children: " onClick"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3D6F94" },
										children: "="
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "{"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: "()"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3D6F94" },
										children: " =>"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: " count"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: "."
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "set"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: "(("
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "n"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: ")"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3D6F94" },
										children: " =>"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: " n "
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3D6F94" },
										children: "+"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#9A5B13" },
										children: " 1"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: ")"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "}>{value}</"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#0F7D6C" },
										children: "button"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: ">"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: ";"
									})
								]
							}),
							"\n",
							jsx(_components.span, {
								"data-line": "",
								children: jsx(_components.span, {
									style: { "--shiki-light": "#3C4257" },
									children: "}"
								})
							}),
							"\n",
							jsx(_components.span, {
								"data-line": "",
								children: " "
							}),
							"\n",
							jsxs(_components.span, {
								"data-line": "",
								children: [
									jsx(_components.span, {
										style: { "--shiki-light": "#3D6F94" },
										children: "function"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#1A6FB0" },
										children: " TodoList"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: "()"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3D6F94" },
										children: ":"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: " JSX.Element {"
									})
								]
							}),
							"\n",
							jsx(_components.span, {
								"data-line": "",
								children: jsx(_components.span, {
									style: {
										"--shiki-light": "#A83A1C",
										"--shiki-light-font-style": "italic"
									},
									children: "  // Re-renders only when items changes."
								})
							}),
							"\n",
							jsxs(_components.span, {
								"data-line": "",
								"data-highlighted-line": "",
								children: [
									jsx(_components.span, {
										style: { "--shiki-light": "#3D6F94" },
										children: "  const"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: " items"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3D6F94" },
										children: " ="
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: " useSelector"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: "("
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "store"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: ", ("
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "s"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: ") "
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3D6F94" },
										children: "=>"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: " s"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: "."
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "items"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: ");"
									})
								]
							}),
							"\n",
							jsx(_components.span, {
								"data-line": "",
								children: " "
							}),
							"\n",
							jsxs(_components.span, {
								"data-line": "",
								children: [jsx(_components.span, {
									style: { "--shiki-light": "#0F7D6C" },
									children: "  return"
								}), jsx(_components.span, {
									style: { "--shiki-light": "#3C4257" },
									children: " ("
								})]
							}),
							"\n",
							jsxs(_components.span, {
								"data-line": "",
								children: [
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "    <"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#0F7D6C" },
										children: "ul"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: ">"
									})
								]
							}),
							"\n",
							jsxs(_components.span, {
								"data-line": "",
								children: [
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "      {items"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: "."
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "map"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: "(("
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "item"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: ")"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3D6F94" },
										children: " =>"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: " <"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#0F7D6C" },
										children: "li"
									}),
									jsx(_components.span, {
										style: {
											"--shiki-light": "#3D6F94",
											"--shiki-light-font-style": "italic"
										},
										children: " key"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3D6F94" },
										children: "="
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "{item}>{item}</"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#0F7D6C" },
										children: "li"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: ">"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: ")"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "}"
									})
								]
							}),
							"\n",
							jsx(_components.span, {
								"data-line": "",
								children: " "
							}),
							"\n",
							jsxs(_components.span, {
								"data-line": "",
								children: [
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "      {"
									}),
									jsx(_components.span, {
										style: {
											"--shiki-light": "#A83A1C",
											"--shiki-light-font-style": "italic"
										},
										children: "/* Direct method reference. No hook, no subscription. */"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "}"
									})
								]
							}),
							"\n",
							jsxs(_components.span, {
								"data-line": "",
								"data-highlighted-line": "",
								children: [
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "      <"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#0F7D6C" },
										children: "button"
									}),
									jsx(_components.span, {
										style: {
											"--shiki-light": "#3D6F94",
											"--shiki-light-font-style": "italic"
										},
										children: " onClick"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3D6F94" },
										children: "="
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "{"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: "()"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3D6F94" },
										children: " =>"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: " store"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: "."
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "addTodo"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: "("
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: "\""
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#9A5B13" },
										children: "Buy milk"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: "\""
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: ")"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "}>Add</"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#0F7D6C" },
										children: "button"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: ">"
									})
								]
							}),
							"\n",
							jsxs(_components.span, {
								"data-line": "",
								children: [
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "    </"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#0F7D6C" },
										children: "ul"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: ">"
									})
								]
							}),
							"\n",
							jsx(_components.span, {
								"data-line": "",
								children: jsx(_components.span, {
									style: { "--shiki-light": "#3C4257" },
									children: "  );"
								})
							}),
							"\n",
							jsx(_components.span, {
								"data-line": "",
								children: jsx(_components.span, {
									style: { "--shiki-light": "#3C4257" },
									children: "}"
								})
							})
						]
					})
				})
			})
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
