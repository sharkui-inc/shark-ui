import { SITE_CONFIG } from "@/config/site";

const TRAILING_SLASH = /\/$/;
const HTTP_PROTOCOL = /^https?:\/\//;

const getBaseUrl = (): string => {
  const vercelUrl = process.env.VERCEL_URL;

  if (vercelUrl) {
    const url = HTTP_PROTOCOL.test(vercelUrl)
      ? vercelUrl
      : `https://${vercelUrl}`;

    return url.replace(TRAILING_SLASH, "");
  }

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;

  if (siteUrl) {
    return siteUrl.replace(TRAILING_SLASH, "");
  }

  return SITE_CONFIG.url.replace(TRAILING_SLASH, "");
};

export const absoluteUrl = (path: string) => {
  const base = getBaseUrl();

  return path.startsWith("/") ? `${base}${path}` : `${base}/${path}`;
};
