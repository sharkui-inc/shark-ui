export type ThemeFontCategory = "mono" | "sans" | "serif";
export type ThemeFontSlot = "heading" | "sans";

export interface ThemeFont {
  category: ThemeFontCategory;
  cssUrl: string;
  family: string;
  label: string;
  slots: readonly ThemeFontSlot[];
  value: string;
}

const googleFont = (family: string, wght = "100..900") =>
  `https://fonts.googleapis.com/css2?family=${family}:wght@${wght}&display=swap`;

const googleFontFaces = (family: string, spec: string) =>
  `https://fonts.googleapis.com/css2?family=${family}:${spec}&display=swap`;

export const THEME_FONTS = [
  {
    category: "sans",
    cssUrl: googleFont("Bricolage+Grotesque", "200..800"),
    family: "'Bricolage Grotesque', sans-serif",
    label: "Bricolage Grotesque",
    slots: ["heading"],
    value: "bricolage-grotesque",
  },
  {
    category: "serif",
    cssUrl: googleFontFaces(
      "Newsreader",
      "ital,opsz,wght@0,6..72,200..800;1,6..72,200..800"
    ),
    family: "'Newsreader', serif",
    label: "Newsreader",
    slots: ["heading"],
    value: "newsreader",
  },
  {
    category: "mono",
    cssUrl: googleFontFaces(
      "DM+Mono",
      "ital,wght@0,300;0,400;0,500;1,300;1,400;1,500"
    ),
    family: "'DM Mono', monospace",
    label: "DM Mono",
    slots: ["heading", "sans"],
    value: "dm-mono",
  },
  {
    category: "sans",
    cssUrl: googleFont("DM+Sans"),
    family: "'DM Sans', sans-serif",
    label: "DM Sans",
    slots: ["heading", "sans"],
    value: "dm-sans",
  },
  {
    category: "serif",
    cssUrl: googleFont("EB+Garamond", "400..800"),
    family: "'EB Garamond', serif",
    label: "EB Garamond",
    slots: ["heading"],
    value: "eb-garamond",
  },
  {
    category: "sans",
    cssUrl: googleFont("Figtree", "300..900"),
    family: "'Figtree', sans-serif",
    label: "Figtree",
    slots: ["heading", "sans"],
    value: "figtree",
  },
  {
    category: "serif",
    cssUrl: googleFont("Fraunces"),
    family: "'Fraunces', serif",
    label: "Fraunces",
    slots: ["heading"],
    value: "fraunces",
  },
  {
    category: "sans",
    cssUrl: googleFont("Geist"),
    family: "'Geist', sans-serif",
    label: "Geist",
    slots: ["heading", "sans"],
    value: "geist",
  },
  {
    category: "mono",
    cssUrl: googleFont("Geist+Mono"),
    family: "'Geist Mono', monospace",
    label: "Geist Mono",
    slots: ["heading", "sans"],
    value: "geist-mono",
  },
  {
    category: "sans",
    cssUrl: googleFont("Hanken+Grotesk"),
    family: "'Hanken Grotesk', sans-serif",
    label: "Hanken Grotesk",
    slots: ["heading", "sans"],
    value: "hanken-grotesk",
  },
  {
    category: "mono",
    cssUrl: googleFontFaces(
      "IBM+Plex+Mono",
      "ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700"
    ),
    family: "'IBM Plex Mono', monospace",
    label: "IBM Plex Mono",
    slots: ["heading", "sans"],
    value: "ibm-plex-mono",
  },
  {
    category: "sans",
    cssUrl: googleFont("IBM+Plex+Sans", "100..700"),
    family: "'IBM Plex Sans', sans-serif",
    label: "IBM Plex Sans",
    slots: ["heading", "sans"],
    value: "ibm-plex-sans",
  },
  {
    category: "sans",
    cssUrl: googleFont("Instrument+Sans", "400..700"),
    family: "'Instrument Sans', sans-serif",
    label: "Instrument Sans",
    slots: ["heading", "sans"],
    value: "instrument-sans",
  },
  {
    category: "sans",
    cssUrl: googleFont("Inter"),
    family: "'Inter', sans-serif",
    label: "Inter",
    slots: ["heading", "sans"],
    value: "inter",
  },
  {
    category: "mono",
    cssUrl: googleFont("JetBrains+Mono", "100..800"),
    family: "'JetBrains Mono', monospace",
    label: "JetBrains Mono",
    slots: ["heading", "sans"],
    value: "jetbrains-mono",
  },
  {
    category: "serif",
    cssUrl: googleFont("Lora", "400..700"),
    family: "'Lora', serif",
    label: "Lora",
    slots: ["heading", "sans"],
    value: "lora",
  },
  {
    category: "sans",
    cssUrl: googleFont("Manrope", "200..800"),
    family: "'Manrope', sans-serif",
    label: "Manrope",
    slots: ["heading", "sans"],
    value: "manrope",
  },
  {
    category: "sans",
    cssUrl: googleFont("Outfit"),
    family: "'Outfit', sans-serif",
    label: "Outfit",
    slots: ["heading", "sans"],
    value: "outfit",
  },
  {
    category: "sans",
    cssUrl: googleFont("Public+Sans"),
    family: "'Public Sans', sans-serif",
    label: "Public Sans",
    slots: ["sans"],
    value: "public-sans",
  },
  {
    category: "serif",
    cssUrl: googleFont("Roboto+Slab"),
    family: "'Roboto Slab', serif",
    label: "Roboto Slab",
    slots: ["heading"],
    value: "roboto-slab",
  },
  {
    category: "mono",
    cssUrl: googleFontFaces(
      "Source+Code+Pro",
      "ital,wght@0,200..900;1,200..900"
    ),
    family: "'Source Code Pro', monospace",
    label: "Source Code Pro",
    slots: ["heading", "sans"],
    value: "source-code-pro",
  },
  {
    category: "sans",
    cssUrl: googleFont("Source+Sans+3", "200..900"),
    family: "'Source Sans 3', sans-serif",
    label: "Source Sans 3",
    slots: ["sans"],
    value: "source-sans-3",
  },
  {
    category: "sans",
    cssUrl: googleFont("Space+Grotesk", "300..700"),
    family: "'Space Grotesk', sans-serif",
    label: "Space Grotesk",
    slots: ["heading", "sans"],
    value: "space-grotesk",
  },
] as const satisfies readonly ThemeFont[];

export type ThemeFontName = (typeof THEME_FONTS)[number]["value"];

const fontHasSlot = (font: (typeof THEME_FONTS)[number], slot: ThemeFontSlot) =>
  (font.slots as readonly ThemeFontSlot[]).includes(slot);

export const THEME_FONTS_HEADING = THEME_FONTS.filter((font) =>
  fontHasSlot(font, "heading")
);
export const THEME_FONTS_SANS = THEME_FONTS.filter((font) =>
  fontHasSlot(font, "sans")
);

export const DEFAULT_FONT_SANS: ThemeFontName = "hanken-grotesk";
export const DEFAULT_FONT_HEADING: ThemeFontName = "figtree";

export const isThemeFontName = (value: unknown): value is ThemeFontName =>
  typeof value === "string" && THEME_FONTS.some((font) => font.value === value);

const isSlotFontName =
  (fonts: readonly (typeof THEME_FONTS)[number][]) =>
  (value: unknown): value is ThemeFontName =>
    typeof value === "string" && fonts.some((font) => font.value === value);

export const isThemeHeadingFontName = isSlotFontName(THEME_FONTS_HEADING);
export const isThemeSansFontName = isSlotFontName(THEME_FONTS_SANS);

export const getThemeFont = (value: ThemeFontName) => {
  const font = THEME_FONTS.find((item) => item.value === value);

  if (!font) {
    throw new Error(`Unknown theme font: ${value}`);
  }

  return font;
};
