export type ThemeFontCategory = "mono" | "sans" | "serif";
export type ThemeFontSlot = "heading" | "sans";

export interface ThemeFont {
  axes?: string;
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
    .replaceAll(/[^a-z0-9]+/gu, "-")
    .replaceAll(/^-|-$/gu, "");

const toGoogleFamily = (label: string) => label.trim().replaceAll(" ", "+");

const googleFontFamilyParam = (label: string, axes?: string) =>
  axes
    ? `family=${toGoogleFamily(label)}:${axes}`
    : `family=${toGoogleFamily(label)}`;

export const buildGoogleFontCssUrl = (label: string, axes?: string) => {
  const family = label.trim().replaceAll(" ", "+");
  const param = axes ? `family=${family}:${axes}` : `family=${family}`;

  return `https://fonts.googleapis.com/css2?${param}&display=swap`;
};

const defineThemeFont = (input: ThemeFontInput): ThemeFont => ({
  axes: input.axes,
  category: input.category,
  cssUrl: buildGoogleFontCssUrl(input.label, input.axes),
  family: `'${input.label}', ${CATEGORY_FALLBACK[input.category]}`,
  label: input.label,
  value: toKebabCase(input.label),
});

const THEME_FONT_INPUTS = [
  {
    axes: "wght@400..700",
    category: "sans",
    label: "Bricolage Grotesque",
  },
  {
    axes: "wght@400..700",
    category: "serif",
    label: "Newsreader",
  },
  {
    axes: "wght@400;500",
    category: "mono",
    label: "DM Mono",
  },
  {
    axes: "wght@400..700",
    category: "sans",
    label: "DM Sans",
  },
  {
    axes: "wght@400..700",
    category: "serif",
    label: "EB Garamond",
  },
  {
    axes: "wght@400..700",
    category: "sans",
    label: "Figtree",
  },
  {
    axes: "wght@400..700",
    category: "serif",
    label: "Fraunces",
  },
  {
    axes: "wght@400..700",
    category: "sans",
    label: "Geist",
  },
  {
    axes: "wght@400;500;600;700",
    category: "mono",
    label: "Geist Mono",
  },
  {
    axes: "wght@400..700",
    category: "sans",
    label: "Hanken Grotesk",
  },
  {
    axes: "wght@400;500;600;700",
    category: "mono",
    label: "IBM Plex Mono",
  },
  {
    axes: "wght@400..700",
    category: "sans",
    label: "IBM Plex Sans",
  },
  {
    axes: "wght@400..700",
    category: "sans",
    label: "Instrument Sans",
  },
  {
    axes: "wght@400..700",
    category: "sans",
    label: "Inter",
  },
  {
    axes: "wght@400;500;600;700",
    category: "mono",
    label: "JetBrains Mono",
  },
  {
    axes: "wght@400..700",
    category: "serif",
    label: "Lora",
  },
  {
    axes: "wght@400..700",
    category: "sans",
    label: "Manrope",
  },
  {
    axes: "wght@400..700",
    category: "sans",
    label: "Outfit",
  },
  {
    axes: "wght@400..700",
    category: "sans",
    label: "Public Sans",
  },
  {
    axes: "wght@400..700",
    category: "serif",
    label: "Roboto Slab",
  },
  {
    axes: "wght@400;500;600;700",
    category: "mono",
    label: "Source Code Pro",
  },
  {
    axes: "wght@400..700",
    category: "sans",
    label: "Source Sans 3",
  },
  {
    axes: "wght@400..700",
    category: "sans",
    label: "Space Grotesk",
  },
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
