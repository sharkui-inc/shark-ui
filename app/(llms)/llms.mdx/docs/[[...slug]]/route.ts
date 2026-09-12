import { notFound } from "next/navigation";
import { source } from "@/lib/fumadocs";

export const dynamic = "force-static";
export const revalidate = false;
export const dynamicParams = false;

export const generateStaticParams = () => source.generateParams();

export const GET = async (
  _request: Request,
  props: { params: Promise<{ slug?: string[] }> }
) => {
  const { slug } = await props.params;
  const page = source.getPage(slug);

  if (!page) {
    notFound();
  }

  const content = await page.data.getText("raw");

  return new Response(content, {
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
    },
  });
};
