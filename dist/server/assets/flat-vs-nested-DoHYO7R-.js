import { Fragment, jsx, jsxs } from "react/jsx-runtime";
//#region ../form/docs/guide/flat-vs-nested.md
var frontmatter = void 0;
function _createMdxContent(props) {
	const _components = {
		a: "a",
		code: "code",
		em: "em",
		figure: "figure",
		h1: "h1",
		h2: "h2",
		li: "li",
		p: "p",
		pre: "pre",
		span: "span",
		ul: "ul",
		...props.components
	}, { CodeGroup, CodeGroupItem, Container } = _components;
	if (!CodeGroup) _missingMdxReference("CodeGroup", true);
	if (!CodeGroupItem) _missingMdxReference("CodeGroupItem", true);
	if (!Container) _missingMdxReference("Container", true);
	return jsxs(Fragment, { children: [
		jsxs(_components.h1, {
			id: "flat-vs-nested-structure",
			children: [jsx(_components.a, {
				className: "header-anchor",
				"aria-label": "Permalink to \"Flat vs. Nested Structure\"",
				href: "#flat-vs-nested-structure",
				children: jsx(_components.span, {
					"aria-hidden": "true",
					children: "#"
				})
			}), "Flat vs. Nested Structure"]
		}),
		"\n",
		jsxs(_components.p, { children: [
			"Kin Form doesn't force one tree shape for a nested value. You can build a form\nstructure that mirrors it exactly, with one ",
			jsx(_components.code, { children: "FieldApi" }),
			" per object/array level,\nor flatten some subtrees, or flatten the whole thing to dotted paths off the\nform root. The choice is made independently at each level, not picked for you.\nDefault to flat; reach for a nested field only where it needs its own node: its\nown ",
			jsx(_components.code, { children: "validators" }),
			"/",
			jsx(_components.code, { children: "schemaValidator" }),
			", its own aggregated ",
			jsx(_components.code, { children: "touched" }),
			"/",
			jsx(_components.code, { children: "invalid" }),
			", or\nstable per-item identity for a reorderable array."
		] }),
		"\n",
		jsxs(_components.p, { children: [
			"It's the same call a React app makes about where state lives: most of it doesn't\nneed to be in the root component, but the piece genuinely local to one part of\nthe tree owns itself there instead of being threaded down from the top. A Kin\nForm nested field is that same move applied to one slice of the form: ",
			jsx(_components.code, { children: "value" }),
			"\nstays one coherent object across the tree either way; a nested field just lets a\nslice of it additionally own its ",
			jsx(_components.em, { children: "own" }),
			" ",
			jsx(_components.code, { children: "error" }),
			"/",
			jsx(_components.code, { children: "touched" }),
			"/",
			jsx(_components.code, { children: "validating" }),
			" and\nvalidators, where that's worth it."
		] }),
		"\n",
		jsxs(_components.p, { children: [
			"Nested structure is native, not a workaround bolted onto a flat model, which is\nwhat makes it possible to pull a subtree into a reusable field component that\nonly needs to know its own slice of the form, not the whole shape. An\n",
			jsx(_components.code, { children: "AddressField" }),
			" built against ",
			jsx(_components.code, { children: "FieldApi<Address, TParentValue>" }),
			" works the same\nwhether it's mounted at ",
			jsx(_components.code, { children: "shipping" }),
			", ",
			jsx(_components.code, { children: "billing" }),
			", or any other path in any other\nform; see\n",
			jsxs(_components.a, {
				href: "/form/guide/form-composition#nested-fields-addressfield",
				children: ["Nested fields: ", jsx(_components.code, { children: "AddressField" })]
			}),
			"."
		] }),
		"\n",
		jsxs(_components.p, { children: [
			"Both examples below address the same model, using the ",
			jsx(_components.code, { children: "TextField" }),
			" from\n",
			jsx(_components.a, {
				href: "/form/guide/form-composition#leaf-fields-textfield-numberfield",
				children: "Form Composition"
			}),
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
									children: "type"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#3C4257" },
									children: " Item"
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
									children: "  code"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#3D6F94" },
									children: ":"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#3C4257" },
									children: " string;"
								})
							]
						}),
						"\n",
						jsxs(_components.span, {
							"data-line": "",
							children: [
								jsx(_components.span, {
									style: { "--shiki-light": "#1A6FB0" },
									children: "  quantity"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#3D6F94" },
									children: ":"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#3C4257" },
									children: " number;"
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
									children: "type"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#3C4257" },
									children: " Checkout"
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
									children: "  email"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#3D6F94" },
									children: ":"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#3C4257" },
									children: " string;"
								})
							]
						}),
						"\n",
						jsxs(_components.span, {
							"data-line": "",
							children: [
								jsx(_components.span, {
									style: { "--shiki-light": "#1A6FB0" },
									children: "  shipping"
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
							children: [
								jsx(_components.span, {
									style: { "--shiki-light": "#1A6FB0" },
									children: "    line1"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#3D6F94" },
									children: ":"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#3C4257" },
									children: " string;"
								})
							]
						}),
						"\n",
						jsxs(_components.span, {
							"data-line": "",
							children: [
								jsx(_components.span, {
									style: { "--shiki-light": "#1A6FB0" },
									children: "    city"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#3D6F94" },
									children: ":"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#3C4257" },
									children: " string;"
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
						jsxs(_components.span, {
							"data-line": "",
							children: [
								jsx(_components.span, {
									style: { "--shiki-light": "#1A6FB0" },
									children: "  items"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#3D6F94" },
									children: ":"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#3C4257" },
									children: " Item[];"
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
						})
					]
				})
			})
		}),
		"\n",
		jsxs(_components.h2, {
			id: "nested-a-field-per-level",
			children: [jsx(_components.a, {
				className: "header-anchor",
				"aria-label": "Permalink to \"Nested: a field per level\"",
				href: "#nested-a-field-per-level",
				children: jsx(_components.span, {
					"aria-hidden": "true",
					children: "#"
				})
			}), "Nested: a field per level"]
		}),
		"\n",
		jsxs(_components.p, { children: [
			"A ",
			jsx(_components.code, { children: "FieldApi" }),
			" per object/array level: ",
			jsx(_components.code, { children: "shipping" }),
			" and each ",
			jsx(_components.code, { children: "items" }),
			" entry are\nresolved nodes of their own, with ",
			jsx(_components.code, { children: "email" }),
			" staying a direct child of the form:"
		] }),
		"\n",
		jsx(_components.pre, { children: jsx(_components.code, { children: "FormApi<Checkout>\n├─ field(\"email\")      FieldApi<string>\n├─ field(\"shipping\")   FieldApi<{ line1: string; city: string }>\n│    ├─ field(\"line1\")  FieldApi<string>\n│    └─ field(\"city\")   FieldApi<string>\n└─ field(\"items\")      FieldApi<Item[]>\n     └─ field(\"0\")       FieldApi<Item>\n          ├─ field(\"code\")      FieldApi<string>\n          └─ field(\"quantity\")  FieldApi<number>\n" }) }),
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
										children: "<Checkout>({"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: " initialValue"
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
										style: { "--shiki-light": "#3D6F94" },
										children: "  const"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: " shippingGroup"
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
										children: "shipping"
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
										children: "        <"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#0F7D6C" },
										children: "legend"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: ">Shipping address</"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#0F7D6C" },
										children: "legend"
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
										children: "{shippingGroup"
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
										children: "{shippingGroup"
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
										children: "      </"
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
										children: "items"
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
										children: "items"
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
										children: "            {items"
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
										children: "              const"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: " item "
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3D6F94" },
										children: "="
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: " items"
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
									children: "              return"
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
										children: "                <"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#0F7D6C" },
										children: "div"
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
										children: "{item"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: "."
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "id}>"
									})
								]
							}),
							"\n",
							jsxs(_components.span, {
								"data-line": "",
								children: [
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "                  <"
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
										children: "{item"
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
										children: "code"
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
										children: "Code"
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
										children: "                  <"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#0F7D6C" },
										children: "NumberField"
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
										children: "{item"
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
										children: "quantity"
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
										children: "Quantity"
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
									style: { "--shiki-light": "#16233A" },
									children: "                  <"
								}), jsx(_components.span, {
									style: { "--shiki-light": "#0F7D6C" },
									children: "button"
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
										children: "                    type"
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
										children: "                    onClick"
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
										children: " items"
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
									children: "                  >"
								})
							}),
							"\n",
							jsx(_components.span, {
								"data-line": "",
								children: jsx(_components.span, {
									style: { "--shiki-light": "#16233A" },
									children: "                    Remove"
								})
							}),
							"\n",
							jsxs(_components.span, {
								"data-line": "",
								children: [
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "                  </"
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
										children: "                </"
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
									children: "              );"
								})
							}),
							"\n",
							jsxs(_components.span, {
								"data-line": "",
								children: [jsx(_components.span, {
									style: { "--shiki-light": "#3C4257" },
									children: "            })"
								}), jsx(_components.span, {
									style: { "--shiki-light": "#16233A" },
									children: "}"
								})]
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
									children: "            <"
								}), jsx(_components.span, {
									style: { "--shiki-light": "#0F7D6C" },
									children: "button"
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
										children: "button"
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
										children: "              onClick"
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
										children: " items"
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
										children: " {"
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
										style: { "--shiki-light": "#3C4257" },
										children: " \"\""
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: ","
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#1A6FB0" },
										children: " quantity"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: ":"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#9A5B13" },
										children: " 1"
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
							jsx(_components.span, {
								"data-line": "",
								children: jsx(_components.span, {
									style: { "--shiki-light": "#16233A" },
									children: "            >"
								})
							}),
							"\n",
							jsx(_components.span, {
								"data-line": "",
								children: jsx(_components.span, {
									style: { "--shiki-light": "#16233A" },
									children: "              Add item"
								})
							}),
							"\n",
							jsxs(_components.span, {
								"data-line": "",
								children: [
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "            </"
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
										style: { "--shiki-light": "#0F7D6C" },
										children: "import "
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: "{"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#1A6FB0" },
										children: " html"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: ","
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#1A6FB0" },
										children: " LitElement"
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
										children: "lit"
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
										children: " customElement"
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
										children: "lit/decorators.js"
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
										children: " repeat"
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
										children: "lit/directives/repeat.js"
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
										children: " FormApi"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: ","
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#1A6FB0" },
										children: " watch"
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
										children: "@kintools/form-lit"
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
										children: "\""
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#9A5B13" },
										children: "./text-field.ts"
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
										children: "\""
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#9A5B13" },
										children: "./number-field.ts"
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
										children: "checkout-form"
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
										children: " CheckoutForm"
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
										children: "<Checkout>({"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: " initialValue"
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
										style: { "--shiki-light": "#3C4257" },
										children: "  #shippingGroup "
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3D6F94" },
										children: "="
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
										children: "#form"
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
							jsxs(_components.span, {
								"data-line": "",
								children: [
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "        <"
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
										children: "          <"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#0F7D6C" },
										children: "legend"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: ">"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: "Shipping address"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "</"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#0F7D6C" },
										children: "legend"
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
									children: "          <"
								}), jsx(_components.span, {
									style: { "--shiki-light": "#0F7D6C" },
									children: "text-field"
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
										children: "            .api"
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
										children: "#shippingGroup"
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
										style: { "--shiki-light": "#0F7D6C" },
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
										children: "            label"
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
										children: "Line 1"
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
										style: { "--shiki-light": "#16233A" },
										children: "          ></"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#0F7D6C" },
										children: "text-field"
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
									children: "          <"
								}), jsx(_components.span, {
									style: { "--shiki-light": "#0F7D6C" },
									children: "text-field"
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
										children: "            .api"
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
										children: "#shippingGroup"
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
										style: { "--shiki-light": "#0F7D6C" },
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
										children: "            label"
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
										children: "City"
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
										style: { "--shiki-light": "#16233A" },
										children: "          ></"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#0F7D6C" },
										children: "text-field"
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
										children: "        </"
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
								children: " "
							}),
							"\n",
							jsxs(_components.span, {
								"data-line": "",
								children: [
									jsx(_components.span, {
										style: { "--shiki-light": "#0F7D6C" },
										children: "        ${"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "watch"
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
										style: {
											"--shiki-light": "#0F7D6C",
											"--shiki-light-font-style": "italic"
										},
										children: "          this"
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
										children: "),"
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
										style: { "--shiki-light": "#16233A" },
										children: "items"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: ") "
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
									children: "            html"
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
										style: { "--shiki-light": "#0F7D6C" },
										children: "              ${"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "repeat"
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
										style: { "--shiki-light": "#16233A" },
										children: "                items"
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
										children: "                ("
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "_item"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: ", "
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "i"
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
										children: " items"
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
										children: ")."
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "id"
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
										children: "                ("
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "_item"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: ", "
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "i"
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
							jsxs(_components.span, {
								"data-line": "",
								children: [
									jsx(_components.span, {
										style: { "--shiki-light": "#3D6F94" },
										children: "                  const"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: " item"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3D6F94" },
										children: " ="
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: " items"
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
								children: [
									jsx(_components.span, {
										style: { "--shiki-light": "#0F7D6C" },
										children: "                  return"
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
										children: "                    <"
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
									children: "                      <"
								}), jsx(_components.span, {
									style: { "--shiki-light": "#0F7D6C" },
									children: "text-field"
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
										children: "                        .api"
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
										children: "item"
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
										children: "code"
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
										children: "                        label"
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
										children: "Code"
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
										style: { "--shiki-light": "#16233A" },
										children: "                      ></"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#0F7D6C" },
										children: "text-field"
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
									children: "                      <"
								}), jsx(_components.span, {
									style: { "--shiki-light": "#0F7D6C" },
									children: "number-field"
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
										children: "                        .api"
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
										children: "item"
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
										children: "quantity"
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
										children: "                        label"
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
										children: "Quantity"
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
										style: { "--shiki-light": "#16233A" },
										children: "                      ></"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#0F7D6C" },
										children: "number-field"
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
									children: "                      <"
								}), jsx(_components.span, {
									style: { "--shiki-light": "#0F7D6C" },
									children: "button"
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
										children: "                        type"
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
										children: "button"
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
										children: "                        @click"
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
										style: { "--shiki-light": "#3C4257" },
										children: "()"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3D6F94" },
										children: " =>"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: " items"
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
										style: { "--shiki-light": "#0F7D6C" },
										children: "}"
									})
								]
							}),
							"\n",
							jsx(_components.span, {
								"data-line": "",
								children: jsx(_components.span, {
									style: { "--shiki-light": "#16233A" },
									children: "                      >"
								})
							}),
							"\n",
							jsx(_components.span, {
								"data-line": "",
								children: jsx(_components.span, {
									style: { "--shiki-light": "#3C4257" },
									children: "                        Remove"
								})
							}),
							"\n",
							jsxs(_components.span, {
								"data-line": "",
								children: [
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "                      </"
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
										children: "                    </"
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
									children: "                  `;"
								})
							}),
							"\n",
							jsx(_components.span, {
								"data-line": "",
								children: jsx(_components.span, {
									style: { "--shiki-light": "#3C4257" },
									children: "                },"
								})
							}),
							"\n",
							jsxs(_components.span, {
								"data-line": "",
								children: [jsx(_components.span, {
									style: { "--shiki-light": "#3C4257" },
									children: "              )"
								}), jsx(_components.span, {
									style: { "--shiki-light": "#0F7D6C" },
									children: "}"
								})]
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
									children: "              <"
								}), jsx(_components.span, {
									style: { "--shiki-light": "#0F7D6C" },
									children: "button"
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
										children: "                type"
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
										children: "button"
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
										children: "                @click"
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
										style: { "--shiki-light": "#3C4257" },
										children: "()"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3D6F94" },
										children: " =>"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: " items"
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
										children: " {"
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
										style: { "--shiki-light": "#3C4257" },
										children: " \"\""
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: ","
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#1A6FB0" },
										children: " quantity"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: ":"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#9A5B13" },
										children: " 1"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: " })"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#0F7D6C" },
										children: "}"
									})
								]
							}),
							"\n",
							jsx(_components.span, {
								"data-line": "",
								children: jsx(_components.span, {
									style: { "--shiki-light": "#16233A" },
									children: "              >"
								})
							}),
							"\n",
							jsx(_components.span, {
								"data-line": "",
								children: jsx(_components.span, {
									style: { "--shiki-light": "#3C4257" },
									children: "                Add item"
								})
							}),
							"\n",
							jsxs(_components.span, {
								"data-line": "",
								children: [
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "              </"
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
									children: "            `,"
								})
							}),
							"\n",
							jsxs(_components.span, {
								"data-line": "",
								children: [jsx(_components.span, {
									style: { "--shiki-light": "#3C4257" },
									children: "        )"
								}), jsx(_components.span, {
									style: { "--shiki-light": "#0F7D6C" },
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
		jsxs(_components.p, { children: [
			"Each level is its own node: ",
			jsx(_components.code, { children: "shippingGroup.invalid" }),
			"/",
			jsx(_components.code, { children: "shippingGroup.touched" }),
			"\naggregate from just its own children, and ",
			jsx(_components.code, { children: "shippingGroup" }),
			" can carry ",
			jsx(_components.code, { children: "validators" }),
			"\nor a ",
			jsx(_components.code, { children: "schemaValidator" }),
			" scoped to the address alone. See\n",
			jsx(_components.a, {
				href: "/form/guide/nested-objects",
				children: "Nested Objects"
			}),
			" and\n",
			jsx(_components.a, {
				href: "/form/guide/form-composition#nested-fields-addressfield",
				children: "Form Composition"
			}),
			" for\nbuilding reusable ",
			jsx(_components.code, { children: "AddressField" }),
			"/",
			jsx(_components.code, { children: "ItemsField" }),
			" components."
		] }),
		"\n",
		jsxs(_components.h2, {
			id: "flat-dotted-paths-off-the-root",
			children: [jsx(_components.a, {
				className: "header-anchor",
				"aria-label": "Permalink to \"Flat: dotted paths off the root\"",
				href: "#flat-dotted-paths-off-the-root",
				children: jsx(_components.span, {
					"aria-hidden": "true",
					children: "#"
				})
			}), "Flat: dotted paths off the root"]
		}),
		"\n",
		jsxs(_components.p, { children: [
			"No intermediate ",
			jsx(_components.code, { children: "shipping" }),
			" or ",
			jsx(_components.code, { children: "items.0" }),
			" node is ever resolved: every leaf is a\ndirect child of the form, addressed by its full dotted path."
		] }),
		"\n",
		jsx(_components.pre, { children: jsx(_components.code, { children: "FormApi<Checkout>\n├─ field(\"email\")             FieldApi<string>\n├─ field(\"shipping.line1\")    FieldApi<string>\n├─ field(\"shipping.city\")     FieldApi<string>\n├─ field(\"items.0.code\")      FieldApi<string>\n└─ field(\"items.0.quantity\")  FieldApi<number>\n" }) }),
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
										children: "<Checkout>({"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: " initialValue"
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
								children: [
									jsx(_components.span, {
										style: { "--shiki-light": "#3D6F94" },
										children: "  const"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: " addItem"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3D6F94" },
										children: " ="
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: " useCallback"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: "(() "
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
										children: "pushItem"
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
										children: ", {"
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
										style: { "--shiki-light": "#3C4257" },
										children: " \"\""
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: ","
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#1A6FB0" },
										children: " quantity"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: ":"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#9A5B13" },
										children: " 1"
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
										style: { "--shiki-light": "#3C4257" },
										children: "  }, ["
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "form"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: "]);"
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
										children: "        <"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#0F7D6C" },
										children: "legend"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: ">Shipping address</"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#0F7D6C" },
										children: "legend"
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
										children: "shipping.line1"
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
										children: "shipping.city"
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
										children: "      </"
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
										children: "value"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: "."
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "items}>"
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
										children: "form"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: ","
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: " items"
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
										children: "            {items"
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
										children: "              <"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#0F7D6C" },
										children: "div"
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
										children: "{i}>"
									})
								]
							}),
							"\n",
							jsxs(_components.span, {
								"data-line": "",
								children: [jsx(_components.span, {
									style: { "--shiki-light": "#16233A" },
									children: "                <"
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
										children: "                  api"
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
										children: "`"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#9A5B13" },
										children: "items."
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
										children: ".code"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: "`"
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
										style: {
											"--shiki-light": "#3D6F94",
											"--shiki-light-font-style": "italic"
										},
										children: "                  label"
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
										children: "Code"
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
									children: "                />"
								})
							}),
							"\n",
							jsxs(_components.span, {
								"data-line": "",
								children: [jsx(_components.span, {
									style: { "--shiki-light": "#16233A" },
									children: "                <"
								}), jsx(_components.span, {
									style: { "--shiki-light": "#0F7D6C" },
									children: "NumberField"
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
										children: "                  api"
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
										children: "`"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#9A5B13" },
										children: "items."
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
										children: ".quantity"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: "`"
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
										style: {
											"--shiki-light": "#3D6F94",
											"--shiki-light-font-style": "italic"
										},
										children: "                  label"
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
										children: "Quantity"
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
									children: "                />"
								})
							}),
							"\n",
							jsxs(_components.span, {
								"data-line": "",
								children: [
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "                <"
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
										children: " form"
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
										style: { "--shiki-light": "#16233A" },
										children: " i"
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
							jsx(_components.span, {
								"data-line": "",
								children: jsx(_components.span, {
									style: { "--shiki-light": "#16233A" },
									children: "                  Remove"
								})
							}),
							"\n",
							jsxs(_components.span, {
								"data-line": "",
								children: [
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "                </"
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
										children: "              </"
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
									style: { "--shiki-light": "#3C4257" },
									children: "            ))"
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
										children: "            <"
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
										children: "{addItem}>"
									})
								]
							}),
							"\n",
							jsx(_components.span, {
								"data-line": "",
								children: jsx(_components.span, {
									style: { "--shiki-light": "#16233A" },
									children: "              Add item"
								})
							}),
							"\n",
							jsxs(_components.span, {
								"data-line": "",
								children: [
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "            </"
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
										style: { "--shiki-light": "#0F7D6C" },
										children: "import "
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: "{"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#1A6FB0" },
										children: " html"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: ","
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#1A6FB0" },
										children: " LitElement"
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
										children: "lit"
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
										children: " customElement"
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
										children: "lit/decorators.js"
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
										children: " repeat"
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
										children: "lit/directives/repeat.js"
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
										children: " FormApi"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: ","
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#1A6FB0" },
										children: " watch"
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
										children: "@kintools/form-lit"
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
										children: "\""
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#9A5B13" },
										children: "./text-field.ts"
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
										children: "\""
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#9A5B13" },
										children: "./number-field.ts"
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
										children: "checkout-form"
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
										children: " CheckoutForm"
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
										children: "<Checkout>({"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: " initialValue"
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
								children: [
									jsx(_components.span, {
										style: { "--shiki-light": "#0F7D6C" },
										children: "  readonly"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#1A6FB0" },
										children: " #addItem"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3D6F94" },
										children: " ="
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
							jsxs(_components.span, {
								"data-line": "",
								children: [
									jsx(_components.span, {
										style: {
											"--shiki-light": "#0F7D6C",
											"--shiki-light-font-style": "italic"
										},
										children: "    this"
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
										children: "pushItem"
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
										children: ", {"
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
										style: { "--shiki-light": "#3C4257" },
										children: " \"\""
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: ","
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#1A6FB0" },
										children: " quantity"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: ":"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#9A5B13" },
										children: " 1"
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
							jsxs(_components.span, {
								"data-line": "",
								children: [
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "        <"
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
										children: "          <"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#0F7D6C" },
										children: "legend"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: ">"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: "Shipping address"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "</"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#0F7D6C" },
										children: "legend"
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
									children: "          <"
								}), jsx(_components.span, {
									style: { "--shiki-light": "#0F7D6C" },
									children: "text-field"
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
										children: "            .api"
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
										children: "shipping.line1"
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
										style: { "--shiki-light": "#3C4257" },
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
							jsxs(_components.span, {
								"data-line": "",
								children: [
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "          ></"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#0F7D6C" },
										children: "text-field"
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
									children: "          <"
								}), jsx(_components.span, {
									style: { "--shiki-light": "#0F7D6C" },
									children: "text-field"
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
										children: "            .api"
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
										children: "shipping.city"
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
										style: { "--shiki-light": "#3C4257" },
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
							jsxs(_components.span, {
								"data-line": "",
								children: [
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "          ></"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#0F7D6C" },
										children: "text-field"
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
										children: "        </"
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
								children: " "
							}),
							"\n",
							jsxs(_components.span, {
								"data-line": "",
								children: [
									jsx(_components.span, {
										style: { "--shiki-light": "#0F7D6C" },
										children: "        ${"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "watch"
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
										style: {
											"--shiki-light": "#0F7D6C",
											"--shiki-light-font-style": "italic"
										},
										children: "          this"
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
										children: "          ("
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
										style: { "--shiki-light": "#16233A" },
										children: " f"
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
										children: "items"
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
										children: "          ("
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
										style: { "--shiki-light": "#16233A" },
										children: "items"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: ") "
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
									children: "            html"
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
										style: { "--shiki-light": "#0F7D6C" },
										children: "              ${"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "repeat"
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
									children: "                items"
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
										children: "                ("
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "_item"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: ", "
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "i"
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
										children: " i"
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
										children: "                ("
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "_item"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: ", "
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "i"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: ") "
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
									children: "                  html"
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
										children: "                    <"
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
									children: "                      <"
								}), jsx(_components.span, {
									style: { "--shiki-light": "#0F7D6C" },
									children: "text-field"
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
										children: "                        .api"
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
										children: "`"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#9A5B13" },
										children: "items."
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
										children: ".code"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: "`"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: ")"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#0F7D6C" },
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
										children: "                        label"
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
										children: "Code"
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
										style: { "--shiki-light": "#16233A" },
										children: "                      ></"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#0F7D6C" },
										children: "text-field"
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
									children: "                      <"
								}), jsx(_components.span, {
									style: { "--shiki-light": "#0F7D6C" },
									children: "number-field"
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
										children: "                        .api"
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
										children: "`"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#9A5B13" },
										children: "items."
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
										children: ".quantity"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: "`"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: ")"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#0F7D6C" },
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
										children: "                        label"
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
										children: "Quantity"
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
										style: { "--shiki-light": "#16233A" },
										children: "                      ></"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#0F7D6C" },
										children: "number-field"
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
									children: "                      <"
								}), jsx(_components.span, {
									style: { "--shiki-light": "#0F7D6C" },
									children: "button"
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
										children: "                        type"
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
										children: "button"
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
										children: "                        @click"
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
										style: { "--shiki-light": "#3C4257" },
										children: "()"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3D6F94" },
										children: " =>"
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
										children: "removeItem"
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
										style: { "--shiki-light": "#16233A" },
										children: " i"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: ")"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#0F7D6C" },
										children: "}"
									})
								]
							}),
							"\n",
							jsx(_components.span, {
								"data-line": "",
								children: jsx(_components.span, {
									style: { "--shiki-light": "#16233A" },
									children: "                      >"
								})
							}),
							"\n",
							jsx(_components.span, {
								"data-line": "",
								children: jsx(_components.span, {
									style: { "--shiki-light": "#3C4257" },
									children: "                        Remove"
								})
							}),
							"\n",
							jsxs(_components.span, {
								"data-line": "",
								children: [
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "                      </"
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
										children: "                    </"
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
									children: "                  `,"
								})
							}),
							"\n",
							jsxs(_components.span, {
								"data-line": "",
								children: [jsx(_components.span, {
									style: { "--shiki-light": "#3C4257" },
									children: "              )"
								}), jsx(_components.span, {
									style: { "--shiki-light": "#0F7D6C" },
									children: "}"
								})]
							}),
							"\n",
							jsxs(_components.span, {
								"data-line": "",
								children: [
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "              <"
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
										children: " @click"
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
										children: "#addItem"
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
										children: "Add item"
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
									children: "            `,"
								})
							}),
							"\n",
							jsxs(_components.span, {
								"data-line": "",
								children: [jsx(_components.span, {
									style: { "--shiki-light": "#3C4257" },
									children: "        )"
								}), jsx(_components.span, {
									style: { "--shiki-light": "#0F7D6C" },
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
		jsxs(_components.p, { children: [
			"There's no ",
			jsx(_components.code, { children: "shipping" }),
			"-level or ",
			jsx(_components.code, { children: "items" }),
			"-level aggregate state: every field\nreports directly to ",
			jsx(_components.code, { children: "form" }),
			". See\n",
			jsx(_components.a, {
				href: "/form/guide/nested-objects#resolve-the-intermediate-field-first",
				children: "Resolve the intermediate field first"
			}),
			"."
		] }),
		"\n",
		jsxs(Container, {
			type: "tip",
			children: [
				jsxs(_components.p, { children: [
					"The ",
					jsx(_components.a, {
						href: "/form/guide/dynamic-arrays",
						children: "array mutation helpers"
					}),
					" still work without\nresolving ",
					jsx(_components.code, { children: "items" }),
					" as its own field: they only need the array's name, not a\nresolved node, e.g. ",
					jsx(_components.code, { children: "form.pushItem(\"items\", { code: \"\", quantity: 1 })" }),
					". What's\nmissing is a stable per-item key, since that only exists on a resolved\n",
					jsx(_components.code, { children: "FieldApi" }),
					"."
				] }),
				jsxs(_components.p, { children: [
					"If reordering is needed, stamp one on yourself. A ",
					jsx(_components.code, { children: "Symbol" }),
					"-keyed property stays\nout of ",
					jsx(_components.code, { children: "Object.keys" }),
					"/",
					jsx(_components.code, { children: "JSON.stringify" }),
					" (so it won't leak into submission or trip\nup a schema's ",
					jsx(_components.code, { children: ".strict()" }),
					"), unlike a regular field:"
				] }),
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
												children: "let"
											}),
											jsx(_components.span, {
												style: { "--shiki-light": "#16233A" },
												children: " itemKey"
											}),
											jsx(_components.span, {
												style: { "--shiki-light": "#3D6F94" },
												children: " ="
											}),
											jsx(_components.span, {
												style: { "--shiki-light": "#9A5B13" },
												children: " 0"
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
												children: "const"
											}),
											jsx(_components.span, {
												style: { "--shiki-light": "#16233A" },
												children: " ITEM_KEY"
											}),
											jsx(_components.span, {
												style: { "--shiki-light": "#3D6F94" },
												children: " ="
											}),
											jsx(_components.span, {
												style: { "--shiki-light": "#16233A" },
												children: " Symbol"
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
												children: " Item"
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
												children: "  code"
											}),
											jsx(_components.span, {
												style: { "--shiki-light": "#3D6F94" },
												children: ":"
											}),
											jsx(_components.span, {
												style: { "--shiki-light": "#3C4257" },
												children: " string;"
											})
										]
									}),
									"\n",
									jsxs(_components.span, {
										"data-line": "",
										children: [
											jsx(_components.span, {
												style: { "--shiki-light": "#1A6FB0" },
												children: "  quantity"
											}),
											jsx(_components.span, {
												style: { "--shiki-light": "#3D6F94" },
												children: ":"
											}),
											jsx(_components.span, {
												style: { "--shiki-light": "#3C4257" },
												children: " number;"
											})
										]
									}),
									"\n",
									jsxs(_components.span, {
										"data-line": "",
										children: [
											jsx(_components.span, {
												style: { "--shiki-light": "#3C4257" },
												children: "  ["
											}),
											jsx(_components.span, {
												style: { "--shiki-light": "#16233A" },
												children: "ITEM_KEY"
											}),
											jsx(_components.span, {
												style: { "--shiki-light": "#3C4257" },
												children: "]"
											}),
											jsx(_components.span, {
												style: { "--shiki-light": "#3D6F94" },
												children: ":"
											}),
											jsx(_components.span, {
												style: { "--shiki-light": "#3C4257" },
												children: " number;"
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
												children: "const"
											}),
											jsx(_components.span, {
												style: { "--shiki-light": "#16233A" },
												children: " addItem"
											}),
											jsx(_components.span, {
												style: { "--shiki-light": "#3D6F94" },
												children: " ="
											}),
											jsx(_components.span, {
												style: { "--shiki-light": "#16233A" },
												children: " useCallback"
											}),
											jsx(_components.span, {
												style: { "--shiki-light": "#3C4257" },
												children: "(() "
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
										children: [
											jsx(_components.span, {
												style: { "--shiki-light": "#16233A" },
												children: "  form"
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
												children: ", {"
											})
										]
									}),
									"\n",
									jsxs(_components.span, {
										"data-line": "",
										children: [
											jsx(_components.span, {
												style: { "--shiki-light": "#1A6FB0" },
												children: "    code"
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
											})
										]
									}),
									"\n",
									jsxs(_components.span, {
										"data-line": "",
										children: [
											jsx(_components.span, {
												style: { "--shiki-light": "#1A6FB0" },
												children: "    quantity"
											}),
											jsx(_components.span, {
												style: { "--shiki-light": "#3C4257" },
												children: ":"
											}),
											jsx(_components.span, {
												style: { "--shiki-light": "#9A5B13" },
												children: " 1"
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
												children: "    ["
											}),
											jsx(_components.span, {
												style: { "--shiki-light": "#16233A" },
												children: "ITEM_KEY"
											}),
											jsx(_components.span, {
												style: { "--shiki-light": "#3C4257" },
												children: "]:"
											}),
											jsx(_components.span, {
												style: { "--shiki-light": "#3D6F94" },
												children: " ++"
											}),
											jsx(_components.span, {
												style: { "--shiki-light": "#16233A" },
												children: "itemKey"
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
									jsxs(_components.span, {
										"data-line": "",
										children: [
											jsx(_components.span, {
												style: { "--shiki-light": "#3C4257" },
												children: "}, ["
											}),
											jsx(_components.span, {
												style: { "--shiki-light": "#16233A" },
												children: "form"
											}),
											jsx(_components.span, {
												style: { "--shiki-light": "#3C4257" },
												children: "]);"
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
												children: "<"
											}),
											jsx(_components.span, {
												style: { "--shiki-light": "#0F7D6C" },
												children: "div"
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
												children: "{item"
											}),
											jsx(_components.span, {
												style: { "--shiki-light": "#3C4257" },
												children: "["
											}),
											jsx(_components.span, {
												style: { "--shiki-light": "#16233A" },
												children: "ITEM_KEY"
											}),
											jsx(_components.span, {
												style: { "--shiki-light": "#3C4257" },
												children: "]"
											}),
											jsx(_components.span, {
												style: { "--shiki-light": "#16233A" },
												children: "}>"
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
												children: "let"
											}),
											jsx(_components.span, {
												style: { "--shiki-light": "#16233A" },
												children: " itemKey"
											}),
											jsx(_components.span, {
												style: { "--shiki-light": "#3D6F94" },
												children: " ="
											}),
											jsx(_components.span, {
												style: { "--shiki-light": "#9A5B13" },
												children: " 0"
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
												children: "const"
											}),
											jsx(_components.span, {
												style: { "--shiki-light": "#16233A" },
												children: " ITEM_KEY"
											}),
											jsx(_components.span, {
												style: { "--shiki-light": "#3D6F94" },
												children: " ="
											}),
											jsx(_components.span, {
												style: { "--shiki-light": "#16233A" },
												children: " Symbol"
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
												children: " Item"
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
												children: "  code"
											}),
											jsx(_components.span, {
												style: { "--shiki-light": "#3D6F94" },
												children: ":"
											}),
											jsx(_components.span, {
												style: { "--shiki-light": "#3C4257" },
												children: " string;"
											})
										]
									}),
									"\n",
									jsxs(_components.span, {
										"data-line": "",
										children: [
											jsx(_components.span, {
												style: { "--shiki-light": "#1A6FB0" },
												children: "  quantity"
											}),
											jsx(_components.span, {
												style: { "--shiki-light": "#3D6F94" },
												children: ":"
											}),
											jsx(_components.span, {
												style: { "--shiki-light": "#3C4257" },
												children: " number;"
											})
										]
									}),
									"\n",
									jsxs(_components.span, {
										"data-line": "",
										children: [
											jsx(_components.span, {
												style: { "--shiki-light": "#3C4257" },
												children: "  ["
											}),
											jsx(_components.span, {
												style: { "--shiki-light": "#16233A" },
												children: "ITEM_KEY"
											}),
											jsx(_components.span, {
												style: { "--shiki-light": "#3C4257" },
												children: "]"
											}),
											jsx(_components.span, {
												style: { "--shiki-light": "#3D6F94" },
												children: ":"
											}),
											jsx(_components.span, {
												style: { "--shiki-light": "#3C4257" },
												children: " number;"
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
											children: "// A stable class-field reference needs no dependency array, unlike useCallback."
										})
									}),
									"\n",
									jsxs(_components.span, {
										"data-line": "",
										children: [
											jsx(_components.span, {
												style: { "--shiki-light": "#16233A" },
												children: "readonly"
											}),
											jsx(_components.span, {
												style: { "--shiki-light": "#3C4257" },
												children: " #"
											}),
											jsx(_components.span, {
												style: { "--shiki-light": "#1A6FB0" },
												children: "addItem"
											}),
											jsx(_components.span, {
												style: { "--shiki-light": "#3D6F94" },
												children: " ="
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
									jsxs(_components.span, {
										"data-line": "",
										children: [
											jsx(_components.span, {
												style: {
													"--shiki-light": "#0F7D6C",
													"--shiki-light-font-style": "italic"
												},
												children: "  this"
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
												children: "pushItem"
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
												children: ", {"
											})
										]
									}),
									"\n",
									jsxs(_components.span, {
										"data-line": "",
										children: [
											jsx(_components.span, {
												style: { "--shiki-light": "#1A6FB0" },
												children: "    code"
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
											})
										]
									}),
									"\n",
									jsxs(_components.span, {
										"data-line": "",
										children: [
											jsx(_components.span, {
												style: { "--shiki-light": "#1A6FB0" },
												children: "    quantity"
											}),
											jsx(_components.span, {
												style: { "--shiki-light": "#3C4257" },
												children: ":"
											}),
											jsx(_components.span, {
												style: { "--shiki-light": "#9A5B13" },
												children: " 1"
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
												children: "    ["
											}),
											jsx(_components.span, {
												style: { "--shiki-light": "#16233A" },
												children: "ITEM_KEY"
											}),
											jsx(_components.span, {
												style: { "--shiki-light": "#3C4257" },
												children: "]:"
											}),
											jsx(_components.span, {
												style: { "--shiki-light": "#3D6F94" },
												children: " ++"
											}),
											jsx(_components.span, {
												style: { "--shiki-light": "#16233A" },
												children: "itemKey"
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
											children: "// repeat(items, (item) => item[ITEM_KEY], ...)"
										})
									})
								]
							})
						})
					})
				})] })
			]
		}),
		"\n",
		jsxs(_components.h2, {
			id: "schemavalidator-works-either-way",
			children: [
				jsx(_components.a, {
					className: "header-anchor",
					"aria-label": "Permalink to \"schemaValidator works either way\"",
					href: "#schemavalidator-works-either-way",
					children: jsx(_components.span, {
						"aria-hidden": "true",
						children: "#"
					})
				}),
				jsx(_components.code, { children: "schemaValidator" }),
				" works either way"
			]
		}),
		"\n",
		jsxs(_components.p, { children: [
			"A ",
			jsx(_components.a, {
				href: "/form/guide/schema-validation",
				children: "schema validator"
			}),
			" checks the whole tree in one\npass and already produces a flat, dot-joined path -> message map\n(",
			jsx(_components.code, { children: "schemaErrorMap" }),
			"); ",
			jsx(_components.code, { children: "field.schemaError" }),
			" reads a field's own slice by walking up\nthrough any intermediate fields to find it. So unlike hand-written per-field\n",
			jsx(_components.code, { children: "validators" }),
			", a ",
			jsx(_components.code, { children: "schemaValidator" }),
			" doesn't push you toward one shape over the\nother: nest where it's worth its own ",
			jsx(_components.code, { children: "validators" }),
			"/aggregate ",
			jsx(_components.code, { children: "touched" }),
			"/",
			jsx(_components.code, { children: "invalid" }),
			",\nstay flat where it isn't, without worrying about where the schema was attached."
		] }),
		"\n",
		jsxs(_components.p, { children: [
			"Hand-written per-field ",
			jsx(_components.code, { children: "validators" }),
			" don't have that shortcut: a node boundary is\nthe only way to scope aggregate ",
			jsx(_components.code, { children: "invalid" }),
			"/",
			jsx(_components.code, { children: "touched" }),
			" to a subtree, or attach a\ncross-field validator to just that subtree. That's where nested structure earns\nits keep."
		] }),
		"\n",
		jsxs(_components.h2, {
			id: "mixing-the-two",
			children: [jsx(_components.a, {
				className: "header-anchor",
				"aria-label": "Permalink to \"Mixing the two\"",
				href: "#mixing-the-two",
				children: jsx(_components.span, {
					"aria-hidden": "true",
					children: "#"
				})
			}), "Mixing the two"]
		}),
		"\n",
		jsxs(_components.p, { children: [
			"Nothing stops you from resolving some levels as their own nested fields and\nleaving others flat in the same tree, e.g. keep ",
			jsx(_components.code, { children: "shipping" }),
			" as its own field (its\nown validators, its own \"please fix the address\" banner) while leaving ",
			jsx(_components.code, { children: "items" }),
			"\nflat because item-level errors are read straight off a schema's\n",
			jsx(_components.code, { children: "schemaErrorMap" }),
			". That's the default outcome, not a special case: most real\nforms end up a mix, the same way most React trees mix lifted and component-local\nstate without it being notable."
		] }),
		"\n",
		jsx(_components.pre, { children: jsx(_components.code, { children: "FormApi<Checkout>\n├─ field(\"email\")             FieldApi<string>\n├─ field(\"shipping\")          FieldApi<{ line1: string; city: string }>\n│    ├─ field(\"line1\")        FieldApi<string>\n│    └─ field(\"city\")         FieldApi<string>\n├─ field(\"items.0.code\")      FieldApi<string>\n└─ field(\"items.0.quantity\")  FieldApi<number>\n" }) }),
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
			jsxs(_components.li, { children: [
				jsx(_components.a, {
					href: "/form/guide/nested-objects",
					children: "Nested Objects"
				}),
				" and\n",
				jsx(_components.a, {
					href: "/form/guide/dynamic-arrays",
					children: "Dynamic Arrays"
				}),
				" — everything the child registry\nadds"
			] }),
			"\n",
			jsxs(_components.li, { children: [
				jsx(_components.a, {
					href: "/form/guide/schema-validation",
					children: "Schema Validation"
				}),
				" — ",
				jsx(_components.code, { children: "schemaErrorMap" }),
				", and how\n",
				jsx(_components.code, { children: "schemaError" }),
				" resolves through nested fields"
			] }),
			"\n",
			jsxs(_components.li, { children: [jsx(_components.a, {
				href: "/form/guide/form-composition",
				children: "Form Composition"
			}), " — reusable field components\nfor either shape"] }),
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
