interface SiteFeatures {
  dynamicOgImages: boolean;
}

/**
 * Feature flags for surfaces that used to require serverless functions.
 * Query-string OG (`/og?title=`) stays off on Hobby. Per-page Markdown uses
 * static routes and does not need a feature flag.
 */
export const SITE_FEATURES: SiteFeatures = {
  dynamicOgImages: false,
};
