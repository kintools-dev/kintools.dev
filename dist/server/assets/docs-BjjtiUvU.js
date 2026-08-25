import { jsx, jsxs } from "react/jsx-runtime";
//#region ../form/docs/index.md
var frontmatter = {
	"layout": "home",
	"markdownStyles": false
};
function _createMdxContent(props) {
	const _components = {
		code: "code",
		figure: "figure",
		pre: "pre",
		span: "span",
		...props.components
	}, { BundleSizeChart, Button, Card, CodeGroup, CodeGroupItem, Cta, FeatureMatrix, Grid, Hero, Home, Lede, PerformanceHighlight, Principle, Prose, Section, SectionHeader, TreeCaption, TreeDiagram, TreeEdge, TreeNode } = _components;
	if (!BundleSizeChart) _missingMdxReference("BundleSizeChart", true);
	if (!Button) _missingMdxReference("Button", true);
	if (!Card) _missingMdxReference("Card", true);
	if (!CodeGroup) _missingMdxReference("CodeGroup", true);
	if (!CodeGroupItem) _missingMdxReference("CodeGroupItem", true);
	if (!Cta) _missingMdxReference("Cta", true);
	if (!FeatureMatrix) _missingMdxReference("FeatureMatrix", true);
	if (!Grid) _missingMdxReference("Grid", true);
	if (!Hero) _missingMdxReference("Hero", true);
	if (!Home) _missingMdxReference("Home", true);
	if (!Lede) _missingMdxReference("Lede", true);
	if (!PerformanceHighlight) _missingMdxReference("PerformanceHighlight", true);
	if (!Principle) _missingMdxReference("Principle", true);
	if (!Prose) _missingMdxReference("Prose", true);
	if (!Section) _missingMdxReference("Section", true);
	if (!SectionHeader) _missingMdxReference("SectionHeader", true);
	if (!TreeCaption) _missingMdxReference("TreeCaption", true);
	if (!TreeDiagram) _missingMdxReference("TreeDiagram", true);
	if (!TreeEdge) _missingMdxReference("TreeEdge", true);
	if (!TreeNode) _missingMdxReference("TreeNode", true);
	return jsxs(Home, { children: [
		jsxs(Hero, {
			title: "Kin Form",
			lede: "Build your field components once. Reuse them everywhere.",
			description: "A framework-agnostic form state library for TypeScript.",
			children: [jsx(Button, {
				href: "/form/guide/getting-started",
				children: "Get Started"
			}), jsx(Button, {
				href: "https://github.com/kintools-dev/form",
				variant: "secondary",
				external: true,
				children: "View on GitHub"
			})]
		}),
		jsxs(Section, { children: [
			jsx(SectionHeader, { children: "The payoff" }),
			jsx(Lede, { children: "Forms read like composition, not wiring." }),
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
									children: [
										jsx(_components.span, {
											style: { "--shiki-light": "#16233A" },
											children: "  <"
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
											style: { "--shiki-light": "#16233A" },
											children: "form"
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
											children: "    <"
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
											children: "Email"
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
											children: "    <"
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
											children: "    <"
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
								jsxs(_components.span, {
									"data-line": "",
									children: [
										jsx(_components.span, {
											style: { "--shiki-light": "#16233A" },
											children: "    <"
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
											children: "    <"
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
											style: { "--shiki-light": "#16233A" },
											children: "form"
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
											children: "  </"
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
										children: "`;"
									})
								})
							]
						})
					})
				})
			})] }),
			jsxs(Prose, { children: [
				"Each component receives a resolved ",
				jsx("code", { children: "FieldApi" }),
				", not a path or\nform context. Define the UI and behavior once, then mount it anywhere its value\ntype fits. Kin Form keeps that component independently subscribed, so a change\nonly updates the part of the form that depends on it."
			] }),
			jsx("p", { children: jsx(Cta, {
				href: "/form/guide/form-composition",
				children: "Build reusable field components →"
			}) })
		] }),
		jsxs(Section, { children: [
			jsx(SectionHeader, { children: "Why it exists" }),
			jsxs(Prose, { children: [
				"Reusable field components ",
				jsx(Cta, {
					href: "/form/comparison/react-hook-form#nested-group-field",
					children: "become awkward"
				}),
				" when a library treats the form as the only stateful object and fields as proxies into it. Nested objects, arrays, and shared validation then need their own special mechanisms."
			] }),
			jsx(Prose, { children: "Kin Form treats a form as a tree where every node (leaf, group, or the form itself) is the same thing, with its own state, configuration, and subscribers. That is why one component pattern works at every level." }),
			jsxs(Prose, { children: [
				"Nothing forces one shape on a given value. Same ",
				jsx("code", { children: "{ email, address: { line1, line2 } }" }),
				", three valid trees:"
			] }),
			jsxs(Grid, {
				cols: 3,
				divided: true,
				children: [
					jsxs("div", {
						className: "flex flex-col gap-3",
						children: [jsxs(TreeDiagram, {
							viewBox: "0 0 232 100",
							titleId: "tree-one-title",
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
							titleId: "tree-two-title",
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
							titleId: "tree-three-title",
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
		] }),
		jsxs(Section, { children: [jsx(SectionHeader, { children: "What it does differently" }), jsx(Card, { children: jsxs(Grid, {
			cols: 2,
			divided: true,
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
		}) })] }),
		jsxs(Section, { children: [jsx(SectionHeader, { children: "Is Kin Form a fit?" }), jsx(Card, { children: jsxs(Grid, {
			cols: 2,
			children: [jsxs("div", { children: [jsx(Lede, {
				as: "h3",
				children: "Use it when forms become reusable UI"
			}), jsxs("ul", {
				className: "list-disc pl-5 [&>li+li]:mt-2",
				children: [
					jsx("li", { children: "You maintain field components across forms or apps" }),
					jsx("li", { children: "Your forms have nested groups, dynamic arrays, or multiple steps" }),
					jsx("li", { children: "You need stable array item identity and narrowly scoped re-renders" }),
					jsx("li", { children: "You want typed field paths without a separate array API" }),
					jsx("li", { children: "You need sync or async validation, scoped per field or subtree" }),
					jsx("li", { children: "Field state must survive UI unmounts and remounts, such as rows in a virtual list" })
				]
			})] }), jsxs("div", { children: [jsx(Lede, {
				as: "h3",
				children: "Skip it when the simple thing is enough"
			}), jsxs("ul", {
				className: "list-disc pl-5 [&>li+li]:mt-2",
				children: [
					jsx("li", { children: "The form is a small, one-off contact or login form" }),
					jsx("li", { children: "Component-local state is already simpler" }),
					jsx("li", { children: "Your team has a form-library standard that is working well and no pain worth migrating for" })
				]
			})] })]
		}) })] }),
		jsxs(Section, { children: [
			jsx(SectionHeader, { children: "How it compares" }),
			jsx(FeatureMatrix, { full: true }),
			jsxs(Grid, {
				cols: 2,
				className: "mt-10",
				children: [jsx(Card, { children: jsx(BundleSizeChart, { title: "Bundle size (React usage, gzip)" }) }), jsx(Card, { children: jsx(PerformanceHighlight, { title: "Flat field update burst (800×)" }) })]
			}),
			jsxs("p", {
				className: "mt-6",
				children: ["Full comparison, including where Kin Form isn't the right fit: ", jsx(Cta, {
					href: "/form/comparison/",
					children: "see the details →"
				})]
			})
		] }),
		jsxs(Section, { children: [
			jsx(SectionHeader, { children: "See it for yourself" }),
			jsx(Lede, {
				step: "01",
				children: "A login form"
			}),
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
									"data-highlighted-line": "",
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
											children: "/* Watch is great for one-off UI or prototyping. */"
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
									"data-highlighted-line": "",
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
										children: "        <!-- watch is great for one-off UI or prototyping. -->"
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
										children: "        <!-- Only re-render this part when the email field changes. -->"
									})
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
									"data-highlighted-line": "",
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
											children: "email"
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
											children: " }),"
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
											children: "field"
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
											children: "            <"
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
										children: "              Email"
									})
								}),
								"\n",
								jsxs(_components.span, {
									"data-line": "",
									children: [jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "              <"
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
											children: "                .value"
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
											children: "                @blur"
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
											children: "field"
										}),
										jsx(_components.span, {
											style: { "--shiki-light": "#3C4257" },
											children: "."
										}),
										jsx(_components.span, {
											style: { "--shiki-light": "#16233A" },
											children: "handleBlur"
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
											children: "                @input"
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
											children: "("
										}),
										jsx(_components.span, {
											style: { "--shiki-light": "#16233A" },
											children: "e"
										}),
										jsx(_components.span, {
											style: { "--shiki-light": "#3D6F94" },
											children: ":"
										}),
										jsx(_components.span, {
											style: { "--shiki-light": "#3C4257" },
											children: " Event)"
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
											children: "                  field"
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
											children: "(("
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
											children: "target "
										}),
										jsx(_components.span, {
											style: { "--shiki-light": "#3C4257" },
											children: "as"
										}),
										jsx(_components.span, {
											style: { "--shiki-light": "#3C4257" },
											children: " HTMLInputElement)."
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
								jsxs(_components.span, {
									"data-line": "",
									children: [
										jsx(_components.span, {
											style: { "--shiki-light": "#16233A" },
											children: "            </"
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
									"data-highlighted-line": "",
									children: [
										jsx(_components.span, {
											style: { "--shiki-light": "#0F7D6C" },
											children: "            ${"
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
											children: "touched"
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
											children: "error"
										})
									]
								}),
								"\n",
								jsxs(_components.span, {
									"data-line": "",
									"data-highlighted-line": "",
									children: [
										jsx(_components.span, {
											style: { "--shiki-light": "#3D6F94" },
											children: "              ?"
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
											children: "              :"
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
								jsx(_components.span, {
									"data-line": "",
									children: jsx(_components.span, {
										style: { "--shiki-light": "#3C4257" },
										children: "          `,"
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
										children: "        <!-- Only re-render this part when form.submitting flips. -->"
									})
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
									"data-highlighted-line": "",
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
											children: "submitting"
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
											children: "_form"
										}),
										jsx(_components.span, {
											style: { "--shiki-light": "#3C4257" },
											children: ", "
										}),
										jsx(_components.span, {
											style: { "--shiki-light": "#16233A" },
											children: "submitting"
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
											children: "submitting"
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
											children: "Log in"
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
			jsx("br", {}),
			jsx(Lede, {
				step: "02",
				children: "Reusable TextField"
			}),
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
									"data-highlighted-line": "",
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
									"data-highlighted-line": "",
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
											children: "text-field"
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
											style: { "--shiki-light": "#0F7D6C" },
											children: "export"
										}),
										jsx(_components.span, {
											style: { "--shiki-light": "#3D6F94" },
											children: " class"
										}),
										jsx(_components.span, {
											style: { "--shiki-light": "#1A6FB0" },
											children: " TextField"
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
									"data-highlighted-line": "",
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
											children: " FieldApi<string, unknown>;"
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
											children: "()"
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
											children: " label "
										}),
										jsx(_components.span, {
											style: { "--shiki-light": "#3D6F94" },
											children: "="
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
										children: "  // Re-renders when the api's state changes."
									})
								}),
								"\n",
								jsxs(_components.span, {
									"data-line": "",
									"data-highlighted-line": "",
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
											children: " field"
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
											style: { "--shiki-light": "#16233A" },
											children: "      <"
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
									children: [
										jsx(_components.span, {
											style: { "--shiki-light": "#0F7D6C" },
											children: "        ${"
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
											children: "label"
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
									children: [jsx(_components.span, {
										style: { "--shiki-light": "#16233A" },
										children: "        <"
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
											children: "          .value"
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
											children: "          @blur"
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
											children: "field"
										}),
										jsx(_components.span, {
											style: { "--shiki-light": "#3C4257" },
											children: "."
										}),
										jsx(_components.span, {
											style: { "--shiki-light": "#16233A" },
											children: "handleBlur"
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
											children: "          @input"
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
											children: "("
										}),
										jsx(_components.span, {
											style: { "--shiki-light": "#16233A" },
											children: "e"
										}),
										jsx(_components.span, {
											style: { "--shiki-light": "#3D6F94" },
											children: ":"
										}),
										jsx(_components.span, {
											style: { "--shiki-light": "#3C4257" },
											children: " Event)"
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
											children: "            field"
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
											children: "(("
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
											children: "target "
										}),
										jsx(_components.span, {
											style: { "--shiki-light": "#3C4257" },
											children: "as"
										}),
										jsx(_components.span, {
											style: { "--shiki-light": "#3C4257" },
											children: " HTMLInputElement)."
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
										children: "        >"
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
									children: [
										jsx(_components.span, {
											style: { "--shiki-light": "#0F7D6C" },
											children: "      ${"
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
											children: "touched"
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
											children: "invalid"
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
											style: { "--shiki-light": "#3D6F94" },
											children: "        ?"
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
											children: "        :"
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
			jsx("br", {}),
			jsx(Lede, {
				step: "03",
				children: "Reusable SubmitButton"
			}),
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
									"data-highlighted-line": "",
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
									"data-highlighted-line": "",
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
											style: { "--shiki-light": "#0F7D6C" },
											children: "export"
										}),
										jsx(_components.span, {
											style: { "--shiki-light": "#3D6F94" },
											children: " class"
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
									"data-highlighted-line": "",
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
											children: " FormApi<unknown>; "
										}),
										jsx(_components.span, {
											style: {
												"--shiki-light": "#A83A1C",
												"--shiki-light-font-style": "italic"
											},
											children: "// Subclass of FieldApi."
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
										children: "  // Re-render only when submitting flips."
									})
								}),
								"\n",
								jsxs(_components.span, {
									"data-line": "",
									"data-highlighted-line": "",
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
											children: " submitting"
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
											children: "submitting"
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
			jsx("br", {}),
			jsx(Lede, {
				step: "04",
				children: "Form with reusable components"
			}),
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
											children: " TextField"
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
											children: "./TextField.tsx"
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
											children: " SubmitButton"
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
											children: "./SubmitButton.tsx"
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
								jsx(_components.span, {
									"data-line": "",
									children: " "
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
									"data-highlighted-line": "",
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
									"data-highlighted-line": "",
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
									"data-highlighted-line": "",
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
											children: "),"
										})
									]
								}),
								"\n",
								jsxs(_components.span, {
									"data-line": "",
									"data-highlighted-line": "",
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
									"data-highlighted-line": "",
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
									"data-highlighted-line": "",
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
								jsx(_components.span, {
									"data-line": "",
									children: " "
								}),
								"\n",
								jsxs(_components.span, {
									"data-line": "",
									"data-highlighted-line": "",
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
											children: "Log in"
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
			})] })
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
