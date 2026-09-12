import type { Metadata } from "next";
import { notFound } from "next/navigation";
import React from "react";
import {
  getCategories,
  getFileTree,
  getPublishedCompositions,
} from "@/lib/composition-catalog";
import { createMetadata } from "@/lib/metadata";
import { Skeleton } from "@/registry/react/components/skeleton";
import { BlocksBrowser } from "../_components/blocks-browser";

export const dynamic = "force-static";
export const dynamicParams = false;
export const revalidate = false;

export const generateStaticParams = () =>
  getCategories("blocks").map((category) => ({ category: category.slug }));

export const generateMetadata = async (
  props: PageProps<"/blocks/[category]">
): Promise<Metadata> => {
  const { category: slug } = await props.params;

  const category = getCategories("blocks").find((item) => item.slug === slug);

  return category
    ? createMetadata({
        description: category.description,
        title: `${category.label} Blocks`,
        url: `/blocks/${category.slug}`,
      })
    : {};
};

const BlocksCategoryPage = async (props: PageProps<"/blocks/[category]">) => {
  const { category: slug } = await props.params;

  const categories = getCategories("blocks");
  const category = categories.find((item) => item.slug === slug);

  if (!category) {
    notFound();
  }

  const blocks = await getPublishedCompositions("blocks");
  const browserBlocks = blocks.map((block) => ({
    block,
    tree: getFileTree(block.files),
  }));

  return (
    <React.Suspense
      fallback={<Skeleton className="container h-[900px] w-full" />}
    >
      <BlocksBrowser
        blocks={browserBlocks}
        categories={categories}
        categorySlug={category.slug}
      />
    </React.Suspense>
  );
};

export default BlocksCategoryPage;
