import assert from "node:assert/strict";
import { describe, it } from "node:test";
import {
  BASE_COLORS,
  BORDER_RADIUS,
  getBaseFillCss,
  getPrimaryFillCss,
  PRIMARY_COLORS,
  PRIMARY_TONES,
} from "@/lib/theme/catalog";
import {
  applyThemePreset,
  DEFAULT_THEME_CONFIG,
  getActiveThemePreset,
  getCustomThemeSwatchCss,
  getThemeLocks,
  normalizeThemeConfig,
  randomizeThemeConfig,
  resetThemeConfig,
  THEME_PRESETS,
  type ThemeConfig,
} from "@/lib/theme/config";

describe("normalizeThemeConfig", () => {
  it("accepts every selectable catalog value", () => {
    for (const baseColor of BASE_COLORS) {
      for (const borderRadius of BORDER_RADIUS) {
        for (const primaryColor of PRIMARY_COLORS) {
          for (const primaryTone of PRIMARY_TONES) {
            const config = normalizeThemeConfig({
              baseColor: baseColor.value,
              borderRadius: borderRadius.value,
              fontHeading: "inter",
              fontSans: "lora",
              primaryColor: primaryColor.value,
              primaryTone: primaryTone.value,
              themeLocks: { baseColor: true },
            });

            assert.equal(config.baseColor, baseColor.value);
            assert.equal(config.borderRadius, borderRadius.value);
            assert.equal(config.primaryColor, primaryColor.value);
            assert.equal(config.primaryTone, primaryTone.value);
            assert.equal(config.themeLocks.baseColor, true);
          }
        }
      }
    }
  });

  it("migrates grayColor and rejects unknown values", () => {
    const config = normalizeThemeConfig({
      baseColor: "unknown",
      borderRadius: "huge",
      fontHeading: "unknown",
      fontSans: "unknown",
      grayColor: "zinc",
      primaryColor: "unknown",
      primaryTone: "unknown",
      themeLocks: { baseColor: "true" },
    });

    assert.deepEqual(config, {
      ...DEFAULT_THEME_CONFIG,
      baseColor: "zinc",
    });
  });

  it("rejects fonts that do not belong to the requested slot", () => {
    const config = normalizeThemeConfig({
      fontHeading: "public-sans",
      fontSans: "fraunces",
    });

    assert.equal(config.fontHeading, DEFAULT_THEME_CONFIG.fontHeading);
    assert.equal(config.fontSans, DEFAULT_THEME_CONFIG.fontSans);
  });

  it("accepts mono faces in Font and Heading", () => {
    const config = normalizeThemeConfig({
      fontHeading: "ibm-plex-mono",
      fontSans: "jetbrains-mono",
    });

    assert.equal(config.fontHeading, "ibm-plex-mono");
    assert.equal(config.fontSans, "jetbrains-mono");
  });
});

const lockedTheme: ThemeConfig = {
  ...DEFAULT_THEME_CONFIG,
  baseColor: "zinc",
  borderRadius: "lg",
  fontHeading: "inter",
  fontSans: "lora",
  primaryColor: "rose",
  primaryTone: "dark",
  themeLocks: {
    baseColor: true,
    borderRadius: true,
    fontHeading: true,
    fontSans: true,
    primaryColor: true,
    primaryTone: true,
  },
};

describe("theme randomization", () => {
  it("preserves every locked visual setting", () => {
    assert.deepEqual(randomizeThemeConfig(lockedTheme), lockedTheme);
    assert.deepEqual(getThemeLocks(lockedTheme), lockedTheme.themeLocks);
  });

  it("resets only visual configuration", () => {
    const reset = resetThemeConfig();

    assert.deepEqual(reset, DEFAULT_THEME_CONFIG);
    assert.equal("packageManager" in reset, false);
    assert.equal("installationMethod" in reset, false);
  });
});

describe("theme presets", () => {
  it("applies only visual theme fields", () => {
    const preset = THEME_PRESETS.find((item) => item.label === "Marlim");

    assert.ok(preset);

    const patch = applyThemePreset(preset);

    assert.deepEqual(patch, {
      baseColor: preset.baseColor,
      borderRadius: preset.borderRadius,
      fontHeading: preset.fontHeading,
      fontSans: preset.fontSans,
      primaryColor: preset.primaryColor,
      primaryTone: preset.primaryTone,
    });
    assert.equal("themeLocks" in patch, false);
    assert.equal("label" in patch, false);
    assert.equal("swatchClass" in patch, false);
    assert.equal("packageManager" in patch, false);
    assert.equal("installationType" in patch, false);
  });

  it("returns the matching preset and undefined after a patch", () => {
    const preset = THEME_PRESETS.find((item) => item.label === "Marlim");

    assert.ok(preset);

    const patch = applyThemePreset(preset);

    assert.equal(getActiveThemePreset(patch)?.label, "Marlim");
    assert.equal(
      getActiveThemePreset({ ...patch, primaryColor: "red" }),
      undefined
    );
  });

  it("uses a radial Tailwind swatch class", () => {
    for (const preset of THEME_PRESETS) {
      assert.equal(preset.swatchClass.includes("bg-radial-[at_25%_25%]"), true);
      assert.equal(preset.swatchClass.includes("from-"), true);
      assert.equal(preset.swatchClass.includes("to-"), true);
    }
  });

  it("paints a split swatch from the current base and primary", () => {
    const preset = THEME_PRESETS.find((item) => item.label === "Marlim");

    assert.ok(preset);

    const css = getCustomThemeSwatchCss(preset);

    assert.equal(css.includes("conic-gradient"), true);
    assert.equal(css.includes(getBaseFillCss(preset.baseColor)), true);
    assert.equal(
      css.includes(getPrimaryFillCss(preset.primaryColor, preset.primaryTone)),
      true
    );
  });
});
