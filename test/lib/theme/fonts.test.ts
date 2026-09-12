import assert from "node:assert/strict";
import { describe, it } from "node:test";
import {
  applyThemeFonts,
  getDynamicThemeFonts,
  loadThemeFontPreviews,
} from "@/lib/theme/apply";
import {
  DEFAULT_FONT_HEADING,
  DEFAULT_FONT_SANS,
  getThemeFont,
  isThemeFontName,
  isThemeHeadingFontName,
  isThemeSansFontName,
  THEME_FONTS,
  THEME_FONTS_HEADING,
  THEME_FONTS_SANS,
} from "@/lib/theme/fonts";

describe("theme fonts", () => {
  it("keeps Shark UI's active fonts as the defaults", () => {
    assert.equal(DEFAULT_FONT_SANS, "hanken-grotesk");
    assert.equal(DEFAULT_FONT_HEADING, "figtree");
  });

  it("assigns fonts to role-specific slots", () => {
    assert.equal(THEME_FONTS_SANS.length, 18);
    assert.equal(THEME_FONTS_HEADING.length, 21);
    assert.ok(isThemeFontName("inter"));
    assert.ok(isThemeSansFontName("inter"));
    assert.ok(isThemeHeadingFontName("newsreader"));
    assert.ok(isThemeSansFontName("ibm-plex-mono"));
    assert.ok(isThemeHeadingFontName("ibm-plex-mono"));
    assert.ok(isThemeSansFontName("jetbrains-mono"));
    assert.ok(isThemeHeadingFontName("geist-mono"));
    assert.equal(isThemeSansFontName("fraunces"), false);
    assert.equal(isThemeHeadingFontName("public-sans"), false);
    assert.equal(isThemeFontName("fredoka"), false);
    assert.equal(isThemeFontName("instrument-serif"), false);
    assert.equal(isThemeFontName("playfair-display"), false);
    assert.equal(isThemeFontName("not-a-font"), false);
  });

  it("only requests selected non-default fonts once", () => {
    assert.deepEqual(
      getDynamicThemeFonts({
        fontHeading: "inter",
        fontSans: "inter",
      }),
      ["inter"]
    );
    assert.deepEqual(
      getDynamicThemeFonts({
        fontHeading: DEFAULT_FONT_HEADING,
        fontSans: DEFAULT_FONT_SANS,
      }),
      []
    );
    assert.equal(getThemeFont("inter").label, "Inter");
  });

  it("adds only active font stylesheets and removes stale ones", () => {
    applyThemeFonts({
      fontHeading: "lora",
      fontSans: "inter",
    });

    assert.equal(
      document.querySelectorAll("link[data-shark-theme-font]").length,
      2
    );
    assert.equal(
      document.documentElement.style.getPropertyValue("--font-sans"),
      "'Inter', sans-serif"
    );
    assert.equal(
      document.documentElement.style.getPropertyValue("--font-mono"),
      ""
    );

    applyThemeFonts({
      fontHeading: DEFAULT_FONT_HEADING,
      fontSans: DEFAULT_FONT_SANS,
    });

    assert.equal(
      document.querySelectorAll("link[data-shark-theme-font]").length,
      0
    );
    assert.equal(
      document.documentElement.style.getPropertyValue("--font-sans"),
      ""
    );
  });

  it("loads preview stylesheets that survive active font cleanup", () => {
    loadThemeFontPreviews();

    assert.equal(
      document.querySelectorAll("link[data-shark-theme-font-preview]").length,
      THEME_FONTS.length
    );

    applyThemeFonts({
      fontHeading: "lora",
      fontSans: "inter",
    });
    applyThemeFonts({
      fontHeading: DEFAULT_FONT_HEADING,
      fontSans: DEFAULT_FONT_SANS,
    });

    assert.equal(
      document.querySelectorAll("link[data-shark-theme-font-preview]").length,
      THEME_FONTS.length
    );
    assert.equal(
      document.querySelectorAll("link[data-shark-theme-font]").length,
      0
    );
  });
});
