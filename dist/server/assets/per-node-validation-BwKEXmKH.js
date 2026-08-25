import { Fragment, jsx, jsxs } from "react/jsx-runtime";
//#region ../form/docs/guide/per-node-validation.md
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
		strong: "strong",
		ul: "ul",
		...props.components
	};
	return jsxs(Fragment, { children: [
		jsxs(_components.h1, {
			id: "per-node-validation",
			children: [jsx(_components.a, {
				className: "header-anchor",
				"aria-label": "Permalink to \"Per-node Validation\"",
				href: "#per-node-validation",
				children: jsx(_components.span, {
					"aria-hidden": "true",
					children: "#"
				})
			}), "Per-node Validation"]
		}),
		"\n",
		jsxs(_components.h2, {
			id: "two-kinds-of-validation",
			children: [jsx(_components.a, {
				className: "header-anchor",
				"aria-label": "Permalink to \"Two kinds of validation\"",
				href: "#two-kinds-of-validation",
				children: jsx(_components.span, {
					"aria-hidden": "true",
					children: "#"
				})
			}), "Two kinds of validation"]
		}),
		"\n",
		jsx(_components.p, { children: "Kin Form has two independent validation mechanisms, and most forms use both:" }),
		"\n",
		jsxs(_components.ul, { children: [
			"\n",
			jsxs(_components.li, { children: [
				jsx(_components.strong, { children: "Per-node validation" }),
				" (this page): ",
				jsx(_components.code, { children: "validators" }),
				"/",
				jsx(_components.code, { children: "asyncValidator" }),
				", attached\nto any individual field, group, or form. Each node owns its own rule(s) and\nits own ",
				jsx(_components.code, { children: "error" }),
				"."
			] }),
			"\n",
			jsxs(_components.li, { children: [
				jsx(_components.strong, { children: jsx(_components.a, {
					href: "/form/guide/schema-validation",
					children: "Schema validation"
				}) }),
				": a single\n",
				jsx(_components.code, { children: "schemaValidator" }),
				" attached to a group or form, validating the ",
				jsx(_components.em, { children: "whole\nsubtree's" }),
				" value in one pass (typically with zod/valibot) and reporting\nresults back onto individual fields by path, without each field needing its\nown rule."
			] }),
			"\n"
		] }),
		"\n",
		jsxs(_components.p, { children: [
			"They're additive, not exclusive: a field's ",
			jsx(_components.code, { children: "error" }),
			" (from its own\n",
			jsx(_components.code, { children: "validators" }),
			"/",
			jsx(_components.code, { children: "asyncValidator" }),
			") and its ",
			jsx(_components.code, { children: "schemaError" }),
			" (its slice of a parent's\nwhole-tree schema result) are tracked separately, and neither overwrites the\nother. ",
			jsx(_components.code, { children: "invalid" }),
			" is ",
			jsx(_components.code, { children: "true" }),
			" if either is set or any child is invalid. Reach for\nper-node validation for rules that live naturally on one field (",
			jsx(_components.code, { children: "required" }),
			",\n",
			jsx(_components.code, { children: "min" }),
			", an async uniqueness check); reach for schema validation when you already\nhave (or want) one schema describing the whole form, or for a check spanning\nseveral fields at once (a cross-field ",
			jsx(_components.code, { children: ".refine()" }),
			") without hand-wiring\n",
			jsx(_components.a, {
				href: "/form/guide/linked-fields",
				children: "dependents"
			}),
			"."
		] }),
		"\n",
		jsxs(_components.h2, {
			id: "validators",
			children: [jsx(_components.a, {
				className: "header-anchor",
				"aria-label": "Permalink to \"Validators\"",
				href: "#validators",
				children: jsx(_components.span, {
					"aria-hidden": "true",
					children: "#"
				})
			}), "Validators"]
		}),
		"\n",
		jsx(_components.p, { children: "Validators are plain, synchronous functions, run against any node in the tree: a\nfield, a group, or the form itself." }),
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
									children: "export"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#3D6F94" },
									children: " type"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#3C4257" },
									children: " Validator<TValue,"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#3C4257" },
									children: " TParentValue"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#3D6F94" },
									children: " ="
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#3C4257" },
									children: " never>"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#3D6F94" },
									children: " ="
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
									children: "  field"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#3D6F94" },
									children: ":"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#3C4257" },
									children: " FieldApi<TValue,"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#3C4257" },
									children: " TParentValue>,"
								})
							]
						}),
						"\n",
						jsxs(_components.span, {
							"data-line": "",
							children: [
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
									children: " ValidatorResult;"
								})
							]
						})
					]
				})
			})
		}),
		"\n",
		jsxs(_components.p, { children: [
			"A validator reads ",
			jsx(_components.code, { children: "field.value" }),
			" (or anything else it needs) and returns a falsy\nresult when valid, or a ",
			jsx(_components.code, { children: "string" }),
			" error message when not. Validators must not\nthrow, and run ",
			jsx(_components.strong, { children: "immediately" }),
			", on every value change, with no debounce."
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
									children: " ["
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#16233A" },
									children: "required"
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
									children: "Email is required"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#3C4257" },
									children: "\""
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#3C4257" },
									children: "),"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#16233A" },
									children: " email"
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
									children: "Enter a valid email"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#3C4257" },
									children: "\""
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#3C4257" },
									children: ")],"
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
			"Validators run ",
			jsx(_components.strong, { children: "in order" }),
			"; the first truthy result wins. A single validator\n(not wrapped in an array) is also accepted. See ",
			jsx(_components.a, {
				href: "/form/validators/",
				children: "Validators"
			}),
			"\nfor the built-in factories (",
			jsx(_components.code, { children: "required" }),
			", ",
			jsx(_components.code, { children: "minLength" }),
			", ",
			jsx(_components.code, { children: "email" }),
			", ",
			jsx(_components.code, { children: "password" }),
			", ...),\nor ",
			jsx(_components.a, {
				href: "/form/guide/schema-validation",
				children: "Schema Validation"
			}),
			" to validate a whole group\nor form with zod/valibot instead of one hand-written validator per field."
		] }),
		"\n",
		jsxs(_components.p, { children: [
			"Reassigning ",
			jsx(_components.code, { children: "validators" }),
			" to a new value does ",
			jsx(_components.strong, { children: "not" }),
			" itself trigger a new\nvalidation run; it takes effect the next time something actually triggers one (a\nvalue change, or an explicit ",
			jsx(_components.code, { children: "validate(true)" }),
			" call). This is deliberate:\nvalidator factories return a new closure on every call, so re-running on\nreference change alone would turn every render into a validation run: notifying\nsubscribers, triggering a re-render, reassigning validators again, a\nself-sustaining loop. If a field's validators rarely change and you want\nreassigning the same set to be a cheap no-op, cache the array yourself (a\nmodule-level constant, a class field in Lit, or ",
			jsx(_components.code, { children: "useMemo" }),
			" in React)."
		] }),
		"\n",
		jsxs(_components.h2, {
			id: "async-validator-and-debouncing",
			children: [jsx(_components.a, {
				className: "header-anchor",
				"aria-label": "Permalink to \"Async validator, and debouncing\"",
				href: "#async-validator-and-debouncing",
				children: jsx(_components.span, {
					"aria-hidden": "true",
					children: "#"
				})
			}), "Async validator, and debouncing"]
		}),
		"\n",
		jsxs(_components.p, { children: [
			"For a check that's expensive or needs to hit a server (an availability check\nagainst a username, say), ",
			jsx(_components.code, { children: "asyncValidator" }),
			" is a separate, ",
			jsx(_components.strong, { children: "singular" }),
			" option,\nnot another ",
			jsx(_components.code, { children: "validators" }),
			" entry:"
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
									style: { "--shiki-light": "#0F7D6C" },
									children: "export"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#3D6F94" },
									children: " type"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#3C4257" },
									children: " AsyncValidator<TValue,"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#3C4257" },
									children: " TParentValue"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#3D6F94" },
									children: " ="
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#3C4257" },
									children: " never>"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#3D6F94" },
									children: " ="
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
									children: "  field"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#3D6F94" },
									children: ":"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#3C4257" },
									children: " FieldApi<TValue,"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#3C4257" },
									children: " TParentValue>,"
								})
							]
						}),
						"\n",
						jsxs(_components.span, {
							"data-line": "",
							children: [
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
									children: " ValidatorResult"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#3D6F94" },
									children: " |"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#3C4257" },
									children: " Promise<ValidatorResult>;"
								})
							]
						})
					]
				})
			})
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
									children: "username"
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
									children: " ["
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#16233A" },
									children: "required"
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
									children: "),"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#16233A" },
									children: " minLength"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#3C4257" },
									children: "("
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#9A5B13" },
									children: "3"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#3C4257" },
									children: ","
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#3C4257" },
									children: " \""
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#9A5B13" },
									children: "Too short"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#3C4257" },
									children: "\""
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#3C4257" },
									children: ")],"
								})
							]
						}),
						"\n",
						jsxs(_components.span, {
							"data-line": "",
							children: [
								jsx(_components.span, {
									style: { "--shiki-light": "#1A6FB0" },
									children: "  asyncValidator"
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
									children: "    ("
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
							children: [
								jsx(_components.span, {
									style: { "--shiki-light": "#1A6FB0" },
									children: "  validationDebounceMs"
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
			"It only runs once every ",
			jsx(_components.code, { children: "validators" }),
			" entry has already passed, so an\nexpensive/network-calling check never fires for a value already known invalid by\na cheap one. ",
			jsx(_components.code, { children: "validators" }),
			" are always immediate, never debounced;\n",
			jsx(_components.code, { children: "asyncValidator" }),
			" and ",
			jsx(_components.a, {
				href: "/form/guide/schema-validation",
				children: jsx(_components.code, { children: "schemaValidator" })
			}),
			" are the\ntwo places ",
			jsx(_components.code, { children: "validationDebounceMs" }),
			" applies. Rapid successive changes (fast\ntyping) coalesce into a single run fired after the debounce window, rather than\none per keystroke. ",
			jsx(_components.code, { children: "handleBlur" }),
			" flushes any still-pending debounced run\nimmediately, so the user isn't left waiting out the window after moving on from\nthe field."
		] }),
		"\n",
		jsxs(_components.p, { children: [
			"Singular, unlike ",
			jsx(_components.code, { children: "validators" }),
			": there's no real use case for stacking multiple\nasync checks on one field the way there is for small sync rules; combine them\nyourself inside that one function if you need more than one, e.g.\n",
			jsx(_components.code, { children: "async (field) => (await checkA(field)) ?? (await checkB(field))" }),
			"."
		] }),
		"\n",
		jsxs(_components.p, { children: [
			"While ",
			jsx(_components.code, { children: "asyncValidator" }),
			" is in flight, ",
			jsx(_components.code, { children: "validating" }),
			" is ",
			jsx(_components.code, { children: "true" }),
			" on that node and\nevery ancestor up to the root. Concurrent or redundant ",
			jsx(_components.code, { children: "validate()" }),
			" calls join a\nsingle in-flight run instead of stacking up duplicate work, and if a newer run\nsupersedes an older one, the older result is discarded when it resolves, so it\ncan never clobber a fresher answer."
		] }),
		"\n",
		jsxs(_components.h2, {
			id: "running-validation-explicitly",
			children: [jsx(_components.a, {
				className: "header-anchor",
				"aria-label": "Permalink to \"Running validation explicitly\"",
				href: "#running-validation-explicitly",
				children: jsx(_components.span, {
					"aria-hidden": "true",
					children: "#"
				})
			}), "Running validation explicitly"]
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
									style: { "--shiki-light": "#0F7D6C" },
									children: "await"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#16233A" },
									children: " emailField"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#3C4257" },
									children: "."
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#16233A" },
									children: "validate"
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
									children: "const"
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
									children: " emailField"
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
									children: ";"
								})
							]
						})
					]
				})
			})
		}),
		"\n",
		jsxs(_components.p, { children: [
			"Safe to call concurrently and redundantly: ",
			jsx(_components.code, { children: "asyncValidator" }),
			" runs at most once\nper generation of ",
			jsx(_components.code, { children: "value" }),
			"/",
			jsx(_components.code, { children: "asyncValidator" }),
			", and a plain ",
			jsx(_components.code, { children: "validate()" }),
			" doesn't\nre-run ",
			jsx(_components.code, { children: "validators" }),
			" at all (they're already current from the last value change).\nPass ",
			jsx(_components.code, { children: "validate(true)" }),
			" to force a full re-run, including ",
			jsx(_components.code, { children: "validators" }),
			", when\nsomething a validator reads changed out of band, not reflected in this node's\nown ",
			jsx(_components.code, { children: "value" }),
			", ",
			jsx(_components.code, { children: "validators" }),
			", or ",
			jsx(_components.code, { children: "asyncValidator" }),
			" (e.g. external state, or a\nsibling field this one isn't a ",
			jsx(_components.a, {
				href: "/form/guide/linked-fields",
				children: "dependent"
			}),
			" of):"
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
						jsx(_components.span, {
							"data-line": "",
							children: jsx(_components.span, {
								style: {
									"--shiki-light": "#A83A1C",
									"--shiki-light-font-style": "italic"
								},
								children: "// Re-check \"available\" against a username tracked outside the form tree."
							})
						}),
						"\n",
						jsxs(_components.span, {
							"data-line": "",
							children: [
								jsx(_components.span, {
									style: { "--shiki-light": "#0F7D6C" },
									children: "await"
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
									children: "username"
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
									children: "validate"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#3C4257" },
									children: "("
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#9A5B13" },
									children: "true"
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
		jsxs(_components.p, { children: [jsx(_components.code, { children: "waitForValidation()" }), " resolves once any pending/in-flight run settles."] }),
		"\n",
		jsxs(_components.h2, {
			id: "validators-on-nested-fields-and-forms",
			children: [
				jsx(_components.a, {
					className: "header-anchor",
					"aria-label": "Permalink to \"validators on nested fields and forms\"",
					href: "#validators-on-nested-fields-and-forms",
					children: jsx(_components.span, {
						"aria-hidden": "true",
						children: "#"
					})
				}),
				jsx(_components.code, { children: "validators" }),
				" on nested fields and forms"
			]
		}),
		"\n",
		jsxs(_components.p, { children: [
			"Because every node is the same ",
			jsx(_components.code, { children: "FieldApi" }),
			", a nested field or the form itself can\ncarry its own ",
			jsx(_components.code, { children: "validators" }),
			" too, independent of its children's, useful for a\nsingle rule spanning multiple fields rather than living on any one of them:"
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
									children: "    ("
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#16233A" },
									children: "group"
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
									children: "      group"
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
									children: "country"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#3D6F94" },
									children: " ==="
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#3C4257" },
									children: " \""
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#9A5B13" },
									children: "US"
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
									style: { "--shiki-light": "#3D6F94" },
									children: " !"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#16233A" },
									children: "group"
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
									children: "state"
								})
							]
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
									style: { "--shiki-light": "#3C4257" },
									children: " \""
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#9A5B13" },
									children: "State is required for US addresses"
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
									style: { "--shiki-light": "#3D6F94" },
									children: "        :"
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
								children: "  ],"
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
		}),
		"\n",
		jsxs(_components.p, { children: [
			"This is still ",
			jsx(_components.em, { children: "per-node" }),
			" validation: one message, on this one group's own\n",
			jsx(_components.code, { children: "error" }),
			", not ",
			jsx(_components.a, {
				href: "/form/guide/schema-validation",
				children: "schema validation"
			}),
			"'s\n",
			jsx(_components.code, { children: "schemaErrorMap" }),
			". Reach for this when you have one or two ad hoc cross-field\nrules; reach for ",
			jsx(_components.code, { children: "schemaValidator" }),
			" when you want a whole schema (and its own\nper-path messages) validating the group at once."
		] }),
		"\n",
		jsxs(_components.p, { children: [
			"A group's ",
			jsx(_components.code, { children: "invalid" }),
			" reflects ",
			jsx(_components.strong, { children: "itself or any descendant" }),
			", so a group-level\nerror like this surfaces the same way a child field's error would. For a rule\nthat only needs to ",
			jsx(_components.em, { children: "re-run a sibling's own validators" }),
			" rather than add a new\none, see ",
			jsx(_components.a, {
				href: "/form/guide/linked-fields",
				children: "Linked Fields"
			}),
			" instead."
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
