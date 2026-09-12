interface SiteFeatures {
  dynamicOgImages: boolean;
  rawMarkdownRoutes: boolean;
}

/**
 * Feature flags for surfaces that used to require serverless functions.
 * Query-string OG (`/og?title=`) stays off on Hobby. Per-page markdown and
 * build-time OG images are static and do not use Functions.
 */
export const SITE_FEATURES: SiteFeatures = {
  dynamicOgImages: false,
  rawMarkdownRoutes: true,
};
