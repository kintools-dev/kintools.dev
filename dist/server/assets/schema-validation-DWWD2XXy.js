import { Fragment, jsx, jsxs } from "react/jsx-runtime";
//#region ../form/docs/guide/schema-validation.md
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
	}, { CodeGroup, CodeGroupItem } = _components;
	if (!CodeGroup) _missingMdxReference("CodeGroup", true);
	if (!CodeGroupItem) _missingMdxReference("CodeGroupItem", true);
	return jsxs(Fragment, { children: [
		jsxs(_components.h1, {
			id: "schema-validation",
			children: [jsx(_components.a, {
				className: "header-anchor",
				"aria-label": "Permalink to \"Schema Validation\"",
				href: "#schema-validation",
				children: jsx(_components.span, {
					"aria-hidden": "true",
					children: "#"
				})
			}), "Schema Validation"]
		}),
		"\n",
		jsxs(_components.p, { children: [
			"The second validation mechanism. See\n",
			jsx(_components.a, {
				href: "/form/guide/per-node-validation#two-kinds-of-validation",
				children: "Per-node Validation"
			}),
			"\nfor how it relates to ",
			jsx(_components.code, { children: "validators" }),
			". ",
			jsx(_components.code, { children: "toSchemaValidator()" }),
			" (from\n",
			jsx(_components.code, { children: "@kintools/form-validators" }),
			") adapts any\n",
			jsx(_components.a, {
				href: "https://standardschema.dev",
				children: "Standard Schema"
			}),
			"-compliant library (zod v4+,\nvalibot v1+, arktype, ...) into a ",
			jsx(_components.code, { children: "SchemaValidator" }),
			" that validates a whole\ngroup's or form's value in one pass."
		] }),
		"\n",
		jsxs(_components.p, { children: [
			"Pass it as ",
			jsx(_components.code, { children: "schemaValidator" }),
			", not ",
			jsx(_components.code, { children: "validators" }),
			", since it's a distinct option on\n",
			jsx(_components.code, { children: "FieldApi" }),
			"/",
			jsx(_components.code, { children: "FormApi" }),
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
									style: { "--shiki-light": "#3D6F94" },
									children: "const"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#16233A" },
									children: " checkoutSchema"
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
									children: "string"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#3C4257" },
									children: "()."
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
									children: "  items"
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
									children: "array"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#3C4257" },
									children: "("
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#16233A" },
									children: "z"
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
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#1A6FB0" },
									children: " code"
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
									children: "()"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#3C4257" },
									children: " }))."
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
									children: "1"
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
									children: " form"
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
						jsxs(_components.span, {
							"data-line": "",
							children: [
								jsx(_components.span, {
									style: { "--shiki-light": "#1A6FB0" },
									children: "  schemaValidator"
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
									children: "checkoutSchema"
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
						})
					]
				})
			})
		}),
		"\n",
		jsxs(_components.h2, {
			id: "reading-the-result",
			children: [jsx(_components.a, {
				className: "header-anchor",
				"aria-label": "Permalink to \"Reading the result\"",
				href: "#reading-the-result",
				children: jsx(_components.span, {
					"aria-hidden": "true",
					children: "#"
				})
			}), "Reading the result"]
		}),
		"\n",
		jsxs(_components.p, { children: [
			"Running the schema populates ",
			jsx(_components.code, { children: "schemaErrorMap" }),
			", a flat dot-joined path -> message\nmap (e.g. ",
			jsx(_components.code, { children: "{ \"email\": \"Invalid email\", \"items.0.code\": \"Required\" }" }),
			") built from\nevery issue's ",
			jsx(_components.code, { children: "path" }),
			". A field reads its own slice via ",
			jsx(_components.code, { children: "field.schemaError" }),
			", with\nno per-field wiring needed, even through\n",
			jsx(_components.a, {
				href: "/form/guide/nested-objects",
				children: "intermediate fields"
			}),
			", since the lookup walks up\n",
			jsx(_components.code, { children: "parent" }),
			" until it finds a map with an answer:"
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
							jsx(_components.span, {
								"data-line": "",
								children: jsx(_components.span, {
									style: { "--shiki-light": "#3C4257" },
									children: "{"
								})
							}),
							"\n",
							jsxs(_components.span, {
								"data-line": "",
								children: [
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "  field"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: "."
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "invalid"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3D6F94" },
										children: " &&"
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
										children: "touched"
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
										children: "    <"
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
										children: "schemaError}</"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#0F7D6C" },
										children: "span"
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
										style: { "--shiki-light": "#16233A" },
										children: "field"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: "."
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "invalid"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3D6F94" },
										children: " &&"
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
										children: "touched"
									})
								]
							}),
							"\n",
							jsxs(_components.span, {
								"data-line": "",
								children: [
									jsx(_components.span, {
										style: { "--shiki-light": "#3D6F94" },
										children: "  ?"
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
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "<"
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
										style: { "--shiki-light": "#0F7D6C" },
										children: "${"
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
										children: "error"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3D6F94" },
										children: " ??"
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
										style: { "--shiki-light": "#0F7D6C" },
										children: "}"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "</"
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
										children: "`"
									})
								]
							}),
							"\n",
							jsxs(_components.span, {
								"data-line": "",
								children: [
									jsx(_components.span, {
										style: { "--shiki-light": "#3D6F94" },
										children: "  :"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: " \"\""
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
		})] }),
		"\n",
		jsxs(_components.p, { children: [
			"An issue with no ",
			jsx(_components.code, { children: "path" }),
			" (e.g. a schema-level ",
			jsx(_components.code, { children: ".refine()" }),
			") maps to the group's\nown ",
			jsx(_components.code, { children: "\"\"" }),
			" key — read via ",
			jsx(_components.code, { children: "form.schemaErrorMap?.[\"\"]" }),
			", or ",
			jsx(_components.code, { children: "form.schemaError" }),
			",\nwhich checks ",
			jsx(_components.code, { children: "\"\"" }),
			" first before falling back to a parent's slice."
		] }),
		"\n",
		jsxs(_components.h2, {
			id: "schemaerrormap-vs-error",
			children: [
				jsx(_components.a, {
					className: "header-anchor",
					"aria-label": "Permalink to \"schemaErrorMap vs. error\"",
					href: "#schemaerrormap-vs-error",
					children: jsx(_components.span, {
						"aria-hidden": "true",
						children: "#"
					})
				}),
				jsx(_components.code, { children: "schemaErrorMap" }),
				" vs. ",
				jsx(_components.code, { children: "error" })
			]
		}),
		"\n",
		jsxs(_components.p, { children: [
			jsx(_components.code, { children: "schemaErrorMap" }),
			" is kept separate from ",
			jsx(_components.code, { children: "error" }),
			" (a field's own message from\n",
			jsx(_components.code, { children: "validators" }),
			"). Nothing is overwritten — a field can carry both a hand-written\nvalidator's ",
			jsx(_components.code, { children: "error" }),
			" and a schema's ",
			jsx(_components.code, { children: "schemaError" }),
			" at once."
		] }),
		"\n",
		jsxs(_components.h2, {
			id: "works-the-same-nested-or-flat",
			children: [jsx(_components.a, {
				className: "header-anchor",
				"aria-label": "Permalink to \"Works the same nested or flat\"",
				href: "#works-the-same-nested-or-flat",
				children: jsx(_components.span, {
					"aria-hidden": "true",
					children: "#"
				})
			}), "Works the same nested or flat"]
		}),
		"\n",
		jsxs(_components.p, { children: [
			"One schema covers the whole subtree, so nested fields don't need\n",
			jsx(_components.a, {
				href: "/form/guide/nested-objects",
				children: "intermediate fields"
			}),
			" just to be addressed: a schema\non ",
			jsx(_components.code, { children: "form" }),
			" validates ",
			jsx(_components.code, { children: "contact.name" }),
			" or ",
			jsx(_components.code, { children: "guests.0.email" }),
			" whether or not anything\ncalled ",
			jsx(_components.code, { children: "field(\"contact\")" }),
			" first:"
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
										children: " contact"
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
										children: " name"
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
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#1A6FB0" },
										children: " guests"
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
							jsxs(_components.span, {
								"data-line": "",
								children: [
									jsx(_components.span, {
										style: { "--shiki-light": "#1A6FB0" },
										children: "  schemaValidator"
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
										children: "registrationSchema"
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
									children: "// Flat — reads form's own schemaErrorMap directly."
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
										children: "contact.name"
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
										children: "Name"
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
									children: "// Nested — same schemaError, found by walking up through `contact`."
								})
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
										children: " contact"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3D6F94" },
										children: " ="
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
										children: "contact"
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
										children: "<"
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
										children: "{contact"
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
										children: "name"
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
										children: "Name"
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
										children: " contact"
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
										children: " name"
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
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#1A6FB0" },
										children: " guests"
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
							jsxs(_components.span, {
								"data-line": "",
								children: [
									jsx(_components.span, {
										style: { "--shiki-light": "#1A6FB0" },
										children: "  schemaValidator"
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
										children: "registrationSchema"
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
									children: "// Flat — reads form's own schemaErrorMap directly."
								})
							}),
							"\n",
							jsxs(_components.span, {
								"data-line": "",
								children: [
									jsx(_components.span, {
										style: {
											"--shiki-light": "#A83A1C",
											"--shiki-light-font-style": "italic"
										},
										children: "html"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: "`"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "<"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#0F7D6C" },
										children: "text-field"
									}),
									jsx(_components.span, {
										style: {
											"--shiki-light": "#3D6F94",
											"--shiki-light-font-style": "italic"
										},
										children: " .api"
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
										children: "form"
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
										children: "contact.name"
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
										style: { "--shiki-light": "#0F7D6C" },
										children: "}"
									}),
									jsx(_components.span, {
										style: {
											"--shiki-light": "#3D6F94",
											"--shiki-light-font-style": "italic"
										},
										children: " label"
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
										children: "Name"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: "\""
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "></"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#0F7D6C" },
										children: "text-field"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: ">"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: "`;"
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
									children: "// Nested — same schemaError, found by walking up through `contact`."
								})
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
										children: " contact"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3D6F94" },
										children: " ="
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
										children: "contact"
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
										style: {
											"--shiki-light": "#A83A1C",
											"--shiki-light-font-style": "italic"
										},
										children: "html"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: "`"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "<"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#0F7D6C" },
										children: "text-field"
									}),
									jsx(_components.span, {
										style: {
											"--shiki-light": "#3D6F94",
											"--shiki-light-font-style": "italic"
										},
										children: " .api"
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
										children: "contact"
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
										children: "name"
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
										style: { "--shiki-light": "#0F7D6C" },
										children: "}"
									}),
									jsx(_components.span, {
										style: {
											"--shiki-light": "#3D6F94",
											"--shiki-light-font-style": "italic"
										},
										children: " label"
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
										children: "Name"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: "\""
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "></"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#0F7D6C" },
										children: "text-field"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: ">"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: "`;"
									})
								]
							})
						]
					})
				})
			})
		})] }),
		"\n",
		jsxs(_components.p, { children: [
			"Exception: if ",
			jsx(_components.code, { children: "contact" }),
			" has its own ",
			jsx(_components.code, { children: "schemaValidator" }),
			", it takes precedence over\n",
			jsx(_components.code, { children: "form" }),
			"'s for everything under it. The nearer validator always wins, so\n",
			jsx(_components.code, { children: "contact.name" }),
			" would read from ",
			jsx(_components.code, { children: "contact" }),
			"'s own map instead. An issue on the\narray itself (e.g. Zod's ",
			jsx(_components.code, { children: ".min(1, \"Add at least one guest\")" }),
			" on ",
			jsx(_components.code, { children: "guests" }),
			") has no\nfield at that exact path, so read it off the map directly:\n",
			jsx(_components.code, { children: "form.schemaErrorMap?.guests" }),
			". See\n",
			jsx(_components.a, {
				href: "/form/guide/flat-vs-nested",
				children: "Flat vs. Nested Structure"
			}),
			" for when nesting is\nstill worth it."
		] }),
		"\n",
		jsxs(_components.h2, {
			id: "debouncing",
			children: [jsx(_components.a, {
				className: "header-anchor",
				"aria-label": "Permalink to \"Debouncing\"",
				href: "#debouncing",
				children: jsx(_components.span, {
					"aria-hidden": "true",
					children: "#"
				})
			}), "Debouncing"]
		}),
		"\n",
		jsxs(_components.p, { children: [
			"Like ",
			jsx(_components.code, { children: "asyncValidator" }),
			", runs are debounced by ",
			jsx(_components.code, { children: "validationDebounceMs" }),
			" (default\n",
			jsx(_components.code, { children: "0" }),
			"), with the same debounce/coalescing/",
			jsx(_components.code, { children: "handleBlur" }),
			"-flush behavior as\n",
			jsx(_components.a, {
				href: "/form/guide/per-node-validation#async-validator-and-debouncing",
				children: "described here"
			}),
			"."
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
