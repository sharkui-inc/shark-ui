import { SITE_CONFIG } from "@/config/site";

const TRAILING_SLASH = /\/$/;

const joinUrl = (base: string, path: string) => {
  const normalizedBase = base.replace(TRAILING_SLASH, "");

  return path.startsWith("/")
    ? `${normalizedBase}${path}`
    : `${normalizedBase}/${path}`;
};

/**
 * Public absolute URLs always use the canonical site host from SITE_CONFIG.
 * Do not bake VERCEL_URL or NEXT_PUBLIC_SITE_URL into sitemap/canonical/OG —
 * a wrong env (e.g. a legacy domain) splits SEO signals across hosts.
 */
const getBaseUrl = (): string => SITE_CONFIG.url.replace(TRAILING_SLASH, "");

export const absoluteUrl = (path: string) => joinUrl(getBaseUrl(), path);

export const registryUrl = (path: string) => joinUrl(SITE_CONFIG.url, path);
