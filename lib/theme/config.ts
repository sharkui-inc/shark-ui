import {
  BASE_COLORS,
  BORDER_RADIUS,
  type PrimaryTone as CatalogPrimaryTone,
  getBaseFillCss,
  getPrimaryFillCss,
  PRIMARY_COLORS,
  PRIMARY_TONES,
} from "./catalog";
import {
  DEFAULT_FONT_HEADING as DEFAULT_THEME_FONT_HEADING,
  DEFAULT_FONT_SANS as DEFAULT_THEME_FONT_SANS,
  THEME_FONTS_HEADING,
  THEME_FONTS_SANS,
  type ThemeFont,
  type ThemeFontName,
  type ThemeFontSlot,
} from "./fonts";

export type PrimaryColor = (typeof PRIMARY_COLORS)[number]["value"];
export type BaseColor = (typeof BASE_COLORS)[number]["value"];
export type BorderRadius = (typeof BORDER_RADIUS)[number]["value"];
export type PrimaryTone = CatalogPrimaryTone;

export type ThemeLockKey =
  | "baseColor"
  | "borderRadius"
  | "fontHeading"
  | "fontSans"
  | "primaryColor"
  | "primaryTone";

export type ThemeLocks = Record<ThemeLockKey, boolean>;

export interface ThemeConfig {
  baseColor: BaseColor;
  borderRadius: BorderRadius;
  fontHeading: ThemeFontName;
  fontSans: ThemeFontName;
  primaryColor: PrimaryColor;
  primaryTone: PrimaryTone;
  themeLocks: ThemeLocks;
}

export const DEFAULT_PRIMARY_COLOR: PrimaryColor = "neutral";
export const DEFAULT_PRIMARY_TONE: PrimaryTone = "light";
export const DEFAULT_BASE_COLOR: BaseColor = "neutral";
export const DEFAULT_BORDER_RADIUS: BorderRadius = "md";
export const DEFAULT_FONT_SANS = DEFAULT_THEME_FONT_SANS;
export const DEFAULT_FONT_HEADING = DEFAULT_THEME_FONT_HEADING;
export const DEFAULT_THEME_LOCKS: ThemeLocks = {
  baseColor: false,
  borderRadius: false,
  fontHeading: false,
  fontSans: false,
  primaryColor: false,
  primaryTone: false,
};

export const DEFAULT_THEME_CONFIG: ThemeConfig = {
  baseColor: DEFAULT_BASE_COLOR,
  borderRadius: DEFAULT_BORDER_RADIUS,
  fontHeading: DEFAULT_FONT_HEADING,
  fontSans: DEFAULT_FONT_SANS,
  primaryColor: DEFAULT_PRIMARY_COLOR,
  primaryTone: DEFAULT_PRIMARY_TONE,
  themeLocks: DEFAULT_THEME_LOCKS,
};

export interface VisualThemePick {
  baseColor: BaseColor;
  borderRadius: BorderRadius;
  fontHeading: ThemeFontName;
  fontSans: ThemeFontName;
  primaryColor: PrimaryColor;
  primaryTone: PrimaryTone;
}

export interface VisualThemeLists {
  baseColors: readonly string[];
  borderRadii: readonly string[];
  defaultConfig: VisualThemePick;
  fontSlots: {
    heading: readonly string[];
    sans: readonly string[];
  };
  primaryColors: readonly string[];
  primaryTones: readonly string[];
}

export const createVisualThemeLists = (
  defaultConfig: VisualThemePick
): VisualThemeLists => ({
  baseColors: BASE_COLORS.map(({ value }) => value),
  borderRadii: BORDER_RADIUS.map(({ value }) => value),
  defaultConfig,
  fontSlots: {
    heading: THEME_FONTS_HEADING.map(({ value }) => value),
    sans: THEME_FONTS_SANS.map(({ value }) => value),
  },
  primaryColors: PRIMARY_COLORS.map(({ value }) => value),
  primaryTones: PRIMARY_TONES.map(({ value }) => value),
});

export const pickVisualThemeSource = `function pickVisualTheme(value, lists) {
  const defaults = lists.defaultConfig;

  if (!value || typeof value !== "object" || Array.isArray(value)) {
    return defaults;
  }

  const stored = value;
  const pick = function (items, candidate, fallback) {
    if (typeof candidate === "string" && items.includes(candidate)) {
      return candidate;
    }

    return fallback;
  };

  return {
    baseColor: pick(
      lists.baseColors,
      stored.baseColor,
      pick(lists.baseColors, stored.grayColor, defaults.baseColor)
    ),
    borderRadius: pick(
      lists.borderRadii,
      stored.borderRadius,
      defaults.borderRadius
    ),
    fontHeading: pick(
      lists.fontSlots.heading,
      stored.fontHeading,
      defaults.fontHeading
    ),
    fontSans: pick(lists.fontSlots.sans, stored.fontSans, defaults.fontSans),
    primaryColor: pick(
      lists.primaryColors,
      stored.primaryColor,
      defaults.primaryColor
    ),
    primaryTone: pick(
      lists.primaryTones,
      stored.primaryTone,
      defaults.primaryTone
    )
  };
}`;

export const pickVisualTheme = Function(
  `return (${pickVisualThemeSource});`
)() as (value: unknown, lists: VisualThemeLists) => VisualThemePick;

const isRecord = (value: unknown): value is Record<string, unknown> =>
  typeof value === "object" && value !== null && !Array.isArray(value);

const normalizeThemeLocks = (
  value: unknown,
  fallback: ThemeLocks
): ThemeLocks => {
  const locks = isRecord(value) ? value : {};
  const normalizedLocks: ThemeLocks = { ...fallback };

  for (const key of Object.keys(fallback) as ThemeLockKey[]) {
    if (typeof locks[key] === "boolean") {
      normalizedLocks[key] = locks[key];
    }
  }

  return normalizedLocks;
};

export const normalizeThemeConfig = (
  value: unknown,
  fallback: ThemeConfig = DEFAULT_THEME_CONFIG
): ThemeConfig => {
  if (!isRecord(value)) {
    return fallback;
  }

  const pick = pickVisualTheme(
    value,
    createVisualThemeLists({
      baseColor: fallback.baseColor,
      borderRadius: fallback.borderRadius,
      fontHeading: fallback.fontHeading,
      fontSans: fallback.fontSans,
      primaryColor: fallback.primaryColor,
      primaryTone: fallback.primaryTone,
    })
  );

  return {
    ...pick,
    themeLocks: normalizeThemeLocks(value.themeLocks, fallback.themeLocks),
  };
};

export const THEME_FIELDS = {
  baseColor: {
    description: "Gray for backgrounds and borders.",
    label: "Base",
  },
  borderRadius: {
    description: "Corner rounding on buttons and cards.",
    label: "Radius",
  },
  fontHeading: {
    description: "Font for headings.",
    label: "Heading",
  },
  fontSans: {
    description: "Font for body text.",
    label: "Font",
  },
  primaryColor: {
    description: "Accent for buttons and links.",
    label: "Primary",
  },
  primaryTone: {
    description: "Lighter or darker primary.",
    label: "Tone",
  },
} as const satisfies Record<
  ThemeLockKey,
  { description: string; label: string }
>;

export const THEME_PRESET_FIELD = {
  description: "Apply a full starting theme.",
  label: "Preset",
} as const;

export const THEME_FONT_SLOTS = {
  heading: {
    ...THEME_FIELDS.fontHeading,
    defaultValue: DEFAULT_FONT_HEADING,
    fonts: THEME_FONTS_HEADING,
    lockKey: "fontHeading",
  },
  sans: {
    ...THEME_FIELDS.fontSans,
    defaultValue: DEFAULT_FONT_SANS,
    fonts: THEME_FONTS_SANS,
    lockKey: "fontSans",
  },
} as const satisfies Record<
  ThemeFontSlot,
  {
    defaultValue: ThemeFontName;
    description: string;
    fonts: readonly ThemeFont[];
    label: string;
    lockKey: ThemeLockKey;
  }
>;

const pickRandom = <T>(items: readonly T[]): T =>
  items[Math.floor(Math.random() * items.length)] as T;

export const getThemeLocks = (config: ThemeConfig): ThemeLocks => ({
  ...DEFAULT_THEME_LOCKS,
  ...config.themeLocks,
});

export const isDefaultThemeConfig = (config: ThemeConfig) =>
  config.baseColor === DEFAULT_BASE_COLOR &&
  config.borderRadius === DEFAULT_BORDER_RADIUS &&
  config.fontHeading === DEFAULT_FONT_HEADING &&
  config.fontSans === DEFAULT_FONT_SANS &&
  config.primaryColor === DEFAULT_PRIMARY_COLOR &&
  config.primaryTone === DEFAULT_PRIMARY_TONE &&
  Object.entries(DEFAULT_THEME_LOCKS).every(
    ([key, value]) => getThemeLocks(config)[key as keyof ThemeLocks] === value
  );

export const resetThemeConfig = (): ThemeConfig => ({
  ...DEFAULT_THEME_CONFIG,
});

export const randomizeThemeConfig = (config: ThemeConfig): ThemeConfig => {
  const locks = getThemeLocks(config);

  return {
    ...config,
    baseColor: locks.baseColor
      ? config.baseColor
      : pickRandom(BASE_COLORS).value,
    borderRadius: locks.borderRadius
      ? config.borderRadius
      : pickRandom(BORDER_RADIUS).value,
    fontHeading: locks.fontHeading
      ? config.fontHeading
      : pickRandom(THEME_FONTS_HEADING).value,
    fontSans: locks.fontSans
      ? config.fontSans
      : pickRandom(THEME_FONTS_SANS).value,
    primaryColor: locks.primaryColor
      ? config.primaryColor
      : pickRandom(PRIMARY_COLORS).value,
    primaryTone: locks.primaryTone
      ? config.primaryTone
      : pickRandom(["dark", "light"] as const),
    themeLocks: locks,
  };
};

export interface ThemePreset {
  baseColor: BaseColor;
  borderRadius: BorderRadius;
  fontHeading: ThemeFontName;
  fontSans: ThemeFontName;
  label: string;
  primaryColor: PrimaryColor;
  primaryTone: PrimaryTone;
  swatchClass: string;
}

export type ThemePresetPatch = Pick<
  ThemeConfig,
  | "baseColor"
  | "borderRadius"
  | "fontHeading"
  | "fontSans"
  | "primaryColor"
  | "primaryTone"
>;

// Accent follows the base 500 undertone: analogous chroma-up when that hue is
// unique in the set, square (±90°) when analogous collides with another preset.
export const THEME_PRESETS = [
  {
    baseColor: DEFAULT_BASE_COLOR,
    borderRadius: DEFAULT_BORDER_RADIUS,
    fontHeading: DEFAULT_FONT_HEADING,
    fontSans: DEFAULT_FONT_SANS,
    label: "Default",
    primaryColor: DEFAULT_PRIMARY_COLOR,
    primaryTone: DEFAULT_PRIMARY_TONE,
    swatchClass:
      "bg-radial-[at_25%_25%] from-neutral-200 to-neutral-500 to-75%",
  },
  {
    baseColor: "slate",
    borderRadius: "sm",
    fontHeading: "bricolage-grotesque",
    fontSans: "geist",
    label: "Marlim",
    primaryColor: "blue",
    primaryTone: "light",
    swatchClass: "bg-radial-[at_25%_25%] from-sky-300 to-blue-600 to-75%",
  },
  {
    baseColor: "gray",
    borderRadius: "xs",
    fontHeading: "outfit",
    fontSans: "public-sans",
    label: "Aqua",
    primaryColor: "teal",
    primaryTone: "light",
    swatchClass: "bg-radial-[at_25%_25%] from-teal-200 to-teal-500 to-75%",
  },
  {
    baseColor: "zinc",
    borderRadius: "none",
    fontHeading: "roboto-slab",
    fontSans: "manrope",
    label: "Coral",
    primaryColor: "rose",
    primaryTone: "light",
    swatchClass: "bg-radial-[at_25%_25%] from-rose-300 to-rose-600 to-75%",
  },
  {
    baseColor: "stone",
    borderRadius: "lg",
    fontHeading: "fraunces",
    fontSans: "dm-sans",
    label: "Areia",
    primaryColor: "yellow",
    primaryTone: "light",
    swatchClass: "bg-radial-[at_25%_25%] from-yellow-200 to-amber-500 to-75%",
  },
  {
    baseColor: "mauve",
    borderRadius: "md",
    fontHeading: "newsreader",
    fontSans: "instrument-sans",
    label: "Ostra",
    primaryColor: "purple",
    primaryTone: "light",
    swatchClass: "bg-radial-[at_25%_25%] from-fuchsia-300 to-violet-600 to-75%",
  },
  {
    baseColor: "olive",
    borderRadius: "sm",
    fontHeading: "lora",
    fontSans: "source-sans-3",
    label: "Alga",
    primaryColor: "lime",
    primaryTone: "light",
    swatchClass: "bg-radial-[at_25%_25%] from-lime-200 to-lime-600 to-75%",
  },
  {
    baseColor: "mist",
    borderRadius: "lg",
    fontHeading: "space-grotesk",
    fontSans: "inter",
    label: "Espuma",
    primaryColor: "cyan",
    primaryTone: "light",
    swatchClass: "bg-radial-[at_25%_25%] from-cyan-200 to-cyan-500 to-75%",
  },
  {
    baseColor: "taupe",
    borderRadius: "xs",
    fontHeading: "eb-garamond",
    fontSans: "ibm-plex-sans",
    label: "Boia",
    primaryColor: "orange",
    primaryTone: "light",
    swatchClass: "bg-radial-[at_25%_25%] from-orange-300 to-orange-600 to-75%",
  },
] as const satisfies readonly ThemePreset[];

export const applyThemePreset = (preset: ThemePreset): ThemePresetPatch => ({
  baseColor: preset.baseColor,
  borderRadius: preset.borderRadius,
  fontHeading: preset.fontHeading,
  fontSans: preset.fontSans,
  primaryColor: preset.primaryColor,
  primaryTone: preset.primaryTone,
});

export const isThemePresetActive = (
  config: ThemePresetPatch,
  preset: ThemePreset
) =>
  config.baseColor === preset.baseColor &&
  config.borderRadius === preset.borderRadius &&
  config.fontHeading === preset.fontHeading &&
  config.fontSans === preset.fontSans &&
  config.primaryColor === preset.primaryColor &&
  config.primaryTone === preset.primaryTone;

export const getActiveThemePreset = (config: ThemePresetPatch) =>
  THEME_PRESETS.find((preset) => isThemePresetActive(config, preset));

export const getCustomThemeSwatchCss = (
  config: Pick<ThemePresetPatch, "baseColor" | "primaryColor" | "primaryTone">
) =>
  `conic-gradient(from 135deg, ${getBaseFillCss(config.baseColor)} 0 50%, ${getPrimaryFillCss(config.primaryColor, config.primaryTone)} 50% 100%)`;
