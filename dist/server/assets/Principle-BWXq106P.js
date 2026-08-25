import { useId, useLayoutEffect, useRef, useState } from "react";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { createPortal } from "react-dom";
//#region src/components/DocsFooter.tsx
/**
* The site-wide footer: license and copyright. Takes just the `footer`
* slice of a library's `nav.json` (not the whole `NavConfig`) so the root
* kintools.dev homepage -- which isn't scoped to either library's nav --
* can render the same footer too, not a hand-rolled one of its own.
*
* Shared by `DocsLayout` (doc pages), each library's `layout: home` page,
* and the root homepage, all of which otherwise render no footer at all.
*/
function DocsFooter() {
	return /* @__PURE__ */ jsx("footer", {
		className: "border-t border-border text-text2",
		children: /* @__PURE__ */ jsxs("div", {
			className: "mx-auto max-w-7xl px-4 py-6 text-center sm:px-6",
			children: [/* @__PURE__ */ jsx("p", { children: "Released under the MIT License" }), /* @__PURE__ */ jsxs("p", { children: [
				"Copyright © 2026-present",
				" ",
				/* @__PURE__ */ jsx("a", {
					className: "text-text1 hover:text-brand1 active:text-brand2",
					href: "https://man-hoang.pages.dev",
					target: "_blank",
					children: "Man Hoang (Kin)"
				})
			] })]
		})
	});
}
//#endregion
//#region src/lib/cn.ts
/**
* Merges class names, resolving conflicting Tailwind utilities (e.g. two
* `text-*` colors) in favor of the one that appears last.
*/
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
//#endregion
//#region src/content/libraries.ts
var libraries = [{
	id: "form",
	title: "Kin Form",
	base: "/form",
	tagline: "Build your field components once. Reuse them everywhere.",
	description: "Form state library.",
	bundleSizes: [{
		framework: "React",
		size: "5.1 KB"
	}, {
		framework: "Lit",
		size: "5.4 KB"
	}]
}, {
	id: "store",
	title: "Kin Store",
	base: "/store",
	tagline: "Start with a plain store. Add structure only when the app earns it.",
	description: "Reactive state library.",
	bundleSizes: [{
		framework: "React",
		size: "2.0 KB"
	}]
}];
//#endregion
//#region src/components/shared/Tooltip.tsx
var VIEWPORT_MARGIN = 8;
var GAP = 8;
/**
* A hover/focus tooltip whose bubble renders into `document.body` (React's
* direct equivalent of Vue's `<Teleport to="body">`), positioned in
* viewport space so it can't be clipped by an ancestor's `overflow: auto`
* scroll container. The bubble only mounts while visible.
*
* It mounts at a naive spot above the trigger, then a layout effect
* measures its actual rendered size and settles it into its final position
* (horizontally clamped to the viewport width, flipped below the trigger if
* it would otherwise overflow the top) before the browser paints.
*/
function Tooltip({ content, children }) {
	const bubbleId = useId();
	const triggerRef = useRef(null);
	const bubbleRef = useRef(null);
	const [visible, setVisible] = useState(false);
	const [pos, setPos] = useState({
		top: 0,
		left: 0
	});
	if (!content) return /* @__PURE__ */ jsx(Fragment, { children });
	function show() {
		setVisible(true);
	}
	function hide() {
		setVisible(false);
	}
	useLayoutEffect(() => {
		if (!visible) return;
		const bubbleRect = bubbleRef.current?.getBoundingClientRect();
		const triggerRect = triggerRef.current?.getBoundingClientRect();
		if (!bubbleRect || !triggerRect) return;
		const centerX = triggerRect.left + triggerRect.width / 2;
		const left = Math.min(Math.max(centerX - bubbleRect.width / 2, VIEWPORT_MARGIN), window.innerWidth - bubbleRect.width - VIEWPORT_MARGIN);
		let top = triggerRect.top - bubbleRect.height - GAP;
		if (top < VIEWPORT_MARGIN) top = triggerRect.bottom + GAP;
		setPos({
			top,
			left
		});
	}, [visible]);
	return /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx("div", {
		ref: triggerRef,
		className: "inline-block cursor-help",
		tabIndex: 0,
		"aria-describedby": bubbleId,
		onMouseEnter: show,
		onMouseLeave: hide,
		onFocus: show,
		onBlur: hide,
		children
	}), visible && typeof document !== "undefined" && createPortal(/* @__PURE__ */ jsx("div", {
		ref: bubbleRef,
		id: bubbleId,
		role: "tooltip",
		className: "fixed z-9999 w-max max-w-sm rounded-md border border-border bg-bg-elv px-2.5 py-2 text-left text-sm shadow-popover",
		style: {
			top: `${pos.top}px`,
			left: `${pos.left}px`
		},
		children: content
	}), document.body)] });
}
//#endregion
//#region src/components/shared/Button.tsx
var base = "inline-block rounded font-bold text-sm leading-5 px-5 py-2.5 transition-colors";
var variantClasses = {
	primary: "bg-brand1 text-white hover:bg-brand2",
	secondary: "border border-border text-text1 hover:border-text1"
};
function Button({ href, variant = "primary", external = false, children }) {
	return /* @__PURE__ */ jsx("a", {
		href,
		className: `${base} ${variantClasses[variant]}`,
		...external ? {
			target: "_blank",
			rel: "noreferrer"
		} : {},
		children
	});
}
//#endregion
//#region src/components/shared/Card.tsx
/**
* A bordered, padded surface for grouping related content (a feature grid,
* a fit/skip comparison, a chart) so it reads as one unit against the page.
*/
function Card({ className = "", children }) {
	return /* @__PURE__ */ jsx("div", {
		className: cn("rounded-lg border border-border bg-bg-soft p-4 sm:p-6", className),
		children
	});
}
//#endregion
//#region src/components/shared/Grid.tsx
var colsClasses = {
	2: "sm:grid-cols-2",
	3: "md:grid-cols-3"
};
/**
* A responsive multi-column layout for a set of parallel items (primitives,
* principles, comparison trees).
*
* Stacks to one column on narrow viewports; `divided` adds a rule between
* columns once the grid actually splits into columns.
*/
function Grid({ cols = 2, divided = false, className = "", children }) {
	return /* @__PURE__ */ jsx("div", {
		className: cn("grid grid-cols-1 gap-x-8 gap-y-6", colsClasses[cols], className),
		style: divided ? { columnRule: "1px solid var(--color-border)" } : {},
		children
	});
}
//#endregion
//#region src/components/shared/Lede.tsx
function Lede({ as: Tag = "p", step, children }) {
	return /* @__PURE__ */ jsxs(Tag, {
		className: step ? "mb-4 flex max-w-[80ch] items-baseline gap-3 text-xl font-semibold" : "mb-4 max-w-[80ch] text-xl font-semibold",
		children: [step && /* @__PURE__ */ jsx("span", {
			className: "font-mono text-lg text-brand1",
			children: step
		}), children]
	});
}
//#endregion
//#region src/components/shared/Prose.tsx
/**
* A body paragraph in the home page's own markdown-authored copy.
*
* Not used for `DocsLayout`'s guide/comparison prose, which gets its
* typography from docs.css instead, since it spans the whole content corpus
* rather than a handful of home-page paragraphs.
*/
function Prose({ className = "", children }) {
	return /* @__PURE__ */ jsx("p", {
		className: cn("mb-4 max-w-[80ch] text-text2 last:mb-0", className),
		children
	});
}
//#endregion
//#region src/components/shared/Section.tsx
/**
* One full-bleed block of the home page, with consistent vertical rhythm
* between sections and no trailing gap after the last one on the page.
*/
function Section({ id, className = "", children }) {
	return /* @__PURE__ */ jsx("section", {
		id,
		className: cn("pb-20 last:pb-0 sm:pb-32", className),
		children
	});
}
//#endregion
//#region src/components/shared/SectionHeader.tsx
function SectionHeader({ as: Tag = "h2", children }) {
	return /* @__PURE__ */ jsx(Tag, {
		className: "mb-4 max-w-180 text-3xl font-medium sm:text-5xl",
		children
	});
}
//#endregion
//#region src/components/shared/Hero.tsx
function Hero({ icon, title, lede, description, children, className }) {
	return /* @__PURE__ */ jsxs(Section, {
		className: cn("pt-20 sm:pt-32", className),
		children: [
			/* @__PURE__ */ jsx(SectionHeader, {
				as: "h1",
				children: icon ? /* @__PURE__ */ jsxs("span", {
					className: "inline-flex items-center gap-3",
					children: [icon, title]
				}) : title
			}),
			/* @__PURE__ */ jsx(Lede, { children: lede }),
			description && /* @__PURE__ */ jsx(Prose, { children: description }),
			/* @__PURE__ */ jsx("div", {
				className: "flex gap-3 pt-2",
				children
			})
		]
	});
}
//#endregion
//#region src/components/shared/Home.tsx
function Home({ children }) {
	return /* @__PURE__ */ jsx("div", {
		className: "mx-auto max-w-6xl px-4 sm:px-6",
		children
	});
}
//#endregion
//#region src/components/shared/Principle.tsx
function Principle({ icon, title, children }) {
	return /* @__PURE__ */ jsxs("div", { children: [
		icon && /* @__PURE__ */ jsx("div", {
			className: "mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-brand1/10 text-brand1",
			children: icon
		}),
		/* @__PURE__ */ jsx("h3", {
			className: "text-lg font-semibold",
			children: title
		}),
		/* @__PURE__ */ jsx("p", {
			className: "text-text2",
			children
		})
	] });
}
//#endregion
export { Section as a, Grid as c, Tooltip as d, libraries as f, SectionHeader as i, Card as l, DocsFooter as m, Home as n, Prose as o, cn as p, Hero as r, Lede as s, Principle as t, Button as u };
