import React from "react";
import {
  getCategories,
  getFileTree,
  getPublishedCompositions,
} from "@/lib/composition-catalog";
import { createMetadata } from "@/lib/metadata";
import { Skeleton } from "@/registry/react/components/skeleton";
import { SkipNavContent } from "../../../registry/react/components/skip-nav";
import { BlocksBrowser } from "./_components/blocks-browser";

export const dynamic = "force-static";
export const revalidate = false;

export const metadata = createMetadata({
  title: "Blocks",
  url: "/blocks",
});

const BlocksPage = async () => {
  const blocks = await getPublishedCompositions("blocks");

  const browserBlocks = blocks.map((block) => ({
    block,
    tree: getFileTree(block.files),
  }));

  return (
    <SkipNavContent>
      <React.Suspense
        fallback={<Skeleton className="container h-[900px] w-full" />}
      >
        <BlocksBrowser
          blocks={browserBlocks}
          categories={getCategories("blocks")}
        />
      </React.Suspense>
    </SkipNavContent>
  );
};

export default BlocksPage;
