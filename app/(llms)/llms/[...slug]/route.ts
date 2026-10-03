import { source } from "@/lib/fumadocs";
import {
  buildLLMIndexSection,
  createLLMIndexResponse,
  isLLMIndexName,
  LLM_INDEXES,
} from "@/lib/llms";

export const dynamic = "force-static";
export const dynamicParams = false;
export const revalidate = false;

const indexExtension = /\.txt$/;

export const generateStaticParams = () =>
  LLM_INDEXES.map((index) => ({ slug: [`${index}.txt`] }));

export const GET = async (
  _request: Request,
  props: { params: Promise<{ slug: string[] }> }
) => {
  const { slug } = await props.params;
  const indexName = slug[0]?.replace(indexExtension, "") ?? "";

  if (slug.length !== 1 || !isLLMIndexName(indexName)) {
    return new Response(null, { status: 404 });
  }

  return createLLMIndexResponse(
    buildLLMIndexSection(indexName, source.getPages())
  );
};
