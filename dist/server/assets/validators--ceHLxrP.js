import { Fragment, jsx, jsxs } from "react/jsx-runtime";
//#region ../form/docs/validators/index.md
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
		table: "table",
		tbody: "tbody",
		td: "td",
		th: "th",
		thead: "thead",
		tr: "tr",
		...props.components
	}, { CodeGroup, CodeGroupItem } = _components;
	if (!CodeGroup) _missingMdxReference("CodeGroup", true);
	if (!CodeGroupItem) _missingMdxReference("CodeGroupItem", true);
	return jsxs(Fragment, { children: [
		jsxs(_components.h1, {
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
		jsxs(_components.p, { children: [
			"Common validator factories for Kin Form, published as\n",
			jsx(_components.code, { children: "@kintools/form-validators" }),
			". Split out from ",
			jsx(_components.code, { children: "@kintools/form-core" }),
			" on purpose:\nvalidator wording and edge cases churn far more than the engine does, so it's\nversioned separately."
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
										children: " @kintools/form-validators"
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
										children: " @kintools/form-validators"
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
										children: " jsr:@kintools/form-validators"
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
			id: "available-validators",
			children: [jsx(_components.a, {
				className: "header-anchor",
				"aria-label": "Permalink to \"Available validators\"",
				href: "#available-validators",
				children: jsx(_components.span, {
					"aria-hidden": "true",
					children: "#"
				})
			}), "Available validators"]
		}),
		"\n",
		jsxs(_components.table, { children: [jsx(_components.thead, { children: jsxs(_components.tr, { children: [jsx(_components.th, { children: "Validator" }), jsx(_components.th, { children: "Flags" })] }) }), jsxs(_components.tbody, { children: [
			jsxs(_components.tr, { children: [jsx(_components.td, { children: jsx(_components.code, { children: "required(message?)" }) }), jsxs(_components.td, { children: [
				"A missing value: ",
				jsx(_components.code, { children: "null" }),
				"/",
				jsx(_components.code, { children: "undefined" }),
				", an all-whitespace string, or an empty array."
			] })] }),
			jsxs(_components.tr, { children: [jsx(_components.td, { children: jsx(_components.code, { children: "minLength(min, message?)" }) }), jsxs(_components.td, { children: [
				"A string or array shorter than ",
				jsx(_components.code, { children: "min" }),
				"."
			] })] }),
			jsxs(_components.tr, { children: [jsx(_components.td, { children: jsx(_components.code, { children: "maxLength(max, message?)" }) }), jsxs(_components.td, { children: [
				"A string or array longer than ",
				jsx(_components.code, { children: "max" }),
				"."
			] })] }),
			jsxs(_components.tr, { children: [jsx(_components.td, { children: jsx(_components.code, { children: "min(min, message?)" }) }), jsxs(_components.td, { children: [
				"A number smaller than ",
				jsx(_components.code, { children: "min" }),
				"."
			] })] }),
			jsxs(_components.tr, { children: [jsx(_components.td, { children: jsx(_components.code, { children: "max(max, message?)" }) }), jsxs(_components.td, { children: [
				"A number larger than ",
				jsx(_components.code, { children: "max" }),
				"."
			] })] }),
			jsxs(_components.tr, { children: [jsx(_components.td, { children: jsx(_components.code, { children: "url(message?)" }) }), jsxs(_components.td, { children: [
				"A non-empty string that isn't a valid URL (per the ",
				jsx(_components.code, { children: "URL" }),
				" constructor)."
			] })] }),
			jsxs(_components.tr, { children: [jsx(_components.td, { children: jsx(_components.code, { children: "email(message?)" }) }), jsx(_components.td, { children: "A non-empty string that isn't a valid email address." })] }),
			jsxs(_components.tr, { children: [jsx(_components.td, { children: jsx(_components.code, { children: "pattern(regex, message?)" }) }), jsxs(_components.td, { children: [
				"A non-empty string that doesn't match ",
				jsx(_components.code, { children: "regex" }),
				"."
			] })] }),
			jsxs(_components.tr, { children: [jsx(_components.td, { children: jsx(_components.code, { children: "maxFileSize(bytes, message?)" }) }), jsxs(_components.td, { children: [
				"A ",
				jsx(_components.code, { children: "File" }),
				" larger than ",
				jsx(_components.code, { children: "bytes" }),
				"."
			] })] }),
			jsxs(_components.tr, { children: [jsx(_components.td, { children: jsx(_components.code, { children: "password(options, message?)" }) }), jsx(_components.td, { children: "A non-empty string that doesn't meet every enabled rule." })] })
		] })] }),
		"\n",
		jsxs(_components.p, { children: [
			"The format-specific validators (",
			jsx(_components.code, { children: "url" }),
			", ",
			jsx(_components.code, { children: "email" }),
			", ",
			jsx(_components.code, { children: "pattern" }),
			") deliberately pass an\nempty value through instead of also flagging it: combine them with ",
			jsx(_components.code, { children: "required()" }),
			"\nfor a mandatory field, or use them alone for a field that's optional but must be\nwell-formed when present. ",
			jsx(_components.code, { children: "maxFileSize" }),
			" passes through a missing file the same\nway."
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
		jsxs(_components.h2, {
			id: "default-messages-as-i18n-keys",
			children: [jsx(_components.a, {
				className: "header-anchor",
				"aria-label": "Permalink to \"Default messages as i18n keys\"",
				href: "#default-messages-as-i18n-keys",
				children: jsx(_components.span, {
					"aria-hidden": "true",
					children: "#"
				})
			}), "Default messages as i18n keys"]
		}),
		"\n",
		jsxs(_components.p, { children: [
			"Every factory's default ",
			jsx(_components.code, { children: "message" }),
			" is its own name (",
			jsx(_components.code, { children: "\"required\"" }),
			", ",
			jsx(_components.code, { children: "\"minLength\"" }),
			",\n",
			jsx(_components.code, { children: "\"maxLength\"" }),
			", ",
			jsx(_components.code, { children: "\"min\"" }),
			", ",
			jsx(_components.code, { children: "\"max\"" }),
			", ",
			jsx(_components.code, { children: "\"url\"" }),
			", ",
			jsx(_components.code, { children: "\"email\"" }),
			", ",
			jsx(_components.code, { children: "\"pattern\"" }),
			",\n",
			jsx(_components.code, { children: "\"maxFileSize\"" }),
			", ",
			jsx(_components.code, { children: "\"password\"" }),
			"), not an English sentence, so it doubles as a\nstable i18n lookup key rather than display text:"
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
									style: { "--shiki-light": "#16233A" },
									children: " <"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#0F7D6C" },
									children: "span"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#16233A" },
									children: ">{t"
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
									children: "error"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#3C4257" },
									children: ")"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#16233A" },
									children: "}</"
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
			"Pass an explicit ",
			jsx(_components.code, { children: "message" }),
			" to skip localization and show literal text instead,\ne.g. ",
			jsx(_components.code, { children: "required(\"This field is required\")" }),
			"."
		] }),
		"\n",
		jsxs(_components.h2, {
			id: "password",
			children: [jsx(_components.a, {
				className: "header-anchor",
				"aria-label": "Permalink to \"password\"",
				href: "#password",
				children: jsx(_components.span, {
					"aria-hidden": "true",
					children: "#"
				})
			}), jsx(_components.code, { children: "password" })]
		}),
		"\n",
		jsxs(_components.p, { children: [
			"Reports one shared ",
			jsx(_components.code, { children: "message" }),
			" for any failing rule rather than identifying which\none: pair it with a requirements checklist in the UI (rendered from the same\noptions) rather than relying on ",
			jsx(_components.code, { children: "message" }),
			" to explain what's missing:"
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
									style: { "--shiki-light": "#16233A" },
									children: "    password"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#3C4257" },
									children: "({"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#1A6FB0" },
									children: " minLength"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#3C4257" },
									children: ":"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#9A5B13" },
									children: " 8"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#3C4257" },
									children: ","
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#1A6FB0" },
									children: " digit"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#3C4257" },
									children: ":"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#9A5B13" },
									children: " true"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#3C4257" },
									children: ","
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#1A6FB0" },
									children: " upper"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#3C4257" },
									children: ":"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#9A5B13" },
									children: " true"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#3C4257" },
									children: ","
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#1A6FB0" },
									children: " symbol"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#3C4257" },
									children: ":"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#9A5B13" },
									children: " true"
								}),
								jsx(_components.span, {
									style: { "--shiki-light": "#3C4257" },
									children: " }),"
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
		jsxs(_components.table, { children: [jsx(_components.thead, { children: jsxs(_components.tr, { children: [jsx(_components.th, { children: "Option" }), jsx(_components.th, { children: "Requires" })] }) }), jsxs(_components.tbody, { children: [
			jsxs(_components.tr, { children: [jsx(_components.td, { children: jsx(_components.code, { children: "minLength" }) }), jsx(_components.td, { children: "Minimum string length." })] }),
			jsxs(_components.tr, { children: [jsx(_components.td, { children: jsx(_components.code, { children: "maxLength" }) }), jsx(_components.td, { children: "Maximum string length." })] }),
			jsxs(_components.tr, { children: [jsx(_components.td, { children: jsx(_components.code, { children: "digit" }) }), jsxs(_components.td, { children: [
				"At least one digit (",
				jsx(_components.code, { children: "0" }),
				"-",
				jsx(_components.code, { children: "9" }),
				")."
			] })] }),
			jsxs(_components.tr, { children: [jsx(_components.td, { children: jsx(_components.code, { children: "upper" }) }), jsx(_components.td, { children: "At least one uppercase letter." })] }),
			jsxs(_components.tr, { children: [jsx(_components.td, { children: jsx(_components.code, { children: "lower" }) }), jsx(_components.td, { children: "At least one lowercase letter." })] }),
			jsxs(_components.tr, { children: [jsx(_components.td, { children: jsx(_components.code, { children: "symbol" }) }), jsx(_components.td, { children: "At least one non-alphanumeric character." })] })
		] })] }),
		"\n",
		jsxs(_components.p, { children: [
			"A rule left ",
			jsx(_components.code, { children: "undefined" }),
			" isn't checked."
		] }),
		"\n",
		jsxs(_components.h2, {
			id: "toschemavalidator-standard-schema-adapter",
			children: [
				jsx(_components.a, {
					className: "header-anchor",
					"aria-label": "Permalink to \"toSchemaValidator(): Standard Schema adapter\"",
					href: "#toschemavalidator-standard-schema-adapter",
					children: jsx(_components.span, {
						"aria-hidden": "true",
						children: "#"
					})
				}),
				jsx(_components.code, { children: "toSchemaValidator()" }),
				": Standard Schema adapter"
			]
		}),
		"\n",
		jsxs(_components.p, { children: [
			"Adapts any ",
			jsx(_components.a, {
				href: "https://standardschema.dev",
				children: "Standard Schema"
			}),
			"-compliant library (zod\nv4+, valibot v1+, arktype, ...) into a ",
			jsx(_components.code, { children: "SchemaValidator" }),
			", for\nwhole-group/whole-form validation. Attach it as a group's or form's\n",
			jsx(_components.code, { children: "schemaValidator" }),
			", and it runs the group's own ",
			jsx(_components.code, { children: "~standard" }),
			" validation and\npopulates ",
			jsx(_components.code, { children: "schemaErrorMap" }),
			" (a flat, dot-joined path -> message map) from the\nresult's issues:"
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
								children: "});"
							})
						})
					]
				})
			})
		}),
		"\n",
		jsxs(_components.p, { children: [
			"Each issue's ",
			jsx(_components.code, { children: "path" }),
			" becomes a key in that map (e.g. ",
			jsx(_components.code, { children: "\"address.line1\"" }),
			"), so a\nchild field with that exact ",
			jsx(_components.code, { children: "name" }),
			" can read its own slice of it via\n",
			jsx(_components.code, { children: "field.schemaError" }),
			", without any per-field wiring. Use it for whole-tree schema\nvalidation; individual fields should keep using regular field validators\n(",
			jsx(_components.code, { children: "required" }),
			", ",
			jsx(_components.code, { children: "pattern" }),
			", a hand-written one, ...) rather than a schema of their\nown. Mixing the two invites them to disagree."
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
