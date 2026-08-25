import { Fragment, jsx, jsxs } from "react/jsx-runtime";
//#region ../form/docs/guide/submission-handling.md
var frontmatter = void 0;
function _createMdxContent(props) {
	const _components = {
		a: "a",
		code: "code",
		figure: "figure",
		h1: "h1",
		h2: "h2",
		li: "li",
		ol: "ol",
		p: "p",
		pre: "pre",
		span: "span",
		ul: "ul",
		...props.components
	}, { CodeGroup, CodeGroupItem, FrameworkSlot, FrameworkText } = _components;
	if (!CodeGroup) _missingMdxReference("CodeGroup", true);
	if (!CodeGroupItem) _missingMdxReference("CodeGroupItem", true);
	if (!FrameworkSlot) _missingMdxReference("FrameworkSlot", true);
	if (!FrameworkText) _missingMdxReference("FrameworkText", true);
	return jsxs(Fragment, { children: [
		jsxs(_components.h1, {
			id: "submission-handling",
			children: [jsx(_components.a, {
				className: "header-anchor",
				"aria-label": "Permalink to \"Submission Handling\"",
				href: "#submission-handling",
				children: jsx(_components.span, {
					"aria-hidden": "true",
					children: "#"
				})
			}), "Submission Handling"]
		}),
		"\n",
		jsxs(CodeGroup, { children: [jsx(CodeGroupItem, {
			label: "React",
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
										children: "    onSubmit"
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
										children: "      await"
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
										children: ");"
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
										children: "    onSubmitError"
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
										children: "Failed to log in"
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
										children: "handleSubmit}>{"
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
										children: "}</"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#0F7D6C" },
										children: "form"
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
		}), jsx(CodeGroupItem, {
			label: "Lit",
			children: jsx(_components.figure, {
				"data-rehype-pretty-code-figure": "",
				children: jsx(_components.pre, {
					tabIndex: "0",
					"data-language": "lit",
					"data-theme": "poimandres-light",
					children: jsxs(_components.code, {
						"data-language": "lit",
						"data-theme": "poimandres-light",
						style: { display: "grid" },
						children: [
							jsxs(_components.span, {
								"data-line": "",
								children: [
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: "@"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "customElement"
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
										children: "login-form"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: "\""
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
										children: "class"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#1A6FB0" },
										children: " LoginForm"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#0F7D6C" },
										children: " extends"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#1A6FB0" },
										children: " LitElement"
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
										children: "  #form "
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3D6F94" },
										children: "="
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#0F7D6C" },
										children: " new"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: " FormApi"
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
										children: "    onSubmit"
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
										children: "      await"
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
										children: ");"
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
										children: "    onSubmitError"
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
										children: "Failed to log in"
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
										children: "  override"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#1A6FB0" },
										children: " render"
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
										children: "    return"
									}),
									jsx(_components.span, {
										style: {
											"--shiki-light": "#A83A1C",
											"--shiki-light-font-style": "italic"
										},
										children: " html"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: "`"
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
										children: "form"
									}),
									jsx(_components.span, {
										style: {
											"--shiki-light": "#3D6F94",
											"--shiki-light-font-style": "italic"
										},
										children: " @submit"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: "="
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#0F7D6C" },
										children: "${"
									}),
									jsx(_components.span, {
										style: {
											"--shiki-light": "#0F7D6C",
											"--shiki-light-font-style": "italic"
										},
										children: "this"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: "."
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "#form"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: "."
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "handleSubmit"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#0F7D6C" },
										children: "}"
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
									style: {
										"--shiki-light": "#A83A1C",
										"--shiki-light-font-style": "italic"
									},
									children: "        <!-- ... -->"
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
									children: "    `;"
								})
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
							})
						]
					})
				})
			})
		})] }),
		"\n",
		jsxs(_components.p, { children: [jsx(_components.code, { children: "handleSubmit" }), ":"] }),
		"\n",
		jsxs(_components.ol, { children: [
			"\n",
			jsx(_components.li, { children: "Waits out any pending validation." }),
			"\n",
			jsxs(_components.li, { children: [
				"If the form is invalid, marks it ",
				jsx(_components.code, { children: "touched" }),
				" (so errors on never-blurred fields\nbecome visible) and calls ",
				jsx(_components.code, { children: "onSubmitInvalid" }),
				", then returns."
			] }),
			"\n",
			jsxs(_components.li, { children: [
				"Otherwise sets ",
				jsx(_components.code, { children: "submitting" }),
				" to ",
				jsx(_components.code, { children: "true" }),
				", calls ",
				jsx(_components.code, { children: "onSubmit" }),
				", and falls back to\n",
				jsx(_components.code, { children: "onSubmitError" }),
				" if it throws/rejects."
			] }),
			"\n"
		] }),
		"\n",
		jsxs(_components.p, { children: [
			"A no-op on a re-entrant call while already ",
			jsx(_components.code, { children: "submitting" }),
			". The ",
			jsx(_components.code, { children: "event" }),
			" parameter\nis optional and used only for ",
			jsx(_components.code, { children: "preventDefault()" }),
			", so the same call works from a\nReact Native ",
			jsx(_components.code, { children: "onPress" }),
			", any caller with no event, or a web ",
			jsx(_components.code, { children: "<form onSubmit>" }),
			" as\nshown above."
		] }),
		"\n",
		jsxs(_components.h2, {
			id: "disabling-the-submit-button-while-submitting",
			children: [jsx(_components.a, {
				className: "header-anchor",
				"aria-label": "Permalink to \"Disabling the submit button while submitting\"",
				href: "#disabling-the-submit-button-while-submitting",
				children: jsx(_components.span, {
					"aria-hidden": "true",
					children: "#"
				})
			}), "Disabling the submit button while submitting"]
		}),
		"\n",
		jsxs(_components.p, { children: [
			jsx(_components.code, { children: "submitting" }),
			" (and ",
			jsx(_components.code, { children: "dirty" }),
			", for a \"nothing to save\" state) are ordinary reactive\nstate, so gate the button like any other field property:"
		] }),
		"\n",
		jsxs(CodeGroup, { children: [jsx(CodeGroupItem, {
			label: "React",
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
										style: { "--shiki-light": "#16233A" },
										children: "<"
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
										children: "submitting"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: ","
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
										children: "dirty"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: "]"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: " as"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#0F7D6C" },
										children: " const"
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
										children: "  {"
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
										children: ","
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: " ["
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "submitting"
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
										children: "])"
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
										children: "    <"
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
										children: "{submitting "
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3D6F94" },
										children: "||"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3D6F94" },
										children: " !"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "dirty}>"
									})
								]
							}),
							"\n",
							jsx(_components.span, {
								"data-line": "",
								children: jsx(_components.span, {
									style: { "--shiki-light": "#16233A" },
									children: "      Save"
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
									children: "  )"
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
										children: "</"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#0F7D6C" },
										children: "Watch"
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
		}), jsx(CodeGroupItem, {
			label: "Lit",
			children: jsx(_components.figure, {
				"data-rehype-pretty-code-figure": "",
				children: jsx(_components.pre, {
					tabIndex: "0",
					"data-language": "lit",
					"data-theme": "poimandres-light",
					children: jsxs(_components.code, {
						"data-language": "lit",
						"data-theme": "poimandres-light",
						style: { display: "grid" },
						children: [
							jsxs(_components.span, {
								"data-line": "",
								children: [jsx(_components.span, {
									style: { "--shiki-light": "#16233A" },
									children: "watch"
								}), jsx(_components.span, {
									style: { "--shiki-light": "#3C4257" },
									children: "("
								})]
							}),
							"\n",
							jsxs(_components.span, {
								"data-line": "",
								children: [jsx(_components.span, {
									style: { "--shiki-light": "#16233A" },
									children: "  form"
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
										children: "submitting"
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
										children: "dirty"
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
							jsxs(_components.span, {
								"data-line": "",
								children: [
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: "  ("
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "_form"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: ", ["
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "submitting"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: ", "
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "dirty"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: "]) "
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3D6F94" },
										children: "=>"
									})
								]
							}),
							"\n",
							jsxs(_components.span, {
								"data-line": "",
								children: [jsx(_components.span, {
									style: {
										"--shiki-light": "#A83A1C",
										"--shiki-light-font-style": "italic"
									},
									children: "    html"
								}), jsx(_components.span, {
									style: { "--shiki-light": "#3C4257" },
									children: "`"
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
										style: { "--shiki-light": "#3C4257" },
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
										style: {
											"--shiki-light": "#3D6F94",
											"--shiki-light-font-style": "italic"
										},
										children: " ?disabled"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: "="
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#0F7D6C" },
										children: "${"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "submitting "
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3D6F94" },
										children: "||"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3D6F94" },
										children: " !"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "dirty"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#0F7D6C" },
										children: "}"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: ">"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: "Save"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "</"
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
									style: { "--shiki-light": "#3C4257" },
									children: "    `,"
								})
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
			})
		})] }),
		"\n",
		jsxs(_components.h2, {
			id: "disabling-the-whole-form-while-submitting",
			children: [jsx(_components.a, {
				className: "header-anchor",
				"aria-label": "Permalink to \"Disabling the whole form while submitting\"",
				href: "#disabling-the-whole-form-while-submitting",
				children: jsx(_components.span, {
					"aria-hidden": "true",
					children: "#"
				})
			}), "Disabling the whole form while submitting"]
		}),
		"\n",
		jsxs(_components.p, { children: [
			"Set ",
			jsx(_components.code, { children: "form.disabled = true" }),
			" around ",
			jsx(_components.code, { children: "onSubmit" }),
			"'s work.\n",
			jsx(_components.a, {
				href: "https://jsr.io/@kintools/form-core/doc/index.ts/~/FieldApi.disabled",
				children: jsx(_components.code, { children: "disabled" })
			}),
			"\ncascades from a field down through every already-registered descendant, so\n",
			jsx(_components.code, { children: "form.disabled = true" }),
			" reaches every field in the tree without watching\n",
			jsx(_components.code, { children: "submitting" }),
			" anywhere:"
		] }),
		"\n",
		jsxs(CodeGroup, { children: [jsx(CodeGroupItem, {
			label: "React",
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
										style: { "--shiki-light": "#16233A" },
										children: "    form"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: "."
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "disabled"
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
										children: ");"
									})
								]
							}),
							"\n",
							jsxs(_components.span, {
								"data-line": "",
								children: [
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: "    }"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#B23370" },
										children: " finally"
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
										children: "      form"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: "."
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "disabled"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3D6F94" },
										children: " ="
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#B23370" },
										children: " false"
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
			})
		}), jsx(CodeGroupItem, {
			label: "Lit",
			children: jsx(_components.figure, {
				"data-rehype-pretty-code-figure": "",
				children: jsx(_components.pre, {
					tabIndex: "0",
					"data-language": "lit",
					"data-theme": "poimandres-light",
					children: jsxs(_components.code, {
						"data-language": "lit",
						"data-theme": "poimandres-light",
						style: { display: "grid" },
						children: [
							jsxs(_components.span, {
								"data-line": "",
								children: [
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: "#"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "form"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3D6F94" },
										children: " ="
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#0F7D6C" },
										children: " new"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: " FormApi"
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
										style: { "--shiki-light": "#16233A" },
										children: "    form"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: "."
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "disabled"
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
										children: ");"
									})
								]
							}),
							"\n",
							jsxs(_components.span, {
								"data-line": "",
								children: [
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: "    }"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#B23370" },
										children: " finally"
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
										children: "      form"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: "."
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "disabled"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3D6F94" },
										children: " ="
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#B23370" },
										children: " false"
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
			})
		})] }),
		"\n",
		jsxs(FrameworkText, { children: [jsx(FrameworkSlot, {
			name: "react",
			children: jsxs(_components.p, { children: [
				jsx(_components.code, { children: "disabled" }),
				" on its own only skips validation; it doesn't reach the DOM by itself.\nFor it to actually disable an input, the component rendering that input has to\nread its own field's ",
				jsx(_components.code, { children: "disabled" }),
				" and fold it into whatever ",
				jsx(_components.code, { children: "disabled" }),
				" prop the\ncaller passed in, the same way ",
				jsx(_components.code, { children: "TextField" }),
				" does (see\n",
				jsx(_components.a, {
					href: "/form/guide/basic",
					children: "Basic"
				}),
				"):"
			] })
		}), jsx(FrameworkSlot, {
			name: "lit",
			children: jsxs(_components.p, { children: [
				jsx(_components.code, { children: "disabled" }),
				" on its own only skips validation; it doesn't reach the DOM by itself.\nFor it to actually disable an input, the component rendering that input has to\nread its own field's ",
				jsx(_components.code, { children: "disabled" }),
				" and fold it into whatever ",
				jsx(_components.code, { children: "disabled" }),
				" property\nthe caller set, the same way ",
				jsx(_components.code, { children: "text-field" }),
				" does (see ",
				jsx(_components.a, {
					href: "/form/guide/basic",
					children: "Basic"
				}),
				"):"
			] })
		})] }),
		"\n",
		jsxs(CodeGroup, { children: [jsx(CodeGroupItem, {
			label: "React",
			children: jsx(_components.figure, {
				"data-rehype-pretty-code-figure": "",
				children: jsx(_components.pre, {
					tabIndex: "0",
					"data-language": "tsx",
					"data-theme": "poimandres-light",
					children: jsx(_components.code, {
						"data-language": "tsx",
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
									style: { "--shiki-light": "#16233A" },
									children: " isDisabled"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#3D6F94" },
									children: " ="
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#16233A" },
									children: " disabled"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#3D6F94" },
									children: " ||"
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
									children: "disabled"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#3C4257" },
									children: ";"
								})
							]
						})
					})
				})
			})
		}), jsx(CodeGroupItem, {
			label: "Lit",
			children: jsx(_components.figure, {
				"data-rehype-pretty-code-figure": "",
				children: jsx(_components.pre, {
					tabIndex: "0",
					"data-language": "lit",
					"data-theme": "poimandres-light",
					children: jsx(_components.code, {
						"data-language": "lit",
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
									style: { "--shiki-light": "#16233A" },
									children: " isDisabled"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#3D6F94" },
									children: " ="
								}),
								jsx(_components.span, {
									style: {
										"--shiki-light": "#0F7D6C",
										"--shiki-light-font-style": "italic"
									},
									children: " this"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#3C4257" },
									children: "."
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#16233A" },
									children: "disabled"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#3D6F94" },
									children: " ||"
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
									children: "disabled"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#3C4257" },
									children: ";"
								})
							]
						})
					})
				})
			})
		})] }),
		"\n",
		jsxs(FrameworkText, { children: [jsx(FrameworkSlot, {
			name: "react",
			children: jsxs(_components.p, { children: [
				"Each ",
				jsx(_components.code, { children: "TextField" }),
				" is already subscribed to just its own field via ",
				jsx(_components.code, { children: "useWatch" }),
				", so\ndisabling a 50-field form during submit re-renders only the fields whose\n",
				jsx(_components.code, { children: "disabled" }),
				" actually flipped, not ",
				jsx(_components.code, { children: "LoginForm" }),
				" itself."
			] })
		}), jsx(FrameworkSlot, {
			name: "lit",
			children: jsxs(_components.p, { children: [
				"Each ",
				jsx(_components.code, { children: "text-field" }),
				" is already subscribed to just its own field via\n",
				jsx(_components.code, { children: "WatchController" }),
				", so disabling a 50-field form during submit updates only the\nfields whose ",
				jsx(_components.code, { children: "disabled" }),
				" actually flipped, not ",
				jsx(_components.code, { children: "login-form" }),
				" itself."
			] })
		})] }),
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
				href: "https://jsr.io/@kintools/form-core/doc/index.ts/~/FormApi",
				children: jsx(_components.code, { children: "FormApi" })
			}), " — full\nreference on JSR"] }),
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
