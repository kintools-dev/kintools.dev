import { createFileRoute, notFound } from "@tanstack/react-router";
import { Suspense, use } from "react";
import { DocsFooter } from "#/components/DocsFooter.tsx";
import { DocsHeader } from "#/components/DocsHeader.tsx";
import { DocsLayout } from "#/components/DocsLayout.tsx";
import { storeComponents } from "#/components/store/components.ts";
import { loadDocsPage } from "#/content/page-cache.ts";
import { storeNav, storePages } from "#/content/store.ts";
import { markdownMirrorPath, seoHead } from "#/lib/seo.ts";

export const Route = createFileRoute("/store/$")({
  loader: async ({ params }) => {
    const slug = params._splat ?? "";
    const page = loadDocsPage("store", storePages, slug);
    if (!page) throw notFound();
    const { frontmatter } = await page;
    return { slug, frontmatter };
  },
  head: ({ loaderData, params }) => {
    const slug = params._splat ?? "";
    return seoHead({
      title: loaderData?.frontmatter?.title ?? storeNav.title,
      description: loaderData?.frontmatter?.description ?? storeNav.description,
      path: slug ? `/store/${slug}` : "/store",
      markdownPath: markdownMirrorPath("/store", slug),
    });
  },
  component: StoreDocPage,
});

function StoreDocPage() {
  const { slug } = Route.useLoaderData();

  return (
    <Suspense fallback={null}>
      <StoreDocLayout slug={slug} />
    </Suspense>
  );
}

function StoreDocLayout({ slug }: { slug: string }) {
  const mod = use(loadDocsPage("store", storePages, slug)!);
  const Content = mod.default;
  const frontmatter = mod.frontmatter ?? {};

  if (frontmatter.layout === false) {
    return (
      <div className="lib-home min-h-full">
        <Content components={storeComponents} />
      </div>
    );
  }

  if (frontmatter.layout === "home") {
    return (
      <div className="lib-home min-h-full">
        <DocsHeader project="store" base="/store" nav={storeNav} />
        <Content components={storeComponents} />
        <DocsFooter footer={storeNav.footer} />
      </div>
    );
  }

  return (
    <DocsLayout project="store" base="/store" nav={storeNav} activePath={slug}>
      <Content components={storeComponents} />
    </DocsLayout>
  );
}
