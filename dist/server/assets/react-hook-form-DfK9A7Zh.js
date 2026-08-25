import { Fragment, jsx, jsxs } from "react/jsx-runtime";
//#region ../form/docs/comparison/react-hook-form.md
var frontmatter = void 0;
function _createMdxContent(props) {
	const _components = {
		a: "a",
		code: "code",
		em: "em",
		figure: "figure",
		h1: "h1",
		h2: "h2",
		h3: "h3",
		li: "li",
		p: "p",
		pre: "pre",
		span: "span",
		strong: "strong",
		table: "table",
		tbody: "tbody",
		td: "td",
		th: "th",
		thead: "thead",
		tr: "tr",
		ul: "ul",
		...props.components
	}, { CodeGroup, CodeGroupItem, SideBySide } = _components;
	if (!CodeGroup) _missingMdxReference("CodeGroup", true);
	if (!CodeGroupItem) _missingMdxReference("CodeGroupItem", true);
	if (!SideBySide) _missingMdxReference("SideBySide", true);
	return jsxs(Fragment, { children: [
		jsxs(_components.h1, {
			id: "vs-react-hook-form",
			children: [jsx(_components.a, {
				className: "header-anchor",
				"aria-label": "Permalink to \"vs React Hook Form\"",
				href: "#vs-react-hook-form",
				children: jsx(_components.span, {
					"aria-hidden": "true",
					children: "#"
				})
			}), "vs React Hook Form"]
		}),
		"\n",
		jsxs(_components.p, { children: [
			"React Hook Form is the most widely used of the three (by a wide and growing\nmargin), so it's the one worth the deepest comparison. This page works through\nthe same topics the ",
			jsx(_components.a, {
				href: "/form/guide/",
				children: "guide"
			}),
			" covers, one at a time, against\n",
			jsx(_components.code, { children: "react-hook-form@7.81.0" }),
			"."
		] }),
		"\n",
		jsxs(_components.h2, {
			id: "field-registration--binding-model",
			children: [jsx(_components.a, {
				className: "header-anchor",
				"aria-label": "Permalink to \"Field registration & binding model\"",
				href: "#field-registration--binding-model",
				children: jsx(_components.span, {
					"aria-hidden": "true",
					children: "#"
				})
			}), "Field registration & binding model"]
		}),
		"\n",
		jsxs(_components.h3, {
			id: "native-input",
			children: [jsx(_components.a, {
				className: "header-anchor",
				"aria-label": "Permalink to \"Native input\"",
				href: "#native-input",
				children: jsx(_components.span, {
					"aria-hidden": "true",
					children: "#"
				})
			}), "Native input"]
		}),
		"\n",
		jsx(SideBySide, { children: jsxs(CodeGroup, { children: [jsx(CodeGroupItem, {
			label: "Kin Form",
			children: jsx(_components.figure, {
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
										children: ","
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#1A6FB0" },
										children: " Watch"
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
										children: " required"
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
										children: "@kintools/form-validators"
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
										children: " LoginValues"
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
										children: " email"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3D6F94" },
										children: ":"
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
										children: " LoginForm"
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
										children: "<LoginValues>({"
									})
								]
							}),
							"\n",
							jsxs(_components.span, {
								"data-line": "",
								children: [
									jsx(_components.span, {
										style: { "--shiki-light": "#1A6FB0" },
										children: "    initialValue"
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
										children: " login"
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
										children: "      {"
									}),
									jsx(_components.span, {
										style: {
											"--shiki-light": "#A83A1C",
											"--shiki-light-font-style": "italic"
										},
										children: "/* Only re-renders when the email field changes. */"
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
								"data-highlighted-line": "",
								children: [
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "      <"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#0F7D6C" },
										children: "Watch"
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
										children: ","
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: " {"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#1A6FB0" },
										children: " validators"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: ":"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: " required"
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
										children: "Required"
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
										style: { "--shiki-light": "#3C4257" },
										children: " })"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "}>"
									})
								]
							}),
							"\n",
							jsxs(_components.span, {
								"data-line": "",
								children: [
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "        {"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: "("
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "field"
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
										children: " ("
									})
								]
							}),
							"\n",
							jsx(_components.span, {
								"data-line": "",
								children: jsx(_components.span, {
									style: { "--shiki-light": "#16233A" },
									children: "          <>"
								})
							}),
							"\n",
							jsxs(_components.span, {
								"data-line": "",
								children: [jsx(_components.span, {
									style: { "--shiki-light": "#16233A" },
									children: "            <"
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
										children: "              value"
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
										children: "              onChange"
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
									children: "            />"
								})
							}),
							"\n",
							jsxs(_components.span, {
								"data-line": "",
								children: [
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "            {field"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: "."
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "error "
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3D6F94" },
										children: "&&"
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
										children: ">{field"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: "."
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "error}</"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#0F7D6C" },
										children: "span"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: ">}"
									})
								]
							}),
							"\n",
							jsx(_components.span, {
								"data-line": "",
								children: jsx(_components.span, {
									style: { "--shiki-light": "#16233A" },
									children: "          </>"
								})
							}),
							"\n",
							jsxs(_components.span, {
								"data-line": "",
								children: [jsx(_components.span, {
									style: { "--shiki-light": "#3C4257" },
									children: "        )"
								}), jsx(_components.span, {
									style: { "--shiki-light": "#16233A" },
									children: "}"
								})]
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
										children: "Watch"
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
								children: " "
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
										children: "button"
									}),
									jsx(_components.span, {
										style: {
											"--shiki-light": "#3D6F94",
											"--shiki-light-font-style": "italic"
										},
										children: " type"
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
										children: "submit"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: "\""
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: ">Log in</"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#0F7D6C" },
										children: "button"
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
			})
		}), jsx(CodeGroupItem, {
			label: "React Hook Form",
			children: jsx(_components.figure, {
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
										children: "react-hook-form"
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
										children: " LoginValues"
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
										children: " email"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3D6F94" },
										children: ":"
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
										children: " LoginForm"
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
								children: [jsx(_components.span, {
									style: { "--shiki-light": "#3D6F94" },
									children: "  const"
								}), jsx(_components.span, {
									style: { "--shiki-light": "#3C4257" },
									children: " {"
								})]
							}),
							"\n",
							jsxs(_components.span, {
								"data-line": "",
								children: [jsx(_components.span, {
									style: { "--shiki-light": "#16233A" },
									children: "    register"
								}), jsx(_components.span, {
									style: { "--shiki-light": "#3C4257" },
									children: ","
								})]
							}),
							"\n",
							jsxs(_components.span, {
								"data-line": "",
								children: [jsx(_components.span, {
									style: { "--shiki-light": "#16233A" },
									children: "    handleSubmit"
								}), jsx(_components.span, {
									style: { "--shiki-light": "#3C4257" },
									children: ","
								})]
							}),
							"\n",
							jsx(_components.span, {
								"data-line": "",
								children: jsx(_components.span, {
									style: {
										"--shiki-light": "#A83A1C",
										"--shiki-light-font-style": "italic"
									},
									children: "    // Form-wide, not scoped to email — re-renders on any field's state change."
								})
							}),
							"\n",
							jsxs(_components.span, {
								"data-line": "",
								children: [
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: "    formState: { "
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "errors"
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
										style: { "--shiki-light": "#3C4257" },
										children: "  } "
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3D6F94" },
										children: "="
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: " useForm"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: "<LoginValues>({"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#1A6FB0" },
										children: " defaultValues"
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
										children: " }"
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
										children: "{handleSubmit"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: "("
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "login"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: ")"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "}>"
									})
								]
							}),
							"\n",
							jsxs(_components.span, {
								"data-line": "",
								"data-highlighted-line": "",
								children: [
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "      <"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#0F7D6C" },
										children: "input"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: " {"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3D6F94" },
										children: "..."
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "register"
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
										children: ","
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: " {"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#1A6FB0" },
										children: " required"
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
										children: "Required"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: "\""
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: " })"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "} />"
									})
								]
							}),
							"\n",
							jsxs(_components.span, {
								"data-line": "",
								children: [
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "      {errors"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: "."
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "email "
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3D6F94" },
										children: "&&"
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
										children: ">{errors"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: "."
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "email"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: "."
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "message}</"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#0F7D6C" },
										children: "span"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: ">}"
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
										children: "      <"
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
										children: " type"
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
										children: "submit"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: "\""
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: ">Log in</"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#0F7D6C" },
										children: "button"
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
			})
		})] }) }),
		"\n",
		jsx(_components.p, { children: jsx(_components.strong, { children: "What's different:" }) }),
		"\n",
		jsxs(_components.table, { children: [jsx(_components.thead, { children: jsxs(_components.tr, { children: [
			jsx(_components.th, {}),
			jsx(_components.th, { children: "Kin Form" }),
			jsx(_components.th, { children: "React Hook Form" })
		] }) }), jsxs(_components.tbody, { children: [jsxs(_components.tr, { children: [
			jsx(_components.td, { children: "Binding model" }),
			jsxs(_components.td, { children: [
				"Controlled everywhere (",
				jsx(_components.code, { children: "value" }),
				"/",
				jsx(_components.code, { children: "handleChange" }),
				")"
			] }),
			jsxs(_components.td, { children: [
				"Uncontrolled (",
				jsx(_components.code, { children: "register" }),
				" + ref) by default"
			] })
		] }), jsxs(_components.tr, { children: [
			jsx(_components.td, { children: "One-off native input" }),
			jsxs(_components.td, { children: [jsx(_components.code, { children: "<Watch>" }), " render prop — more ceremony inline"] }),
			jsxs(_components.td, { children: [jsx(_components.code, { children: "{...register(name)}" }), " — one line"] })
		] })] })] }),
		"\n",
		jsxs(_components.p, { children: [
			"For a handful of native inputs each used once, ",
			jsx(_components.code, { children: "register" }),
			" genuinely produces\nless code. Kin Form's bet is the opposite: build the field components once\n(",
			jsx(_components.code, { children: "TextField" }),
			", ",
			jsx(_components.code, { children: "AddressField" }),
			", ",
			jsx(_components.code, { children: "SubmitButton" }),
			"; see\n",
			jsx(_components.a, {
				href: "#form-composition",
				children: "Form composition"
			}),
			" below), and every call site collapses to\none line too, typed against that form's value shape. That pays off fast across\nmany forms or a shared field library; for a single one-off form, ",
			jsx(_components.code, { children: "<Watch>" }),
			"\ninline is the right call."
		] }),
		"\n",
		jsxs(_components.p, { children: [
			"This is the only section using a bare ",
			jsx(_components.code, { children: "<input>" }),
			"/",
			jsx(_components.code, { children: "register" }),
			", since wrapping one\nin ",
			jsx(_components.code, { children: "Controller" }),
			" just to force it controlled wouldn't prove anything. Everywhere\nelse, both sides bind to a controlled ",
			jsx(_components.code, { children: "<TextInput>" }),
			" component, so\n",
			jsx(_components.code, { children: "Controller" }),
			"/",
			jsx(_components.code, { children: "useController" }),
			" only shows up where it's actually earning its keep."
		] }),
		"\n",
		jsxs(_components.h3, {
			id: "non-native-input",
			children: [jsx(_components.a, {
				className: "header-anchor",
				"aria-label": "Permalink to \"Non-native input\"",
				href: "#non-native-input",
				children: jsx(_components.span, {
					"aria-hidden": "true",
					children: "#"
				})
			}), "Non-native input"]
		}),
		"\n",
		jsx(SideBySide, { children: jsxs(CodeGroup, { children: [jsx(CodeGroupItem, {
			label: "Kin Form",
			children: jsx(_components.figure, {
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
										children: ","
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#1A6FB0" },
										children: " Watch"
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
										children: " required"
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
										children: "@kintools/form-validators"
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
										children: " ProfileValues"
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
										children: " country"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3D6F94" },
										children: ":"
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
										children: " ProfileForm"
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
										children: "<ProfileValues>({"
									})
								]
							}),
							"\n",
							jsxs(_components.span, {
								"data-line": "",
								children: [
									jsx(_components.span, {
										style: { "--shiki-light": "#1A6FB0" },
										children: "    initialValue"
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
										children: " country"
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
										children: " save"
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
								"data-highlighted-line": "",
								children: [
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "      <"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#0F7D6C" },
										children: "Watch"
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
										children: "country"
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
										children: " {"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#1A6FB0" },
										children: " validators"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: ":"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: " required"
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
										children: "Required"
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
										style: { "--shiki-light": "#3C4257" },
										children: " })"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "}>"
									})
								]
							}),
							"\n",
							jsxs(_components.span, {
								"data-line": "",
								children: [
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "        {"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: "("
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "field"
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
										children: " ("
									})
								]
							}),
							"\n",
							jsx(_components.span, {
								"data-line": "",
								children: jsx(_components.span, {
									style: { "--shiki-light": "#16233A" },
									children: "          <>"
								})
							}),
							"\n",
							jsxs(_components.span, {
								"data-line": "",
								children: [
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "            <"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#0F7D6C" },
										children: "CountrySelect"
									}),
									jsx(_components.span, {
										style: {
											"--shiki-light": "#3D6F94",
											"--shiki-light-font-style": "italic"
										},
										children: " value"
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
										children: "value} "
									}),
									jsx(_components.span, {
										style: {
											"--shiki-light": "#3D6F94",
											"--shiki-light-font-style": "italic"
										},
										children: "onChange"
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
										children: "handleChange} />"
									})
								]
							}),
							"\n",
							jsxs(_components.span, {
								"data-line": "",
								children: [
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "            {field"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: "."
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "error "
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3D6F94" },
										children: "&&"
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
										children: ">{field"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: "."
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "error}</"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#0F7D6C" },
										children: "span"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: ">}"
									})
								]
							}),
							"\n",
							jsx(_components.span, {
								"data-line": "",
								children: jsx(_components.span, {
									style: { "--shiki-light": "#16233A" },
									children: "          </>"
								})
							}),
							"\n",
							jsxs(_components.span, {
								"data-line": "",
								children: [jsx(_components.span, {
									style: { "--shiki-light": "#3C4257" },
									children: "        )"
								}), jsx(_components.span, {
									style: { "--shiki-light": "#16233A" },
									children: "}"
								})]
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
										children: "Watch"
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
								children: " "
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
										children: "button"
									}),
									jsx(_components.span, {
										style: {
											"--shiki-light": "#3D6F94",
											"--shiki-light-font-style": "italic"
										},
										children: " type"
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
										children: "submit"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: "\""
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: ">Save</"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#0F7D6C" },
										children: "button"
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
			})
		}), jsx(CodeGroupItem, {
			label: "React Hook Form",
			children: jsx(_components.figure, {
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
										children: " Controller"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: ","
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
										children: "react-hook-form"
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
										children: " ProfileValues"
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
										children: " country"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3D6F94" },
										children: ":"
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
										children: " ProfileForm"
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
										children: "control"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: ", "
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "handleSubmit"
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
										children: " useForm"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: "<ProfileValues>({"
									})
								]
							}),
							"\n",
							jsxs(_components.span, {
								"data-line": "",
								children: [
									jsx(_components.span, {
										style: { "--shiki-light": "#1A6FB0" },
										children: "    defaultValues"
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
										children: " country"
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
										children: " },"
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
										children: "{handleSubmit"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: "("
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "save"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: ")"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "}>"
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
									children: "Controller"
								})]
							}),
							"\n",
							jsxs(_components.span, {
								"data-line": "",
								"data-highlighted-line": "",
								children: [
									jsx(_components.span, {
										style: {
											"--shiki-light": "#3D6F94",
											"--shiki-light-font-style": "italic"
										},
										children: "        control"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3D6F94" },
										children: "="
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "{control}"
									})
								]
							}),
							"\n",
							jsxs(_components.span, {
								"data-line": "",
								"data-highlighted-line": "",
								children: [
									jsx(_components.span, {
										style: {
											"--shiki-light": "#3D6F94",
											"--shiki-light-font-style": "italic"
										},
										children: "        name"
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
										children: "country"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: "\""
									})
								]
							}),
							"\n",
							jsxs(_components.span, {
								"data-line": "",
								"data-highlighted-line": "",
								children: [
									jsx(_components.span, {
										style: {
											"--shiki-light": "#3D6F94",
											"--shiki-light-font-style": "italic"
										},
										children: "        rules"
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
										children: "{"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#1A6FB0" },
										children: " required"
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
										children: "Required"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: "\""
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: " }"
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
										style: {
											"--shiki-light": "#3D6F94",
											"--shiki-light-font-style": "italic"
										},
										children: "        render"
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
										children: "({"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: " field"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: ","
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: " fieldState "
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: "})"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3D6F94" },
										children: " =>"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: " ("
									})
								]
							}),
							"\n",
							jsx(_components.span, {
								"data-line": "",
								children: jsx(_components.span, {
									style: { "--shiki-light": "#16233A" },
									children: "          <>"
								})
							}),
							"\n",
							jsxs(_components.span, {
								"data-line": "",
								children: [
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "            <"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#0F7D6C" },
										children: "CountrySelect"
									}),
									jsx(_components.span, {
										style: {
											"--shiki-light": "#3D6F94",
											"--shiki-light-font-style": "italic"
										},
										children: " value"
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
										children: "value} "
									}),
									jsx(_components.span, {
										style: {
											"--shiki-light": "#3D6F94",
											"--shiki-light-font-style": "italic"
										},
										children: "onChange"
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
										children: "onChange} />"
									})
								]
							}),
							"\n",
							jsxs(_components.span, {
								"data-line": "",
								children: [
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "            {fieldState"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: "."
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "error "
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3D6F94" },
										children: "&&"
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
										children: ">{fieldState"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: "."
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "error"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: "."
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "message}</"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#0F7D6C" },
										children: "span"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: ">}"
									})
								]
							}),
							"\n",
							jsx(_components.span, {
								"data-line": "",
								children: jsx(_components.span, {
									style: { "--shiki-light": "#16233A" },
									children: "          </>"
								})
							}),
							"\n",
							jsxs(_components.span, {
								"data-line": "",
								children: [jsx(_components.span, {
									style: { "--shiki-light": "#3C4257" },
									children: "        )"
								}), jsx(_components.span, {
									style: { "--shiki-light": "#16233A" },
									children: "}"
								})]
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
										children: "      <"
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
										children: " type"
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
										children: "submit"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: "\""
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: ">Save</"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#0F7D6C" },
										children: "button"
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
			})
		})] }) }),
		"\n",
		jsx(_components.p, { children: jsx(_components.strong, { children: "What's different:" }) }),
		"\n",
		jsxs(_components.table, { children: [jsx(_components.thead, { children: jsxs(_components.tr, { children: [
			jsx(_components.th, {}),
			jsx(_components.th, { children: "Kin Form" }),
			jsx(_components.th, { children: "React Hook Form" })
		] }) }), jsx(_components.tbody, { children: jsxs(_components.tr, { children: [
			jsx(_components.td, { children: "Non-native inputs" }),
			jsxs(_components.td, { children: [
				"Same ",
				jsx(_components.code, { children: "Watch" }),
				" as any other field"
			] }),
			jsxs(_components.td, { children: [
				"Needs ",
				jsx(_components.code, { children: "Controller" }),
				" — a second primitive"
			] })
		] }) })] }),
		"\n",
		jsxs(_components.p, { children: [
			"Nested groups and arrays are ",
			jsx(_components.code, { children: "FieldApi" }),
			" nodes too, not a separate hook or a\nspecial case — see ",
			jsx(_components.a, {
				href: "#array-field",
				children: "Array field"
			}),
			" and\n",
			jsx(_components.a, {
				href: "#nested-group-field",
				children: "Nested group field"
			}),
			" under\n",
			jsx(_components.a, {
				href: "#form-composition",
				children: "Form composition"
			}),
			" below for the full comparison, shown as\nreusable components rather than inlined in one form."
		] }),
		"\n",
		jsxs(_components.h2, {
			id: "per-node-validation-when-it-runs-and-debouncing",
			children: [jsx(_components.a, {
				className: "header-anchor",
				"aria-label": "Permalink to \"Per-node validation: when it runs, and debouncing\"",
				href: "#per-node-validation-when-it-runs-and-debouncing",
				children: jsx(_components.span, {
					"aria-hidden": "true",
					children: "#"
				})
			}), "Per-node validation: when it runs, and debouncing"]
		}),
		"\n",
		jsx(SideBySide, { children: jsxs(CodeGroup, { children: [jsx(CodeGroupItem, {
			label: "Kin Form",
			children: jsx(_components.figure, {
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
										children: ","
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#1A6FB0" },
										children: " Watch"
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
										children: " SignupForm"
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
										children: "<{ username"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3D6F94" },
										children: ":"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: " string }>({"
									})
								]
							}),
							"\n",
							jsxs(_components.span, {
								"data-line": "",
								children: [
									jsx(_components.span, {
										style: { "--shiki-light": "#1A6FB0" },
										children: "    initialValue"
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
										children: " username"
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
										children: " },"
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
								children: [jsx(_components.span, {
									style: { "--shiki-light": "#16233A" },
									children: "    <"
								}), jsx(_components.span, {
									style: { "--shiki-light": "#0F7D6C" },
									children: "Watch"
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
										children: "      api"
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
										children: "username"
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
										children: "        asyncValidator"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: ":"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#0F7D6C" },
										children: " async"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: " ("
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "field"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: ")"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3D6F94" },
										children: " =>"
									})
								]
							}),
							"\n",
							jsxs(_components.span, {
								"data-line": "",
								children: [
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: "          ("
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#0F7D6C" },
										children: "await"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: " checkUsernameTaken"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: "("
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
										children: "value"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: "))"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3D6F94" },
										children: " ?"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: " \""
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#9A5B13" },
										children: "Username taken"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: "\""
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3D6F94" },
										children: " :"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#B23370" },
										children: " null"
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
								"data-highlighted-line": "",
								children: [
									jsx(_components.span, {
										style: { "--shiki-light": "#1A6FB0" },
										children: "        validationDebounceMs"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: ":"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#9A5B13" },
										children: " 300"
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
									style: { "--shiki-light": "#3C4257" },
									children: "      })"
								}), jsx(_components.span, {
									style: { "--shiki-light": "#16233A" },
									children: "}"
								})]
							}),
							"\n",
							jsx(_components.span, {
								"data-line": "",
								children: jsx(_components.span, {
									style: { "--shiki-light": "#16233A" },
									children: "    >"
								})
							}),
							"\n",
							jsxs(_components.span, {
								"data-line": "",
								children: [
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "      {"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: "("
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "field"
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
										children: " ("
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
										children: "TextInput"
									}),
									jsx(_components.span, {
										style: {
											"--shiki-light": "#3D6F94",
											"--shiki-light-font-style": "italic"
										},
										children: " value"
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
										children: "value} "
									}),
									jsx(_components.span, {
										style: {
											"--shiki-light": "#3D6F94",
											"--shiki-light-font-style": "italic"
										},
										children: "onChange"
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
										children: "handleChange} />"
									})
								]
							}),
							"\n",
							jsxs(_components.span, {
								"data-line": "",
								children: [jsx(_components.span, {
									style: { "--shiki-light": "#3C4257" },
									children: "      )"
								}), jsx(_components.span, {
									style: { "--shiki-light": "#16233A" },
									children: "}"
								})]
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
										children: "Watch"
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
			})
		}), jsx(CodeGroupItem, {
			label: "React Hook Form",
			children: jsx(_components.figure, {
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
										children: " Controller"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: ","
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
										children: "react-hook-form"
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
										children: " useMemo"
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
										children: "react"
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
										style: { "--shiki-light": "#1A6FB0" },
										children: "debounce"
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
										children: "lodash/debounce"
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
										children: " SignupForm"
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
										children: "control"
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
										children: " useForm"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: "<{ username"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3D6F94" },
										children: ":"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: " string }>({"
									})
								]
							}),
							"\n",
							jsxs(_components.span, {
								"data-line": "",
								children: [
									jsx(_components.span, {
										style: { "--shiki-light": "#1A6FB0" },
										children: "    mode"
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
										children: "onChange"
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
										style: {
											"--shiki-light": "#A83A1C",
											"--shiki-light-font-style": "italic"
										},
										children: " // form-wide — every field revalidates on every change"
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
							jsx(_components.span, {
								"data-line": "",
								"data-highlighted-line": "",
								children: jsx(_components.span, {
									style: {
										"--shiki-light": "#A83A1C",
										"--shiki-light-font-style": "italic"
									},
									children: "  // Hand-rolled."
								})
							}),
							"\n",
							jsxs(_components.span, {
								"data-line": "",
								"data-highlighted-line": "",
								children: [
									jsx(_components.span, {
										style: { "--shiki-light": "#3D6F94" },
										children: "  const"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: " debouncedCheck"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3D6F94" },
										children: " ="
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: " useMemo"
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
								"data-highlighted-line": "",
								children: [jsx(_components.span, {
									style: { "--shiki-light": "#3C4257" },
									children: "    () "
								}), jsx(_components.span, {
									style: { "--shiki-light": "#3D6F94" },
									children: "=>"
								})]
							}),
							"\n",
							jsxs(_components.span, {
								"data-line": "",
								"data-highlighted-line": "",
								children: [
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "      debounce"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: "("
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#0F7D6C" },
										children: "async"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: " ("
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "value"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3D6F94" },
										children: ":"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: " string) "
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
								"data-highlighted-line": "",
								children: [
									jsx(_components.span, {
										style: { "--shiki-light": "#0F7D6C" },
										children: "        return"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#0F7D6C" },
										children: " await"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: " checkUsernameTaken"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: "("
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "value"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: ") "
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3D6F94" },
										children: "?"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: " \""
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#9A5B13" },
										children: "Username taken"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: "\""
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3D6F94" },
										children: " :"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#9A5B13" },
										children: " true"
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
								"data-highlighted-line": "",
								children: [
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: "      }, "
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#9A5B13" },
										children: "300"
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
								"data-highlighted-line": "",
								children: jsx(_components.span, {
									style: { "--shiki-light": "#3C4257" },
									children: "    [],"
								})
							}),
							"\n",
							jsx(_components.span, {
								"data-line": "",
								"data-highlighted-line": "",
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
								children: [jsx(_components.span, {
									style: { "--shiki-light": "#16233A" },
									children: "    <"
								}), jsx(_components.span, {
									style: { "--shiki-light": "#0F7D6C" },
									children: "Controller"
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
										children: "      control"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3D6F94" },
										children: "="
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "{control}"
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
										children: "      name"
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
										children: "username"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: "\""
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
										children: "      rules"
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
										children: "{"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#1A6FB0" },
										children: " validate"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: ":"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: " debouncedCheck"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: " }"
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
										style: {
											"--shiki-light": "#3D6F94",
											"--shiki-light-font-style": "italic"
										},
										children: "      render"
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
										children: "({"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: " field "
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: "})"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3D6F94" },
										children: " =>"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: " ("
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
										children: "TextInput"
									}),
									jsx(_components.span, {
										style: {
											"--shiki-light": "#3D6F94",
											"--shiki-light-font-style": "italic"
										},
										children: " value"
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
										children: "value} "
									}),
									jsx(_components.span, {
										style: {
											"--shiki-light": "#3D6F94",
											"--shiki-light-font-style": "italic"
										},
										children: "onChange"
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
										children: "onChange} />"
									})
								]
							}),
							"\n",
							jsxs(_components.span, {
								"data-line": "",
								children: [jsx(_components.span, {
									style: { "--shiki-light": "#3C4257" },
									children: "      )"
								}), jsx(_components.span, {
									style: { "--shiki-light": "#16233A" },
									children: "}"
								})]
							}),
							"\n",
							jsx(_components.span, {
								"data-line": "",
								children: jsx(_components.span, {
									style: { "--shiki-light": "#16233A" },
									children: "    />"
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
								children: jsx(_components.span, {
									style: { "--shiki-light": "#3C4257" },
									children: "}"
								})
							})
						]
					})
				})
			})
		})] }) }),
		"\n",
		jsx(_components.p, { children: jsx(_components.strong, { children: "What's different:" }) }),
		"\n",
		jsxs(_components.table, { children: [jsx(_components.thead, { children: jsxs(_components.tr, { children: [
			jsx(_components.th, {}),
			jsx(_components.th, { children: "Kin Form" }),
			jsx(_components.th, { children: "React Hook Form" })
		] }) }), jsxs(_components.tbody, { children: [
			jsxs(_components.tr, { children: [
				jsx(_components.td, { children: "When validation runs" }),
				jsxs(_components.td, { children: [
					jsx(_components.code, { children: "validators" }),
					" run synchronously on every value change; ",
					jsx(_components.code, { children: "asyncValidator" }),
					" debounced"
				] }),
				jsxs(_components.td, { children: [
					"Form-wide ",
					jsx(_components.code, { children: "mode" }),
					"/",
					jsx(_components.code, { children: "reValidateMode" }),
					" setting"
				] })
			] }),
			jsxs(_components.tr, { children: [
				jsx(_components.td, { children: "Debouncing" }),
				jsxs(_components.td, { children: [
					jsx(_components.code, { children: "validationDebounceMs" }),
					" — applies to ",
					jsx(_components.code, { children: "asyncValidator" }),
					" only"
				] }),
				jsxs(_components.td, { children: [
					"Hand-rolled inside ",
					jsx(_components.code, { children: "validate" }),
					" (no built-in option)"
				] })
			] }),
			jsxs(_components.tr, { children: [
				jsx(_components.td, { children: "Rule composition" }),
				jsxs(_components.td, { children: [
					"Array of ",
					jsx(_components.code, { children: "validators" }),
					", checked in order, first truthy wins"
				] }),
				jsxs(_components.td, { children: [
					"Multiple rules for one field via ",
					jsx(_components.code, { children: "register" }),
					" options"
				] })
			] })
		] })] }),
		"\n",
		jsxs(_components.h2, {
			id: "schema-validation",
			children: [jsx(_components.a, {
				className: "header-anchor",
				"aria-label": "Permalink to \"Schema validation\"",
				href: "#schema-validation",
				children: jsx(_components.span, {
					"aria-hidden": "true",
					children: "#"
				})
			}), "Schema validation"]
		}),
		"\n",
		jsx(_components.p, { children: "Both need a thin adapter from a separate package to plug a schema in:" }),
		"\n",
		jsxs(_components.ul, { children: [
			"\n",
			jsxs(_components.li, { children: [
				"Kin Form: ",
				jsx(_components.code, { children: "toSchemaValidator()" }),
				" from ",
				jsx(_components.code, { children: "@kintools/form-validators" })
			] }),
			"\n",
			jsxs(_components.li, { children: [
				"React Hook Form: ",
				jsx(_components.code, { children: "standardSchemaResolver" }),
				" from ",
				jsx(_components.code, { children: "@hookform/resolvers" })
			] }),
			"\n"
		] }),
		"\n",
		jsx(_components.p, { children: "Both adapters can be used with any Standard Schema library: zod, valibot, ..." }),
		"\n",
		jsx(SideBySide, { children: jsxs(CodeGroup, { children: [jsx(CodeGroupItem, {
			label: "Kin Form",
			children: jsx(_components.figure, {
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
										children: ","
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#1A6FB0" },
										children: " Watch"
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
										children: " required"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: ","
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#1A6FB0" },
										children: " toSchemaValidator"
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
										children: "@kintools/form-validators"
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
										children: " z"
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
										children: "zod"
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
										children: " signupSchema"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3D6F94" },
										children: " ="
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: " z"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: "."
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "object"
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
										children: "  email"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: ":"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: " z"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: "."
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "email"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: "(),"
									})
								]
							}),
							"\n",
							jsxs(_components.span, {
								"data-line": "",
								children: [
									jsx(_components.span, {
										style: { "--shiki-light": "#1A6FB0" },
										children: "  password"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: ":"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: " z"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: "."
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "string"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: "()."
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "min"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: "("
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#9A5B13" },
										children: "8"
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
									children: "});"
								})
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
										children: " Signup"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3D6F94" },
										children: " ="
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: " z.infer<"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3D6F94" },
										children: "typeof"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: " signupSchema"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: ">;"
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
										children: " SignupForm"
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
										children: "<Signup>({"
									})
								]
							}),
							"\n",
							jsxs(_components.span, {
								"data-line": "",
								children: [
									jsx(_components.span, {
										style: { "--shiki-light": "#1A6FB0" },
										children: "    initialValue"
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
										children: " password"
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
										children: "    schemaValidator"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: ":"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: " toSchemaValidator"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: "("
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "signupSchema"
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
										children: "Watch"
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
										children: ","
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: " {"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#1A6FB0" },
										children: " validators"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: ":"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: " required"
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
										children: "Required"
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
										style: { "--shiki-light": "#3C4257" },
										children: " })"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "}>"
									})
								]
							}),
							"\n",
							jsxs(_components.span, {
								"data-line": "",
								children: [
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "      {"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: "("
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "field"
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
							jsx(_components.span, {
								"data-line": "",
								"data-highlighted-line": "",
								children: jsx(_components.span, {
									style: {
										"--shiki-light": "#A83A1C",
										"--shiki-light-font-style": "italic"
									},
									children: "        // Both channels are live at once, not one overriding the other."
								})
							}),
							"\n",
							jsxs(_components.span, {
								"data-line": "",
								"data-highlighted-line": "",
								children: [
									jsx(_components.span, {
										style: { "--shiki-light": "#3D6F94" },
										children: "        const"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: " error "
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3D6F94" },
										children: "="
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
										children: "error "
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3D6F94" },
										children: "??"
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
										children: "schemaError"
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
								children: [jsx(_components.span, {
									style: { "--shiki-light": "#0F7D6C" },
									children: "        return"
								}), jsx(_components.span, {
									style: { "--shiki-light": "#3C4257" },
									children: " ("
								})]
							}),
							"\n",
							jsx(_components.span, {
								"data-line": "",
								children: jsx(_components.span, {
									style: { "--shiki-light": "#16233A" },
									children: "          <>"
								})
							}),
							"\n",
							jsxs(_components.span, {
								"data-line": "",
								children: [
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "            <"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#0F7D6C" },
										children: "TextInput"
									}),
									jsx(_components.span, {
										style: {
											"--shiki-light": "#3D6F94",
											"--shiki-light-font-style": "italic"
										},
										children: " value"
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
										children: "value} "
									}),
									jsx(_components.span, {
										style: {
											"--shiki-light": "#3D6F94",
											"--shiki-light-font-style": "italic"
										},
										children: "onChange"
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
										children: "handleChange} />"
									})
								]
							}),
							"\n",
							jsxs(_components.span, {
								"data-line": "",
								children: [
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "            {error "
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3D6F94" },
										children: "&&"
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
										children: ">{error}</"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#0F7D6C" },
										children: "span"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: ">}"
									})
								]
							}),
							"\n",
							jsx(_components.span, {
								"data-line": "",
								children: jsx(_components.span, {
									style: { "--shiki-light": "#16233A" },
									children: "          </>"
								})
							}),
							"\n",
							jsx(_components.span, {
								"data-line": "",
								children: jsx(_components.span, {
									style: { "--shiki-light": "#3C4257" },
									children: "        );"
								})
							}),
							"\n",
							jsxs(_components.span, {
								"data-line": "",
								children: [jsx(_components.span, {
									style: { "--shiki-light": "#3C4257" },
									children: "      }"
								}), jsx(_components.span, {
									style: { "--shiki-light": "#16233A" },
									children: "}"
								})]
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
										children: "Watch"
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
			})
		}), jsx(CodeGroupItem, {
			label: "React Hook Form",
			children: jsx(_components.figure, {
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
										children: " Controller"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: ","
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
										children: "react-hook-form"
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
										children: " standardSchemaResolver"
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
										children: "@hookform/resolvers/standard-schema"
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
										children: " z"
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
										children: "zod"
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
										children: " signupSchema"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3D6F94" },
										children: " ="
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: " z"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: "."
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "object"
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
										children: "  email"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: ":"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: " z"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: "."
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "email"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: "(),"
									})
								]
							}),
							"\n",
							jsxs(_components.span, {
								"data-line": "",
								children: [
									jsx(_components.span, {
										style: { "--shiki-light": "#1A6FB0" },
										children: "  password"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: ":"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: " z"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: "."
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "string"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: "()."
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "min"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: "("
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#9A5B13" },
										children: "8"
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
									children: "});"
								})
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
										children: " Signup"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3D6F94" },
										children: " ="
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: " z.infer<"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3D6F94" },
										children: "typeof"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: " signupSchema"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: ">;"
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
										children: " SignupForm"
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
										children: "control"
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
										children: " useForm"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: "<Signup>({"
									})
								]
							}),
							"\n",
							jsxs(_components.span, {
								"data-line": "",
								children: [
									jsx(_components.span, {
										style: { "--shiki-light": "#1A6FB0" },
										children: "    defaultValues"
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
										children: " password"
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
										children: "    resolver"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: ":"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: " standardSchemaResolver"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: "("
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "signupSchema"
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
								children: [jsx(_components.span, {
									style: { "--shiki-light": "#16233A" },
									children: "    <"
								}), jsx(_components.span, {
									style: { "--shiki-light": "#0F7D6C" },
									children: "Controller"
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
										children: "      control"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3D6F94" },
										children: "="
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "{control}"
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
										children: "      name"
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
										children: "email"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: "\""
									})
								]
							}),
							"\n",
							jsx(_components.span, {
								"data-line": "",
								"data-highlighted-line": "",
								children: jsx(_components.span, {
									style: {
										"--shiki-light": "#A83A1C",
										"--shiki-light-font-style": "italic"
									},
									children: "      // A `rules.validate` passed here would silently never run — the"
								})
							}),
							"\n",
							jsx(_components.span, {
								"data-line": "",
								"data-highlighted-line": "",
								children: jsx(_components.span, {
									style: {
										"--shiki-light": "#A83A1C",
										"--shiki-light-font-style": "italic"
									},
									children: "      // resolver has taken over."
								})
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
										children: "      render"
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
										children: "({"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: " field"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: ","
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: " fieldState "
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: "})"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3D6F94" },
										children: " =>"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: " ("
									})
								]
							}),
							"\n",
							jsx(_components.span, {
								"data-line": "",
								children: jsx(_components.span, {
									style: { "--shiki-light": "#16233A" },
									children: "        <>"
								})
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
										children: "TextInput"
									}),
									jsx(_components.span, {
										style: {
											"--shiki-light": "#3D6F94",
											"--shiki-light-font-style": "italic"
										},
										children: " value"
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
										children: "value} "
									}),
									jsx(_components.span, {
										style: {
											"--shiki-light": "#3D6F94",
											"--shiki-light-font-style": "italic"
										},
										children: "onChange"
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
										children: "onChange} />"
									})
								]
							}),
							"\n",
							jsxs(_components.span, {
								"data-line": "",
								children: [
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "          {fieldState"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: "."
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "error "
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3D6F94" },
										children: "&&"
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
										children: ">{fieldState"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: "."
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "error"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: "."
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "message}</"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#0F7D6C" },
										children: "span"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: ">}"
									})
								]
							}),
							"\n",
							jsx(_components.span, {
								"data-line": "",
								children: jsx(_components.span, {
									style: { "--shiki-light": "#16233A" },
									children: "        </>"
								})
							}),
							"\n",
							jsxs(_components.span, {
								"data-line": "",
								children: [jsx(_components.span, {
									style: { "--shiki-light": "#3C4257" },
									children: "      )"
								}), jsx(_components.span, {
									style: { "--shiki-light": "#16233A" },
									children: "}"
								})]
							}),
							"\n",
							jsx(_components.span, {
								"data-line": "",
								children: jsx(_components.span, {
									style: { "--shiki-light": "#16233A" },
									children: "    />"
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
								children: jsx(_components.span, {
									style: { "--shiki-light": "#3C4257" },
									children: "}"
								})
							})
						]
					})
				})
			})
		})] }) }),
		"\n",
		jsx(_components.p, { children: jsx(_components.strong, { children: "What's different:" }) }),
		"\n",
		jsxs(_components.table, { children: [jsx(_components.thead, { children: jsxs(_components.tr, { children: [
			jsx(_components.th, {}),
			jsx(_components.th, { children: "Kin Form" }),
			jsx(_components.th, { children: "React Hook Form" })
		] }) }), jsxs(_components.tbody, { children: [
			jsxs(_components.tr, { children: [
				jsx(_components.td, { children: "Schema scope" }),
				jsxs(_components.td, { children: ["Any node — field, group, or the whole form — can have its own ", jsx(_components.code, { children: "schemaValidator" })] }),
				jsxs(_components.td, { children: [
					"One ",
					jsx(_components.code, { children: "resolver" }),
					", for the whole form"
				] })
			] }),
			jsxs(_components.tr, { children: [
				jsx(_components.td, { children: "Per-field rules once wired up" }),
				jsxs(_components.td, { children: [
					jsx(_components.code, { children: "schemaValidator" }),
					" runs ",
					jsx(_components.em, { children: "alongside" }),
					" per-field ",
					jsx(_components.code, { children: "validators" }),
					", not instead of them"
				] }),
				jsxs(_components.td, { children: [
					jsx(_components.code, { children: "resolver" }),
					" replaces ",
					jsx(_components.code, { children: "register" }),
					"'s own rules for the fields it covers — ",
					jsx(_components.code, { children: "required" }),
					"/",
					jsx(_components.code, { children: "pattern" }),
					"/",
					jsx(_components.code, { children: "validate" }),
					" stop running"
				] })
			] }),
			jsxs(_components.tr, { children: [
				jsx(_components.td, { children: "Where schema issues land" }),
				jsxs(_components.td, { children: [
					"A field's own ",
					jsx(_components.code, { children: "schemaError" }),
					", kept separate from ",
					jsx(_components.code, { children: "error" }),
					" — the field decides how to combine them (",
					jsx(_components.code, { children: "field.error ?? field.schemaError" }),
					")"
				] }),
				jsxs(_components.td, { children: [
					"Same ",
					jsx(_components.code, { children: "errors" }),
					" as per-field rules — schema output replaces them, so there's nothing to combine"
				] })
			] })
		] })] }),
		"\n",
		jsxs(_components.h2, {
			id: "cross-field-validation",
			children: [jsx(_components.a, {
				className: "header-anchor",
				"aria-label": "Permalink to \"Cross-field validation\"",
				href: "#cross-field-validation",
				children: jsx(_components.span, {
					"aria-hidden": "true",
					children: "#"
				})
			}), "Cross-field validation"]
		}),
		"\n",
		jsx(_components.p, { children: "Both support it, but from opposite ends of the relationship, and with different\namounts of wiring." }),
		"\n",
		jsx(SideBySide, { children: jsxs(CodeGroup, { children: [jsx(CodeGroupItem, {
			label: "Kin Form",
			children: jsx(_components.figure, {
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
										children: " SignupForm"
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
										children: "<Signup>({"
									})
								]
							}),
							"\n",
							jsxs(_components.span, {
								"data-line": "",
								children: [
									jsx(_components.span, {
										style: { "--shiki-light": "#1A6FB0" },
										children: "    initialValue"
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
										children: " password"
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
										children: " confirmPassword"
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
										children: " },"
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
							jsx(_components.span, {
								"data-line": "",
								children: jsx(_components.span, {
									style: { "--shiki-light": "#16233A" },
									children: "    <>"
								})
							}),
							"\n",
							jsxs(_components.span, {
								"data-line": "",
								"data-highlighted-line": "",
								children: [
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "      <"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#0F7D6C" },
										children: "Watch"
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
										children: "password"
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
										children: " {"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#1A6FB0" },
										children: " dependents"
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
										style: { "--shiki-light": "#3C4257" },
										children: "\""
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#9A5B13" },
										children: "confirmPassword"
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
										children: " })"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "}>"
									})
								]
							}),
							"\n",
							jsxs(_components.span, {
								"data-line": "",
								children: [
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "        {"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: "("
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "field"
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
										children: " ("
									})
								]
							}),
							"\n",
							jsxs(_components.span, {
								"data-line": "",
								children: [jsx(_components.span, {
									style: { "--shiki-light": "#16233A" },
									children: "          <"
								}), jsx(_components.span, {
									style: { "--shiki-light": "#0F7D6C" },
									children: "TextInput"
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
										children: "            type"
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
										children: "password"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: "\""
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
										children: "            value"
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
										children: "            onChange"
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
										children: "handleChange}"
									})
								]
							}),
							"\n",
							jsx(_components.span, {
								"data-line": "",
								children: jsx(_components.span, {
									style: { "--shiki-light": "#16233A" },
									children: "          />"
								})
							}),
							"\n",
							jsxs(_components.span, {
								"data-line": "",
								children: [jsx(_components.span, {
									style: { "--shiki-light": "#3C4257" },
									children: "        )"
								}), jsx(_components.span, {
									style: { "--shiki-light": "#16233A" },
									children: "}"
								})]
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
										children: "Watch"
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
								children: " "
							}),
							"\n",
							jsxs(_components.span, {
								"data-line": "",
								children: [jsx(_components.span, {
									style: { "--shiki-light": "#16233A" },
									children: "      <"
								}), jsx(_components.span, {
									style: { "--shiki-light": "#0F7D6C" },
									children: "Watch"
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
										children: "        api"
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
										children: "confirmPassword"
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
										children: " {"
									})
								]
							}),
							"\n",
							jsxs(_components.span, {
								"data-line": "",
								"data-highlighted-line": "",
								children: [
									jsx(_components.span, {
										style: { "--shiki-light": "#1A6FB0" },
										children: "          validators"
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
										children: "field"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: ")"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3D6F94" },
										children: " =>"
									})
								]
							}),
							"\n",
							jsxs(_components.span, {
								"data-line": "",
								"data-highlighted-line": "",
								children: [
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "            field"
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
										style: { "--shiki-light": "#3D6F94" },
										children: " !=="
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: " form"
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
										children: "."
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "password"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3D6F94" },
										children: " ?"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: " \""
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#9A5B13" },
										children: "Passwords must match"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: "\""
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3D6F94" },
										children: " :"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#B23370" },
										children: " null"
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
								"data-highlighted-line": "",
								children: [jsx(_components.span, {
									style: { "--shiki-light": "#3C4257" },
									children: "        })"
								}), jsx(_components.span, {
									style: { "--shiki-light": "#16233A" },
									children: "}"
								})]
							}),
							"\n",
							jsx(_components.span, {
								"data-line": "",
								children: jsx(_components.span, {
									style: { "--shiki-light": "#16233A" },
									children: "      >"
								})
							}),
							"\n",
							jsxs(_components.span, {
								"data-line": "",
								children: [
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "        {"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: "("
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "field"
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
										children: " ("
									})
								]
							}),
							"\n",
							jsx(_components.span, {
								"data-line": "",
								children: jsx(_components.span, {
									style: { "--shiki-light": "#16233A" },
									children: "          <>"
								})
							}),
							"\n",
							jsxs(_components.span, {
								"data-line": "",
								children: [jsx(_components.span, {
									style: { "--shiki-light": "#16233A" },
									children: "            <"
								}), jsx(_components.span, {
									style: { "--shiki-light": "#0F7D6C" },
									children: "TextInput"
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
										children: "              type"
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
										children: "password"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: "\""
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
										children: "              value"
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
										children: "              onChange"
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
										children: "handleChange}"
									})
								]
							}),
							"\n",
							jsx(_components.span, {
								"data-line": "",
								children: jsx(_components.span, {
									style: { "--shiki-light": "#16233A" },
									children: "            />"
								})
							}),
							"\n",
							jsxs(_components.span, {
								"data-line": "",
								children: [
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "            {field"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: "."
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "error "
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3D6F94" },
										children: "&&"
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
										children: ">{field"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: "."
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "error}</"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#0F7D6C" },
										children: "span"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: ">}"
									})
								]
							}),
							"\n",
							jsx(_components.span, {
								"data-line": "",
								children: jsx(_components.span, {
									style: { "--shiki-light": "#16233A" },
									children: "          </>"
								})
							}),
							"\n",
							jsxs(_components.span, {
								"data-line": "",
								children: [jsx(_components.span, {
									style: { "--shiki-light": "#3C4257" },
									children: "        )"
								}), jsx(_components.span, {
									style: { "--shiki-light": "#16233A" },
									children: "}"
								})]
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
										children: "Watch"
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
									children: "    </>"
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
								children: jsx(_components.span, {
									style: { "--shiki-light": "#3C4257" },
									children: "}"
								})
							})
						]
					})
				})
			})
		}), jsx(CodeGroupItem, {
			label: "React Hook Form",
			children: jsx(_components.figure, {
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
										children: " SignupForm"
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
										children: "control"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: ", "
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "trigger"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: ", "
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "getValues"
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
										children: " useForm"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: "<Signup>({"
									})
								]
							}),
							"\n",
							jsxs(_components.span, {
								"data-line": "",
								children: [
									jsx(_components.span, {
										style: { "--shiki-light": "#1A6FB0" },
										children: "    defaultValues"
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
										children: " password"
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
										children: " confirmPassword"
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
										children: " },"
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
							jsx(_components.span, {
								"data-line": "",
								children: jsx(_components.span, {
									style: { "--shiki-light": "#16233A" },
									children: "    <>"
								})
							}),
							"\n",
							jsxs(_components.span, {
								"data-line": "",
								children: [jsx(_components.span, {
									style: { "--shiki-light": "#16233A" },
									children: "      <"
								}), jsx(_components.span, {
									style: { "--shiki-light": "#0F7D6C" },
									children: "Controller"
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
										children: "        control"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3D6F94" },
										children: "="
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "{control}"
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
										children: "        name"
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
										children: "password"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: "\""
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
										children: "        render"
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
										children: "({"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: " field "
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: "})"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3D6F94" },
										children: " =>"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: " ("
									})
								]
							}),
							"\n",
							jsxs(_components.span, {
								"data-line": "",
								children: [jsx(_components.span, {
									style: { "--shiki-light": "#16233A" },
									children: "          <"
								}), jsx(_components.span, {
									style: { "--shiki-light": "#0F7D6C" },
									children: "TextInput"
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
										children: "            type"
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
										children: "password"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: "\""
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
										children: "            value"
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
										children: "            onChange"
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
										children: "value"
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
										children: "              field"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: "."
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "onChange"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: "("
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "value"
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
								"data-highlighted-line": "",
								children: jsx(_components.span, {
									style: {
										"--shiki-light": "#A83A1C",
										"--shiki-light-font-style": "italic"
									},
									children: "              // Manual trigger."
								})
							}),
							"\n",
							jsxs(_components.span, {
								"data-line": "",
								"data-highlighted-line": "",
								children: [
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "              trigger"
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
										children: "confirmPassword"
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
								children: [jsx(_components.span, {
									style: { "--shiki-light": "#3C4257" },
									children: "            }"
								}), jsx(_components.span, {
									style: { "--shiki-light": "#16233A" },
									children: "}"
								})]
							}),
							"\n",
							jsx(_components.span, {
								"data-line": "",
								children: jsx(_components.span, {
									style: { "--shiki-light": "#16233A" },
									children: "          />"
								})
							}),
							"\n",
							jsxs(_components.span, {
								"data-line": "",
								children: [jsx(_components.span, {
									style: { "--shiki-light": "#3C4257" },
									children: "        )"
								}), jsx(_components.span, {
									style: { "--shiki-light": "#16233A" },
									children: "}"
								})]
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
							jsx(_components.span, {
								"data-line": "",
								children: " "
							}),
							"\n",
							jsxs(_components.span, {
								"data-line": "",
								children: [jsx(_components.span, {
									style: { "--shiki-light": "#16233A" },
									children: "      <"
								}), jsx(_components.span, {
									style: { "--shiki-light": "#0F7D6C" },
									children: "Controller"
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
										children: "        control"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3D6F94" },
										children: "="
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "{control}"
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
										children: "        name"
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
										children: "confirmPassword"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: "\""
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
										children: "        rules"
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
										children: "{"
									})
								]
							}),
							"\n",
							jsxs(_components.span, {
								"data-line": "",
								"data-highlighted-line": "",
								children: [
									jsx(_components.span, {
										style: { "--shiki-light": "#1A6FB0" },
										children: "          validate"
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
										children: "value"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: ")"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3D6F94" },
										children: " =>"
									})
								]
							}),
							"\n",
							jsxs(_components.span, {
								"data-line": "",
								"data-highlighted-line": "",
								children: [
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "            value"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3D6F94" },
										children: " ==="
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: " getValues"
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
										children: "password"
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
										style: { "--shiki-light": "#3D6F94" },
										children: " ||"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: " \""
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#9A5B13" },
										children: "Passwords must match"
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
									style: { "--shiki-light": "#3C4257" },
									children: "        }"
								}), jsx(_components.span, {
									style: { "--shiki-light": "#16233A" },
									children: "}"
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
										children: "        render"
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
										children: "({"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: " field"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: ","
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: " fieldState "
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: "})"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3D6F94" },
										children: " =>"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: " ("
									})
								]
							}),
							"\n",
							jsx(_components.span, {
								"data-line": "",
								children: jsx(_components.span, {
									style: { "--shiki-light": "#16233A" },
									children: "          <>"
								})
							}),
							"\n",
							jsxs(_components.span, {
								"data-line": "",
								children: [jsx(_components.span, {
									style: { "--shiki-light": "#16233A" },
									children: "            <"
								}), jsx(_components.span, {
									style: { "--shiki-light": "#0F7D6C" },
									children: "TextInput"
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
										children: "              type"
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
										children: "password"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: "\""
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
										children: "              value"
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
										children: "              onChange"
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
										children: "onChange}"
									})
								]
							}),
							"\n",
							jsx(_components.span, {
								"data-line": "",
								children: jsx(_components.span, {
									style: { "--shiki-light": "#16233A" },
									children: "            />"
								})
							}),
							"\n",
							jsxs(_components.span, {
								"data-line": "",
								children: [
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "            {fieldState"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: "."
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "error "
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3D6F94" },
										children: "&&"
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
										children: ">{fieldState"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: "."
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "error"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: "."
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "message}</"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#0F7D6C" },
										children: "span"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: ">}"
									})
								]
							}),
							"\n",
							jsx(_components.span, {
								"data-line": "",
								children: jsx(_components.span, {
									style: { "--shiki-light": "#16233A" },
									children: "          </>"
								})
							}),
							"\n",
							jsxs(_components.span, {
								"data-line": "",
								children: [jsx(_components.span, {
									style: { "--shiki-light": "#3C4257" },
									children: "        )"
								}), jsx(_components.span, {
									style: { "--shiki-light": "#16233A" },
									children: "}"
								})]
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
							jsx(_components.span, {
								"data-line": "",
								children: jsx(_components.span, {
									style: { "--shiki-light": "#16233A" },
									children: "    </>"
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
								children: jsx(_components.span, {
									style: { "--shiki-light": "#3C4257" },
									children: "}"
								})
							})
						]
					})
				})
			})
		})] }) }),
		"\n",
		jsx(_components.p, { children: jsx(_components.strong, { children: "What's different:" }) }),
		"\n",
		jsxs(_components.table, { children: [jsx(_components.thead, { children: jsxs(_components.tr, { children: [
			jsx(_components.th, {}),
			jsx(_components.th, { children: "Kin Form" }),
			jsx(_components.th, { children: "React Hook Form" })
		] }) }), jsxs(_components.tbody, { children: [
			jsxs(_components.tr, { children: [
				jsx(_components.td, { children: "Where it's declared" }),
				jsxs(_components.td, { children: [
					"Declarative on the source field (",
					jsx(_components.code, { children: "dependents" }),
					" list)"
				] }),
				jsxs(_components.td, { children: [
					"Manual ",
					jsx(_components.code, { children: "trigger()" }),
					" call on the source field"
				] })
			] }),
			jsxs(_components.tr, { children: [
				jsx(_components.td, { children: "Wiring" }),
				jsxs(_components.td, { children: [
					"Nothing extra — ",
					jsx(_components.code, { children: "dependents" }),
					" handles the refire"
				] }),
				jsxs(_components.td, { children: [
					jsx(_components.code, { children: "getValues()" }),
					" in ",
					jsx(_components.code, { children: "validate" }),
					" to read the other value, ",
					jsx(_components.code, { children: "trigger()" }),
					" from the source field's ",
					jsx(_components.code, { children: "onChange" }),
					" to refire"
				] })
			] }),
			jsxs(_components.tr, { children: [
				jsx(_components.td, { children: "Multiple dependents" }),
				jsxs(_components.td, { children: [
					"One ",
					jsx(_components.code, { children: "dependents" }),
					" array covers all of them"
				] }),
				jsxs(_components.td, { children: [
					"One ",
					jsx(_components.code, { children: "trigger()" }),
					" call per dependent field, by hand"
				] })
			] })
		] })] }),
		"\n",
		jsxs(_components.h2, {
			id: "dirty-tracking--reset",
			children: [jsx(_components.a, {
				className: "header-anchor",
				"aria-label": "Permalink to \"Dirty tracking & reset\"",
				href: "#dirty-tracking--reset",
				children: jsx(_components.span, {
					"aria-hidden": "true",
					children: "#"
				})
			}), "Dirty tracking & reset"]
		}),
		"\n",
		jsx(_components.p, { children: "Both track dirtiness at both levels (whole form and per field), but differently." }),
		"\n",
		jsx(SideBySide, { children: jsxs(CodeGroup, { children: [jsx(CodeGroupItem, {
			label: "Kin Form",
			children: jsx(_components.figure, {
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
										children: " ProfileForm"
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
									})
								]
							}),
							"\n",
							jsxs(_components.span, {
								"data-line": "",
								children: [
									jsx(_components.span, {
										style: { "--shiki-light": "#1A6FB0" },
										children: "    initialValue"
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
										children: " firstName"
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
										children: " lastName"
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
										children: " save"
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
										children: "Watch"
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
										children: "}>"
									})
								]
							}),
							"\n",
							jsxs(_components.span, {
								"data-line": "",
								children: [
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "        {"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: "("
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "field"
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
										children: " ("
									})
								]
							}),
							"\n",
							jsx(_components.span, {
								"data-line": "",
								children: jsx(_components.span, {
									style: { "--shiki-light": "#16233A" },
									children: "          <>"
								})
							}),
							"\n",
							jsxs(_components.span, {
								"data-line": "",
								children: [
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "            <"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#0F7D6C" },
										children: "TextInput"
									}),
									jsx(_components.span, {
										style: {
											"--shiki-light": "#3D6F94",
											"--shiki-light-font-style": "italic"
										},
										children: " value"
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
										children: "value} "
									}),
									jsx(_components.span, {
										style: {
											"--shiki-light": "#3D6F94",
											"--shiki-light-font-style": "italic"
										},
										children: "onChange"
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
										children: "handleChange} />"
									})
								]
							}),
							"\n",
							jsxs(_components.span, {
								"data-line": "",
								children: [
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "            {"
									}),
									jsx(_components.span, {
										style: {
											"--shiki-light": "#A83A1C",
											"--shiki-light-font-style": "italic"
										},
										children: "/* Field level dirty */"
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
								"data-highlighted-line": "",
								children: [
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "            {field"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: "."
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "dirty "
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3D6F94" },
										children: "&&"
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
										children: ">Edited</"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#0F7D6C" },
										children: "span"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: ">}"
									})
								]
							}),
							"\n",
							jsx(_components.span, {
								"data-line": "",
								children: jsx(_components.span, {
									style: { "--shiki-light": "#16233A" },
									children: "          </>"
								})
							}),
							"\n",
							jsxs(_components.span, {
								"data-line": "",
								children: [jsx(_components.span, {
									style: { "--shiki-light": "#3C4257" },
									children: "        )"
								}), jsx(_components.span, {
									style: { "--shiki-light": "#16233A" },
									children: "}"
								})]
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
										children: "Watch"
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
								children: " "
							}),
							"\n",
							jsxs(_components.span, {
								"data-line": "",
								children: [
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "      {"
									}),
									jsx(_components.span, {
										style: {
											"--shiki-light": "#A83A1C",
											"--shiki-light-font-style": "italic"
										},
										children: "/* Form level dirty */"
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
								"data-highlighted-line": "",
								children: [
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "      <"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#0F7D6C" },
										children: "Watch"
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
										children: "{form} "
									}),
									jsx(_components.span, {
										style: {
											"--shiki-light": "#3D6F94",
											"--shiki-light-font-style": "italic"
										},
										children: "select"
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
										children: "f"
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
										children: " f"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: "."
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "dirty}>"
									})
								]
							}),
							"\n",
							jsxs(_components.span, {
								"data-line": "",
								children: [
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "        {"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: "("
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "f"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: ","
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: " dirty"
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
										children: " ("
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
										children: "button"
									}),
									jsx(_components.span, {
										style: {
											"--shiki-light": "#3D6F94",
											"--shiki-light-font-style": "italic"
										},
										children: " disabled"
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
										style: { "--shiki-light": "#3D6F94" },
										children: "!"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "dirty} "
									}),
									jsx(_components.span, {
										style: {
											"--shiki-light": "#3D6F94",
											"--shiki-light-font-style": "italic"
										},
										children: "onClick"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3D6F94" },
										children: "="
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "{f"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: "."
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "reset}>"
									})
								]
							}),
							"\n",
							jsx(_components.span, {
								"data-line": "",
								children: jsx(_components.span, {
									style: { "--shiki-light": "#16233A" },
									children: "            Discard changes"
								})
							}),
							"\n",
							jsxs(_components.span, {
								"data-line": "",
								children: [
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "          </"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#0F7D6C" },
										children: "button"
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
									style: { "--shiki-light": "#3C4257" },
									children: "        )"
								}), jsx(_components.span, {
									style: { "--shiki-light": "#16233A" },
									children: "}"
								})]
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
										children: "Watch"
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
			})
		}), jsx(CodeGroupItem, {
			label: "React Hook Form",
			children: jsx(_components.figure, {
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
										children: " ProfileForm"
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
								children: [jsx(_components.span, {
									style: { "--shiki-light": "#3D6F94" },
									children: "  const"
								}), jsx(_components.span, {
									style: { "--shiki-light": "#3C4257" },
									children: " {"
								})]
							}),
							"\n",
							jsxs(_components.span, {
								"data-line": "",
								children: [jsx(_components.span, {
									style: { "--shiki-light": "#16233A" },
									children: "    control"
								}), jsx(_components.span, {
									style: { "--shiki-light": "#3C4257" },
									children: ","
								})]
							}),
							"\n",
							jsxs(_components.span, {
								"data-line": "",
								children: [jsx(_components.span, {
									style: { "--shiki-light": "#16233A" },
									children: "    handleSubmit"
								}), jsx(_components.span, {
									style: { "--shiki-light": "#3C4257" },
									children: ","
								})]
							}),
							"\n",
							jsxs(_components.span, {
								"data-line": "",
								children: [jsx(_components.span, {
									style: { "--shiki-light": "#16233A" },
									children: "    reset"
								}), jsx(_components.span, {
									style: { "--shiki-light": "#3C4257" },
									children: ","
								})]
							}),
							"\n",
							jsxs(_components.span, {
								"data-line": "",
								"data-highlighted-line": "",
								children: [
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: "    formState: { "
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "isDirty"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: ", "
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "dirtyFields"
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
										style: { "--shiki-light": "#3C4257" },
										children: "  } "
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3D6F94" },
										children: "="
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
								children: [
									jsx(_components.span, {
										style: { "--shiki-light": "#1A6FB0" },
										children: "    defaultValues"
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
										children: " firstName"
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
										children: " lastName"
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
										children: " },"
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
										children: "{handleSubmit"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: "("
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "save"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: ")"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "}>"
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
									children: "Controller"
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
										children: "        control"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3D6F94" },
										children: "="
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "{control}"
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
										children: "        name"
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
										children: "firstName"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: "\""
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
										children: "        render"
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
										children: "({"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: " field "
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: "})"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3D6F94" },
										children: " =>"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: " ("
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
										children: "TextInput"
									}),
									jsx(_components.span, {
										style: {
											"--shiki-light": "#3D6F94",
											"--shiki-light-font-style": "italic"
										},
										children: " value"
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
										children: "value} "
									}),
									jsx(_components.span, {
										style: {
											"--shiki-light": "#3D6F94",
											"--shiki-light-font-style": "italic"
										},
										children: "onChange"
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
										children: "onChange} />"
									})
								]
							}),
							"\n",
							jsxs(_components.span, {
								"data-line": "",
								children: [jsx(_components.span, {
									style: { "--shiki-light": "#3C4257" },
									children: "        )"
								}), jsx(_components.span, {
									style: { "--shiki-light": "#16233A" },
									children: "}"
								})]
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
							jsx(_components.span, {
								"data-line": "",
								children: jsx(_components.span, {
									style: { "--shiki-light": "#16233A" },
									children: "      {"
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
									children: "        /* Looks scoped to firstName, but the subscription (established when"
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
									children: "          dirtyFields was pulled off formState above) is to the whole object:"
								})
							}),
							"\n",
							jsx(_components.span, {
								"data-line": "",
								"data-highlighted-line": "",
								children: jsx(_components.span, {
									style: {
										"--shiki-light": "#A83A1C",
										"--shiki-light-font-style": "italic"
									},
									children: "          this re-renders when ANY field becomes dirty, not just firstName. */"
								})
							}),
							"\n",
							jsx(_components.span, {
								"data-line": "",
								children: jsx(_components.span, {
									style: { "--shiki-light": "#16233A" },
									children: "      }"
								})
							}),
							"\n",
							jsxs(_components.span, {
								"data-line": "",
								"data-highlighted-line": "",
								children: [
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "      {dirtyFields"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: "."
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "firstName "
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3D6F94" },
										children: "&&"
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
										children: ">Edited</"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#0F7D6C" },
										children: "span"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: ">}"
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
										children: "      <"
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
										children: " disabled"
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
										style: { "--shiki-light": "#3D6F94" },
										children: "!"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "isDirty} "
									}),
									jsx(_components.span, {
										style: {
											"--shiki-light": "#3D6F94",
											"--shiki-light-font-style": "italic"
										},
										children: "onClick"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3D6F94" },
										children: "="
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "{reset}>"
									})
								]
							}),
							"\n",
							jsx(_components.span, {
								"data-line": "",
								children: jsx(_components.span, {
									style: { "--shiki-light": "#16233A" },
									children: "        Discard changes"
								})
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
										children: "button"
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
			})
		})] }) }),
		"\n",
		jsx(_components.p, { children: jsx(_components.strong, { children: "What's different:" }) }),
		"\n",
		jsxs(_components.table, { children: [jsx(_components.thead, { children: jsxs(_components.tr, { children: [
			jsx(_components.th, {}),
			jsx(_components.th, { children: "Kin Form" }),
			jsx(_components.th, { children: "React Hook Form" })
		] }) }), jsxs(_components.tbody, { children: [
			jsxs(_components.tr, { children: [
				jsx(_components.td, { children: "Whole-form dirty" }),
				jsx(_components.td, { children: jsx(_components.code, { children: "form.dirty" }) }),
				jsx(_components.td, { children: jsx(_components.code, { children: "formState.isDirty" }) })
			] }),
			jsxs(_components.tr, { children: [
				jsx(_components.td, { children: "Per-field dirty" }),
				jsxs(_components.td, { children: [
					jsx(_components.code, { children: "field.dirty" }),
					" inside a ",
					jsx(_components.code, { children: "Watch" }),
					"/",
					jsx(_components.code, { children: "useWatch" }),
					" scoped to that field — the subscription unit is the field itself, not which property you read"
				] }),
				jsxs(_components.td, { children: [
					jsx(_components.code, { children: "formState.dirtyFields" }),
					" — reading ",
					jsx(_components.code, { children: ".firstName" }),
					" still subscribes to the whole object, so any field becoming dirty re-renders this component"
				] })
			] }),
			jsxs(_components.tr, { children: [
				jsx(_components.td, { children: "Reset" }),
				jsxs(_components.td, { children: [jsx(_components.code, { children: "form.reset(value?)" }), " — moves the baseline too"] }),
				jsx(_components.td, { children: jsx(_components.code, { children: "reset(values?, keepStateOptions)" }) })
			] }),
			jsxs(_components.tr, { children: [
				jsx(_components.td, { children: "Reset one field" }),
				jsxs(_components.td, { children: [jsx(_components.code, { children: "form.resetField(name, value?)" }), " — same idea"] }),
				jsx(_components.td, { children: jsx(_components.code, { children: "resetField(name, options?)" }) })
			] })
		] })] }),
		"\n",
		jsxs(_components.h2, {
			id: "submission-handling",
			children: [jsx(_components.a, {
				className: "header-anchor",
				"aria-label": "Permalink to \"Submission handling\"",
				href: "#submission-handling",
				children: jsx(_components.span, {
					"aria-hidden": "true",
					children: "#"
				})
			}), "Submission handling"]
		}),
		"\n",
		jsx(_components.p, { children: "Both separate \"the form failed validation\" from \"submission itself succeeded,\"\nbut only one also separates \"submission itself failed.\"" }),
		"\n",
		jsx(SideBySide, { children: jsxs(CodeGroup, { children: [jsx(CodeGroupItem, {
			label: "Kin Form",
			children: jsx(_components.figure, {
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
										children: "<Signup>({"
									})
								]
							}),
							"\n",
							jsxs(_components.span, {
								"data-line": "",
								children: [
									jsx(_components.span, {
										style: { "--shiki-light": "#1A6FB0" },
										children: "  initialValue"
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
										children: " password"
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
										children: "  onSubmit"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: ":"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#0F7D6C" },
										children: " async"
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
										style: { "--shiki-light": "#0F7D6C" },
										children: "    await"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: " signUp"
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
										children: ");"
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
								"data-highlighted-line": "",
								children: [
									jsx(_components.span, {
										style: { "--shiki-light": "#1A6FB0" },
										children: "  onSubmitInvalid"
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
										style: { "--shiki-light": "#3C4257" },
										children: " {"
									})
								]
							}),
							"\n",
							jsxs(_components.span, {
								"data-line": "",
								"data-highlighted-line": "",
								children: [
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "    form"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: "."
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "touched"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3D6F94" },
										children: " ="
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#9A5B13" },
										children: " true"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: ";"
									}),
									jsx(_components.span, {
										style: {
											"--shiki-light": "#A83A1C",
											"--shiki-light-font-style": "italic"
										},
										children: " // reveal errors on never-blurred fields"
									})
								]
							}),
							"\n",
							jsx(_components.span, {
								"data-line": "",
								"data-highlighted-line": "",
								children: jsx(_components.span, {
									style: { "--shiki-light": "#3C4257" },
									children: "  },"
								})
							}),
							"\n",
							jsxs(_components.span, {
								"data-line": "",
								"data-highlighted-line": "",
								children: [
									jsx(_components.span, {
										style: { "--shiki-light": "#1A6FB0" },
										children: "  onSubmitError"
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
										children: ","
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: " error"
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
								"data-highlighted-line": "",
								children: [
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "    toast"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: "."
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "error"
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
										children: "Sign up failed"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: "\""
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: ");"
									}),
									jsx(_components.span, {
										style: {
											"--shiki-light": "#A83A1C",
											"--shiki-light-font-style": "italic"
										},
										children: " // called automatically, no wrapper needed"
									})
								]
							}),
							"\n",
							jsx(_components.span, {
								"data-line": "",
								"data-highlighted-line": "",
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
							jsx(_components.span, {
								"data-line": "",
								children: jsx(_components.span, {
									style: {
										"--shiki-light": "#A83A1C",
										"--shiki-light-font-style": "italic"
									},
									children: "// handleSubmit itself calls preventDefault when given an event."
								})
							}),
							"\n",
							jsxs(_components.span, {
								"data-line": "",
								children: [
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "<"
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
							})
						]
					})
				})
			})
		}), jsx(CodeGroupItem, {
			label: "React Hook Form",
			children: jsx(_components.figure, {
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
										style: { "--shiki-light": "#3C4257" },
										children: " { "
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "handleSubmit"
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
										children: " useForm"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: "<Signup>({"
									})
								]
							}),
							"\n",
							jsxs(_components.span, {
								"data-line": "",
								children: [
									jsx(_components.span, {
										style: { "--shiki-light": "#1A6FB0" },
										children: "  defaultValues"
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
										children: " password"
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
										children: " },"
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
							jsxs(_components.span, {
								"data-line": "",
								children: [
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "<"
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
										children: "{handleSubmit"
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
										style: { "--shiki-light": "#0F7D6C" },
										children: "  async"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: " ("
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "values"
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
								children: [jsx(_components.span, {
									style: { "--shiki-light": "#B23370" },
									children: "    try"
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
										style: { "--shiki-light": "#0F7D6C" },
										children: "      await"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: " signUp"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: "("
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "values"
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
								"data-highlighted-line": "",
								children: [
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: "    }"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#B23370" },
										children: " catch"
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
								"data-highlighted-line": "",
								children: jsx(_components.span, {
									style: {
										"--shiki-light": "#A83A1C",
										"--shiki-light-font-style": "italic"
									},
									children: "      // Must be wrapped manually — no dedicated \"submission failed\" callback."
								})
							}),
							"\n",
							jsxs(_components.span, {
								"data-line": "",
								"data-highlighted-line": "",
								children: [
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "      toast"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: "."
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "error"
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
										children: "Sign up failed"
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
								"data-highlighted-line": "",
								children: jsx(_components.span, {
									style: { "--shiki-light": "#3C4257" },
									children: "    }"
								})
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
										style: { "--shiki-light": "#3C4257" },
										children: "  ("
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "errors"
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
							jsx(_components.span, {
								"data-line": "",
								children: jsx(_components.span, {
									style: {
										"--shiki-light": "#A83A1C",
										"--shiki-light-font-style": "italic"
									},
									children: "    // Validation failed."
								})
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
								children: [jsx(_components.span, {
									style: { "--shiki-light": "#3C4257" },
									children: ")"
								}), jsx(_components.span, {
									style: { "--shiki-light": "#16233A" },
									children: "}>"
								})]
							})
						]
					})
				})
			})
		})] }) }),
		"\n",
		jsx(_components.p, { children: jsx(_components.strong, { children: "What's different:" }) }),
		"\n",
		jsxs(_components.table, { children: [jsx(_components.thead, { children: jsxs(_components.tr, { children: [
			jsx(_components.th, {}),
			jsx(_components.th, { children: "Kin Form" }),
			jsx(_components.th, { children: "React Hook Form" })
		] }) }), jsxs(_components.tbody, { children: [
			jsxs(_components.tr, { children: [
				jsx(_components.td, { children: "Validation failed" }),
				jsx(_components.td, { children: jsx(_components.code, { children: "onSubmitInvalid" }) }),
				jsxs(_components.td, { children: [
					jsx(_components.code, { children: "onInvalid" }),
					" callback (2nd arg to ",
					jsx(_components.code, { children: "handleSubmit" }),
					")"
				] })
			] }),
			jsxs(_components.tr, { children: [
				jsxs(_components.td, { children: [jsx(_components.code, { children: "onSubmit" }), " itself throws"] }),
				jsxs(_components.td, { children: [jsx(_components.code, { children: "onSubmitError" }), ", invoked automatically"] }),
				jsx(_components.td, { children: "Rethrown after updating state — no dedicated callback" })
			] }),
			jsxs(_components.tr, { children: [
				jsxs(_components.td, { children: ["Binding to ", jsx(_components.code, { children: "<form>" })] }),
				jsx(_components.td, { children: jsx(_components.code, { children: "onSubmit={form.handleSubmit}" }) }),
				jsx(_components.td, { children: jsx(_components.code, { children: "onSubmit={handleSubmit(onValid, onInvalid)}" }) })
			] }),
			jsxs(_components.tr, { children: [
				jsx(_components.td, { children: "Preventing page reload" }),
				jsxs(_components.td, { children: [
					"Automatic when given an event — ",
					jsx(_components.code, { children: "handleSubmit" }),
					"'s ",
					jsx(_components.code, { children: "event" }),
					" param is optional, so the same call also works from a React Native ",
					jsx(_components.code, { children: "onPress" }),
					" with nothing to pass"
				] }),
				jsxs(_components.td, { children: [
					"Automatic — ",
					jsx(_components.code, { children: "handleSubmit" }),
					" calls it internally"
				] })
			] })
		] })] }),
		"\n",
		jsxs(_components.h2, {
			id: "async-initial-values",
			children: [jsx(_components.a, {
				className: "header-anchor",
				"aria-label": "Permalink to \"Async initial values\"",
				href: "#async-initial-values",
				children: jsx(_components.span, {
					"aria-hidden": "true",
					children: "#"
				})
			}), "Async initial values"]
		}),
		"\n",
		jsx(_components.p, { children: "This is a place React Hook Form is genuinely nicer." }),
		"\n",
		jsx(SideBySide, { children: jsxs(CodeGroup, { children: [jsx(CodeGroupItem, {
			label: "Kin Form",
			children: jsx(_components.figure, {
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
										children: " ProfilePage"
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
										children: "data"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: ", "
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "isLoading"
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
										children: " useQuery"
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
										children: "    queryKey"
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
										style: { "--shiki-light": "#3C4257" },
										children: "\""
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#9A5B13" },
										children: "profile"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: "\""
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: "],"
									})
								]
							}),
							"\n",
							jsxs(_components.span, {
								"data-line": "",
								children: [
									jsx(_components.span, {
										style: { "--shiki-light": "#1A6FB0" },
										children: "    queryFn"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: ":"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: " fetchProfile"
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
								"data-highlighted-line": "",
								children: [
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: "  if ("
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "isLoading"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: ") "
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#0F7D6C" },
										children: "return"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: " <"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#0F7D6C" },
										children: "p"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: ">Loading...</"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#0F7D6C" },
										children: "p"
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
							jsxs(_components.span, {
								"data-line": "",
								"data-highlighted-line": "",
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
										children: "{data} />"
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
										children: " save"
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
										children: "      {"
									}),
									jsx(_components.span, {
										style: {
											"--shiki-light": "#A83A1C",
											"--shiki-light-font-style": "italic"
										},
										children: "/* ... */"
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
			})
		}), jsx(CodeGroupItem, {
			label: "React Hook Form",
			children: jsx(_components.figure, {
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
										children: " ProfilePage"
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
										children: "register"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: ", "
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "handleSubmit"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: ", formState: { "
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "isLoading"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: " } } "
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3D6F94" },
										children: "="
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
								"data-highlighted-line": "",
								children: [
									jsx(_components.span, {
										style: { "--shiki-light": "#1A6FB0" },
										children: "    defaultValues"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: ":"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: " fetchProfile"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: ","
									}),
									jsx(_components.span, {
										style: {
											"--shiki-light": "#A83A1C",
											"--shiki-light-font-style": "italic"
										},
										children: " // resolved automatically"
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
								children: [
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: "  if ("
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "isLoading"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: ") "
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#0F7D6C" },
										children: "return"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: " <"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#0F7D6C" },
										children: "p"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: ">Loading...</"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#0F7D6C" },
										children: "p"
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
										children: "{handleSubmit"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: "("
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "save"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: ")"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "}>"
									})
								]
							}),
							"\n",
							jsxs(_components.span, {
								"data-line": "",
								children: [
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "      {"
									}),
									jsx(_components.span, {
										style: {
											"--shiki-light": "#A83A1C",
											"--shiki-light-font-style": "italic"
										},
										children: "/* ... */"
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
			})
		})] }) }),
		"\n",
		jsx(_components.p, { children: jsx(_components.strong, { children: "What's different:" }) }),
		"\n",
		jsxs(_components.table, { children: [jsx(_components.thead, { children: jsxs(_components.tr, { children: [
			jsx(_components.th, {}),
			jsx(_components.th, { children: "Kin Form" }),
			jsx(_components.th, { children: "React Hook Form" })
		] }) }), jsxs(_components.tbody, { children: [
			jsxs(_components.tr, { children: [
				jsx(_components.td, { children: "Async defaults" }),
				jsxs(_components.td, { children: [jsx(_components.code, { children: "initialValue" }), " is synchronous only, read once at construction"] }),
				jsxs(_components.td, { children: [jsx(_components.code, { children: "defaultValues" }), " accepts an async function, resolved automatically"] })
			] }),
			jsxs(_components.tr, { children: [
				jsx(_components.td, { children: "Loading state" }),
				jsxs(_components.td, { children: [
					"Whatever your data-fetching hook already gives you (e.g. ",
					jsx(_components.code, { children: "useQuery" }),
					"'s ",
					jsx(_components.code, { children: "isLoading" }),
					")"
				] }),
				jsxs(_components.td, { children: [jsx(_components.code, { children: "formState.isLoading" }), ", built in"] })
			] }),
			jsxs(_components.tr, { children: [
				jsx(_components.td, { children: "Populating once loaded" }),
				jsxs(_components.td, { children: [
					jsx(_components.code, { children: "ProfileForm" }),
					" doesn't mount until data arrives — ",
					jsx(_components.code, { children: "initialValue" }),
					" is already the real value"
				] }),
				jsxs(_components.td, { children: [
					"Automatic — same component, ",
					jsx(_components.code, { children: "defaultValues" }),
					" resolves in place"
				] })
			] })
		] })] }),
		"\n",
		jsxs(_components.h2, {
			id: "reactivity--selective-re-rendering",
			children: [jsx(_components.a, {
				className: "header-anchor",
				"aria-label": "Permalink to \"Reactivity & selective re-rendering\"",
				href: "#reactivity--selective-re-rendering",
				children: jsx(_components.span, {
					"aria-hidden": "true",
					children: "#"
				})
			}), "Reactivity & selective re-rendering"]
		}),
		"\n",
		jsxs(_components.p, { children: [
			jsx(_components.strong, { children: "Kin Form" }),
			": ",
			jsx(_components.code, { children: "FieldApi" }),
			" carries its own state (",
			jsx(_components.code, { children: "value" }),
			", ",
			jsx(_components.code, { children: "error" }),
			", ",
			jsx(_components.code, { children: "touched" }),
			",\n",
			jsx(_components.code, { children: "dirty" }),
			", ...) all on the same object, so ",
			jsx(_components.code, { children: "useWatch" }),
			", via ",
			jsx(_components.code, { children: "select" }),
			", subscribes to\nany of it, or several pieces together, in one call."
		] }),
		"\n",
		jsxs(_components.p, { children: [
			jsx(_components.strong, { children: "React Hook Form" }),
			" splits ",
			jsx(_components.em, { children: "value" }),
			" from the rest of a field's state into\nseparate hooks instead: ",
			jsx(_components.code, { children: "useWatch" }),
			" only watches values, so reading a field's\nerror or touched status means also subscribing to ",
			jsx(_components.code, { children: "useFormState" }),
			"."
		] }),
		"\n",
		jsx(SideBySide, { children: jsxs(CodeGroup, { children: [jsx(CodeGroupItem, {
			label: "Kin Form",
			children: jsx(_components.figure, {
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
										style: { "--shiki-light": "#3C4257" },
										children: " type"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#1A6FB0" },
										children: " FieldApi"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: ","
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#1A6FB0" },
										children: " useWatch"
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
										children: " Field"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: "<TParentValue>({ "
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "api"
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
										children: " FieldApi<string, TParentValue> }) {"
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
									children: "  // One hook covers all field state (including value)."
								})
							}),
							"\n",
							jsxs(_components.span, {
								"data-line": "",
								"data-highlighted-line": "",
								children: [
									jsx(_components.span, {
										style: { "--shiki-light": "#3D6F94" },
										children: "  const"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: " ["
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "value"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: ", "
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "error"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: "] "
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3D6F94" },
										children: "="
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: " useWatch"
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
								"data-highlighted-line": "",
								children: [jsx(_components.span, {
									style: { "--shiki-light": "#16233A" },
									children: "    api"
								}), jsx(_components.span, {
									style: { "--shiki-light": "#3C4257" },
									children: ","
								})]
							}),
							"\n",
							jsxs(_components.span, {
								"data-line": "",
								"data-highlighted-line": "",
								children: [
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: "    ("
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "f"
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
										children: " ["
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "f"
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
										children: ", "
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "f"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: "."
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "touched"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3D6F94" },
										children: " ?"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: " f"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: "."
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "error"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3D6F94" },
										children: " :"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#B23370" },
										children: " null"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: "] as "
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#0F7D6C" },
										children: "const"
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
								"data-highlighted-line": "",
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
								children: [
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "      <"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#0F7D6C" },
										children: "input"
									}),
									jsx(_components.span, {
										style: {
											"--shiki-light": "#3D6F94",
											"--shiki-light-font-style": "italic"
										},
										children: " value"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3D6F94" },
										children: "="
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "{value} />"
									})
								]
							}),
							"\n",
							jsxs(_components.span, {
								"data-line": "",
								children: [
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "      {error "
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3D6F94" },
										children: "&&"
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
										children: ">{error}</"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#0F7D6C" },
										children: "span"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: ">}"
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
										children: "label"
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
										style: { "--shiki-light": "#16233A" },
										children: "<"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#0F7D6C" },
										children: "Field"
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
										children: "} />"
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
		}), jsx(CodeGroupItem, {
			label: "React Hook Form",
			children: jsx(_components.figure, {
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
										children: " useFormState"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: ","
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#1A6FB0" },
										children: " useWatch"
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
										children: "react-hook-form"
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
										children: " FieldValues"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: ","
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#1A6FB0" },
										children: " UseControllerProps"
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
										children: "react-hook-form"
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
										children: " Field"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: "<T "
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#0F7D6C" },
										children: "extends"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: " FieldValues>("
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
										children: "control"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: ", "
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "name"
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
										children: " UseControllerProps<T>,"
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
							jsx(_components.span, {
								"data-line": "",
								children: jsx(_components.span, {
									style: {
										"--shiki-light": "#A83A1C",
										"--shiki-light-font-style": "italic"
									},
									children: "  // Value and other field state are two separate subscriptions."
								})
							}),
							"\n",
							jsxs(_components.span, {
								"data-line": "",
								"data-highlighted-line": "",
								children: [
									jsx(_components.span, {
										style: { "--shiki-light": "#3D6F94" },
										children: "  const"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: " value"
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
										children: "({"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: " control"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: ","
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: " name"
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
								"data-highlighted-line": "",
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
										children: "errors"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: ", "
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "touchedFields"
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
										children: " useFormState"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: "({"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: " control"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: ","
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: " name"
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
									children: "  // Casts needed — T is generic, so `name` can't be narrowed to a literal key."
								})
							}),
							"\n",
							jsxs(_components.span, {
								"data-line": "",
								"data-highlighted-line": "",
								children: [
									jsx(_components.span, {
										style: { "--shiki-light": "#3D6F94" },
										children: "  const"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: " touched"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3D6F94" },
										children: " ="
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: " ("
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "touchedFields"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: " as Record<string, boolean>)["
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "name"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: "];"
									})
								]
							}),
							"\n",
							jsxs(_components.span, {
								"data-line": "",
								"data-highlighted-line": "",
								children: [
									jsx(_components.span, {
										style: { "--shiki-light": "#3D6F94" },
										children: "  const"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: " error"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3D6F94" },
										children: " ="
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: " touched"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3D6F94" },
										children: " &&"
									})
								]
							}),
							"\n",
							jsxs(_components.span, {
								"data-line": "",
								"data-highlighted-line": "",
								children: [
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: "    ("
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "errors"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: " as Record<string, { message"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3D6F94" },
										children: "?:"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: " string }>)["
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "name"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: "]?."
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "message"
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
								children: [
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "      <"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#0F7D6C" },
										children: "input"
									}),
									jsx(_components.span, {
										style: {
											"--shiki-light": "#3D6F94",
											"--shiki-light-font-style": "italic"
										},
										children: " value"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3D6F94" },
										children: "="
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "{value} />"
									})
								]
							}),
							"\n",
							jsxs(_components.span, {
								"data-line": "",
								children: [
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "      {error "
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3D6F94" },
										children: "&&"
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
										children: ">{error}</"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#0F7D6C" },
										children: "span"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: ">}"
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
										children: "label"
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
										style: { "--shiki-light": "#16233A" },
										children: "<"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#0F7D6C" },
										children: "Field"
									}),
									jsx(_components.span, {
										style: {
											"--shiki-light": "#3D6F94",
											"--shiki-light-font-style": "italic"
										},
										children: " control"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3D6F94" },
										children: "="
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "{control} "
									}),
									jsx(_components.span, {
										style: {
											"--shiki-light": "#3D6F94",
											"--shiki-light-font-style": "italic"
										},
										children: "name"
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
										children: "email"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: "\""
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
							})
						]
					})
				})
			})
		})] }) }),
		"\n",
		jsx(_components.p, { children: jsx(_components.strong, { children: "What's different:" }) }),
		"\n",
		jsxs(_components.table, { children: [jsx(_components.thead, { children: jsxs(_components.tr, { children: [
			jsx(_components.th, {}),
			jsx(_components.th, { children: "Kin Form" }),
			jsx(_components.th, { children: "React Hook Form" })
		] }) }), jsxs(_components.tbody, { children: [
			jsxs(_components.tr, { children: [
				jsx(_components.td, { children: "Default subscription" }),
				jsxs(_components.td, { children: [jsx(_components.code, { children: "useWatch(api)" }), " — isolated per field/form"] }),
				jsxs(_components.td, { children: [jsx(_components.code, { children: "useWatch({ control, name })" }), " — isolated per value"] })
			] }),
			jsxs(_components.tr, { children: [
				jsx(_components.td, { children: "Deriving a value" }),
				jsxs(_components.td, { children: [
					jsx(_components.code, { children: "select: (f) => ..." }),
					", deduped via ",
					jsx(_components.code, { children: "equal" }),
					" (shallow by default)"
				] }),
				jsxs(_components.td, { children: [jsx(_components.code, { children: "compute: (value) => ..." }), ", deep-equal deduped — transforms the watched value only"] })
			] }),
			jsxs(_components.tr, { children: [
				jsx(_components.td, { children: "Value vs field state" }),
				jsxs(_components.td, { children: [
					"One ",
					jsx(_components.code, { children: "useWatch(api, select)" }),
					" covers both"
				] }),
				jsxs(_components.td, { children: [
					jsx(_components.code, { children: "useWatch" }),
					" + ",
					jsx(_components.code, { children: "useFormState" }),
					" — two separate hooks, combined by hand"
				] })
			] })
		] })] }),
		"\n",
		jsxs(_components.h2, {
			id: "form-composition",
			children: [jsx(_components.a, {
				className: "header-anchor",
				"aria-label": "Permalink to \"Form composition\"",
				href: "#form-composition",
				children: jsx(_components.span, {
					"aria-hidden": "true",
					children: "#"
				})
			}), "Form composition"]
		}),
		"\n",
		jsx(_components.p, { children: "Both let you build a reusable field component (leaf or group/array alike)\ninstead of repeating markup at every call site. The type parameter shape is\nwhere the two diverge:" }),
		"\n",
		jsxs(_components.ul, { children: [
			"\n",
			jsxs(_components.li, { children: [
				jsx(_components.strong, { children: "Kin Form" }),
				": ",
				jsx(_components.code, { children: "FieldApi<TValue, TParentValue = never>" }),
				" decouples a field's own\nvalue type from its parent form's shape, so a component only ever needs to\nknow ",
				jsx(_components.code, { children: "TValue" }),
				" — ",
				jsx(_components.code, { children: "TParentValue" }),
				" stays an opaque pass-through it never inspects."
			] }),
			"\n",
			jsxs(_components.li, { children: [
				jsx(_components.strong, { children: "React Hook Form" }),
				": ",
				jsx(_components.code, { children: "Control<TFieldValues>" }),
				" parameterizes the field by the\n",
				jsx(_components.em, { children: "whole" }),
				" form instead, so a shared component built against it either\nre-parameterizes itself over whatever form it's dropped into (generics leaking\nthrough every reusable component's signature) or drops to loosely-typed props."
			] }),
			"\n"
		] }),
		"\n",
		jsxs(_components.p, { children: [
			"The examples below reuse ",
			jsx(_components.code, { children: "TextField" }),
			"/",
			jsx(_components.code, { children: "AddressField" }),
			" within one form; the same\nsignatures generalize across completely unrelated forms too, with zero per-form\ncoupling."
		] }),
		"\n",
		jsxs(_components.p, { children: [
			"React Hook Form also has an official addon for this gap,\n",
			jsx(_components.a, {
				href: "https://github.com/react-hook-form/lenses",
				children: jsx(_components.code, { children: "@hookform/lenses" })
			}),
			". A\n",
			jsx(_components.code, { children: "Lens<TValue>" }),
			" prop looks like ",
			jsx(_components.code, { children: "FieldApi<TValue, TParentValue>" }),
			" on the surface,\nbut it's another abstraction layer wrapping the same ",
			jsx(_components.code, { children: "register" }),
			"/",
			jsx(_components.code, { children: "useController" }),
			"/\n",
			jsx(_components.code, { children: "useFieldArray" }),
			" underneath, not a change to them. The comparison below is\nagainst core React Hook Form, without this addon."
		] }),
		"\n",
		jsxs(_components.h3, {
			id: "leaf-field",
			children: [jsx(_components.a, {
				className: "header-anchor",
				"aria-label": "Permalink to \"Leaf field\"",
				href: "#leaf-field",
				children: jsx(_components.span, {
					"aria-hidden": "true",
					children: "#"
				})
			}), "Leaf field"]
		}),
		"\n",
		jsx(SideBySide, { children: jsxs(CodeGroup, { children: [jsx(CodeGroupItem, {
			label: "Kin Form",
			children: jsx(_components.figure, {
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
										style: { "--shiki-light": "#3C4257" },
										children: " type"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#1A6FB0" },
										children: " FieldApi"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: ","
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#1A6FB0" },
										children: " useWatch"
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
										children: " TextField"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: "<TParent>("
									})
								]
							}),
							"\n",
							jsxs(_components.span, {
								"data-line": "",
								"data-highlighted-line": "",
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
										children: " FieldApi<string, TParent>; label"
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
										children: "label"
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
									children: "      {label}"
								})
							}),
							"\n",
							jsxs(_components.span, {
								"data-line": "",
								children: [jsx(_components.span, {
									style: { "--shiki-light": "#16233A" },
									children: "      <"
								}), jsx(_components.span, {
									style: { "--shiki-light": "#0F7D6C" },
									children: "TextInput"
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
										children: "{field"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: "."
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "handleChange}"
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
										children: "      {field"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: "."
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "invalid "
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3D6F94" },
										children: "&&"
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
										children: "touched "
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3D6F94" },
										children: "&&"
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
										children: ">{field"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: "."
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "error}</"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#0F7D6C" },
										children: "span"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: ">}"
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
										children: "label"
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
								children: [jsx(_components.span, {
									style: { "--shiki-light": "#16233A" },
									children: "<"
								}), jsx(_components.span, {
									style: { "--shiki-light": "#0F7D6C" },
									children: "TextField"
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
										children: "  api"
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
										children: ","
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: " {"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#1A6FB0" },
										children: " validators"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: ":"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: " required"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: "()"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: " })"
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
										style: {
											"--shiki-light": "#3D6F94",
											"--shiki-light-font-style": "italic"
										},
										children: "  label"
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
									})
								]
							}),
							"\n",
							jsxs(_components.span, {
								"data-line": "",
								children: [jsx(_components.span, {
									style: { "--shiki-light": "#16233A" },
									children: "/>"
								}), jsx(_components.span, {
									style: { "--shiki-light": "#3C4257" },
									children: ";"
								})]
							})
						]
					})
				})
			})
		}), jsx(CodeGroupItem, {
			label: "React Hook Form",
			children: jsx(_components.figure, {
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
										children: " useController"
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
										children: "react-hook-form"
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
									})
								]
							}),
							"\n",
							jsxs(_components.span, {
								"data-line": "",
								children: [jsx(_components.span, {
									style: { "--shiki-light": "#1A6FB0" },
									children: "  FieldPathByValue"
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
									children: "  FieldValues"
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
									children: "  UseControllerProps"
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
										children: "react-hook-form"
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
										children: " TextField"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: "<T "
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#0F7D6C" },
										children: "extends"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: " FieldValues>("
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
										children: "label"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: ", "
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3D6F94" },
										children: "..."
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "controllerProps"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: " }"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3D6F94" },
										children: ":"
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
									children: "    // FieldPathByValue<T, string> — every path whose value is a string."
								})
							}),
							"\n",
							jsxs(_components.span, {
								"data-line": "",
								"data-highlighted-line": "",
								children: [jsx(_components.span, {
									style: { "--shiki-light": "#3D6F94" },
									children: "    &"
								}), jsx(_components.span, {
									style: { "--shiki-light": "#3C4257" },
									children: " UseControllerProps<T, FieldPathByValue<T, string>>"
								})]
							}),
							"\n",
							jsxs(_components.span, {
								"data-line": "",
								children: [
									jsx(_components.span, {
										style: { "--shiki-light": "#3D6F94" },
										children: "    &"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: " { label"
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
										style: { "--shiki-light": "#3C4257" },
										children: " { "
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "field"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: ", "
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "fieldState"
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
										children: " useController"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: "("
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "controllerProps"
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
										children: "label"
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
									children: "      {label}"
								})
							}),
							"\n",
							jsxs(_components.span, {
								"data-line": "",
								children: [jsx(_components.span, {
									style: { "--shiki-light": "#16233A" },
									children: "      <"
								}), jsx(_components.span, {
									style: { "--shiki-light": "#0F7D6C" },
									children: "TextInput"
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
										children: "onBlur}"
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
										children: "{field"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: "."
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "onChange}"
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
										children: "      {fieldState"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: "."
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "invalid "
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3D6F94" },
										children: "&&"
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
										children: ">{fieldState"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: "."
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "error"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: "?."
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "message}</"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#0F7D6C" },
										children: "span"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: ">}"
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
										children: "label"
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
								children: [jsx(_components.span, {
									style: { "--shiki-light": "#16233A" },
									children: "<"
								}), jsx(_components.span, {
									style: { "--shiki-light": "#0F7D6C" },
									children: "TextField"
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
										children: "  control"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3D6F94" },
										children: "="
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "{control}"
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
										children: "  name"
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
										children: "email"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: "\""
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
										children: "  rules"
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
										children: "{"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#1A6FB0" },
										children: " required"
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
										children: "Required"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: "\""
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: " }"
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
										style: {
											"--shiki-light": "#3D6F94",
											"--shiki-light-font-style": "italic"
										},
										children: "  label"
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
									})
								]
							}),
							"\n",
							jsxs(_components.span, {
								"data-line": "",
								children: [jsx(_components.span, {
									style: { "--shiki-light": "#16233A" },
									children: "/>"
								}), jsx(_components.span, {
									style: { "--shiki-light": "#3C4257" },
									children: ";"
								})]
							})
						]
					})
				})
			})
		})] }) }),
		"\n",
		jsx(_components.p, { children: "The shapes end up close in spirit (both return one component reusable across\nevery form), but the type-safety story differs:" }),
		"\n",
		jsx(_components.p, { children: jsx(_components.strong, { children: "What's different:" }) }),
		"\n",
		jsxs(_components.table, { children: [jsx(_components.thead, { children: jsxs(_components.tr, { children: [
			jsx(_components.th, {}),
			jsx(_components.th, { children: "Kin Form" }),
			jsx(_components.th, { children: "React Hook Form" })
		] }) }), jsxs(_components.tbody, { children: [
			jsxs(_components.tr, { children: [
				jsx(_components.td, { children: "Reusable field prop bag" }),
				jsxs(_components.td, { children: [
					"An already-resolved ",
					jsx(_components.code, { children: "api: FieldApi<...>" }),
					", passed in directly"
				] }),
				jsxs(_components.td, { children: [
					jsx(_components.code, { children: "UseControllerProps" }),
					" — ",
					jsx(_components.code, { children: "control" }),
					"+",
					jsx(_components.code, { children: "name" }),
					"+rules"
				] })
			] }),
			jsxs(_components.tr, { children: [
				jsxs(_components.td, { children: ["Type-safety on ", jsx(_components.code, { children: "name" })] }),
				jsxs(_components.td, { children: [
					"Checked once, where ",
					jsx(_components.code, { children: "form.field(name, options)" }),
					" is called — not re-derived inside every component"
				] }),
				jsxs(_components.td, { children: [
					jsx(_components.code, { children: "FieldPath<T>" }),
					" catches a typo'd ",
					jsx(_components.code, { children: "name" }),
					" as a compile error, per call site"
				] })
			] }),
			jsxs(_components.tr, { children: [
				jsx(_components.td, { children: "Type-safety on value" }),
				jsxs(_components.td, { children: [
					jsx(_components.code, { children: "FieldApi<string, TParent>" }),
					" — only a ",
					jsx(_components.code, { children: "string" }),
					"-valued field type-checks, nothing extra needed"
				] }),
				jsxs(_components.td, { children: [
					"Needs ",
					jsx(_components.code, { children: "FieldPathByValue<T, string>" }),
					" in place of ",
					jsx(_components.code, { children: "FieldPath<T>" }),
					" — plain ",
					jsx(_components.code, { children: "FieldPath<T>" }),
					" alone accepts a field of any value type"
				] })
			] }),
			jsxs(_components.tr, { children: [
				jsx(_components.td, { children: "Cross-form reuse" }),
				jsxs(_components.td, { children: [
					"Same component, unmodified, across unrelated forms — ",
					jsx(_components.code, { children: "TParentValue" }),
					" is never inspected"
				] }),
				jsxs(_components.td, { children: [
					"Needs re-parameterizing per form's ",
					jsx(_components.code, { children: "TFieldValues" }),
					", or ",
					jsx(_components.code, { children: "Control<any>" })
				] })
			] })
		] })] }),
		"\n",
		jsxs(_components.h3, {
			id: "nested-group-field",
			children: [jsx(_components.a, {
				className: "header-anchor",
				"aria-label": "Permalink to \"Nested group field\"",
				href: "#nested-group-field",
				children: jsx(_components.span, {
					"aria-hidden": "true",
					children: "#"
				})
			}), "Nested group field"]
		}),
		"\n",
		jsx(_components.p, { children: "A reusable component for a nested object (an address, reused for both shipping\nand billing) instead of an array:" }),
		"\n",
		jsx(SideBySide, { children: jsxs(CodeGroup, { children: [jsx(CodeGroupItem, {
			label: "Kin Form",
			children: jsx(_components.figure, {
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
										style: { "--shiki-light": "#3C4257" },
										children: " type"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#1A6FB0" },
										children: " FieldApi"
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
										children: " Address"
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
										children: " line1"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3D6F94" },
										children: ":"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: " string;"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#1A6FB0" },
										children: " city"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3D6F94" },
										children: ":"
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
										children: " AddressField"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: "<TParentValue>("
									})
								]
							}),
							"\n",
							jsxs(_components.span, {
								"data-line": "",
								"data-highlighted-line": "",
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
										children: " FieldApi<Address, TParentValue> },"
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
										children: "fieldset"
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
										children: "{api"
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
										children: "line1"
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
										children: "Line 1"
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
										children: "{api"
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
										children: "city"
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
										children: "City"
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
										children: "fieldset"
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
										style: { "--shiki-light": "#16233A" },
										children: "<"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#0F7D6C" },
										children: "AddressField"
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
										children: "shipping"
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
										children: "} />"
									})
								]
							}),
							"\n",
							jsxs(_components.span, {
								"data-line": "",
								children: [
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "<"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#0F7D6C" },
										children: "AddressField"
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
										children: "billing"
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
										children: "} />"
									})
								]
							})
						]
					})
				})
			})
		}), jsx(CodeGroupItem, {
			label: "React Hook Form",
			children: jsx(_components.figure, {
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
									children: "  FieldPathByValue"
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
									children: "  FieldValues"
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
									children: "  UseControllerProps"
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
										children: "react-hook-form"
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
										children: " Address"
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
										children: " line1"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3D6F94" },
										children: ":"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: " string;"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#1A6FB0" },
										children: " city"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3D6F94" },
										children: ":"
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
										children: " AddressField"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: "<T "
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#0F7D6C" },
										children: "extends"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: " FieldValues>("
									})
								]
							}),
							"\n",
							jsxs(_components.span, {
								"data-line": "",
								"data-highlighted-line": "",
								children: [
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: "  { "
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "control"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: ", "
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "name"
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
										children: " UseControllerProps<T, FieldPathByValue<T, Address>>,"
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
										children: "fieldset"
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
									children: "TextField"
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
										children: "        control"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3D6F94" },
										children: "="
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "{control}"
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
									children: "        // Cast needed: TypeScript can't prove a concatenated string is"
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
									children: "        // a member of FieldPathByValue<T, string>."
								})
							}),
							"\n",
							jsxs(_components.span, {
								"data-line": "",
								"data-highlighted-line": "",
								children: [
									jsx(_components.span, {
										style: {
											"--shiki-light": "#3D6F94",
											"--shiki-light-font-style": "italic"
										},
										children: "        name"
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
										children: "`${"
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
										children: ".line1"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: "`"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: " as"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: " FieldPathByValue<T,"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: " string>"
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
										style: {
											"--shiki-light": "#3D6F94",
											"--shiki-light-font-style": "italic"
										},
										children: "        label"
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
										children: "Line 1"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: "\""
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
								children: [jsx(_components.span, {
									style: { "--shiki-light": "#16233A" },
									children: "      <"
								}), jsx(_components.span, {
									style: { "--shiki-light": "#0F7D6C" },
									children: "TextField"
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
										children: "        control"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3D6F94" },
										children: "="
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "{control}"
									})
								]
							}),
							"\n",
							jsxs(_components.span, {
								"data-line": "",
								"data-highlighted-line": "",
								children: [
									jsx(_components.span, {
										style: {
											"--shiki-light": "#3D6F94",
											"--shiki-light-font-style": "italic"
										},
										children: "        name"
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
										children: "`${"
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
										children: ".city"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: "`"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: " as"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: " FieldPathByValue<T,"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: " string>"
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
										style: {
											"--shiki-light": "#3D6F94",
											"--shiki-light-font-style": "italic"
										},
										children: "        label"
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
										children: "City"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: "\""
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
										children: "fieldset"
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
										style: { "--shiki-light": "#16233A" },
										children: "<"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#0F7D6C" },
										children: "AddressField"
									}),
									jsx(_components.span, {
										style: {
											"--shiki-light": "#3D6F94",
											"--shiki-light-font-style": "italic"
										},
										children: " control"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3D6F94" },
										children: "="
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "{control} "
									}),
									jsx(_components.span, {
										style: {
											"--shiki-light": "#3D6F94",
											"--shiki-light-font-style": "italic"
										},
										children: "name"
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
										children: "shipping"
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
										children: "<"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#0F7D6C" },
										children: "AddressField"
									}),
									jsx(_components.span, {
										style: {
											"--shiki-light": "#3D6F94",
											"--shiki-light-font-style": "italic"
										},
										children: " control"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3D6F94" },
										children: "="
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "{control} "
									}),
									jsx(_components.span, {
										style: {
											"--shiki-light": "#3D6F94",
											"--shiki-light-font-style": "italic"
										},
										children: "name"
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
										children: "billing"
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
							})
						]
					})
				})
			})
		})] }) }),
		"\n",
		jsx(_components.p, { children: jsx(_components.strong, { children: "What's different:" }) }),
		"\n",
		jsxs(_components.table, { children: [jsx(_components.thead, { children: jsxs(_components.tr, { children: [
			jsx(_components.th, {}),
			jsx(_components.th, { children: "Kin Form" }),
			jsx(_components.th, { children: "React Hook Form" })
		] }) }), jsxs(_components.tbody, { children: [
			jsxs(_components.tr, { children: [
				jsx(_components.td, { children: "Reusable nested-group prop" }),
				jsxs(_components.td, { children: [
					"An already-resolved ",
					jsx(_components.code, { children: "api: FieldApi<Address, TParentValue>" }),
					" — same shape as any other field"
				] }),
				jsxs(_components.td, { children: [
					jsx(_components.code, { children: "control" }),
					" + ",
					jsx(_components.code, { children: "name" }),
					" — a path prefix, not a resolved field"
				] })
			] }),
			jsxs(_components.tr, { children: [
				jsx(_components.td, { children: "Type-safety at the call site" }),
				jsxs(_components.td, { children: [
					"Automatic — ",
					jsx(_components.code, { children: "FieldApi<Address, TParentValue>" }),
					" only accepts a field whose value is ",
					jsx(_components.code, { children: "Address" })
				] }),
				jsxs(_components.td, { children: [jsx(_components.code, { children: "FieldPathByValue<T, Address>" }), " gets there, but it's a library-specific escape hatch most RHF users never reach for"] })
			] }),
			jsxs(_components.tr, { children: [
				jsx(_components.td, { children: "Building child paths" }),
				jsxs(_components.td, { children: [jsx(_components.code, { children: "api.field(\"line1\")" }), " — relative, same call as any top-level field"] }),
				jsxs(_components.td, { children: [
					"Template-string concatenation (",
					jsx(_components.code, { children: "`${name}.line1`" }),
					")"
				] })
			] }),
			jsxs(_components.tr, { children: [
				jsx(_components.td, { children: "Type-safety on children" }),
				jsxs(_components.td, { children: [
					"Checked through ",
					jsx(_components.code, { children: "DeepKey<Address>" }),
					" regardless of how deep ",
					jsx(_components.code, { children: "api" }),
					" is nested"
				] }),
				jsxs(_components.td, { children: ["Still needs a cast: TS can't prove a concatenated string is a member of ", jsx(_components.code, { children: "FieldPathByValue<T, string>" })] })
			] })
		] })] }),
		"\n",
		jsxs(_components.h3, {
			id: "array-field",
			children: [jsx(_components.a, {
				className: "header-anchor",
				"aria-label": "Permalink to \"Array field\"",
				href: "#array-field",
				children: jsx(_components.span, {
					"aria-hidden": "true",
					children: "#"
				})
			}), "Array field"]
		}),
		"\n",
		jsxs(_components.p, { children: [
			"An array (unlike the ",
			jsx(_components.a, {
				href: "#nested-group-field",
				children: "group above"
			}),
			") also needs stable item\nidentity across a reorder, plus its own mutation helpers:"
		] }),
		"\n",
		jsx(SideBySide, { children: jsxs(CodeGroup, { children: [jsx(CodeGroupItem, {
			label: "Kin Form",
			children: jsx(_components.figure, {
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
										children: " FieldApi"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: ","
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#1A6FB0" },
										children: " useForm"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: ","
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#1A6FB0" },
										children: " useWatch"
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
										children: " ItemsField"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: "<TParentValue>("
									})
								]
							}),
							"\n",
							jsxs(_components.span, {
								"data-line": "",
								"data-highlighted-line": "",
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
										children: " FieldApi<string[], TParentValue> },"
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
							jsx(_components.span, {
								"data-line": "",
								children: jsx(_components.span, {
									style: {
										"--shiki-light": "#A83A1C",
										"--shiki-light-font-style": "italic"
									},
									children: "  // Selective re-rendering."
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
										style: { "--shiki-light": "#3C4257" },
										children: " ["
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "error"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: ", "
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "value"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: "] "
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3D6F94" },
										children: "="
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
										children: ", ("
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "f"
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
										children: " ["
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "f"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: "."
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "error"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: ", "
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "f"
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
										children: "] as "
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#0F7D6C" },
										children: "const"
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
							jsx(_components.span, {
								"data-line": "",
								children: jsx(_components.span, {
									style: { "--shiki-light": "#16233A" },
									children: "    <>"
								})
							}),
							"\n",
							jsxs(_components.span, {
								"data-line": "",
								children: [
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "      {value"
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
										children: "_"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: ","
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: " i"
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
										children: "        const"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: " field "
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3D6F94" },
										children: "="
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
										children: "field"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: "("
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: "`${"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "i"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: "}`"
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
									children: "        return"
								}), jsx(_components.span, {
									style: { "--shiki-light": "#3C4257" },
									children: " ("
								})]
							}),
							"\n",
							jsxs(_components.span, {
								"data-line": "",
								children: [jsx(_components.span, {
									style: { "--shiki-light": "#16233A" },
									children: "          <"
								}), jsx(_components.span, {
									style: { "--shiki-light": "#0F7D6C" },
									children: "ItemField"
								})]
							}),
							"\n",
							jsxs(_components.span, {
								"data-line": "",
								"data-highlighted-line": "",
								children: [
									jsx(_components.span, {
										style: {
											"--shiki-light": "#3D6F94",
											"--shiki-light-font-style": "italic"
										},
										children: "            key"
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
										children: "id}"
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
										children: "            api"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3D6F94" },
										children: "="
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "{field}"
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
										children: "            onMoveUp"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3D6F94" },
										children: "="
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "{i "
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3D6F94" },
										children: ">"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#9A5B13" },
										children: " 0"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3D6F94" },
										children: " ?"
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
										children: " api"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: "."
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "moveItem"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: "("
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: "\"\""
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: ","
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: " i"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: ","
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: " i "
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3D6F94" },
										children: "-"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#9A5B13" },
										children: " 1"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: ")"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3D6F94" },
										children: " :"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#B23370" },
										children: " undefined"
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
										style: {
											"--shiki-light": "#3D6F94",
											"--shiki-light-font-style": "italic"
										},
										children: "            onMoveDown"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3D6F94" },
										children: "="
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "{i "
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3D6F94" },
										children: "<"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: " value"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: "."
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "length "
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3D6F94" },
										children: "-"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#9A5B13" },
										children: " 1"
									})
								]
							}),
							"\n",
							jsxs(_components.span, {
								"data-line": "",
								children: [
									jsx(_components.span, {
										style: { "--shiki-light": "#3D6F94" },
										children: "              ?"
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
										children: " api"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: "."
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "moveItem"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: "("
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: "\"\""
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: ","
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: " i"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: ","
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: " i "
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3D6F94" },
										children: "+"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#9A5B13" },
										children: " 1"
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
										style: { "--shiki-light": "#3D6F94" },
										children: "              :"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#B23370" },
										children: " undefined"
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
										style: {
											"--shiki-light": "#3D6F94",
											"--shiki-light-font-style": "italic"
										},
										children: "            onRemove"
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
										children: " api"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: "."
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "removeItem"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: "("
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: "\"\""
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: ","
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: " i"
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
									children: "          />"
								})
							}),
							"\n",
							jsx(_components.span, {
								"data-line": "",
								children: jsx(_components.span, {
									style: { "--shiki-light": "#3C4257" },
									children: "        );"
								})
							}),
							"\n",
							jsxs(_components.span, {
								"data-line": "",
								children: [jsx(_components.span, {
									style: { "--shiki-light": "#3C4257" },
									children: "      })"
								}), jsx(_components.span, {
									style: { "--shiki-light": "#16233A" },
									children: "}"
								})]
							}),
							"\n",
							jsxs(_components.span, {
								"data-line": "",
								children: [
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "      {error "
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3D6F94" },
										children: "&&"
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
										children: ">{error}</"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#0F7D6C" },
										children: "span"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: ">}"
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
										children: " api"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: "."
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "pushItem"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: "("
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: "\"\""
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: ","
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: " \"\""
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
									})
								]
							}),
							"\n",
							jsx(_components.span, {
								"data-line": "",
								children: jsx(_components.span, {
									style: { "--shiki-light": "#16233A" },
									children: "    </>"
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
										children: " ItemField"
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
										children: "onMoveUp"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: ", "
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "onMoveDown"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: ", "
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "onRemove"
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
										children: " {"
									})
								]
							}),
							"\n",
							jsxs(_components.span, {
								"data-line": "",
								"data-highlighted-line": "",
								children: [
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: "    api"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3D6F94" },
										children: ":"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: " FieldApi<string, string[]>;"
									})
								]
							}),
							"\n",
							jsxs(_components.span, {
								"data-line": "",
								children: [
									jsx(_components.span, {
										style: { "--shiki-light": "#1A6FB0" },
										children: "    onMoveUp"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3D6F94" },
										children: "?:"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: " () "
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3D6F94" },
										children: "=>"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: " void;"
									})
								]
							}),
							"\n",
							jsxs(_components.span, {
								"data-line": "",
								children: [
									jsx(_components.span, {
										style: { "--shiki-light": "#1A6FB0" },
										children: "    onMoveDown"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3D6F94" },
										children: "?:"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: " () "
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3D6F94" },
										children: "=>"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: " void;"
									})
								]
							}),
							"\n",
							jsxs(_components.span, {
								"data-line": "",
								children: [
									jsx(_components.span, {
										style: { "--shiki-light": "#1A6FB0" },
										children: "    onRemove"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3D6F94" },
										children: ":"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: " () "
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3D6F94" },
										children: "=>"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: " void;"
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
									children: ") {"
								})
							}),
							"\n",
							jsxs(_components.span, {
								"data-line": "",
								children: [
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "  useWatch"
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
								children: [jsx(_components.span, {
									style: { "--shiki-light": "#16233A" },
									children: "      <"
								}), jsx(_components.span, {
									style: { "--shiki-light": "#0F7D6C" },
									children: "TextInput"
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
										children: "        value"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3D6F94" },
										children: "="
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "{api"
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
										children: "{api"
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
										children: "{api"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: "."
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "handleChange}"
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
										children: "      <"
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
										children: " disabled"
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
										style: { "--shiki-light": "#3D6F94" },
										children: "!"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "onMoveUp} "
									}),
									jsx(_components.span, {
										style: {
											"--shiki-light": "#3D6F94",
											"--shiki-light-font-style": "italic"
										},
										children: "onClick"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3D6F94" },
										children: "="
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "{onMoveUp}>Move up</"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#0F7D6C" },
										children: "button"
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
										children: "button"
									}),
									jsx(_components.span, {
										style: {
											"--shiki-light": "#3D6F94",
											"--shiki-light-font-style": "italic"
										},
										children: " disabled"
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
										style: { "--shiki-light": "#3D6F94" },
										children: "!"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "onMoveDown} "
									}),
									jsx(_components.span, {
										style: {
											"--shiki-light": "#3D6F94",
											"--shiki-light-font-style": "italic"
										},
										children: "onClick"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3D6F94" },
										children: "="
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "{onMoveDown}>Move down</"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#0F7D6C" },
										children: "button"
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
										children: "{onRemove}>Remove</"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#0F7D6C" },
										children: "button"
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
										children: " Form"
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
										children: "<{ items"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3D6F94" },
										children: ":"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: " string[] }>({"
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
							jsx(_components.span, {
								"data-line": "",
								children: " "
							}),
							"\n",
							jsxs(_components.span, {
								"data-line": "",
								children: [jsx(_components.span, {
									style: { "--shiki-light": "#16233A" },
									children: "  <"
								}), jsx(_components.span, {
									style: { "--shiki-light": "#0F7D6C" },
									children: "ItemsField"
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
										children: "    api"
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
										children: "items"
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
										children: "      validators"
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
										children: "g"
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
										children: " ("
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "g"
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
										children: "."
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "length"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3D6F94" },
										children: " >"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#9A5B13" },
										children: " 0"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3D6F94" },
										children: " ?"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#B23370" },
										children: " null"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3D6F94" },
										children: " :"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: " \""
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#9A5B13" },
										children: "Add at least one item"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: "\""
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: "),"
									})
								]
							}),
							"\n",
							jsxs(_components.span, {
								"data-line": "",
								children: [jsx(_components.span, {
									style: { "--shiki-light": "#3C4257" },
									children: "    })"
								}), jsx(_components.span, {
									style: { "--shiki-light": "#16233A" },
									children: "}"
								})]
							}),
							"\n",
							jsxs(_components.span, {
								"data-line": "",
								children: [jsx(_components.span, {
									style: { "--shiki-light": "#16233A" },
									children: "  />"
								}), jsx(_components.span, {
									style: { "--shiki-light": "#3C4257" },
									children: ";"
								})]
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
		}), jsx(CodeGroupItem, {
			label: "React Hook Form",
			children: jsx(_components.figure, {
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
									children: "  useController"
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
									children: "  useFieldArray"
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
									children: "  useForm"
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
									children: "  useFormState"
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
										children: "react-hook-form"
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
									})
								]
							}),
							"\n",
							jsxs(_components.span, {
								"data-line": "",
								children: [jsx(_components.span, {
									style: { "--shiki-light": "#1A6FB0" },
									children: "  FieldArrayPath"
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
									children: "  FieldPathByValue"
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
									children: "  FieldValues"
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
									children: "  Path"
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
									children: "  UseControllerProps"
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
									children: "  UseFieldArrayProps"
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
										children: "react-hook-form"
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
										children: " ItemsField"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: "<"
									})
								]
							}),
							"\n",
							jsxs(_components.span, {
								"data-line": "",
								children: [
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: "  TFieldValues "
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#0F7D6C" },
										children: "extends"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: " FieldValues,"
									})
								]
							}),
							"\n",
							jsxs(_components.span, {
								"data-line": "",
								children: [
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: "  TName "
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#0F7D6C" },
										children: "extends"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: " Path<TFieldValues> "
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3D6F94" },
										children: "&"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: " FieldArrayPath<TFieldValues>,"
									})
								]
							}),
							"\n",
							jsxs(_components.span, {
								"data-line": "",
								children: [
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: ">("
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "props"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3D6F94" },
										children: ":"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: " UseFieldArrayProps<TFieldValues, TName>) {"
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
									children: "  // Two separate hooks for logic and state."
								})
							}),
							"\n",
							jsxs(_components.span, {
								"data-line": "",
								"data-highlighted-line": "",
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
										children: "fields"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: ", "
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "append"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: ", "
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "move"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: ", "
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "remove"
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
										children: " useFieldArray"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: "("
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "props"
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
								"data-highlighted-line": "",
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
										children: "errors"
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
										children: " useFormState"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: "("
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "props"
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
							jsx(_components.span, {
								"data-line": "",
								children: jsx(_components.span, {
									style: {
										"--shiki-light": "#A83A1C",
										"--shiki-light-font-style": "italic"
									},
									children: "  // Cast needed — TName is generic, so it can't be narrowed to a literal key."
								})
							}),
							"\n",
							jsxs(_components.span, {
								"data-line": "",
								"data-highlighted-line": "",
								children: [
									jsx(_components.span, {
										style: { "--shiki-light": "#3D6F94" },
										children: "  const"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: " rootError"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3D6F94" },
										children: " ="
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: " errors"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: "["
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "props"
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
										children: "]?."
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "root"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: " as"
									})
								]
							}),
							"\n",
							jsxs(_components.span, {
								"data-line": "",
								"data-highlighted-line": "",
								children: [
									jsx(_components.span, {
										style: { "--shiki-light": "#3D6F94" },
										children: "    |"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: " { "
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "message"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3D6F94" },
										children: "?:"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: " string"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: " }"
									})
								]
							}),
							"\n",
							jsxs(_components.span, {
								"data-line": "",
								"data-highlighted-line": "",
								children: [
									jsx(_components.span, {
										style: { "--shiki-light": "#3D6F94" },
										children: "    |"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#B23370" },
										children: " undefined"
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
							jsx(_components.span, {
								"data-line": "",
								children: jsx(_components.span, {
									style: { "--shiki-light": "#16233A" },
									children: "    <>"
								})
							}),
							"\n",
							jsxs(_components.span, {
								"data-line": "",
								children: [
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "      {fields"
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
										children: "f"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: ","
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: " i"
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
										children: " ("
									})
								]
							}),
							"\n",
							jsxs(_components.span, {
								"data-line": "",
								children: [jsx(_components.span, {
									style: { "--shiki-light": "#16233A" },
									children: "        <"
								}), jsx(_components.span, {
									style: { "--shiki-light": "#0F7D6C" },
									children: "ItemField"
								})]
							}),
							"\n",
							jsxs(_components.span, {
								"data-line": "",
								"data-highlighted-line": "",
								children: [
									jsx(_components.span, {
										style: {
											"--shiki-light": "#3D6F94",
											"--shiki-light-font-style": "italic"
										},
										children: "          key"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3D6F94" },
										children: "="
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "{f"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: "."
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "id}"
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
										children: "          control"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3D6F94" },
										children: "="
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "{props"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: "."
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "control}"
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
									children: "          // Cast needed, for the same reason as AddressField's children."
								})
							}),
							"\n",
							jsxs(_components.span, {
								"data-line": "",
								"data-highlighted-line": "",
								children: [
									jsx(_components.span, {
										style: {
											"--shiki-light": "#3D6F94",
											"--shiki-light-font-style": "italic"
										},
										children: "          name"
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
										children: "`${"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "props"
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
										children: "."
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: "${"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "i"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: "}"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#9A5B13" },
										children: ".value"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: "`"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: " as"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: " FieldPathByValue<"
									})
								]
							}),
							"\n",
							jsx(_components.span, {
								"data-line": "",
								"data-highlighted-line": "",
								children: jsx(_components.span, {
									style: { "--shiki-light": "#3C4257" },
									children: "            TFieldValues,"
								})
							}),
							"\n",
							jsx(_components.span, {
								"data-line": "",
								"data-highlighted-line": "",
								children: jsx(_components.span, {
									style: { "--shiki-light": "#3C4257" },
									children: "            string"
								})
							}),
							"\n",
							jsxs(_components.span, {
								"data-line": "",
								"data-highlighted-line": "",
								children: [jsx(_components.span, {
									style: { "--shiki-light": "#3C4257" },
									children: "          >"
								}), jsx(_components.span, {
									style: { "--shiki-light": "#16233A" },
									children: "}"
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
										children: "          onMoveUp"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3D6F94" },
										children: "="
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "{i "
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3D6F94" },
										children: ">"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#9A5B13" },
										children: " 0"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3D6F94" },
										children: " ?"
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
										children: " move"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: "("
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "i"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: ","
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: " i "
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3D6F94" },
										children: "-"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#9A5B13" },
										children: " 1"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: ")"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3D6F94" },
										children: " :"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#B23370" },
										children: " undefined"
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
										style: {
											"--shiki-light": "#3D6F94",
											"--shiki-light-font-style": "italic"
										},
										children: "          onMoveDown"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3D6F94" },
										children: "="
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "{i "
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3D6F94" },
										children: "<"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: " fields"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: "."
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "length "
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3D6F94" },
										children: "-"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#9A5B13" },
										children: " 1"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3D6F94" },
										children: " ?"
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
										children: " move"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: "("
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "i"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: ","
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: " i "
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3D6F94" },
										children: "+"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#9A5B13" },
										children: " 1"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: ")"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3D6F94" },
										children: " :"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#B23370" },
										children: " undefined"
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
										style: {
											"--shiki-light": "#3D6F94",
											"--shiki-light-font-style": "italic"
										},
										children: "          onRemove"
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
										children: " remove"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: "("
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "i"
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
									children: "        />"
								})
							}),
							"\n",
							jsxs(_components.span, {
								"data-line": "",
								children: [jsx(_components.span, {
									style: { "--shiki-light": "#3C4257" },
									children: "      ))"
								}), jsx(_components.span, {
									style: { "--shiki-light": "#16233A" },
									children: "}"
								})]
							}),
							"\n",
							jsxs(_components.span, {
								"data-line": "",
								children: [
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "      {rootError"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: "?."
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "message "
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3D6F94" },
										children: "&&"
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
										children: ">{rootError"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: "."
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "message}</"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#0F7D6C" },
										children: "span"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: ">}"
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
										children: " append"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: "({"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#1A6FB0" },
										children: " value"
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
										children: " }"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: " as"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: " never)"
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
									})
								]
							}),
							"\n",
							jsx(_components.span, {
								"data-line": "",
								children: jsx(_components.span, {
									style: { "--shiki-light": "#16233A" },
									children: "    </>"
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
										children: " ItemField"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: "<TFieldValues "
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#0F7D6C" },
										children: "extends"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: " FieldValues>("
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
										children: "control"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: ", "
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "name"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: ", "
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "onMoveUp"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: ", "
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "onMoveDown"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: ", "
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "onRemove"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: " }"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3D6F94" },
										children: ":"
									})
								]
							}),
							"\n",
							jsxs(_components.span, {
								"data-line": "",
								"data-highlighted-line": "",
								children: [jsx(_components.span, {
									style: { "--shiki-light": "#3D6F94" },
									children: "    &"
								}), jsx(_components.span, {
									style: { "--shiki-light": "#3C4257" },
									children: " UseControllerProps<TFieldValues, FieldPathByValue<TFieldValues, string>>"
								})]
							}),
							"\n",
							jsxs(_components.span, {
								"data-line": "",
								children: [jsx(_components.span, {
									style: { "--shiki-light": "#3D6F94" },
									children: "    &"
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
										children: "      onMoveUp"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3D6F94" },
										children: "?:"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: " () "
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3D6F94" },
										children: "=>"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: " void;"
									})
								]
							}),
							"\n",
							jsxs(_components.span, {
								"data-line": "",
								children: [
									jsx(_components.span, {
										style: { "--shiki-light": "#1A6FB0" },
										children: "      onMoveDown"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3D6F94" },
										children: "?:"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: " () "
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3D6F94" },
										children: "=>"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: " void;"
									})
								]
							}),
							"\n",
							jsxs(_components.span, {
								"data-line": "",
								children: [
									jsx(_components.span, {
										style: { "--shiki-light": "#1A6FB0" },
										children: "      onRemove"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3D6F94" },
										children: ":"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: " () "
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3D6F94" },
										children: "=>"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: " void;"
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
										style: { "--shiki-light": "#3C4257" },
										children: " { "
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "field"
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
										children: " useController"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: "({"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: " control"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: ","
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: " name"
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
								children: [jsx(_components.span, {
									style: { "--shiki-light": "#16233A" },
									children: "      <"
								}), jsx(_components.span, {
									style: { "--shiki-light": "#0F7D6C" },
									children: "TextInput"
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
										children: "onBlur}"
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
										children: "{field"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: "."
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "onChange}"
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
										children: "      <"
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
										children: " disabled"
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
										style: { "--shiki-light": "#3D6F94" },
										children: "!"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "onMoveUp} "
									}),
									jsx(_components.span, {
										style: {
											"--shiki-light": "#3D6F94",
											"--shiki-light-font-style": "italic"
										},
										children: "onClick"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3D6F94" },
										children: "="
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "{onMoveUp}>Move up</"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#0F7D6C" },
										children: "button"
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
										children: "button"
									}),
									jsx(_components.span, {
										style: {
											"--shiki-light": "#3D6F94",
											"--shiki-light-font-style": "italic"
										},
										children: " disabled"
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
										style: { "--shiki-light": "#3D6F94" },
										children: "!"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "onMoveDown} "
									}),
									jsx(_components.span, {
										style: {
											"--shiki-light": "#3D6F94",
											"--shiki-light-font-style": "italic"
										},
										children: "onClick"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3D6F94" },
										children: "="
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "{onMoveDown}>Move down</"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#0F7D6C" },
										children: "button"
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
										children: "{onRemove}>Remove</"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#0F7D6C" },
										children: "button"
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
										children: " Form"
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
										children: "control"
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
										children: " useForm"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: "<{ items"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3D6F94" },
										children: ":"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: " { value"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3D6F94" },
										children: ":"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: " string }[] }>({"
									})
								]
							}),
							"\n",
							jsxs(_components.span, {
								"data-line": "",
								children: [
									jsx(_components.span, {
										style: { "--shiki-light": "#1A6FB0" },
										children: "    defaultValues"
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
										children: " },"
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
									style: { "--shiki-light": "#16233A" },
									children: "  <"
								}), jsx(_components.span, {
									style: { "--shiki-light": "#0F7D6C" },
									children: "ItemsField"
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
										children: "    control"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3D6F94" },
										children: "="
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "{control}"
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
										children: "    name"
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
										children: "items"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: "\""
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
										children: "    rules"
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
										children: "{"
									})
								]
							}),
							"\n",
							jsxs(_components.span, {
								"data-line": "",
								children: [
									jsx(_components.span, {
										style: { "--shiki-light": "#1A6FB0" },
										children: "      validate"
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
										children: "value"
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
										children: " value"
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
										style: { "--shiki-light": "#3D6F94" },
										children: " >"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#9A5B13" },
										children: " 0"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3D6F94" },
										children: " ||"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: " \""
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#9A5B13" },
										children: "Add at least one item"
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
									style: { "--shiki-light": "#3C4257" },
									children: "    }"
								}), jsx(_components.span, {
									style: { "--shiki-light": "#16233A" },
									children: "}"
								})]
							}),
							"\n",
							jsxs(_components.span, {
								"data-line": "",
								children: [jsx(_components.span, {
									style: { "--shiki-light": "#16233A" },
									children: "  />"
								}), jsx(_components.span, {
									style: { "--shiki-light": "#3C4257" },
									children: ";"
								})]
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
		})] }) }),
		"\n",
		jsx(_components.p, { children: jsx(_components.strong, { children: "What's different:" }) }),
		"\n",
		jsxs(_components.table, { children: [jsx(_components.thead, { children: jsxs(_components.tr, { children: [
			jsx(_components.th, {}),
			jsx(_components.th, { children: "Kin Form" }),
			jsx(_components.th, { children: "React Hook Form" })
		] }) }), jsxs(_components.tbody, { children: [
			jsxs(_components.tr, { children: [
				jsx(_components.td, { children: "What holds the array" }),
				jsxs(_components.td, { children: [
					jsx(_components.code, { children: "FieldApi" }),
					" — the array ",
					jsx(_components.em, { children: "is" }),
					" a node"
				] }),
				jsxs(_components.td, { children: [
					jsx(_components.code, { children: "useFieldArray" }),
					" for logic, ",
					jsx(_components.code, { children: "useFormState" }),
					" for state"
				] })
			] }),
			jsxs(_components.tr, { children: [
				jsx(_components.td, { children: "Array-level validation" }),
				jsxs(_components.td, { children: ["The field's own ", jsx(_components.code, { children: "validators" })] }),
				jsxs(_components.td, { children: [
					jsx(_components.code, { children: "useFieldArray" }),
					"'s own ",
					jsx(_components.code, { children: "rules" }),
					" — a separate API"
				] })
			] }),
			jsxs(_components.tr, { children: [
				jsx(_components.td, { children: "Item identity on reorder" }),
				jsx(_components.td, { children: "Field identity follows the item via re-keying" }),
				jsxs(_components.td, { children: [jsx(_components.code, { children: "fields[i].id" }), " from the hook"] })
			] }),
			jsxs(_components.tr, { children: [
				jsx(_components.td, { children: "Reusable component" }),
				jsxs(_components.td, { children: [
					"Yes — pass a resolved ",
					jsx(_components.code, { children: "FieldApi" }),
					" down"
				] }),
				jsxs(_components.td, { children: [
					"Yes — pass ",
					jsx(_components.code, { children: "control" }),
					"+",
					jsx(_components.code, { children: "name" }),
					" down (or ",
					jsx(_components.code, { children: "useFormContext" }),
					")"
				] })
			] }),
			jsxs(_components.tr, { children: [
				jsx(_components.td, { children: "Typesafety" }),
				jsxs(_components.td, { children: [
					"Fully type-safe — ",
					jsx(_components.code, { children: "DeepKey<T>" }),
					" needs no cast, generic or not"
				] }),
				jsxs(_components.td, { children: [
					"Casts needed — ",
					jsx(_components.code, { children: "TFieldValues" }),
					"/",
					jsx(_components.code, { children: "TName" }),
					" are generic"
				] })
			] })
		] })] }),
		"\n",
		jsxs(_components.h2, {
			id: "multistep-forms",
			children: [jsx(_components.a, {
				className: "header-anchor",
				"aria-label": "Permalink to \"Multistep forms\"",
				href: "#multistep-forms",
				children: jsx(_components.span, {
					"aria-hidden": "true",
					children: "#"
				})
			}), "Multistep forms"]
		}),
		"\n",
		jsxs(_components.p, { children: [
			"Neither ships an official multi-step/wizard ",
			jsx(_components.em, { children: "component" }),
			". Kin Form ships a\ndedicated hook instead, ",
			jsx(_components.a, {
				href: "/form/guide/multistep",
				children: jsx(_components.code, { children: "useMultistep" })
			}),
			"; React Hook\nForm's docs demonstrate the hand-rolled version."
		] }),
		"\n",
		jsx(SideBySide, { children: jsxs(CodeGroup, { children: [jsx(CodeGroupItem, {
			label: "Kin Form",
			children: jsx(_components.figure, {
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
										children: ","
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#1A6FB0" },
										children: " useMultistep"
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
										children: " Signup"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3D6F94" },
										children: " ="
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
										children: "  credentials"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3D6F94" },
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
										style: { "--shiki-light": "#3D6F94" },
										children: ":"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: " string;"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#1A6FB0" },
										children: " password"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3D6F94" },
										children: ":"
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
										style: { "--shiki-light": "#1A6FB0" },
										children: "  address"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3D6F94" },
										children: ":"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: " {"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#1A6FB0" },
										children: " line1"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3D6F94" },
										children: ":"
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
										children: "function"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#1A6FB0" },
										children: " SignupWizard"
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
										children: "<Signup>({"
									})
								]
							}),
							"\n",
							jsxs(_components.span, {
								"data-line": "",
								children: [
									jsx(_components.span, {
										style: { "--shiki-light": "#1A6FB0" },
										children: "    initialValue"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: ":"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: " signupDefaults"
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
										children: "    onSubmit"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: ":"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: " signUp"
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
									children: "  });"
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
									children: "  // `stepField` is the FieldApi for the current step."
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
									children: "  // `next` checks if the current step is valid before advancing."
								})
							}),
							"\n",
							jsxs(_components.span, {
								"data-line": "",
								"data-highlighted-line": "",
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
										children: "stepName"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: ", "
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "stepField"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: ", "
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "isLastStep"
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
										children: " } "
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3D6F94" },
										children: "="
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: " useMultistep"
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
								"data-highlighted-line": "",
								children: [jsx(_components.span, {
									style: { "--shiki-light": "#16233A" },
									children: "    form"
								}), jsx(_components.span, {
									style: { "--shiki-light": "#3C4257" },
									children: ","
								})]
							}),
							"\n",
							jsx(_components.span, {
								"data-line": "",
								"data-highlighted-line": "",
								children: jsx(_components.span, {
									style: {
										"--shiki-light": "#A83A1C",
										"--shiki-light-font-style": "italic"
									},
									children: "    // Step names, matching form's value shape."
								})
							}),
							"\n",
							jsxs(_components.span, {
								"data-line": "",
								"data-highlighted-line": "",
								children: [
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: "    ["
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: "\""
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#9A5B13" },
										children: "credentials"
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
										style: { "--shiki-light": "#3C4257" },
										children: "\""
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#9A5B13" },
										children: "address"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: "\""
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: "] as "
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#0F7D6C" },
										children: "const"
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
								"data-highlighted-line": "",
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
										children: "      {stepName "
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
										children: "credentials"
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
										style: { "--shiki-light": "#3C4257" },
										children: " ("
									})
								]
							}),
							"\n",
							jsx(_components.span, {
								"data-line": "",
								children: jsx(_components.span, {
									style: { "--shiki-light": "#16233A" },
									children: "        <>"
								})
							}),
							"\n",
							jsx(_components.span, {
								"data-line": "",
								children: jsx(_components.span, {
									style: { "--shiki-light": "#16233A" },
									children: "          {"
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
									children: "            /* Field names are relative to the current step,"
								})
							}),
							"\n",
							jsx(_components.span, {
								"data-line": "",
								"data-highlighted-line": "",
								children: jsx(_components.span, {
									style: {
										"--shiki-light": "#A83A1C",
										"--shiki-light-font-style": "italic"
									},
									children: "           so it's easy to extract a step's UI into a reusable component. */"
								})
							}),
							"\n",
							jsx(_components.span, {
								"data-line": "",
								"data-highlighted-line": "",
								children: jsx(_components.span, {
									style: { "--shiki-light": "#16233A" },
									children: "          }"
								})
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
										children: "{stepField"
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
										children: "          <"
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
										children: "{stepField"
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
										children: "password"
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
										children: "Password"
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
							jsx(_components.span, {
								"data-line": "",
								children: jsx(_components.span, {
									style: { "--shiki-light": "#16233A" },
									children: "        </>"
								})
							}),
							"\n",
							jsxs(_components.span, {
								"data-line": "",
								children: [jsx(_components.span, {
									style: { "--shiki-light": "#3C4257" },
									children: "      )"
								}), jsx(_components.span, {
									style: { "--shiki-light": "#16233A" },
									children: "}"
								})]
							}),
							"\n",
							jsxs(_components.span, {
								"data-line": "",
								children: [
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "      {stepName "
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
										children: "address"
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
										style: { "--shiki-light": "#3C4257" },
										children: " ("
									})
								]
							}),
							"\n",
							jsxs(_components.span, {
								"data-line": "",
								"data-highlighted-line": "",
								children: [
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "        <"
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
										children: "{stepField"
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
										children: "line1"
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
										children: "Line 1"
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
								"data-highlighted-line": "",
								children: [jsx(_components.span, {
									style: { "--shiki-light": "#3C4257" },
									children: "      )"
								}), jsx(_components.span, {
									style: { "--shiki-light": "#16233A" },
									children: "}"
								})]
							}),
							"\n",
							jsx(_components.span, {
								"data-line": "",
								"data-highlighted-line": "",
								children: jsx(_components.span, {
									style: { "--shiki-light": "#16233A" },
									children: "      {isLastStep"
								})
							}),
							"\n",
							jsxs(_components.span, {
								"data-line": "",
								children: [
									jsx(_components.span, {
										style: { "--shiki-light": "#3D6F94" },
										children: "        ?"
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
										children: " type"
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
										children: "submit"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: "\""
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: ">Sign up</"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#0F7D6C" },
										children: "button"
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
										style: { "--shiki-light": "#3D6F94" },
										children: "        :"
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
										children: " type"
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
										children: "button"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: "\""
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
										children: "{next}>Next</"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#0F7D6C" },
										children: "button"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: ">}"
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
			})
		}), jsx(CodeGroupItem, {
			label: "React Hook Form",
			children: jsx(_components.figure, {
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
										children: " useState"
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
										children: "react"
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
										children: "react-hook-form"
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
										children: " Signup"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3D6F94" },
										children: " ="
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
										children: "  credentials"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3D6F94" },
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
										style: { "--shiki-light": "#3D6F94" },
										children: ":"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: " string;"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#1A6FB0" },
										children: " password"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3D6F94" },
										children: ":"
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
										style: { "--shiki-light": "#1A6FB0" },
										children: "  address"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3D6F94" },
										children: ":"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: " {"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#1A6FB0" },
										children: " line1"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3D6F94" },
										children: ":"
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
							jsx(_components.span, {
								"data-line": "",
								children: jsx(_components.span, {
									style: {
										"--shiki-light": "#A83A1C",
										"--shiki-light-font-style": "italic"
									},
									children: "// Must list all fields of each step."
								})
							}),
							"\n",
							jsxs(_components.span, {
								"data-line": "",
								"data-highlighted-line": "",
								children: [
									jsx(_components.span, {
										style: { "--shiki-light": "#3D6F94" },
										children: "const"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: " stepFields"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3D6F94" },
										children: " ="
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: " ["
									})
								]
							}),
							"\n",
							jsxs(_components.span, {
								"data-line": "",
								"data-highlighted-line": "",
								children: [
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: "  ["
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: "\""
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#9A5B13" },
										children: "credentials.email"
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
										style: { "--shiki-light": "#3C4257" },
										children: "\""
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#9A5B13" },
										children: "credentials.password"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: "\""
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: "],"
									})
								]
							}),
							"\n",
							jsxs(_components.span, {
								"data-line": "",
								"data-highlighted-line": "",
								children: [
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: "  ["
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: "\""
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#9A5B13" },
										children: "address.line1"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: "\""
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: "],"
									})
								]
							}),
							"\n",
							jsxs(_components.span, {
								"data-line": "",
								"data-highlighted-line": "",
								children: [
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: "] as "
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#0F7D6C" },
										children: "const"
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
										children: " SignupWizard"
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
										children: "control"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: ", "
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "trigger"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: ", "
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "handleSubmit"
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
										children: " useForm"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: "<Signup>({"
									})
								]
							}),
							"\n",
							jsxs(_components.span, {
								"data-line": "",
								children: [
									jsx(_components.span, {
										style: { "--shiki-light": "#1A6FB0" },
										children: "    defaultValues"
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
										children: "      credentials"
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
										children: " password"
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
										children: "      address"
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
										children: " line1"
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
										children: " },"
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
									children: "  });"
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
										style: { "--shiki-light": "#3C4257" },
										children: " ["
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "step"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: ", "
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "setStep"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: "] "
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3D6F94" },
										children: "="
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: " useState"
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
							jsxs(_components.span, {
								"data-line": "",
								"data-highlighted-line": "",
								children: [
									jsx(_components.span, {
										style: { "--shiki-light": "#3D6F94" },
										children: "  const"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: " isLastStep"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3D6F94" },
										children: " ="
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: " step"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3D6F94" },
										children: " ==="
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: " stepFields"
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
										style: { "--shiki-light": "#3D6F94" },
										children: " -"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#9A5B13" },
										children: " 1"
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
										children: "  const"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#1A6FB0" },
										children: " next"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3D6F94" },
										children: " ="
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#0F7D6C" },
										children: " async"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: " () "
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
									children: "    // Manually validate this step's fields."
								})
							}),
							"\n",
							jsxs(_components.span, {
								"data-line": "",
								"data-highlighted-line": "",
								children: [
									jsx(_components.span, {
										style: { "--shiki-light": "#3D6F94" },
										children: "    const"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: " valid"
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
										children: " trigger"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: "("
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "stepFields"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: "["
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "step"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: "]);"
									})
								]
							}),
							"\n",
							jsxs(_components.span, {
								"data-line": "",
								children: [
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: "    if ("
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "valid"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: ") "
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "setStep"
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
										style: { "--shiki-light": "#16233A" },
										children: " s"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3D6F94" },
										children: " +"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#9A5B13" },
										children: " 1"
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
									children: "  };"
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
										children: "{handleSubmit"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: "("
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "signUp"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: ")"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "}>"
									})
								]
							}),
							"\n",
							jsxs(_components.span, {
								"data-line": "",
								children: [
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "      {step "
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3D6F94" },
										children: "==="
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#9A5B13" },
										children: " 0"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3D6F94" },
										children: " &&"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: " ("
									})
								]
							}),
							"\n",
							jsx(_components.span, {
								"data-line": "",
								children: jsx(_components.span, {
									style: { "--shiki-light": "#16233A" },
									children: "        <>"
								})
							}),
							"\n",
							jsxs(_components.span, {
								"data-line": "",
								children: [jsx(_components.span, {
									style: { "--shiki-light": "#16233A" },
									children: "          <"
								}), jsx(_components.span, {
									style: { "--shiki-light": "#0F7D6C" },
									children: "TextField"
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
										children: "            control"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3D6F94" },
										children: "="
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "{control}"
									})
								]
							}),
							"\n",
							jsxs(_components.span, {
								"data-line": "",
								children: [
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "            {"
									}),
									jsx(_components.span, {
										style: {
											"--shiki-light": "#A83A1C",
											"--shiki-light-font-style": "italic"
										},
										children: "/* Field names are absolute. */"
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
								"data-highlighted-line": "",
								children: [
									jsx(_components.span, {
										style: {
											"--shiki-light": "#3D6F94",
											"--shiki-light-font-style": "italic"
										},
										children: "            name"
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
										children: "credentials.email"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: "\""
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
										children: "            label"
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
									})
								]
							}),
							"\n",
							jsx(_components.span, {
								"data-line": "",
								children: jsx(_components.span, {
									style: { "--shiki-light": "#16233A" },
									children: "          />"
								})
							}),
							"\n",
							jsxs(_components.span, {
								"data-line": "",
								children: [jsx(_components.span, {
									style: { "--shiki-light": "#16233A" },
									children: "          <"
								}), jsx(_components.span, {
									style: { "--shiki-light": "#0F7D6C" },
									children: "TextField"
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
										children: "            control"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3D6F94" },
										children: "="
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "{control}"
									})
								]
							}),
							"\n",
							jsxs(_components.span, {
								"data-line": "",
								"data-highlighted-line": "",
								children: [
									jsx(_components.span, {
										style: {
											"--shiki-light": "#3D6F94",
											"--shiki-light-font-style": "italic"
										},
										children: "            name"
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
										children: "credentials.password"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: "\""
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
										children: "            label"
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
										children: "Password"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: "\""
									})
								]
							}),
							"\n",
							jsx(_components.span, {
								"data-line": "",
								children: jsx(_components.span, {
									style: { "--shiki-light": "#16233A" },
									children: "          />"
								})
							}),
							"\n",
							jsx(_components.span, {
								"data-line": "",
								children: jsx(_components.span, {
									style: { "--shiki-light": "#16233A" },
									children: "        </>"
								})
							}),
							"\n",
							jsxs(_components.span, {
								"data-line": "",
								children: [jsx(_components.span, {
									style: { "--shiki-light": "#3C4257" },
									children: "      )"
								}), jsx(_components.span, {
									style: { "--shiki-light": "#16233A" },
									children: "}"
								})]
							}),
							"\n",
							jsxs(_components.span, {
								"data-line": "",
								children: [
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "      {step "
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3D6F94" },
										children: "==="
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#9A5B13" },
										children: " 1"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3D6F94" },
										children: " &&"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: " ("
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
										children: "TextField"
									}),
									jsx(_components.span, {
										style: {
											"--shiki-light": "#3D6F94",
											"--shiki-light-font-style": "italic"
										},
										children: " control"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3D6F94" },
										children: "="
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "{control} "
									}),
									jsx(_components.span, {
										style: {
											"--shiki-light": "#3D6F94",
											"--shiki-light-font-style": "italic"
										},
										children: "name"
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
										children: "address.line1"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: "\""
									}),
									jsx(_components.span, {
										style: {
											"--shiki-light": "#3D6F94",
											"--shiki-light-font-style": "italic"
										},
										children: " label"
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
										children: "Line 1"
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
								children: [jsx(_components.span, {
									style: { "--shiki-light": "#3C4257" },
									children: "      )"
								}), jsx(_components.span, {
									style: { "--shiki-light": "#16233A" },
									children: "}"
								})]
							}),
							"\n",
							jsx(_components.span, {
								"data-line": "",
								"data-highlighted-line": "",
								children: jsx(_components.span, {
									style: { "--shiki-light": "#16233A" },
									children: "      {isLastStep"
								})
							}),
							"\n",
							jsxs(_components.span, {
								"data-line": "",
								"data-highlighted-line": "",
								children: [
									jsx(_components.span, {
										style: { "--shiki-light": "#3D6F94" },
										children: "        ?"
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
										children: " type"
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
										children: "submit"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: "\""
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: ">Sign up</"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#0F7D6C" },
										children: "button"
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
								"data-highlighted-line": "",
								children: [
									jsx(_components.span, {
										style: { "--shiki-light": "#3D6F94" },
										children: "        :"
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
										children: " type"
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
										children: "button"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: "\""
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
										children: "{next}>Next</"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#0F7D6C" },
										children: "button"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: ">}"
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
			})
		})] }) }),
		"\n",
		jsx(_components.p, { children: jsx(_components.strong, { children: "What's different:" }) }),
		"\n",
		jsxs(_components.table, { children: [jsx(_components.thead, { children: jsxs(_components.tr, { children: [
			jsx(_components.th, {}),
			jsx(_components.th, { children: "Kin Form" }),
			jsx(_components.th, { children: "React Hook Form" })
		] }) }), jsxs(_components.tbody, { children: [
			jsxs(_components.tr, { children: [
				jsx(_components.td, { children: "Step-validation ceremony" }),
				jsxs(_components.td, { children: [
					jsx(_components.code, { children: "useMultistep" }),
					"'s ",
					jsx(_components.code, { children: "next()" }),
					" — touch + wait + gate, built in"
				] }),
				jsxs(_components.td, { children: [
					"Hand-rolled per wizard (",
					jsx(_components.code, { children: "trigger([...names])" }),
					")"
				] })
			] }),
			jsxs(_components.tr, { children: [
				jsx(_components.td, { children: "Step ↔ field mapping" }),
				jsxs(_components.td, { children: [
					"Each step ",
					jsx(_components.em, { children: "is" }),
					" a ",
					jsx(_components.code, { children: "FieldApi" }),
					" (",
					jsx(_components.code, { children: "stepNames" }),
					" entries)"
				] }),
				jsx(_components.td, { children: "A field-name list you maintain per step" })
			] }),
			jsxs(_components.tr, { children: [
				jsx(_components.td, { children: "Branching/redirecting" }),
				jsxs(_components.td, { children: [jsx(_components.code, { children: "onBeforeNext" }), " can redirect to an arbitrary step name"] }),
				jsxs(_components.td, { children: [
					"Custom ",
					jsx(_components.code, { children: "step" }),
					" state logic"
				] })
			] })
		] })] })
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
