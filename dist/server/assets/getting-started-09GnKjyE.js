import { Fragment, jsx, jsxs } from "react/jsx-runtime";
//#region ../form/docs/guide/getting-started.md
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
	}, { CodeGroup, CodeGroupItem } = _components;
	if (!CodeGroup) _missingMdxReference("CodeGroup", true);
	if (!CodeGroupItem) _missingMdxReference("CodeGroupItem", true);
	return jsxs(Fragment, { children: [
		jsxs(_components.h1, {
			id: "getting-started",
			children: [jsx(_components.a, {
				className: "header-anchor",
				"aria-label": "Permalink to \"Getting Started\"",
				href: "#getting-started",
				children: jsx(_components.span, {
					"aria-hidden": "true",
					children: "#"
				})
			}), "Getting Started"]
		}),
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
		jsxs(CodeGroup, { children: [jsx(CodeGroupItem, {
			label: "React",
			children: jsx(_components.figure, {
				"data-rehype-pretty-code-figure": "",
				children: jsx(_components.pre, {
					tabIndex: "0",
					"data-language": "sh",
					"data-theme": "poimandres-light",
					children: jsxs(_components.code, {
						"data-language": "sh",
						"data-theme": "poimandres-light",
						style: { display: "grid" },
						children: [
							jsxs(_components.span, {
								"data-line": "",
								children: [
									jsx(_components.span, {
										style: { "--shiki-light": "#3D6F94" },
										children: "npm"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#1A6FB0" },
										children: "  add"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#1A6FB0" },
										children: " @kintools/form-react"
									})
								]
							}),
							"\n",
							jsxs(_components.span, {
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
										children: " @kintools/form-react"
									})
								]
							}),
							"\n",
							jsxs(_components.span, {
								"data-line": "",
								children: [
									jsx(_components.span, {
										style: { "--shiki-light": "#3D6F94" },
										children: "yarn"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#1A6FB0" },
										children: " add"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#1A6FB0" },
										children: " @kintools/form-react"
									})
								]
							}),
							"\n",
							jsxs(_components.span, {
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
										children: " jsr:@kintools/form-react"
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
					"data-language": "sh",
					"data-theme": "poimandres-light",
					children: jsxs(_components.code, {
						"data-language": "sh",
						"data-theme": "poimandres-light",
						style: { display: "grid" },
						children: [
							jsxs(_components.span, {
								"data-line": "",
								children: [
									jsx(_components.span, {
										style: { "--shiki-light": "#3D6F94" },
										children: "npm"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#1A6FB0" },
										children: "  add"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#1A6FB0" },
										children: " @kintools/form-lit"
									})
								]
							}),
							"\n",
							jsxs(_components.span, {
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
										children: " @kintools/form-lit"
									})
								]
							}),
							"\n",
							jsxs(_components.span, {
								"data-line": "",
								children: [
									jsx(_components.span, {
										style: { "--shiki-light": "#3D6F94" },
										children: "yarn"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#1A6FB0" },
										children: " add"
									}),
									jsx(_components.span, {
										style: { "--shiki-light": "#1A6FB0" },
										children: " @kintools/form-lit"
									})
								]
							}),
							"\n",
							jsxs(_components.span, {
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
										children: " jsr:@kintools/form-lit"
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
			jsx(_components.code, { children: "@kintools/form-react" }),
			" and ",
			jsx(_components.code, { children: "@kintools/form-lit" }),
			" re-export ",
			jsx(_components.code, { children: "@kintools/form-core" }),
			"."
		] }),
		"\n",
		jsx(_components.p, { children: "To add common validators or the schema validation adapter:" }),
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
				label: "yarn",
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
										children: "yarn"
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
				" from ",
				jsx(_components.code, { children: "Watch" }),
				", the pattern\nthe rest of these guides lean on"
			] }),
			"\n",
			jsxs(_components.li, { children: [jsx(_components.a, {
				href: "/form/guide/per-node-validation",
				children: "Per-node Validation"
			}), " — validators,\ndebouncing, and running validation explicitly"] }),
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
					href: "/form/validators/",
					children: "Validators"
				}),
				" — ",
				jsx(_components.code, { children: "required" }),
				", ",
				jsx(_components.code, { children: "email" }),
				", ",
				jsx(_components.code, { children: "minLength" }),
				", a\n",
				jsx(_components.code, { children: "toSchemaValidator()" }),
				" adapter for zod/valibot, and more"
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
