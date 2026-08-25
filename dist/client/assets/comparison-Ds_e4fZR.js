import{t as e}from"./jsx-runtime-BkSabwWG.js";var t=e(),n=void 0;function r(e){let n={a:`a`,code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,span:`span`,ul:`ul`,...e.components},{ApiSurfaceMatrix:r,BundleSizeChart:i,FeatureMatrix:o,PerformanceCharts:s}=n;return r||a(`ApiSurfaceMatrix`,!0),i||a(`BundleSizeChart`,!0),o||a(`FeatureMatrix`,!0),s||a(`PerformanceCharts`,!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.h1,{id:`overview`,children:[(0,t.jsx)(n.a,{className:`header-anchor`,"aria-label":`Permalink to "Overview"`,href:`#overview`,children:(0,t.jsx)(n.span,{"aria-hidden":`true`,children:`#`})}),`Overview`]}),`
`,(0,t.jsxs)(n.h2,{id:`feature-matrix`,children:[(0,t.jsx)(n.a,{className:`header-anchor`,"aria-label":`Permalink to "Feature matrix"`,href:`#feature-matrix`,children:(0,t.jsx)(n.span,{"aria-hidden":`true`,children:`#`})}),`Feature matrix`]}),`
`,(0,t.jsx)(o,{full:!0}),`
`,(0,t.jsxs)(n.h2,{id:`api-surface`,children:[(0,t.jsx)(n.a,{className:`header-anchor`,"aria-label":`Permalink to "API surface"`,href:`#api-surface`,children:(0,t.jsx)(n.span,{"aria-hidden":`true`,children:`#`})}),`API surface`]}),`
`,(0,t.jsx)(n.p,{children:`Not whether a feature exists, but which APIs/hooks/types you have to learn to
use it:`}),`
`,(0,t.jsx)(r,{}),`
`,(0,t.jsxs)(n.h2,{id:`bundle-size-react-usage`,children:[(0,t.jsx)(n.a,{className:`header-anchor`,"aria-label":`Permalink to "Bundle size (React usage)"`,href:`#bundle-size-react-usage`,children:(0,t.jsx)(n.span,{"aria-hidden":`true`,children:`#`})}),`Bundle size (React usage)`]}),`
`,(0,t.jsx)(i,{}),`
`,(0,t.jsxs)(n.p,{children:[`Every library above is measured directly with the same toolchain: rolldown and
its own built-in minifier, then gzip. That's not the same as Bundlephobia, which
minifies with terser by default and can produce different sizes for the same
source. Reproducible via `,(0,t.jsx)(n.code,{children:`deno task --cwd scripts bundle-size`}),`.`]}),`
`,(0,t.jsxs)(n.h2,{id:`performance`,children:[(0,t.jsx)(n.a,{className:`header-anchor`,"aria-label":`Permalink to "Performance"`,href:`#performance`,children:(0,t.jsx)(n.span,{"aria-hidden":`true`,children:`#`})}),`Performance`]}),`
`,(0,t.jsx)(s,{}),`
`,(0,t.jsxs)(n.p,{children:[`These are wall-clock numbers from one shared ~84-field form (flat fields, a
nested group, an array) in a real (Happy DOM) React tree, reproducible via
`,(0,t.jsx)(n.code,{children:`deno task --cwd scripts speed-bench`}),`.`]}),`
`,(0,t.jsx)(n.p,{children:`The benchmark also counts re-renders per scenario, how many untouched sibling
fields re-render when one field updates, charted above for the two scenarios
where that count is clean and isolated.`}),`
`,(0,t.jsxs)(n.h2,{id:`detailed-comparisons`,children:[(0,t.jsx)(n.a,{className:`header-anchor`,"aria-label":`Permalink to "Detailed comparisons"`,href:`#detailed-comparisons`,children:(0,t.jsx)(n.span,{"aria-hidden":`true`,children:`#`})}),`Detailed comparisons`]}),`
`,(0,t.jsxs)(n.ul,{children:[`
`,(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:`/form/comparison/react-hook-form`,children:`vs React Hook Form`})}),`
`]})]})}function i(e={}){let{wrapper:n}=e.components||{};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(r,{...e})}):r(e)}function a(e,t){throw Error(`Expected `+(t?`component`:`object`)+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}export{i as default,n as frontmatter};