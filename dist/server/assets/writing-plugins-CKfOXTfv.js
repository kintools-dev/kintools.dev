import { Fragment, jsx, jsxs } from "react/jsx-runtime";
//#region ../store/docs/guide/writing-plugins.md
var frontmatter = { "description": "How to write a StorePlugin: reducers and internal state, middleware, methods, and the onActivated/onDestroy lifecycle hooks, for your own Kin Store plugins." };
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
	}, { Container } = _components;
	if (!Container) _missingMdxReference("Container", true);
	return jsxs(Fragment, { children: [
		jsxs(_components.h1, {
			id: "writing-plugins",
			children: [jsx(_components.a, {
				className: "header-anchor",
				"aria-label": "Permalink to \"Writing Plugins\"",
				href: "#writing-plugins",
				children: jsx(_components.span, {
					"aria-hidden": "true",
					children: "#"
				})
			}), "Writing Plugins"]
		}),
		"\n",
		jsxs(_components.p, { children: [
			"A ",
			jsx(_components.code, { children: "StorePlugin" }),
			" is a plain object with any combination of ",
			jsx(_components.code, { children: "reducers" }),
			",\n",
			jsx(_components.code, { children: "middleware" }),
			", ",
			jsx(_components.code, { children: "methods" }),
			", ",
			jsx(_components.code, { children: "onActivated" }),
			", and ",
			jsx(_components.code, { children: "onDestroy" }),
			". Plugins can be shared\nand composed independently of the store they are applied to."
		] }),
		"\n",
		jsxs(_components.h2, {
			id: "reducers-and-internal-state",
			children: [jsx(_components.a, {
				className: "header-anchor",
				"aria-label": "Permalink to \"Reducers and internal state\"",
				href: "#reducers-and-internal-state",
				children: jsx(_components.span, {
					"aria-hidden": "true",
					children: "#"
				})
			}), "Reducers and internal state"]
		}),
		"\n",
		jsxs(_components.p, { children: [
			"All changes to the store's primary state (",
			jsx(_components.code, { children: "TState" }),
			") should go through a reducer,\nnot ",
			jsx(_components.code, { children: "set" }),
			". Reducers travel through the full middleware pipeline, they can be\nlogged, traced, or canceled by any middleware in the chain:"
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
						jsx(_components.span, {
							"data-line": "",
							children: jsx(_components.span, {
								style: {
									"--shiki-light": "#A83A1C",
									"--shiki-light-font-style": "italic"
								},
								children: "// Observe every reducer call, including ones from plugins:"
							})
						}),
						"\n",
						jsxs(_components.span, {
							"data-line": "",
							children: [
								jsx(_components.span, {
									style: { "--shiki-light": "#3C4257" },
									children: "(("
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#16233A" },
									children: "ctx"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#3C4257" },
									children: ", "
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#16233A" },
									children: "next"
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
									children: "ctx"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#3C4257" },
									children: "."
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#16233A" },
									children: "reducer"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#3C4257" },
									children: "."
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#16233A" },
									children: "name"
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
									children: "// \"history._restore\", \"persist._restore\", ..."
								})
							]
						}),
						"\n",
						jsxs(_components.span, {
							"data-line": "",
							children: [
								jsx(_components.span, {
									style: { "--shiki-light": "#0F7D6C" },
									children: "  return"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#16233A" },
									children: " next"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#3C4257" },
									children: "();"
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
								children: "// Cancel a specific reducer under a condition:"
							})
						}),
						"\n",
						jsxs(_components.span, {
							"data-line": "",
							children: [
								jsx(_components.span, {
									style: { "--shiki-light": "#3C4257" },
									children: "(("
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#16233A" },
									children: "ctx"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#3C4257" },
									children: ", "
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#16233A" },
									children: "next"
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
									style: { "--shiki-light": "#3C4257" },
									children: "  if ("
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#16233A" },
									children: "ctx"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#3C4257" },
									children: "."
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#16233A" },
									children: "reducer"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#3C4257" },
									children: "."
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#16233A" },
									children: "name"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#3D6F94" },
									children: " ==="
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#3C4257" },
									children: " \""
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#9A5B13" },
									children: "persist._restore"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#3C4257" },
									children: "\""
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#3D6F94" },
									children: " &&"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#3D6F94" },
									children: " !"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#16233A" },
									children: "auth"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#3C4257" },
									children: "."
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#16233A" },
									children: "isReady"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#3C4257" },
									children: "()) {"
								})
							]
						}),
						"\n",
						jsxs(_components.span, {
							"data-line": "",
							children: [
								jsx(_components.span, {
									style: { "--shiki-light": "#0F7D6C" },
									children: "    return"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#16233A" },
									children: " CANCELED"
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
								children: "  }"
							})
						}),
						"\n",
						jsxs(_components.span, {
							"data-line": "",
							children: [
								jsx(_components.span, {
									style: { "--shiki-light": "#0F7D6C" },
									children: "  return"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#16233A" },
									children: " next"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#3C4257" },
									children: "();"
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
		"\n",
		jsxs(_components.p, { children: [jsx(_components.code, { children: "set" }), " bypasses the pipeline by design — use it when you need a hard reset that\nmust survive middleware that would otherwise cancel it, or when traceability is\nnot a goal."] }),
		"\n",
		jsxs(_components.p, { children: [
			"Plugin-internal bookkeeping — flags, counters, listener sets — lives in closure\nvariables, not ",
			jsx(_components.code, { children: "TState" }),
			"."
		] }),
		"\n",
		jsxs(_components.h2, {
			id: "middleware",
			children: [jsx(_components.a, {
				className: "header-anchor",
				"aria-label": "Permalink to \"Middleware\"",
				href: "#middleware",
				children: jsx(_components.span, {
					"aria-hidden": "true",
					children: "#"
				})
			}), "Middleware"]
		}),
		"\n",
		jsx(_components.p, { children: "A plugin can include middleware that runs on every dispatch:" }),
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
									children: "type"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#3C4257" },
									children: " {"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#1A6FB0" },
									children: " StorePlugin"
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
									children: "type"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#3C4257" },
									children: " State"
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
									children: " count"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#3D6F94" },
									children: ":"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#3C4257" },
									children: " number"
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
									children: " loggingPlugin"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#3D6F94" },
									children: ":"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#3C4257" },
									children: " StorePlugin<State> "
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#3D6F94" },
									children: "="
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
									children: "  middleware"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#3C4257" },
									children: ":"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#3C4257" },
									children: " ()"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#3D6F94" },
									children: " =>"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#3C4257" },
									children: " ("
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#16233A" },
									children: "ctx"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#3C4257" },
									children: ","
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#16233A" },
									children: " next"
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
									children: "    console"
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
									children: "->"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#3C4257" },
									children: "\""
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#3C4257" },
									children: ","
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#16233A" },
									children: " ctx"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#3C4257" },
									children: "."
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#16233A" },
									children: "reducer"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#3C4257" },
									children: "."
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#16233A" },
									children: "name"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#3C4257" },
									children: ","
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#16233A" },
									children: " ctx"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#3C4257" },
									children: "."
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#16233A" },
									children: "reducer"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#3C4257" },
									children: "."
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#16233A" },
									children: "args"
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
									style: { "--shiki-light": "#3D6F94" },
									children: "    const"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#16233A" },
									children: " result"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#3D6F94" },
									children: " ="
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#16233A" },
									children: " next"
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
									children: "    console"
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
									children: "<-"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#3C4257" },
									children: "\""
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#3C4257" },
									children: ","
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#16233A" },
									children: " result"
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
									style: { "--shiki-light": "#0F7D6C" },
									children: "    return"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#16233A" },
									children: " result"
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
								children: "  },"
							})
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
									children: " })."
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
									children: "loggingPlugin"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#3C4257" },
									children: ");"
								})
							]
						})
					]
				})
			})
		}),
		"\n",
		jsxs(_components.h2, {
			id: "lifecycle-hooks",
			children: [jsx(_components.a, {
				className: "header-anchor",
				"aria-label": "Permalink to \"Lifecycle hooks\"",
				href: "#lifecycle-hooks",
				children: jsx(_components.span, {
					"aria-hidden": "true",
					children: "#"
				})
			}), "Lifecycle hooks"]
		}),
		"\n",
		jsxs(_components.p, { children: [
			jsx(_components.code, { children: "onActivated" }),
			" runs immediately after the plugin is registered; ",
			jsx(_components.code, { children: "onDestroy" }),
			" runs\nwhen ",
			jsx(_components.code, { children: "store.destroy()" }),
			" is called:"
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
									children: " })."
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
									children: "  onActivated"
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
									children: "    console"
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
									children: "initial state:"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#3C4257" },
									children: "\""
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#3C4257" },
									children: ","
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
									children: "());"
								})
							]
						}),
						"\n",
						jsx(_components.span, {
							"data-line": "",
							children: jsx(_components.span, {
								style: { "--shiki-light": "#3C4257" },
								children: "  },"
							})
						}),
						"\n",
						jsxs(_components.span, {
							"data-line": "",
							children: [
								jsx(_components.span, {
									style: { "--shiki-light": "#1A6FB0" },
									children: "  onDestroy"
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
									children: "    console"
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
									children: "final state:"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#3C4257" },
									children: "\""
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#3C4257" },
									children: ","
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
									children: "());"
								})
							]
						}),
						"\n",
						jsx(_components.span, {
							"data-line": "",
							children: jsx(_components.span, {
								style: { "--shiki-light": "#3C4257" },
								children: "  },"
							})
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
		"\n",
		jsx(Container, {
			type: "warning",
			title: "Avoid patching the store object",
			children: jsxs(_components.p, { children: [
				jsx(_components.code, { children: "onActivated" }),
				", ",
				jsx(_components.code, { children: "onDestroy" }),
				", and ",
				jsx(_components.code, { children: "methods" }),
				" all receive the full store API, but\navoid mutating or monkey-patching the store object itself. Declare capabilities\nthrough ",
				jsx(_components.code, { children: "methods" }),
				" and ",
				jsx(_components.code, { children: "reducers" }),
				" instead — that keeps plugin contracts explicit\nand collision-detectable."
			] })
		}),
		"\n",
		jsxs(_components.h2, {
			id: "dispatching-from-methods",
			children: [jsx(_components.a, {
				className: "header-anchor",
				"aria-label": "Permalink to \"Dispatching from methods\"",
				href: "#dispatching-from-methods",
				children: jsx(_components.span, {
					"aria-hidden": "true",
					children: "#"
				})
			}), "Dispatching from methods"]
		}),
		"\n",
		jsxs(_components.p, { children: [
			"Use ",
			jsx(_components.code, { children: "getPluginDispatch" }),
			" to call a plugin's own reducers from ",
			jsx(_components.code, { children: "methods" }),
			",\nregardless of whether the plugin is namespaced:"
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
									style: { "--shiki-light": "#0F7D6C" },
									children: "import "
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#3C4257" },
									children: "{"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#1A6FB0" },
									children: " getPluginDispatch"
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
									children: "methods"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#3C4257" },
									children: ": ("
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#16233A" },
									children: "store"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#3C4257" },
									children: ", { "
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#16233A" },
									children: "namespace"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#3C4257" },
									children: " }) "
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
									style: { "--shiki-light": "#3D6F94" },
									children: "  const"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#16233A" },
									children: " dispatch"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#3D6F94" },
									children: " ="
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#16233A" },
									children: " getPluginDispatch"
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
									children: ", "
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#16233A" },
									children: "namespace"
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
							children: [jsx(_components.span, {
								style: { "--shiki-light": "#0F7D6C" },
								children: "  return"
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
									style: { "--shiki-light": "#1A6FB0" },
									children: "    undo"
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
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#16233A" },
									children: " dispatch"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#3C4257" },
									children: "."
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#16233A" },
									children: "_restore"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#3C4257" },
									children: "("
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#16233A" },
									children: "previousState"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#3C4257" },
									children: ");"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#3C4257" },
									children: " },"
								})
							]
						}),
						"\n",
						jsx(_components.span, {
							"data-line": "",
							children: jsx(_components.span, {
								style: { "--shiki-light": "#3C4257" },
								children: "  };"
							})
						}),
						"\n",
						jsx(_components.span, {
							"data-line": "",
							children: jsx(_components.span, {
								style: { "--shiki-light": "#3C4257" },
								children: "},"
							})
						})
					]
				})
			})
		}),
		"\n",
		jsxs(_components.h2, {
			id: "reusable-plugin-factories",
			children: [jsx(_components.a, {
				className: "header-anchor",
				"aria-label": "Permalink to \"Reusable plugin factories\"",
				href: "#reusable-plugin-factories",
				children: jsx(_components.span, {
					"aria-hidden": "true",
					children: "#"
				})
			}), "Reusable plugin factories"]
		}),
		"\n",
		jsxs(_components.p, { children: [
			"To write a shareable plugin (like the official ",
			jsx(_components.code, { children: "persist" }),
			" and ",
			jsx(_components.code, { children: "history" }),
			"), wrap it\nin a generic factory function. The four type parameters mirror the store's\naccumulated shape at the point the plugin is applied:"
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
									style: { "--shiki-light": "#0F7D6C" },
									children: "import "
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#3C4257" },
									children: "type"
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
							children: [jsx(_components.span, {
								style: { "--shiki-light": "#1A6FB0" },
								children: "  NestedMethods"
							}), jsx(_components.span, {
								style: { "--shiki-light": "#3C4257" },
								children: ","
							})]
						}),
						"\n",
						jsxs(_components.span, {
							"data-line": "",
							children: [jsx(_components.span, {
								style: { "--shiki-light": "#1A6FB0" },
								children: "  NestedReducers"
							}), jsx(_components.span, {
								style: { "--shiki-light": "#3C4257" },
								children: ","
							})]
						}),
						"\n",
						jsxs(_components.span, {
							"data-line": "",
							children: [jsx(_components.span, {
								style: { "--shiki-light": "#1A6FB0" },
								children: "  StorePlugin"
							}), jsx(_components.span, {
								style: { "--shiki-light": "#3C4257" },
								children: ","
							})]
						}),
						"\n",
						jsxs(_components.span, {
							"data-line": "",
							children: [
								jsx(_components.span, {
									style: { "--shiki-light": "#3C4257" },
									children: "}"
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
									children: "type"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#3C4257" },
									children: " LoggerOptions"
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
									children: " prefix"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#3D6F94" },
									children: "?:"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#3C4257" },
									children: " string"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#3C4257" },
									children: " };"
								})
							]
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
									children: " LoggerMethods"
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
									children: " getLogs"
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
									children: " string[]"
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
									style: { "--shiki-light": "#0F7D6C" },
									children: "export"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#3D6F94" },
									children: " function"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#1A6FB0" },
									children: " logger"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#3C4257" },
									children: "<"
								})
							]
						}),
						"\n",
						jsx(_components.span, {
							"data-line": "",
							children: jsx(_components.span, {
								style: { "--shiki-light": "#3C4257" },
								children: "  TState,"
							})
						}),
						"\n",
						jsxs(_components.span, {
							"data-line": "",
							children: [
								jsx(_components.span, {
									style: { "--shiki-light": "#3C4257" },
									children: "  TStoreReducers "
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#0F7D6C" },
									children: "extends"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#3C4257" },
									children: " NestedReducers<TState>,"
								})
							]
						}),
						"\n",
						jsxs(_components.span, {
							"data-line": "",
							children: [
								jsx(_components.span, {
									style: { "--shiki-light": "#3C4257" },
									children: "  TStoreMethods "
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#0F7D6C" },
									children: "extends"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#3C4257" },
									children: " NestedMethods,"
								})
							]
						}),
						"\n",
						jsxs(_components.span, {
							"data-line": "",
							children: [
								jsx(_components.span, {
									style: { "--shiki-light": "#3C4257" },
									children: "  TNamespace "
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#0F7D6C" },
									children: "extends"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#3C4257" },
									children: " string "
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#3D6F94" },
									children: "|"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#3C4257" },
									children: " undefined,"
								})
							]
						}),
						"\n",
						jsx(_components.span, {
							"data-line": "",
							children: jsx(_components.span, {
								style: { "--shiki-light": "#3C4257" },
								children: ">("
							})
						}),
						"\n",
						jsxs(_components.span, {
							"data-line": "",
							children: [
								jsx(_components.span, {
									style: { "--shiki-light": "#16233A" },
									children: "  options"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#3D6F94" },
									children: ":"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#3C4257" },
									children: " LoggerOptions "
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#3D6F94" },
									children: "="
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#3C4257" },
									children: " {},"
								})
							]
						}),
						"\n",
						jsxs(_components.span, {
							"data-line": "",
							children: [
								jsx(_components.span, {
									style: { "--shiki-light": "#3C4257" },
									children: ")"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#3D6F94" },
									children: ":"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#3C4257" },
									children: " StorePlugin<"
								})
							]
						}),
						"\n",
						jsx(_components.span, {
							"data-line": "",
							children: jsx(_components.span, {
								style: { "--shiki-light": "#3C4257" },
								children: "  TState,"
							})
						}),
						"\n",
						jsx(_components.span, {
							"data-line": "",
							children: jsx(_components.span, {
								style: { "--shiki-light": "#3C4257" },
								children: "  TStoreReducers,"
							})
						}),
						"\n",
						jsx(_components.span, {
							"data-line": "",
							children: jsx(_components.span, {
								style: { "--shiki-light": "#3C4257" },
								children: "  TStoreMethods,"
							})
						}),
						"\n",
						jsx(_components.span, {
							"data-line": "",
							children: jsx(_components.span, {
								style: { "--shiki-light": "#3C4257" },
								children: "  TNamespace,"
							})
						}),
						"\n",
						jsx(_components.span, {
							"data-line": "",
							children: jsx(_components.span, {
								style: { "--shiki-light": "#3C4257" },
								children: "  {},"
							})
						}),
						"\n",
						jsx(_components.span, {
							"data-line": "",
							children: jsx(_components.span, {
								style: { "--shiki-light": "#3C4257" },
								children: "  LoggerMethods"
							})
						}),
						"\n",
						jsx(_components.span, {
							"data-line": "",
							children: jsx(_components.span, {
								style: { "--shiki-light": "#3C4257" },
								children: "> {"
							})
						}),
						"\n",
						jsxs(_components.span, {
							"data-line": "",
							children: [
								jsx(_components.span, {
									style: { "--shiki-light": "#3D6F94" },
									children: "  const"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#16233A" },
									children: " prefix"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#3D6F94" },
									children: " ="
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#16233A" },
									children: " options"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#3C4257" },
									children: "."
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#16233A" },
									children: "prefix"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#3D6F94" },
									children: " ??"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#3C4257" },
									children: " \""
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#9A5B13" },
									children: "→"
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
									style: { "--shiki-light": "#3D6F94" },
									children: "  const"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#16233A" },
									children: " logs"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#3D6F94" },
									children: ":"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#3C4257" },
									children: " string[] "
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
								children: " {"
							})]
						}),
						"\n",
						jsxs(_components.span, {
							"data-line": "",
							children: [
								jsx(_components.span, {
									style: { "--shiki-light": "#1A6FB0" },
									children: "    middleware"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#3C4257" },
									children: ":"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#3C4257" },
									children: " ()"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#3D6F94" },
									children: " =>"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#3C4257" },
									children: " ("
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#16233A" },
									children: "ctx"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#3C4257" },
									children: ","
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#16233A" },
									children: " next"
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
									style: { "--shiki-light": "#3D6F94" },
									children: "      const"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#16233A" },
									children: " entry"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#3D6F94" },
									children: " ="
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#3C4257" },
									children: " `${"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#16233A" },
									children: "prefix"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#3C4257" },
									children: "}"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#3C4257" },
									children: " ${"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#16233A" },
									children: "String"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#3C4257" },
									children: "("
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#16233A" },
									children: "ctx"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#3C4257" },
									children: "."
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#16233A" },
									children: "reducer"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#3C4257" },
									children: "."
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#16233A" },
									children: "name"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#3C4257" },
									children: ")"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#3C4257" },
									children: "}`"
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
									children: "      logs"
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
									children: "entry"
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
									children: "      console"
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
									children: "entry"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#3C4257" },
									children: ","
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#16233A" },
									children: " ctx"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#3C4257" },
									children: "."
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#16233A" },
									children: "reducer"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#3C4257" },
									children: "."
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#16233A" },
									children: "args"
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
									style: { "--shiki-light": "#0F7D6C" },
									children: "      return"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#16233A" },
									children: " next"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#3C4257" },
									children: "();"
								})
							]
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
									children: " ()"
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
									children: "      getLogs"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#3C4257" },
									children: ":"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#3C4257" },
									children: " ()"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#3D6F94" },
									children: " =>"
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
									children: "logs"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#3C4257" },
									children: "],"
								})
							]
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
								children: "  };"
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
		}),
		"\n",
		jsxs(_components.h2, {
			id: "naming-a-plugins-own-store-type",
			children: [jsx(_components.a, {
				className: "header-anchor",
				"aria-label": "Permalink to \"Naming a plugin's own store type\"",
				href: "#naming-a-plugins-own-store-type",
				children: jsx(_components.span, {
					"aria-hidden": "true",
					children: "#"
				})
			}), "Naming a plugin's own store type"]
		}),
		"\n",
		jsxs(_components.p, { children: [
			jsx(_components.code, { children: "methods" }),
			", ",
			jsx(_components.code, { children: "onActivated" }),
			", and ",
			jsx(_components.code, { children: "onDestroy" }),
			" each receive ",
			jsx(_components.code, { children: "store" }),
			" already typed\nwith this plugin's own reducers merged in (and, outside of ",
			jsx(_components.code, { children: "methods" }),
			", its own\nmethods too, see ",
			jsx(_components.a, {
				href: "#dispatching-from-methods",
				children: "Dispatching from methods"
			}),
			" for why\n",
			jsx(_components.code, { children: "methods" }),
			" can't see its own plugin's methods). Inline callbacks get this for\nfree from ",
			jsx(_components.code, { children: "StorePlugin" }),
			"'s own signatures. If you factor logic out into a\nstandalone helper function instead, name that store type with ",
			jsx(_components.code, { children: "PluginStore" }),
			"\nrather than reconstructing it from ",
			jsx(_components.code, { children: "StoreWithPlugins" }),
			" yourself:"
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
									style: { "--shiki-light": "#0F7D6C" },
									children: "import "
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#3C4257" },
									children: "type"
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
							children: [jsx(_components.span, {
								style: { "--shiki-light": "#1A6FB0" },
								children: "  NestedMethods"
							}), jsx(_components.span, {
								style: { "--shiki-light": "#3C4257" },
								children: ","
							})]
						}),
						"\n",
						jsxs(_components.span, {
							"data-line": "",
							children: [jsx(_components.span, {
								style: { "--shiki-light": "#1A6FB0" },
								children: "  NestedReducers"
							}), jsx(_components.span, {
								style: { "--shiki-light": "#3C4257" },
								children: ","
							})]
						}),
						"\n",
						jsxs(_components.span, {
							"data-line": "",
							children: [jsx(_components.span, {
								style: { "--shiki-light": "#1A6FB0" },
								children: "  PluginStore"
							}), jsx(_components.span, {
								style: { "--shiki-light": "#3C4257" },
								children: ","
							})]
						}),
						"\n",
						jsxs(_components.span, {
							"data-line": "",
							children: [jsx(_components.span, {
								style: { "--shiki-light": "#1A6FB0" },
								children: "  StorePlugin"
							}), jsx(_components.span, {
								style: { "--shiki-light": "#3C4257" },
								children: ","
							})]
						}),
						"\n",
						jsxs(_components.span, {
							"data-line": "",
							children: [
								jsx(_components.span, {
									style: { "--shiki-light": "#3C4257" },
									children: "}"
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
									children: "type"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#3C4257" },
									children: " CounterReducers<TState>"
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
									children: " bump"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#3D6F94" },
									children: ":"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#3C4257" },
									children: " ("
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#16233A" },
									children: "state"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#3D6F94" },
									children: ":"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#3C4257" },
									children: " TState)"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#3D6F94" },
									children: " =>"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#3C4257" },
									children: " TState"
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
									children: "function"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#1A6FB0" },
									children: " logAndBump"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#3C4257" },
									children: "<"
								})
							]
						}),
						"\n",
						jsx(_components.span, {
							"data-line": "",
							children: jsx(_components.span, {
								style: { "--shiki-light": "#3C4257" },
								children: "  TState,"
							})
						}),
						"\n",
						jsxs(_components.span, {
							"data-line": "",
							children: [
								jsx(_components.span, {
									style: { "--shiki-light": "#3C4257" },
									children: "  TStoreReducers "
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#0F7D6C" },
									children: "extends"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#3C4257" },
									children: " NestedReducers<TState>,"
								})
							]
						}),
						"\n",
						jsxs(_components.span, {
							"data-line": "",
							children: [
								jsx(_components.span, {
									style: { "--shiki-light": "#3C4257" },
									children: "  TStoreMethods "
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#0F7D6C" },
									children: "extends"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#3C4257" },
									children: " NestedMethods,"
								})
							]
						}),
						"\n",
						jsxs(_components.span, {
							"data-line": "",
							children: [
								jsx(_components.span, {
									style: { "--shiki-light": "#3C4257" },
									children: "  TNamespace "
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#0F7D6C" },
									children: "extends"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#3C4257" },
									children: " string "
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#3D6F94" },
									children: "|"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#3C4257" },
									children: " undefined,"
								})
							]
						}),
						"\n",
						jsx(_components.span, {
							"data-line": "",
							children: jsx(_components.span, {
								style: { "--shiki-light": "#3C4257" },
								children: ">("
							})
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
									style: { "--shiki-light": "#3D6F94" },
									children: ":"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#3C4257" },
									children: " PluginStore<"
								})
							]
						}),
						"\n",
						jsx(_components.span, {
							"data-line": "",
							children: jsx(_components.span, {
								style: { "--shiki-light": "#3C4257" },
								children: "    TState,"
							})
						}),
						"\n",
						jsx(_components.span, {
							"data-line": "",
							children: jsx(_components.span, {
								style: { "--shiki-light": "#3C4257" },
								children: "    TStoreReducers,"
							})
						}),
						"\n",
						jsx(_components.span, {
							"data-line": "",
							children: jsx(_components.span, {
								style: { "--shiki-light": "#3C4257" },
								children: "    TStoreMethods,"
							})
						}),
						"\n",
						jsx(_components.span, {
							"data-line": "",
							children: jsx(_components.span, {
								style: { "--shiki-light": "#3C4257" },
								children: "    TNamespace,"
							})
						}),
						"\n",
						jsx(_components.span, {
							"data-line": "",
							children: jsx(_components.span, {
								style: { "--shiki-light": "#3C4257" },
								children: "    CounterReducers<TState>"
							})
						}),
						"\n",
						jsx(_components.span, {
							"data-line": "",
							children: jsx(_components.span, {
								style: { "--shiki-light": "#3C4257" },
								children: "  >,"
							})
						}),
						"\n",
						jsxs(_components.span, {
							"data-line": "",
							children: [
								jsx(_components.span, {
									style: { "--shiki-light": "#3C4257" },
									children: ")"
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
									style: { "--shiki-light": "#3C4257" },
									children: "\""
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#9A5B13" },
									children: "state before bump:"
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
									children: "());"
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
									children: "dispatch"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#3C4257" },
									children: "."
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#16233A" },
									children: "bump"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#3C4257" },
									children: "();"
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
									children: "export"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#3D6F94" },
									children: " function"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#1A6FB0" },
									children: " counter"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#3C4257" },
									children: "<"
								})
							]
						}),
						"\n",
						jsx(_components.span, {
							"data-line": "",
							children: jsx(_components.span, {
								style: { "--shiki-light": "#3C4257" },
								children: "  TState,"
							})
						}),
						"\n",
						jsxs(_components.span, {
							"data-line": "",
							children: [
								jsx(_components.span, {
									style: { "--shiki-light": "#3C4257" },
									children: "  TStoreReducers "
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#0F7D6C" },
									children: "extends"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#3C4257" },
									children: " NestedReducers<TState>,"
								})
							]
						}),
						"\n",
						jsxs(_components.span, {
							"data-line": "",
							children: [
								jsx(_components.span, {
									style: { "--shiki-light": "#3C4257" },
									children: "  TStoreMethods "
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#0F7D6C" },
									children: "extends"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#3C4257" },
									children: " NestedMethods,"
								})
							]
						}),
						"\n",
						jsxs(_components.span, {
							"data-line": "",
							children: [
								jsx(_components.span, {
									style: { "--shiki-light": "#3C4257" },
									children: "  TNamespace "
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#0F7D6C" },
									children: "extends"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#3C4257" },
									children: " string "
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#3D6F94" },
									children: "|"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#3C4257" },
									children: " undefined,"
								})
							]
						}),
						"\n",
						jsxs(_components.span, {
							"data-line": "",
							children: [
								jsx(_components.span, {
									style: { "--shiki-light": "#3C4257" },
									children: ">()"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#3D6F94" },
									children: ":"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#3C4257" },
									children: " StorePlugin<"
								})
							]
						}),
						"\n",
						jsx(_components.span, {
							"data-line": "",
							children: jsx(_components.span, {
								style: { "--shiki-light": "#3C4257" },
								children: "  TState,"
							})
						}),
						"\n",
						jsx(_components.span, {
							"data-line": "",
							children: jsx(_components.span, {
								style: { "--shiki-light": "#3C4257" },
								children: "  TStoreReducers,"
							})
						}),
						"\n",
						jsx(_components.span, {
							"data-line": "",
							children: jsx(_components.span, {
								style: { "--shiki-light": "#3C4257" },
								children: "  TStoreMethods,"
							})
						}),
						"\n",
						jsx(_components.span, {
							"data-line": "",
							children: jsx(_components.span, {
								style: { "--shiki-light": "#3C4257" },
								children: "  TNamespace,"
							})
						}),
						"\n",
						jsx(_components.span, {
							"data-line": "",
							children: jsx(_components.span, {
								style: { "--shiki-light": "#3C4257" },
								children: "  CounterReducers<TState>"
							})
						}),
						"\n",
						jsx(_components.span, {
							"data-line": "",
							children: jsx(_components.span, {
								style: { "--shiki-light": "#3C4257" },
								children: "> {"
							})
						}),
						"\n",
						jsxs(_components.span, {
							"data-line": "",
							children: [jsx(_components.span, {
								style: { "--shiki-light": "#0F7D6C" },
								children: "  return"
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
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#1A6FB0" },
									children: " bump"
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
									children: "state"
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
									children: " state"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#3C4257" },
									children: " },"
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
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#1A6FB0" },
									children: " logAndBump"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#3C4257" },
									children: ":"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#3C4257" },
									children: " ()"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#3D6F94" },
									children: " =>"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#16233A" },
									children: " logAndBump"
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
									children: ")"
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
							children: jsx(_components.span, {
								style: { "--shiki-light": "#3C4257" },
								children: "  };"
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
		}),
		"\n",
		jsxs(_components.h2, {
			id: "constraining-which-stores-a-plugin-can-target",
			children: [jsx(_components.a, {
				className: "header-anchor",
				"aria-label": "Permalink to \"Constraining which stores a plugin can target\"",
				href: "#constraining-which-stores-a-plugin-can-target",
				children: jsx(_components.span, {
					"aria-hidden": "true",
					children: "#"
				})
			}), "Constraining which stores a plugin can target"]
		}),
		"\n",
		jsxs(_components.p, { children: [
			"Tighten ",
			jsx(_components.code, { children: "TStoreMethods" }),
			" or ",
			jsx(_components.code, { children: "TStoreReducers" }),
			" to require certain plugins to be\nregistered first. TypeScript will error if the dependency is missing:"
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
						jsx(_components.span, {
							"data-line": "",
							children: jsx(_components.span, {
								style: {
									"--shiki-light": "#A83A1C",
									"--shiki-light-font-style": "italic"
								},
								children: "// Requires a `history` plugin to already be registered."
							})
						}),
						"\n",
						jsxs(_components.span, {
							"data-line": "",
							children: [
								jsx(_components.span, {
									style: { "--shiki-light": "#0F7D6C" },
									children: "export"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#3D6F94" },
									children: " function"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#1A6FB0" },
									children: " undoOnEscape"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#3C4257" },
									children: "<"
								})
							]
						}),
						"\n",
						jsx(_components.span, {
							"data-line": "",
							children: jsx(_components.span, {
								style: { "--shiki-light": "#3C4257" },
								children: "  TState,"
							})
						}),
						"\n",
						jsxs(_components.span, {
							"data-line": "",
							children: [
								jsx(_components.span, {
									style: { "--shiki-light": "#3C4257" },
									children: "  TStoreReducers "
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#0F7D6C" },
									children: "extends"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#3C4257" },
									children: " NestedReducers<TState>,"
								})
							]
						}),
						"\n",
						jsxs(_components.span, {
							"data-line": "",
							children: [
								jsx(_components.span, {
									style: { "--shiki-light": "#3C4257" },
									children: "  TStoreMethods "
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#0F7D6C" },
									children: "extends"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#3C4257" },
									children: " NestedMethods "
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#3D6F94" },
									children: "&"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#3C4257" },
									children: " { history"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#3D6F94" },
									children: ":"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#3C4257" },
									children: " { "
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#1A6FB0" },
									children: "undo"
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
									children: " boolean } },"
								})
							]
						}),
						"\n",
						jsxs(_components.span, {
							"data-line": "",
							children: [
								jsx(_components.span, {
									style: { "--shiki-light": "#3C4257" },
									children: "  TNamespace "
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#0F7D6C" },
									children: "extends"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#3C4257" },
									children: " string "
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#3D6F94" },
									children: "|"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#3C4257" },
									children: " undefined,"
								})
							]
						}),
						"\n",
						jsxs(_components.span, {
							"data-line": "",
							children: [
								jsx(_components.span, {
									style: { "--shiki-light": "#3C4257" },
									children: ">()"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#3D6F94" },
									children: ":"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#3C4257" },
									children: " StorePlugin<TState, TStoreReducers, TStoreMethods, TNamespace> {"
								})
							]
						}),
						"\n",
						jsxs(_components.span, {
							"data-line": "",
							children: [jsx(_components.span, {
								style: { "--shiki-light": "#0F7D6C" },
								children: "  return"
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
									style: { "--shiki-light": "#1A6FB0" },
									children: "    onActivated"
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
									children: ")"
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
									children: "      document"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#3C4257" },
									children: "."
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#16233A" },
									children: "addEventListener"
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
									children: "keydown"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#3C4257" },
									children: "\""
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#3C4257" },
									children: ","
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#3C4257" },
									children: " ("
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#16233A" },
									children: "e"
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
									style: { "--shiki-light": "#3C4257" },
									children: "        if"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#3C4257" },
									children: " ("
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#16233A" },
									children: "e"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#3C4257" },
									children: "."
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#16233A" },
									children: "key "
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#3D6F94" },
									children: "==="
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#3C4257" },
									children: " \""
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#9A5B13" },
									children: "Escape"
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
									children: " store"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#3C4257" },
									children: "."
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#16233A" },
									children: "history"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#3C4257" },
									children: "."
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#16233A" },
									children: "undo"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#3C4257" },
									children: "();"
								})
							]
						}),
						"\n",
						jsx(_components.span, {
							"data-line": "",
							children: jsx(_components.span, {
								style: { "--shiki-light": "#3C4257" },
								children: "      });"
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
						jsx(_components.span, {
							"data-line": "",
							children: jsx(_components.span, {
								style: { "--shiki-light": "#3C4257" },
								children: "  };"
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
									style: { "--shiki-light": "#3C4257" },
									children: "\""
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#9A5B13" },
									children: "history"
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
									children: "history"
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
									children: "("
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#16233A" },
									children: "undoOnEscape"
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
									children: "// ✓ — history is present"
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
									children: "withPlugins"
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
									children: " })."
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
									children: "undoOnEscape"
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
									children: "// ✗ — type error: history not registered"
								})
							]
						})
					]
				})
			})
		})
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
