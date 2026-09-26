const PRIMARY_COLOR_OPTIONS = [
  {
    hex: { dark: "bg-neutral-100", light: "bg-neutral-800" },
    label: "Neutral",
    value: "neutral",
  },
  {
    hex: { dark: "bg-red-400", light: "bg-red-400" },
    label: "Red",
    value: "red",
  },
  {
    hex: { dark: "bg-orange-400", light: "bg-orange-400" },
    label: "Orange",
    value: "orange",
  },
  {
    hex: { dark: "bg-amber-400", light: "bg-amber-400" },
    label: "Amber",
    value: "amber",
  },
  {
    hex: { dark: "bg-yellow-400", light: "bg-yellow-400" },
    label: "Yellow",
    value: "yellow",
  },
  {
    hex: { dark: "bg-lime-400", light: "bg-lime-400" },
    label: "Lime",
    value: "lime",
  },
  {
    hex: { dark: "bg-green-400", light: "bg-green-400" },
    label: "Green",
    value: "green",
  },
  {
    hex: { dark: "bg-emerald-400", light: "bg-emerald-400" },
    label: "Emerald",
    value: "emerald",
  },
  {
    hex: { dark: "bg-teal-400", light: "bg-teal-400" },
    label: "Teal",
    value: "teal",
  },
  {
    hex: { dark: "bg-cyan-400", light: "bg-cyan-400" },
    label: "Cyan",
    value: "cyan",
  },
  {
    hex: { dark: "bg-sky-400", light: "bg-sky-400" },
    label: "Sky",
    value: "sky",
  },
  {
    hex: { dark: "bg-blue-400", light: "bg-blue-400" },
    label: "Blue",
    value: "blue",
  },
  {
    hex: { dark: "bg-indigo-400", light: "bg-indigo-400" },
    label: "Indigo",
    value: "indigo",
  },
  {
    hex: { dark: "bg-violet-400", light: "bg-violet-400" },
    label: "Violet",
    value: "violet",
  },
  {
    hex: { dark: "bg-purple-400", light: "bg-purple-400" },
    label: "Purple",
    value: "purple",
  },
  {
    hex: { dark: "bg-fuchsia-400", light: "bg-fuchsia-400" },
    label: "Fuchsia",
    value: "fuchsia",
  },
  {
    hex: { dark: "bg-pink-400", light: "bg-pink-400" },
    label: "Pink",
    value: "pink",
  },
  {
    hex: { dark: "bg-rose-400", light: "bg-rose-400" },
    label: "Rose",
    value: "rose",
  },
] as const;

const BASE_COLOR_OPTIONS = [
  { hex: "bg-slate-500", label: "Slate", value: "slate" },
  { hex: "bg-gray-500", label: "Gray", value: "gray" },
  { hex: "bg-zinc-500", label: "Zinc", value: "zinc" },
  { hex: "bg-neutral-500", label: "Neutral", value: "neutral" },
  { hex: "bg-stone-500", label: "Stone", value: "stone" },
  { hex: "bg-mauve-500", label: "Mauve", value: "mauve" },
  { hex: "bg-olive-500", label: "Olive", value: "olive" },
  { hex: "bg-mist-500", label: "Mist", value: "mist" },
  { hex: "bg-taupe-500", label: "Taupe", value: "taupe" },
] as const;

export type PrimaryColorName = (typeof PRIMARY_COLOR_OPTIONS)[number]["value"];
export type BaseColorName = (typeof BASE_COLOR_OPTIONS)[number]["value"];

interface PrimaryTokenMap {
  primary: string;
  "primary-foreground": string;
  "primary-hover": string;
  ring: string;
  "sidebar-primary": string;
  "sidebar-primary-foreground": string;
  "sidebar-ring": string;
}

interface PrimaryCssVars {
  dark: PrimaryTokenMap;
  light: PrimaryTokenMap;
}

export const primaryTokens = (
  palette: string,
  shade: string,
  foreground: string,
  ringShade: string
): PrimaryTokenMap => ({
  primary: `var(--color-${palette}-${shade})`,
  "primary-foreground": `var(--color-${palette}-${foreground})`,
  "primary-hover": `color-mix(in srgb, var(--color-${palette}-${shade}) 92%, var(--color-${palette}-950))`,
  ring: `var(--color-${palette}-${ringShade})`,
  "sidebar-primary": `var(--color-${palette}-${shade})`,
  "sidebar-primary-foreground": `var(--color-${palette}-${foreground})`,
  "sidebar-ring": `var(--color-${palette}-${ringShade})`,
});

export const PRIMARY_TONES = [
  { label: "Light", value: "light" },
  { label: "Dark", value: "dark" },
] as const;

export type PrimaryTone = (typeof PRIMARY_TONES)[number]["value"];

const DARK_PRIMARY_TONE_600_COLORS = [
  "blue",
  "indigo",
  "violet",
  "purple",
] as const;

export const getPrimaryToneShade = (
  palette: string,
  primaryTone: PrimaryTone
) => {
  if (primaryTone === "light") {
    return "400";
  }

  return DARK_PRIMARY_TONE_600_COLORS.includes(
    palette as (typeof DARK_PRIMARY_TONE_600_COLORS)[number]
  )
    ? "600"
    : "700";
};

const primaryCssVars = (value: PrimaryColorName): PrimaryCssVars => {
  if (value === "neutral") {
    return {
      dark: primaryTokens("neutral", "100", "800", "50"),
      light: primaryTokens("neutral", "800", "50", "950"),
    };
  }

  return {
    dark: primaryTokens(value, "400", "950", "500"),
    light: primaryTokens(
      value,
      "400",
      "950",
      getPrimaryToneShade(value, "dark")
    ),
  };
};

export const PRIMARY_COLORS = PRIMARY_COLOR_OPTIONS.map((item) => ({
  ...item,
  cssVars: primaryCssVars(item.value),
})) as readonly {
  cssVars: PrimaryCssVars;
  hex: { dark: string; light: string };
  label: string;
  value: PrimaryColorName;
}[];

export const getPrimaryFillCss = (
  color: PrimaryColorName,
  primaryTone: PrimaryTone
) => {
  if (color === "neutral") {
    return "var(--foreground)";
  }

  return `var(--color-${color}-${getPrimaryToneShade(color, primaryTone)})`;
};

export const baseThemeTokens = (palette: string, mode: "light" | "dark") => {
  const light = mode === "light";
  const surface = `var(--color-${palette}-${light ? "950" : "50"})`;
  const foreground = `var(--color-${palette}-${light ? "800" : "100"})`;
  const foregroundSurface = `var(--color-${palette}-${light ? "50" : "800"})`;
  const sidebar = light
    ? `var(--color-${palette}-50)`
    : `color-mix(in srgb, var(--color-${palette}-950) 97%, var(--color-${palette}-50))`;

  return {
    accent: `color-mix(in srgb, ${surface} 8%, var(--background))`,
    "accent-foreground": foreground,
    background: light
      ? `var(--color-${palette}-50)`
      : `color-mix(in srgb, var(--color-${palette}-950) 95%, var(--color-${palette}-50))`,
    border: `color-mix(in srgb, ${surface} ${light ? 8 : 6}%, var(--background))`,
    card: light
      ? "var(--background)"
      : `color-mix(in srgb, var(--background) 98%, var(--color-${palette}-50))`,
    "card-foreground": foreground,
    foreground,
    input: `color-mix(in srgb, ${surface} ${light ? 10 : 8}%, var(--background))`,
    muted: `color-mix(in srgb, ${surface} 4%, var(--background))`,
    "muted-foreground": `color-mix(in srgb, var(--color-${palette}-500) 88%, ${surface})`,
    popover: light
      ? "var(--background)"
      : `color-mix(in srgb, var(--background) 98%, var(--color-${palette}-50))`,
    "popover-foreground": foreground,
    primary: foreground,
    "primary-foreground": foregroundSurface,
    "primary-hover": `color-mix(in srgb, ${foreground} 92%, var(--color-${palette}-950))`,
    ring: `var(--color-${palette}-${light ? "950" : "50"})`,
    secondary: `color-mix(in srgb, ${surface} 8%, var(--background))`,
    "secondary-foreground": foreground,
    "secondary-hover": `color-mix(in srgb, ${surface} 16%, var(--background))`,
    sidebar,
    "sidebar-accent": `color-mix(in srgb, ${surface} 8%, var(--sidebar))`,
    "sidebar-accent-foreground": foreground,
    "sidebar-border": `color-mix(in srgb, ${surface} ${light ? 6 : 5}%, var(--sidebar))`,
    "sidebar-foreground": `color-mix(in srgb, ${foreground} 80%, var(--sidebar))`,
    "sidebar-primary": foreground,
    "sidebar-primary-foreground": foregroundSurface,
    "sidebar-ring": `var(--color-${palette}-${light ? "950" : "50"})`,
  };
};

export const BASE_COLORS = BASE_COLOR_OPTIONS.map((item) => ({
  cssVars: {
    dark: baseThemeTokens(item.value, "dark"),
    light: baseThemeTokens(item.value, "light"),
  },
  hex: item.hex,
  label: item.label,
  value: item.value,
})) as readonly {
  cssVars: {
    dark: ReturnType<typeof baseThemeTokens>;
    light: ReturnType<typeof baseThemeTokens>;
  };
  hex: string;
  label: string;
  value: BaseColorName;
}[];

export const BORDER_RADIUS = [
  {
    cssVars: {
      radius: "0rem",
    },
    description: "None",
    label: "0",
    symbol: "-",
    value: "none",
  },
  {
    cssVars: {
      radius: "0.125rem",
    },
    description: "Extra small",
    label: "0.125",
    symbol: "XS",
    value: "xs",
  },
  {
    cssVars: {
      radius: "0.25rem",
    },
    description: "Small",
    label: "0.25",
    symbol: "S",
    value: "sm",
  },
  {
    cssVars: {
      radius: "0.5rem",
    },
    description: "Medium",
    label: "0.5",
    symbol: "M",
    value: "md",
  },
  {
    cssVars: {
      radius: "0.625rem",
    },
    description: "Large",
    label: "0.625",
    symbol: "L",
    value: "lg",
  },
] as const;

export type PrimaryColorOption = (typeof PRIMARY_COLORS)[number];
export type BaseColorOption = (typeof BASE_COLORS)[number];
export type BorderRadiusOption = (typeof BORDER_RADIUS)[number];
export type BorderRadiusName = BorderRadiusOption["value"];

const findCatalogItem = <T extends { value: string }>(
  items: readonly T[],
  value: string,
  kind: string
) => {
  const item = items.find((entry) => entry.value === value);

  if (!item) {
    throw new Error(`Unknown ${kind}: ${value}`);
  }

  return item;
};

export const getBaseColor = (value: BaseColorName) =>
  findCatalogItem(BASE_COLORS, value, "base color");

export const getBaseFillCss = (color: BaseColorName) =>
  `var(--color-${color}-500)`;

export const getPrimaryColor = (value: PrimaryColorName) =>
  findCatalogItem(PRIMARY_COLORS, value, "primary color");

export const getBorderRadius = (value: BorderRadiusName) =>
  findCatalogItem(BORDER_RADIUS, value, "border radius");

export const withDefaultFirst = <T extends { value: string }>(
  items: readonly T[],
  defaultValue: string
): T[] => [
  ...items.filter(({ value }) => value === defaultValue),
  ...items.filter(({ value }) => value !== defaultValue),
];

export const STATUS_LIGHT = {
  "chart-1": "var(--color-blue-600)",
  "chart-2": "var(--color-emerald-600)",
  "chart-3": "var(--color-amber-600)",
  "chart-4": "var(--color-purple-600)",
  "chart-5": "var(--color-rose-600)",
  destructive: "var(--color-red-600)",
  "destructive-foreground": "var(--color-red-800)",
  "destructive-hover": "var(--color-red-700)",
  info: "var(--color-blue-500)",
  "info-foreground": "var(--color-blue-700)",
  success: "var(--color-emerald-600)",
  "success-foreground": "var(--color-emerald-700)",
  warning: "var(--color-amber-500)",
  "warning-foreground": "var(--color-amber-700)",
} as const;

export const STATUS_DARK = {
  "chart-1": "var(--color-blue-700)",
  "chart-2": "var(--color-emerald-500)",
  "chart-3": "var(--color-amber-500)",
  "chart-4": "var(--color-purple-500)",
  "chart-5": "var(--color-rose-500)",
  destructive: "var(--color-red-600)",
  "destructive-foreground": "var(--color-red-400)",
  "destructive-hover": "var(--color-red-700)",
  info: "var(--color-blue-500)",
  "info-foreground": "var(--color-blue-400)",
  success: "var(--color-emerald-600)",
  "success-foreground": "var(--color-emerald-400)",
  warning: "var(--color-amber-500)",
  "warning-foreground": "var(--color-amber-400)",
} as const;

const primaryToneTokens = (
  palette: PrimaryColorName,
  primaryTone: PrimaryTone
): PrimaryCssVars => {
  if (palette === "neutral") {
    return primaryCssVars(palette);
  }

  const step = getPrimaryToneShade(palette, primaryTone);
  const foreground = primaryTone === "light" ? "950" : "50";

  return {
    dark: primaryTokens(palette, step, foreground, "50"),
    light: primaryTokens(palette, step, foreground, "950"),
  };
};

export const baseCodeTokens = (palette: string, mode: "light" | "dark") => {
  const mix = mode === "light" ? `${palette}-950` : `${palette}-50`;

  return {
    code: `color-mix(in srgb, var(--background) 99%, var(--color-${mix}))`,
    "code-highlight": `color-mix(in srgb, var(--color-${mix}) 4%, var(--code))`,
  };
};

const formatCssVarsBlock = (
  selector: string,
  vars: Record<string, string | undefined>
) => {
  const lines = Object.entries(vars)
    .filter((entry): entry is [string, string] => entry[1] !== undefined)
    .map(([key, value]) => `  --${key}: ${value};`);

  return `${selector} {\n${lines.join("\n")}\n}`;
};

export interface CreateCssVarsInput {
  baseColor: BaseColorName;
  borderRadius: BorderRadiusName;
  primaryColor: PrimaryColorName;
  primaryTone?: PrimaryTone;
}

export const createCssVars = (input: CreateCssVarsInput) => {
  const primaryTone = input.primaryTone ?? "light";
  const primary = primaryToneTokens(input.primaryColor, primaryTone);
  const radiusCss = getBorderRadius(input.borderRadius).cssVars;

  return `${formatCssVarsBlock(":root", {
    ...baseThemeTokens(input.baseColor, "light"),
    ...baseCodeTokens(input.baseColor, "light"),
    ...STATUS_LIGHT,
    ...primary.light,
    ...radiusCss,
  })}\n\n${formatCssVarsBlock(".dark", {
    ...baseThemeTokens(input.baseColor, "dark"),
    ...baseCodeTokens(input.baseColor, "dark"),
    ...STATUS_DARK,
    ...primary.dark,
    ...radiusCss,
  })}`;
};
