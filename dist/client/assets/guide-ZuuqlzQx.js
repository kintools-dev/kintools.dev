import{t as e}from"./jsx-runtime-BkSabwWG.js";var t=e(),n={description:`Why Kin Store exists: three primitives (createStore, withPlugins, derive), zero dependencies, full type inference, and opt-in complexity you only pay for when you use it.`};function r(e){let n={a:`a`,code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,span:`span`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.h1,{id:`why-kin-store`,children:[(0,t.jsx)(n.a,{className:`header-anchor`,"aria-label":`Permalink to "Why Kin Store?"`,href:`#why-kin-store`,children:(0,t.jsx)(n.span,{"aria-hidden":`true`,children:`#`})}),`Why Kin Store?`]}),`
`,(0,t.jsx)(n.p,{children:`Kin Store starts from one constraint: the smallest set of ideas a state library
actually needs, and nothing past that.`}),`
`,(0,t.jsxs)(n.h2,{id:`what-that-meant-in-practice`,children:[(0,t.jsx)(n.a,{className:`header-anchor`,"aria-label":`Permalink to "What that meant in practice"`,href:`#what-that-meant-in-practice`,children:(0,t.jsx)(n.span,{"aria-hidden":`true`,children:`#`})}),`What that meant in practice`]}),`
`,(0,t.jsxs)(n.p,{children:[`Three primitives came out of that constraint: `,(0,t.jsx)(n.code,{children:`createStore`}),`, `,(0,t.jsx)(n.code,{children:`withPlugins`}),`, and
`,(0,t.jsx)(n.code,{children:`derive`}),`.`]}),`
`,(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:`Primitive`}),(0,t.jsx)(n.th,{children:`What it does`})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:`/store/guide/create-store`,children:(0,t.jsx)(n.code,{children:`createStore`})})}),(0,t.jsxs)(n.td,{children:[`The irreducible floor. `,(0,t.jsx)(n.code,{children:`get`}),` · `,(0,t.jsx)(n.code,{children:`set`}),` · `,(0,t.jsx)(n.code,{children:`subscribe`}),`. Nothing else.`]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:`/store/guide/with-plugins`,children:(0,t.jsx)(n.code,{children:`withPlugins`})})}),(0,t.jsx)(n.td,{children:`Opt-in structure: methods, reducers, middleware, lifecycle hooks, namespaced plugins.`})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:`/store/guide/derive`,children:(0,t.jsx)(n.code,{children:`derive`})})}),(0,t.jsx)(n.td,{children:`Lazy, dependency-tracked, read-only views composed from one or more stores.`})]})]})]}),`
`,(0,t.jsxs)(n.p,{children:[`None of them carry a framework's worth of internal bookkeeping. A bare
`,(0,t.jsx)(n.code,{children:`createStore`}),` is a value and three methods, nothing else. Whatever structure you
add on top, methods, reducers, middleware, only exists because you `,(0,t.jsx)(n.code,{children:`.use()`}),`'d a
plugin for it through `,(0,t.jsx)(n.code,{children:`withPlugins`}),`; the store doesn't route everything through
a slice and a dispatch table by default.`]}),`
`,(0,t.jsxs)(n.p,{children:[`Nothing runs through a proxy or a full reactive graph either. A bare store costs
exactly what `,(0,t.jsx)(n.code,{children:`get`}),`/`,(0,t.jsx)(n.code,{children:`set`}),`/`,(0,t.jsx)(n.code,{children:`subscribe`}),` cost, and each plugin you layer on adds its
own cost on top, stacking rather than multiplying against what was already
there.`]}),`
`,(0,t.jsx)(n.p,{children:`Type inference comes along on top of that: reducer arguments, dispatch calls,
and plugin methods are fully inferred, so you're not hand-annotating what the
compiler already knows.`}),`
`,(0,t.jsxs)(n.p,{children:[`Curious how this holds up against Redux, Zustand, Jotai, or MobX in practice?
See the full `,(0,t.jsx)(n.a,{href:`/store/comparison/`,children:`comparison`}),` — line-by-line, with the tradeoffs
named directly.`]}),`
`,(0,t.jsxs)(n.h2,{id:`next`,children:[(0,t.jsx)(n.a,{className:`header-anchor`,"aria-label":`Permalink to "Next"`,href:`#next`,children:(0,t.jsx)(n.span,{"aria-hidden":`true`,children:`#`})}),`Next`]}),`
`,(0,t.jsxs)(n.ul,{children:[`
`,(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:`/store/guide/getting-started`,children:`Getting Started`}),` — install and write your first
store.`]}),`
`,(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:`/store/guide/design-principles`,children:`Design Principles`}),` — the reasoning behind
each API choice.`]}),`
`]})]})}function i(e={}){let{wrapper:n}=e.components||{};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(r,{...e})}):r(e)}export{i as default,n as frontmatter};