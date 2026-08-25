import { Fragment, jsx, jsxs } from "react/jsx-runtime";
//#region ../form/docs/guide/index.md
var frontmatter = void 0;
function _createMdxContent(props) {
	const _components = {
		a: "a",
		code: "code",
		figure: "figure",
		h1: "h1",
		h2: "h2",
		h3: "h3",
		li: "li",
		p: "p",
		pre: "pre",
		span: "span",
		strong: "strong",
		ul: "ul",
		...props.components
	};
	return jsxs(Fragment, { children: [
		jsxs(_components.h1, {
			id: "why-kin-form",
			children: [jsx(_components.a, {
				className: "header-anchor",
				"aria-label": "Permalink to \"Why Kin Form?\"",
				href: "#why-kin-form",
				children: jsx(_components.span, {
					"aria-hidden": "true",
					children: "#"
				})
			}), "Why Kin Form?"]
		}),
		"\n",
		jsxs(_components.h2, {
			id: "build-field-components-once-then-reuse-them",
			children: [jsx(_components.a, {
				className: "header-anchor",
				"aria-label": "Permalink to \"Build field components once, then reuse them\"",
				href: "#build-field-components-once-then-reuse-them",
				children: jsx(_components.span, {
					"aria-hidden": "true",
					children: "#"
				})
			}), "Build field components once, then reuse them"]
		}),
		"\n",
		jsxs(_components.p, { children: [
			"Kin Form is designed around reusable form UI, not one-off bindings. A\n",
			jsx(_components.code, { children: "TextField" }),
			", ",
			jsx(_components.code, { children: "AddressField" }),
			", ",
			jsx(_components.code, { children: "ItemsField" }),
			", or ",
			jsx(_components.code, { children: "SubmitButton" }),
			" takes the resolved\n",
			jsx(_components.code, { children: "FieldApi" }),
			" it needs and nothing else: no dotted path, form context, or bespoke\ncallback plumbing. The same component can render a field wherever its value type\nfits, across forms and applications."
		] }),
		"\n",
		jsxs(_components.p, { children: [
			"Because a leaf, a nested group, an array item, and the form root share the same\nstate model, the component pattern never changes as a form grows. See\n",
			jsx(_components.a, {
				href: "/form/guide/form-composition",
				children: "Form Composition"
			}),
			" for the complete pattern."
		] }),
		"\n",
		jsxs(_components.p, { children: [
			"That reuse crosses form boundaries, not just within one form's own subtree.\n",
			jsx(_components.code, { children: "FieldApi<TValue, TParentValue = never>" }),
			" decouples a field's own value type from\nits parent form's shape:"
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
									children: "function"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#1A6FB0" },
									children: " TextField"
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
									children: " FieldApi<string, TParentValue> },"
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
								children: "  // Only ever needs TValue to be `string`."
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
			jsx(_components.code, { children: "TParentValue" }),
			" is an opaque type parameter ",
			jsx(_components.code, { children: "TextField" }),
			" never inspects, not the\nwhole form's value type, so the exact same ",
			jsx(_components.code, { children: "TextField" }),
			" works unmodified across a\nlogin form, a checkout form, and a settings form with completely unrelated\nshapes — no ",
			jsx(_components.code, { children: "any" }),
			", no per-form variant. Contrast that with a field type\nparameterized by the whole form (",
			jsx(_components.code, { children: "Control<TFieldValues>" }),
			" in React Hook Form,\n",
			jsx(_components.code, { children: "FieldApi<TParentData, TName, ...>" }),
			" in TanStack Form): a shared component built\nagainst either has to re-parameterize itself over whatever form it's dropped\ninto, generics leaking through every reusable component's signature, or drop to\nloosely-typed props and give up the safety."
		] }),
		"\n",
		jsxs(_components.p, { children: [
			"Kin Form starts from one premise: ",
			jsx(_components.strong, { children: "a form is a tree, and every node in that\ntree (leaf field, nested group, or the form itself) is the same kind of thing." }),
			"\nMost form libraries make the form object the sole owner of state: register a\nfield and you get a proxy into that one store, not an object with its own\nvalue/error/validators. Nested objects, dynamic arrays, and cross-field rules\nend up routed through a second mechanism instead of being a plain field. Kin\nForm builds on the tree idea directly instead."
		] }),
		"\n",
		jsxs(_components.h2, {
			id: "one-state-machine-one-shape",
			children: [jsx(_components.a, {
				className: "header-anchor",
				"aria-label": "Permalink to \"One state machine, one shape\"",
				href: "#one-state-machine-one-shape",
				children: jsx(_components.span, {
					"aria-hidden": "true",
					children: "#"
				})
			}), "One state machine, one shape"]
		}),
		"\n",
		jsxs(_components.p, { children: [
			"Every node (leaf input, nested object/array, or the form itself) is the same\nclass, ",
			jsx(_components.code, { children: "FieldApi" }),
			": ",
			jsx(_components.code, { children: "value" }),
			", ",
			jsx(_components.code, { children: "error" }),
			", ",
			jsx(_components.code, { children: "touched" }),
			", ",
			jsx(_components.code, { children: "validating" }),
			", ",
			jsx(_components.code, { children: "dirty" }),
			",\nvalidators (sync, async, and schema), plus a lazily-populated registry of its\nown child fields."
		] }),
		"\n",
		jsx(_components.p, { children: "Whether an object/array-valued field is treated as one atomic leaf or decomposed\ninto children is up to you, not the engine." }),
		"\n",
		jsxs(_components.p, { children: [
			jsx(_components.code, { children: "FormApi" }),
			" is just the ",
			jsx(_components.code, { children: "FieldApi" }),
			" at the root (",
			jsx(_components.code, { children: "parent === null" }),
			", ",
			jsx(_components.code, { children: "name === \"\"" }),
			"),\nwith submission and reset logic added on top."
		] }),
		"\n",
		jsx(_components.p, { children: "That means the same mental model applies everywhere:" }),
		"\n",
		jsxs(_components.ul, { children: [
			"\n",
			jsxs(_components.li, { children: [
				"Setting a node's ",
				jsx(_components.code, { children: "value" }),
				" bubbles up into the parent's value."
			] }),
			"\n",
			jsxs(_components.li, { children: [
				"Setting a node's ",
				jsx(_components.code, { children: "value" }),
				" cascades down into every registered child."
			] }),
			"\n",
			jsxs(_components.li, { children: [
				jsx(_components.code, { children: "touched" }),
				"/",
				jsx(_components.code, { children: "invalid" }),
				"/",
				jsx(_components.code, { children: "validating" }),
				" aggregate from children automatically: a node\nis ",
				jsx(_components.code, { children: "invalid" }),
				" if it or any registered child is."
			] }),
			"\n",
			jsxs(_components.li, { children: [
				"Every node can be subscribed to independently. A node's own change never\nnotifies unrelated siblings, and ",
				jsx(_components.code, { children: "react/" }),
				"'s ",
				jsx(_components.code, { children: "useWatch" }),
				"/",
				jsx(_components.code, { children: "Watch" }),
				" (or ",
				jsx(_components.code, { children: "lit/" }),
				"'s\n",
				jsx(_components.code, { children: "watch" }),
				"/",
				jsx(_components.code, { children: "WatchController" }),
				") add selector-based diffing on top, so a subscriber\nupdates only when what it computes changes."
			] }),
			"\n"
		] }),
		"\n",
		jsx(_components.p, { children: "Nothing here is a separate array-field abstraction or a separate\nwhole-form-state abstraction. It's the same properties, all the way down." }),
		"\n",
		jsxs(_components.h3, {
			id: "type-safe-paths-not-string-soup",
			children: [jsx(_components.a, {
				className: "header-anchor",
				"aria-label": "Permalink to \"Type-safe paths, not string soup\"",
				href: "#type-safe-paths-not-string-soup",
				children: jsx(_components.span, {
					"aria-hidden": "true",
					children: "#"
				})
			}), "Type-safe paths, not string soup"]
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
								})
							]
						}),
						"\n",
						jsxs(_components.span, {
							"data-line": "",
							children: [
								jsx(_components.span, {
									style: { "--shiki-light": "#1A6FB0" },
									children: "    email"
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
									children: "    address"
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
									children: "      line1"
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
									children: "    items"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#3C4257" },
									children: ":"
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
							children: [
								jsx(_components.span, {
									style: { "--shiki-light": "#3C4257" },
									children: "      {"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#1A6FB0" },
									children: " id"
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
									children: " },"
								})
							]
						}),
						"\n",
						jsx(_components.span, {
							"data-line": "",
							children: jsx(_components.span, {
								style: { "--shiki-light": "#3C4257" },
								children: "    ],"
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
									children: ")."
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#16233A" },
									children: "value"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#3C4257" },
									children: "; "
								}),
								jsx(_components.span, {
									style: {
										"--shiki-light": "#A83A1C",
										"--shiki-light-font-style": "italic"
									},
									children: "// string"
								})
							]
						}),
						"\n",
						jsxs(_components.span, {
							"data-line": "",
							children: [
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
									children: "address.line1"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#3C4257" },
									children: "\""
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#3C4257" },
									children: ")."
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#16233A" },
									children: "value"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#3C4257" },
									children: "; "
								}),
								jsx(_components.span, {
									style: {
										"--shiki-light": "#A83A1C",
										"--shiki-light-font-style": "italic"
									},
									children: "// string"
								})
							]
						}),
						"\n",
						jsxs(_components.span, {
							"data-line": "",
							children: [
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
									children: "items.0.id"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#3C4257" },
									children: "\""
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#3C4257" },
									children: ")."
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#16233A" },
									children: "value"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#3C4257" },
									children: "; "
								}),
								jsx(_components.span, {
									style: {
										"--shiki-light": "#A83A1C",
										"--shiki-light-font-style": "italic"
									},
									children: "// number"
								})
							]
						})
					]
				})
			})
		}),
		"\n",
		jsxs(_components.p, { children: [
			jsx(_components.code, { children: "DeepKey<T>" }),
			" computes every dot-joined path into ",
			jsx(_components.code, { children: "T" }),
			" (through objects and arrays\nalike) as a literal string union; ",
			jsx(_components.code, { children: "DeepValue<T, Key>" }),
			" resolves the value type at\nthat path. A typo'd path is a compile error, not a silent ",
			jsx(_components.code, { children: "undefined" }),
			" at\nruntime: ",
			jsx(_components.code, { children: "field(name, options)" }),
			" type-checks against your form's actual value\ntype, no manual generics needed."
		] }),
		"\n",
		jsxs(_components.h3, {
			id: "validation-that-doesnt-fight-you",
			children: [jsx(_components.a, {
				className: "header-anchor",
				"aria-label": "Permalink to \"Validation that doesn't fight you\"",
				href: "#validation-that-doesnt-fight-you",
				children: jsx(_components.span, {
					"aria-hidden": "true",
					children: "#"
				})
			}), "Validation that doesn't fight you"]
		}),
		"\n",
		jsx(_components.p, { children: "Kin Form supports flexible validation strategies: sync or async, per-node or\nper-subtree." }),
		"\n",
		jsxs(_components.ul, { children: [
			"\n",
			jsxs(_components.li, { children: [
				jsx(_components.strong, { children: jsx(_components.code, { children: "validators" }) }),
				": plain sync functions on any node (field, group, or form):\n",
				jsx(_components.code, { children: "(field) => result" }),
				", run in order immediately, no debounce; first truthy\nresult wins."
			] }),
			"\n",
			jsxs(_components.li, { children: [
				jsx(_components.strong, { children: jsx(_components.code, { children: "asyncValidator" }) }),
				": a separate, singular option alongside ",
				jsx(_components.code, { children: "validators" }),
				", for\na check that needs to hit a server. Debounced, and only fires once every\n",
				jsx(_components.code, { children: "validators" }),
				" entry already passes."
			] }),
			"\n",
			jsxs(_components.li, { children: [
				jsx(_components.strong, { children: jsx(_components.code, { children: "schemaValidator" }) }),
				": one schema (zod, valibot, ...) validating a whole\nsubtree's value in one pass, instead of a rule per field. Runs alongside\n",
				jsx(_components.code, { children: "validators" }),
				"/",
				jsx(_components.code, { children: "asyncValidator" }),
				", not instead of them."
			] }),
			"\n"
		] }),
		"\n",
		jsx(_components.p, { children: "Whichever combination is running:" }),
		"\n",
		jsxs(_components.ul, { children: [
			"\n",
			jsxs(_components.li, { children: [
				jsx(_components.strong, { children: "Coalesced" }),
				": concurrent or redundant ",
				jsx(_components.code, { children: "validate()" }),
				" calls join a single\nin-flight run instead of stacking up duplicate work."
			] }),
			"\n",
			jsxs(_components.li, { children: [jsx(_components.strong, { children: "Stale-safe" }), ": if a newer run supersedes an older one, the older result is\ndiscarded when it resolves, so it can never clobber a fresher answer."] }),
			"\n"
		] }),
		"\n",
		jsx(_components.p, { children: "Cross-field rules are declarative, not manual subscriptions:" }),
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
									children: "password"
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
									children: "  dependents"
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
									children: "  validators"
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
									children: "Password is required"
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
									children: "confirmPassword"
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
									children: "  validators"
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
									children: "f"
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
									style: { "--shiki-light": "#16233A" },
									children: "    f"
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
		jsxs(_components.p, { children: [
			"Whenever ",
			jsx(_components.code, { children: "password" }),
			" changes, ",
			jsx(_components.code, { children: "confirmPassword" }),
			" re-validates automatically, with\nno manual wiring and no re-render-everything."
		] }),
		"\n",
		jsxs(_components.h3, {
			id: "stable-array-item-identity",
			children: [jsx(_components.a, {
				className: "header-anchor",
				"aria-label": "Permalink to \"Stable array item identity\"",
				href: "#stable-array-item-identity",
				children: jsx(_components.span, {
					"aria-hidden": "true",
					children: "#"
				})
			}), "Stable array item identity"]
		}),
		"\n",
		jsxs(_components.p, { children: [
			jsx(_components.code, { children: "pushItem" }),
			"/",
			jsx(_components.code, { children: "insertItem" }),
			"/",
			jsx(_components.code, { children: "moveItem" }),
			"/",
			jsx(_components.code, { children: "swapItems" }),
			"/",
			jsx(_components.code, { children: "removeItem" }),
			" update the immutable\nvalue and re-key the field registry together, so a field's identity follows its\nitem through a reorder, not whatever value now sits at its old index. Every\nfield also carries a stable ",
			jsx(_components.code, { children: "id" }),
			", independent of ",
			jsx(_components.code, { children: "name" }),
			", that survives the same\nreorders. It's the right list key (",
			jsx(_components.code, { children: "key={field.id}" }),
			" in React, or ",
			jsx(_components.code, { children: "lit-html" }),
			"'s\n",
			jsx(_components.code, { children: "repeat" }),
			" directive keyed on ",
			jsx(_components.code, { children: "field.id" }),
			" in Lit) instead of the index."
		] }),
		"\n",
		jsxs(_components.h3, {
			id: "opt-in-complexity",
			children: [jsx(_components.a, {
				className: "header-anchor",
				"aria-label": "Permalink to \"Opt-in complexity\"",
				href: "#opt-in-complexity",
				children: jsx(_components.span, {
					"aria-hidden": "true",
					children: "#"
				})
			}), "Opt-in complexity"]
		}),
		"\n",
		jsxs(_components.p, { children: [
			jsx(_components.code, { children: "@kintools/form-core" }),
			" has no UI framework dependency: it's just the state\nmachine. ",
			jsx(_components.code, { children: "@kintools/form-react" }),
			" adds hooks and render-prop components on top;\n",
			jsx(_components.code, { children: "@kintools/form-lit" }),
			" adds a ",
			jsx(_components.code, { children: "watch" }),
			" directive and ",
			jsx(_components.code, { children: "ReactiveController" }),
			"s.\n",
			jsx(_components.code, { children: "@kintools/form-validators" }),
			" is a separate package on purpose: validator wording\nand edge cases churn far more than the engine does, so the two version\nindependently. You pick up exactly the layers you use."
		] }),
		"\n",
		jsxs(_components.h2, {
			id: "how-other-form-libraries-handle-this",
			children: [jsx(_components.a, {
				className: "header-anchor",
				"aria-label": "Permalink to \"How other form libraries handle this\"",
				href: "#how-other-form-libraries-handle-this",
				children: jsx(_components.span, {
					"aria-hidden": "true",
					children: "#"
				})
			}), "How other form libraries handle this"]
		}),
		"\n",
		jsx(_components.p, { children: "The tree model isn't the only way to build a form library, and each of the\nalternatives below is a real, popular, well-built library. Here's specifically\nwhere they diverge from the premise above." }),
		"\n",
		jsxs(_components.h3, {
			id: "react-hook-form",
			children: [jsx(_components.a, {
				className: "header-anchor",
				"aria-label": "Permalink to \"React Hook Form\"",
				href: "#react-hook-form",
				children: jsx(_components.span, {
					"aria-hidden": "true",
					children: "#"
				})
			}), "React Hook Form"]
		}),
		"\n",
		jsxs(_components.ul, { children: [
			"\n",
			jsxs(_components.li, { children: [
				"Arrays need a separate hook, ",
				jsx(_components.code, { children: "useFieldArray" }),
				": no group node for a nested\nobject at all."
			] }),
			"\n",
			jsx(_components.li, { children: "Reusable group/array components need manual casts to stay type-safe: the\ncompile-time path check doesn't survive a generic wrapper." }),
			"\n",
			jsx(_components.li, { children: "No selective subscription: a component re-renders on any change to a\nfield-state key it touches, not on whether the value it computes from those\nkeys changed." }),
			"\n",
			jsx(_components.li, { children: "Inefficient by design: dirty/subscriber bookkeeping runs across every\nregistered field on every update, not just the one that changed, regardless of\nhow many components actually re-render." }),
			"\n",
			jsx(_components.li, { children: "Heavier: 13.0 KB gzip." }),
			"\n"
		] }),
		"\n",
		jsxs(_components.p, { children: [
			"See ",
			jsx(_components.a, {
				href: "/form/comparison/react-hook-form",
				children: "vs React Hook Form"
			}),
			" for the full\ncomparison."
		] }),
		"\n",
		jsxs(_components.h3, {
			id: "formik",
			children: [jsx(_components.a, {
				className: "header-anchor",
				"aria-label": "Permalink to \"Formik\"",
				href: "#formik",
				children: jsx(_components.span, {
					"aria-hidden": "true",
					children: "#"
				})
			}), "Formik"]
		}),
		"\n",
		jsxs(_components.ul, { children: [
			"\n",
			jsxs(_components.li, { children: [
				"No type safety: ",
				jsx(_components.code, { children: "name" }),
				" is a plain string with no compile-time path check, and\nneither a field's value nor a group/array's items are typed; a typo'd path\nfails silently at runtime instead of at compile time."
			] }),
			"\n",
			jsx(_components.li, { children: "Its Context re-renders every consumer on any change, by design." }),
			"\n",
			jsx(_components.li, { children: "Heavier: 13.9 KB gzip." }),
			"\n"
		] }),
		"\n",
		jsxs(_components.h3, {
			id: "tanstack-form",
			children: [jsx(_components.a, {
				className: "header-anchor",
				"aria-label": "Permalink to \"TanStack Form\"",
				href: "#tanstack-form",
				children: jsx(_components.span, {
					"aria-hidden": "true",
					children: "#"
				})
			}), "TanStack Form"]
		}),
		"\n",
		jsxs(_components.ul, { children: [
			"\n",
			jsx(_components.li, { children: "Validation is ceremony-heavy: named validator slots per event, and cross-field\nrules are awkward to wire up." }),
			"\n",
			jsx(_components.li, { children: "Heaviest bundle of the three: 18.5 KB." }),
			"\n",
			jsxs(_components.li, { children: [
				"The slowest of the three in Kin Form's own benchmark; see\n",
				jsx(_components.a, {
					href: "/form/comparison/",
					children: "the full numbers"
				}),
				" before taking that at face value."
			] }),
			"\n"
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
				href: "/form/guide/getting-started",
				children: "Getting Started"
			}), " — install and build your first\nform"] }),
			"\n",
			jsxs(_components.li, { children: [jsx(_components.a, {
				href: "/form/guide/concepts",
				children: "Concepts"
			}), " — the tree model, shared state, and typed\npaths"] }),
			"\n",
			jsxs(_components.li, { children: [
				jsx(_components.a, {
					href: "/form/guide/basic",
					children: "Basic"
				}),
				" — building ",
				jsx(_components.code, { children: "TextField" }),
				" from a one-off subscription,\nthe pattern the rest of these guides lean on"
			] }),
			"\n",
			jsxs(_components.li, { children: [
				jsx(_components.a, {
					href: "/form/guide/per-node-validation",
					children: "Per-node Validation"
				}),
				" and\n",
				jsx(_components.a, {
					href: "/form/guide/schema-validation",
					children: "Schema Validation"
				})
			] }),
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
				})
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
