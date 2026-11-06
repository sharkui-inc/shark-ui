export const humanizeSlug = (slug: string) =>
  slug.replaceAll("-", " ").replace(/\b\w/gu, (letter) => letter.toUpperCase());
