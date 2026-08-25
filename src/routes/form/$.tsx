import { createFileRoute, notFound } from "@tanstack/react-router";
import { Suspense, use } from "react";
import { DocsFooter } from "#/components/DocsFooter.tsx";
import { DocsHeader } from "#/components/DocsHeader.tsx";
import { DocsLayout } from "#/components/DocsLayout.tsx";
import { formComponents } from "#/components/form/components.ts";
import { formNav, formPages } from "#/content/form.ts";
import { loadDocsPage } from "#/content/page-cache.ts";
import { seoHead } from "#/lib/seo.ts";

export const Route = createFileRoute("/form/$")({
  loader: async ({ params }) => {
    const slug = params._splat ?? "";
    const page = loadDocsPage("form", formPages, slug);
    if (!page) throw notFound();
    const { frontmatter } = await page;
    return { slug, frontmatter };
  },
  head: ({ loaderData, params }) =>
    seoHead({
      title: loaderData?.frontmatter?.title ?? formNav.title,
      description: loaderData?.frontmatter?.description ?? formNav.description,
      path: `/form/${params._splat ?? ""}`,
    }),
  component: FormDocLayout,
});

function FormDocLayout() {
  const { slug } = Route.useLoaderData();

  return (
    <Suspense fallback={null}>
      <FormDocContent slug={slug} />
    </Suspense>
  );
}

function FormDocContent({ slug }: { slug: string }) {
  const mod = use(loadDocsPage("form", formPages, slug)!);
  const Content = mod.default;
  const frontmatter = mod.frontmatter ?? {};

  if (frontmatter.layout === false) {
    return (
      <div className="lib-home min-h-full">
        <Content components={formComponents} />
      </div>
    );
  }

  if (frontmatter.layout === "home") {
    return (
      <div className="lib-home min-h-full">
        <DocsHeader project="form" base="/form" nav={formNav} />
        <Content components={formComponents} />
        <DocsFooter footer={formNav.footer} />
      </div>
    );
  }

  return (
    <DocsLayout project="form" base="/form" nav={formNav} activePath={slug}>
      <Content components={formComponents} />
    </DocsLayout>
  );
}
