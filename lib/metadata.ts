import type { Metadata } from "next";
import { SITE_CONFIG } from "@/config/site";
import { absoluteUrl } from "@/lib/url";

interface CreateMetadataProps {
  description?: string;
  imageAlt?: string;
  imageUrl?: string;
  title?: string;
  url?: string;
}

const omitUndefined = <T extends object>(object: T): T =>
  Object.fromEntries(
    Object.entries(object).filter(([, value]) => value !== undefined)
  ) as T;

export const createMetadata = ({
  description,
  imageAlt,
  imageUrl,
  title,
  url,
}: CreateMetadataProps): Metadata => {
  const canonical = url === undefined ? undefined : absoluteUrl(url);
  const image =
    imageUrl === undefined
      ? undefined
      : omitUndefined({
          alt: imageAlt,
          height: 630,
          url: absoluteUrl(imageUrl),
          width: 1200,
        });

  return omitUndefined<Metadata>({
    alternates: canonical === undefined ? undefined : { canonical },
    description,
    openGraph: omitUndefined({
      description,
      images: image === undefined ? undefined : [image],
      locale: "en_US",
      siteName: SITE_CONFIG.name,
      title,
      type: "website",
      url: canonical,
    }),
    title,
    twitter: omitUndefined({
      card: "summary_large_image",
      creator: SITE_CONFIG.creator,
      description,
      images: image === undefined ? undefined : [image],
      title,
    }),
  });
};

interface CreateOgImageUrlProps {
  description: string;
  title: string;
}

/**
 * Builds a dynamic OG image URL for `/og`. Requires `SITE_FEATURES.dynamicOgImages`
 * and an active `app/(api)/og/route.tsx` (rename from `route.tsx.disabled`).
 */
export const createOgImageUrl = (props: CreateOgImageUrlProps) => {
  const { title, description } = props;

  const encodedTitle = encodeURIComponent(title);
  const encodedDescription = encodeURIComponent(description);

  return `/og?title=${encodedTitle}&description=${encodedDescription}`;
};
