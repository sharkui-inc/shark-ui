import { buildLLMIndex, createLLMIndexResponse } from "@/lib/llms";

export const dynamic = "force-static";
export const revalidate = false;

export const GET = () => createLLMIndexResponse(buildLLMIndex());
