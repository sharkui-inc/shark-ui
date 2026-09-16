import { notFound } from "next/navigation";
import { source } from "@/lib/fumadocs";

export const dynamic = "force-static";
export const revalidate = false;

export const GET = async () => {
  const page = source.getPage();

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
