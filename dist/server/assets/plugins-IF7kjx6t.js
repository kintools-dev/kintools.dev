import { Fragment, jsx, jsxs } from "react/jsx-runtime";
//#region ../store/docs/plugins/index.md
var frontmatter = { "description": "The official @kintools/store-plugins package: broadcast, devtools, history, immer, and persist, installed together and registered with .use()." };
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
		table: "table",
		tbody: "tbody",
		td: "td",
		th: "th",
		thead: "thead",
		tr: "tr",
		...props.components
	}, { CodeGroup, CodeGroupItem } = _components;
	if (!CodeGroup) _missingMdxReference("CodeGroup", true);
	if (!CodeGroupItem) _missingMdxReference("CodeGroupItem", true);
	return jsxs(Fragment, { children: [
		jsxs(_components.h1, {
			id: "official-plugins",
			children: [jsx(_components.a, {
				className: "header-anchor",
				"aria-label": "Permalink to \"Official Plugins\"",
				href: "#official-plugins",
				children: jsx(_components.span, {
					"aria-hidden": "true",
					children: "#"
				})
			}), "Official Plugins"]
		}),
		"\n",
		jsxs(_components.p, { children: [
			"Official plugins for ",
			jsx(_components.code, { children: "@kintools/store-core" }),
			", published as\n",
			jsx(_components.code, { children: "@kintools/store-plugins" }),
			"."
		] }),
		"\n",
		jsxs(_components.p, { children: [
			"To learn how to write your own plugin, see\n",
			jsx(_components.a, {
				href: "/store/guide/writing-plugins",
				children: "Writing Plugins"
			}),
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
			id: "available-plugins",
			children: [jsx(_components.a, {
				className: "header-anchor",
				"aria-label": "Permalink to \"Available plugins\"",
				href: "#available-plugins",
				children: jsx(_components.span, {
					"aria-hidden": "true",
					children: "#"
				})
			}), "Available plugins"]
		}),
		"\n",
		jsxs(_components.table, { children: [jsx(_components.thead, { children: jsxs(_components.tr, { children: [jsx(_components.th, { children: "Plugin" }), jsx(_components.th, { children: "Description" })] }) }), jsxs(_components.tbody, { children: [
			jsxs(_components.tr, { children: [jsx(_components.td, { children: jsx(_components.a, {
				href: "/store/plugins/broadcast",
				children: jsx(_components.code, { children: "broadcast" })
			}) }), jsxs(_components.td, { children: ["Syncs state across browser tabs with ", jsx(_components.code, { children: "BroadcastChannel" })] })] }),
			jsxs(_components.tr, { children: [jsx(_components.td, { children: jsx(_components.a, {
				href: "/store/plugins/devtools",
				children: jsx(_components.code, { children: "devtools" })
			}) }), jsx(_components.td, { children: "Connects to the Redux DevTools Extension" })] }),
			jsxs(_components.tr, { children: [jsx(_components.td, { children: jsx(_components.a, {
				href: "/store/plugins/history",
				children: jsx(_components.code, { children: "history" })
			}) }), jsx(_components.td, { children: "Undo / redo / reset with snapshot history" })] }),
			jsxs(_components.tr, { children: [jsx(_components.td, { children: jsx(_components.a, {
				href: "/store/plugins/immer",
				children: jsx(_components.code, { children: "immer" })
			}) }), jsxs(_components.td, { children: [
				"Writes reducers or ",
				jsx(_components.code, { children: "set" }),
				"'s updaters as Immer draft mutations"
			] })] }),
			jsxs(_components.tr, { children: [jsx(_components.td, { children: jsx(_components.a, {
				href: "/store/plugins/persist",
				children: jsx(_components.code, { children: "persist" })
			}) }), jsx(_components.td, { children: "Persists state to localStorage (or any custom storage)" })] })
		] })] }),
		"\n",
		jsxs(_components.h2, {
			id: "usage-pattern",
			children: [jsx(_components.a, {
				className: "header-anchor",
				"aria-label": "Permalink to \"Usage pattern\"",
				href: "#usage-pattern",
				children: jsx(_components.span, {
					"aria-hidden": "true",
					children: "#"
				})
			}), "Usage pattern"]
		}),
		"\n",
		jsxs(_components.p, { children: [
			"All plugins are registered with ",
			jsx(_components.code, { children: ".use()" }),
			". Plugins can be top-level or\nnamespaced. Namespaced plugins (like ",
			jsx(_components.code, { children: "persist" }),
			" and ",
			jsx(_components.code, { children: "history" }),
			" below) expose their\nmethods under their namespace key:"
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
									children: " immer"
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
									children: " []"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#3C4257" },
									children: " as"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#3C4257" },
									children: " string[],"
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
									children: "my-store"
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
									children: "({"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#1A6FB0" },
									children: " limit"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#3C4257" },
									children: ":"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#9A5B13" },
									children: " 50"
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
									children: "      add"
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
									children: "        draft"
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
									children: "); "
								}),
								jsx(_components.span, {
									style: {
										"--shiki-light": "#A83A1C",
										"--shiki-light-font-style": "italic"
									},
									children: "// From the top-level inline plugin"
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
