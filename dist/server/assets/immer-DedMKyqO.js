import { Fragment, jsx, jsxs } from "react/jsx-runtime";
//#region ../store/docs/plugins/immer.md
var frontmatter = { "description": "The immer plugin lets reducers and set updaters mutate an Immer draft directly instead of returning a new state object." };
function _createMdxContent(props) {
	const _components = {
		a: "a",
		code: "code",
		figure: "figure",
		h1: "h1",
		h2: "h2",
		p: "p",
		pre: "pre",
		span: "span",
		...props.components
	};
	return jsxs(Fragment, { children: [
		jsxs(_components.h1, {
			id: "immer",
			children: [jsx(_components.a, {
				className: "header-anchor",
				"aria-label": "Permalink to \"immer\"",
				href: "#immer",
				children: jsx(_components.span, {
					"aria-hidden": "true",
					children: "#"
				})
			}), "immer"]
		}),
		"\n",
		jsxs(_components.p, { children: [
			"Write reducers (and ",
			jsx(_components.code, { children: "set" }),
			" calls) as ",
			jsx(_components.a, {
				href: "https://immerjs.github.io/immer/",
				children: "Immer"
			}),
			"\ndraft mutations instead of returning new state objects."
		] }),
		"\n",
		jsxs(_components.h2, {
			id: "basic-usage",
			children: [jsx(_components.a, {
				className: "header-anchor",
				"aria-label": "Permalink to \"Basic usage\"",
				href: "#basic-usage",
				children: jsx(_components.span, {
					"aria-hidden": "true",
					children: "#"
				})
			}), "Basic usage"]
		}),
		"\n",
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
									children: " immer"
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
									children: "({"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#1A6FB0" },
									children: " count"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#3C4257" },
									children: ":"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#9A5B13" },
									children: " 0"
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
									children: " []"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#3C4257" },
									children: " as"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#3C4257" },
									children: " string[]"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#3C4257" },
									children: " })"
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
									style: { "--shiki-light": "#16233A" },
									children: "immer"
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
							children: [
								jsx(_components.span, {
									style: { "--shiki-light": "#1A6FB0" },
									children: "      increment"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#3C4257" },
									children: "("
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#16233A" },
									children: "draft"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#3C4257" },
									children: ","
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#16233A" },
									children: " amount"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#3D6F94" },
									children: ":"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#3C4257" },
									children: " number)"
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
									children: "        draft"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#3C4257" },
									children: "."
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#16233A" },
									children: "count "
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#3D6F94" },
									children: "+="
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#16233A" },
									children: " amount"
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
								children: "      },"
							})
						}),
						"\n",
						jsxs(_components.span, {
							"data-line": "",
							children: [
								jsx(_components.span, {
									style: { "--shiki-light": "#1A6FB0" },
									children: "      addItem"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#3C4257" },
									children: "("
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#16233A" },
									children: "draft"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#3C4257" },
									children: ","
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#16233A" },
									children: " item"
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
									children: "        draft"
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
									children: "."
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#16233A" },
									children: "push"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#3C4257" },
									children: "("
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#16233A" },
									children: "item"
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
									style: { "--shiki-light": "#1A6FB0" },
									children: "      reset"
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
									children: "draft"
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
									children: "          draft"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#3C4257" },
									children: "."
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#16233A" },
									children: "count "
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#3D6F94" },
									children: "="
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#9A5B13" },
									children: " 0"
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
									style: { "--shiki-light": "#16233A" },
									children: "          draft"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#3C4257" },
									children: "."
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#16233A" },
									children: "items "
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#3D6F94" },
									children: "="
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#3C4257" },
									children: " [];"
								})
							]
						}),
						"\n",
						jsx(_components.span, {
							"data-line": "",
							children: jsx(_components.span, {
								style: { "--shiki-light": "#3C4257" },
								children: "        });"
							})
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
								children: "  }));"
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
									children: "increment"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#3C4257" },
									children: "("
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#9A5B13" },
									children: "5"
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
									children: "addItem"
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
									children: "hello"
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
									children: "store"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#3C4257" },
									children: "."
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#16233A" },
									children: "reset"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#3C4257" },
									children: "();"
								})
							]
						})
					]
				})
			})
		}),
		"\n",
		jsxs(_components.p, { children: [
			"The ",
			jsx(_components.code, { children: "immer()" }),
			" wrapper accepts the same fields as a standard ",
			jsx(_components.code, { children: "StorePlugin" }),
			":\n",
			jsx(_components.code, { children: "reducers" }),
			", ",
			jsx(_components.code, { children: "middleware" }),
			", ",
			jsx(_components.code, { children: "methods" }),
			", ",
			jsx(_components.code, { children: "onActivated" }),
			", and ",
			jsx(_components.code, { children: "onDestroy" }),
			". Inside\nthose callbacks, reducers mutate a draft instead of returning a new object, and\n",
			jsx(_components.code, { children: "set" }),
			" accepts a recipe ",
			jsx(_components.code, { children: "(draft) => void" }),
			" instead of a full state replacement."
		] }),
		"\n",
		jsxs(_components.h2, {
			id: "with-namespacing",
			children: [jsx(_components.a, {
				className: "header-anchor",
				"aria-label": "Permalink to \"With namespacing\"",
				href: "#with-namespacing",
				children: jsx(_components.span, {
					"aria-hidden": "true",
					children: "#"
				})
			}), "With namespacing"]
		}),
		"\n",
		jsxs(_components.p, { children: [jsx(_components.code, { children: "immer" }), " can also be applied as a namespaced plugin:"] }),
		"\n",
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
									children: "({"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#1A6FB0" },
									children: " todos"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#3C4257" },
									children: ":"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#3C4257" },
									children: " []"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#3C4257" },
									children: " as"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#3C4257" },
									children: " string[]"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#3C4257" },
									children: " })"
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
								})
							]
						}),
						"\n",
						jsxs(_components.span, {
							"data-line": "",
							children: [
								jsx(_components.span, {
									style: { "--shiki-light": "#3C4257" },
									children: "    \""
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
									children: ","
								})
							]
						}),
						"\n",
						jsxs(_components.span, {
							"data-line": "",
							children: [jsx(_components.span, {
								style: { "--shiki-light": "#16233A" },
								children: "    immer"
							}), jsx(_components.span, {
								style: { "--shiki-light": "#3C4257" },
								children: "({"
							})]
						}),
						"\n",
						jsxs(_components.span, {
							"data-line": "",
							children: [
								jsx(_components.span, {
									style: { "--shiki-light": "#1A6FB0" },
									children: "      reducers"
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
							children: [
								jsx(_components.span, {
									style: { "--shiki-light": "#1A6FB0" },
									children: "        add"
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
									children: "draft"
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
									children: "          draft"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#3C4257" },
									children: "."
								}),
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
									children: "push"
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
								children: "        },"
							})
						}),
						"\n",
						jsxs(_components.span, {
							"data-line": "",
							children: [
								jsx(_components.span, {
									style: { "--shiki-light": "#1A6FB0" },
									children: "        clear"
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
									children: "draft"
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
									children: "          draft"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#3C4257" },
									children: "."
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#16233A" },
									children: "todos"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#3D6F94" },
									children: " ="
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#3C4257" },
									children: " [];"
								})
							]
						}),
						"\n",
						jsx(_components.span, {
							"data-line": "",
							children: jsx(_components.span, {
								style: { "--shiki-light": "#3C4257" },
								children: "        },"
							})
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
								children: "  );"
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
									children: "todos"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#3C4257" },
									children: "."
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#16233A" },
									children: "add"
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
									children: "hello"
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
									children: "todos"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#3C4257" },
									children: "."
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#16233A" },
									children: "clear"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#3C4257" },
									children: "();"
								})
							]
						})
					]
				})
			})
		}),
		"\n",
		jsxs(_components.h2, {
			id: "note-on-type-inference",
			children: [jsx(_components.a, {
				className: "header-anchor",
				"aria-label": "Permalink to \"Note on type inference\"",
				href: "#note-on-type-inference",
				children: jsx(_components.span, {
					"aria-hidden": "true",
					children: "#"
				})
			}), "Note on type inference"]
		}),
		"\n",
		jsxs(_components.p, { children: [
			"Because Immer mutates a draft in-place (void return), reducers written with\n",
			jsx(_components.code, { children: "immer" }),
			" do not need to return a value. TypeScript fully infers argument types\nfrom the reducer signature."
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
