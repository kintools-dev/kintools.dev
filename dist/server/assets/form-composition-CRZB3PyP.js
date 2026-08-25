import { Fragment, jsx, jsxs } from "react/jsx-runtime";
//#region ../form/docs/guide/form-composition.md
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
		p: "p",
		pre: "pre",
		span: "span",
		...props.components
	}, { CodeGroup, CodeGroupItem, FrameworkSlot, FrameworkText } = _components;
	if (!CodeGroup) _missingMdxReference("CodeGroup", true);
	if (!CodeGroupItem) _missingMdxReference("CodeGroupItem", true);
	if (!FrameworkSlot) _missingMdxReference("FrameworkSlot", true);
	if (!FrameworkText) _missingMdxReference("FrameworkText", true);
	return jsxs(Fragment, { children: [
		jsxs(_components.h1, {
			id: "form-composition",
			children: [jsx(_components.a, {
				className: "header-anchor",
				"aria-label": "Permalink to \"Form Composition\"",
				href: "#form-composition",
				children: jsx(_components.span, {
					"aria-hidden": "true",
					children: "#"
				})
			}), "Form Composition"]
		}),
		"\n",
		jsxs(FrameworkText, { children: [jsx(FrameworkSlot, {
			name: "react",
			children: jsxs(_components.p, { children: [
				jsx(_components.code, { children: "Watch" }),
				" is convenient for a field that appears once, but repeating a render prop\ndoesn't scale past a couple of fields. For anything reused (a text input, an\naddress block, a line-item list, a submit button), build a named, typed\ncomponent around ",
				jsx(_components.code, { children: "useWatch" }),
				" once and reuse it."
			] })
		}), jsx(FrameworkSlot, {
			name: "lit",
			children: jsxs(_components.p, { children: [
				jsx(_components.code, { children: "watch" }),
				" is convenient for a field that appears once, but repeating it doesn't\nscale past a couple of fields. For anything reused (a text input, an address\nblock, a line-item list, a submit button), build a named custom element around\n",
				jsx(_components.code, { children: "WatchController" }),
				" once and reuse it."
			] })
		})] }),
		"\n",
		jsxs(_components.h2, {
			id: "leaf-fields-textfield-numberfield",
			children: [
				jsx(_components.a, {
					className: "header-anchor",
					"aria-label": "Permalink to \"Leaf fields: TextField, NumberField\"",
					href: "#leaf-fields-textfield-numberfield",
					children: jsx(_components.span, {
						"aria-hidden": "true",
						children: "#"
					})
				}),
				"Leaf fields: ",
				jsx(_components.code, { children: "TextField" }),
				", ",
				jsx(_components.code, { children: "NumberField" })
			]
		}),
		"\n",
		jsxs(_components.p, { children: [
			jsx(_components.a, {
				href: "/form/guide/basic",
				children: "Basic"
			}),
			" builds ",
			jsx(_components.code, { children: "TextField" }),
			" from scratch. ",
			jsx(_components.code, { children: "NumberField" }),
			"\nfollows the same recipe, differing only in the input's markup and value parsing.\nOnce these exist, a form body reads as configuration rather than repeated\nwiring:"
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
										style: { "--shiki-light": "#3C4257" },
										children: " ["
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "required"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: "(),"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: " email"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: "()]"
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
							jsx(_components.span, {
								"data-line": "",
								children: jsx(_components.span, {
									style: { "--shiki-light": "#16233A" },
									children: "/>"
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
										children: "age"
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
										children: "Age"
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
									style: {
										"--shiki-light": "#A83A1C",
										"--shiki-light-font-style": "italic"
									},
									children: "html"
								}), jsx(_components.span, {
									style: { "--shiki-light": "#3C4257" },
									children: "`"
								})]
							}),
							"\n",
							jsxs(_components.span, {
								"data-line": "",
								children: [jsx(_components.span, {
									style: { "--shiki-light": "#16233A" },
									children: "  <"
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
										children: "    .api"
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
										style: { "--shiki-light": "#3C4257" },
										children: " ["
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "required"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: "(),"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: " email"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: "()]"
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
							jsxs(_components.span, {
								"data-line": "",
								children: [
									jsx(_components.span, {
										style: {
											"--shiki-light": "#3D6F94",
											"--shiki-light-font-style": "italic"
										},
										children: "    label"
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
								children: [
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "  ></"
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
										children: "  <"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#0F7D6C" },
										children: "number-field"
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
										children: "age"
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
										children: "Age"
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
										children: "number-field"
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
									children: "`;"
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
				"Both take an already-resolved ",
				jsx(_components.code, { children: "api: FieldApi<TValue, TParentValue>" }),
				" rather than\n",
				jsx(_components.code, { children: "parent" }),
				"+",
				jsx(_components.code, { children: "name" }),
				": the caller resolves the field (and its ",
				jsx(_components.code, { children: "validators" }),
				",\n",
				jsx(_components.code, { children: "dependents" }),
				", ...) once, at the call site, via ",
				jsx(_components.code, { children: "parent.field(name, options)" }),
				".\n",
				jsx(_components.code, { children: "TextField" }),
				"/",
				jsx(_components.code, { children: "NumberField" }),
				" only need to know they're rendering ",
				jsx(_components.em, { children: "some" }),
				"\n",
				jsx(_components.code, { children: "FieldApi<string, TParentValue>" }),
				"/",
				jsx(_components.code, { children: "FieldApi<number, TParentValue>" }),
				", not where in\nthe tree it lives or how it was configured."
			] })
		}), jsx(FrameworkSlot, {
			name: "lit",
			children: jsxs(_components.p, { children: [
				"Both take an already-resolved ",
				jsx(_components.code, { children: ".api: FieldApi<TValue, unknown>" }),
				" property rather\nthan ",
				jsx(_components.code, { children: "parent" }),
				"+",
				jsx(_components.code, { children: "name" }),
				": the caller resolves the field (and its ",
				jsx(_components.code, { children: "validators" }),
				",\n",
				jsx(_components.code, { children: "dependents" }),
				", ...) once, at the call site, via ",
				jsx(_components.code, { children: "parent.field(name, options)" }),
				".\n",
				jsx(_components.code, { children: "text-field" }),
				"/",
				jsx(_components.code, { children: "number-field" }),
				" only need to know they're rendering ",
				jsx(_components.em, { children: "some" }),
				"\n",
				jsx(_components.code, { children: "FieldApi<string, unknown>" }),
				"/",
				jsx(_components.code, { children: "FieldApi<number, unknown>" }),
				", not where in the tree\nit lives or how it was configured."
			] })
		})] }),
		"\n",
		jsxs(_components.h2, {
			id: "nested-fields-addressfield",
			children: [
				jsx(_components.a, {
					className: "header-anchor",
					"aria-label": "Permalink to \"Nested fields: AddressField\"",
					href: "#nested-fields-addressfield",
					children: jsx(_components.span, {
						"aria-hidden": "true",
						children: "#"
					})
				}),
				"Nested fields: ",
				jsx(_components.code, { children: "AddressField" })
			]
		}),
		"\n",
		jsxs(_components.p, { children: [
			"A component composes fields (leaf or nested) under its own slice of the value,\nas a resolved field. It doesn't need the dotted path leading to it, only that it\nowns an ",
			jsx(_components.code, { children: "Address" }),
			":"
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
										children: " FieldApi<Address, TParentValue> }"
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
										children: ","
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#1A6FB0" },
										children: " property"
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
										children: "address-field"
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
										children: " AddressField"
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
										children: "  @"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "property"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: "({"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#1A6FB0" },
										children: " attribute"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: ":"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#B23370" },
										children: " false"
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
										style: { "--shiki-light": "#3D6F94" },
										children: "  accessor"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: " api"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3D6F94" },
										children: "!:"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: " FieldApi<Address, unknown>;"
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
										children: "api"
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
										children: "Line 1"
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
										children: "api"
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
										children: "City"
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
									children: "// Usage."
								})
							}),
							"\n",
							jsxs(_components.span, {
								"data-line": "",
								children: [jsx(_components.span, {
									style: {
										"--shiki-light": "#A83A1C",
										"--shiki-light-font-style": "italic"
									},
									children: "html"
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
										children: "  <"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#0F7D6C" },
										children: "address-field"
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
										style: { "--shiki-light": "#0F7D6C" },
										children: "}"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "></"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#0F7D6C" },
										children: "address-field"
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
										children: "address-field"
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
										style: { "--shiki-light": "#0F7D6C" },
										children: "}"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "></"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#0F7D6C" },
										children: "address-field"
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
									children: "`;"
								})
							})
						]
					})
				})
			})
		})] }),
		"\n",
		jsxs(_components.h3, {
			id: "reacting-to-the-fields-own-state",
			children: [jsx(_components.a, {
				className: "header-anchor",
				"aria-label": "Permalink to \"Reacting to the field's own state\"",
				href: "#reacting-to-the-fields-own-state",
				children: jsx(_components.span, {
					"aria-hidden": "true",
					children: "#"
				})
			}), "Reacting to the field's own state"]
		}),
		"\n",
		jsxs(FrameworkText, { children: [jsx(FrameworkSlot, {
			name: "react",
			children: jsxs(_components.p, { children: [
				jsx(_components.code, { children: "AddressField" }),
				" above doesn't re-render when the passed-in ",
				jsx(_components.code, { children: "api" }),
				" changes. To\nre-render when something on that ",
				jsx(_components.code, { children: "api" }),
				" changes, use ",
				jsx(_components.code, { children: "useWatch" }),
				":"
			] })
		}), jsx(FrameworkSlot, {
			name: "lit",
			children: jsxs(_components.p, { children: [
				jsx(_components.code, { children: "AddressField" }),
				" above doesn't update when something on the passed-in ",
				jsx(_components.code, { children: ".api" }),
				"\nchanges. To update when it does, use ",
				jsx(_components.code, { children: "WatchController" }),
				":"
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
										children: "invalid"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: ", "
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "touched"
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
										children: "invalid"
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
										children: "      {invalid "
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3D6F94" },
										children: "&&"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: " touched "
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
										children: "p"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: ">Please fix the highlighted fields.</"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#0F7D6C" },
										children: "p"
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
										children: ","
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#1A6FB0" },
										children: " property"
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
										children: " WatchController"
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
										children: "address-field"
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
										children: " AddressField"
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
										children: "  @"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "property"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: "({"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#1A6FB0" },
										children: " attribute"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: ":"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#B23370" },
										children: " false"
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
										style: { "--shiki-light": "#3D6F94" },
										children: "  accessor"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: " api"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3D6F94" },
										children: "!:"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: " FieldApi<Address, unknown>;"
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
										children: "  #watch "
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
										children: " WatchController"
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
									style: {
										"--shiki-light": "#0F7D6C",
										"--shiki-light-font-style": "italic"
									},
									children: "    this"
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
										children: "    () "
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3D6F94" },
										children: "=>"
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
										children: "api"
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
										children: "invalid"
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
										style: { "--shiki-light": "#3D6F94" },
										children: "    const"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: " ["
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "invalid"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: ", "
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "touched"
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
										children: "#watch"
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
										style: { "--shiki-light": "#0F7D6C" },
										children: "        ${"
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
										children: " touched"
									})
								]
							}),
							"\n",
							jsxs(_components.span, {
								"data-line": "",
								children: [
									jsx(_components.span, {
										style: { "--shiki-light": "#3D6F94" },
										children: "          ?"
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
										children: "p"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: ">"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: "Please fix the highlighted fields."
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "</"
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
										children: "          :"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: " \"\""
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
										style: { "--shiki-light": "#16233A" },
										children: "        <"
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
										children: "api"
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
										children: "Line 1"
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
										children: "api"
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
										children: "City"
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
		jsxs(_components.h2, {
			id: "arrays-itemsfield",
			children: [
				jsx(_components.a, {
					className: "header-anchor",
					"aria-label": "Permalink to \"Arrays: ItemsField\"",
					href: "#arrays-itemsfield",
					children: jsx(_components.span, {
						"aria-hidden": "true",
						children: "#"
					})
				}),
				"Arrays: ",
				jsx(_components.code, { children: "ItemsField" })
			]
		}),
		"\n",
		jsxs(FrameworkText, { children: [jsx(FrameworkSlot, {
			name: "react",
			children: jsxs(_components.p, { children: [
				"An array component composes the same way, plus array mutation helpers and a\nstable React key. Use ",
				jsx(_components.code, { children: "field.id" }),
				" (or ",
				jsx(_components.code, { children: "group.id" }),
				"), not the array index, as the\n",
				jsx(_components.code, { children: "key" }),
				": index-as-key misattributes uncontrolled DOM state (focus, cursor\nposition) to the wrong row after a reorder, since the item that ",
				jsx(_components.em, { children: "renders" }),
				" at\nindex 2 changes but the component instance React reuses for index 2 doesn't:"
			] })
		}), jsx(FrameworkSlot, {
			name: "lit",
			children: jsxs(_components.p, { children: [
				"An array component composes the same way, plus array mutation helpers and\n",
				jsx(_components.code, { children: "lit-html" }),
				"'s\n",
				jsx(_components.a, {
					href: "https://lit.dev/docs/templates/lists/#the-repeat-directive",
					children: jsx(_components.code, { children: "repeat" })
				}),
				"\ndirective, keyed on ",
				jsx(_components.code, { children: "field.id" }),
				" (or ",
				jsx(_components.code, { children: "group.id" }),
				"), not the array index:\nindex-as-key misattributes uncontrolled DOM state (focus, cursor position) to\nthe wrong row after a reorder, since the item that ",
				jsx(_components.em, { children: "renders" }),
				" at index 2 changes\nbut the element instance Lit reuses for index 2 doesn't:"
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
										children: " FieldApi<Item[], TParentValue> },"
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
										children: "g"
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
										children: " g"
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
										children: " item "
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
										children: "{item"
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
										children: "            item"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3D6F94" },
										children: "="
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "{item}"
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
										children: " })"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "}>Add item</"
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
										children: "item"
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
								children: [
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: "    item"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3D6F94" },
										children: ":"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: " FieldApi<Item, Item[]>;"
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
										children: ","
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#1A6FB0" },
										children: " property"
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
										children: " WatchController"
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
										children: "items-field"
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
										children: " ItemsField"
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
										children: "  @"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "property"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: "({"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#1A6FB0" },
										children: " attribute"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: ":"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#B23370" },
										children: " false"
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
										style: { "--shiki-light": "#3D6F94" },
										children: "  accessor"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: " api"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3D6F94" },
										children: "!:"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: " FieldApi<Item[], unknown>;"
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
										children: "  #watch "
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
										children: " WatchController"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: "("
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
										children: ", () "
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3D6F94" },
										children: "=>"
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
										children: "api"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: ", ("
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "g"
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
										children: " g"
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
										style: { "--shiki-light": "#3D6F94" },
										children: "    const"
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
										children: "#watch"
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
										style: { "--shiki-light": "#0F7D6C" },
										children: "      ${"
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
									children: "        value"
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
										children: "        ("
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
										children: "api"
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
										children: "        ("
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
										children: "          const"
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
										children: "api"
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
										children: "          return"
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
								children: [jsx(_components.span, {
									style: { "--shiki-light": "#16233A" },
									children: "            <"
								}), jsx(_components.span, {
									style: { "--shiki-light": "#0F7D6C" },
									children: "item-field"
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
										children: "              .item"
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
										children: "              .onRemove"
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
										children: "api"
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
							jsxs(_components.span, {
								"data-line": "",
								children: [
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "            ></"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#0F7D6C" },
										children: "item-field"
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
									children: "          `;"
								})
							}),
							"\n",
							jsx(_components.span, {
								"data-line": "",
								children: jsx(_components.span, {
									style: { "--shiki-light": "#3C4257" },
									children: "        },"
								})
							}),
							"\n",
							jsxs(_components.span, {
								"data-line": "",
								children: [jsx(_components.span, {
									style: { "--shiki-light": "#3C4257" },
									children: "      )"
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
										style: { "--shiki-light": "#3C4257" },
										children: "()"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3D6F94" },
										children: " =>"
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
										children: "api"
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
										children: " })"
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
									style: { "--shiki-light": "#3C4257" },
									children: "        Add item"
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
										children: "item-field"
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
										children: " ItemField"
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
										children: "  @"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "property"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: "({"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#1A6FB0" },
										children: " attribute"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: ":"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#B23370" },
										children: " false"
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
										style: { "--shiki-light": "#3D6F94" },
										children: "  accessor"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: " item"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3D6F94" },
										children: "!:"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: " FieldApi<Item, Item[]>;"
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
										children: "  @"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "property"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: "({"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#1A6FB0" },
										children: " attribute"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: ":"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#B23370" },
										children: " false"
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
										style: { "--shiki-light": "#3D6F94" },
										children: "  accessor"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#1A6FB0" },
										children: " onRemove"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3D6F94" },
										children: "!:"
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
										children: "Code"
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
										style: { "--shiki-light": "#3C4257" },
										children: "()"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3D6F94" },
										children: " =>"
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
										children: "onRemove"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: "()"
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
										children: "Remove"
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
		jsxs(FrameworkText, { children: [jsx(FrameworkSlot, {
			name: "react",
			children: jsxs(_components.p, { children: [
				jsx(_components.code, { children: "ItemsField" }),
				" itself needs ",
				jsx(_components.code, { children: "useWatch(api, (g) => g.value)" }),
				" to re-render when the\narray changes; ",
				jsx(_components.code, { children: "api.field(i)" }),
				" resolves the stable ",
				jsx(_components.code, { children: "item.id" }),
				" without subscribing\nto each item."
			] })
		}), jsx(FrameworkSlot, {
			name: "lit",
			children: jsxs(_components.p, { children: [
				jsx(_components.code, { children: "ItemsField" }),
				" itself needs a ",
				jsx(_components.code, { children: "select" }),
				" of ",
				jsx(_components.code, { children: "(g) => g.value" }),
				" to update when the\narray changes; ",
				jsx(_components.code, { children: "api.field(i)" }),
				" resolves the stable ",
				jsx(_components.code, { children: "item.id" }),
				" without subscribing\nto each item."
			] })
		})] }),
		"\n",
		jsxs(_components.p, { children: [
			jsx(_components.code, { children: "Item" }),
			" here is a nested object, so each element is decomposed into its own\n",
			jsx(_components.code, { children: "FieldApi" }),
			" too, hence ",
			jsx(_components.code, { children: "ItemField" }),
			" taking a resolved ",
			jsx(_components.code, { children: "item" }),
			". For a leaf item type\n(e.g. ",
			jsx(_components.code, { children: "string[]" }),
			"), the same ",
			jsx(_components.code, { children: "api.field(i)" }),
			" call works unchanged: there's no\nseparate array-of-leaves API."
		] }),
		"\n",
		jsxs(_components.h2, {
			id: "submitbutton",
			children: [jsx(_components.a, {
				className: "header-anchor",
				"aria-label": "Permalink to \"SubmitButton\"",
				href: "#submitbutton",
				children: jsx(_components.span, {
					"aria-hidden": "true",
					children: "#"
				})
			}), jsx(_components.code, { children: "SubmitButton" })]
		}),
		"\n",
		jsxs(_components.p, { children: [
			jsx(_components.a, {
				href: "/form/guide/basic",
				children: "Basic"
			}),
			" builds a ",
			jsx(_components.code, { children: "SubmitButton" }),
			" that disables while\n",
			jsx(_components.code, { children: "submitting" }),
			". This one also disables while the form isn't ",
			jsx(_components.code, { children: "dirty" }),
			" (nothing to\nsubmit until something's changed), but the shape is the same:"
		] }),
		"\n",
		jsxs(FrameworkText, { children: [jsx(FrameworkSlot, {
			name: "react",
			children: jsxs(_components.p, { children: [jsx(_components.code, { children: "useWatch" }), " directly, no render prop, so every form in the app agrees on when\nsubmission is disabled:"] })
		}), jsx(FrameworkSlot, {
			name: "lit",
			children: jsxs(_components.p, { children: [
				jsx(_components.code, { children: "WatchController" }),
				" directly, no ",
				jsx(_components.code, { children: "watch" }),
				" directive, so every form in the app\nagrees on when submission is disabled:"
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
										children: " SubmitButton"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: "<TValue>("
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
										children: "children"
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
										children: " FormApi<TValue>; children"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3D6F94" },
										children: ":"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: " React.ReactNode },"
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
										children: " ["
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
									children: "      {children}"
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
										children: ","
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#1A6FB0" },
										children: " property"
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
										style: { "--shiki-light": "#3C4257" },
										children: " type"
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
										children: " WatchController"
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
										children: "submit-button"
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
										children: " SubmitButton"
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
										children: "  @"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "property"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: "({"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#1A6FB0" },
										children: " attribute"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: ":"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#B23370" },
										children: " false"
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
										style: { "--shiki-light": "#3D6F94" },
										children: "  accessor"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: " api"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3D6F94" },
										children: "!:"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: " FormApi<unknown>;"
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
										children: "  #watch "
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
										children: " WatchController"
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
									style: {
										"--shiki-light": "#0F7D6C",
										"--shiki-light-font-style": "italic"
									},
									children: "    this"
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
										children: "    () "
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3D6F94" },
										children: "=>"
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
										children: "api"
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
										style: { "--shiki-light": "#3D6F94" },
										children: "    const"
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
										children: ", "
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "dirty"
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
										children: "#watch"
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
										children: "slot"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "></"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#0F7D6C" },
										children: "slot"
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
		jsxs(_components.h2, {
			id: "putting-it-together",
			children: [jsx(_components.a, {
				className: "header-anchor",
				"aria-label": "Permalink to \"Putting it together\"",
				href: "#putting-it-together",
				children: jsx(_components.span, {
					"aria-hidden": "true",
					children: "#"
				})
			}), "Putting it together"]
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
									})
								]
							}),
							"\n",
							jsxs(_components.span, {
								"data-line": "",
								children: [
									jsx(_components.span, {
										style: { "--shiki-light": "#1A6FB0" },
										children: "      email"
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
										children: "      items"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: ":"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: " [],"
									})
								]
							}),
							"\n",
							jsxs(_components.span, {
								"data-line": "",
								children: [
									jsx(_components.span, {
										style: { "--shiki-light": "#1A6FB0" },
										children: "      shipping"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: ":"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: " emptyAddress"
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
										children: " placeOrder"
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
										style: { "--shiki-light": "#3C4257" },
										children: " ["
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "required"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: "(),"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: " email"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: "()]"
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
										children: "      <"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#0F7D6C" },
										children: "ItemsField"
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
										children: "      <"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#0F7D6C" },
										children: "SubmitButton"
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
										children: "{form}>Place order</"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#0F7D6C" },
										children: "SubmitButton"
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
										children: " FormApi"
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
										children: "{"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#1A6FB0" },
										children: " email"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: ","
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
										children: "./address-field.ts"
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
										children: "./items-field.ts"
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
										children: "./submit-button.ts"
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
									})
								]
							}),
							"\n",
							jsxs(_components.span, {
								"data-line": "",
								children: [
									jsx(_components.span, {
										style: { "--shiki-light": "#1A6FB0" },
										children: "      email"
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
										children: "      items"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: ":"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: " [],"
									})
								]
							}),
							"\n",
							jsxs(_components.span, {
								"data-line": "",
								children: [
									jsx(_components.span, {
										style: { "--shiki-light": "#1A6FB0" },
										children: "      shipping"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: ":"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: " emptyAddress"
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
										children: " placeOrder"
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
							jsxs(_components.span, {
								"data-line": "",
								children: [jsx(_components.span, {
									style: { "--shiki-light": "#16233A" },
									children: "        <"
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
										children: "          .api"
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
									})
								]
							}),
							"\n",
							jsxs(_components.span, {
								"data-line": "",
								children: [
									jsx(_components.span, {
										style: { "--shiki-light": "#1A6FB0" },
										children: "            validators"
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
										style: { "--shiki-light": "#16233A" },
										children: "required"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: "(),"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: " email"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: "()],"
									})
								]
							}),
							"\n",
							jsxs(_components.span, {
								"data-line": "",
								children: [jsx(_components.span, {
									style: { "--shiki-light": "#3C4257" },
									children: "          })"
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
										style: {
											"--shiki-light": "#3D6F94",
											"--shiki-light-font-style": "italic"
										},
										children: "          label"
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
								children: [
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "        ></"
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
										children: "        <"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#0F7D6C" },
										children: "address-field"
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
										style: { "--shiki-light": "#0F7D6C" },
										children: "}"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "></"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#0F7D6C" },
										children: "address-field"
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
										children: "items-field"
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
										style: { "--shiki-light": "#0F7D6C" },
										children: "}"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "></"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#0F7D6C" },
										children: "items-field"
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
										children: "submit-button"
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
										style: { "--shiki-light": "#0F7D6C" },
										children: "}"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: ">"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: "Place order"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "</"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#0F7D6C" },
										children: "submit-button"
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
		jsxs(FrameworkText, { children: [jsx(FrameworkSlot, {
			name: "react",
			children: jsxs(_components.p, { children: [
				"Reach for ",
				jsx(_components.code, { children: "<Watch>" }),
				" directly when prototyping or when a field appears once.\nPromote to a named component the moment the same shape shows up twice."
			] })
		}), jsx(FrameworkSlot, {
			name: "lit",
			children: jsxs(_components.p, { children: [
				"Reach for ",
				jsx(_components.code, { children: "watch" }),
				" directly when prototyping or when a field appears once.\nPromote to a named custom element the moment the same shape shows up twice."
			] })
		})] })
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
