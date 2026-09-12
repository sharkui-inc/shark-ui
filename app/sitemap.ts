import type { MetadataRoute } from "next";
import {
  getCategories,
  getPublishedCompositions,
} from "@/lib/composition-catalog";
import { source } from "@/lib/fumadocs";
import { absoluteUrl } from "@/lib/url";

export const dynamic = "force-static";
export const revalidate = false;

const sitemap = async (): Promise<MetadataRoute.Sitemap> => {
  const staticRoutes = [
    { changeFrequency: "weekly", priority: 1, url: absoluteUrl("/") },
    { changeFrequency: "monthly", priority: 0.6, url: absoluteUrl("/blocks") },
    { changeFrequency: "monthly", priority: 0.6, url: absoluteUrl("/themes") },
  ];

  const blockCategories = getCategories("blocks").map((category) => ({
    changeFrequency: "monthly" as const,
    priority: 0.6,
    url: absoluteUrl(`/blocks/${category.slug}`),
  }));

  const blockDetails = (await getPublishedCompositions("blocks")).map(
    (block) => ({
      changeFrequency: "monthly" as const,
      priority: 0.5,
      url: absoluteUrl(`/blocks/${block.category}/${block.name}`),
    })
  );

  const docPages = source.getPages().map((page) => ({
    changeFrequency: "weekly" as const,
    priority: page.url === "/docs" ? 0.9 : 0.7,
    url: absoluteUrl(page.url),
  }));

  const routes = [
    ...staticRoutes,
    ...blockCategories,
    ...blockDetails,
    ...docPages,
  ];

  return Array.from(
    new Map(routes.map((route) => [route.url, route])).values()
  ) as MetadataRoute.Sitemap;
};

export default sitemap;
