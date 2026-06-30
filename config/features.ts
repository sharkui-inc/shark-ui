/**
 * Feature flags disabled to reduce Vercel Hobby (free) tier usage.
 * Dynamic OG images and raw markdown API routes consume serverless
 * function invocations. Re-enable when upgrading plan or self-hosting.
 */
export const SITE_FEATURES = {
  dynamicOgImages: false,
  rawMarkdownRoutes: false,
} as const;
