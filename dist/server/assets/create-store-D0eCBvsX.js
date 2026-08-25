import { Fragment, jsx, jsxs } from "react/jsx-runtime";
//#region ../store/docs/guide/create-store.md
var frontmatter = { "description": "createStore is Kin Store's minimal primitive, a value plus get, set, and subscribe, with no dispatch, no action types, and no plugins required." };
function _createMdxContent(props) {
	const _components = {
		a: "a",
		code: "code",
		figure: "figure",
		h1: "h1",
		h2: "h2",
		h3: "h3",
		li: "li",
		p: "p",
		pre: "pre",
		span: "span",
		ul: "ul",
		...props.components
	};
	return jsxs(Fragment, { children: [
		jsxs(_components.h1, {
			id: "createstore",
			children: [jsx(_components.a, {
				className: "header-anchor",
				"aria-label": "Permalink to \"createStore\"",
				href: "#createstore",
				children: jsx(_components.span, {
					"aria-hidden": "true",
					children: "#"
				})
			}), "createStore"]
		}),
		"\n",
		jsx(_components.p, { children: "The irreducible floor. A value and three methods." }),
		"\n",
		jsx(_components.figure, {
			"data-rehype-pretty-code-figure": "",
			children: jsx(_components.pre, {
				tabIndex: "0",
				"data-language": "ts",
				"data-theme": "poimandres-light",
				children: jsx(_components.code, {
					"data-language": "ts",
					"data-theme": "poimandres-light",
					style: { display: "grid" },
					children: jsxs(_components.span, {
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
					})
				})
			})
		}),
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
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#1A6FB0" },
									children: " todos"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#3D6F94" },
									children: ":"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#3C4257" },
									children: " string[];"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#1A6FB0" },
									children: " status"
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
									style: { "--shiki-light": "#3D6F94" },
									children: " |"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#3C4257" },
									children: " \""
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#9A5B13" },
									children: "failed"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#3C4257" },
									children: "\""
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#3C4257" },
									children: " };"
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
									children: " createStore"
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
									children: " [],"
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
									children: " } as TodoState);"
								})
							]
						})
					]
				})
			})
		}),
		"\n",
		jsxs(_components.p, { children: [
			jsx(_components.code, { children: "createStore" }),
			" holds any value and returns an object with three methods: ",
			jsx(_components.code, { children: "get" }),
			",\n",
			jsx(_components.code, { children: "set" }),
			", and ",
			jsx(_components.code, { children: "subscribe" }),
			". Logic lives in plain top-level functions — no dispatch,\nno action types."
		] }),
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
									children: "function"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#1A6FB0" },
									children: " addTodo"
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
									children: " void {"
								})
							]
						}),
						"\n",
						jsxs(_components.span, {
							"data-line": "",
							children: [
								jsx(_components.span, {
									style: { "--shiki-light": "#16233A" },
									children: "  store"
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
									children: " todos"
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
									children: "todos"
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
									style: { "--shiki-light": "#0F7D6C" },
									children: "async"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#3D6F94" },
									children: " function"
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
									children: " Promise<void> {"
								})
							]
						}),
						"\n",
						jsxs(_components.span, {
							"data-line": "",
							children: [
								jsx(_components.span, {
									style: { "--shiki-light": "#16233A" },
									children: "  store"
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
							children: [jsx(_components.span, {
								style: { "--shiki-light": "#B23370" },
								children: "  try"
							}), jsx(_components.span, {
								style: { "--shiki-light": "#3C4257" },
								children: " {"
							})]
						}),
						"\n",
						jsxs(_components.span, {
							"data-line": "",
							children: [
								jsx(_components.span, {
									style: { "--shiki-light": "#3D6F94" },
									children: "    const"
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
									children: "getTodos"
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
									children: "    store"
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
									children: " todos"
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
						jsxs(_components.span, {
							"data-line": "",
							children: [
								jsx(_components.span, {
									style: { "--shiki-light": "#3C4257" },
									children: "  } "
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#B23370" },
									children: "catch"
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
									children: "    store"
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
									children: "failed"
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
						jsx(_components.span, {
							"data-line": "",
							children: jsx(_components.span, {
								style: { "--shiki-light": "#3C4257" },
								children: "  }"
							})
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
									children: "Hello world"
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
									children: "store"
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
									children: "// { todos: ['Hello world'], status: 'idle' }"
								})
							]
						})
					]
				})
			})
		}),
		"\n",
		jsxs(_components.h2, {
			id: "api",
			children: [jsx(_components.a, {
				className: "header-anchor",
				"aria-label": "Permalink to \"API\"",
				href: "#api",
				children: jsx(_components.span, {
					"aria-hidden": "true",
					children: "#"
				})
			}), "API"]
		}),
		"\n",
		jsxs(_components.h3, {
			id: "get",
			children: [jsx(_components.a, {
				className: "header-anchor",
				"aria-label": "Permalink to \"get()\"",
				href: "#get",
				children: jsx(_components.span, {
					"aria-hidden": "true",
					children: "#"
				})
			}), jsx(_components.code, { children: "get()" })]
		}),
		"\n",
		jsx(_components.p, { children: "Reads the current state synchronously. Always returns the latest value." }),
		"\n",
		jsx(_components.figure, {
			"data-rehype-pretty-code-figure": "",
			children: jsx(_components.pre, {
				tabIndex: "0",
				"data-language": "ts",
				"data-theme": "poimandres-light",
				children: jsx(_components.code, {
					"data-language": "ts",
					"data-theme": "poimandres-light",
					style: { display: "grid" },
					children: jsxs(_components.span, {
						"data-line": "",
						children: [
							jsx(_components.span, {
								style: { "--shiki-light": "#3D6F94" },
								children: "const"
							}),
							jsx(_components.span, {
								style: { "--shiki-light": "#3C4257" },
								children: " { "
							}),
							jsx(_components.span, {
								style: { "--shiki-light": "#16233A" },
								children: "todos"
							}),
							jsx(_components.span, {
								style: { "--shiki-light": "#3C4257" },
								children: " } "
							}),
							jsx(_components.span, {
								style: { "--shiki-light": "#3D6F94" },
								children: "="
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
								children: "get"
							}),
							jsx(_components.span, {
								style: { "--shiki-light": "#3C4257" },
								children: "();"
							})
						]
					})
				})
			})
		}),
		"\n",
		jsxs(_components.h3, {
			id: "setnextstate",
			children: [jsx(_components.a, {
				className: "header-anchor",
				"aria-label": "Permalink to \"set(nextState)\"",
				href: "#setnextstate",
				children: jsx(_components.span, {
					"aria-hidden": "true",
					children: "#"
				})
			}), jsx(_components.code, { children: "set(nextState)" })]
		}),
		"\n",
		jsx(_components.p, { children: "Accepts a new value or an updater function. Notifies all subscribers." }),
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
						jsx(_components.span, {
							"data-line": "",
							children: jsx(_components.span, {
								style: {
									"--shiki-light": "#A83A1C",
									"--shiki-light-font-style": "italic"
								},
								children: "// Replace the whole state."
							})
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
									children: "set"
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
									children: " [],"
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
							children: " "
						}),
						"\n",
						jsx(_components.span, {
							"data-line": "",
							children: jsx(_components.span, {
								style: {
									"--shiki-light": "#A83A1C",
									"--shiki-light-font-style": "italic"
								},
								children: "// Merge via updater (the idiomatic pattern — avoids stale closures)."
							})
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
									children: " todos"
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
									children: "todos"
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
									children: "new item"
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
						})
					]
				})
			})
		}),
		"\n",
		jsxs(_components.h3, {
			id: "subscribelistener",
			children: [jsx(_components.a, {
				className: "header-anchor",
				"aria-label": "Permalink to \"subscribe(listener)\"",
				href: "#subscribelistener",
				children: jsx(_components.span, {
					"aria-hidden": "true",
					children: "#"
				})
			}), jsx(_components.code, { children: "subscribe(listener)" })]
		}),
		"\n",
		jsx(_components.p, { children: "Fires on every state change. Returns an unsubscribe function." }),
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
									children: " unsubscribe"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#3D6F94" },
									children: " ="
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
									children: "prevState"
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
									children: "prevState"
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
						jsx(_components.span, {
							"data-line": "",
							children: " "
						}),
						"\n",
						jsx(_components.span, {
							"data-line": "",
							children: jsx(_components.span, {
								style: {
									"--shiki-light": "#A83A1C",
									"--shiki-light-font-style": "italic"
								},
								children: "// Stop listening."
							})
						}),
						"\n",
						jsxs(_components.span, {
							"data-line": "",
							children: [jsx(_components.span, {
								style: { "--shiki-light": "#16233A" },
								children: "unsubscribe"
							}), jsx(_components.span, {
								style: { "--shiki-light": "#3C4257" },
								children: "();"
							})]
						})
					]
				})
			})
		}),
		"\n",
		jsxs(_components.p, { children: [
			"The listener receives ",
			jsx(_components.code, { children: "get" }),
			" (a getter, not the value itself) and ",
			jsx(_components.code, { children: "prevState" }),
			"\n(the state before the change). Using a getter allows\n",
			jsx(_components.a, {
				href: "/store/guide/derive",
				children: jsx(_components.code, { children: "derive" })
			}),
			" to stay lazy: a derived store defers\nrecomputation until something actually calls its ",
			jsx(_components.code, { children: "get()" }),
			", instead of recomputing\neagerly on every upstream change."
		] }),
		"\n",
		jsxs(_components.h2, {
			id: "listenerwithselector",
			children: [jsx(_components.a, {
				className: "header-anchor",
				"aria-label": "Permalink to \"listenerWithSelector\"",
				href: "#listenerwithselector",
				children: jsx(_components.span, {
					"aria-hidden": "true",
					children: "#"
				})
			}), jsx(_components.code, { children: "listenerWithSelector" })]
		}),
		"\n",
		jsx(_components.p, { children: "Wraps a listener so it only fires when a selected slice of the state changes.\nUseful for subscribing to a store outside of React without unnecessary re-runs." }),
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
									children: " listenerWithSelector"
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
									children: " store"
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
									children: " name"
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
									children: "Alice"
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
									children: "subscribe"
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
							children: [jsx(_components.span, {
								style: { "--shiki-light": "#16233A" },
								children: "  listenerWithSelector"
							}), jsx(_components.span, {
								style: { "--shiki-light": "#3C4257" },
								children: "("
							})]
						}),
						"\n",
						jsxs(_components.span, {
							"data-line": "",
							children: [
								jsx(_components.span, {
									style: { "--shiki-light": "#3C4257" },
									children: "    ("
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#16233A" },
									children: "getSlice"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#3C4257" },
									children: ", "
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#16233A" },
									children: "prevSlice"
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
									children: " console"
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
									style: { "--shiki-light": "#3C4257" },
									children: "\""
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#9A5B13" },
									children: "count:"
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
									children: "prevSlice"
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
									children: "getSlice"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#3C4257" },
									children: "()),"
								})
							]
						}),
						"\n",
						jsxs(_components.span, {
							"data-line": "",
							children: [
								jsx(_components.span, {
									style: { "--shiki-light": "#3C4257" },
									children: "    ("
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#16233A" },
									children: "state"
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
									children: " state"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#3C4257" },
									children: "."
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#16233A" },
									children: "count"
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
								children: "  ),"
							})
						}),
						"\n",
						jsx(_components.span, {
							"data-line": "",
							children: jsx(_components.span, {
								style: { "--shiki-light": "#3C4257" },
								children: ");"
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
									children: "set"
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
									children: " 1"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#3C4257" },
									children: ","
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#1A6FB0" },
									children: " name"
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
									children: "Alice"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#3C4257" },
									children: "\""
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#3C4257" },
									children: " }); "
								}),
								jsx(_components.span, {
									style: {
										"--shiki-light": "#A83A1C",
										"--shiki-light-font-style": "italic"
									},
									children: "// logs: count: 0 -> 1"
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
									children: "set"
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
									children: " 1"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#3C4257" },
									children: ","
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#1A6FB0" },
									children: " name"
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
									children: "Bob"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#3C4257" },
									children: "\""
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#3C4257" },
									children: " }); "
								}),
								jsx(_components.span, {
									style: {
										"--shiki-light": "#A83A1C",
										"--shiki-light-font-style": "italic"
									},
									children: "// no log — count didn't change"
								})
							]
						})
					]
				})
			})
		}),
		"\n",
		jsxs(_components.h2, {
			id: "when-to-use-createstore",
			children: [jsx(_components.a, {
				className: "header-anchor",
				"aria-label": "Permalink to \"When to use createStore\"",
				href: "#when-to-use-createstore",
				children: jsx(_components.span, {
					"aria-hidden": "true",
					children: "#"
				})
			}), "When to use createStore"]
		}),
		"\n",
		jsxs(_components.p, { children: [jsx(_components.code, { children: "createStore" }), " is the right choice when:"] }),
		"\n",
		jsxs(_components.ul, { children: [
			"\n",
			jsx(_components.li, { children: "You want the minimal API with no overhead" }),
			"\n",
			jsx(_components.li, { children: "Logic is small enough to live in module-level functions" }),
			"\n",
			jsx(_components.li, { children: "You're building a library or utility on top of Kin Store" }),
			"\n"
		] }),
		"\n",
		jsxs(_components.p, { children: [
			"When you need methods colocated with the store, a dispatch pipeline, or\nmiddleware, reach for ",
			jsx(_components.a, {
				href: "/store/guide/with-plugins",
				children: jsx(_components.code, { children: "withPlugins" })
			}),
			"."
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
