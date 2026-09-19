import { SITE_CONFIG } from "@/config/site";
import { absoluteUrl } from "@/lib/url";

type JsonLd = Record<string, unknown>;

interface BreadcrumbJsonLdItem {
  name: string;
  url: string;
}

interface ChangelogTechArticleJsonLd {
  datePublished: Date;
  description: string;
  title: string;
  url: string;
}

const ORGANIZATION_ID = "#organization";

const SOFTWARE_ID = "#software";

const TWITTER_HANDLE = /^@/;

const WEBSITE_ID = "#website";

const getSiteUrl = () => new URL(absoluteUrl("/")).origin;

const getTwitterUrl = () =>
  `https://x.com/${SITE_CONFIG.creator.replace(TWITTER_HANDLE, "")}`;

const getSameAs = () => [SITE_CONFIG.repoUrl, getTwitterUrl()];

const getOrganizationRef = (): JsonLd => ({
  "@id": absoluteUrl(ORGANIZATION_ID),
});

export const getOrganizationJsonLd = (): JsonLd => {
  const url = getSiteUrl();

  return {
    "@context": "https://schema.org",
    "@id": absoluteUrl(ORGANIZATION_ID),
    "@type": "Organization",
    logo: absoluteUrl("/apple-touch-icon.png"),
    name: SITE_CONFIG.name,
    sameAs: getSameAs(),
    url,
  };
};

export const getWebSiteJsonLd = (): JsonLd => {
  const url = getSiteUrl();

  return {
    "@context": "https://schema.org",
    "@id": absoluteUrl(WEBSITE_ID),
    "@type": "WebSite",
    alternateName: ["shark-ui", "Shark"],
    description: SITE_CONFIG.description,
    inLanguage: "en-US",
    name: SITE_CONFIG.name,
    publisher: getOrganizationRef(),
    sameAs: getSameAs(),
    url,
  };
};

export const getSoftwareApplicationJsonLd = (): JsonLd => {
  const url = getSiteUrl();

  return {
    "@context": "https://schema.org",
    "@id": absoluteUrl(SOFTWARE_ID),
    "@type": "SoftwareApplication",
    applicationCategory: "DeveloperApplication",
    codeRepository: SITE_CONFIG.repoUrl,
    description: SITE_CONFIG.description,
    downloadUrl: SITE_CONFIG.repoUrl,
    name: SITE_CONFIG.name,
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    operatingSystem: "Any",
    publisher: getOrganizationRef(),
    url,
  };
};

export const getBreadcrumbJsonLd = (items: BreadcrumbJsonLdItem[]): JsonLd => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, index) => ({
    "@type": "ListItem",
    item: item.url,
    name: item.name,
    position: index + 1,
  })),
});

export const getChangelogTechArticleJsonLd = (
  params: ChangelogTechArticleJsonLd
): JsonLd => ({
  "@context": "https://schema.org",
  "@type": "TechArticle",
  author: {
    "@type": "Person",
    name: "Vinicius Vicentini",
    url: "https://vini.one",
  },
  datePublished: params.datePublished.toISOString(),
  description: params.description,
  headline: params.title,
  mainEntityOfPage: {
    "@id": params.url,
    "@type": "WebPage",
  },
  publisher: getOrganizationRef(),
  url: params.url,
});
