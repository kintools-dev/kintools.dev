import { t as loadDocsPage } from "./page-cache-CzEWyQNu.js";
import { i as storePages, n as Route, r as storeNav } from "./router-BJ6RTnsI.js";
import { a as Section, c as Grid, d as Tooltip, i as SectionHeader, l as Card, m as DocsFooter, n as Home, o as Prose, r as Hero, s as Lede, t as Principle, u as Button } from "./Principle-BWXq106P.js";
import { a as CodeGroupItem, i as Container, l as DocsHeader, n as SideBySide, o as CodeGroup, r as Cta, s as DocsLayout, t as Table } from "./Table-DGJcZ_fr.js";
import { Suspense, use } from "react";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
//#region src/components/shared/Primitive.tsx
function Primitive({ step, name, size, children }) {
	return /* @__PURE__ */ jsxs("div", {
		className: "flex flex-col gap-2",
		children: [
			/* @__PURE__ */ jsx("span", {
				className: "font-mono text-sm text-brand1",
				children: step
			}),
			/* @__PURE__ */ jsx("code", {
				className: "bg-transparent p-0 text-xl font-semibold",
				children: name
			}),
			/* @__PURE__ */ jsx("span", {
				className: "text-xs tracking-wider text-text3",
				children: size
			}),
			/* @__PURE__ */ jsx("p", {
				className: "text-base text-text2",
				children
			})
		]
	});
}
//#endregion
//#region src/components/store/FeatureMatrix.tsx
var rows = [
	{
		label: "Bundle size",
		kin: "2.0 KB",
		zustand: "389 B",
		redux: "17.5 KB",
		jotai: "4.0 KB",
		mobx: "15.6 KB",
		trimmed: true
	},
	{
		label: "Zero dependencies",
		kin: "✅",
		zustand: "✅",
		redux: "❌",
		jotai: "✅",
		mobx: "✅",
		trimmed: true
	},
	{
		label: "Tiny footprint",
		kin: "✅",
		zustand: "✅",
		redux: "❌",
		jotai: "✅",
		mobx: "❌"
	},
	{
		label: "100% type-safe",
		kin: "✅",
		zustand: "⚠️",
		redux: "⚠️",
		jotai: "✅",
		mobx: "✅",
		trimmed: true,
		notes: {
			zustand: /* @__PURE__ */ jsxs(Fragment, { children: [
				"Requires an explicit type annotation — omit it and state infers as",
				" ",
				/* @__PURE__ */ jsx("code", { children: "any" }),
				"."
			] }),
			redux: /* @__PURE__ */ jsxs(Fragment, { children: [
				/* @__PURE__ */ jsx("code", { children: "RootState" }),
				" and ",
				/* @__PURE__ */ jsx("code", { children: "AppDispatch" }),
				" ",
				"must be manually exported for types to flow through."
			] })
		}
	},
	{
		label: "Low boilerplate",
		kin: "✅",
		zustand: "⚠️",
		redux: "❌",
		jotai: "⚠️",
		mobx: "⚠️",
		trimmed: true,
		notes: {
			zustand: "Requires explicit type annotation.",
			jotai: "App logic must be wrapped in atoms rather than plain functions.",
			mobx: /* @__PURE__ */ jsxs(Fragment, { children: [
				"Requires classes, ",
				/* @__PURE__ */ jsx("code", { children: "makeAutoObservable" }),
				",",
				" ",
				/* @__PURE__ */ jsx("code", { children: "runInAction" }),
				", and ",
				/* @__PURE__ */ jsx("code", { children: "observer" }),
				" wrappers."
			] })
		}
	},
	{
		label: "Linear plugin composition",
		kin: "✅",
		zustand: "❌",
		redux: "❌",
		jotai: "—",
		mobx: "—",
		notes: {
			jotai: "Atom-based — no plugin system concept.",
			mobx: "Class-based — no plugin system concept."
		}
	},
	{
		label: "Separate state and logic",
		kin: "✅",
		zustand: "❌",
		redux: "✅",
		jotai: "—",
		mobx: "✅",
		trimmed: true,
		notes: {
			zustand: "State and actions must share one type and one object.",
			jotai: "Logic is wrapped in atoms — not structurally separate from state atoms."
		}
	},
	{
		label: "Opt-in complexity",
		kin: "✅",
		zustand: "✅",
		redux: "❌",
		jotai: "⚠️",
		mobx: "❌",
		trimmed: true,
		notes: { jotai: "Logic must be wrapped in atoms — there is no plain function style even for simple cases." }
	},
	{
		label: "No hidden magic",
		kin: "✅",
		zustand: "✅",
		redux: "✅",
		jotai: "✅",
		mobx: "❌",
		trimmed: true,
		notes: { mobx: /* @__PURE__ */ jsxs(Fragment, { children: [
			/* @__PURE__ */ jsx("code", { children: "makeAutoObservable" }),
			" ",
			"silently instruments every field and method; async mutations silently break without ",
			/* @__PURE__ */ jsx("code", { children: "runInAction" }),
			"."
		] }) }
	},
	{
		label: "Reactive composition",
		kin: "✅",
		zustand: "⚠️",
		redux: "❌",
		jotai: "✅",
		mobx: "✅",
		notes: { zustand: "No built-in derived state primitive — requires 3rd party library." }
	}
];
var competitors = [
	{
		key: "zustand",
		header: "Zustand"
	},
	{
		key: "redux",
		header: "Redux / RTK"
	},
	{
		key: "jotai",
		header: "Jotai"
	},
	{
		key: "mobx",
		header: "MobX"
	}
];
function competitorClassName(row, key) {
	if (row[key] === "—") return "text-text3";
	return "";
}
var legendClassName = "mx-auto my-3 max-w-[74ch] text-center text-xs text-text2";
function FeatureMatrix({ full = false }) {
	const visibleRows = full ? rows : rows.filter((r) => r.trimmed);
	const columns = [
		{
			key: "label",
			header: "",
			headerClassName: "whitespace-normal text-text2",
			cell: (row) => full ? row.label : /* @__PURE__ */ jsx("a", {
				href: "/store/comparison",
				className: "text-inherit no-underline hover:text-brand1 hover:underline",
				children: row.label
			}),
			cellClassName: () => "whitespace-normal text-text2"
		},
		{
			key: "kin",
			header: "Kin Store",
			align: "center",
			headerClassName: "whitespace-nowrap text-brand1 font-bold",
			cell: (row) => row.kin,
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
			cellClassName: (row) => `whitespace-nowrap ${competitorClassName(row, key)}`
		}))
	];
	return /* @__PURE__ */ jsxs("div", {
		className: "flex flex-col",
		children: [
			/* @__PURE__ */ jsx(Table, {
				columns,
				rows: visibleRows,
				rowKey: (row) => row.label
			}),
			/* @__PURE__ */ jsx("p", {
				className: legendClassName,
				children: "✅ full support · ⚠️ partial or conditional · — not applicable (different model)"
			}),
			/* @__PURE__ */ jsx("p", {
				className: legendClassName,
				children: "Bundle sizes are each library's full package import, bundled with rolldown, minified, and gzipped. Tree-shaking down to only the APIs you use will land smaller across the board."
			}),
			/* @__PURE__ */ jsxs("p", {
				className: legendClassName,
				children: [
					"Kin Store is new: this table is accurate today, but Redux, Zustand, Jotai, and MobX all carry years of production use this library doesn't have yet. Try it, and",
					" ",
					/* @__PURE__ */ jsx("a", {
						href: "https://github.com/kintools-dev/store/issues",
						children: "tell us where it breaks"
					}),
					"."
				]
			})
		]
	});
}
//#endregion
//#region src/components/store/components.ts
var storeComponents = {
	Container,
	CodeGroup,
	CodeGroupItem,
	SideBySide,
	FeatureMatrix,
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
	Primitive
};
//#endregion
//#region src/routes/store/$.tsx?tsr-split=component
function StoreDocPage() {
	const { slug } = Route.useLoaderData();
	return /* @__PURE__ */ jsx(Suspense, {
		fallback: null,
		children: /* @__PURE__ */ jsx(StoreDocLayout, { slug })
	});
}
function StoreDocLayout({ slug }) {
	const mod = use(loadDocsPage("store", storePages, slug));
	const Content = mod.default;
	const frontmatter = mod.frontmatter ?? {};
	if (frontmatter.layout === false) return /* @__PURE__ */ jsx("div", {
		className: "lib-home min-h-full",
		children: /* @__PURE__ */ jsx(Content, { components: storeComponents })
	});
	if (frontmatter.layout === "home") return /* @__PURE__ */ jsxs("div", {
		className: "lib-home min-h-full",
		children: [
			/* @__PURE__ */ jsx(DocsHeader, {
				project: "store",
				base: "/store",
				nav: storeNav
			}),
			/* @__PURE__ */ jsx(Content, { components: storeComponents }),
			/* @__PURE__ */ jsx(DocsFooter, { footer: storeNav.footer })
		]
	});
	return /* @__PURE__ */ jsx(DocsLayout, {
		project: "store",
		base: "/store",
		nav: storeNav,
		activePath: slug,
		children: /* @__PURE__ */ jsx(Content, { components: storeComponents })
	});
}
//#endregion
export { StoreDocPage as component };
