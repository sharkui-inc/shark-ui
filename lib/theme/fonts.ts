export type ThemeFontCategory = "mono" | "sans" | "serif";
export type ThemeFontSlot = "heading" | "sans";

export interface ThemeFont {
  category: ThemeFontCategory;
  cssUrl: string;
  family: string;
  label: string;
  value: string;
}

interface ThemeFontInput {
  axes?: string;
  category: ThemeFontCategory;
  label: string;
}

const CATEGORY_FALLBACK: Record<ThemeFontCategory, string> = {
  mono: "monospace",
  sans: "sans-serif",
  serif: "serif",
};

const toKebabCase = (label: string) =>
  label
    .trim()
    .toLowerCase()
    .replaceAll(/[^a-z0-9]+/g, "-")
    .replaceAll(/(^-)|(-$)/g, "");

const toGoogleFamily = (label: string) => label.trim().replaceAll(" ", "+");

const googleFontFamilyParam = (label: string, axes?: string) =>
  axes
    ? `family=${toGoogleFamily(label)}:${axes}`
    : `family=${toGoogleFamily(label)}`;

const googleFontCssUrl = (label: string, axes?: string) =>
  `https://fonts.googleapis.com/css2?${googleFontFamilyParam(label, axes)}&display=swap`;

const defineThemeFont = (input: ThemeFontInput): ThemeFont => ({
  category: input.category,
  cssUrl: googleFontCssUrl(input.label, input.axes),
  family: `'${input.label}', ${CATEGORY_FALLBACK[input.category]}`,
  label: input.label,
  value: toKebabCase(input.label),
});

const THEME_FONT_INPUTS = [
  { category: "sans", label: "Bricolage Grotesque" },
  {
    axes: "ital,opsz,wght@0,6..72,200..800;1,6..72,200..800",
    category: "serif",
    label: "Newsreader",
  },
  {
    axes: "ital,wght@0,300;0,400;0,500;1,300;1,400;1,500",
    category: "mono",
    label: "DM Mono",
  },
  { category: "sans", label: "DM Sans" },
  { category: "serif", label: "EB Garamond" },
  { category: "sans", label: "Figtree" },
  { category: "serif", label: "Fraunces" },
  { category: "sans", label: "Geist" },
  { category: "mono", label: "Geist Mono" },
  { category: "sans", label: "Hanken Grotesk" },
  {
    axes: "ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700",
    category: "mono",
    label: "IBM Plex Mono",
  },
  { category: "sans", label: "IBM Plex Sans" },
  { category: "sans", label: "Instrument Sans" },
  { category: "sans", label: "Inter" },
  { category: "mono", label: "JetBrains Mono" },
  { category: "serif", label: "Lora" },
  { category: "sans", label: "Manrope" },
  { category: "sans", label: "Outfit" },
  { category: "sans", label: "Public Sans" },
  { category: "serif", label: "Roboto Slab" },
  {
    axes: "ital,wght@0,200..900;1,200..900",
    category: "mono",
    label: "Source Code Pro",
  },
  { category: "sans", label: "Source Sans 3" },
  { category: "sans", label: "Space Grotesk" },
] as const satisfies readonly ThemeFontInput[];

export const THEME_FONTS = THEME_FONT_INPUTS.map(defineThemeFont);

export type ThemeFontName = (typeof THEME_FONTS)[number]["value"];

export const THEME_FONTS_PREVIEW_CSS_URL = `https://fonts.googleapis.com/css2?${THEME_FONT_INPUTS.map(
  (input: ThemeFontInput) => googleFontFamilyParam(input.label, input.axes)
).join("&")}&display=swap`;

const themeFontsByValue = new Map(
  THEME_FONTS.map((font) => [font.value, font])
);

export const DEFAULT_FONT_SANS: ThemeFontName = "hanken-grotesk";
export const DEFAULT_FONT_HEADING: ThemeFontName = "figtree";

export const isThemeFontName = (value: unknown): value is ThemeFontName =>
  typeof value === "string" && themeFontsByValue.has(value as ThemeFontName);

export const getThemeFont = (value: ThemeFontName) => {
  const font = themeFontsByValue.get(value);

  if (!font) {
    throw new Error(`Unknown theme font: ${value}`);
  }

  return font;
};
