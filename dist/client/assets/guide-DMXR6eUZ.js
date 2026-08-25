import{t as e}from"./jsx-runtime-BkSabwWG.js";var t=e(),n=void 0;function r(e){let n={a:`a`,code:`code`,figure:`figure`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,span:`span`,strong:`strong`,ul:`ul`,...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.h1,{id:`why-kin-form`,children:[(0,t.jsx)(n.a,{className:`header-anchor`,"aria-label":`Permalink to "Why Kin Form?"`,href:`#why-kin-form`,children:(0,t.jsx)(n.span,{"aria-hidden":`true`,children:`#`})}),`Why Kin Form?`]}),`
`,(0,t.jsxs)(n.h2,{id:`build-field-components-once-then-reuse-them`,children:[(0,t.jsx)(n.a,{className:`header-anchor`,"aria-label":`Permalink to "Build field components once, then reuse them"`,href:`#build-field-components-once-then-reuse-them`,children:(0,t.jsx)(n.span,{"aria-hidden":`true`,children:`#`})}),`Build field components once, then reuse them`]}),`
`,(0,t.jsxs)(n.p,{children:[`Kin Form is designed around reusable form UI, not one-off bindings. A
`,(0,t.jsx)(n.code,{children:`TextField`}),`, `,(0,t.jsx)(n.code,{children:`AddressField`}),`, `,(0,t.jsx)(n.code,{children:`ItemsField`}),`, or `,(0,t.jsx)(n.code,{children:`SubmitButton`}),` takes the resolved
`,(0,t.jsx)(n.code,{children:`FieldApi`}),` it needs and nothing else: no dotted path, form context, or bespoke
callback plumbing. The same component can render a field wherever its value type
fits, across forms and applications.`]}),`
`,(0,t.jsxs)(n.p,{children:[`Because a leaf, a nested group, an array item, and the form root share the same
state model, the component pattern never changes as a form grows. See
`,(0,t.jsx)(n.a,{href:`/form/guide/form-composition`,children:`Form Composition`}),` for the complete pattern.`]}),`
`,(0,t.jsxs)(n.p,{children:[`That reuse crosses form boundaries, not just within one form's own subtree.
`,(0,t.jsx)(n.code,{children:`FieldApi<TValue, TParentValue = never>`}),` decouples a field's own value type from
its parent form's shape:`]}),`
`,(0,t.jsx)(n.figure,{"data-rehype-pretty-code-figure":``,children:(0,t.jsx)(n.pre,{tabIndex:`0`,"data-language":`ts`,"data-theme":`poimandres-light`,children:(0,t.jsxs)(n.code,{"data-language":`ts`,"data-theme":`poimandres-light`,style:{display:`grid`},children:[(0,t.jsxs)(n.span,{"data-line":``,children:[(0,t.jsx)(n.span,{style:{"--shiki-light":`#3D6F94`},children:`function`}),(0,t.jsx)(n.span,{style:{"--shiki-light":`#1A6FB0`},children:` TextField`}),(0,t.jsx)(n.span,{style:{"--shiki-light":`#3C4257`},children:`<TParentValue>(`})]}),`
`,(0,t.jsxs)(n.span,{"data-line":``,children:[(0,t.jsx)(n.span,{style:{"--shiki-light":`#3C4257`},children:`  { `}),(0,t.jsx)(n.span,{style:{"--shiki-light":`#16233A`},children:`api`}),(0,t.jsx)(n.span,{style:{"--shiki-light":`#3C4257`},children:` }`}),(0,t.jsx)(n.span,{style:{"--shiki-light":`#3D6F94`},children:`:`}),(0,t.jsx)(n.span,{style:{"--shiki-light":`#3C4257`},children:` { api`}),(0,t.jsx)(n.span,{style:{"--shiki-light":`#3D6F94`},children:`:`}),(0,t.jsx)(n.span,{style:{"--shiki-light":`#3C4257`},children:` FieldApi<string, TParentValue> },`})]}),`
`,(0,t.jsx)(n.span,{"data-line":``,children:(0,t.jsx)(n.span,{style:{"--shiki-light":`#3C4257`},children:`) {`})}),`
`,(0,t.jsx)(n.span,{"data-line":``,children:(0,t.jsx)(n.span,{style:{"--shiki-light":`#A83A1C`,"--shiki-light-font-style":`italic`},children:"  // Only ever needs TValue to be `string`."})}),`
`,(0,t.jsx)(n.span,{"data-line":``,children:(0,t.jsx)(n.span,{style:{"--shiki-light":`#3C4257`},children:`}`})})]})})}),`
`,(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:`TParentValue`}),` is an opaque type parameter `,(0,t.jsx)(n.code,{children:`TextField`}),` never inspects, not the
whole form's value type, so the exact same `,(0,t.jsx)(n.code,{children:`TextField`}),` works unmodified across a
login form, a checkout form, and a settings form with completely unrelated
shapes — no `,(0,t.jsx)(n.code,{children:`any`}),`, no per-form variant. Contrast that with a field type
parameterized by the whole form (`,(0,t.jsx)(n.code,{children:`Control<TFieldValues>`}),` in React Hook Form,
`,(0,t.jsx)(n.code,{children:`FieldApi<TParentData, TName, ...>`}),` in TanStack Form): a shared component built
against either has to re-parameterize itself over whatever form it's dropped
into, generics leaking through every reusable component's signature, or drop to
loosely-typed props and give up the safety.`]}),`
`,(0,t.jsxs)(n.p,{children:[`Kin Form starts from one premise: `,(0,t.jsx)(n.strong,{children:`a form is a tree, and every node in that
tree (leaf field, nested group, or the form itself) is the same kind of thing.`}),`
Most form libraries make the form object the sole owner of state: register a
field and you get a proxy into that one store, not an object with its own
value/error/validators. Nested objects, dynamic arrays, and cross-field rules
end up routed through a second mechanism instead of being a plain field. Kin
Form builds on the tree idea directly instead.`]}),`
`,(0,t.jsxs)(n.h2,{id:`one-state-machine-one-shape`,children:[(0,t.jsx)(n.a,{className:`header-anchor`,"aria-label":`Permalink to "One state machine, one shape"`,href:`#one-state-machine-one-shape`,children:(0,t.jsx)(n.span,{"aria-hidden":`true`,children:`#`})}),`One state machine, one shape`]}),`
`,(0,t.jsxs)(n.p,{children:[`Every node (leaf input, nested object/array, or the form itself) is the same
class, `,(0,t.jsx)(n.code,{children:`FieldApi`}),`: `,(0,t.jsx)(n.code,{children:`value`}),`, `,(0,t.jsx)(n.code,{children:`error`}),`, `,(0,t.jsx)(n.code,{children:`touched`}),`, `,(0,t.jsx)(n.code,{children:`validating`}),`, `,(0,t.jsx)(n.code,{children:`dirty`}),`,
validators (sync, async, and schema), plus a lazily-populated registry of its
own child fields.`]}),`
`,(0,t.jsx)(n.p,{children:`Whether an object/array-valued field is treated as one atomic leaf or decomposed
into children is up to you, not the engine.`}),`
`,(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:`FormApi`}),` is just the `,(0,t.jsx)(n.code,{children:`FieldApi`}),` at the root (`,(0,t.jsx)(n.code,{children:`parent === null`}),`, `,(0,t.jsx)(n.code,{children:`name === ""`}),`),
with submission and reset logic added on top.`]}),`
`,(0,t.jsx)(n.p,{children:`That means the same mental model applies everywhere:`}),`
`,(0,t.jsxs)(n.ul,{children:[`
`,(0,t.jsxs)(n.li,{children:[`Setting a node's `,(0,t.jsx)(n.code,{children:`value`}),` bubbles up into the parent's value.`]}),`
`,(0,t.jsxs)(n.li,{children:[`Setting a node's `,(0,t.jsx)(n.code,{children:`value`}),` cascades down into every registered child.`]}),`
`,(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:`touched`}),`/`,(0,t.jsx)(n.code,{children:`invalid`}),`/`,(0,t.jsx)(n.code,{children:`validating`}),` aggregate from children automatically: a node
is `,(0,t.jsx)(n.code,{children:`invalid`}),` if it or any registered child is.`]}),`
`,(0,t.jsxs)(n.li,{children:[`Every node can be subscribed to independently. A node's own change never
notifies unrelated siblings, and `,(0,t.jsx)(n.code,{children:`react/`}),`'s `,(0,t.jsx)(n.code,{children:`useWatch`}),`/`,(0,t.jsx)(n.code,{children:`Watch`}),` (or `,(0,t.jsx)(n.code,{children:`lit/`}),`'s
`,(0,t.jsx)(n.code,{children:`watch`}),`/`,(0,t.jsx)(n.code,{children:`WatchController`}),`) add selector-based diffing on top, so a subscriber
updates only when what it computes changes.`]}),`
`]}),`
`,(0,t.jsx)(n.p,{children:`Nothing here is a separate array-field abstraction or a separate
whole-form-state abstraction. It's the same properties, all the way down.`}),`
`,(0,t.jsxs)(n.h3,{id:`type-safe-paths-not-string-soup`,children:[(0,t.jsx)(n.a,{className:`header-anchor`,"aria-label":`Permalink to "Type-safe paths, not string soup"`,href:`#type-safe-paths-not-string-soup`,children:(0,t.jsx)(n.span,{"aria-hidden":`true`,children:`#`})}),`Type-safe paths, not string soup`]}),`
`,(0,t.jsx)(n.figure,{"data-rehype-pretty-code-figure":``,children:(0,t.jsx)(n.pre,{tabIndex:`0`,"data-language":`ts`,"data-theme":`poimandres-light`,children:(0,t.jsxs)(n.code,{"data-language":`ts`,"data-theme":`poimandres-light`,style:{display:`grid`},children:[(0,t.jsxs)(n.span,{"data-line":``,children:[(0,t.jsx)(n.span,{style:{"--shiki-light":`#3D6F94`},children:`const`}),(0,t.jsx)(n.span,{style:{"--shiki-light":`#16233A`},children:` form`}),(0,t.jsx)(n.span,{style:{"--shiki-light":`#3D6F94`},children:` =`}),(0,t.jsx)(n.span,{style:{"--shiki-light":`#0F7D6C`},children:` new`}),(0,t.jsx)(n.span,{style:{"--shiki-light":`#16233A`},children:` FormApi`}),(0,t.jsx)(n.span,{style:{"--shiki-light":`#3C4257`},children:`({`})]}),`
`,(0,t.jsxs)(n.span,{"data-line":``,children:[(0,t.jsx)(n.span,{style:{"--shiki-light":`#1A6FB0`},children:`  initialValue`}),(0,t.jsx)(n.span,{style:{"--shiki-light":`#3C4257`},children:`:`}),(0,t.jsx)(n.span,{style:{"--shiki-light":`#3C4257`},children:` {`})]}),`
`,(0,t.jsxs)(n.span,{"data-line":``,children:[(0,t.jsx)(n.span,{style:{"--shiki-light":`#1A6FB0`},children:`    email`}),(0,t.jsx)(n.span,{style:{"--shiki-light":`#3C4257`},children:`:`}),(0,t.jsx)(n.span,{style:{"--shiki-light":`#3C4257`},children:` ""`}),(0,t.jsx)(n.span,{style:{"--shiki-light":`#3C4257`},children:`,`})]}),`
`,(0,t.jsxs)(n.span,{"data-line":``,children:[(0,t.jsx)(n.span,{style:{"--shiki-light":`#1A6FB0`},children:`    address`}),(0,t.jsx)(n.span,{style:{"--shiki-light":`#3C4257`},children:`:`}),(0,t.jsx)(n.span,{style:{"--shiki-light":`#3C4257`},children:` {`})]}),`
`,(0,t.jsxs)(n.span,{"data-line":``,children:[(0,t.jsx)(n.span,{style:{"--shiki-light":`#1A6FB0`},children:`      line1`}),(0,t.jsx)(n.span,{style:{"--shiki-light":`#3C4257`},children:`:`}),(0,t.jsx)(n.span,{style:{"--shiki-light":`#3C4257`},children:` ""`}),(0,t.jsx)(n.span,{style:{"--shiki-light":`#3C4257`},children:`,`})]}),`
`,(0,t.jsx)(n.span,{"data-line":``,children:(0,t.jsx)(n.span,{style:{"--shiki-light":`#3C4257`},children:`    },`})}),`
`,(0,t.jsxs)(n.span,{"data-line":``,children:[(0,t.jsx)(n.span,{style:{"--shiki-light":`#1A6FB0`},children:`    items`}),(0,t.jsx)(n.span,{style:{"--shiki-light":`#3C4257`},children:`:`}),(0,t.jsx)(n.span,{style:{"--shiki-light":`#3C4257`},children:` [`})]}),`
`,(0,t.jsxs)(n.span,{"data-line":``,children:[(0,t.jsx)(n.span,{style:{"--shiki-light":`#3C4257`},children:`      {`}),(0,t.jsx)(n.span,{style:{"--shiki-light":`#1A6FB0`},children:` id`}),(0,t.jsx)(n.span,{style:{"--shiki-light":`#3C4257`},children:`:`}),(0,t.jsx)(n.span,{style:{"--shiki-light":`#9A5B13`},children:` 1`}),(0,t.jsx)(n.span,{style:{"--shiki-light":`#3C4257`},children:` },`})]}),`
`,(0,t.jsx)(n.span,{"data-line":``,children:(0,t.jsx)(n.span,{style:{"--shiki-light":`#3C4257`},children:`    ],`})}),`
`,(0,t.jsx)(n.span,{"data-line":``,children:(0,t.jsx)(n.span,{style:{"--shiki-light":`#3C4257`},children:`  },`})}),`
`,(0,t.jsx)(n.span,{"data-line":``,children:(0,t.jsx)(n.span,{style:{"--shiki-light":`#3C4257`},children:`});`})}),`
`,(0,t.jsx)(n.span,{"data-line":``,children:` `}),`
`,(0,t.jsxs)(n.span,{"data-line":``,children:[(0,t.jsx)(n.span,{style:{"--shiki-light":`#16233A`},children:`form`}),(0,t.jsx)(n.span,{style:{"--shiki-light":`#3C4257`},children:`.`}),(0,t.jsx)(n.span,{style:{"--shiki-light":`#16233A`},children:`field`}),(0,t.jsx)(n.span,{style:{"--shiki-light":`#3C4257`},children:`(`}),(0,t.jsx)(n.span,{style:{"--shiki-light":`#3C4257`},children:`"`}),(0,t.jsx)(n.span,{style:{"--shiki-light":`#9A5B13`},children:`email`}),(0,t.jsx)(n.span,{style:{"--shiki-light":`#3C4257`},children:`"`}),(0,t.jsx)(n.span,{style:{"--shiki-light":`#3C4257`},children:`).`}),(0,t.jsx)(n.span,{style:{"--shiki-light":`#16233A`},children:`value`}),(0,t.jsx)(n.span,{style:{"--shiki-light":`#3C4257`},children:`; `}),(0,t.jsx)(n.span,{style:{"--shiki-light":`#A83A1C`,"--shiki-light-font-style":`italic`},children:`// string`})]}),`
`,(0,t.jsxs)(n.span,{"data-line":``,children:[(0,t.jsx)(n.span,{style:{"--shiki-light":`#16233A`},children:`form`}),(0,t.jsx)(n.span,{style:{"--shiki-light":`#3C4257`},children:`.`}),(0,t.jsx)(n.span,{style:{"--shiki-light":`#16233A`},children:`field`}),(0,t.jsx)(n.span,{style:{"--shiki-light":`#3C4257`},children:`(`}),(0,t.jsx)(n.span,{style:{"--shiki-light":`#3C4257`},children:`"`}),(0,t.jsx)(n.span,{style:{"--shiki-light":`#9A5B13`},children:`address.line1`}),(0,t.jsx)(n.span,{style:{"--shiki-light":`#3C4257`},children:`"`}),(0,t.jsx)(n.span,{style:{"--shiki-light":`#3C4257`},children:`).`}),(0,t.jsx)(n.span,{style:{"--shiki-light":`#16233A`},children:`value`}),(0,t.jsx)(n.span,{style:{"--shiki-light":`#3C4257`},children:`; `}),(0,t.jsx)(n.span,{style:{"--shiki-light":`#A83A1C`,"--shiki-light-font-style":`italic`},children:`// string`})]}),`
`,(0,t.jsxs)(n.span,{"data-line":``,children:[(0,t.jsx)(n.span,{style:{"--shiki-light":`#16233A`},children:`form`}),(0,t.jsx)(n.span,{style:{"--shiki-light":`#3C4257`},children:`.`}),(0,t.jsx)(n.span,{style:{"--shiki-light":`#16233A`},children:`field`}),(0,t.jsx)(n.span,{style:{"--shiki-light":`#3C4257`},children:`(`}),(0,t.jsx)(n.span,{style:{"--shiki-light":`#3C4257`},children:`"`}),(0,t.jsx)(n.span,{style:{"--shiki-light":`#9A5B13`},children:`items.0.id`}),(0,t.jsx)(n.span,{style:{"--shiki-light":`#3C4257`},children:`"`}),(0,t.jsx)(n.span,{style:{"--shiki-light":`#3C4257`},children:`).`}),(0,t.jsx)(n.span,{style:{"--shiki-light":`#16233A`},children:`value`}),(0,t.jsx)(n.span,{style:{"--shiki-light":`#3C4257`},children:`; `}),(0,t.jsx)(n.span,{style:{"--shiki-light":`#A83A1C`,"--shiki-light-font-style":`italic`},children:`// number`})]})]})})}),`
`,(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:`DeepKey<T>`}),` computes every dot-joined path into `,(0,t.jsx)(n.code,{children:`T`}),` (through objects and arrays
alike) as a literal string union; `,(0,t.jsx)(n.code,{children:`DeepValue<T, Key>`}),` resolves the value type at
that path. A typo'd path is a compile error, not a silent `,(0,t.jsx)(n.code,{children:`undefined`}),` at
runtime: `,(0,t.jsx)(n.code,{children:`field(name, options)`}),` type-checks against your form's actual value
type, no manual generics needed.`]}),`
`,(0,t.jsxs)(n.h3,{id:`validation-that-doesnt-fight-you`,children:[(0,t.jsx)(n.a,{className:`header-anchor`,"aria-label":`Permalink to "Validation that doesn't fight you"`,href:`#validation-that-doesnt-fight-you`,children:(0,t.jsx)(n.span,{"aria-hidden":`true`,children:`#`})}),`Validation that doesn't fight you`]}),`
`,(0,t.jsx)(n.p,{children:`Kin Form supports flexible validation strategies: sync or async, per-node or
per-subtree.`}),`
`,(0,t.jsxs)(n.ul,{children:[`
`,(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:`validators`})}),`: plain sync functions on any node (field, group, or form):
`,(0,t.jsx)(n.code,{children:`(field) => result`}),`, run in order immediately, no debounce; first truthy
result wins.`]}),`
`,(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:`asyncValidator`})}),`: a separate, singular option alongside `,(0,t.jsx)(n.code,{children:`validators`}),`, for
a check that needs to hit a server. Debounced, and only fires once every
`,(0,t.jsx)(n.code,{children:`validators`}),` entry already passes.`]}),`
`,(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:`schemaValidator`})}),`: one schema (zod, valibot, ...) validating a whole
subtree's value in one pass, instead of a rule per field. Runs alongside
`,(0,t.jsx)(n.code,{children:`validators`}),`/`,(0,t.jsx)(n.code,{children:`asyncValidator`}),`, not instead of them.`]}),`
`]}),`
`,(0,t.jsx)(n.p,{children:`Whichever combination is running:`}),`
`,(0,t.jsxs)(n.ul,{children:[`
`,(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:`Coalesced`}),`: concurrent or redundant `,(0,t.jsx)(n.code,{children:`validate()`}),` calls join a single
in-flight run instead of stacking up duplicate work.`]}),`
`,(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:`Stale-safe`}),`: if a newer run supersedes an older one, the older result is
discarded when it resolves, so it can never clobber a fresher answer.`]}),`
`]}),`
`,(0,t.jsx)(n.p,{children:`Cross-field rules are declarative, not manual subscriptions:`}),`
`,(0,t.jsx)(n.figure,{"data-rehype-pretty-code-figure":``,children:(0,t.jsx)(n.pre,{tabIndex:`0`,"data-language":`ts`,"data-theme":`poimandres-light`,children:(0,t.jsxs)(n.code,{"data-language":`ts`,"data-theme":`poimandres-light`,style:{display:`grid`},children:[(0,t.jsxs)(n.span,{"data-line":``,children:[(0,t.jsx)(n.span,{style:{"--shiki-light":`#16233A`},children:`form`}),(0,t.jsx)(n.span,{style:{"--shiki-light":`#3C4257`},children:`.`}),(0,t.jsx)(n.span,{style:{"--shiki-light":`#16233A`},children:`field`}),(0,t.jsx)(n.span,{style:{"--shiki-light":`#3C4257`},children:`(`}),(0,t.jsx)(n.span,{style:{"--shiki-light":`#3C4257`},children:`"`}),(0,t.jsx)(n.span,{style:{"--shiki-light":`#9A5B13`},children:`password`}),(0,t.jsx)(n.span,{style:{"--shiki-light":`#3C4257`},children:`"`}),(0,t.jsx)(n.span,{style:{"--shiki-light":`#3C4257`},children:`, {`})]}),`
`,(0,t.jsxs)(n.span,{"data-line":``,children:[(0,t.jsx)(n.span,{style:{"--shiki-light":`#1A6FB0`},children:`  dependents`}),(0,t.jsx)(n.span,{style:{"--shiki-light":`#3C4257`},children:`:`}),(0,t.jsx)(n.span,{style:{"--shiki-light":`#3C4257`},children:` [`}),(0,t.jsx)(n.span,{style:{"--shiki-light":`#3C4257`},children:`"`}),(0,t.jsx)(n.span,{style:{"--shiki-light":`#9A5B13`},children:`confirmPassword`}),(0,t.jsx)(n.span,{style:{"--shiki-light":`#3C4257`},children:`"`}),(0,t.jsx)(n.span,{style:{"--shiki-light":`#3C4257`},children:`],`})]}),`
`,(0,t.jsxs)(n.span,{"data-line":``,children:[(0,t.jsx)(n.span,{style:{"--shiki-light":`#1A6FB0`},children:`  validators`}),(0,t.jsx)(n.span,{style:{"--shiki-light":`#3C4257`},children:`:`}),(0,t.jsx)(n.span,{style:{"--shiki-light":`#16233A`},children:` required`}),(0,t.jsx)(n.span,{style:{"--shiki-light":`#3C4257`},children:`(`}),(0,t.jsx)(n.span,{style:{"--shiki-light":`#3C4257`},children:`"`}),(0,t.jsx)(n.span,{style:{"--shiki-light":`#9A5B13`},children:`Password is required`}),(0,t.jsx)(n.span,{style:{"--shiki-light":`#3C4257`},children:`"`}),(0,t.jsx)(n.span,{style:{"--shiki-light":`#3C4257`},children:`),`})]}),`
`,(0,t.jsx)(n.span,{"data-line":``,children:(0,t.jsx)(n.span,{style:{"--shiki-light":`#3C4257`},children:`});`})}),`
`,(0,t.jsx)(n.span,{"data-line":``,children:` `}),`
`,(0,t.jsxs)(n.span,{"data-line":``,children:[(0,t.jsx)(n.span,{style:{"--shiki-light":`#16233A`},children:`form`}),(0,t.jsx)(n.span,{style:{"--shiki-light":`#3C4257`},children:`.`}),(0,t.jsx)(n.span,{style:{"--shiki-light":`#16233A`},children:`field`}),(0,t.jsx)(n.span,{style:{"--shiki-light":`#3C4257`},children:`(`}),(0,t.jsx)(n.span,{style:{"--shiki-light":`#3C4257`},children:`"`}),(0,t.jsx)(n.span,{style:{"--shiki-light":`#9A5B13`},children:`confirmPassword`}),(0,t.jsx)(n.span,{style:{"--shiki-light":`#3C4257`},children:`"`}),(0,t.jsx)(n.span,{style:{"--shiki-light":`#3C4257`},children:`, {`})]}),`
`,(0,t.jsxs)(n.span,{"data-line":``,children:[(0,t.jsx)(n.span,{style:{"--shiki-light":`#1A6FB0`},children:`  validators`}),(0,t.jsx)(n.span,{style:{"--shiki-light":`#3C4257`},children:`:`}),(0,t.jsx)(n.span,{style:{"--shiki-light":`#3C4257`},children:` (`}),(0,t.jsx)(n.span,{style:{"--shiki-light":`#16233A`},children:`f`}),(0,t.jsx)(n.span,{style:{"--shiki-light":`#3C4257`},children:`)`}),(0,t.jsx)(n.span,{style:{"--shiki-light":`#3D6F94`},children:` =>`})]}),`
`,(0,t.jsxs)(n.span,{"data-line":``,children:[(0,t.jsx)(n.span,{style:{"--shiki-light":`#16233A`},children:`    f`}),(0,t.jsx)(n.span,{style:{"--shiki-light":`#3C4257`},children:`.`}),(0,t.jsx)(n.span,{style:{"--shiki-light":`#16233A`},children:`value`}),(0,t.jsx)(n.span,{style:{"--shiki-light":`#3D6F94`},children:` !==`}),(0,t.jsx)(n.span,{style:{"--shiki-light":`#16233A`},children:` form`}),(0,t.jsx)(n.span,{style:{"--shiki-light":`#3C4257`},children:`.`}),(0,t.jsx)(n.span,{style:{"--shiki-light":`#16233A`},children:`value`}),(0,t.jsx)(n.span,{style:{"--shiki-light":`#3C4257`},children:`.`}),(0,t.jsx)(n.span,{style:{"--shiki-light":`#16233A`},children:`password`}),(0,t.jsx)(n.span,{style:{"--shiki-light":`#3D6F94`},children:` ?`}),(0,t.jsx)(n.span,{style:{"--shiki-light":`#3C4257`},children:` "`}),(0,t.jsx)(n.span,{style:{"--shiki-light":`#9A5B13`},children:`Passwords must match`}),(0,t.jsx)(n.span,{style:{"--shiki-light":`#3C4257`},children:`"`}),(0,t.jsx)(n.span,{style:{"--shiki-light":`#3D6F94`},children:` :`}),(0,t.jsx)(n.span,{style:{"--shiki-light":`#B23370`},children:` null`}),(0,t.jsx)(n.span,{style:{"--shiki-light":`#3C4257`},children:`,`})]}),`
`,(0,t.jsx)(n.span,{"data-line":``,children:(0,t.jsx)(n.span,{style:{"--shiki-light":`#3C4257`},children:`});`})})]})})}),`
`,(0,t.jsxs)(n.p,{children:[`Whenever `,(0,t.jsx)(n.code,{children:`password`}),` changes, `,(0,t.jsx)(n.code,{children:`confirmPassword`}),` re-validates automatically, with
no manual wiring and no re-render-everything.`]}),`
`,(0,t.jsxs)(n.h3,{id:`stable-array-item-identity`,children:[(0,t.jsx)(n.a,{className:`header-anchor`,"aria-label":`Permalink to "Stable array item identity"`,href:`#stable-array-item-identity`,children:(0,t.jsx)(n.span,{"aria-hidden":`true`,children:`#`})}),`Stable array item identity`]}),`
`,(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:`pushItem`}),`/`,(0,t.jsx)(n.code,{children:`insertItem`}),`/`,(0,t.jsx)(n.code,{children:`moveItem`}),`/`,(0,t.jsx)(n.code,{children:`swapItems`}),`/`,(0,t.jsx)(n.code,{children:`removeItem`}),` update the immutable
value and re-key the field registry together, so a field's identity follows its
item through a reorder, not whatever value now sits at its old index. Every
field also carries a stable `,(0,t.jsx)(n.code,{children:`id`}),`, independent of `,(0,t.jsx)(n.code,{children:`name`}),`, that survives the same
reorders. It's the right list key (`,(0,t.jsx)(n.code,{children:`key={field.id}`}),` in React, or `,(0,t.jsx)(n.code,{children:`lit-html`}),`'s
`,(0,t.jsx)(n.code,{children:`repeat`}),` directive keyed on `,(0,t.jsx)(n.code,{children:`field.id`}),` in Lit) instead of the index.`]}),`
`,(0,t.jsxs)(n.h3,{id:`opt-in-complexity`,children:[(0,t.jsx)(n.a,{className:`header-anchor`,"aria-label":`Permalink to "Opt-in complexity"`,href:`#opt-in-complexity`,children:(0,t.jsx)(n.span,{"aria-hidden":`true`,children:`#`})}),`Opt-in complexity`]}),`
`,(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:`@kintools/form-core`}),` has no UI framework dependency: it's just the state
machine. `,(0,t.jsx)(n.code,{children:`@kintools/form-react`}),` adds hooks and render-prop components on top;
`,(0,t.jsx)(n.code,{children:`@kintools/form-lit`}),` adds a `,(0,t.jsx)(n.code,{children:`watch`}),` directive and `,(0,t.jsx)(n.code,{children:`ReactiveController`}),`s.
`,(0,t.jsx)(n.code,{children:`@kintools/form-validators`}),` is a separate package on purpose: validator wording
and edge cases churn far more than the engine does, so the two version
independently. You pick up exactly the layers you use.`]}),`
`,(0,t.jsxs)(n.h2,{id:`how-other-form-libraries-handle-this`,children:[(0,t.jsx)(n.a,{className:`header-anchor`,"aria-label":`Permalink to "How other form libraries handle this"`,href:`#how-other-form-libraries-handle-this`,children:(0,t.jsx)(n.span,{"aria-hidden":`true`,children:`#`})}),`How other form libraries handle this`]}),`
`,(0,t.jsx)(n.p,{children:`The tree model isn't the only way to build a form library, and each of the
alternatives below is a real, popular, well-built library. Here's specifically
where they diverge from the premise above.`}),`
`,(0,t.jsxs)(n.h3,{id:`react-hook-form`,children:[(0,t.jsx)(n.a,{className:`header-anchor`,"aria-label":`Permalink to "React Hook Form"`,href:`#react-hook-form`,children:(0,t.jsx)(n.span,{"aria-hidden":`true`,children:`#`})}),`React Hook Form`]}),`
`,(0,t.jsxs)(n.ul,{children:[`
`,(0,t.jsxs)(n.li,{children:[`Arrays need a separate hook, `,(0,t.jsx)(n.code,{children:`useFieldArray`}),`: no group node for a nested
object at all.`]}),`
`,(0,t.jsx)(n.li,{children:`Reusable group/array components need manual casts to stay type-safe: the
compile-time path check doesn't survive a generic wrapper.`}),`
`,(0,t.jsx)(n.li,{children:`No selective subscription: a component re-renders on any change to a
field-state key it touches, not on whether the value it computes from those
keys changed.`}),`
`,(0,t.jsx)(n.li,{children:`Inefficient by design: dirty/subscriber bookkeeping runs across every
registered field on every update, not just the one that changed, regardless of
how many components actually re-render.`}),`
`,(0,t.jsx)(n.li,{children:`Heavier: 13.0 KB gzip.`}),`
`]}),`
`,(0,t.jsxs)(n.p,{children:[`See `,(0,t.jsx)(n.a,{href:`/form/comparison/react-hook-form`,children:`vs React Hook Form`}),` for the full
comparison.`]}),`
`,(0,t.jsxs)(n.h3,{id:`formik`,children:[(0,t.jsx)(n.a,{className:`header-anchor`,"aria-label":`Permalink to "Formik"`,href:`#formik`,children:(0,t.jsx)(n.span,{"aria-hidden":`true`,children:`#`})}),`Formik`]}),`
`,(0,t.jsxs)(n.ul,{children:[`
`,(0,t.jsxs)(n.li,{children:[`No type safety: `,(0,t.jsx)(n.code,{children:`name`}),` is a plain string with no compile-time path check, and
neither a field's value nor a group/array's items are typed; a typo'd path
fails silently at runtime instead of at compile time.`]}),`
`,(0,t.jsx)(n.li,{children:`Its Context re-renders every consumer on any change, by design.`}),`
`,(0,t.jsx)(n.li,{children:`Heavier: 13.9 KB gzip.`}),`
`]}),`
`,(0,t.jsxs)(n.h3,{id:`tanstack-form`,children:[(0,t.jsx)(n.a,{className:`header-anchor`,"aria-label":`Permalink to "TanStack Form"`,href:`#tanstack-form`,children:(0,t.jsx)(n.span,{"aria-hidden":`true`,children:`#`})}),`TanStack Form`]}),`
`,(0,t.jsxs)(n.ul,{children:[`
`,(0,t.jsx)(n.li,{children:`Validation is ceremony-heavy: named validator slots per event, and cross-field
rules are awkward to wire up.`}),`
`,(0,t.jsx)(n.li,{children:`Heaviest bundle of the three: 18.5 KB.`}),`
`,(0,t.jsxs)(n.li,{children:[`The slowest of the three in Kin Form's own benchmark; see
`,(0,t.jsx)(n.a,{href:`/form/comparison/`,children:`the full numbers`}),` before taking that at face value.`]}),`
`]}),`
`,(0,t.jsxs)(n.h2,{id:`whats-next`,children:[(0,t.jsx)(n.a,{className:`header-anchor`,"aria-label":`Permalink to "What's next"`,href:`#whats-next`,children:(0,t.jsx)(n.span,{"aria-hidden":`true`,children:`#`})}),`What's next`]}),`
`,(0,t.jsxs)(n.ul,{children:[`
`,(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:`/form/guide/getting-started`,children:`Getting Started`}),` — install and build your first
form`]}),`
`,(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:`/form/guide/concepts`,children:`Concepts`}),` — the tree model, shared state, and typed
paths`]}),`
`,(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:`/form/guide/basic`,children:`Basic`}),` — building `,(0,t.jsx)(n.code,{children:`TextField`}),` from a one-off subscription,
the pattern the rest of these guides lean on`]}),`
`,(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:`/form/guide/per-node-validation`,children:`Per-node Validation`}),` and
`,(0,t.jsx)(n.a,{href:`/form/guide/schema-validation`,children:`Schema Validation`})]}),`
`,(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:`/form/guide/nested-objects`,children:`Nested Objects`}),` and
`,(0,t.jsx)(n.a,{href:`/form/guide/dynamic-arrays`,children:`Dynamic Arrays`})]}),`
`,(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:`/form/guide/linked-fields`,children:`Linked Fields`}),` and
`,(0,t.jsx)(n.a,{href:`/form/guide/listeners`,children:`Listeners`}),` — reacting to a value changing`]}),`
`]})]})}function i(e={}){let{wrapper:n}=e.components||{};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(r,{...e})}):r(e)}export{i as default,n as frontmatter};