import{t as e}from"./jsx-runtime-BkSabwWG.js";var t=e(),n={description:`The four principles behind every Kin Store API decision: explicit over implicit, opt-in complexity, type safety by default, and two equally first-class tiers of mutation.`};function r(e){let n={a:`a`,code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,span:`span`,strong:`strong`,ul:`ul`,...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.h1,{id:`design-principles`,children:[(0,t.jsx)(n.a,{className:`header-anchor`,"aria-label":`Permalink to "Design Principles"`,href:`#design-principles`,children:(0,t.jsx)(n.span,{"aria-hidden":`true`,children:`#`})}),`Design Principles`]}),`
`,(0,t.jsx)(n.p,{children:`These four principles shaped every API decision in Kin Store. Understanding them
makes the library predictable, and explains why things work the way they do.`}),`
`,(0,t.jsxs)(n.h2,{id:`explicit-over-implicit`,children:[(0,t.jsx)(n.a,{className:`header-anchor`,"aria-label":`Permalink to "Explicit over implicit"`,href:`#explicit-over-implicit`,children:(0,t.jsx)(n.span,{"aria-hidden":`true`,children:`#`})}),`Explicit over implicit`]}),`
`,(0,t.jsx)(n.p,{children:`No hidden merges, no auto-propagating destroy, no magic dependency graphs. If
something happens, you triggered it.`}),`
`,(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:`set`}),` replaces the entire state — there is no shallow merge happening behind the
scenes. `,(0,t.jsx)(n.code,{children:`derive`}),` tracks only the stores you explicitly read with `,(0,t.jsx)(n.code,{children:`get(store)`}),`.
`,(0,t.jsx)(n.code,{children:`destroy`}),` must be called manually — nothing propagates to child stores
automatically. The `,(0,t.jsx)(n.code,{children:`CANCELED`}),` sentinel, named reducers, and the two-tier
mutation model all follow from this principle.`]}),`
`,(0,t.jsxs)(n.h2,{id:`opt-in-complexity`,children:[(0,t.jsx)(n.a,{className:`header-anchor`,"aria-label":`Permalink to "Opt-in complexity"`,href:`#opt-in-complexity`,children:(0,t.jsx)(n.span,{"aria-hidden":`true`,children:`#`})}),`Opt-in complexity`]}),`
`,(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:`createStore`}),` is the floor. `,(0,t.jsx)(n.code,{children:`withPlugins`}),` adds methods, reducers, middleware,
and lifecycle hooks, only when you import it. `,(0,t.jsx)(n.code,{children:`derive`}),` adds reactive
composition, only when you reach for it. You never pay for capability you
haven't opted into.`]}),`
`,(0,t.jsxs)(n.h2,{id:`type-safety-by-default`,children:[(0,t.jsx)(n.a,{className:`header-anchor`,"aria-label":`Permalink to "Type safety by default"`,href:`#type-safety-by-default`,children:(0,t.jsx)(n.span,{"aria-hidden":`true`,children:`#`})}),`Type safety by default`]}),`
`,(0,t.jsxs)(n.p,{children:[`Every reducer argument, dispatch call, and plugin method is fully inferred, no
`,(0,t.jsx)(n.code,{children:`any`}),` or `,(0,t.jsx)(n.code,{children:`unknown`}),`, no manual annotation at call sites. The type system is
load-bearing, not decorative.`]}),`
`,(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:`dispatch.addTodo("Buy groceries")`}),` knows that `,(0,t.jsx)(n.code,{children:`addTodo`}),` takes a `,(0,t.jsx)(n.code,{children:`string`}),`. A
middleware that reads `,(0,t.jsx)(n.code,{children:`ctx.reducer.args`}),` gets the correct tuple type. A plugin
that adds methods sees the accumulated store type including every plugin
registered before it. Type errors are caught statically, at definition time or
at the call site.`]}),`
`,(0,t.jsxs)(n.h2,{id:`two-tiers-of-mutation`,children:[(0,t.jsx)(n.a,{className:`header-anchor`,"aria-label":`Permalink to "Two tiers of mutation"`,href:`#two-tiers-of-mutation`,children:(0,t.jsx)(n.span,{"aria-hidden":`true`,children:`#`})}),`Two tiers of mutation`]}),`
`,(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:`dispatch.*`}),` and `,(0,t.jsx)(n.code,{children:`set`}),` are both first-class ways to change state, neither is
a fallback for the other. `,(0,t.jsx)(n.code,{children:`dispatch.*`}),` calls a named reducer through the
middleware pipeline, so the change is traceable, loggable, and cancellable.
`,(0,t.jsx)(n.code,{children:`set`}),` writes state directly, with no pipeline in between. Which one a team
reaches for is an architectural choice, not a hierarchy, and Kin Store is
deliberately built so any point on that spectrum is a first-class way to use
the library:`]}),`
`,(0,t.jsxs)(n.ul,{children:[`
`,(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:`Primitive composition`}),` — `,(0,t.jsx)(n.code,{children:`createStore`}),` + `,(0,t.jsx)(n.code,{children:`derive`}),` + plain functions, no
`,(0,t.jsx)(n.code,{children:`withPlugins`}),` at all.`]}),`
`,(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:`Methods only`}),` — `,(0,t.jsx)(n.code,{children:`withPlugins`}),` + `,(0,t.jsx)(n.code,{children:`methods`}),` that call `,(0,t.jsx)(n.code,{children:`set`}),` directly, no
reducers or middleware.`]}),`
`,(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:`Reducers + middleware`}),` — `,(0,t.jsx)(n.code,{children:`withPlugins`}),` + `,(0,t.jsx)(n.code,{children:`reducers`}),` dispatched through
`,(0,t.jsx)(n.code,{children:`dispatch.*`}),`, with middleware doing the logging/undo/guard work.`]}),`
`,(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:`Fat store`}),` — `,(0,t.jsx)(n.code,{children:`createStore`}),` plus colocated top-level logic functions that
call `,(0,t.jsx)(n.code,{children:`set`}),`, no plugin system involved.`]}),`
`]}),`
`,(0,t.jsxs)(n.p,{children:[`Within a `,(0,t.jsx)(n.code,{children:`withPlugins`}),` store, a method can also mix both in the same call:
`,(0,t.jsx)(n.code,{children:`dispatch.*`}),` for the parts of a change that should be traceable, `,(0,t.jsx)(n.code,{children:`set`}),` for a
direct write, matching what that specific change needs rather than a
store-wide rule. If your team standardizes on one style — e.g. "every mutation
goes through `,(0,t.jsx)(n.code,{children:`dispatch.*`}),`" — that's a convention to hold at the module
boundary (export `,(0,t.jsx)(n.code,{children:`dispatch`}),` and your methods, not `,(0,t.jsx)(n.code,{children:`set`}),`, from your store
module), not something Kin Store enforces for you.`]})]})}function i(e={}){let{wrapper:n}=e.components||{};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(r,{...e})}):r(e)}export{i as default,n as frontmatter};