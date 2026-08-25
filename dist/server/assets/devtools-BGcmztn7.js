import { Fragment, jsx, jsxs } from "react/jsx-runtime";
//#region ../form/docs/guide/devtools.md
var frontmatter = void 0;
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
	}, { CodeGroup, CodeGroupItem, Container } = _components;
	if (!CodeGroup) _missingMdxReference("CodeGroup", true);
	if (!CodeGroupItem) _missingMdxReference("CodeGroupItem", true);
	if (!Container) _missingMdxReference("Container", true);
	return jsxs(Fragment, { children: [
		jsxs(_components.h1, {
			id: "devtools",
			children: [jsx(_components.a, {
				className: "header-anchor",
				"aria-label": "Permalink to \"Devtools\"",
				href: "#devtools",
				children: jsx(_components.span, {
					"aria-hidden": "true",
					children: "#"
				})
			}), "Devtools"]
		}),
		"\n",
		jsx(Container, {
			type: "info",
			children: jsx(_components.p, { children: "React only for now: other framework bindings are planned." })
		}),
		"\n",
		jsxs(_components.p, { children: [
			jsx(_components.code, { children: "@kintools/form-devtools-react" }),
			" is an inspector panel for visualizing a\n",
			jsx(_components.code, { children: "@kintools/form-react" }),
			" form's live tree state during development: every\nregistered field/group's ",
			jsx(_components.code, { children: "value" }),
			", ",
			jsx(_components.code, { children: "error" }),
			", ",
			jsx(_components.code, { children: "touched" }),
			", and ",
			jsx(_components.code, { children: "validating" }),
			" as they\nchange."
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
										children: " @kintools/form-devtools-react"
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
										children: " @kintools/form-devtools-react"
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
										children: " jsr:@kintools/form-devtools-react"
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
		jsxs(_components.p, { children: [
			"Mount ",
			jsx(_components.code, { children: "DevtoolsProvider" }),
			" once, near the root of your app, typically only in\ndevelopment:"
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
									children: " DevtoolsProvider"
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
									children: "@kintools/form-devtools-react"
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
									children: " App"
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
									style: { "--shiki-light": "#0F7D6C" },
									children: "  return"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#0F7D6C" },
									children: " import"
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
								})
							]
						}),
						"\n",
						jsxs(_components.span, {
							"data-line": "",
							children: [jsx(_components.span, {
								style: { "--shiki-light": "#3D6F94" },
								children: "    ?"
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
									children: "      <"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#0F7D6C" },
									children: "StrictMode"
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
									children: "        <"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#0F7D6C" },
									children: "DevtoolsProvider"
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
									children: "          <"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#0F7D6C" },
									children: "CheckoutForm"
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
									children: "        </"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#0F7D6C" },
									children: "DevtoolsProvider"
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
									children: "      </"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#0F7D6C" },
									children: "StrictMode"
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
								children: "    )"
							})
						}),
						"\n",
						jsxs(_components.span, {
							"data-line": "",
							children: [
								jsx(_components.span, {
									style: { "--shiki-light": "#3D6F94" },
									children: "    :"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#16233A" },
									children: " <"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#0F7D6C" },
									children: "CheckoutForm"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#16233A" },
									children: " />"
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
			"Then opt each form in with ",
			jsx(_components.code, { children: "useFormDevtools" }),
			", right next to ",
			jsx(_components.code, { children: "useForm" }),
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
									style: { "--shiki-light": "#0F7D6C" },
									children: "import "
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#3C4257" },
									children: "{"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#1A6FB0" },
									children: " useForm"
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
									children: "@kintools/form-react"
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
									children: " useFormDevtools"
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
									children: "@kintools/form-devtools-react"
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
									children: " CheckoutForm"
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
									style: { "--shiki-light": "#16233A" },
									children: " form"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#3D6F94" },
									children: " ="
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#16233A" },
									children: " useForm"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#3C4257" },
									children: "({"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#1A6FB0" },
									children: " initialValue"
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
									children: " email"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#3C4257" },
									children: ":"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#3C4257" },
									children: " \"\""
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
									children: " }"
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
									style: { "--shiki-light": "#16233A" },
									children: "  useFormDevtools"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#3C4257" },
									children: "("
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#16233A" },
									children: "form"
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
									children: "checkout"
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
									children: "form"
								}),
								jsx(_components.span, {
									style: {
										"--shiki-light": "#3D6F94",
										"--shiki-light-font-style": "italic"
									},
									children: " onSubmit"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#3D6F94" },
									children: "="
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#16233A" },
									children: "{form"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#3C4257" },
									children: "."
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#16233A" },
									children: "handleSubmit}>"
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
									children: "TextField"
								}),
								jsx(_components.span, {
									style: {
										"--shiki-light": "#3D6F94",
										"--shiki-light-font-style": "italic"
									},
									children: " api"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#3D6F94" },
									children: "="
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#16233A" },
									children: "{form"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#3C4257" },
									children: "."
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#16233A" },
									children: "field"
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
									children: "email"
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
									children: "} "
								}),
								jsx(_components.span, {
									style: {
										"--shiki-light": "#3D6F94",
										"--shiki-light-font-style": "italic"
									},
									children: "label"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#3D6F94" },
									children: "="
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#3C4257" },
									children: "\""
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#9A5B13" },
									children: "Email"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#3C4257" },
									children: "\""
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
									children: "form"
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
			"The optional ",
			jsx(_components.code, { children: "name" }),
			" (",
			jsx(_components.code, { children: "\"checkout\"" }),
			" above) is shown in the panel's form selector\ninstead of the form's numeric id, useful once more than one form is registered."
		] }),
		"\n",
		jsxs(_components.p, { children: [
			jsx(_components.code, { children: "useFormDevtools" }),
			" is a no-op without an ancestor ",
			jsx(_components.code, { children: "DevtoolsProvider" }),
			": no\nsubscriber is added to the form's tree, so it's safe to leave the call in place\nand mount ",
			jsx(_components.code, { children: "DevtoolsProvider" }),
			" conditionally based on environment."
		] }),
		"\n",
		jsxs(_components.h2, {
			id: "docking-the-panel",
			children: [jsx(_components.a, {
				className: "header-anchor",
				"aria-label": "Permalink to \"Docking the panel\"",
				href: "#docking-the-panel",
				children: jsx(_components.span, {
					"aria-hidden": "true",
					children: "#"
				})
			}), "Docking the panel"]
		}),
		"\n",
		jsxs(_components.p, { children: [
			"The panel docks to a corner of the viewport (",
			jsx(_components.code, { children: "\"top-left\"" }),
			", ",
			jsx(_components.code, { children: "\"top-right\"" }),
			",\n",
			jsx(_components.code, { children: "\"bottom-left\"" }),
			", or ",
			jsx(_components.code, { children: "\"bottom-right\"" }),
			"), defaulting to ",
			jsx(_components.code, { children: "\"bottom-right\"" }),
			". Set a\ndifferent default with ",
			jsx(_components.code, { children: "initialPosition" }),
			", or let the user reposition it from the\npanel (the choice persists across reloads):"
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
									style: { "--shiki-light": "#16233A" },
									children: "<"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#0F7D6C" },
									children: "DevtoolsProvider"
								}),
								jsx(_components.span, {
									style: {
										"--shiki-light": "#3D6F94",
										"--shiki-light-font-style": "italic"
									},
									children: " initialPosition"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#3D6F94" },
									children: "="
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#3C4257" },
									children: "\""
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#9A5B13" },
									children: "top-right"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#3C4257" },
									children: "\""
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
									children: "  <"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#0F7D6C" },
									children: "CheckoutForm"
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
									children: "</"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#0F7D6C" },
									children: "DevtoolsProvider"
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
