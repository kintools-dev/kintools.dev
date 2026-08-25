import { Fragment, jsx, jsxs } from "react/jsx-runtime";
//#region ../form/docs/guide/ssr.md
var frontmatter = void 0;
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
	}, { Container } = _components;
	if (!Container) _missingMdxReference("Container", true);
	return jsxs(Fragment, { children: [
		jsxs(_components.h1, {
			id: "server-side-rendering-ssr",
			children: [jsx(_components.a, {
				className: "header-anchor",
				"aria-label": "Permalink to \"Server-Side Rendering (SSR)\"",
				href: "#server-side-rendering-ssr",
				children: jsx(_components.span, {
					"aria-hidden": "true",
					children: "#"
				})
			}), "Server-Side Rendering (SSR)"]
		}),
		"\n",
		jsx(Container, {
			type: "info",
			children: jsxs(_components.p, { children: [
				"React only for now: other framework bindings are planned, and Lit's own SSR\nstory (",
				jsx(_components.code, { children: "@lit-labs/ssr" }),
				") is a separate concern this guide doesn't cover."
			] })
		}),
		"\n",
		jsxs(_components.p, { children: [
			jsx(_components.code, { children: "@kintools/form-react" }),
			"'s bindings render on the server without any extra setup.\n",
			jsx(_components.code, { children: "useWatch" }),
			"/",
			jsx(_components.code, { children: "Watch" }),
			" are backed by ",
			jsx(_components.code, { children: "useSyncExternalStore" }),
			" with a proper\n",
			jsx(_components.code, { children: "getServerSnapshot" }),
			", so a form built the normal way, following the\n",
			jsx(_components.a, {
				href: "/form/guide/basic",
				children: "Basic"
			}),
			" guide, just works."
		] }),
		"\n",
		jsxs(_components.h2, {
			id: "fieldid-in-server-rendered-markup",
			children: [
				jsx(_components.a, {
					className: "header-anchor",
					"aria-label": "Permalink to \"field.id in server-rendered markup\"",
					href: "#fieldid-in-server-rendered-markup",
					children: jsx(_components.span, {
						"aria-hidden": "true",
						children: "#"
					})
				}),
				jsx(_components.code, { children: "field.id" }),
				" in server-rendered markup"
			]
		}),
		"\n",
		jsxs(_components.p, { children: [
			jsx(_components.code, { children: "field.id" }),
			" is a plain, module-level counter (",
			jsx(_components.code, { children: "let nextId = 0" }),
			"): stable across\narray reorders, which is what makes it a good React ",
			jsx(_components.code, { children: "key" }),
			" (see\n",
			jsx(_components.a, {
				href: "/form/guide/dynamic-arrays",
				children: "Dynamic Arrays"
			}),
			"), but not seeded the same way on\nthe server and the client. Rendering it into an actual DOM attribute, like an\n",
			jsx(_components.code, { children: "<input id={field.id}>" }),
			" / ",
			jsx(_components.code, { children: "<label htmlFor={field.id}>" }),
			" pair, mismatches during\nhydration."
		] }),
		"\n",
		jsxs(_components.p, { children: [
			"Use ",
			jsx(_components.code, { children: "useId()" }),
			" for a DOM id instead, and keep ",
			jsx(_components.code, { children: "field.id" }),
			" scoped to ",
			jsx(_components.code, { children: "key" }),
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
									children: "function"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#1A6FB0" },
									children: " TextField"
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
									children: "  { "
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#16233A" },
									children: "api"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#3C4257" },
									children: ", "
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#16233A" },
									children: "label"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#3C4257" },
									children: " }"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#3D6F94" },
									children: ":"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#3C4257" },
									children: " { api"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#3D6F94" },
									children: ":"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#3C4257" },
									children: " FieldApi<string, unknown>; label"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#3D6F94" },
									children: ":"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#3C4257" },
									children: " string },"
								})
							]
						}),
						"\n",
						jsx(_components.span, {
							"data-line": "",
							children: jsx(_components.span, {
								style: { "--shiki-light": "#3C4257" },
								children: ") {"
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
									children: " field"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#3D6F94" },
									children: " ="
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#16233A" },
									children: " useWatch"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#3C4257" },
									children: "("
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#16233A" },
									children: "api"
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
									children: "  const"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#16233A" },
									children: " reactId"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#3D6F94" },
									children: " ="
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#16233A" },
									children: " useId"
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
									children: "  const"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#16233A" },
									children: " inputId"
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
									children: "field"
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
									children: "}"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#9A5B13" },
									children: "-"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#3C4257" },
									children: "${"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#16233A" },
									children: "reactId"
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
									children: "div"
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
									children: "      <"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#0F7D6C" },
									children: "label"
								}),
								jsx(_components.span, {
									style: {
										"--shiki-light": "#3D6F94",
										"--shiki-light-font-style": "italic"
									},
									children: " htmlFor"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#3D6F94" },
									children: "="
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#16233A" },
									children: "{inputId}>{label}</"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#0F7D6C" },
									children: "label"
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
							children: [jsx(_components.span, {
								style: { "--shiki-light": "#16233A" },
								children: "      <"
							}), jsx(_components.span, {
								style: { "--shiki-light": "#0F7D6C" },
								children: "input"
							})]
						}),
						"\n",
						jsxs(_components.span, {
							"data-line": "",
							children: [
								jsx(_components.span, {
									style: {
										"--shiki-light": "#3D6F94",
										"--shiki-light-font-style": "italic"
									},
									children: "        id"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#3D6F94" },
									children: "="
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#16233A" },
									children: "{inputId}"
								})
							]
						}),
						"\n",
						jsxs(_components.span, {
							"data-line": "",
							children: [
								jsx(_components.span, {
									style: {
										"--shiki-light": "#3D6F94",
										"--shiki-light-font-style": "italic"
									},
									children: "        value"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#3D6F94" },
									children: "="
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#16233A" },
									children: "{field"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#3C4257" },
									children: "."
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#16233A" },
									children: "value}"
								})
							]
						}),
						"\n",
						jsxs(_components.span, {
							"data-line": "",
							children: [
								jsx(_components.span, {
									style: {
										"--shiki-light": "#3D6F94",
										"--shiki-light-font-style": "italic"
									},
									children: "        onBlur"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#3D6F94" },
									children: "="
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#16233A" },
									children: "{field"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#3C4257" },
									children: "."
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#16233A" },
									children: "handleBlur}"
								})
							]
						}),
						"\n",
						jsxs(_components.span, {
							"data-line": "",
							children: [
								jsx(_components.span, {
									style: {
										"--shiki-light": "#3D6F94",
										"--shiki-light-font-style": "italic"
									},
									children: "        onChange"
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
									children: "("
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
									style: { "--shiki-light": "#16233A" },
									children: " field"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#3C4257" },
									children: "."
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#16233A" },
									children: "handleChange"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#3C4257" },
									children: "("
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
									children: "target"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#3C4257" },
									children: "."
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#16233A" },
									children: "value"
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
							children: jsx(_components.span, {
								style: { "--shiki-light": "#16233A" },
								children: "      />"
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
									children: "div"
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
		jsxs(_components.h2, {
			id: "passing-server-loaded-data-in-as-initialvalue",
			children: [
				jsx(_components.a, {
					className: "header-anchor",
					"aria-label": "Permalink to \"Passing server-loaded data in as initialValue\"",
					href: "#passing-server-loaded-data-in-as-initialvalue",
					children: jsx(_components.span, {
						"aria-hidden": "true",
						children: "#"
					})
				}),
				"Passing server-loaded data in as ",
				jsx(_components.code, { children: "initialValue" })
			]
		}),
		"\n",
		jsxs(_components.p, { children: [
			"When the real initial value is already available on the server (e.g. a Next.js\nServer Component that fetched it before rendering), pass it straight into\n",
			jsx(_components.code, { children: "initialValue" }),
			" on the client component that calls ",
			jsx(_components.code, { children: "useForm" }),
			". There's no\nplaceholder to reconcile and no ",
			jsx(_components.code, { children: "reset()" }),
			" call needed: the value is there before\n",
			jsx(_components.code, { children: "useForm" }),
			" ever runs."
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
						jsx(_components.span, {
							"data-line": "",
							children: jsx(_components.span, {
								style: {
									"--shiki-light": "#A83A1C",
									"--shiki-light-font-style": "italic"
								},
								children: "// Server Component"
							})
						}),
						"\n",
						jsxs(_components.span, {
							"data-line": "",
							children: [
								jsx(_components.span, {
									style: { "--shiki-light": "#0F7D6C" },
									children: "export default async "
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#3D6F94" },
									children: "function"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#1A6FB0" },
									children: " Page"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#3C4257" },
									children: "()"
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
									children: " profile"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#3D6F94" },
									children: " ="
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#0F7D6C" },
									children: " await "
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#16233A" },
									children: "fetchProfile"
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
									children: "  return "
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#16233A" },
									children: "<"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#0F7D6C" },
									children: "ProfileForm"
								}),
								jsx(_components.span, {
									style: {
										"--shiki-light": "#3D6F94",
										"--shiki-light-font-style": "italic"
									},
									children: " initialValue"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#3D6F94" },
									children: "="
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#16233A" },
									children: "{profile} />"
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
						jsx(_components.span, {
							"data-line": "",
							children: jsx(_components.span, {
								style: {
									"--shiki-light": "#A83A1C",
									"--shiki-light-font-style": "italic"
								},
								children: "// Client Component"
							})
						}),
						"\n",
						jsxs(_components.span, {
							"data-line": "",
							children: [
								jsx(_components.span, {
									style: { "--shiki-light": "#3C4257" },
									children: "\""
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#9A5B13" },
									children: "use client"
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
									children: "function"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#1A6FB0" },
									children: " ProfileForm"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#3C4257" },
									children: "({ "
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#16233A" },
									children: "initialValue"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#3C4257" },
									children: " }"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#3D6F94" },
									children: ":"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#3C4257" },
									children: " { initialValue"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#3D6F94" },
									children: ":"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#3C4257" },
									children: " Profile }) {"
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
								})
							]
						}),
						"\n",
						jsxs(_components.span, {
							"data-line": "",
							children: [jsx(_components.span, {
								style: { "--shiki-light": "#16233A" },
								children: "    initialValue"
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
									style: { "--shiki-light": "#1A6FB0" },
									children: "    onSubmit"
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
									children: "form"
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
									children: " saveProfile"
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
									children: "."
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#16233A" },
									children: "value"
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
									children: "firstName"
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
									children: "First name"
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
			"This is the same \"delay mounting the form\" pattern from\n",
			jsx(_components.a, {
				href: "/form/guide/async-initial-values",
				children: "Async Initial Values"
			}),
			", just with the server\ndoing the waiting instead of a client-side loading state."
		] }),
		"\n",
		jsxs(_components.h2, {
			id: "full-example",
			children: [jsx(_components.a, {
				className: "header-anchor",
				"aria-label": "Permalink to \"Full example\"",
				href: "#full-example",
				children: jsx(_components.span, {
					"aria-hidden": "true",
					children: "#"
				})
			}), "Full example"]
		}),
		"\n",
		jsxs(_components.p, { children: [
			jsx(_components.a, {
				href: "https://github.com/kintools-dev/form/tree/main/examples/nextjs",
				children: jsx(_components.code, { children: "examples/nextjs" })
			}),
			"\nin the repo is a minimal Next.js App Router app (a Server Component page\nrendering a client-component ",
			jsx(_components.code, { children: "LoginForm" }),
			") that exists specifically to exercise\nthese bindings under a real SSR framework, not just a client-only dev server."
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
				href: "/form/guide/async-initial-values",
				children: "Async Initial Values"
			}), ": the placeholder vs.\ndelayed-mount tradeoff this guide's last section builds on"] }),
			"\n",
			jsxs(_components.li, { children: [
				jsx(_components.a, {
					href: "/form/guide/common-pitfalls",
					children: "Common Pitfalls"
				}),
				": the short version of the\n",
				jsx(_components.code, { children: "field.id" }),
				" gotcha above"
			] }),
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
