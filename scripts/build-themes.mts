import { realpathSync } from "node:fs";
import { writeFile } from "node:fs/promises";
import { join } from "node:path";
import { fileURLToPath } from "node:url";
import {
  BASE_COLORS,
  BORDER_RADIUS,
  baseCodeTokens,
  baseThemeTokens,
  getPrimaryToneShade,
  PRIMARY_COLORS,
  primaryTokens,
  STATUS_DARK,
  STATUS_LIGHT,
} from "../lib/theme/catalog";

const THEMES_CSS = join(process.cwd(), "styles", "themes.css");

const THEME_COLOR_SHADES = ["50", "100", "400", "500", "800", "950"] as const;

const PRIMARY_VAR_KEYS = [
  "primary",
  "primary-foreground",
  "primary-hover",
  "ring",
  "sidebar-primary",
  "sidebar-primary-foreground",
  "sidebar-ring",
] as const;

const SURFACE_VAR_KEYS = [
  "background",
  "foreground",
  "card",
  "card-foreground",
  "popover",
  "popover-foreground",
  "secondary",
  "secondary-foreground",
  "secondary-hover",
  "muted",
  "muted-foreground",
  "accent",
  "accent-foreground",
  "border",
  "input",
  "sidebar",
  "sidebar-foreground",
  "sidebar-accent",
  "sidebar-accent-foreground",
  "sidebar-border",
  "chart-1",
  "chart-2",
  "chart-3",
  "chart-4",
  "chart-5",
  "code",
  "code-highlight",
] as const;

const STATUS_CHART_KEYS = [
  "chart-1",
  "chart-2",
  "chart-3",
  "chart-4",
  "chart-5",
] as const;

const RUNTIME_THEME_PALETTE = "slate";

const CSS_PRINT_WIDTH = 80;

const COLOR_MIX_ARGS_RE = /,\s*/;

const aliasThemeColorVars = (value: string, palette: string) =>
  value.replaceAll(`var(--color-${palette}-`, "var(--theme-color-");

const formatColorMixValue = (value: string, indent: string) => {
  const args = value.slice("color-mix(".length, -1).split(COLOR_MIX_ARGS_RE);

  return `color-mix(\n${args.map((arg) => `${indent}  ${arg}`).join(",\n")}\n${indent})`;
};

const formatRuntimeDeclaration = (
  key: string,
  value: string,
  indent: string
) => {
  const line = `${indent}--${key}: ${value};`;

  if (line.length <= CSS_PRINT_WIDTH || !value.startsWith("color-mix(")) {
    return line;
  }

  return `${indent}--${key}: ${formatColorMixValue(value, indent)};`;
};

const formatRuntimeDeclarations = (
  vars: object,
  keys: readonly string[],
  indent = "  "
) =>
  keys
    .map((key) => {
      const value = (vars as Record<string, string | undefined>)[key];

      return value === undefined
        ? undefined
        : formatRuntimeDeclaration(key, value, indent);
    })
    .filter((line): line is string => line !== undefined)
    .join("\n");

const formatRuntimeRule = (selector: string, declarations: string) =>
  `${selector} {\n${declarations}\n}`;

const formatIsSelector = (selectors: readonly string[]) =>
  `:is(\n  ${selectors.join(",\n  ")}\n)`;

const runtimeSurfaceVars = (mode: "light" | "dark") => {
  const palette = RUNTIME_THEME_PALETTE;
  const status = mode === "light" ? STATUS_LIGHT : STATUS_DARK;
  const tokens: Record<string, string> = {
    ...baseThemeTokens(palette, mode),
    ...baseCodeTokens(palette, mode),
  };

  for (const key of STATUS_CHART_KEYS) {
    tokens[key] = status[key];
  }

  return Object.fromEntries(
    Object.entries(tokens).map(([key, value]) => [
      key,
      aliasThemeColorVars(value, palette),
    ])
  );
};

const runtimePrimaryVars = (mode: "light" | "dark") => {
  const tokens = baseThemeTokens(RUNTIME_THEME_PALETTE, mode);

  return Object.fromEntries(
    PRIMARY_VAR_KEYS.map((key) => [
      key,
      aliasThemeColorVars(tokens[key], RUNTIME_THEME_PALETTE),
    ])
  );
};

export const createRuntimeThemeCss = () => {
  const chromatic = PRIMARY_COLORS.filter((color) => color.value !== "neutral");
  const bases = BASE_COLORS.filter((color) => color.value !== "neutral");
  const themeSelectors = chromatic.map((color) => `.theme-${color.value}`);
  const baseSelectors = bases.map((color) => `.bg-${color.value}`);
  const lightSurface = runtimeSurfaceVars("light");
  const darkSurface = runtimeSurfaceVars("dark");
  const lightPrimary = runtimePrimaryVars("light");
  const darkPrimary = runtimePrimaryVars("dark");

  const themeRules = chromatic.map((color) =>
    formatRuntimeRule(
      `.theme-${color.value}`,
      formatRuntimeDeclarations(color.cssVars.light, PRIMARY_VAR_KEYS)
    )
  );

  const darkThemeRules = chromatic.map((color) =>
    formatRuntimeRule(
      `.dark body.theme-${color.value}`,
      formatRuntimeDeclarations(color.cssVars.dark, PRIMARY_VAR_KEYS)
    )
  );

  const darkToneRules = chromatic.map((color) =>
    formatRuntimeRule(
      `body.primary-tone-dark.theme-${color.value}`,
      formatRuntimeDeclarations(
        primaryTokens(
          color.value,
          getPrimaryToneShade(color.value, "dark"),
          "50",
          getPrimaryToneShade(color.value, "dark")
        ),
        PRIMARY_VAR_KEYS
      )
    )
  );

  const darkToneDarkRules = chromatic.map((color) =>
    formatRuntimeRule(
      `.dark body.primary-tone-dark.theme-${color.value}`,
      formatRuntimeDeclarations(
        primaryTokens(
          color.value,
          getPrimaryToneShade(color.value, "dark"),
          "50",
          "500"
        ),
        PRIMARY_VAR_KEYS
      )
    )
  );

  const aliasRules = bases.map((color) =>
    formatRuntimeRule(
      `.bg-${color.value}`,
      THEME_COLOR_SHADES.map(
        (shade) =>
          `  --theme-color-${shade}: var(--color-${color.value}-${shade});`
      ).join("\n")
    )
  );

  const surfaceRule = `${formatIsSelector(baseSelectors)} {\n${formatRuntimeDeclarations(lightSurface, SURFACE_VAR_KEYS)}\n\n  @variant dark {\n${formatRuntimeDeclarations(darkSurface, SURFACE_VAR_KEYS, "    ")}\n  }\n}`;

  const fallbackRule = `${formatIsSelector(baseSelectors)}:not(\n  ${formatIsSelector(themeSelectors).replaceAll("\n", "\n  ")}\n) {\n${formatRuntimeDeclarations(lightPrimary, PRIMARY_VAR_KEYS)}\n\n  @variant dark {\n${formatRuntimeDeclarations(darkPrimary, PRIMARY_VAR_KEYS, "    ")}\n  }\n}`;

  const radiusRules = BORDER_RADIUS.map((radius) =>
    formatRuntimeRule(
      `.radius-${radius.value}`,
      `  --radius: ${radius.cssVars.radius};`
    )
  );

  return `${[
    "/* Generated from scripts/build-themes.mts. Do not edit. */",
    ...themeRules,
    ...darkToneRules,
    ...darkThemeRules,
    ...darkToneDarkRules,
    ...aliasRules,
    surfaceRule,
    fallbackRule,
    ...radiusRules,
  ].join("\n\n")}\n`;
};

const main = async () => {
  await writeFile(THEMES_CSS, createRuntimeThemeCss());
};

const isDirectRun = () => {
  if (process.argv[1] === undefined) {
    return false;
  }
  try {
    return (
      realpathSync(fileURLToPath(import.meta.url)) ===
      realpathSync(process.argv[1])
    );
  } catch {
    return false;
  }
};

if (isDirectRun()) {
  main().catch((err) => {
    console.error(err);
    process.exit(1);
  });
}
