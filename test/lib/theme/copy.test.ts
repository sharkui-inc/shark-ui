import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { createCssVars } from "@/lib/theme/catalog";
import {
  createNextFontSnippet,
  createThemeFontInstallCommand,
  getThemeFontInstall,
} from "@/lib/theme/copy";
import { getThemeFont } from "@/lib/theme/fonts";

describe("theme copy helpers", () => {
  it("exports only the selected theme tokens", () => {
    const css = createCssVars({
      baseColor: "neutral",
      borderRadius: "md",
      primaryColor: "neutral",
    });

    assert.equal(css.includes("@import"), false);
    assert.equal(css.includes("--font-sans"), false);
    assert.equal(css.includes("--font-heading"), false);
    assert.ok(css.includes(":root {"));
    assert.ok(css.includes("--background:"));
    assert.ok(css.includes(".dark {"));
  });

  it("includes the selected primary tone", () => {
    const css = createCssVars({
      baseColor: "neutral",
      borderRadius: "md",
      primaryColor: "blue",
      primaryTone: "dark",
    });

    assert.ok(css.includes("--background:"));
    assert.ok(css.includes("--primary: var(--color-blue-600)"));
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
