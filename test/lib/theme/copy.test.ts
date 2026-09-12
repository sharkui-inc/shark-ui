import assert from "node:assert/strict";
import { describe, it } from "node:test";
import {
  BASE_COLORS,
  BORDER_RADIUS,
  PRIMARY_COLORS,
} from "@/lib/theme/catalog";
import {
  createNextFontSnippet,
  createThemeExportCss,
  createThemeFontInstallCommand,
  getThemeFontInstall,
  uniqueThemeFonts,
} from "@/lib/theme/copy";
import { getThemeFont } from "@/lib/theme/fonts";

const byValue = <T extends { value: string }>(
  items: readonly T[],
  value: string
) => {
  const item = items.find((entry) => entry.value === value);

  assert.ok(item, `missing catalog item ${value}`);

  return item;
};

const primary = byValue(PRIMARY_COLORS, "neutral");
const base = byValue(BASE_COLORS, "neutral");
const radius = byValue(BORDER_RADIUS, "md");

describe("theme copy helpers", () => {
  it("imports each selected font once and writes font variables", () => {
    const css = createThemeExportCss(
      primary.cssVars,
      base.cssVars,
      radius.cssVars,
      {
        fontHeading: "figtree",
        fontSans: "hanken-grotesk",
      }
    );
    const sans = getThemeFont("hanken-grotesk");
    const heading = getThemeFont("figtree");

    assert.equal(
      css.startsWith(
        `@import url("${sans.cssUrl}");\n@import url("${heading.cssUrl}");`
      ),
      true
    );
    assert.ok(css.includes("--font-sans: 'Hanken Grotesk', sans-serif;"));
    assert.ok(css.includes("--font-heading: 'Figtree', sans-serif;"));
    assert.ok(css.includes(":root {"));
    assert.ok(css.includes("--background:"));
    assert.ok(css.includes(".dark {"));
  });

  it("dedupes font imports when heading and sans share a face", () => {
    const css = createThemeExportCss(
      primary.cssVars,
      base.cssVars,
      radius.cssVars,
      {
        fontHeading: "inter",
        fontSans: "inter",
      }
    );
    const inter = getThemeFont("inter");
    const importCount = css.split(`@import url("${inter.cssUrl}");`).length - 1;

    assert.equal(importCount, 1);
    assert.deepEqual(
      uniqueThemeFonts({ fontHeading: "inter", fontSans: "inter" }).map(
        (font) => font.value
      ),
      ["inter"]
    );
  });

  it("maps variable Google fonts to fontsource-variable packages", () => {
    assert.deepEqual(getThemeFontInstall(getThemeFont("figtree")), {
      fontsource: "@fontsource-variable/figtree",
      nextFont: "Figtree",
    });
    assert.deepEqual(getThemeFontInstall(getThemeFont("hanken-grotesk")), {
      fontsource: "@fontsource-variable/hanken-grotesk",
      nextFont: "Hanken_Grotesk",
    });
    assert.deepEqual(getThemeFontInstall(getThemeFont("source-sans-3")), {
      fontsource: "@fontsource-variable/source-sans-3",
      nextFont: "Source_Sans_3",
    });
    assert.deepEqual(getThemeFontInstall(getThemeFont("newsreader")), {
      fontsource: "@fontsource-variable/newsreader",
      nextFont: "Newsreader",
    });
  });

  it("maps static Google fonts to fontsource packages", () => {
    assert.deepEqual(getThemeFontInstall(getThemeFont("dm-mono")), {
      fontsource: "@fontsource/dm-mono",
      nextFont: "DM_Mono",
    });
    assert.deepEqual(getThemeFontInstall(getThemeFont("ibm-plex-mono")), {
      fontsource: "@fontsource/ibm-plex-mono",
      nextFont: "IBM_Plex_Mono",
    });
  });

  it("builds a deduped npm install command", () => {
    assert.equal(
      createThemeFontInstallCommand({
        fontHeading: "figtree",
        fontSans: "hanken-grotesk",
      }),
      "npm install @fontsource-variable/hanken-grotesk @fontsource-variable/figtree"
    );
    assert.equal(
      createThemeFontInstallCommand({
        fontHeading: "inter",
        fontSans: "inter",
      }),
      "npm install @fontsource-variable/inter"
    );
  });

  it("builds a next/font snippet for distinct heading and sans faces", () => {
    const snippet = createNextFontSnippet({
      fontHeading: "figtree",
      fontSans: "hanken-grotesk",
    });

    assert.equal(
      snippet.includes(
        'import { Figtree, Hanken_Grotesk } from "next/font/google";'
      ),
      true
    );
    assert.ok(snippet.includes('variable: "--font-sans"'));
    assert.ok(snippet.includes('variable: "--font-heading"'));
    assert.ok(snippet.includes("const fontSans = Hanken_Grotesk("));
    assert.ok(snippet.includes("const fontHeading = Figtree("));
  });

  it("reuses one next/font import when both slots share a face", () => {
    const snippet = createNextFontSnippet({
      fontHeading: "inter",
      fontSans: "inter",
    });

    assert.equal(
      snippet.includes('import { Inter } from "next/font/google";'),
      true
    );
    assert.equal(snippet.includes("Figtree"), false);
    assert.ok(snippet.includes("const fontSans = Inter("));
    assert.ok(snippet.includes("const fontHeading = Inter("));
  });
});
