import { Fragment, jsx, jsxs } from "react/jsx-runtime";
//#region ../form/docs/guide/concepts.md
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
		strong: "strong",
		table: "table",
		tbody: "tbody",
		td: "td",
		th: "th",
		thead: "thead",
		tr: "tr",
		ul: "ul",
		...props.components
	};
	return jsxs(Fragment, { children: [
		jsxs(_components.h1, {
			id: "concepts",
			children: [jsx(_components.a, {
				className: "header-anchor",
				"aria-label": "Permalink to \"Concepts\"",
				href: "#concepts",
				children: jsx(_components.span, {
					"aria-hidden": "true",
					children: "#"
				})
			}), "Concepts"]
		}),
		"\n",
		jsxs(_components.p, { children: [
			"Every node in a Kin Form tree (a leaf input, a nested object, a nested array, or\nthe form itself) is the same class, ",
			jsx(_components.code, { children: "FieldApi" }),
			":"
		] }),
		"\n",
		jsx(_components.pre, { children: jsx(_components.code, { children: "BaseApi → FieldApi<TValue, TParentValue> → FormApi<TValue>\n" }) }),
		"\n",
		jsxs(_components.table, { children: [jsx(_components.thead, { children: jsxs(_components.tr, { children: [jsx(_components.th, { children: "Class" }), jsx(_components.th, { children: "Description" })] }) }), jsxs(_components.tbody, { children: [
			jsxs(_components.tr, { children: [jsx(_components.td, { children: jsx(_components.code, { children: "BaseApi" }) }), jsxs(_components.td, { children: [
				jsx(_components.code, { children: "subscribe" }),
				" / ",
				jsx(_components.code, { children: "notify" }),
				" — the pub/sub primitive everything else builds on"
			] })] }),
			jsxs(_components.tr, { children: [jsx(_components.td, { children: jsx(_components.code, { children: "FieldApi<TValue, TParentValue>" }) }), jsxs(_components.td, { children: [
				jsx(_components.code, { children: "value" }),
				" / ",
				jsx(_components.code, { children: "error" }),
				" / ",
				jsx(_components.code, { children: "touched" }),
				" / ",
				jsx(_components.code, { children: "validating" }),
				" / ",
				jsx(_components.code, { children: "dirty" }),
				" / ",
				jsx(_components.code, { children: "validators" }),
				", ",
				jsx(_components.code, { children: "handleBlur" }),
				" / ",
				jsx(_components.code, { children: "handleChange" }),
				", child registry, array helpers"
			] })] }),
			jsxs(_components.tr, { children: [jsx(_components.td, { children: jsx(_components.code, { children: "FormApi<TValue>" }) }), jsxs(_components.td, { children: [
				"root: ",
				jsx(_components.code, { children: "parent=null" }),
				", ",
				jsx(_components.code, { children: "name=\"\"" }),
				", + ",
				jsx(_components.code, { children: "submit" }),
				"/",
				jsx(_components.code, { children: "reset" })
			] })] })
		] })] }),
		"\n",
		jsxs(_components.p, { children: [
			"This mirrors the DOM's own ",
			jsx(_components.code, { children: "EventTarget → Node → Document" }),
			" shape: one node type\nwith optional children, not a separate class per leaf/container. Whether an\nobject/array-valued field is treated as one atomic leaf (bind ",
			jsx(_components.code, { children: "handleChange" }),
			"\nstraight to a custom control) or decomposed into children (call ",
			jsx(_components.code, { children: "field()" }),
			" per\nsub-path) is entirely up to you; nothing in the engine forces either. ",
			jsx(_components.code, { children: "FormApi" }),
			"\nis just the ",
			jsx(_components.code, { children: "FieldApi" }),
			" at the tree's root, with ",
			jsx(_components.code, { children: "parent" }),
			" ",
			jsx(_components.code, { children: "null" }),
			" and ",
			jsx(_components.code, { children: "name" }),
			" ",
			jsx(_components.code, { children: "\"\"" }),
			",\nplus ",
			jsx(_components.code, { children: "submitting" }),
			"/",
			jsx(_components.code, { children: "reset" }),
			"/",
			jsx(_components.code, { children: "resetField" }),
			"/",
			jsx(_components.code, { children: "handleSubmit" }),
			" added on top."
		] }),
		"\n",
		jsxs(_components.h2, {
			id: "shared-state",
			children: [jsx(_components.a, {
				className: "header-anchor",
				"aria-label": "Permalink to \"Shared state\"",
				href: "#shared-state",
				children: jsx(_components.span, {
					"aria-hidden": "true",
					children: "#"
				})
			}), "Shared state"]
		}),
		"\n",
		jsx(_components.p, { children: "Every node (leaf, nested field, or form) exposes:" }),
		"\n",
		jsxs(_components.table, { children: [jsx(_components.thead, { children: jsxs(_components.tr, { children: [
			jsx(_components.th, { children: "Property" }),
			jsx(_components.th, { children: "Type" }),
			jsx(_components.th, { children: "Meaning" })
		] }) }), jsxs(_components.tbody, { children: [
			jsxs(_components.tr, { children: [
				jsx(_components.td, { children: jsx(_components.code, { children: "value" }) }),
				jsx(_components.td, { children: jsx(_components.code, { children: "TValue" }) }),
				jsx(_components.td, { children: "The node's current value. Setting it bubbles up into the parent's value; setting it on a node with registered children cascades down to each of them." })
			] }),
			jsxs(_components.tr, { children: [
				jsx(_components.td, { children: jsx(_components.code, { children: "error" }) }),
				jsx(_components.td, { children: jsx(_components.code, { children: "string | null" }) }),
				jsxs(_components.td, { children: [
					"The result of the most recently settled validation run. ",
					jsx(_components.code, { children: "null" }),
					" if valid."
				] })
			] }),
			jsxs(_components.tr, { children: [
				jsx(_components.td, { children: jsx(_components.code, { children: "schemaError" }) }),
				jsx(_components.td, { children: jsx(_components.code, { children: "string | null" }) }),
				jsxs(_components.td, { children: [
					"This node's own slice of its parent's ",
					jsx(_components.a, {
						href: "/form/guide/schema-validation",
						children: jsx(_components.code, { children: "schemaErrorMap" })
					}),
					" map, if any."
				] })
			] }),
			jsxs(_components.tr, { children: [
				jsx(_components.td, { children: jsx(_components.code, { children: "schemaErrorMap" }) }),
				jsx(_components.td, { children: jsx(_components.code, { children: "Partial<Record<...>> | null" }) }),
				jsxs(_components.td, { children: [
					"A flat, dot-joined path -> message map produced by this node's own ",
					jsx(_components.a, {
						href: "/form/guide/schema-validation",
						children: jsx(_components.code, { children: "schemaValidator" })
					}),
					", if any.",
					jsx("br", {}),
					"A child reads its slice via its own ",
					jsx(_components.code, { children: "schemaError" }),
					"."
				] })
			] }),
			jsxs(_components.tr, { children: [
				jsx(_components.td, { children: jsx(_components.code, { children: "invalid" }) }),
				jsx(_components.td, { children: jsx(_components.code, { children: "boolean" }) }),
				jsxs(_components.td, { children: [
					jsx(_components.code, { children: "true" }),
					" if ",
					jsx(_components.code, { children: "error" }),
					" or ",
					jsx(_components.code, { children: "schemaError" }),
					" is set. Also ",
					jsx(_components.code, { children: "true" }),
					" if any registered child is invalid, or this node's own ",
					jsx(_components.a, {
						href: "/form/guide/schema-validation",
						children: jsx(_components.code, { children: "schemaErrorMap" })
					}),
					" is non-empty."
				] })
			] }),
			jsxs(_components.tr, { children: [
				jsx(_components.td, { children: jsx(_components.code, { children: "touched" }) }),
				jsx(_components.td, { children: jsx(_components.code, { children: "boolean" }) }),
				jsxs(_components.td, { children: [
					"Whether the user has blurred this node. Also ",
					jsx(_components.code, { children: "true" }),
					" if any registered child is touched."
				] })
			] }),
			jsxs(_components.tr, { children: [
				jsx(_components.td, { children: jsx(_components.code, { children: "validating" }) }),
				jsx(_components.td, { children: jsx(_components.code, { children: "boolean" }) }),
				jsx(_components.td, { children: "Whether a validation run is currently pending/in-flight, for this node or any registered child." })
			] }),
			jsxs(_components.tr, { children: [
				jsx(_components.td, { children: jsx(_components.code, { children: "dirty" }) }),
				jsx(_components.td, { children: jsx(_components.code, { children: "boolean" }) }),
				jsxs(_components.td, { children: [
					"Whether ",
					jsx(_components.code, { children: "value" }),
					" differs from the reset baseline — see ",
					jsx(_components.a, {
						href: "/form/guide/dirty-tracking-and-reset",
						children: "Dirty Tracking & Reset"
					}),
					"."
				] })
			] }),
			jsxs(_components.tr, { children: [
				jsx(_components.td, { children: jsx(_components.code, { children: "name" }) }),
				jsx(_components.td, { children: jsx(_components.code, { children: "string" }) }),
				jsxs(_components.td, { children: [
					"This node's path relative to its parent (",
					jsx(_components.code, { children: "\"\"" }),
					" at the form root)."
				] })
			] }),
			jsxs(_components.tr, { children: [
				jsx(_components.td, { children: jsx(_components.code, { children: "id" }) }),
				jsx(_components.td, { children: jsx(_components.code, { children: "number" }) }),
				jsxs(_components.td, { children: [
					"A stable identity for this instance, independent of ",
					jsx(_components.code, { children: "name" }),
					" — survives ",
					jsx(_components.a, {
						href: "/form/guide/dynamic-arrays",
						children: "array re-keying"
					}),
					"."
				] })
			] })
		] })] }),
		"\n",
		jsxs(_components.p, { children: [
			"Every node also has ",
			jsx(_components.code, { children: "handleBlur" }),
			"/",
			jsx(_components.code, { children: "handleChange" }),
			", convenience handlers for\nbinding to a single control, meaningful whether that node is a leaf input or a\nwhole nested object/array edited atomically as one control (see\n",
			jsx(_components.a, {
				href: "/form/guide/nested-objects",
				children: "Nested Objects"
			}),
			")."
		] }),
		"\n",
		jsxs(_components.h2, {
			id: "getting-a-field",
			children: [jsx(_components.a, {
				className: "header-anchor",
				"aria-label": "Permalink to \"Getting a field\"",
				href: "#getting-a-field",
				children: jsx(_components.span, {
					"aria-hidden": "true",
					children: "#"
				})
			}), "Getting a field"]
		}),
		"\n",
		jsxs(_components.p, { children: [
			jsx(_components.code, { children: "field" }),
			" is called ",
			jsx(_components.strong, { children: "relative to the node it's called on" }),
			", not the whole form,\nand is idempotent: calling it again with the same name returns the same\ninstance, applying the given options instead of creating a new one:"
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
									children: " address"
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
									children: " [{"
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
									children: " }]"
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
									style: { "--shiki-light": "#3D6F94" },
									children: "const"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#16233A" },
									children: " email"
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
									children: "email"
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
									style: { "--shiki-light": "#3D6F94" },
									children: "const"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#16233A" },
									children: " address"
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
									children: "address"
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
									style: { "--shiki-light": "#3D6F94" },
									children: "const"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#16233A" },
									children: " line1"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#3D6F94" },
									children: " ="
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#16233A" },
									children: " address"
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
									children: "const"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#16233A" },
									children: " firstItemCode"
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
									children: "items.0.code"
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
						})
					]
				})
			})
		}),
		"\n",
		jsxs(_components.p, { children: [
			"It's fully typed against the form's value: ",
			jsx(_components.code, { children: "DeepKey<T>" }),
			" computes every\ndot-joined path into ",
			jsx(_components.code, { children: "T" }),
			" (objects and arrays alike) as a literal string union,\nand ",
			jsx(_components.code, { children: "DeepValue<T, Key>" }),
			" resolves the value type at that path. A typo'd path is a\ncompile error, not a silent ",
			jsx(_components.code, { children: "undefined" }),
			" at runtime."
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
			jsxs(_components.li, { children: [
				jsx(_components.a, {
					href: "/form/guide/basic",
					children: "Basic"
				}),
				" — putting ",
				jsx(_components.code, { children: "field" }),
				" to work in an actual form, and\nthe ",
				jsx(_components.code, { children: "TextField" }),
				" pattern the rest of these guides build on"
			] }),
			"\n",
			jsxs(_components.li, { children: [jsx(_components.a, {
				href: "/form/guide/per-node-validation",
				children: "Per-node Validation"
			}), " — validators,\ndebouncing, running validation explicitly"] }),
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
					href: "/form/guide/linked-fields",
					children: "Linked Fields"
				}),
				" and\n",
				jsx(_components.a, {
					href: "/form/guide/listeners",
					children: "Listeners"
				}),
				" — reacting to a value changing"
			] }),
			"\n",
			jsxs(_components.li, { children: [
				jsx(_components.a, {
					href: "https://jsr.io/@kintools/form-core/doc/index.ts/~/FieldApi",
					children: jsx(_components.code, { children: "FieldApi" })
				}),
				" and\n",
				jsx(_components.a, {
					href: "https://jsr.io/@kintools/form-core/doc/index.ts/~/FormApi",
					children: jsx(_components.code, { children: "FormApi" })
				}),
				" — full\nreference on JSR"
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
//#endregion
export { MDXContent as default, frontmatter };
