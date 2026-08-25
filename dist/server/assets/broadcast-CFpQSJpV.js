import { Fragment, jsx, jsxs } from "react/jsx-runtime";
//#region ../store/docs/plugins/broadcast.md
var frontmatter = { "description": "The broadcast plugin syncs a store's entire state across browser tabs with BroadcastChannel, last-write-wins, with no storage dependency." };
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
	};
	return jsxs(Fragment, { children: [
		jsxs(_components.h1, {
			id: "broadcast",
			children: [jsx(_components.a, {
				className: "header-anchor",
				"aria-label": "Permalink to \"broadcast\"",
				href: "#broadcast",
				children: jsx(_components.span, {
					"aria-hidden": "true",
					children: "#"
				})
			}), "broadcast"]
		}),
		"\n",
		jsxs(_components.p, { children: [
			"Syncs a store's entire state across browser tabs using ",
			jsx(_components.code, { children: "BroadcastChannel" }),
			".\nUnlike ",
			jsx(_components.a, {
				href: "/store/plugins/persist",
				children: jsx(_components.code, { children: "persist" })
			}),
			", it never touches storage: every\nchange is broadcast to other tabs directly, and applying one back travels\nthrough the reducer pipeline via an internal ",
			jsx(_components.code, { children: "_apply" }),
			" reducer so middlewares can\nobserve it. A tab opened after others requests the current state on activation,\nso it doesn't have to wait for the next change to catch up."
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
									children: " broadcast"
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
									children: "state"
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
									children: " =>"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#3C4257" },
									children: " ({"
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
									children: "state"
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
									children: " item"
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
								children: "  })"
							})
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
									children: "broadcast"
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
									children: "broadcast"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#3C4257" },
									children: "({"
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
									children: "todos"
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
									children: "// seen by other tabs sharing the \"todos\" channel"
								})
							]
						})
					]
				})
			})
		}),
		"\n",
		jsxs(_components.h2, {
			id: "plugin-methods",
			children: [jsx(_components.a, {
				className: "header-anchor",
				"aria-label": "Permalink to \"Plugin methods\"",
				href: "#plugin-methods",
				children: jsx(_components.span, {
					"aria-hidden": "true",
					children: "#"
				})
			}), "Plugin methods"]
		}),
		"\n",
		jsxs(_components.table, { children: [jsx(_components.thead, { children: jsxs(_components.tr, { children: [jsx(_components.th, { children: "Method" }), jsx(_components.th, { children: "Description" })] }) }), jsx(_components.tbody, { children: jsxs(_components.tr, { children: [jsx(_components.td, { children: jsx(_components.code, { children: "close()" }) }), jsxs(_components.td, { children: [
			"Closes the underlying ",
			jsx(_components.code, { children: "BroadcastChannel" }),
			". Also called on ",
			jsx(_components.code, { children: "destroy()" }),
			"."
		] })] }) })] }),
		"\n",
		jsxs(_components.h2, {
			id: "options",
			children: [jsx(_components.a, {
				className: "header-anchor",
				"aria-label": "Permalink to \"Options\"",
				href: "#options",
				children: jsx(_components.span, {
					"aria-hidden": "true",
					children: "#"
				})
			}), "Options"]
		}),
		"\n",
		jsxs(_components.table, { children: [jsx(_components.thead, { children: jsxs(_components.tr, { children: [
			jsx(_components.th, { children: "Option" }),
			jsx(_components.th, { children: "Type" }),
			jsx(_components.th, { children: "Description" })
		] }) }), jsx(_components.tbody, { children: jsxs(_components.tr, { children: [
			jsx(_components.td, { children: jsx(_components.code, { children: "name" }) }),
			jsx(_components.td, { children: jsx(_components.code, { children: "string" }) }),
			jsxs(_components.td, { children: [
				"The ",
				jsx(_components.code, { children: "BroadcastChannel" }),
				" name. Only stores sharing the same name sync."
			] })
		] }) })] }),
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
								style: { "--shiki-light": "#3C4257" },
								children: "."
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
								children: "broadcast"
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
								children: "broadcast"
							}),
							jsx(_components.span, {
								style: { "--shiki-light": "#3C4257" },
								children: "({"
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
					})
				})
			})
		}),
		"\n",
		jsxs(_components.h2, {
			id: "conflict-resolution",
			children: [jsx(_components.a, {
				className: "header-anchor",
				"aria-label": "Permalink to \"Conflict resolution\"",
				href: "#conflict-resolution",
				children: jsx(_components.span, {
					"aria-hidden": "true",
					children: "#"
				})
			}), "Conflict resolution"]
		}),
		"\n",
		jsx(_components.p, { children: "Conflicts are resolved last-write-wins by wall-clock time: if two tabs change\nstate within the same millisecond, one of the changes is silently dropped. For\nstate that genuinely needs conflict resolution (concurrent edits merged rather\nthan one replacing the other), broadcast the specific operations instead of the\nwhole state, or reach for a CRDT library." }),
		"\n",
		jsxs(_components.h2, {
			id: "composing-with-persist",
			children: [jsx(_components.a, {
				className: "header-anchor",
				"aria-label": "Permalink to \"Composing with persist\"",
				href: "#composing-with-persist",
				children: jsx(_components.span, {
					"aria-hidden": "true",
					children: "#"
				})
			}), "Composing with persist"]
		}),
		"\n",
		jsxs(_components.p, { children: [
			jsx(_components.code, { children: "broadcast" }),
			" and ",
			jsx(_components.code, { children: "persist" }),
			" solve different problems and compose cleanly:\n",
			jsx(_components.code, { children: "persist" }),
			" survives a page reload, ",
			jsx(_components.code, { children: "broadcast" }),
			" reaches other open tabs\nimmediately without waiting on a storage write."
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
									children: "broadcast"
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
									children: "broadcast"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#3C4257" },
									children: "({"
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
									children: "todos"
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
						})
					]
				})
			})
		}),
		"\n",
		jsxs(_components.h2, {
			id: "inside-middleware",
			children: [jsx(_components.a, {
				className: "header-anchor",
				"aria-label": "Permalink to \"Inside middleware\"",
				href: "#inside-middleware",
				children: jsx(_components.span, {
					"aria-hidden": "true",
					children: "#"
				})
			}), "Inside middleware"]
		}),
		"\n",
		jsxs(_components.p, { children: [
			"The plugin uses an internal ",
			jsx(_components.code, { children: "_apply" }),
			" reducer to change state, so every incoming\nupdate from another tab travels through the middleware pipeline. A logging\nmiddleware will see it:"
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
									children: "middleware"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#3C4257" },
									children: ": () "
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#3D6F94" },
									children: "=>"
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
						jsx(_components.span, {
							"data-line": "",
							children: jsx(_components.span, {
								style: {
									"--shiki-light": "#A83A1C",
									"--shiki-light-font-style": "italic"
								},
								children: "  // Includes \"broadcast._apply\", assuming the plugin is registered under"
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
								children: "  // the \"broadcast\" namespace."
							})
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
								children: "},"
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
//#endregion
export { MDXContent as default, frontmatter };
