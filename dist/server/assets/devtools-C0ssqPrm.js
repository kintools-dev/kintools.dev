import { Fragment, jsx, jsxs } from "react/jsx-runtime";
//#region ../store/docs/plugins/devtools.md
var frontmatter = { "description": "The devtools plugin connects a store to the Redux DevTools Extension for time-travel debugging: state inspection, action replay, and jump-to-state." };
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
			id: "devtools",
			children: [jsx(_components.a, {
				className: "header-anchor",
				"aria-label": "Permalink to \"devtools\"",
				href: "#devtools",
				children: jsx(_components.span, {
					"aria-hidden": "true",
					children: "#"
				})
			}), "devtools"]
		}),
		"\n",
		jsxs(_components.p, { children: [
			"Connects a store to the\n",
			jsx(_components.a, {
				href: "https://github.com/reduxjs/redux-devtools",
				children: "Redux DevTools Extension"
			}),
			" for\ntime-travel debugging."
		] }),
		"\n",
		jsxs(_components.h2, {
			id: "setup",
			children: [jsx(_components.a, {
				className: "header-anchor",
				"aria-label": "Permalink to \"Setup\"",
				href: "#setup",
				children: jsx(_components.span, {
					"aria-hidden": "true",
					children: "#"
				})
			}), "Setup"]
		}),
		"\n",
		jsx(_components.p, { children: "Install the browser extension, then register the plugin. No namespace is\nrequired because the plugin adds no public methods or reducers:" }),
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
									children: " devtools"
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
									style: { "--shiki-light": "#9A5B13" },
									children: "0"
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
									style: { "--shiki-light": "#16233A" },
									children: "devtools"
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
									children: "counter"
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
			jsx(_components.th, { children: "Default" }),
			jsx(_components.th, { children: "Description" })
		] }) }), jsx(_components.tbody, { children: jsxs(_components.tr, { children: [
			jsx(_components.td, { children: jsx(_components.code, { children: "name" }) }),
			jsx(_components.td, { children: jsx(_components.code, { children: "string" }) }),
			jsx(_components.td, { children: jsx(_components.code, { children: "\"kin-store\"" }) }),
			jsx(_components.td, { children: "Name shown in the extension's instance selector. Use a distinct name per store when registering multiple stores." })
		] }) })] }),
		"\n",
		jsxs(_components.h2, {
			id: "production",
			children: [jsx(_components.a, {
				className: "header-anchor",
				"aria-label": "Permalink to \"Production\"",
				href: "#production",
				children: jsx(_components.span, {
					"aria-hidden": "true",
					children: "#"
				})
			}), "Production"]
		}),
		"\n",
		jsx(_components.p, { children: "The plugin is a no-op when the extension is absent, so it is safe to leave in\nproduction code. To eliminate it from the bundle entirely, use a ternary with\nyour bundler's dev-mode flag:" }),
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
								children: "// Vite"
							})
						}),
						"\n",
						jsxs(_components.span, {
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
									style: { "--shiki-light": "#0F7D6C" },
									children: "import"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#3C4257" },
									children: "."
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#16233A" },
									children: "meta"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#3C4257" },
									children: "."
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#16233A" },
									children: "env"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#3C4257" },
									children: "."
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#16233A" },
									children: "DEV"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#3D6F94" },
									children: " ?"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#16233A" },
									children: " devtools"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#3C4257" },
									children: "() "
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#3D6F94" },
									children: ":"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#3C4257" },
									children: " {})"
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
								children: "// webpack / Next.js"
							})
						}),
						"\n",
						jsxs(_components.span, {
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
									style: { "--shiki-light": "#16233A" },
									children: "process"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#3C4257" },
									children: "."
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#16233A" },
									children: "env"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#3C4257" },
									children: "."
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#16233A" },
									children: "NODE_ENV"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#3D6F94" },
									children: " !=="
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#3C4257" },
									children: " \""
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#9A5B13" },
									children: "production"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#3C4257" },
									children: "\""
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#3D6F94" },
									children: " ?"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#16233A" },
									children: " devtools"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#3C4257" },
									children: "() "
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#3D6F94" },
									children: ":"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#3C4257" },
									children: " {})"
								})
							]
						})
					]
				})
			})
		}),
		"\n",
		jsxs(_components.p, { children: [
			"The bundler replaces the flag with ",
			jsx(_components.code, { children: "false" }),
			", collapses the ternary to ",
			jsx(_components.code, { children: "{}" }),
			", and\ntree-shakes the ",
			jsx(_components.code, { children: "devtools" }),
			" import."
		] }),
		"\n",
		jsxs(_components.h2, {
			id: "state-changes",
			children: [jsx(_components.a, {
				className: "header-anchor",
				"aria-label": "Permalink to \"State changes\"",
				href: "#state-changes",
				children: jsx(_components.span, {
					"aria-hidden": "true",
					children: "#"
				})
			}), "State changes"]
		}),
		"\n",
		jsx(_components.p, { children: "Every state change is forwarded to the extension automatically." }),
		"\n",
		jsxs(_components.table, { children: [jsx(_components.thead, { children: jsxs(_components.tr, { children: [jsx(_components.th, { children: "Source" }), jsx(_components.th, { children: "Action type sent" })] }) }), jsxs(_components.tbody, { children: [jsxs(_components.tr, { children: [jsx(_components.td, { children: jsx(_components.code, { children: "store.dispatch.name(...args)" }) }), jsxs(_components.td, { children: [
			jsx(_components.code, { children: "\"name\"" }),
			" with ",
			jsx(_components.code, { children: "payload: args" })
		] })] }), jsxs(_components.tr, { children: [jsx(_components.td, { children: jsx(_components.code, { children: "store.set(...)" }) }), jsx(_components.td, { children: jsx(_components.code, { children: "\"@@SET\"" }) })] })] })] }),
		"\n",
		jsxs(_components.h2, {
			id: "supported-panel-actions",
			children: [jsx(_components.a, {
				className: "header-anchor",
				"aria-label": "Permalink to \"Supported panel actions\"",
				href: "#supported-panel-actions",
				children: jsx(_components.span, {
					"aria-hidden": "true",
					children: "#"
				})
			}), "Supported panel actions"]
		}),
		"\n",
		jsxs(_components.table, { children: [jsx(_components.thead, { children: jsxs(_components.tr, { children: [jsx(_components.th, { children: "Panel action" }), jsx(_components.th, { children: "Effect on the store" })] }) }), jsxs(_components.tbody, { children: [
			jsxs(_components.tr, { children: [jsx(_components.td, { children: "Jump to state / action" }), jsx(_components.td, { children: "Restores the selected state snapshot" })] }),
			jsxs(_components.tr, { children: [jsx(_components.td, { children: "Reset" }), jsx(_components.td, { children: "Restores the initial state (at plugin activation)" })] }),
			jsxs(_components.tr, { children: [jsx(_components.td, { children: "Commit" }), jsx(_components.td, { children: "Makes the current state the new rollback baseline" })] }),
			jsxs(_components.tr, { children: [jsx(_components.td, { children: "Rollback" }), jsx(_components.td, { children: "Restores the last committed state" })] }),
			jsxs(_components.tr, { children: [jsx(_components.td, { children: "Import state" }), jsx(_components.td, { children: "Restores the active state from the imported session" })] })
		] })] }),
		"\n",
		jsx(_components.p, { children: "Toggle action and reorder action are not supported because they require\nreplaying individual actions rather than restoring snapshots." })
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
