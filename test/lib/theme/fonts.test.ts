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
  THEME_FONTS,
} from "@/lib/theme/fonts";

const NEWSREADER_CSS_AXES = /family=Newsreader:wght@/u;
const WEIGHT_AXIS = /wght@/u;
const ITALIC_AXIS = /ital,/u;

describe("theme fonts", () => {
  it("keeps Shark UI's active fonts as the defaults", () => {
    assert.equal(DEFAULT_FONT_SANS, "hanken-grotesk");
    assert.equal(DEFAULT_FONT_HEADING, "figtree");
  });

  it("exposes one catalog for heading and sans", () => {
    assert.equal(THEME_FONTS.length, 23);
    assert.ok(isThemeFontName("inter"));
    assert.ok(isThemeFontName("newsreader"));
    assert.ok(isThemeFontName("ibm-plex-mono"));
    assert.ok(isThemeFontName("public-sans"));
    assert.ok(isThemeFontName("fraunces"));
    assert.equal(isThemeFontName("fredoka"), false);
    assert.equal(isThemeFontName("instrument-serif"), false);
    assert.equal(isThemeFontName("playfair-display"), false);
    assert.equal(isThemeFontName("not-a-font"), false);
    assert.equal(getThemeFont("inter").label, "Inter");
    assert.equal(getThemeFont("inter").family, "'Inter', sans-serif");
  });

  it("requests UI weight axes without italic", () => {
    assert.equal(
      getThemeFont("ibm-plex-sans").cssUrl,
      "https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400..700&display=swap"
    );
    assert.equal(
      getThemeFont("source-sans-3").cssUrl,
      "https://fonts.googleapis.com/css2?family=Source+Sans+3:wght@400..700&display=swap"
    );
    assert.equal(
      getThemeFont("lora").cssUrl,
      "https://fonts.googleapis.com/css2?family=Lora:wght@400..700&display=swap"
    );
    assert.match(getThemeFont("newsreader").cssUrl, NEWSREADER_CSS_AXES);
    assert.equal(getThemeFont("ibm-plex-sans").axes, "wght@400..700");
    assert.equal(getThemeFont("dm-mono").axes, "wght@400;500");

    for (const font of THEME_FONTS) {
      assert.match(font.cssUrl, WEIGHT_AXIS);
      assert.equal(ITALIC_AXIS.test(font.cssUrl), false);
    }
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
  });

  it("adds only active font stylesheets and removes stale ones", () => {
    applyThemeFonts({
      fontHeading: "lora",
      fontSans: "inter",
    });

    const fontLinks = document.querySelectorAll<HTMLLinkElement>(
      "link[data-shark-theme-font]"
    );

    assert.equal(fontLinks.length, 2);

    for (const link of fontLinks) {
      assert.equal(link.rel, "stylesheet");
      assert.equal(link.media, "print");
    }
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

  it("loads a single preview stylesheet that survives active font cleanup", () => {
    loadThemeFontPreviews();
    loadThemeFontPreviews();

    assert.equal(
      document.querySelectorAll("link[data-shark-theme-font-preview]").length,
      1
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
      1
    );
    assert.equal(
      document.querySelectorAll("link[data-shark-theme-font]").length,
      0
    );
  });
});
