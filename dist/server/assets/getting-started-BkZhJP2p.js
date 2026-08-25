import { Fragment, jsx, jsxs } from "react/jsx-runtime";
//#region ../store/docs/guide/getting-started.md
var frontmatter = { "description": "Install @kintools/store-core, @kintools/store-react, or @kintools/store-plugins from JSR, write your first store with createStore, and grow it with withPlugins." };
function _createMdxContent(props) {
	const _components = {
		a: "a",
		code: "code",
		figure: "figure",
		h1: "h1",
		h2: "h2",
		li: "li",
		p: "p",
		pre: "pre",
		span: "span",
		ul: "ul",
		...props.components
	}, { CodeGroup, CodeGroupItem } = _components;
	if (!CodeGroup) _missingMdxReference("CodeGroup", true);
	if (!CodeGroupItem) _missingMdxReference("CodeGroupItem", true);
	return jsxs(Fragment, { children: [
		jsxs(_components.h1, {
			id: "getting-started",
			children: [jsx(_components.a, {
				className: "header-anchor",
				"aria-label": "Permalink to \"Getting Started\"",
				href: "#getting-started",
				children: jsx(_components.span, {
					"aria-hidden": "true",
					children: "#"
				})
			}), "Getting Started"]
		}),
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
		jsx(_components.p, { children: "For vanilla projects:" }),
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
										children: " @kintools/store-core"
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
										children: " @kintools/store-core"
									})
								]
							})
						})
					})
				})
			}),
			jsx(CodeGroupItem, {
				label: "yarn",
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
										children: "yarn"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#1A6FB0" },
										children: " add"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#1A6FB0" },
										children: " @kintools/store-core"
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
										children: " jsr:@kintools/store-core"
									})
								]
							})
						})
					})
				})
			})
		] }),
		"\n",
		jsxs(_components.p, { children: [
			"For React projects (",
			jsx(_components.code, { children: "@kintools/store-core" }),
			" is included):"
		] }),
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
				label: "yarn",
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
										children: "yarn"
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
			})
		] }),
		"\n",
		jsx(_components.p, { children: "To add official plugins:" }),
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
										children: " @kintools/store-plugins"
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
										children: " @kintools/store-plugins"
									})
								]
							})
						})
					})
				})
			}),
			jsx(CodeGroupItem, {
				label: "yarn",
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
										children: "yarn"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#1A6FB0" },
										children: " add"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#1A6FB0" },
										children: " @kintools/store-plugins"
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
										children: " jsr:@kintools/store-plugins"
									})
								]
							})
						})
					})
				})
			})
		] }),
		"\n",
		jsxs(_components.h2, {
			id: "quick-start",
			children: [jsx(_components.a, {
				className: "header-anchor",
				"aria-label": "Permalink to \"Quick start\"",
				href: "#quick-start",
				children: jsx(_components.span, {
					"aria-hidden": "true",
					children: "#"
				})
			}), "Quick start"]
		}),
		"\n",
		jsx(_components.p, { children: "Create a store, write plain functions, done:" }),
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
									children: "Buy groceries"
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
									children: "());"
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
								children: "// { todos: ['Buy groceries'], status: 'idle' }"
							})
						})
					]
				})
			})
		}),
		"\n",
		jsxs(_components.p, { children: [
			"When your app grows, move logic into the store with ",
			jsx(_components.code, { children: ".use()" }),
			":"
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
									children: " history"
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
									children: " } as TodoState)"
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
									children: "Buy groceries"
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
			"Each ",
			jsx(_components.code, { children: ".use()" }),
			" adds capability, not a nesting level. The store grows with you."
		] }),
		"\n",
		jsxs(_components.h2, {
			id: "whats-next",
			children: [jsx(_components.a, {
				className: "header-anchor",
				"aria-label": "Permalink to \"What's next\"",
				href: "#whats-next",
				children: jsx(_components.span, {
					"aria-hidden": "true",
					children: "#"
				})
			}), "What's next"]
		}),
		"\n",
		jsxs(_components.ul, { children: [
			"\n",
			jsxs(_components.li, { children: [jsx(_components.a, {
				href: "/store/guide/create-store",
				children: "createStore"
			}), " — the minimal foundation"] }),
			"\n",
			jsxs(_components.li, { children: [jsx(_components.a, {
				href: "/store/guide/with-plugins",
				children: "withPlugins"
			}), " — add methods, reducers, and\nmiddleware"] }),
			"\n",
			jsxs(_components.li, { children: [jsx(_components.a, {
				href: "/store/guide/derive",
				children: "derive"
			}), " — compose stores reactively"] }),
			"\n",
			jsxs(_components.li, { children: [jsx(_components.a, {
				href: "/store/plugins/",
				children: "Plugins"
			}), " — persist, history, immer"] }),
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
function _missingMdxReference(id, component) {
	throw new Error("Expected " + (component ? "component" : "object") + " `" + id + "` to be defined: you likely forgot to import, pass, or provide it.");
}
//#endregion
export { MDXContent as default, frontmatter };
