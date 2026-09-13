import { source } from "@/lib/fumadocs";
import {
  buildLLMIndex as buildIndex,
  buildLLMIndexSection as buildIndexSection,
  type LLMIndexName,
} from "@/lib/llms-index";

export {
  createLLMIndexResponse,
  isLLMIndexName,
  LLM_INDEX_CONTENT_TYPE,
  LLM_INDEXES,
  type LLMIndexName,
} from "@/lib/llms-index";

export const buildLLMIndex = buildIndex;

export const buildLLMIndexSection = (index: LLMIndexName) =>
  buildIndexSection(index, source.getPages());
