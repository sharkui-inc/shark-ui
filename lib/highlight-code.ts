import { createHash } from "node:crypto";
import {
  transformerMetaHighlight,
  transformerMetaWordHighlight,
  transformerNotationDiff,
  transformerNotationHighlight,
  transformerNotationWordHighlight,
} from "@shikijs/transformers";
import { LRUCache } from "lru-cache";
import type { ShikiTransformer } from "shiki";
import { codeToHtml } from "shiki";
import { packageManagerCommandVariants } from "./shadcn-command";

export const shikiThemes = {
  dark: "github-dark",
  light: "github-light-default",
} as const;

// LRU cache for cross-request caching of highlighted code.
// Shiki highlighting is CPU-intensive and deterministic, so caching is safe.
const highlightCache = new LRUCache<string, string>({
  max: 500,
  ttl: 1000 * 60 * 60, // 1 hour.
});

const showLineNumbersPattern = /\bshowLineNumbers\b/;

const getMetaValue = (meta: string, name: string) => {
  const match = meta.match(
    new RegExp(`(?:^|\\s)${name}=(?:"([^"]*)"|'([^']*)'|([^\\s]+))`)
  );

  return match?.[1] ?? match?.[2] ?? match?.[3];
};

const metadataTransformer = {
  code(node) {
    if (node.tagName !== "code") {
      return;
    }

    const meta = this.options.meta?.__raw ?? "";
    node.properties["data-language"] = this.options.lang;

    if (showLineNumbersPattern.test(meta)) {
      node.properties["data-line-numbers"] = "";
    }
  },
  pre(node) {
    const meta = this.options.meta?.__raw ?? "";
    const title = getMetaValue(meta, "title");

    node.properties["data-language"] = this.options.lang;
    if (title) {
      node.properties["data-title"] = title;
    }
  },
} satisfies ShikiTransformer;

const mdxCopyTransformer = {
  code(node) {
    if (node.tagName !== "code") {
      return;
    }

    node.properties.__raw__ = this.source;
  },
  pre(node) {
    node.properties.__raw__ = this.source;

    const variants = packageManagerCommandVariants(this.source);
    if (variants) {
      node.properties.__npm__ = variants.npm;
    }
  },
} satisfies ShikiTransformer;

export const shikiTransformers = [
  metadataTransformer,
  transformerMetaHighlight(),
  transformerMetaWordHighlight(),
  transformerNotationDiff(),
  transformerNotationHighlight(),
  transformerNotationWordHighlight(),
] as ShikiTransformer[];

export const shikiMdxTransformers = [
  ...shikiTransformers,
  mdxCopyTransformer,
] as ShikiTransformer[];

export const shikiHighlightOptions = {
  defaultColor: false as const,
  themes: shikiThemes,
  transformers: shikiTransformers,
};

export const highlightCode = async (
  code: string,
  language = "tsx",
  options?: { showLineNumbers?: boolean }
) => {
  const { showLineNumbers = true } = options ?? {};
  const meta = showLineNumbers ? "showLineNumbers" : "";
  const cacheKey = createHash("sha256")
    .update(`shiki-v2:${language}:${meta}:${code}`)
    .digest("hex");

  const cached = highlightCache.get(cacheKey);
  if (cached) {
    return cached;
  }

  const html = await codeToHtml(code, {
    ...shikiHighlightOptions,
    lang: language,
    meta: { __raw: meta },
  });

  highlightCache.set(cacheKey, html);

  return html;
};
