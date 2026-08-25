import { Fragment, jsx, jsxs } from "react/jsx-runtime";
//#region ../store/docs/react/index.md
var frontmatter = { "description": "@kintools/store-react: useStore and useSelector hooks built on useSyncExternalStore, plus StoreProvider/useStoreContext for dependency injection." };
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
	}, { CodeGroup, CodeGroupItem } = _components;
	if (!CodeGroup) _missingMdxReference("CodeGroup", true);
	if (!CodeGroupItem) _missingMdxReference("CodeGroupItem", true);
	return jsxs(Fragment, { children: [
		jsxs(_components.h1, {
			id: "react",
			children: [jsx(_components.a, {
				className: "header-anchor",
				"aria-label": "Permalink to \"React\"",
				href: "#react",
				children: jsx(_components.span, {
					"aria-hidden": "true",
					children: "#"
				})
			}), "React"]
		}),
		"\n",
		jsxs(_components.p, { children: [
			"React bindings for ",
			jsx(_components.code, { children: "@kintools/store-core" }),
			"."
		] }),
		"\n",
		jsxs(_components.h2, {
			id: "install",
			children: [jsx(_components.a, {
				className: "header-anchor",
				"aria-label": "Permalink to \"Install\"",
				href: "#install",
				children: jsx(_components.span, {
					"aria-hidden": "true",
					children: "#"
				})
			}), "Install"]
		}),
		"\n",
		jsxs(CodeGroup, { children: [
			jsx(CodeGroupItem, {
				label: "npm",
				children: jsx(_components.figure, {
					"data-rehype-pretty-code-figure": "",
					children: jsx(_components.pre, {
						tabIndex: "0",
						"data-language": "sh",
						"data-theme": "poimandres-light",
						children: jsx(_components.code, {
							"data-language": "sh",
							"data-theme": "poimandres-light",
							style: { display: "grid" },
							children: jsxs(_components.span, {
								"data-line": "",
								children: [
									jsx(_components.span, {
										style: { "--shiki-light": "#3D6F94" },
										children: "npm"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#1A6FB0" },
										children: " add"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#1A6FB0" },
										children: " @kintools/store-react"
									})
								]
							})
						})
					})
				})
			}),
			jsx(CodeGroupItem, {
				label: "pnpm",
				children: jsx(_components.figure, {
					"data-rehype-pretty-code-figure": "",
					children: jsx(_components.pre, {
						tabIndex: "0",
						"data-language": "sh",
						"data-theme": "poimandres-light",
						children: jsx(_components.code, {
							"data-language": "sh",
							"data-theme": "poimandres-light",
							style: { display: "grid" },
							children: jsxs(_components.span, {
								"data-line": "",
								children: [
									jsx(_components.span, {
										style: { "--shiki-light": "#3D6F94" },
										children: "pnpm"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#1A6FB0" },
										children: " add"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#1A6FB0" },
										children: " @kintools/store-react"
									})
								]
							})
						})
					})
				})
			}),
			jsx(CodeGroupItem, {
				label: "deno",
				children: jsx(_components.figure, {
					"data-rehype-pretty-code-figure": "",
					children: jsx(_components.pre, {
						tabIndex: "0",
						"data-language": "sh",
						"data-theme": "poimandres-light",
						children: jsx(_components.code, {
							"data-language": "sh",
							"data-theme": "poimandres-light",
							style: { display: "grid" },
							children: jsxs(_components.span, {
								"data-line": "",
								children: [
									jsx(_components.span, {
										style: { "--shiki-light": "#3D6F94" },
										children: "deno"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#1A6FB0" },
										children: " add"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#1A6FB0" },
										children: " jsr:@kintools/store-react"
									})
								]
							})
						})
					})
				})
			}),
			jsxs(_components.p, { children: [
				jsx(_components.code, { children: "@kintools/store-react" }),
				" depends on and re-exports everything from\n",
				jsx(_components.code, { children: "@kintools/store-core" }),
				", so no need to install it separately."
			] })
		] }),
		"\n",
		jsxs(_components.h2, {
			id: "usestore",
			children: [jsx(_components.a, {
				className: "header-anchor",
				"aria-label": "Permalink to \"useStore\"",
				href: "#usestore",
				children: jsx(_components.span, {
					"aria-hidden": "true",
					children: "#"
				})
			}), jsx(_components.code, { children: "useStore" })]
		}),
		"\n",
		jsxs(_components.p, { children: [
			"Subscribes a component to a store's whole state and re-renders on every state\nchange. Backed by ",
			jsx(_components.code, { children: "useSyncExternalStore" }),
			", safe for concurrent mode."
		] }),
		"\n",
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
									children: " createStore"
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
									children: "const"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#16233A" },
									children: " counter"
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
						jsxs(_components.span, {
							"data-line": "",
							children: [
								jsx(_components.span, {
									style: { "--shiki-light": "#3D6F94" },
									children: "  const"
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
									children: " useStore"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#3C4257" },
									children: "("
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#16233A" },
									children: "counter"
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
									children: "  return"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#16233A" },
									children: " <"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#0F7D6C" },
									children: "div"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#16233A" },
									children: ">{count}</"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#0F7D6C" },
									children: "div"
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
						})
					]
				})
			})
		}),
		"\n",
		jsxs(_components.p, { children: [
			"Works with any store, ",
			jsx(_components.code, { children: "createStore" }),
			", ",
			jsx(_components.code, { children: "withPlugins" }),
			", or ",
			jsx(_components.code, { children: "derive" }),
			":"
		] }),
		"\n",
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
									style: { "--shiki-light": "#3D6F94" },
									children: "const"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#16233A" },
									children: " summary"
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
									children: "  greeting"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#3C4257" },
									children: ":"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#3C4257" },
									children: " `"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#9A5B13" },
									children: "Hello, "
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#3C4257" },
									children: "${"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#16233A" },
									children: "get"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#3C4257" },
									children: "("
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#16233A" },
									children: "userStore"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#3C4257" },
									children: ")."
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#16233A" },
									children: "name"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#3C4257" },
									children: "}`"
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
							children: [
								jsx(_components.span, {
									style: { "--shiki-light": "#1A6FB0" },
									children: "  itemCount"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#3C4257" },
									children: ":"
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
									children: "cartStore"
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
									children: ","
								})
							]
						}),
						"\n",
						jsx(_components.span, {
							"data-line": "",
							children: jsx(_components.span, {
								style: { "--shiki-light": "#3C4257" },
								children: "}));"
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
									children: " Header"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#3C4257" },
									children: "() {"
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
									style: { "--shiki-light": "#3C4257" },
									children: " { "
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#16233A" },
									children: "greeting"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#3C4257" },
									children: ", "
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#16233A" },
									children: "itemCount"
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
									children: " useStore"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#3C4257" },
									children: "("
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#16233A" },
									children: "summary"
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
									children: "header"
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
								style: { "--shiki-light": "#16233A" },
								children: "      {greeting} — {itemCount} items"
							})
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
									children: "header"
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
		}),
		"\n",
		jsxs(_components.p, { children: [
			"To subscribe to a transformed value derived from the state, use ",
			jsx(_components.code, { children: "useSelector" }),
			"\ninstead."
		] }),
		"\n",
		jsxs(_components.h2, {
			id: "useselector",
			children: [jsx(_components.a, {
				className: "header-anchor",
				"aria-label": "Permalink to \"useSelector\"",
				href: "#useselector",
				children: jsx(_components.span, {
					"aria-hidden": "true",
					children: "#"
				})
			}), jsx(_components.code, { children: "useSelector" })]
		}),
		"\n",
		jsxs(_components.p, { children: [
			"Selects a transformed value from the state and re-renders only when that value\nchanges, using an equality function to decide whether it actually changed.\nDefaults to ",
			jsx(_components.code, { children: "shallowEqual" }),
			", which compares the value one level deep, safe even\nwhen the selector returns a new object or array reference on every call (e.g.\n",
			jsx(_components.code, { children: ".filter()" }),
			", ",
			jsx(_components.code, { children: ".map()" }),
			", object literals):"
		] }),
		"\n",
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
						jsx(_components.span, {
							"data-line": "",
							children: jsx(_components.span, {
								style: {
									"--shiki-light": "#A83A1C",
									"--shiki-light-font-style": "italic"
								},
								children: "// Only re-renders when `name` changes, not on every state update."
							})
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
									children: " UserName"
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
						jsxs(_components.span, {
							"data-line": "",
							children: [
								jsx(_components.span, {
									style: { "--shiki-light": "#3D6F94" },
									children: "  const"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#16233A" },
									children: " name"
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
									children: "userStore"
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
									children: "name"
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
									children: "  return"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#16233A" },
									children: " <"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#0F7D6C" },
									children: "span"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#16233A" },
									children: ">{name}</"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#0F7D6C" },
									children: "span"
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
									children: " ActiveTodos"
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
								children: "  // shallowEqual (the default) prevents a re-render when the filtered"
							})
						}),
						"\n",
						jsx(_components.span, {
							"data-line": "",
							children: jsx(_components.span, {
								style: {
									"--shiki-light": "#A83A1C",
									"--shiki-light-font-style": "italic"
								},
								children: "  // list's contents haven't changed, even though .filter() returns a new"
							})
						}),
						"\n",
						jsx(_components.span, {
							"data-line": "",
							children: jsx(_components.span, {
								style: {
									"--shiki-light": "#A83A1C",
									"--shiki-light-font-style": "italic"
								},
								children: "  // array reference every call."
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
									children: " active"
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
								})
							]
						}),
						"\n",
						jsxs(_components.span, {
							"data-line": "",
							children: [jsx(_components.span, {
								style: { "--shiki-light": "#16233A" },
								children: "    todoStore"
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
									children: "    ("
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
									children: "."
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#16233A" },
									children: "filter"
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
									children: ") "
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#3D6F94" },
									children: "=>"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#3D6F94" },
									children: " !"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#16233A" },
									children: "item"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#3C4257" },
									children: "."
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#16233A" },
									children: "completed"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#3C4257" },
									children: "),"
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
									children: "      {active"
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
									children: "t"
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
									children: "{t"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#3C4257" },
									children: "."
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#16233A" },
									children: "id}>{t"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#3C4257" },
									children: "."
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#16233A" },
									children: "title}</"
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
		}),
		"\n",
		jsxs(_components.p, { children: [
			"Pass a custom equality function for cases ",
			jsx(_components.code, { children: "shallowEqual" }),
			" can't cover, like\ntolerance-based comparisons:"
		] }),
		"\n",
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
									style: { "--shiki-light": "#3D6F94" },
									children: "const"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#16233A" },
									children: " progress"
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
								})
							]
						}),
						"\n",
						jsxs(_components.span, {
							"data-line": "",
							children: [jsx(_components.span, {
								style: { "--shiki-light": "#16233A" },
								children: "  downloadStore"
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
									children: "  ("
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
									children: "bytesLoaded"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#3D6F94" },
									children: " /"
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
									children: "totalBytes"
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
							children: [
								jsx(_components.span, {
									style: { "--shiki-light": "#3C4257" },
									children: "  ("
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#16233A" },
									children: "a"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#3C4257" },
									children: ", "
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#16233A" },
									children: "b"
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
									children: " Math"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#3C4257" },
									children: "."
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#16233A" },
									children: "abs"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#3C4257" },
									children: "("
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#16233A" },
									children: "a"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#3D6F94" },
									children: " -"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#16233A" },
									children: " b"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#3C4257" },
									children: ") "
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#3D6F94" },
									children: "<"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#9A5B13" },
									children: " 0.001"
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
								children: ");"
							})
						})
					]
				})
			})
		}),
		"\n",
		jsxs(_components.p, { children: [jsx(_components.code, { children: "shallowEqual" }), " is also exported on its own, for use outside this hook."] }),
		"\n",
		jsxs(_components.h2, {
			id: "storeprovider-and-usestorecontext",
			children: [
				jsx(_components.a, {
					className: "header-anchor",
					"aria-label": "Permalink to \"StoreProvider and useStoreContext\"",
					href: "#storeprovider-and-usestorecontext",
					children: jsx(_components.span, {
						"aria-hidden": "true",
						children: "#"
					})
				}),
				jsx(_components.code, { children: "StoreProvider" }),
				" and ",
				jsx(_components.code, { children: "useStoreContext" })
			]
		}),
		"\n",
		jsx(_components.p, { children: "Inject a store via React context, useful for testing or SSR where you want to\navoid module-level singletons:" }),
		"\n",
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
							children: [jsx(_components.span, {
								style: { "--shiki-light": "#0F7D6C" },
								children: "import "
							}), jsx(_components.span, {
								style: { "--shiki-light": "#3C4257" },
								children: "{"
							})]
						}),
						"\n",
						jsxs(_components.span, {
							"data-line": "",
							children: [jsx(_components.span, {
								style: { "--shiki-light": "#1A6FB0" },
								children: "  StoreProvider"
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
								children: "  useStore"
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
								children: "  useStoreContext"
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
								children: "  withPlugins"
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
									style: { "--shiki-light": "#9A5B13" },
									children: "0"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#3C4257" },
									children: ")."
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
									children: "  reducers"
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
									children: "    increment"
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
									children: ","
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#16233A" },
									children: " n"
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
									children: " =>"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#16233A" },
									children: " state"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#3D6F94" },
									children: " +"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#16233A" },
									children: " n"
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
									children: " Store"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#3D6F94" },
									children: " ="
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#3D6F94" },
									children: " typeof"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#16233A" },
									children: " store"
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
									children: " App"
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
									children: "StoreProvider"
								}),
								jsx(_components.span, {
									style: {
										"--shiki-light": "#3D6F94",
										"--shiki-light-font-style": "italic"
									},
									children: " store"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#3D6F94" },
									children: "="
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#16233A" },
									children: "{store}>"
								})
							]
						}),
						"\n",
						jsxs(_components.span, {
							"data-line": "",
							children: [
								jsx(_components.span, {
									style: { "--shiki-light": "#16233A" },
									children: "      <"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#0F7D6C" },
									children: "Counter"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#16233A" },
									children: " />"
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
									children: "StoreProvider"
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
						jsxs(_components.span, {
							"data-line": "",
							children: [
								jsx(_components.span, {
									style: { "--shiki-light": "#3D6F94" },
									children: "  const"
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
									children: " useStoreContext"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#3C4257" },
									children: "<Store>();"
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
									children: " count"
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
									children: "store"
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
									children: " store"
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
									children: "1"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#3C4257" },
									children: ")"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#16233A" },
									children: "}>{count}</"
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
						})
					]
				})
			})
		}),
		"\n",
		jsxs(_components.p, { children: [
			jsx(_components.code, { children: "useStoreContext" }),
			" throws if called outside a ",
			jsx(_components.code, { children: "<StoreProvider>" }),
			" tree."
		] }),
		"\n",
		jsxs(_components.h2, {
			id: "actions-are-stable-refs",
			children: [jsx(_components.a, {
				className: "header-anchor",
				"aria-label": "Permalink to \"Actions are stable refs\"",
				href: "#actions-are-stable-refs",
				children: jsx(_components.span, {
					"aria-hidden": "true",
					children: "#"
				})
			}), "Actions are stable refs"]
		}),
		"\n",
		jsxs(_components.p, { children: [
			"Methods and dispatch functions on a ",
			jsx(_components.code, { children: "withPlugins" }),
			" store are stable references,\nthey don't change between renders. You can call them directly without\nsubscribing:"
		] }),
		"\n",
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
									style: { "--shiki-light": "#3D6F94" },
									children: "function"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#1A6FB0" },
									children: " AddButton"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#3C4257" },
									children: "() {"
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
								children: "  // No useStore/useSelector needed — just call the method directly."
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
									children: " todoStore"
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
									children: "new item"
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
