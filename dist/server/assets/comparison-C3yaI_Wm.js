import { Fragment, jsx, jsxs } from "react/jsx-runtime";
//#region ../form/docs/comparison/index.md
var frontmatter = void 0;
function _createMdxContent(props) {
	const _components = {
		a: "a",
		code: "code",
		h1: "h1",
		h2: "h2",
		li: "li",
		p: "p",
		span: "span",
		ul: "ul",
		...props.components
	}, { ApiSurfaceMatrix, BundleSizeChart, FeatureMatrix, PerformanceCharts } = _components;
	if (!ApiSurfaceMatrix) _missingMdxReference("ApiSurfaceMatrix", true);
	if (!BundleSizeChart) _missingMdxReference("BundleSizeChart", true);
	if (!FeatureMatrix) _missingMdxReference("FeatureMatrix", true);
	if (!PerformanceCharts) _missingMdxReference("PerformanceCharts", true);
	return jsxs(Fragment, { children: [
		jsxs(_components.h1, {
			id: "overview",
			children: [jsx(_components.a, {
				className: "header-anchor",
				"aria-label": "Permalink to \"Overview\"",
				href: "#overview",
				children: jsx(_components.span, {
					"aria-hidden": "true",
					children: "#"
				})
			}), "Overview"]
		}),
		"\n",
		jsxs(_components.h2, {
			id: "feature-matrix",
			children: [jsx(_components.a, {
				className: "header-anchor",
				"aria-label": "Permalink to \"Feature matrix\"",
				href: "#feature-matrix",
				children: jsx(_components.span, {
					"aria-hidden": "true",
					children: "#"
				})
			}), "Feature matrix"]
		}),
		"\n",
		jsx(FeatureMatrix, { full: true }),
		"\n",
		jsxs(_components.h2, {
			id: "api-surface",
			children: [jsx(_components.a, {
				className: "header-anchor",
				"aria-label": "Permalink to \"API surface\"",
				href: "#api-surface",
				children: jsx(_components.span, {
					"aria-hidden": "true",
					children: "#"
				})
			}), "API surface"]
		}),
		"\n",
		jsx(_components.p, { children: "Not whether a feature exists, but which APIs/hooks/types you have to learn to\nuse it:" }),
		"\n",
		jsx(ApiSurfaceMatrix, {}),
		"\n",
		jsxs(_components.h2, {
			id: "bundle-size-react-usage",
			children: [jsx(_components.a, {
				className: "header-anchor",
				"aria-label": "Permalink to \"Bundle size (React usage)\"",
				href: "#bundle-size-react-usage",
				children: jsx(_components.span, {
					"aria-hidden": "true",
					children: "#"
				})
			}), "Bundle size (React usage)"]
		}),
		"\n",
		jsx(BundleSizeChart, {}),
		"\n",
		jsxs(_components.p, { children: [
			"Every library above is measured directly with the same toolchain: rolldown and\nits own built-in minifier, then gzip. That's not the same as Bundlephobia, which\nminifies with terser by default and can produce different sizes for the same\nsource. Reproducible via ",
			jsx(_components.code, { children: "deno task --cwd scripts bundle-size" }),
			"."
		] }),
		"\n",
		jsxs(_components.h2, {
			id: "performance",
			children: [jsx(_components.a, {
				className: "header-anchor",
				"aria-label": "Permalink to \"Performance\"",
				href: "#performance",
				children: jsx(_components.span, {
					"aria-hidden": "true",
					children: "#"
				})
			}), "Performance"]
		}),
		"\n",
		jsx(PerformanceCharts, {}),
		"\n",
		jsxs(_components.p, { children: [
			"These are wall-clock numbers from one shared ~84-field form (flat fields, a\nnested group, an array) in a real (Happy DOM) React tree, reproducible via\n",
			jsx(_components.code, { children: "deno task --cwd scripts speed-bench" }),
			"."
		] }),
		"\n",
		jsx(_components.p, { children: "The benchmark also counts re-renders per scenario, how many untouched sibling\nfields re-render when one field updates, charted above for the two scenarios\nwhere that count is clean and isolated." }),
		"\n",
		jsxs(_components.h2, {
			id: "detailed-comparisons",
			children: [jsx(_components.a, {
				className: "header-anchor",
				"aria-label": "Permalink to \"Detailed comparisons\"",
				href: "#detailed-comparisons",
				children: jsx(_components.span, {
					"aria-hidden": "true",
					children: "#"
				})
			}), "Detailed comparisons"]
		}),
		"\n",
		jsxs(_components.ul, { children: [
			"\n",
			jsx(_components.li, { children: jsx(_components.a, {
				href: "/form/comparison/react-hook-form",
				children: "vs React Hook Form"
			}) }),
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
