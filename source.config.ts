import rehypeShiki from "@shikijs/rehype";
import {
  defineConfig,
  defineDocs,
  frontmatterSchema,
  metaSchema,
} from "fumadocs-mdx/config";
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
    schema: frontmatterSchema.extend({
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
