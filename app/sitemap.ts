import type { MetadataRoute } from "next";
import { source } from "@/lib/fumadocs";
import { absoluteUrl } from "@/lib/url";

export const dynamic = "force-static";
export const revalidate = false;

const sitemap = (): MetadataRoute.Sitemap => {
  const staticRoutes = [
    { changeFrequency: "weekly", priority: 1, url: absoluteUrl("/") },
    { changeFrequency: "monthly", priority: 0.6, url: absoluteUrl("/themes") },
  ];

  const docPages = source.getPages().map((page) => ({
    changeFrequency: "weekly" as const,
    priority: page.url === "/docs" ? 0.9 : 0.7,
    url: absoluteUrl(page.url),
  }));

  const routes = [...staticRoutes, ...docPages];

  return Array.from(
    new Map(routes.map((route) => [route.url, route])).values()
  ) as MetadataRoute.Sitemap;
};

export default sitemap;
