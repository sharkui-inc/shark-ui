import type { Metadata } from "next";
import { notFound } from "next/navigation";
import React from "react";
import {
  getCategories,
  getFileTree,
  getPublishedComposition,
  getPublishedCompositions,
} from "@/lib/composition-catalog";
import { createMetadata } from "@/lib/metadata";
import { Skeleton } from "@/registry/react/components/skeleton";
import { BlocksBrowser } from "../../_components/blocks-browser";

export const dynamic = "force-static";
export const dynamicParams = false;
export const revalidate = false;

export const generateStaticParams = async () => {
  const blocks = await getPublishedCompositions("blocks");
  return blocks.map((block) => ({
    block: block.name,
    category: block.category,
  }));
};

export const generateMetadata = async (
  props: PageProps<"/blocks/[category]/[block]">
): Promise<Metadata> => {
  const { block: name, category: slug } = await props.params;
  const item = await getPublishedComposition("blocks", slug, name);

  if (!item) {
    notFound();
  }

  return createMetadata({
    description: item.description,
    title: item.title,
    url: `/blocks/${item.category}/${item.name}`,
  });
};

const BlockPage = async (props: PageProps<"/blocks/[category]/[block]">) => {
  const { block: name, category: slug } = await props.params;
  const [item, blocks] = await Promise.all([
    getPublishedComposition("blocks", slug, name),
    getPublishedCompositions("blocks"),
  ]);

  const categories = getCategories("blocks");
  const category = categories.find((entry) => entry.slug === slug);
  if (!(item && category)) {
    notFound();
  }

  const browserBlocks = blocks.map((block) => ({
    block,
    tree: getFileTree(block.files),
  }));

  return (
    <React.Suspense
      fallback={<Skeleton className="container h-[900px] w-full" />}
    >
      <BlocksBrowser
        activeBlockName={item.name}
        blocks={browserBlocks}
        categories={categories}
        categorySlug={category.slug}
        isDetailPage
      />
    </React.Suspense>
  );
};

export default BlockPage;
