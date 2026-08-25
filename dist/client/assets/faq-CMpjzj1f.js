import{t as e}from"./jsx-runtime-BkSabwWG.js";var t=e(),n={description:`Frequently asked questions and honest non-goals: what Kin Store deliberately doesn't do, framework support, SSR, DevTools, and where server state belongs.`};function r(e){let n={a:`a`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,p:`p`,span:`span`,...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.h1,{id:`faq--non-goals`,children:[(0,t.jsx)(n.a,{className:`header-anchor`,"aria-label":`Permalink to "FAQ & Non-Goals"`,href:`#faq--non-goals`,children:(0,t.jsx)(n.span,{"aria-hidden":`true`,children:`#`})}),`FAQ & Non-Goals`]}),`
`,(0,t.jsxs)(n.h2,{id:`frequently-asked-questions`,children:[(0,t.jsx)(n.a,{className:`header-anchor`,"aria-label":`Permalink to "Frequently asked questions"`,href:`#frequently-asked-questions`,children:(0,t.jsx)(n.span,{"aria-hidden":`true`,children:`#`})}),`Frequently asked questions`]}),`
`,(0,t.jsxs)(n.h3,{id:`is-kin-store-production-ready`,children:[(0,t.jsx)(n.a,{className:`header-anchor`,"aria-label":`Permalink to "Is Kin Store production-ready?"`,href:`#is-kin-store-production-ready`,children:(0,t.jsx)(n.span,{"aria-hidden":`true`,children:`#`})}),`Is Kin Store production-ready?`]}),`
`,(0,t.jsxs)(n.p,{children:[`The core API (`,(0,t.jsx)(n.code,{children:`createStore`}),`, `,(0,t.jsx)(n.code,{children:`withPlugins`}),`, `,(0,t.jsx)(n.code,{children:`derive`}),`), the official plugins, and
the React bindings are all covered by tests that run on every publish. That
said, the project is young: small community, short track record. Weigh those as
real inputs to your own risk assessment, not something the docs will talk you
out of.`]}),`
`,(0,t.jsxs)(n.h3,{id:`does-it-work-outside-react`,children:[(0,t.jsx)(n.a,{className:`header-anchor`,"aria-label":`Permalink to "Does it work outside React?"`,href:`#does-it-work-outside-react`,children:(0,t.jsx)(n.span,{"aria-hidden":`true`,children:`#`})}),`Does it work outside React?`]}),`
`,(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:`@kintools/store-core`}),` and `,(0,t.jsx)(n.code,{children:`@kintools/store-plugins`}),` have zero framework
dependency: a store is a plain value with `,(0,t.jsx)(n.code,{children:`get`}),`/`,(0,t.jsx)(n.code,{children:`set`}),`/`,(0,t.jsx)(n.code,{children:`subscribe`}),`, usable from
any JS/TS environment (vanilla, a framework's own reactivity, a worker, a
Node/Deno backend). `,(0,t.jsx)(n.code,{children:`@kintools/store-react`}),` is the only official framework
binding published today.`]}),`
`,(0,t.jsxs)(n.h3,{id:`is-there-official-vue-svelte-or-solid-support`,children:[(0,t.jsx)(n.a,{className:`header-anchor`,"aria-label":`Permalink to "Is there official Vue, Svelte, or Solid support?"`,href:`#is-there-official-vue-svelte-or-solid-support`,children:(0,t.jsx)(n.span,{"aria-hidden":`true`,children:`#`})}),`Is there official Vue, Svelte, or Solid support?`]}),`
`,(0,t.jsxs)(n.p,{children:[`Not today. Nothing in the architecture is React-specific (`,(0,t.jsx)(n.code,{children:`useStore`}),` is a thin
`,(0,t.jsx)(n.code,{children:`useSyncExternalStore`}),` wrapper), so a similar binding for another framework is
plausible future work, but no such package exists or is published yet.
`,(0,t.jsx)(n.code,{children:`subscribe`}),` is plain enough to wire into another framework's reactivity by hand
in the meantime.`]}),`
`,(0,t.jsxs)(n.h3,{id:`does-it-work-with-ssr--nextjs`,children:[(0,t.jsx)(n.a,{className:`header-anchor`,"aria-label":`Permalink to "Does it work with SSR / Next.js?"`,href:`#does-it-work-with-ssr--nextjs`,children:(0,t.jsx)(n.span,{"aria-hidden":`true`,children:`#`})}),`Does it work with SSR / Next.js?`]}),`
`,(0,t.jsxs)(n.p,{children:[`See the `,(0,t.jsx)(n.a,{href:`/store/examples/nextjs`,children:`Next.js example`}),`. SSR mainly changes two
things: where the store instance lives (constructed per-request or via a
provider, not a module-level singleton shared across requests) and when
`,(0,t.jsx)(n.code,{children:`persist`}),` is allowed to touch `,(0,t.jsx)(n.code,{children:`localStorage`}),` (skipped on the server, hydrated
explicitly on the client).`]}),`
`,(0,t.jsxs)(n.h3,{id:`is-there-a-devtools-integration`,children:[(0,t.jsx)(n.a,{className:`header-anchor`,"aria-label":`Permalink to "Is there a DevTools integration?"`,href:`#is-there-a-devtools-integration`,children:(0,t.jsx)(n.span,{"aria-hidden":`true`,children:`#`})}),`Is there a DevTools integration?`]}),`
`,(0,t.jsxs)(n.p,{children:[`The official `,(0,t.jsx)(n.a,{href:`/store/plugins/devtools`,children:(0,t.jsx)(n.code,{children:`devtools`})}),` plugin connects a store to
the Redux DevTools Extension for time-travel debugging, action replay, and
jump-to-state. It's opt-in like every other plugin; a store that never registers
it carries no devtools code.`]}),`
`,(0,t.jsxs)(n.h3,{id:`can-reducers-or-methods-be-async`,children:[(0,t.jsx)(n.a,{className:`header-anchor`,"aria-label":`Permalink to "Can reducers or methods be async?"`,href:`#can-reducers-or-methods-be-async`,children:(0,t.jsx)(n.span,{"aria-hidden":`true`,children:`#`})}),`Can reducers or methods be async?`]}),`
`,(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:`methods`}),` can be async directly; a method is just a function with full access to
`,(0,t.jsx)(n.code,{children:`get`}),`/`,(0,t.jsx)(n.code,{children:`set`}),`/`,(0,t.jsx)(n.code,{children:`dispatch`}),`. `,(0,t.jsx)(n.code,{children:`reducers`}),` are pure and synchronous by design,
`,(0,t.jsx)(n.code,{children:`(state, ...args) => nextState`}),`, so async work (a `,(0,t.jsx)(n.code,{children:`fetch`}),` call) belongs in a
method that calls `,(0,t.jsx)(n.code,{children:`dispatch`}),` or `,(0,t.jsx)(n.code,{children:`set`}),` once the result is ready, not in the
reducer itself.`]}),`
`,(0,t.jsxs)(n.h3,{id:`how-does-kin-store-handle-server-state-caching-and-refetching`,children:[(0,t.jsx)(n.a,{className:`header-anchor`,"aria-label":`Permalink to "How does Kin Store handle server state, caching, and refetching?"`,href:`#how-does-kin-store-handle-server-state-caching-and-refetching`,children:(0,t.jsx)(n.span,{"aria-hidden":`true`,children:`#`})}),`How does Kin Store handle server state, caching, and refetching?`]}),`
`,(0,t.jsxs)(n.p,{children:[`It doesn't, on purpose. `,(0,t.jsx)(n.code,{children:`createStore`}),`/`,(0,t.jsx)(n.code,{children:`withPlugins`}),` model state your client
owns; server-owned data (cached responses, request dedup, background refetch) is
TanStack Query's job, not Kin Store's. See the
`,(0,t.jsx)(n.a,{href:`/store/examples/`,children:`TanStack Query examples`}),` for two ways to split the two:
client state as one `,(0,t.jsx)(n.code,{children:`withPlugins`}),` store, or one `,(0,t.jsx)(n.code,{children:`createStore`}),` per field.`]}),`
`,(0,t.jsxs)(n.h3,{id:`does-persist-or-broadcast-handle-conflict-resolution-for-concurrent-edits`,children:[(0,t.jsx)(n.a,{className:`header-anchor`,"aria-label":`Permalink to "Does persist or broadcast handle conflict resolution for concurrent edits?"`,href:`#does-persist-or-broadcast-handle-conflict-resolution-for-concurrent-edits`,children:(0,t.jsx)(n.span,{"aria-hidden":`true`,children:`#`})}),`Does `,(0,t.jsx)(n.code,{children:`persist`}),` or `,(0,t.jsx)(n.code,{children:`broadcast`}),` handle conflict resolution for concurrent edits?`]}),`
`,(0,t.jsxs)(n.p,{children:[`No. `,(0,t.jsx)(n.code,{children:`persist`}),` writes state to storage and reads it back; `,(0,t.jsx)(n.code,{children:`broadcast`}),` mirrors
state across tabs with last-write-wins by wall-clock time, so if two tabs change
state within the same millisecond, one change is silently dropped. Neither
merges concurrent edits. For state that genuinely needs that (real-time
collaborative editing), reach for a CRDT library instead.`]}),`
`,(0,t.jsxs)(n.h3,{id:`whats-the-bundle-size`,children:[(0,t.jsx)(n.a,{className:`header-anchor`,"aria-label":`Permalink to "What's the bundle size?"`,href:`#whats-the-bundle-size`,children:(0,t.jsx)(n.span,{"aria-hidden":`true`,children:`#`})}),`What's the bundle size?`]}),`
`,(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:`createStore`}),` is 231 B gzipped, `,(0,t.jsx)(n.code,{children:`withPlugins`}),` is 1.0 KB, and `,(0,t.jsx)(n.code,{children:`derive`}),` is 438 B,
each measured independently since you only pay for what you `,(0,t.jsx)(n.code,{children:`.use()`}),`. Plugins
and the React bindings add their own (small) cost on top only when imported.`]}),`
`,(0,t.jsxs)(n.h3,{id:`where-do-i-ask-a-question-or-report-a-bug`,children:[(0,t.jsx)(n.a,{className:`header-anchor`,"aria-label":`Permalink to "Where do I ask a question or report a bug?"`,href:`#where-do-i-ask-a-question-or-report-a-bug`,children:(0,t.jsx)(n.span,{"aria-hidden":`true`,children:`#`})}),`Where do I ask a question or report a bug?`]}),`
`,(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:`https://github.com/kintools-dev/store/discussions`,children:`GitHub Discussions`}),` for
questions and design feedback,
`,(0,t.jsx)(n.a,{href:`https://github.com/kintools-dev/store/issues`,children:`Issues`}),` for bugs.`]}),`
`,(0,t.jsxs)(n.h2,{id:`non-goals`,children:[(0,t.jsx)(n.a,{className:`header-anchor`,"aria-label":`Permalink to "Non-goals"`,href:`#non-goals`,children:(0,t.jsx)(n.span,{"aria-hidden":`true`,children:`#`})}),`Non-goals`]}),`
`,(0,t.jsxs)(n.p,{children:[`Kin Store has no request cache, no dedup, no background refetch; server state
(cached responses, in-flight data) is TanStack Query's job, and
`,(0,t.jsx)(n.code,{children:`createStore`}),`/`,(0,t.jsx)(n.code,{children:`withPlugins`}),` only ever model what the client owns.`]}),`
`,(0,t.jsxs)(n.p,{children:[`State changes only through `,(0,t.jsx)(n.code,{children:`set`}),` or a dispatched reducer. Nothing mutates a
draft behind your back unless you explicitly opt into the
`,(0,t.jsx)(n.a,{href:`/store/plugins/immer`,children:(0,t.jsx)(n.code,{children:`immer`})}),` plugin, so there's no implicit, proxy-based
reactivity happening anywhere by default.`]}),`
`,(0,t.jsxs)(n.p,{children:[`It's also not a schema-validation library: state shape is whatever TypeScript
type you give `,(0,t.jsx)(n.code,{children:`createStore`}),`, and validating external input (an API response, a
form submission) is left to a dedicated library. And it's not multi-framework
yet; `,(0,t.jsx)(n.code,{children:`@kintools/store-react`}),` is the only official binding, with no Vue, Svelte,
or Solid package. If you're interested in Kin Store and want bindings for other
frameworks, please
`,(0,t.jsx)(n.a,{href:`https://github.com/kintools-dev/store/issues`,children:`file an issue`}),`.`]}),`
`,(0,t.jsxs)(n.p,{children:[`Neither `,(0,t.jsx)(n.code,{children:`persist`}),` nor `,(0,t.jsx)(n.code,{children:`broadcast`}),` does conflict resolution beyond
last-write-wins, so don't reach for either as a substitute for a CRDT on state
that genuinely needs merged concurrent edits.`]}),`
`,(0,t.jsxs)(n.p,{children:[`Finally, Kin Store isn't trying to out-feature Redux. There's no built-in
serializable action log format, no time-travel outside the `,(0,t.jsx)(n.code,{children:`devtools`}),` plugin,
and no code-generation step. The `,(0,t.jsx)(n.a,{href:`/store/comparison/`,children:`comparison page`}),` covers
those tradeoffs directly.`]})]})}function i(e={}){let{wrapper:n}=e.components||{};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(r,{...e})}):r(e)}export{i as default,n as frontmatter};