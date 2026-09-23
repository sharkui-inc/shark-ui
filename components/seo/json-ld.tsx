interface JsonLdProps {
  data: Record<string, unknown>;
}

export const JsonLd = ({ data }: JsonLdProps) => (
  <script
    // biome-ignore lint/security/noDangerouslySetInnerHtml: JSON is serialized locally and escapes the only HTML-breaking character.
    dangerouslySetInnerHTML={{
      __html: JSON.stringify(data).replaceAll("<", "\\u003c"),
    }}
    // Keep JSON-LD in the initial HTML for crawlers (static export).
    suppressHydrationWarning
    type="application/ld+json"
  />
);
