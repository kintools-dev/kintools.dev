import { Fragment, jsx, jsxs } from "react/jsx-runtime";
//#region ../form/docs/present.md
var frontmatter = {
	"layout": false,
	"title": "Kin Form — Presentation",
	"description": "Kin Form, one section per screen.",
	"head": [["meta", {
		"name": "robots",
		"content": "noindex"
	}]]
};
function _createMdxContent(props) {
	const _components = {
		code: "code",
		figure: "figure",
		p: "p",
		pre: "pre",
		span: "span",
		...props.components
	}, { BundleSizeChart, CodeGroup, CodeGroupItem, Cta, FeatureMatrix, Lede, PerformanceHighlight, Principle, Prose, TreeCaption, TreeDiagram, TreeEdge, TreeNode } = _components;
	if (!BundleSizeChart) _missingMdxReference("BundleSizeChart", true);
	if (!CodeGroup) _missingMdxReference("CodeGroup", true);
	if (!CodeGroupItem) _missingMdxReference("CodeGroupItem", true);
	if (!Cta) _missingMdxReference("Cta", true);
	if (!FeatureMatrix) _missingMdxReference("FeatureMatrix", true);
	if (!Lede) _missingMdxReference("Lede", true);
	if (!PerformanceHighlight) _missingMdxReference("PerformanceHighlight", true);
	if (!Principle) _missingMdxReference("Principle", true);
	if (!Prose) _missingMdxReference("Prose", true);
	if (!TreeCaption) _missingMdxReference("TreeCaption", true);
	if (!TreeDiagram) _missingMdxReference("TreeDiagram", true);
	if (!TreeEdge) _missingMdxReference("TreeEdge", true);
	if (!TreeNode) _missingMdxReference("TreeNode", true);
	return jsxs(Fragment, { children: [
		jsx("a", {
			class: "present-exit",
			href: "/form/",
			title: "Exit presentation",
			children: "✕"
		}),
		"\n",
		jsxs("div", {
			class: "home present",
			children: [
				jsxs("section", {
					class: "hero",
					children: [
						jsx("h1", {
							class: "section-header",
							children: "Kin Form"
						}),
						jsx(Lede, { children: "Build your field components once. Reuse them everywhere." }),
						jsxs("div", {
							class: "actions",
							children: [jsx("a", {
								class: "btn-primary",
								href: "/form/guide/getting-started",
								children: "Get Started"
							}), jsx("a", {
								class: "btn-secondary",
								href: "https://github.com/kintools-dev/form",
								children: "View on GitHub"
							})]
						}),
						jsx("p", {
							class: "present-byline",
							children: "Man Hoang (Kin)"
						})
					]
				}),
				jsxs("section", {
					class: "reuse",
					children: [
						jsx("h2", {
							class: "section-header",
							children: "The payoff"
						}),
						jsx(Lede, { children: "Forms read like composition, not wiring." }),
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
													children: "  <"
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
													children: "  <"
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
													children: "  <"
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
													children: "</"
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
										})
									]
								})
							})
						}),
						jsxs(Prose, { children: [
							"Each component receives a resolved ",
							jsx("code", { children: "FieldApi" }),
							", not a path or\nform context, so it mounts anywhere its value type fits and stays independently\nsubscribed."
						] }),
						jsx("p", {
							class: "reuse-cta",
							children: jsx("a", {
								href: "/form/guide/form-composition",
								children: "Build reusable field components →"
							})
						})
					]
				}),
				jsxs("section", {
					class: "why",
					children: [
						jsx("h2", {
							class: "section-header",
							children: "Why it exists"
						}),
						jsx(Prose, { children: "Kin Form treats a form as a tree: every node (leaf, group, or the form itself) is the same thing." }),
						jsxs(Prose, { children: [
							"Kin Form is flexible: same ",
							jsx("code", { children: "{ email, address: { line1, line2 } }" }),
							", three valid trees:"
						] }),
						jsxs("div", {
							class: "why-trees",
							children: [
								jsxs("div", {
									className: "flex flex-col gap-3",
									children: [jsxs(TreeDiagram, {
										viewBox: "0 0 232 100",
										titleId: "tree-one-title-p",
										title: "Form with two fields: email, and address as a single leaf.",
										children: [
											jsx(TreeEdge, { d: "M60,50 H74 V30 H88" }),
											jsx(TreeEdge, { d: "M60,50 H74 V70 H88" }),
											jsx(TreeNode, {
												x: 6,
												y: 39,
												width: 54,
												height: 22,
												label: "form",
												labelX: 33,
												labelY: 50
											}),
											jsx(TreeNode, {
												x: 88,
												y: 19,
												width: 54,
												height: 22,
												label: "email",
												labelX: 115,
												labelY: 30
											}),
											jsx(TreeNode, {
												x: 88,
												y: 59,
												width: 54,
												height: 22,
												label: "address",
												labelX: 115,
												labelY: 70
											})
										]
									}), jsxs(TreeCaption, { children: [
										jsx("strong", { children: "Leaf." }),
										" Any path in the value shape can be treated as a single leaf field. Here, ",
										jsx("code", { children: "address" }),
										" is."
									] })]
								}),
								jsxs("div", {
									className: "flex flex-col gap-3",
									children: [jsxs(TreeDiagram, {
										viewBox: "0 0 232 100",
										titleId: "tree-two-title-p",
										title: "Form with three flat fields: email, address.line1, and address.line2, all direct children of the form.",
										children: [
											jsx(TreeEdge, { d: "M60,50 H74 V20 H88" }),
											jsx(TreeEdge, { d: "M60,50 H74 V50 H88" }),
											jsx(TreeEdge, { d: "M60,50 H74 V80 H88" }),
											jsx(TreeNode, {
												x: 6,
												y: 39,
												width: 54,
												height: 22,
												label: "form",
												labelX: 33,
												labelY: 50
											}),
											jsx(TreeNode, {
												x: 88,
												y: 9,
												width: 54,
												height: 22,
												label: "email",
												labelX: 115,
												labelY: 20
											}),
											jsx(TreeNode, {
												x: 88,
												y: 39,
												width: 110,
												height: 22,
												label: "address.line1",
												labelX: 143,
												labelY: 50
											}),
											jsx(TreeNode, {
												x: 88,
												y: 69,
												width: 110,
												height: 22,
												label: "address.line2",
												labelX: 143,
												labelY: 80
											})
										]
									}), jsxs(TreeCaption, { children: [jsx("strong", { children: "Flat." }), " Every scalar is its own field, addressed by its full path."] })]
								}),
								jsxs("div", {
									className: "flex flex-col gap-3",
									children: [jsxs(TreeDiagram, {
										viewBox: "0 0 232 100",
										titleId: "tree-three-title-p",
										title: "Form with email as a leaf and address as a group, with line1 and line2 registered underneath it.",
										children: [
											jsx(TreeEdge, { d: "M60,42 H74 V20 H88" }),
											jsx(TreeEdge, { d: "M60,42 H74 V65 H88" }),
											jsx(TreeEdge, { d: "M142,65 H156 V50 H170" }),
											jsx(TreeEdge, { d: "M142,65 H156 V80 H170" }),
											jsx(TreeNode, {
												x: 6,
												y: 31,
												width: 54,
												height: 22,
												label: "form",
												labelX: 33,
												labelY: 42
											}),
											jsx(TreeNode, {
												x: 88,
												y: 9,
												width: 54,
												height: 22,
												label: "email",
												labelX: 115,
												labelY: 20
											}),
											jsx(TreeNode, {
												x: 88,
												y: 54,
												width: 54,
												height: 22,
												label: "address",
												labelX: 115,
												labelY: 65
											}),
											jsx(TreeNode, {
												x: 170,
												y: 39,
												width: 54,
												height: 22,
												label: "line1",
												labelX: 197,
												labelY: 50
											}),
											jsx(TreeNode, {
												x: 170,
												y: 69,
												width: 54,
												height: 22,
												label: "line2",
												labelX: 197,
												labelY: 80
											})
										]
									}), jsxs(TreeCaption, { children: [
										jsx("strong", { children: "Grouped." }),
										" ",
										jsx("code", { children: "address" }),
										" becomes an intermediate node, with ",
										jsx("code", { children: "line1" }),
										"/",
										jsx("code", { children: "line2" }),
										" registered underneath it."
									] })]
								})
							]
						})
					]
				}),
				jsxs("section", {
					class: "system",
					children: [jsx("h2", {
						class: "section-header",
						children: "What it does differently"
					}), jsxs("div", {
						class: "system-card principle-grid",
						children: [
							jsx(Principle, {
								title: "One state machine, not two",
								children: "A nested group and a leaf field are the same class, not a special case bolted onto it."
							}),
							jsxs(Principle, {
								title: "Type-safe paths",
								children: [jsx("code", { children: "field(\"items.0.code\")" }), " type-checks against your value type, so a typo'd path is a compile error."]
							}),
							jsxs(Principle, {
								title: "No special-case array API",
								children: [
									"Push, insert, move, swap, and remove live on the same class every field already has, not a separate ",
									jsx("code", { children: "useFieldArray" }),
									" hook."
								]
							}),
							jsxs(Principle, {
								title: "Declarative cross-field rules",
								children: [
									"List ",
									jsx("code", { children: "dependents" }),
									" on a field to re-validate siblings, instead of wiring a manual subscription."
								]
							}),
							jsx(Principle, {
								title: "Selective re-rendering",
								children: "A change propagates only to the nodes it affects, so each subscriber re-renders only when the field, or selected state, it's watching actually changed."
							}),
							jsxs(Principle, {
								title: "Composable fields",
								children: [
									"Your reusable ",
									jsx("code", { children: "TextField" }),
									", ",
									jsx("code", { children: "AddressField" }),
									", and ",
									jsx("code", { children: "SubmitButton" }),
									" each take a ",
									jsx("code", { children: "FieldApi" }),
									", so they work the same way whether bound to a leaf, a subtree, or the whole form."
								]
							})
						]
					})]
				}),
				jsxs("section", {
					class: "fit",
					children: [jsx("h2", {
						class: "section-header",
						children: "Is Kin Form a fit?"
					}), jsxs("div", {
						class: "fit-card",
						children: [jsxs("div", { children: [jsx(Lede, {
							as: "h3",
							children: "Use it when forms become reusable UI."
						}), jsxs("ul", {
							className: "list-disc pl-5 [&>li+li]:mt-2",
							children: [
								jsx("li", { children: "You maintain field components across forms or apps." }),
								jsx("li", { children: "Your forms have nested groups, repeatable rows, or multiple steps." }),
								jsx("li", { children: "You need stable array item identity and narrowly scoped re-renders." }),
								jsx("li", { children: "Field state must survive UI unmounts and remounts, such as rows in a virtual list." }),
								jsx("li", { children: "You want typed field paths without a separate array API." }),
								jsx("li", { children: "You need sync or async validation, scoped per field or subtree." })
							]
						})] }), jsxs("div", { children: [jsx(Lede, {
							as: "h3",
							children: "Skip it when the simple thing is enough."
						}), jsxs("ul", {
							className: "list-disc pl-5 [&>li+li]:mt-2",
							children: [
								jsx("li", { children: "The form is a small, one-off contact or login form." }),
								jsx("li", { children: "Component-local state is already simpler." }),
								jsx("li", { children: "Your team has a form-library standard that is working well and no pain worth migrating for." })
							]
						})] })]
					})]
				}),
				jsxs("section", {
					class: "numbers",
					children: [
						jsx("h2", {
							class: "section-header",
							children: "How it compares"
						}),
						jsx(FeatureMatrix, { full: true }),
						jsxs("div", {
							class: "numbers-grid",
							children: [jsx("div", {
								class: "system-card",
								children: jsx(BundleSizeChart, { title: "Bundle size (React usage, gzip)" })
							}), jsx("div", {
								class: "system-card",
								children: jsx(PerformanceHighlight, { title: "Flat field update burst (800×)" })
							})]
						}),
						jsxs("p", {
							className: "pt-3",
							children: ["Full comparison, including where Kin Form isn't the right fit: ", jsx(Cta, {
								href: "/form/comparison/",
								children: "see the details →"
							})]
						})
					]
				}),
				jsxs("section", {
					class: "demo",
					children: [jsx("h2", {
						class: "section-header",
						children: "See it for yourself"
					}), jsxs(CodeGroup, { children: [
						jsx(CodeGroupItem, {
							label: "1. Form with Watch",
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
												"data-highlighted-line": "",
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
														children: "/* Only re-render when the email field changes. */"
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
											jsxs(_components.span, {
												"data-line": "",
												children: [
													jsx(_components.span, {
														style: { "--shiki-light": "#16233A" },
														children: "          <"
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
													children: "            Email"
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
														children: "              onBlur"
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
														children: "touched "
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
											jsxs(_components.span, {
												"data-line": "",
												children: [
													jsx(_components.span, {
														style: { "--shiki-light": "#16233A" },
														children: "          </"
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
														children: "/* Only re-render when `form.submitting` flips. */"
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
														children: "submitting}>"
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
														children: "        {"
													}),
													jsx(_components.span, {
														style: { "--shiki-light": "#3C4257" },
														children: "("
													}),
													jsx(_components.span, {
														style: { "--shiki-light": "#16233A" },
														children: "_form"
													}),
													jsx(_components.span, {
														style: { "--shiki-light": "#3C4257" },
														children: ","
													}),
													jsx(_components.span, {
														style: { "--shiki-light": "#16233A" },
														children: " submitting"
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
														children: "{submitting}>Log in</"
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
						}),
						jsx(CodeGroupItem, {
							label: "2. Reusable TextField",
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
													}),
													jsx(_components.span, {
														style: { "--shiki-light": "#1A6FB0" },
														children: " ReactNode"
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
														style: { "--shiki-light": "#0F7D6C" },
														children: "export"
													}),
													jsx(_components.span, {
														style: { "--shiki-light": "#3D6F94" },
														children: " type"
													}),
													jsx(_components.span, {
														style: { "--shiki-light": "#3C4257" },
														children: " TextFieldProps<TParentValue>"
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
														children: "  api"
													}),
													jsx(_components.span, {
														style: { "--shiki-light": "#3D6F94" },
														children: ":"
													}),
													jsx(_components.span, {
														style: { "--shiki-light": "#3C4257" },
														children: " FieldApi<string,"
													}),
													jsx(_components.span, {
														style: { "--shiki-light": "#3C4257" },
														children: " TParentValue>;"
													})
												]
											}),
											"\n",
											jsxs(_components.span, {
												"data-line": "",
												children: [
													jsx(_components.span, {
														style: { "--shiki-light": "#1A6FB0" },
														children: "  label"
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
														children: "  type"
													}),
													jsx(_components.span, {
														style: { "--shiki-light": "#3D6F94" },
														children: "?:"
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
														style: { "--shiki-light": "#0F7D6C" },
														children: "export"
													}),
													jsx(_components.span, {
														style: { "--shiki-light": "#3D6F94" },
														children: " function"
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
														children: ", "
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
														style: { "--shiki-light": "#16233A" },
														children: "type"
													}),
													jsx(_components.span, {
														style: { "--shiki-light": "#3D6F94" },
														children: " ="
													}),
													jsx(_components.span, {
														style: { "--shiki-light": "#3C4257" },
														children: " \""
													}),
													jsx(_components.span, {
														style: { "--shiki-light": "#9A5B13" },
														children: "text"
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
														style: { "--shiki-light": "#3D6F94" },
														children: ":"
													}),
													jsx(_components.span, {
														style: { "--shiki-light": "#3C4257" },
														children: " TextFieldProps<TParentValue>,"
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
														children: ":"
													}),
													jsx(_components.span, {
														style: { "--shiki-light": "#3C4257" },
														children: " ReactNode {"
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
													children: "  // Re-renders when the api's state changes."
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
														children: "        type"
													}),
													jsx(_components.span, {
														style: { "--shiki-light": "#3D6F94" },
														children: "="
													}),
													jsx(_components.span, {
														style: { "--shiki-light": "#16233A" },
														children: "{type}"
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
														children: "touched "
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
														children: "invalid "
													}),
													jsx(_components.span, {
														style: { "--shiki-light": "#3D6F94" },
														children: "&&"
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
													style: {
														"--shiki-light": "#A83A1C",
														"--shiki-light-font-style": "italic"
													},
													children: "        // Per-node validation and schema validation can co-exist."
												})
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
											})
										]
									})
								})
							})
						}),
						jsx(CodeGroupItem, {
							label: "3. Reusable SubmitButton",
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
													}),
													jsx(_components.span, {
														style: { "--shiki-light": "#1A6FB0" },
														children: " ReactNode"
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
														style: { "--shiki-light": "#0F7D6C" },
														children: "export"
													}),
													jsx(_components.span, {
														style: { "--shiki-light": "#3D6F94" },
														children: " type"
													}),
													jsx(_components.span, {
														style: { "--shiki-light": "#3C4257" },
														children: " SubmitButtonProps<TValue>"
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
														children: "  api"
													}),
													jsx(_components.span, {
														style: { "--shiki-light": "#3D6F94" },
														children: ":"
													}),
													jsx(_components.span, {
														style: { "--shiki-light": "#3C4257" },
														children: " FormApi<TValue>;"
													}),
													jsx(_components.span, {
														style: {
															"--shiki-light": "#A83A1C",
															"--shiki-light-font-style": "italic"
														},
														children: " // Subclass of FieldApi."
													})
												]
											}),
											"\n",
											jsxs(_components.span, {
												"data-line": "",
												children: [
													jsx(_components.span, {
														style: { "--shiki-light": "#1A6FB0" },
														children: "  children"
													}),
													jsx(_components.span, {
														style: { "--shiki-light": "#3D6F94" },
														children: ":"
													}),
													jsx(_components.span, {
														style: { "--shiki-light": "#3C4257" },
														children: " ReactNode;"
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
														style: { "--shiki-light": "#0F7D6C" },
														children: "export"
													}),
													jsx(_components.span, {
														style: { "--shiki-light": "#3D6F94" },
														children: " function"
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
														children: " SubmitButtonProps<TValue>,"
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
														children: ":"
													}),
													jsx(_components.span, {
														style: { "--shiki-light": "#3C4257" },
														children: " ReactNode {"
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
													children: "  // Re-render only when submitting flips."
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
														children: " submitting"
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
														children: "submitting"
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
														children: "{submitting}>"
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
						}),
						jsx(CodeGroupItem, {
							label: "4. Form with reusable components",
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
												"data-highlighted-line": "",
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
												"data-highlighted-line": "",
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
												"data-highlighted-line": "",
												children: jsx(_components.span, {
													style: { "--shiki-light": "#16233A" },
													children: "      />"
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
														children: "{form}>Log in</"
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
						})
					] })]
				})
			]
		}),
		"\n",
		jsxs("style", {
			scoped: true,
			children: [
				jsxs(_components.p, { children: [
					"/* Turns the homepage's own section flow into one fullscreen slide per\nsection, scroll-snapped, without redeclaring any of the typography,\ncolor, or spacing rules ",
					jsx(_components.code, { children: "style.css" }),
					" already gives these same classes\non the regular homepage. */\n.present {\nheight: 100vh;\noverflow-y: auto;\nscroll-snap-type: y mandatory;\n}"
				] }),
				jsx(_components.p, { children: ".present > section {\nmin-height: 100vh;\ndisplay: flex;\nflex-direction: column;\njustify-content: flex-start;\nscroll-snap-align: start;\nscroll-snap-stop: always;\noverflow-y: auto;\npadding: 3rem 1rem 0;\n}\n.present > section:first-child {\njustify-content: center;\n}\n.present > section:last-child {\npadding-top: 1rem;\n}" }),
				jsx(_components.p, { children: ".present-exit {\nposition: fixed;\ntop: 16px;\nright: 16px;\nz-index: 10;\nwidth: 32px;\nheight: 32px;\ndisplay: flex;\nalign-items: center;\njustify-content: center;\nborder-radius: 999px;\nbackground: var(--code-bg);\nborder: 1px solid var(--border);\ncolor: var(--text-muted);\nfont-size: 16px;\nline-height: 1;\n}" }),
				jsx(_components.p, { children: ".present-exit:hover {\ncolor: var(--text);\nborder-color: var(--text);\n}" }),
				jsx(_components.p, { children: ".present-byline {\nmargin: 24px 0 0;\nfont-size: 14px;\nline-height: 20px;\ncolor: var(--text-muted);\n}" })
			]
		})
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
