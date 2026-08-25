import{t as e}from"./jsx-runtime-BkSabwWG.js";var t=e(),n=void 0;function r(e){let n={a:`a`,code:`code`,em:`em`,h1:`h1`,h2:`h2`,p:`p`,span:`span`,...e.components},{Container:r,FrameworkSlot:i,FrameworkText:o}=n;return r||a(`Container`,!0),i||a(`FrameworkSlot`,!0),o||a(`FrameworkText`,!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.h1,{id:`common-pitfalls`,children:[(0,t.jsx)(n.a,{className:`header-anchor`,"aria-label":`Permalink to "Common Pitfalls"`,href:`#common-pitfalls`,children:(0,t.jsx)(n.span,{"aria-hidden":`true`,children:`#`})}),`Common Pitfalls`]}),`
`,(0,t.jsx)(n.p,{children:`Every entry here is silent: nothing throws, nothing fails to type-check, the UI
just doesn't do what you'd expect. Each one links to the guide that covers the
mechanism in full; this page is only the "watch out for this" index.`}),`
`,(0,t.jsxs)(n.h2,{id:`watching-in-the-same-component-that-owns-the-form`,children:[(0,t.jsx)(n.a,{className:`header-anchor`,"aria-label":`Permalink to "Watching in the same component that owns the form"`,href:`#watching-in-the-same-component-that-owns-the-form`,children:(0,t.jsx)(n.span,{"aria-hidden":`true`,children:`#`})}),`Watching in the same component that owns the form`]}),`
`,(0,t.jsxs)(o,{children:[(0,t.jsx)(i,{name:`react`,children:(0,t.jsxs)(n.p,{children:[`Calling `,(0,t.jsx)(n.code,{children:`useWatch`}),` in the same component that calls `,(0,t.jsx)(n.code,{children:`useForm`}),` re-renders the
whole form on every change, exactly what `,(0,t.jsx)(n.code,{children:`useForm`}),` not subscribing by itself is
meant to avoid.`]})}),(0,t.jsx)(i,{name:`lit`,children:(0,t.jsxs)(n.p,{children:[`Creating a `,(0,t.jsx)(n.code,{children:`WatchController`}),` in the same component that creates a `,(0,t.jsx)(n.code,{children:`FormApi`}),`
re-renders the whole form on every change, exactly what a plain `,(0,t.jsx)(n.code,{children:`#form`}),` class
field (rather than some subscribing helper) is meant to avoid.`]})})]}),`
`,(0,t.jsxs)(n.p,{children:[`Extract the subscription and the UI it drives into their own component instead.
See `,(0,t.jsx)(n.a,{href:`/form/guide/reactivity`,children:`Reactivity`}),`.`]}),`
`,(0,t.jsxs)(n.h2,{id:`disabled-cascades-through-state-not-through-the-dom`,children:[(0,t.jsx)(n.a,{className:`header-anchor`,"aria-label":`Permalink to "disabled cascades through state, not through the DOM"`,href:`#disabled-cascades-through-state-not-through-the-dom`,children:(0,t.jsx)(n.span,{"aria-hidden":`true`,children:`#`})}),(0,t.jsx)(n.code,{children:`disabled`}),` cascades through state, not through the DOM`]}),`
`,(0,t.jsxs)(n.p,{children:[`Setting `,(0,t.jsx)(n.code,{children:`form.disabled = true`}),` reaches every registered field's
`,(0,t.jsx)(n.code,{children:`FieldApi.disabled`}),`, but nothing on screen changes until a field's own component
actually reads it. A `,(0,t.jsx)(n.code,{children:`TextField`}),` that never reads `,(0,t.jsx)(n.code,{children:`field.disabled`}),` leaves its
`,(0,t.jsx)(n.code,{children:`<input>`}),` editable no matter what `,(0,t.jsx)(n.code,{children:`disabled`}),` says.`]}),`
`,(0,t.jsxs)(n.p,{children:[`Combine the field's own `,(0,t.jsx)(n.code,{children:`disabled`}),` with a `,(0,t.jsx)(n.code,{children:`disabled`}),` prop the caller can also
set (`,(0,t.jsx)(n.code,{children:`disabled={disabled || field.disabled}`}),` in React,
`,(0,t.jsx)(n.code,{children:`this.disabled || field.disabled`}),` in Lit) so both an ancestor cascade and a
one-off override work. See `,(0,t.jsx)(n.a,{href:`/form/guide/basic`,children:`Basic`}),` and
`,(0,t.jsx)(n.a,{href:`/form/guide/submission-handling`,children:`Submission Handling`}),`.`]}),`
`,(0,t.jsxs)(n.h2,{id:`reassigning-validatorsdependents-doesnt-revalidate-by-itself`,children:[(0,t.jsx)(n.a,{className:`header-anchor`,"aria-label":`Permalink to "Reassigning validators/dependents doesn't revalidate by itself"`,href:`#reassigning-validatorsdependents-doesnt-revalidate-by-itself`,children:(0,t.jsx)(n.span,{"aria-hidden":`true`,children:`#`})}),`Reassigning `,(0,t.jsx)(n.code,{children:`validators`}),`/`,(0,t.jsx)(n.code,{children:`dependents`}),` doesn't revalidate by itself`]}),`
`,(0,t.jsxs)(n.p,{children:[`Passing a fresh `,(0,t.jsx)(n.code,{children:`validators`}),` array on every render (a validator factory like
`,(0,t.jsx)(n.code,{children:`required()`}),` returns a new closure each call) doesn't trigger a new validation
run on its own — only an actual value change or an explicit `,(0,t.jsx)(n.code,{children:`validate(true)`}),`
does. A field can look like it's still validating against its old rules if
you're watching for some other signal that the option "took effect."`]}),`
`,(0,t.jsxs)(n.p,{children:[`This is deliberate, not a bug: reacting to the reference change alone would turn
every render into a validation run. Cache the array yourself (`,(0,t.jsx)(n.code,{children:`useMemo`}),` in
React, a class field in Lit) if you want reassigning the same set to be a true
no-op. See `,(0,t.jsx)(n.a,{href:`/form/guide/per-node-validation`,children:`Per-node Validation`}),`.`]}),`
`,(0,t.jsxs)(n.h2,{id:`reading-a-siblings-value-inside-a-validator-isnt-a-dependency`,children:[(0,t.jsx)(n.a,{className:`header-anchor`,"aria-label":`Permalink to "Reading a sibling's value inside a validator isn't a dependency"`,href:`#reading-a-siblings-value-inside-a-validator-isnt-a-dependency`,children:(0,t.jsx)(n.span,{"aria-hidden":`true`,children:`#`})}),`Reading a sibling's value inside a validator isn't a dependency`]}),`
`,(0,t.jsxs)(n.p,{children:[`A validator can read any other field's value directly (`,(0,t.jsx)(n.code,{children:`form.value.password`}),`),
but that read isn't tracked. Without declaring `,(0,t.jsx)(n.code,{children:`dependents`}),`, editing `,(0,t.jsx)(n.code,{children:`password`}),`
won't re-run `,(0,t.jsx)(n.code,{children:`confirmPassword`}),`'s validator, leaving a stale "Passwords must
match" error until `,(0,t.jsx)(n.code,{children:`confirmPassword`}),` is next edited or blurred itself.`]}),`
`,(0,t.jsxs)(n.p,{children:[`See `,(0,t.jsx)(n.a,{href:`/form/guide/linked-fields`,children:`Linked Fields`}),`.`]}),`
`,(0,t.jsxs)(n.h2,{id:`index-as-a-list-key`,children:[(0,t.jsx)(n.a,{className:`header-anchor`,"aria-label":`Permalink to "Index as a list key"`,href:`#index-as-a-list-key`,children:(0,t.jsx)(n.span,{"aria-hidden":`true`,children:`#`})}),`Index as a list key`]}),`
`,(0,t.jsxs)(n.p,{children:[`Keying an array's rendered rows on their index, instead of the item's own `,(0,t.jsx)(n.code,{children:`id`}),`,
misattributes uncontrolled DOM state (focus, cursor position, scroll) to the
wrong row after a reorder: the item that `,(0,t.jsx)(n.em,{children:`renders`}),` at index 2 changes, but the
component/element instance React/Lit reuses for index 2 doesn't.`]}),`
`,(0,t.jsxs)(n.p,{children:[`Use `,(0,t.jsx)(n.code,{children:`FieldApi.id`}),` as the key instead. See
`,(0,t.jsx)(n.a,{href:`/form/guide/dynamic-arrays`,children:`Dynamic Arrays`}),`.`]}),`
`,(0,t.jsxs)(n.h2,{id:`handlesubmit-doesnt-move-the-dirty-baseline`,children:[(0,t.jsx)(n.a,{className:`header-anchor`,"aria-label":`Permalink to "handleSubmit doesn't move the dirty baseline"`,href:`#handlesubmit-doesnt-move-the-dirty-baseline`,children:(0,t.jsx)(n.span,{"aria-hidden":`true`,children:`#`})}),(0,t.jsx)(n.code,{children:`handleSubmit`}),` doesn't move the dirty baseline`]}),`
`,(0,t.jsxs)(n.p,{children:[`A successful `,(0,t.jsx)(n.code,{children:`onSubmit`}),` doesn't reset anything on its own: `,(0,t.jsx)(n.code,{children:`dirty`}),` (and the
reset baseline it's computed from) stay exactly where they were before you
submitted, so a form that just saved successfully still reports `,(0,t.jsx)(n.code,{children:`dirty: true`}),`.`]}),`
`,(0,t.jsxs)(n.p,{children:[`Call `,(0,t.jsx)(n.code,{children:`form.reset()`}),` or `,(0,t.jsx)(n.code,{children:`form.reset(saved)`}),` to reset the baseline. See
`,(0,t.jsx)(n.a,{href:`/form/guide/dirty-tracking-and-reset`,children:`Dirty Tracking & Reset`}),`.`]}),`
`,(0,t.jsxs)(n.h2,{id:`fieldid-in-server-rendered-markup`,children:[(0,t.jsx)(n.a,{className:`header-anchor`,"aria-label":`Permalink to "field.id in server-rendered markup"`,href:`#fieldid-in-server-rendered-markup`,children:(0,t.jsx)(n.span,{"aria-hidden":`true`,children:`#`})}),(0,t.jsx)(n.code,{children:`field.id`}),` in server-rendered markup`]}),`
`,(0,t.jsx)(r,{type:`info`,children:(0,t.jsx)(n.p,{children:`React only — there's no SSR-oriented guide for the Lit binding in this repo yet.`})}),`
`,(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:`field.id`}),` is a stable, module-level counter: good for a React `,(0,t.jsx)(n.code,{children:`key`}),` since it
survives array reorders, but not seeded the same way on the server and the
client. Rendering it into an actual DOM attribute (an `,(0,t.jsx)(n.code,{children:`<input id={field.id}>`}),` /
`,(0,t.jsx)(n.code,{children:`<label htmlFor={field.id}>`}),` pair, say) mismatches during hydration. Use
`,(0,t.jsx)(n.code,{children:`useId()`}),` for a DOM id instead, and keep `,(0,t.jsx)(n.code,{children:`field.id`}),` scoped to `,(0,t.jsx)(n.code,{children:`key`}),`.`]}),`
`,(0,t.jsxs)(n.p,{children:[`See `,(0,t.jsx)(n.a,{href:`/form/guide/ssr`,children:`Server-Side Rendering (SSR)`}),` for the full guide.`]})]})}function i(e={}){let{wrapper:n}=e.components||{};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(r,{...e})}):r(e)}function a(e,t){throw Error(`Expected `+(t?`component`:`object`)+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}export{i as default,n as frontmatter};