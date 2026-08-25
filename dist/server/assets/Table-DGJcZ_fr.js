import { d as Tooltip, f as libraries, m as DocsFooter, p as cn } from "./Principle-BWXq106P.js";
import { Children, createContext, isValidElement, useContext, useEffect, useRef, useState, useSyncExternalStore } from "react";
import { Link, useLocation, useNavigate } from "@tanstack/react-router";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import MiniSearch from "minisearch";
//#region src/content/search-index-options.ts
var searchIndexOptions = {
	idField: "id",
	fields: [
		"title",
		"heading",
		"text"
	],
	storeFields: [
		"title",
		"heading",
		"path",
		"anchor"
	],
	searchOptions: {
		boost: {
			title: 4,
			heading: 3
		},
		prefix: true,
		fuzzy: .2
	}
};
//#endregion
//#region src/content/search-index.ts
var indexCache = /* @__PURE__ */ new Map();
function loadSearchIndex(project) {
	let promise = indexCache.get(project);
	if (!promise) {
		promise = fetch(`/search-index/${project}.json`).then((response) => response.text()).then((json) => MiniSearch.loadJSON(json, searchIndexOptions));
		indexCache.set(project, promise);
	}
	return promise;
}
//#endregion
//#region src/components/shared/DocsSearch.tsx
var MAX_RESULTS = 8;
function DocsSearch({ project }) {
	const [open, setOpen] = useState(false);
	const [query, setQuery] = useState("");
	const [results, setResults] = useState([]);
	const [activeIndex, setActiveIndex] = useState(0);
	const indexRef = useRef(null);
	const inputRef = useRef(null);
	const dialogRef = useRef(null);
	const navigate = useNavigate();
	useEffect(() => {
		function onKeyDown(event) {
			if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
				event.preventDefault();
				setOpen((value) => !value);
			}
		}
		document.addEventListener("keydown", onKeyDown);
		return () => document.removeEventListener("keydown", onKeyDown);
	}, []);
	useEffect(() => {
		if (!open) return;
		setQuery("");
		setResults([]);
		setActiveIndex(0);
		inputRef.current?.focus();
		loadSearchIndex(project).then((miniSearch) => {
			indexRef.current = miniSearch;
		});
		document.body.style.overflow = "hidden";
		function onPointerDown(event) {
			if (!dialogRef.current?.contains(event.target)) setOpen(false);
		}
		function onKeyDown(event) {
			if (event.key === "Escape") setOpen(false);
		}
		document.addEventListener("pointerdown", onPointerDown);
		document.addEventListener("keydown", onKeyDown);
		return () => {
			document.body.style.removeProperty("overflow");
			document.removeEventListener("pointerdown", onPointerDown);
			document.removeEventListener("keydown", onKeyDown);
		};
	}, [open, project]);
	function runSearch(value) {
		value = value.trim();
		setQuery(value);
		setActiveIndex(0);
		const miniSearch = indexRef.current;
		if (!miniSearch || value === "") {
			setResults([]);
			return;
		}
		setResults(miniSearch.search(value).slice(0, MAX_RESULTS).map((result) => ({
			id: String(result.id),
			title: result.title,
			heading: result.heading,
			path: result.path,
			anchor: result.anchor
		})));
	}
	function selectResult(row) {
		navigate({
			to: row.path,
			hash: row.anchor || void 0
		});
		setOpen(false);
	}
	function onInputKeyDown(event) {
		if (event.key === "ArrowDown") {
			event.preventDefault();
			setActiveIndex((index) => Math.min(index + 1, results.length - 1));
		} else if (event.key === "ArrowUp") {
			event.preventDefault();
			setActiveIndex((index) => Math.max(index - 1, 0));
		} else if (event.key === "Enter" && results[activeIndex]) {
			event.preventDefault();
			selectResult(results[activeIndex]);
		}
	}
	return /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsxs("button", {
		type: "button",
		onClick: () => setOpen(true),
		"aria-label": "Search docs",
		className: "flex h-8 w-9 items-center justify-center gap-2 rounded-md border border-border bg-bg-soft px-2.5 text-sm text-text3 hover:border-text3 sm:w-56 sm:justify-start",
		children: [
			/* @__PURE__ */ jsx(SearchIcon, { className: "h-4 w-4 shrink-0" }),
			/* @__PURE__ */ jsx("span", {
				className: "hidden flex-1 text-left sm:inline",
				children: "Search docs"
			}),
			/* @__PURE__ */ jsx("kbd", {
				className: "hidden rounded border border-border bg-bg px-1.5 py-0.5 font-sans text-xs text-text3 sm:inline",
				children: "Ctrl K"
			})
		]
	}), open && /* @__PURE__ */ jsx("div", {
		className: "fixed inset-0 z-50 flex items-start justify-center bg-black/40 px-4 pt-[15vh]",
		children: /* @__PURE__ */ jsxs("div", {
			ref: dialogRef,
			role: "dialog",
			"aria-modal": "true",
			"aria-label": "Search docs",
			className: "w-full max-w-lg overflow-hidden rounded-lg border border-border bg-bg-elv shadow-modal",
			children: [
				/* @__PURE__ */ jsxs("div", {
					className: "flex items-center gap-2 border-b border-border px-3",
					children: [/* @__PURE__ */ jsx(SearchIcon, { className: "h-4 w-4 shrink-0 text-text3" }), /* @__PURE__ */ jsx("input", {
						ref: inputRef,
						value: query,
						onChange: (event) => runSearch(event.target.value),
						onKeyDown: onInputKeyDown,
						placeholder: "Search docs",
						className: "h-12 flex-1 bg-transparent text-sm text-text1 outline-none placeholder:text-text3"
					})]
				}),
				results.length > 0 && /* @__PURE__ */ jsx("ul", {
					className: "max-h-[60vh] overflow-y-auto py-2",
					children: results.map((row, index) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs("button", {
						type: "button",
						onClick: () => selectResult(row),
						onMouseEnter: () => setActiveIndex(index),
						className: cn("flex w-full flex-col items-start gap-0.5 px-3 py-2 text-left", index === activeIndex ? "bg-bg-soft" : ""),
						children: [/* @__PURE__ */ jsx("span", {
							className: "text-sm text-text1",
							children: row.heading || row.title
						}), row.heading && /* @__PURE__ */ jsx("span", {
							className: "text-xs text-text3",
							children: row.title
						})]
					}) }, row.id))
				}),
				query !== "" && results.length === 0 && /* @__PURE__ */ jsxs("p", {
					className: "px-3 py-6 text-center text-sm text-text3",
					children: [
						"No results for \"",
						query,
						"\""
					]
				})
			]
		})
	})] });
}
function SearchIcon({ className }) {
	return /* @__PURE__ */ jsxs("svg", {
		viewBox: "0 0 20 20",
		fill: "none",
		stroke: "currentColor",
		strokeWidth: "1.5",
		className,
		"aria-hidden": "true",
		children: [/* @__PURE__ */ jsx("circle", {
			cx: "9",
			cy: "9",
			r: "6"
		}), /* @__PURE__ */ jsx("path", {
			d: "M17 17l-4-4",
			strokeLinecap: "round"
		})]
	});
}
//#endregion
//#region src/components/shared/LibrarySwitcher.tsx
var menuLinkClassName = "block px-3 py-1.5 text-sm text-text2 no-underline hover:bg-bg-soft hover:text-brand1";
function LibrarySwitcher({ currentId }) {
	const [open, setOpen] = useState(false);
	const rootRef = useRef(null);
	const closeMenu = () => setOpen(false);
	useEffect(() => {
		if (!open) return;
		(rootRef.current?.lastElementChild?.firstElementChild)?.focus();
		function onPointerDown(event) {
			if (!rootRef.current?.contains(event.target)) setOpen(false);
		}
		document.addEventListener("pointerdown", onPointerDown);
		return () => document.removeEventListener("pointerdown", onPointerDown);
	}, [open]);
	return /* @__PURE__ */ jsxs("div", {
		ref: rootRef,
		className: "relative flex",
		children: [/* @__PURE__ */ jsx(Tooltip, {
			content: "Switch library",
			children: /* @__PURE__ */ jsx("button", {
				type: "button",
				"aria-label": "Switch library",
				"aria-expanded": open,
				"aria-haspopup": "menu",
				onClick: () => setOpen((value) => !value),
				className: "flex h-6 w-6 items-center justify-center rounded text-text3 hover:bg-bg-soft hover:text-brand1",
				children: /* @__PURE__ */ jsx("svg", {
					width: "20",
					height: "20",
					viewBox: "0 0 20 20",
					fill: "none",
					stroke: "currentColor",
					strokeWidth: "1.5",
					"aria-hidden": "true",
					children: /* @__PURE__ */ jsx("path", {
						d: "M5 8l5 5 l5-5",
						strokeLinecap: "round",
						strokeLinejoin: "round"
					})
				})
			})
		}), open && /* @__PURE__ */ jsxs("div", {
			role: "menu",
			className: "absolute top-full left-0 z-20 mt-2 w-40 rounded-md border border-border bg-bg-elv py-1 shadow-popover",
			children: [
				libraries.map((library) => /* @__PURE__ */ jsx(Link, {
					to: library.base,
					role: "menuitem",
					onClick: closeMenu,
					className: `${menuLinkClassName} ${library.id === currentId ? "font-semibold text-brand1" : ""}`,
					children: library.title
				}, library.id)),
				/* @__PURE__ */ jsx("div", { className: "my-1 border-t border-border" }),
				/* @__PURE__ */ jsx(Link, {
					to: "/",
					role: "menuitem",
					onClick: closeMenu,
					className: menuLinkClassName,
					children: "kintools.dev"
				})
			]
		})]
	});
}
//#endregion
//#region src/components/DocsHeader.tsx
function normalize$1(link) {
	return link.length > 1 && link.endsWith("/") ? link.slice(0, -1) : link;
}
function isExternal(link) {
	return /^https?:\/\//.test(link);
}
function NavLinkItem({ base, link, text, className, onClick }) {
	const pathname = useLocation({ select: (location) => location.pathname });
	if (isExternal(link)) return /* @__PURE__ */ jsx("a", {
		href: link,
		target: "_blank",
		rel: "noreferrer",
		onClick,
		className: cn("text-text2 no-underline hover:text-brand1", className),
		children: text
	});
	const to = base + normalize$1(link);
	return /* @__PURE__ */ jsx(Link, {
		to,
		onClick,
		className: cn("no-underline hover:text-brand1", pathname === to ? "text-brand1" : "text-text2", className),
		children: text
	});
}
function MenuIcon({ className }) {
	return /* @__PURE__ */ jsx("svg", {
		viewBox: "0 0 20 20",
		fill: "none",
		stroke: "currentColor",
		strokeWidth: "1.5",
		className,
		"aria-hidden": "true",
		children: /* @__PURE__ */ jsx("path", {
			d: "M3 5h14M3 10h14M3 15h14",
			strokeLinecap: "round"
		})
	});
}
function GitHubIcon({ className }) {
	return /* @__PURE__ */ jsx("svg", {
		viewBox: "0 0 24 24",
		fill: "currentColor",
		className,
		"aria-hidden": "true",
		children: /* @__PURE__ */ jsx("path", { d: "M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.221-.253-4.556-1.113-4.556-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.31.678.921.678 1.856 0 1.34-.012 2.421-.012 2.751 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2Z" })
	});
}
/**
* The site-wide docs header: the current library's title link, the
* cross-library switcher, its local search, and that library's top nav
* links.
*
* Shared by `DocsLayout` (doc pages) and each library's `layout: home`
* page, which otherwise renders no chrome at all.
*/
function DocsHeader({ project, base, nav }) {
	const [menuOpen, setMenuOpen] = useState(false);
	const menuRef = useRef(null);
	const closeMenu = () => setMenuOpen(false);
	const githubLink = nav.socialLinks.find((link) => link.icon === "github")?.link;
	useEffect(() => {
		if (!menuOpen) return;
		function onPointerDown(event) {
			if (!menuRef.current?.contains(event.target)) setMenuOpen(false);
		}
		function onKeyDown(event) {
			if (event.key === "Escape") setMenuOpen(false);
		}
		document.addEventListener("pointerdown", onPointerDown);
		document.addEventListener("keydown", onKeyDown);
		return () => {
			document.removeEventListener("pointerdown", onPointerDown);
			document.removeEventListener("keydown", onKeyDown);
		};
	}, [menuOpen]);
	return /* @__PURE__ */ jsx("header", {
		className: "sticky top-0 z-40 h-14 border-b border-border bg-bg",
		children: /* @__PURE__ */ jsxs("div", {
			className: "mx-auto flex h-full w-full max-w-7xl items-center justify-between gap-3 px-4 sm:gap-6 sm:px-6",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "flex min-w-0 items-center gap-1.5",
				children: [/* @__PURE__ */ jsx(Link, {
					to: base,
					className: "truncate font-bold text-text1 uppercase no-underline",
					children: nav.title
				}), /* @__PURE__ */ jsx(LibrarySwitcher, { currentId: project })]
			}), /* @__PURE__ */ jsxs("div", {
				className: "flex items-center gap-3 sm:gap-6",
				children: [
					/* @__PURE__ */ jsx(DocsSearch, { project }),
					/* @__PURE__ */ jsx("nav", {
						className: "hidden gap-5 text-sm lg:flex",
						children: nav.nav.map((item) => /* @__PURE__ */ jsx(NavLinkItem, {
							base,
							link: item.link,
							text: item.text
						}, item.text))
					}),
					githubLink && /* @__PURE__ */ jsx("a", {
						href: githubLink,
						target: "_blank",
						rel: "noreferrer",
						"aria-label": "GitHub",
						className: "flex h-8 w-8 items-center justify-center rounded text-text2 hover:bg-bg-soft hover:text-brand1",
						children: /* @__PURE__ */ jsx(GitHubIcon, { className: "h-5 w-5" })
					}),
					/* @__PURE__ */ jsxs("div", {
						ref: menuRef,
						className: "relative lg:hidden",
						children: [/* @__PURE__ */ jsx("button", {
							type: "button",
							"aria-label": "Menu",
							"aria-expanded": menuOpen,
							"aria-haspopup": "menu",
							onClick: () => setMenuOpen((value) => !value),
							className: "flex h-8 w-8 items-center justify-center rounded text-text2 hover:bg-bg-soft",
							children: /* @__PURE__ */ jsx(MenuIcon, { className: "h-5 w-5" })
						}), menuOpen && /* @__PURE__ */ jsx("nav", {
							role: "menu",
							className: "absolute top-full right-0 z-20 mt-2 flex w-48 flex-col gap-1 rounded-md border border-border bg-bg-elv p-2 text-sm shadow-popover",
							children: nav.nav.map((item) => /* @__PURE__ */ jsx(NavLinkItem, {
								base,
								link: item.link,
								text: item.text,
								className: "rounded px-2 py-1.5 hover:bg-bg-soft",
								onClick: closeMenu
							}, item.text))
						})]
					})
				]
			})]
		})
	});
}
//#endregion
//#region ../store/core/_internals.ts
var IS_STORE = Symbol();
function notify(listeners, get, prevState) {
	for (const listener of Array.from(listeners)) listener(get, prevState);
}
//#endregion
//#region ../store/core/create-store.ts
/**
* Creates a simple reactive state store.
*
* For stores that need reducers, middlewares, or methods, use
* {@linkcode withPlugins} instead.
*
* @param initialState The initial state of the store.
* @returns A {@linkcode Store} instance.
*
* @example Minimal store
* ```ts
* const store = createStore({ count: 0 });
*
* store.set({ count: 1 });
* console.log(store.get()); // { count: 1 }
* ```
*
* @example Functional update
* ```ts
* const store = createStore(0);
* store.set((n) => n + 1);
* console.log(store.get()); // 1
* ```
*/
function createStore(initialState) {
	let state = initialState;
	const listeners = /* @__PURE__ */ new Set();
	function get() {
		return state;
	}
	function set(next) {
		const prevState = state;
		state = typeof next === "function" ? next(prevState) : next;
		if (Object.is(state, prevState)) return;
		notify(listeners, get, prevState);
	}
	function subscribe(listener) {
		listeners.add(listener);
		return () => listeners.delete(listener);
	}
	return {
		[IS_STORE]: true,
		get,
		set,
		subscribe
	};
}
//#endregion
//#region ../store/core/with-plugins.ts
var { keys, hasOwn } = Object;
createContext(null);
//#endregion
//#region ../store/react/hooks.ts
/**
* Reads the whole state and triggers re-renders on every state change.
*
* Internally uses React's `useSyncExternalStore`, so it is safe to use in
* concurrent mode.
*
* To read a transformed value derived from the state, use
* {@linkcode useSelector} instead.
*
* @template TState The store's state type.
*
* @param store The store to read from.
*
* @example Reading the whole state
* ```tsx
* const counter = createStore(0);
*
* function Counter(): JSX.Element {
*   const count = useStore(counter);
*   return <div>{count}</div>;
* }
* ```
*/
function useStore(store) {
	return useSyncExternalStore(store.subscribe, store.get, store.get);
}
//#endregion
//#region src/components/shared/framework-store.ts
var frameworks = [{
	id: "react",
	label: "React"
}, {
	id: "lit",
	label: "Lit"
}];
var STORAGE_KEY = "kintools:framework";
var isClient = typeof window !== "undefined";
function readInitial() {
	if (!isClient) return "react";
	const stored = localStorage.getItem(STORAGE_KEY);
	return stored === "react" || stored === "lit" ? stored : "react";
}
var frameworkStore = createStore(readInitial());
if (isClient) frameworkStore.subscribe((get) => localStorage.setItem(STORAGE_KEY, get()));
function useFramework() {
	return [useStore(frameworkStore), frameworkStore.set];
}
//#endregion
//#region src/components/shared/FrameworkSwitcher.tsx
function FrameworkSwitcher() {
	const [framework, setFramework] = useFramework();
	return /* @__PURE__ */ jsxs("div", {
		className: "mb-4 flex flex-col gap-2 border-b border-border pb-4",
		children: [/* @__PURE__ */ jsx("label", {
			htmlFor: "framework-select",
			className: "text-xs font-semibold text-text2 uppercase",
			children: "Framework:"
		}), /* @__PURE__ */ jsx("select", {
			id: "framework-select",
			value: framework,
			onChange: (event) => setFramework(event.target.value),
			className: "h-8 w-full rounded-md border border-border bg-bg-soft px-2.5 text-text1",
			children: frameworks.map((fw) => /* @__PURE__ */ jsx("option", {
				value: fw.id,
				children: fw.label
			}, fw.id))
		})]
	});
}
//#endregion
//#region src/components/DocsSidebar.tsx
function normalize(link) {
	return link.length > 1 && link.endsWith("/") ? link.slice(0, -1) : link;
}
/**
* The docs page sidebar: the form-only framework switcher, followed by the
* active section's groups of links (from `nav.sidebar[sidebarKey]`).
*/
function DocsSidebar({ project, base, activePath, groups }) {
	const detailsRef = useRef(null);
	function closeMenu() {
		if (detailsRef.current) detailsRef.current.open = false;
	}
	const content = /* @__PURE__ */ jsxs(Fragment, { children: [project === "form" && /* @__PURE__ */ jsx(FrameworkSwitcher, {}), groups?.map((group) => /* @__PURE__ */ jsxs("div", {
		className: "mb-5",
		children: [/* @__PURE__ */ jsx("h3", {
			className: "mb-2 text-xs font-bold tracking-wider text-text3 uppercase",
			children: group.text
		}), /* @__PURE__ */ jsx("ul", {
			className: "m-0 list-none p-0",
			children: group.items.map((item) => {
				const isActive = normalize(item.link) === `/${activePath}`;
				return /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, {
					to: base + normalize(item.link),
					onClick: closeMenu,
					className: cn("block py-1 text-sm no-underline hover:text-brand1", isActive ? "font-semibold text-brand1" : "text-text2"),
					children: item.text
				}) }, item.link);
			})
		})]
	}, group.text))] });
	return /* @__PURE__ */ jsxs("aside", {
		className: "sidebar-toggle border-b border-border lg:sticky lg:top-14 lg:h-[calc(100vh-3.5rem)] lg:shrink-0 lg:grow-0 lg:basis-60 lg:overflow-y-auto lg:border-r lg:border-b-0 lg:p-6",
		children: [/* @__PURE__ */ jsx("details", {
			ref: detailsRef,
			className: "group",
			children: /* @__PURE__ */ jsxs("summary", {
				className: "flex cursor-pointer list-none items-center justify-between px-4 py-3 text-sm font-semibold text-text1 marker:content-none [&::-webkit-details-marker]:hidden lg:hidden",
				children: [/* @__PURE__ */ jsx("span", { children: "Menu" }), /* @__PURE__ */ jsx(ChevronIcon, { className: "h-4 w-4 text-text3 transition-transform group-open:rotate-180" })]
			})
		}), /* @__PURE__ */ jsx("div", {
			className: "sidebar-panel",
			children: content
		})]
	});
}
function ChevronIcon({ className }) {
	return /* @__PURE__ */ jsx("svg", {
		viewBox: "0 0 20 20",
		fill: "none",
		stroke: "currentColor",
		strokeWidth: "1.5",
		className,
		"aria-hidden": "true",
		children: /* @__PURE__ */ jsx("path", {
			d: "M5 8l5 5 5-5",
			strokeLinecap: "round",
			strokeLinejoin: "round"
		})
	});
}
//#endregion
//#region src/components/DocsToc.tsx
/**
* The docs page's "on this page" table of contents: every `h2`/`h3` in the
* active page's rendered content, with the currently-visible section
* highlighted as the reader scrolls.
*
* Reads headings straight from the DOM (via `contentRef`) rather than from
* MDX build output, since `rehypeSlug` (see vite.config.ts) already gives
* every heading the stable `id` this component links to.
*/
function DocsToc({ activePath, contentRef }) {
	const [items, setItems] = useState([]);
	const [activeId, setActiveId] = useState("");
	useEffect(() => {
		const container = contentRef.current;
		if (!container) return;
		const headings = Array.from(container.querySelectorAll("h2[id], h3[id]"));
		setItems(headings.map((heading) => ({
			id: heading.id,
			text: heading.textContent.slice(1),
			level: heading.tagName === "H2" ? 2 : 3
		})));
	}, [activePath, contentRef]);
	useEffect(() => {
		if (items.length === 0) return;
		const headings = items.map((item) => document.getElementById(item.id)).filter((el) => el !== null);
		if (headings.length === 0) return;
		const headerOffset = 72;
		let ticking = false;
		function updateActive() {
			let current = "";
			for (const heading of headings) if (heading.getBoundingClientRect().top > headerOffset) {
				current = heading.id;
				break;
			}
			if (current === "") {
				if (globalThis.scrollY + globalThis.innerHeight >= document.documentElement.scrollHeight - 1) current = headings[headings.length - 1].id;
			}
			setActiveId(current);
			ticking = false;
		}
		function onScroll() {
			if (ticking) return;
			ticking = true;
			requestAnimationFrame(updateActive);
		}
		updateActive();
		globalThis.addEventListener("scroll", onScroll, { passive: true });
		globalThis.addEventListener("resize", onScroll);
		return () => {
			globalThis.removeEventListener("scroll", onScroll);
			globalThis.removeEventListener("resize", onScroll);
		};
	}, [items]);
	if (items.length === 0) return null;
	return /* @__PURE__ */ jsxs("aside", {
		className: "sticky top-14 hidden h-[calc(100vh-3.5rem)] shrink-0 basis-52 overflow-y-auto py-8 pl-6 xl:block",
		children: [/* @__PURE__ */ jsx("h3", {
			className: "mb-2 text-xs font-bold tracking-wider text-text3 uppercase",
			children: "On this page"
		}), /* @__PURE__ */ jsx("ul", {
			className: "m-0 list-none p-0",
			children: items.map((item) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", {
				href: `#${item.id}`,
				className: cn("block py-1 text-sm no-underline hover:text-brand1", item.level === 3 && "pl-4", activeId === item.id ? "text-brand1" : "text-text2"),
				children: item.text
			}) }, item.id))
		})]
	});
}
//#endregion
//#region src/components/DocsLayout.tsx
function DocsLayout({ project, base, nav, activePath, children }) {
	const currentSlashPath = `/${activePath}/`;
	const sidebarKey = Object.keys(nav.sidebar).find((key) => currentSlashPath.startsWith(key));
	const sidebarGroups = sidebarKey ? nav.sidebar[sidebarKey] : void 0;
	const contentRef = useRef(null);
	return /* @__PURE__ */ jsxs("div", {
		className: "flex min-h-full flex-col bg-bg",
		children: [
			/* @__PURE__ */ jsx(DocsHeader, {
				project,
				base,
				nav
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "mx-auto flex w-full max-w-7xl flex-1 flex-col lg:flex-row",
				children: [
					/* @__PURE__ */ jsx(DocsSidebar, {
						project,
						base,
						activePath,
						groups: sidebarGroups
					}),
					/* @__PURE__ */ jsx("main", {
						ref: contentRef,
						className: "docs min-w-0 flex-1 px-4 py-6 sm:px-6 md:px-8 lg:px-10 lg:py-8",
						children
					}),
					/* @__PURE__ */ jsx(DocsToc, {
						activePath,
						contentRef
					})
				]
			}),
			/* @__PURE__ */ jsx(DocsFooter, {})
		]
	});
}
//#endregion
//#region src/components/shared/side-by-side-context.ts
var SideBySideContext = createContext(false);
var SideBySideProvider = SideBySideContext.Provider;
function useSideBySideFullscreen() {
	return useContext(SideBySideContext);
}
//#endregion
//#region src/components/shared/CodeGroup.tsx
function CodeGroup({ children }) {
	const items = Children.toArray(children).filter(isValidElement);
	const labels = items.map((item) => item.props.label);
	const isFrameworkSynced = labels.length > 0 && labels.every((label) => frameworks.some((fw) => fw.label === label));
	const [framework, setFramework] = useFramework();
	const [localActive, setLocalActive] = useState(0);
	const sideBySideFullscreen = useSideBySideFullscreen();
	const syncedIndex = labels.findIndex((label) => frameworks.find((fw) => fw.label === label)?.id === framework);
	const activeIndex = isFrameworkSynced ? Math.max(syncedIndex, 0) : localActive;
	function selectTab(index) {
		if (isFrameworkSynced) {
			const fw = frameworks.find((f) => f.label === labels[index]);
			if (fw) setFramework(fw.id);
		} else setLocalActive(index);
	}
	if (sideBySideFullscreen) return /* @__PURE__ */ jsx("div", {
		className: "grid grid-cols-2 gap-4",
		children: items.map((item, i) => /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("div", {
			className: "fixed bg-bg w-full border-b border-border py-2 px-4 text-2xl font-bold text-text1",
			children: labels[i]
		}), /* @__PURE__ */ jsx("div", {
			className: "mt-10 code-group-panel block",
			children: item
		})] }, labels[i]))
	});
	return /* @__PURE__ */ jsxs("div", {
		className: "my-4 overflow-hidden rounded-lg border border-border",
		children: [/* @__PURE__ */ jsx("div", {
			className: "flex gap-4 px-4 border-b border-border bg-bg-soft",
			role: "tablist",
			children: labels.map((label, i) => /* @__PURE__ */ jsx("button", {
				type: "button",
				role: "tab",
				"aria-selected": i === activeIndex,
				className: `min-w-8 cursor-pointer border-b-2 border-transparent bg-none h-10 text-sm font-semibold ${i === activeIndex ? "border-b-brand1 text-brand1" : "text-text2"}`,
				onClick: () => selectTab(i),
				children: label
			}, label))
		}), items.map((item, i) => /* @__PURE__ */ jsx("div", {
			className: `code-group-panel ${i === activeIndex ? "block" : "hidden"}`,
			children: item
		}, labels[i]))]
	});
}
//#endregion
//#region src/components/shared/CodeGroupItem.tsx
function CodeGroupItem({ children }) {
	return /* @__PURE__ */ jsx(Fragment, { children });
}
//#endregion
//#region src/components/shared/Container.tsx
var borderColorClasses = {
	tip: "border-brand1",
	info: "border-blue-500",
	warning: "border-amber-500",
	danger: "border-red-500"
};
function Container({ type, title, children }) {
	return /* @__PURE__ */ jsxs("div", {
		className: `rounded-r-lg border-l-4 bg-bg-soft p-4 ${borderColorClasses[type] ?? "border-border"}`,
		children: [/* @__PURE__ */ jsx("p", {
			className: "mb-1.5 text-xs font-bold tracking-[0.04em]",
			children: title ?? defaultTitle(type)
		}), children]
	});
}
function defaultTitle(type) {
	switch (type) {
		case "tip": return "TIP";
		case "info": return "INFO";
		case "warning": return "WARNING";
		case "danger": return "DANGER";
		default: return type.toUpperCase();
	}
}
//#endregion
//#region src/components/shared/Cta.tsx
function Cta({ href, children }) {
	return /* @__PURE__ */ jsx("a", {
		href,
		className: "font-bold text-brand1 hover:text-brand2 hover:underline",
		children
	});
}
//#endregion
//#region src/components/shared/SideBySide.tsx
function SideBySide({ children }) {
	const containerRef = useRef(null);
	const [isFullscreen, setIsFullscreen] = useState(false);
	useEffect(() => {
		const el = containerRef.current;
		if (!el) return;
		function handleFullscreenChange() {
			setIsFullscreen(document.fullscreenElement === el);
		}
		document.addEventListener("fullscreenchange", handleFullscreenChange);
		return () => document.removeEventListener("fullscreenchange", handleFullscreenChange);
	}, []);
	function toggle() {
		if (document.fullscreenElement) document.exitFullscreen();
		else containerRef.current?.requestFullscreen();
	}
	return /* @__PURE__ */ jsxs("div", {
		ref: containerRef,
		className: `relative ${isFullscreen ? "overflow-y-auto bg-bg px-2" : ""}`,
		children: [/* @__PURE__ */ jsx("button", {
			type: "button",
			className: cn("z-20 cursor-pointer rounded-md px-4 py-1.5", "bg-brand1 text-sm font-medium text-white hover:bg-brand2", isFullscreen ? "fixed top-2 right-5" : "absolute top-1 right-1"),
			"aria-label": "Toggle fullscreen",
			onClick: toggle,
			children: isFullscreen ? "Exit" : "View side by side"
		}), /* @__PURE__ */ jsx(SideBySideProvider, {
			value: isFullscreen,
			children
		})]
	});
}
//#endregion
//#region src/components/shared/Table.tsx
var alignClasses = {
	left: "text-left",
	center: "text-center",
	right: "text-right"
};
/**
* A `<table>` rendered from a list of column definitions and rows, so
* callers describe *what* each column shows instead of hand-writing
* `<thead>`/`<tr>` markup per table.
*/
function Table({ columns, rows, rowKey, className = "" }) {
	return /* @__PURE__ */ jsx("div", {
		className: "overflow-x-auto",
		children: /* @__PURE__ */ jsxs("table", {
			className: cn("w-full border-collapse text-sm", className),
			children: [/* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsx("tr", { children: columns.map((column) => /* @__PURE__ */ jsx("th", {
				className: cn("border-b border-border px-4 py-2.5", alignClasses[column.align ?? "left"], column.headerClassName),
				children: column.header
			}, column.key)) }) }), /* @__PURE__ */ jsx("tbody", { children: rows.map((row) => /* @__PURE__ */ jsx("tr", { children: columns.map((column) => /* @__PURE__ */ jsx("td", {
				className: cn("border-b border-border px-4 py-2.5", alignClasses[column.align ?? "left"], column.cellClassName?.(row)),
				children: column.cell(row)
			}, column.key)) }, rowKey(row))) })]
		})
	});
}
//#endregion
export { CodeGroupItem as a, useFramework as c, Container as i, DocsHeader as l, SideBySide as n, CodeGroup as o, Cta as r, DocsLayout as s, Table as t };
