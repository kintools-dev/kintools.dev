import { t as loadDocsPage } from "./page-cache-CzEWyQNu.js";
import { a as Route, o as formNav, s as formPages } from "./router-D1QS6oCI.js";
import { a as Section, c as Grid, d as Tooltip, i as SectionHeader, l as Card, m as DocsFooter, n as Home, o as Prose, r as Hero, s as Lede, t as Principle, u as Button } from "./Principle-BWXq106P.js";
import { a as CodeGroupItem, c as useFramework, i as Container, l as DocsHeader, n as SideBySide, o as CodeGroup, r as Cta, s as DocsLayout, t as Table } from "./Table-DGJcZ_fr.js";
import { Children, Suspense, isValidElement, use } from "react";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
//#region src/components/shared/FrameworkSlot.tsx
function FrameworkSlot({ children }) {
	return /* @__PURE__ */ jsx(Fragment, { children });
}
//#endregion
//#region src/components/shared/FrameworkText.tsx
function FrameworkText({ children }) {
	const [framework] = useFramework();
	const slots = Children.toArray(children).filter(isValidElement);
	return slots.find((slot) => slot.props.name === framework) ?? slots[0] ?? null;
}
//#endregion
//#region src/components/shared/TreeDiagram.tsx
function TreeDiagram({ viewBox, titleId, title, children }) {
	return /* @__PURE__ */ jsxs("svg", {
		className: "block max-h-30 w-full",
		viewBox,
		role: "img",
		"aria-labelledby": titleId,
		children: [/* @__PURE__ */ jsx("title", {
			id: titleId,
			children: title
		}), children]
	});
}
function TreeEdge({ d }) {
	return /* @__PURE__ */ jsx("path", {
		className: "fill-none stroke-border stroke-[1.5]",
		d
	});
}
function TreeNode({ x, y, width, height, label, labelX, labelY }) {
	return /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx("rect", {
		className: "fill-bg stroke-border stroke-[1.5]",
		x,
		y,
		width,
		height,
		rx: 4
	}), /* @__PURE__ */ jsx("text", {
		className: "fill-text2 font-mono text-[10.5px]",
		x: labelX,
		y: labelY,
		textAnchor: "middle",
		dominantBaseline: "central",
		children: label
	})] });
}
function TreeCaption({ children }) {
	return /* @__PURE__ */ jsx("p", {
		className: "m-0 text-sm text-text2 [&_strong]:font-semibold [&_strong]:text-text1",
		children
	});
}
//#endregion
//#region src/components/form/ApiSurfaceMatrix.tsx
var rows$1 = [{
	label: "Types",
	kin: ["FieldApi", "FormApi"],
	rhf: [
		"FieldPath",
		"FieldPathByValue",
		"FieldArrayPath",
		"UseControllerProps"
	],
	formik: [],
	tanstack: [
		"FieldApi",
		"FieldGroupApi",
		"FormApi"
	]
}, {
	label: "Hooks & components",
	kin: [
		"useForm",
		"useWatch",
		"Watch",
		"useMultistep"
	],
	rhf: [
		"useForm",
		"register",
		"useController",
		"Controller",
		"useFieldArray",
		"useWatch",
		"useFormState"
	],
	formik: [
		"useFormik",
		"Formik",
		"useField",
		"Field",
		"FieldArray",
		"useFormikContext"
	],
	tanstack: [
		"useForm",
		"useField",
		"Field",
		"useFieldGroup",
		"useFormGroup",
		"FormGroup",
		"useStore",
		"Subscribe",
		"createFormHook",
		"useAppForm",
		"AppField",
		"AppForm",
		"withForm",
		"withFieldGroup",
		"useFormId"
	]
}];
var competitors$1 = [
	{
		key: "rhf",
		header: "React Hook Form"
	},
	{
		key: "formik",
		header: "Formik"
	},
	{
		key: "tanstack",
		header: "TanStack Form"
	}
];
function CodeList({ items }) {
	if (items.length === 0) return /* @__PURE__ */ jsx("span", {
		className: "text-text3",
		children: "—"
	});
	return /* @__PURE__ */ jsx("div", {
		className: "flex flex-col items-start gap-1",
		children: items.map((item) => /* @__PURE__ */ jsx("code", { children: item }, item))
	});
}
var labelClassName = "max-w-28 align-top text-text2";
var kinCellClassName = "align-top text-brand1 font-bold";
var cellClassName = "align-top";
/**
* A table listing every type and hook/component each library exposes, so
* readers can see the size of the API surface directly rather than being
* told about it.
*/
function ApiSurfaceMatrix() {
	const columns = [
		{
			key: "label",
			header: "",
			headerClassName: labelClassName,
			cell: (row) => row.label,
			cellClassName: () => labelClassName
		},
		{
			key: "kin",
			header: "Kin Form",
			headerClassName: "whitespace-nowrap text-brand1 font-bold",
			cell: (row) => /* @__PURE__ */ jsx(CodeList, { items: row.kin }),
			cellClassName: () => kinCellClassName
		},
		...competitors$1.map(({ key, header }) => ({
			key,
			header,
			headerClassName: "whitespace-nowrap",
			cell: (row) => /* @__PURE__ */ jsx(CodeList, { items: row[key] }),
			cellClassName: () => cellClassName
		}))
	];
	return /* @__PURE__ */ jsx(Table, {
		columns,
		rows: rows$1,
		rowKey: (row) => row.label
	});
}
//#endregion
//#region src/components/shared/BarChart.tsx
function BarChart({ bars }) {
	const max = Math.max(...bars.map((b) => b.value), 1e-9);
	return /* @__PURE__ */ jsxs("div", {
		className: "relative flex h-50 gap-3",
		children: [/* @__PURE__ */ jsx("div", { className: "absolute right-0 bottom-8.25 left-0 h-px bg-border" }), bars.map((bar) => /* @__PURE__ */ jsxs("div", {
			className: "flex min-w-0 flex-1 flex-col items-center",
			title: `${bar.full ?? bar.label}: ${bar.formatted}`,
			children: [/* @__PURE__ */ jsxs("div", {
				className: "mx-auto flex w-full max-w-14 flex-1 flex-col items-center justify-end",
				children: [/* @__PURE__ */ jsx("span", {
					className: "mb-1 text-xs font-semibold",
					children: bar.formatted
				}), /* @__PURE__ */ jsx("div", {
					className: `w-full max-w-10 min-h-1 rounded-t [transition:height_0.3s_ease] ${bar.highlight ? "bg-brand2" : "bg-text1/20"}`,
					style: { height: `${bar.value / max * 100}%` }
				})]
			}), /* @__PURE__ */ jsx("span", {
				className: "mt-1.5 h-7 text-center text-xs text-text2",
				children: bar.label
			})]
		}, bar.label))]
	});
}
//#endregion
//#region src/components/form/BundleSizeChart.tsx
var bars$1 = [
	{
		label: "Kin Form",
		full: "Kin Form (core + react)",
		value: 5,
		formatted: "5.0 KB",
		highlight: true
	},
	{
		label: "React Hook Form",
		value: 13,
		formatted: "13.0 KB"
	},
	{
		label: "Formik",
		value: 13.9,
		formatted: "13.9 KB"
	},
	{
		label: "TanStack Form",
		full: "@tanstack/react-form",
		value: 18.5,
		formatted: "18.5 KB"
	}
];
function BundleSizeChart({ title }) {
	return /* @__PURE__ */ jsxs("div", { children: [title && /* @__PURE__ */ jsx("h4", {
		className: "mb-2.5 text-sm font-semibold",
		children: title
	}), /* @__PURE__ */ jsx(BarChart, { bars: bars$1 })] });
}
//#endregion
//#region src/components/form/FeatureMatrix.tsx
var rows = [
	{
		label: "Zero dependencies",
		kin: "✅",
		rhf: "✅",
		formik: "❌",
		tanstack: "⚠️",
		trimmed: true,
		notes: {
			formik: /* @__PURE__ */ jsxs(Fragment, { children: [
				"Depends on ",
				/* @__PURE__ */ jsx("code", { children: "lodash" }),
				", ",
				/* @__PURE__ */ jsx("code", { children: "deepmerge" }),
				",",
				" ",
				/* @__PURE__ */ jsx("code", { children: "hoist-non-react-statics" }),
				", and more."
			] }),
			tanstack: /* @__PURE__ */ jsxs(Fragment, { children: [
				/* @__PURE__ */ jsx("code", { children: "form-core" }),
				" depends on ",
				/* @__PURE__ */ jsx("code", { children: "@tanstack/store" }),
				" ",
				"for its reactivity model."
			] })
		}
	},
	{
		label: "Framework-agnostic core",
		kin: "✅",
		rhf: "❌",
		formik: "❌",
		tanstack: "✅"
	},
	{
		label: "Type-safe nested field paths",
		kin: "✅",
		rhf: "⚠️",
		formik: "❌",
		tanstack: "✅",
		trimmed: true,
		notes: {
			rhf: /* @__PURE__ */ jsxs(Fragment, { children: [
				/* @__PURE__ */ jsx("code", { children: "Path<T>" }),
				" ",
				"checks literal names at the call site, but composing reusable components across generic parents needs ",
				/* @__PURE__ */ jsx("code", { children: "FieldPathByValue" }),
				" ",
				"casts."
			] }),
			formik: /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx("code", { children: "name" }), " is a plain string — no compile-time path checking."] })
		}
	},
	{
		label: "Standard Schema support",
		kin: "⚠️",
		rhf: "⚠️",
		formik: "❌",
		tanstack: "✅",
		notes: {
			kin: /* @__PURE__ */ jsxs(Fragment, { children: [
				"Via ",
				/* @__PURE__ */ jsx("code", { children: "toSchemaValidator()" }),
				" from",
				" ",
				/* @__PURE__ */ jsx("code", { children: "@kin-form/validators" }),
				" package."
			] }),
			rhf: /* @__PURE__ */ jsxs(Fragment, { children: [
				"Via ",
				/* @__PURE__ */ jsx("code", { children: "standardSchemaResolver()" }),
				" from",
				" ",
				/* @__PURE__ */ jsx("code", { children: "@hookform/resolvers" }),
				" package."
			] })
		}
	},
	{
		label: "Same primitive for field, group, array, and form",
		kin: "✅",
		rhf: "❌",
		formik: "❌",
		tanstack: "❌",
		notes: {
			kin: /* @__PURE__ */ jsxs(Fragment, { children: [
				/* @__PURE__ */ jsx("code", { children: "FormApi" }),
				" extends ",
				/* @__PURE__ */ jsx("code", { children: "FieldApi" }),
				" ",
				"— the form root is a field, not a separate object model. Every node shares the same",
				" ",
				/* @__PURE__ */ jsx("code", { children: "value" }),
				"/",
				/* @__PURE__ */ jsx("code", { children: "error" }),
				"/",
				/* @__PURE__ */ jsx("code", { children: "touched" }),
				"/",
				/* @__PURE__ */ jsx("code", { children: "subscribe" }),
				" surface."
			] }),
			rhf: /* @__PURE__ */ jsxs(Fragment, { children: [
				/* @__PURE__ */ jsx("code", { children: "Control" }),
				", ",
				/* @__PURE__ */ jsx("code", { children: "useFieldArray" }),
				", and",
				" ",
				/* @__PURE__ */ jsx("code", { children: "useFormState" }),
				" ",
				"are separate, unrelated APIs for group/array/form-level state."
			] }),
			formik: /* @__PURE__ */ jsxs(Fragment, { children: [
				/* @__PURE__ */ jsx("code", { children: "Field" }),
				", ",
				/* @__PURE__ */ jsx("code", { children: "FieldArray" }),
				", and",
				" ",
				/* @__PURE__ */ jsx("code", { children: "useFormikContext" }),
				" ",
				"are separate primitives with different props."
			] }),
			tanstack: /* @__PURE__ */ jsxs(Fragment, { children: [
				/* @__PURE__ */ jsx("code", { children: "FieldApi" }),
				", ",
				/* @__PURE__ */ jsx("code", { children: "FieldGroupApi" }),
				", and",
				" ",
				/* @__PURE__ */ jsx("code", { children: "FormApi" }),
				" ",
				"are distinct types with separate hooks/components and no shared base."
			] })
		}
	},
	{
		label: "Localized subscription",
		kin: "✅",
		rhf: "❌",
		formik: "❌",
		tanstack: "❌",
		notes: {
			rhf: /* @__PURE__ */ jsxs(Fragment, { children: [
				"One shared ",
				/* @__PURE__ */ jsx("code", { children: "Subject" }),
				" on ",
				/* @__PURE__ */ jsx("code", { children: "control" }),
				" ",
				"holds every subscriber — each",
				" ",
				/* @__PURE__ */ jsx("code", { children: "useWatch" }),
				"/",
				/* @__PURE__ */ jsx("code", { children: "useFormState" }),
				" ",
				"callback runs on every state change and decides for itself whether to re-render."
			] }),
			formik: /* @__PURE__ */ jsxs(Fragment, { children: [
				"One shared context holds all state — every consumer (",
				/* @__PURE__ */ jsx("code", { children: "useField" }),
				"/",
				/* @__PURE__ */ jsx("code", { children: "connect" }),
				") re-renders on any change unless wrapped in ",
				/* @__PURE__ */ jsx("code", { children: "React.memo" }),
				"."
			] }),
			tanstack: /* @__PURE__ */ jsxs(Fragment, { children: [
				/* @__PURE__ */ jsx("code", { children: "FieldApi" }),
				"/",
				/* @__PURE__ */ jsx("code", { children: "FieldGroupApi" }),
				" read from one shared",
				" ",
				/* @__PURE__ */ jsx("code", { children: "@tanstack/store" }),
				" ",
				"— every mutation notifies every subscriber, each one running its own selector to decide whether to re-render."
			] })
		}
	},
	{
		label: "Selective re-rendering",
		kin: "✅",
		rhf: "⚠️",
		formik: "⚠️",
		tanstack: "✅",
		notes: {
			rhf: /* @__PURE__ */ jsxs(Fragment, { children: [
				/* @__PURE__ */ jsx("code", { children: "useWatch" }),
				"'s ",
				/* @__PURE__ */ jsx("code", { children: "compute" }),
				" ",
				"option narrows the watched value, deduped by deep-equal, but there's no equivalent for ",
				/* @__PURE__ */ jsx("code", { children: "error" }),
				"/",
				/* @__PURE__ */ jsx("code", { children: "touched" }),
				" ",
				"— those come from a separate ",
				/* @__PURE__ */ jsx("code", { children: "useFormState" }),
				" ",
				"subscription with no narrowing of its own."
			] }),
			formik: /* @__PURE__ */ jsxs(Fragment, { children: [
				"No selector to narrow further — ",
				/* @__PURE__ */ jsx("code", { children: "useField" }),
				" ",
				"re-renders on any change to that field's whole meta object."
			] })
		}
	},
	{
		label: "Built-in async-validation debounce",
		kin: "✅",
		rhf: "❌",
		formik: "❌",
		tanstack: "✅",
		trimmed: true
	},
	{
		label: "Declarative cross-field revalidation",
		kin: "✅",
		rhf: "⚠️",
		formik: "❌",
		tanstack: "✅",
		notes: { rhf: /* @__PURE__ */ jsxs(Fragment, { children: [
			"Possible via ",
			/* @__PURE__ */ jsx("code", { children: "watch()" }),
			" +",
			" ",
			/* @__PURE__ */ jsx("code", { children: "trigger()" }),
			", but wired up by hand, not declared."
		] }) }
	},
	{
		label: "Field state survives list virtualization",
		kin: "✅",
		rhf: "⚠️",
		formik: "✅",
		tanstack: "✅",
		notes: {
			kin: /* @__PURE__ */ jsxs(Fragment, { children: [
				"A field's state lives on its ",
				/* @__PURE__ */ jsx("code", { children: "FieldApi" }),
				" ",
				"node, not in the DOM. A recycled row re-subscribes to the same node and renders whatever's already there."
			] }),
			rhf: /* @__PURE__ */ jsxs(Fragment, { children: [
				"Only the value resets, not the rest of the state.",
				" ",
				/* @__PURE__ */ jsx("code", { children: "register()" }),
				" ",
				"reads it off the DOM node, so a recycled row needs it restored by hand via ",
				/* @__PURE__ */ jsx("code", { children: "getValues()" }),
				".",
				" ",
				/* @__PURE__ */ jsx("code", { children: "dirtyFields" }),
				"/",
				/* @__PURE__ */ jsx("code", { children: "touchedFields" }),
				"/",
				/* @__PURE__ */ jsx("code", { children: "errors" }),
				" live in ",
				/* @__PURE__ */ jsx("code", { children: "formState" }),
				" ",
				"and survive on their own."
			] })
		}
	}
];
var competitors = [
	{
		key: "rhf",
		header: "React Hook Form"
	},
	{
		key: "formik",
		header: "Formik"
	},
	{
		key: "tanstack",
		header: "TanStack Form"
	}
];
var nameClassName = "whitespace-normal text-text2";
function FeatureMatrix({ full = false }) {
	const visibleRows = full ? rows : rows.filter((r) => r.trimmed);
	const columns = [
		{
			key: "label",
			header: "Features",
			headerClassName: nameClassName,
			cell: (row) => row.label,
			cellClassName: () => nameClassName
		},
		{
			key: "kin",
			header: "Kin Form",
			align: "center",
			headerClassName: "whitespace-nowrap text-brand1 font-bold",
			cell: (row) => /* @__PURE__ */ jsx(Tooltip, {
				content: row.notes?.kin,
				children: row.kin
			}),
			cellClassName: () => "whitespace-nowrap text-brand1 font-bold"
		},
		...competitors.map(({ key, header }) => ({
			key,
			header,
			align: "center",
			headerClassName: "whitespace-nowrap",
			cell: (row) => /* @__PURE__ */ jsx(Tooltip, {
				content: row.notes?.[key],
				children: row[key]
			}),
			cellClassName: (row) => `whitespace-nowrap ${row[key] === "—" ? "text-text3" : ""}`
		}))
	];
	return /* @__PURE__ */ jsxs("div", {
		className: "flex flex-col",
		children: [/* @__PURE__ */ jsx(Table, {
			columns,
			rows: visibleRows,
			rowKey: (row) => row.label
		}), /* @__PURE__ */ jsx("p", {
			className: "mx-auto my-3 max-w-[74ch] text-center text-xs text-text2",
			children: "✅ full support · ⚠️ partial or conditional · ❌ not supported"
		})]
	});
}
//#endregion
//#region src/components/form/PerformanceCharts.tsx
function lib$1(label, value, highlight = false) {
	return {
		label,
		value,
		formatted: `${value.toFixed(1)} ms`,
		highlight
	};
}
function renders(label, value, highlight = false) {
	return {
		label,
		value,
		formatted: `${value}`,
		highlight
	};
}
var scenarios = [
	{
		title: "Initial mount (84 fields)",
		bars: [
			lib$1("Kin Form", 2.87, true),
			lib$1("React Hook Form", 5.14),
			lib$1("Formik", 2.38),
			lib$1("TanStack Form", 9.5)
		]
	},
	{
		title: "Flat field update burst (800x)",
		bars: [
			lib$1("Kin Form", 1.39, true),
			lib$1("React Hook Form", 66.55),
			lib$1("Formik", 3.3),
			lib$1("TanStack Form", 564.24)
		]
	},
	{
		title: "Nested field update burst (800x)",
		bars: [
			lib$1("Kin Form", 3.68, true),
			lib$1("React Hook Form", 166.63),
			lib$1("Formik", 6.36),
			lib$1("TanStack Form", 574.47)
		]
	},
	{
		title: "Array swap burst (800x, cycling adjacent pairs)",
		bars: [
			lib$1("Kin Form", 72.29, true),
			lib$1("React Hook Form", 221.32),
			lib$1("Formik", 11.99),
			lib$1("TanStack Form", 1514.68)
		]
	},
	{
		title: "Array insert/remove burst (800x)",
		bars: [
			lib$1("Kin Form", 33.4, true),
			lib$1("React Hook Form", 434.7),
			lib$1("Formik", 5.1),
			lib$1("TanStack Form", 1608.8)
		]
	},
	{
		title: "Flat field update burst + sync validator (800x)",
		bars: [
			lib$1("Kin Form", 3.42, true),
			lib$1("React Hook Form", 160.25),
			lib$1("Formik", 67.66),
			lib$1("TanStack Form", 709.82)
		]
	},
	{
		title: "Debounced async validation (800 updates, 50ms debounce)",
		bars: [
			lib$1("Kin Form", 90.56, true),
			lib$1("React Hook Form", 221.59),
			lib$1("Formik", 98.79),
			lib$1("TanStack Form", 952.59)
		]
	},
	{
		title: "Whole-form zod schema validation (on submit)",
		bars: [
			lib$1("Kin Form", 2.07, true),
			lib$1("React Hook Form", 4.98),
			lib$1("Formik", 2.84),
			lib$1("TanStack Form", 29.95)
		]
	}
];
var rerenderScenarios = [{
	title: "Flat field update burst (800x)",
	bars: [
		renders("Kin Form", 0, true),
		renders("React Hook Form", 0),
		renders("Formik", 19),
		renders("TanStack Form", 0)
	]
}, {
	title: "Nested field update burst (800x)",
	bars: [
		renders("Kin Form", 0, true),
		renders("React Hook Form", 0),
		renders("Formik", 3),
		renders("TanStack Form", 3)
	]
}];
var groupTitleClassName = "my-3 text-base font-semibold";
var chartsClassName = "flex flex-wrap gap-6";
var scenarioClassName = "min-w-[280px] flex-1 basis-[280px] rounded-xl bg-bg-soft p-4";
var scenarioTitleClassName = "mb-2.5 text-sm font-semibold";
function PerformanceCharts() {
	return /* @__PURE__ */ jsxs(Fragment, { children: [
		/* @__PURE__ */ jsx("h3", {
			className: groupTitleClassName,
			children: "Smaller is better."
		}),
		/* @__PURE__ */ jsx("div", {
			className: chartsClassName,
			children: scenarios.map((scenario) => /* @__PURE__ */ jsxs("div", {
				className: scenarioClassName,
				children: [/* @__PURE__ */ jsx("h4", {
					className: scenarioTitleClassName,
					children: scenario.title
				}), /* @__PURE__ */ jsx(BarChart, { bars: scenario.bars })]
			}, scenario.title))
		}),
		/* @__PURE__ */ jsx("br", {}),
		/* @__PURE__ */ jsx("h3", {
			className: groupTitleClassName,
			children: "Untouched sibling re-renders (800 updates)"
		}),
		/* @__PURE__ */ jsx("div", {
			className: chartsClassName,
			children: rerenderScenarios.map((scenario) => /* @__PURE__ */ jsxs("div", {
				className: scenarioClassName,
				children: [/* @__PURE__ */ jsx("h4", {
					className: scenarioTitleClassName,
					children: scenario.title
				}), /* @__PURE__ */ jsx(BarChart, { bars: scenario.bars })]
			}, scenario.title))
		})
	] });
}
//#endregion
//#region src/components/form/PerformanceHighlight.tsx
function lib(label, value, highlight = false) {
	return {
		label,
		value,
		formatted: `${value.toFixed(1)} ms`,
		highlight
	};
}
var bars = [
	lib("Kin Form", 1.39, true),
	lib("React Hook Form", 66.55),
	lib("Formik", 3.3),
	lib("TanStack Form", 564.24)
];
function PerformanceHighlight({ title }) {
	return /* @__PURE__ */ jsxs("div", { children: [title && /* @__PURE__ */ jsx("h4", {
		className: "mb-2.5 text-sm font-semibold",
		children: title
	}), /* @__PURE__ */ jsx(BarChart, { bars })] });
}
//#endregion
//#region src/components/form/components.ts
var formComponents = {
	Container,
	CodeGroup,
	CodeGroupItem,
	SideBySide,
	ApiSurfaceMatrix,
	BundleSizeChart,
	FeatureMatrix,
	FrameworkSlot,
	FrameworkText,
	PerformanceCharts,
	PerformanceHighlight,
	Home,
	Hero,
	Section,
	SectionHeader,
	Button,
	Card,
	Grid,
	Lede,
	Prose,
	Cta,
	Principle,
	TreeDiagram,
	TreeEdge,
	TreeNode,
	TreeCaption
};
//#endregion
//#region src/routes/form/$.tsx?tsr-split=component
function FormDocLayout() {
	const { slug } = Route.useLoaderData();
	return /* @__PURE__ */ jsx(Suspense, {
		fallback: null,
		children: /* @__PURE__ */ jsx(FormDocContent, { slug })
	});
}
function FormDocContent({ slug }) {
	const mod = use(loadDocsPage("form", formPages, slug));
	const Content = mod.default;
	const frontmatter = mod.frontmatter ?? {};
	if (frontmatter.layout === false) return /* @__PURE__ */ jsx("div", {
		className: "lib-home min-h-full",
		children: /* @__PURE__ */ jsx(Content, { components: formComponents })
	});
	if (frontmatter.layout === "home") return /* @__PURE__ */ jsxs("div", {
		className: "lib-home min-h-full",
		children: [
			/* @__PURE__ */ jsx(DocsHeader, {
				project: "form",
				base: "/form",
				nav: formNav
			}),
			/* @__PURE__ */ jsx(Content, { components: formComponents }),
			/* @__PURE__ */ jsx(DocsFooter, { footer: formNav.footer })
		]
	});
	return /* @__PURE__ */ jsx(DocsLayout, {
		project: "form",
		base: "/form",
		nav: formNav,
		activePath: slug,
		children: /* @__PURE__ */ jsx(Content, { components: formComponents })
	});
}
//#endregion
export { FormDocLayout as component };
