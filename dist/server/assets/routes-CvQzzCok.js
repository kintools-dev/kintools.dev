import { a as Section, c as Grid, d as Tooltip, f as libraries, i as SectionHeader, l as Card, m as DocsFooter, n as Home, o as Prose, p as cn, r as Hero, t as Principle, u as Button } from "./Principle-BWXq106P.js";
import { Link } from "@tanstack/react-router";
import { jsx, jsxs } from "react/jsx-runtime";
//#region src/components/shared/IconSvg.tsx
/**
* A 24x24 stroke-based icon wrapper: shared viewBox, stroke width, and
* rounded caps/joins so every small line icon on the site reads as one
* consistent set, no matter which component draws it.
*/
function IconSvg({ className, children }) {
	return /* @__PURE__ */ jsx("svg", {
		viewBox: "0 0 24 24",
		fill: "none",
		stroke: "currentColor",
		strokeWidth: "1.5",
		strokeLinecap: "round",
		strokeLinejoin: "round",
		className,
		"aria-hidden": "true",
		children
	});
}
//#endregion
//#region src/components/shared/Badge.tsx
/**
* A small pill for a short label or stat (a bundle-size number, a status
* word). Carries no color of its own -- tint it via `className`.
*/
function Badge({ className = "", children }) {
	return /* @__PURE__ */ jsx("span", {
		className: cn("rounded-full px-2.5 py-1 font-mono text-xs", className),
		children
	});
}
//#endregion
//#region src/components/shared/LibraryCard.tsx
function FormIcon({ className }) {
	return /* @__PURE__ */ jsxs(IconSvg, {
		className,
		children: [
			/* @__PURE__ */ jsx("rect", {
				x: "4",
				y: "3",
				width: "16",
				height: "18",
				rx: "2"
			}),
			/* @__PURE__ */ jsx("path", { d: "M8 8h8" }),
			/* @__PURE__ */ jsx("path", { d: "M8 12h8" }),
			/* @__PURE__ */ jsx("path", { d: "M8 16h5" })
		]
	});
}
function StoreIcon({ className }) {
	return /* @__PURE__ */ jsxs(IconSvg, {
		className,
		children: [
			/* @__PURE__ */ jsx("ellipse", {
				cx: "12",
				cy: "5",
				rx: "8",
				ry: "3"
			}),
			/* @__PURE__ */ jsx("path", { d: "M4 5v6c0 1.7 3.6 3 8 3s8-1.3 8-3V5" }),
			/* @__PURE__ */ jsx("path", { d: "M4 11v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6" })
		]
	});
}
var accentByLibrary = {
	form: {
		bar: "bg-brand1",
		tint: "bg-brand1/10 text-brand2",
		icon: /* @__PURE__ */ jsx(FormIcon, { className: "h-5 w-5" })
	},
	store: {
		bar: "bg-accent-store",
		tint: "bg-accent-store/10 text-accent-store",
		icon: /* @__PURE__ */ jsx(StoreIcon, { className: "h-5 w-5" })
	}
};
/**
* One library's entry in the homepage's Libraries grid. The whole card is a
* single link -- a separate title link and CTA link to the same place would
* just be two redundant targets -- with one bundle-size badge per framework
* the library ships bindings for, since those bindings aren't the same
* weight.
*/
function LibraryCard({ library }) {
	const accent = accentByLibrary[library.id];
	return /* @__PURE__ */ jsx(Link, {
		to: library.base,
		className: "group block no-underline",
		children: /* @__PURE__ */ jsxs(Card, {
			className: "reveal-on-scroll relative overflow-hidden pt-8 transition-shadow group-hover:shadow-popover",
			children: [
				/* @__PURE__ */ jsx("span", {
					"aria-hidden": true,
					className: cn("absolute inset-x-0 top-0 h-1.5", accent.bar)
				}),
				/* @__PURE__ */ jsx("div", {
					className: cn("mb-4 flex h-11 w-11 items-center justify-center rounded-xl", accent.tint),
					children: accent.icon
				}),
				/* @__PURE__ */ jsx("h3", {
					className: "mb-2 text-xl font-semibold text-text1 group-hover:text-brand1",
					children: library.title
				}),
				/* @__PURE__ */ jsx(Prose, {
					className: "mb-2 font-semibold",
					children: library.tagline
				}),
				/* @__PURE__ */ jsx(Prose, { children: library.description }),
				/* @__PURE__ */ jsxs("div", {
					className: "flex items-center gap-1.5 pt-2",
					children: [library.bundleSizes.map((entry) => /* @__PURE__ */ jsxs(Badge, {
						className: accent.tint,
						children: [
							entry.size,
							" | ",
							entry.framework
						]
					}, entry.framework)), /* @__PURE__ */ jsx(Tooltip, {
						content: "Gzipped size of the core plus that framework's binding, measured with rolldown. Doesn't include the framework itself (React, Lit) -- your app already ships that.",
						children: /* @__PURE__ */ jsx("span", {
							"aria-label": "What these numbers mean",
							onClick: (event) => event.preventDefault(),
							className: "flex h-4 w-4 items-center justify-center rounded-full text-xs text-text2 hover:text-brand1",
							children: "?"
						})
					})]
				})
			]
		})
	});
}
//#endregion
//#region src/routes/index.tsx?tsr-split=component
function ShieldCheckIcon({ className }) {
	return /* @__PURE__ */ jsxs(IconSvg, {
		className,
		children: [/* @__PURE__ */ jsx("path", { d: "M12 3l7 3v5c0 5-3.5 8.5-7 10-3.5-1.5-7-5-7-10V6l7-3Z" }), /* @__PURE__ */ jsx("path", { d: "M9 12l2 2 4-4" })]
	});
}
function MinimizeIcon({ className }) {
	return /* @__PURE__ */ jsxs(IconSvg, {
		className,
		children: [
			/* @__PURE__ */ jsx("path", { d: "M9 4v4a1 1 0 0 1-1 1H4" }),
			/* @__PURE__ */ jsx("path", { d: "M20 9h-4a1 1 0 0 1-1-1V4" }),
			/* @__PURE__ */ jsx("path", { d: "M4 15h4a1 1 0 0 1 1 1v4" }),
			/* @__PURE__ */ jsx("path", { d: "M15 20v-4a1 1 0 0 1 1-1h4" })
		]
	});
}
function UnlockIcon({ className }) {
	return /* @__PURE__ */ jsxs(IconSvg, {
		className,
		children: [
			/* @__PURE__ */ jsx("path", { d: "M6 10V7a6 6 0 0 1 10.5-4" }),
			/* @__PURE__ */ jsx("rect", {
				x: "4",
				y: "10",
				width: "14",
				height: "10",
				rx: "2"
			}),
			/* @__PURE__ */ jsx("path", { d: "M11 15v2" })
		]
	});
}
function SlidersIcon({ className }) {
	return /* @__PURE__ */ jsxs(IconSvg, {
		className,
		children: [
			/* @__PURE__ */ jsx("line", {
				x1: "4",
				y1: "6",
				x2: "20",
				y2: "6"
			}),
			/* @__PURE__ */ jsx("circle", {
				cx: "9",
				cy: "6",
				r: "2",
				fill: "currentColor",
				stroke: "none"
			}),
			/* @__PURE__ */ jsx("line", {
				x1: "4",
				y1: "12",
				x2: "20",
				y2: "12"
			}),
			/* @__PURE__ */ jsx("circle", {
				cx: "15",
				cy: "12",
				r: "2",
				fill: "currentColor",
				stroke: "none"
			}),
			/* @__PURE__ */ jsx("line", {
				x1: "4",
				y1: "18",
				x2: "20",
				y2: "18"
			}),
			/* @__PURE__ */ jsx("circle", {
				cx: "11",
				cy: "18",
				r: "2",
				fill: "currentColor",
				stroke: "none"
			})
		]
	});
}
function OrbitMark({ className }) {
	return /* @__PURE__ */ jsxs("svg", {
		viewBox: "0 0 32 32",
		className,
		"aria-hidden": "true",
		children: [/* @__PURE__ */ jsx("path", {
			d: "M 23.72 6.81 A 12 12 0 1 1 4.18 13.91",
			fill: "none",
			stroke: "var(--color-brand2)",
			strokeWidth: "2.6",
			strokeLinecap: "round"
		}), /* @__PURE__ */ jsx("circle", {
			cx: "16",
			cy: "16",
			r: "5",
			fill: "var(--color-brand1)"
		})]
	});
}
function HomePage() {
	return /* @__PURE__ */ jsxs(Home, { children: [
		/* @__PURE__ */ jsxs(Hero, {
			className: "relative",
			icon: /* @__PURE__ */ jsx(OrbitMark, { className: "h-10 w-10 sm:h-14 sm:w-14" }),
			title: "kintools",
			lede: "Framework-agnostic TypeScript libraries.",
			children: [
				/* @__PURE__ */ jsx("div", {
					"aria-hidden": true,
					className: "hero-glow"
				}),
				/* @__PURE__ */ jsx(Button, {
					href: "#libraries",
					children: "Browse libraries"
				}),
				/* @__PURE__ */ jsx(Button, {
					href: "https://github.com/kintools-dev",
					variant: "secondary",
					external: true,
					children: "GitHub"
				})
			]
		}),
		/* @__PURE__ */ jsxs(Section, { children: [/* @__PURE__ */ jsx(SectionHeader, { children: "Why kintools" }), /* @__PURE__ */ jsxs(Grid, {
			cols: 2,
			children: [
				/* @__PURE__ */ jsx(Card, {
					className: "reveal-on-scroll transition-shadow hover:shadow-popover",
					children: /* @__PURE__ */ jsx(Principle, {
						icon: /* @__PURE__ */ jsx(MinimizeIcon, { className: "h-5 w-5" }),
						title: "Lean and fast",
						children: "Zero dependencies, checked bundle-size numbers, no dead weight."
					})
				}),
				/* @__PURE__ */ jsx(Card, {
					className: "reveal-on-scroll transition-shadow hover:shadow-popover",
					children: /* @__PURE__ */ jsx(Principle, {
						icon: /* @__PURE__ */ jsx(ShieldCheckIcon, { className: "h-5 w-5" }),
						title: "Type-safe by design",
						children: "Paths and values are inferred from your data, not annotated by hand."
					})
				}),
				/* @__PURE__ */ jsx(Card, {
					className: "reveal-on-scroll transition-shadow hover:shadow-popover",
					children: /* @__PURE__ */ jsx(Principle, {
						icon: /* @__PURE__ */ jsx(SlidersIcon, { className: "h-5 w-5" }),
						title: "Opt-in complexity",
						children: "Start with the plain primitive. Extra features are there when you reach for them, not before."
					})
				}),
				/* @__PURE__ */ jsx(Card, {
					className: "reveal-on-scroll transition-shadow hover:shadow-popover",
					children: /* @__PURE__ */ jsx(Principle, {
						icon: /* @__PURE__ */ jsx(UnlockIcon, { className: "h-5 w-5" }),
						title: "No vendor lock-in",
						children: "MIT licensed, free forever. No paywalled tier to migrate away from."
					})
				})
			]
		})] }),
		/* @__PURE__ */ jsxs(Section, {
			id: "libraries",
			children: [/* @__PURE__ */ jsx(SectionHeader, { children: "Libraries" }), /* @__PURE__ */ jsx(Grid, {
				cols: 2,
				children: libraries.map((library) => /* @__PURE__ */ jsx(LibraryCard, { library }, library.id))
			})]
		}),
		/* @__PURE__ */ jsx(DocsFooter, {})
	] });
}
//#endregion
export { HomePage as component };
