import rehypeShiki from "@shikijs/rehype";
import { metaSchema, pageSchema } from "fumadocs-core/source/schema";
import { defineConfig, defineDocs } from "fumadocs-mdx/config";
import { z } from "zod";
import {
  shikiHighlightOptions,
  shikiMdxTransformers,
} from "@/lib/highlight-code";

export default defineConfig({
  mdxOptions: {
    rehypePlugins: (plugins) => {
      plugins.shift();
      plugins.push([
        rehypeShiki,
        {
          ...shikiHighlightOptions,
          transformers: shikiMdxTransformers,
        },
      ]);

      return plugins;
    },
  },
});

// You can customise Zod schemas for frontmatter and `meta.json` here
// see https://fumadocs.dev/docs/mdx/collections
export const docs = defineDocs({
  docs: {
    postprocess: {
      includeProcessedMarkdown: true,
    },
    schema: z.object({
      ...pageSchema.shape,
      links: z
        .object({
          api: z.url().optional(),
          doc: z.url().optional(),
        })
        .optional(),
      seoDescription: z.string().optional(),
      seoTitle: z.string().optional(),
    }),
  },
  meta: {
    schema: metaSchema,
  },
});
