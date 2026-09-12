import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { describe, it } from "node:test";
import {
  BASE_COLORS,
  BORDER_RADIUS,
  createCssVars,
  createRuntimeThemeCss,
  getBaseColor,
  getBaseFillCss,
  getBorderRadius,
  getPrimaryColor,
  getPrimaryFillCss,
  getPrimaryToneShade,
  PRIMARY_COLORS,
  PRIMARY_TONES,
  withDefaultFirst,
} from "@/lib/theme/catalog";

const BASE_PALETTE_RE = /--color-([a-z]+)-50/;

const DARK_PRIMARY_TONE_SHADES = {
  amber: "700",
  blue: "600",
  cyan: "700",
  emerald: "700",
  fuchsia: "700",
  green: "700",
  indigo: "600",
  lime: "700",
  orange: "700",
  pink: "700",
  purple: "600",
  red: "700",
  rose: "700",
  sky: "700",
  teal: "700",
  violet: "600",
  yellow: "700",
} as const;

type Oklch = readonly [number, number, number];

const tailwindTheme = readFileSync(
  "node_modules/tailwindcss/theme.css",
  "utf8"
);

const tailwindColor = (palette: string, shade: string): Oklch => {
  const match = tailwindTheme.match(
    new RegExp(
      `--color-${palette}-${shade}: oklch\\(([\\d.]+)% ([\\d.]+) ([\\d.]+)\\)`
    )
  );

  assert.ok(match, `missing Tailwind color ${palette}-${shade}`);

  return [Number(match[1]) / 100, Number(match[2]), Number(match[3])];
};

const oklchLuminance = ([lightness, chroma, hue]: Oklch) => {
  const radians = (hue * Math.PI) / 180;
  const a = chroma * Math.cos(radians);
  const b = chroma * Math.sin(radians);
  const l = (lightness + 0.396_337_777_4 * a + 0.215_803_757_3 * b) ** 3;
  const m = (lightness - 0.105_561_345_8 * a - 0.063_854_172_8 * b) ** 3;
  const s = (lightness - 0.089_484_177_5 * a - 1.291_485_548 * b) ** 3;
  const [red, green, blue] = [
    4.076_741_662_1 * l - 3.307_711_591_3 * m + 0.230_969_929_2 * s,
    -1.268_438_004_6 * l + 2.609_757_401_1 * m - 0.341_319_396_5 * s,
    -0.004_196_086_3 * l - 0.703_418_614_7 * m + 1.707_614_701 * s,
  ].map((channel) => Math.min(1, Math.max(0, channel)));

  return 0.2126 * red + 0.7152 * green + 0.0722 * blue;
};

const contrastRatio = (first: Oklch, second: Oklch) => {
  const [lighter, darker] = [
    oklchLuminance(first),
    oklchLuminance(second),
  ].sort((a, b) => b - a);

  return (lighter + 0.05) / (darker + 0.05);
};

const byValue = <T extends { value: string }>(
  items: readonly T[],
  value: string
) => {
  const item = items.find((entry) => entry.value === value);
  assert.ok(item, `missing ${value}`);
  return item;
};

describe("createCssVars", () => {
  it("emits radius and overlayed primary for neutral + zinc + md", () => {
    const primary = byValue(PRIMARY_COLORS, "neutral");
    const base = byValue(BASE_COLORS, "zinc");
    const radius = byValue(BORDER_RADIUS, "md");
    const css = createCssVars(primary.cssVars, base.cssVars, radius.cssVars);
    const rootBlock = css.slice(0, css.indexOf(".dark {"));
    const darkBlock = css.slice(css.indexOf(".dark {"));

    assert.ok(css.includes(":root {"));
    assert.ok(css.includes(".dark {"));
    assert.ok(css.includes("--radius: 0.5rem;"));
    assert.ok(
      rootBlock.includes(`--primary: ${primary.cssVars.light.primary};`)
    );
    assert.ok(
      darkBlock.includes(`--primary: ${primary.cssVars.dark.primary};`)
    );
  });

  it("keeps styles/themes.css generated from the catalog", () => {
    assert.equal(
      readFileSync("styles/themes.css", "utf8"),
      createRuntimeThemeCss()
    );
  });

  it("keeps the primary base options in runtime and copied themes", () => {
    const base = byValue(BASE_COLORS, "slate");
    const radius = byValue(BORDER_RADIUS, "md");
    const runtimeThemes = readFileSync("styles/themes.css", "utf8");

    for (const primary of PRIMARY_COLORS.filter(
      (color) => color.value !== "neutral"
    )) {
      const palette = primary.value;
      const darkShade =
        DARK_PRIMARY_TONE_SHADES[
          palette as keyof typeof DARK_PRIMARY_TONE_SHADES
        ];

      for (const [tone, shade, foreground] of [
        ["light", "400", "950"],
        ["dark", darkShade, "50"],
      ] as const) {
        assert.equal(getPrimaryToneShade(palette, tone), shade);
        const css = createCssVars(
          primary.cssVars,
          base.cssVars,
          radius.cssVars,
          tone
        );
        const rootBlock = css.slice(0, css.indexOf(".dark {"));
        const darkBlock = css.slice(css.indexOf(".dark {"));
        const runtimeStart = runtimeThemes.indexOf(
          tone === "light"
            ? `.theme-${palette} {`
            : `body.primary-tone-dark.theme-${palette} {`
        );

        assert.ok(
          runtimeStart >= 0,
          `missing ${tone} runtime theme for ${palette}`
        );

        const runtimeEnd = runtimeThemes.indexOf("}", runtimeStart);

        assert.ok(
          runtimeEnd > runtimeStart,
          `unclosed ${tone} runtime theme for ${palette}`
        );

        const runtimeBlock = runtimeThemes.slice(runtimeStart, runtimeEnd + 1);

        for (const block of [rootBlock, darkBlock]) {
          assert.ok(
            block.includes(`--primary: var(--color-${palette}-${shade});`)
          );
          assert.ok(
            block.includes(
              `--primary-foreground: var(--color-${palette}-${foreground});`
            )
          );
          assert.ok(
            block.includes(
              `--sidebar-primary: var(--color-${palette}-${shade});`
            )
          );
          assert.ok(
            block.includes(
              `--sidebar-primary-foreground: var(--color-${palette}-${foreground});`
            )
          );
          assert.ok(block.includes(`--ring: var(--color-${palette}-500);`));
          assert.ok(
            block.includes(`--sidebar-ring: var(--color-${palette}-500);`)
          );
        }

        for (const token of [
          `--primary: var(--color-${palette}-${shade});`,
          `--primary-foreground: var(--color-${palette}-${foreground});`,
          `--sidebar-primary: var(--color-${palette}-${shade});`,
          `--sidebar-primary-foreground: var(--color-${palette}-${foreground});`,
          `--ring: var(--color-${palette}-500);`,
          `--sidebar-ring: var(--color-${palette}-500);`,
        ]) {
          assert.equal(
            runtimeBlock.split(token).length - 1,
            1,
            `${token} should be emitted by the ${tone} runtime base`
          );
        }
      }
    }
  });

  it("keeps dark primary tones at WCAG AA contrast", () => {
    for (const [palette, shade] of Object.entries(DARK_PRIMARY_TONE_SHADES)) {
      const contrast = contrastRatio(
        tailwindColor(palette, shade),
        tailwindColor(palette, "50")
      );

      assert.ok(
        contrast >= 4.5,
        `${palette}-${shade} with ${palette}-50 is ${contrast.toFixed(2)}:1`
      );
    }
  });

  it("includes --code in :root and .dark", () => {
    const primary = byValue(PRIMARY_COLORS, "neutral");
    const base = byValue(BASE_COLORS, "zinc");
    const radius = byValue(BORDER_RADIUS, "md");
    const css = createCssVars(primary.cssVars, base.cssVars, radius.cssVars);
    const rootBlock = css.slice(0, css.indexOf(".dark {"));
    const darkBlock = css.slice(css.indexOf(".dark {"));

    assert.ok(rootBlock.includes("--code:"));
    assert.ok(darkBlock.includes("--code:"));
  });

  it("uses the opaque recipe for every base palette", () => {
    for (const base of BASE_COLORS) {
      const primary = byValue(PRIMARY_COLORS, "neutral");
      const radius = byValue(BORDER_RADIUS, "md");
      const css = createCssVars(primary.cssVars, base.cssVars, radius.cssVars);
      const rootBlock = css.slice(0, css.indexOf(".dark {"));
      const darkBlock = css.slice(css.indexOf(".dark {"));
      const palette = BASE_PALETTE_RE.exec(base.cssVars.light.background)?.[1];

      assert.ok(palette, `missing palette for ${base.value}`);
      assert.ok(
        rootBlock.includes(
          `--secondary: color-mix(in srgb, var(--color-${palette}-950) 4%, var(--background));`
        )
      );
      assert.ok(
        rootBlock.includes(
          `--border: color-mix(in srgb, var(--color-${palette}-950) 8%, var(--background));`
        )
      );
      assert.ok(
        rootBlock.includes(
          `--muted-foreground: color-mix(in srgb, var(--color-${palette}-500) 88%, var(--color-${palette}-950));`
        )
      );
      assert.ok(rootBlock.includes("--card: var(--background);"));
      assert.ok(
        darkBlock.includes(
          `--background: color-mix(in srgb, var(--color-${palette}-950) 95%, var(--color-${palette}-50));`
        )
      );
      assert.ok(
        darkBlock.includes(
          `--sidebar-border: color-mix(in srgb, var(--color-${palette}-50) 5%, var(--sidebar));`
        )
      );
      assert.ok(
        darkBlock.includes(
          `--muted-foreground: color-mix(in srgb, var(--color-${palette}-500) 88%, var(--color-${palette}-50));`
        )
      );
      assert.ok(!css.includes("--alpha("));
      assert.ok(!css.includes("transparent"));
    }
  });

  it("keeps the documented and installed neutral recipe in sync", () => {
    const expectedTokens = [
      "color-mix(in srgb, var(--color-neutral-950) 4%, var(--background))",
      "color-mix(in srgb, var(--color-neutral-950) 8%, var(--background))",
      "color-mix(in srgb, var(--color-neutral-50) 4%, var(--background))",
      "color-mix(in srgb, var(--color-neutral-50) 6%, var(--background))",
      "color-mix(in srgb, var(--color-neutral-950) 95%, var(--color-neutral-50))",
      "color-mix(in srgb, var(--color-neutral-500) 88%, var(--color-neutral-950))",
      "color-mix(in srgb, var(--color-neutral-500) 88%, var(--color-neutral-50))",
    ];
    const sources = [
      "styles/globals.css",
      "registry/manifest/style.ts",
      "content/docs/(root)/styling.mdx",
    ].map((path) => readFileSync(path, "utf8"));

    for (const source of sources) {
      for (const token of expectedTokens) {
        assert.ok(source.includes(token), `${token} missing from theme source`);
      }
      assert.ok(!source.includes("--alpha("));
    }
  });
});

describe("theme catalog lookups", () => {
  it("returns the catalog item for every selected value", () => {
    for (const color of BASE_COLORS) {
      assert.equal(getBaseColor(color.value), color);
    }

    for (const color of PRIMARY_COLORS) {
      assert.equal(getPrimaryColor(color.value), color);
    }

    for (const radius of BORDER_RADIUS) {
      assert.equal(getBorderRadius(radius.value), radius);
    }
  });

  it("rejects unknown catalog values", () => {
    assert.throws(
      () =>
        getBaseColor("not-a-color" as (typeof BASE_COLORS)[number]["value"]),
      { message: "Unknown base color: not-a-color" }
    );
    assert.throws(
      () =>
        getPrimaryColor(
          "not-a-color" as (typeof PRIMARY_COLORS)[number]["value"]
        ),
      { message: "Unknown primary color: not-a-color" }
    );
    assert.throws(
      () =>
        getBorderRadius(
          "not-a-radius" as (typeof BORDER_RADIUS)[number]["value"]
        ),
      { message: "Unknown border radius: not-a-radius" }
    );
  });

  it("emits a CSS fill for every primary color and tone", () => {
    assert.equal(getPrimaryFillCss("neutral", "light"), "var(--foreground)");
    assert.equal(getPrimaryFillCss("neutral", "dark"), "var(--foreground)");

    for (const color of PRIMARY_COLORS.filter(
      (item) => item.value !== "neutral"
    )) {
      for (const tone of PRIMARY_TONES) {
        const shade = getPrimaryToneShade(color.value, tone.value);

        assert.equal(
          getPrimaryFillCss(color.value, tone.value),
          `var(--color-${color.value}-${shade})`
        );
      }
    }
  });

  it("emits a CSS fill for every base color", () => {
    for (const color of BASE_COLORS) {
      assert.equal(
        getBaseFillCss(color.value),
        `var(--color-${color.value}-500)`
      );
    }
  });

  it("places the default catalog item first", () => {
    const ordered = withDefaultFirst(BASE_COLORS, "neutral");
    const [first] = ordered;

    assert.equal(first?.value, "neutral");
    assert.deepEqual(
      ordered.map((item) => item.value).toSorted(),
      BASE_COLORS.map((item) => item.value).toSorted()
    );
  });

  it("includes symbol and description for every radius", () => {
    const presentation = {
      lg: { description: "Large", symbol: "L" },
      md: { description: "Medium", symbol: "M" },
      none: { description: "None", symbol: "-" },
      sm: { description: "Small", symbol: "S" },
      xs: { description: "Extra small", symbol: "XS" },
    } as const;

    for (const radius of BORDER_RADIUS) {
      assert.equal(radius.symbol, presentation[radius.value].symbol);
      assert.equal(radius.description, presentation[radius.value].description);
    }
  });
});
