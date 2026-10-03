import assert from "node:assert/strict";
import { afterEach, beforeEach, describe, it } from "node:test";
import {
  applyBodyThemeClasses,
  applyThemeFonts,
  hasManagedBodyThemeClass,
  isManagedThemeClass,
  themeBootstrapScript,
} from "@/lib/theme/apply";
import { PRIMARY_COLORS } from "@/lib/theme/catalog";
import {
  applyThemePreset,
  createVisualThemeLists,
  DEFAULT_PRIMARY_COLOR,
  DEFAULT_THEME_CONFIG,
  normalizeThemeConfig,
  pickVisualTheme,
  THEME_PRESETS,
} from "@/lib/theme/config";

const storageKey = "config";

const runBootstrap = () => {
  Function(themeBootstrapScript)();
};

beforeEach(() => {
  document.body.className = "";
  document.documentElement.removeAttribute("style");
  for (const link of document.head.querySelectorAll(
    "link[data-shark-theme-font]"
  )) {
    link.remove();
  }
  window.localStorage.clear();
});

afterEach(() => {
  window.localStorage.clear();
});

describe("isManagedThemeClass", () => {
  it("treats generated theme classes as managed", () => {
    assert.equal(isManagedThemeClass("theme-red"), true);
    assert.equal(isManagedThemeClass("theme-neutral"), true);
    assert.equal(isManagedThemeClass("primary-tone-dark"), true);
    assert.equal(isManagedThemeClass("bg-zinc"), true);
    assert.equal(isManagedThemeClass("radius-md"), true);
    assert.equal(isManagedThemeClass("dark"), false);
    assert.equal(isManagedThemeClass("light"), false);
  });

  it("leaves unrelated body classes alone", () => {
    assert.equal(isManagedThemeClass("relative"), false);
    assert.equal(isManagedThemeClass("bg-grid"), false);
    assert.equal(isManagedThemeClass("radius-custom"), false);
  });

  it("replaces only theme classes on the body", () => {
    document.body.className = "bg-grid theme-red radius-sm primary-tone-dark";

    applyBodyThemeClasses({
      baseColor: "zinc",
      borderRadius: "lg",
      primaryColor: "rose",
      primaryTone: "light",
    });

    assert.equal(document.body.classList.contains("bg-grid"), true);
    assert.equal(document.body.classList.contains("theme-red"), false);
    assert.equal(document.body.classList.contains("radius-sm"), false);
    assert.equal(document.body.classList.contains("primary-tone-dark"), false);
    assert.equal(document.body.classList.contains("bg-zinc"), true);
    assert.equal(document.body.classList.contains("radius-lg"), true);
    assert.equal(document.body.classList.contains("theme-rose"), true);
    assert.equal(document.body.classList.contains("primary-tone-light"), true);
  });

  it("strips leftover theme-neutral and omits it for the default primary", () => {
    document.body.className = "theme-rose theme-neutral";

    applyBodyThemeClasses({
      baseColor: "slate",
      borderRadius: "md",
      primaryColor: DEFAULT_PRIMARY_COLOR,
      primaryTone: "light",
    });

    assert.equal(document.body.classList.contains("theme-rose"), false);
    assert.equal(document.body.classList.contains("theme-neutral"), false);
    assert.equal(document.body.classList.contains("bg-slate"), true);
  });

  it("detects classes supplied by the static bootstrap", () => {
    document.body.className = "bg-zinc theme-rose radius-lg primary-tone-dark";

    assert.equal(hasManagedBodyThemeClass(), true);

    document.body.className = "bg-grid relative";

    assert.equal(hasManagedBodyThemeClass(), false);
  });
});

describe("themeBootstrapScript", () => {
  it("applies valid theme values and selected fonts before hydration", () => {
    window.localStorage.setItem(
      storageKey,
      JSON.stringify({
        baseColor: "zinc",
        borderRadius: "lg",
        fontHeading: "hanken-grotesk",
        fontSans: "figtree",
        primaryColor: "rose",
        primaryTone: "dark",
      })
    );

    runBootstrap();

    assert.ok(document.body.classList.contains("bg-zinc"));
    assert.ok(document.body.classList.contains("radius-lg"));
    assert.ok(document.body.classList.contains("theme-rose"));
    assert.ok(document.body.classList.contains("primary-tone-dark"));
    assert.equal(
      document.documentElement.style.getPropertyValue("--font-heading"),
      "'Hanken Grotesk', sans-serif"
    );
    assert.equal(
      document.documentElement.style.getPropertyValue("--font-sans"),
      "'Figtree', sans-serif"
    );
    assert.equal(
      document.documentElement.style.getPropertyValue("--font-mono"),
      ""
    );
    assert.equal(
      document.querySelectorAll("link[data-shark-theme-font]").length,
      2
    );
  });

  it("migrates grayColor and ignores unknown values", () => {
    window.localStorage.setItem(
      storageKey,
      JSON.stringify({
        fontSans: "unknown",
        grayColor: "zinc",
        primaryColor: "invalid",
      })
    );

    runBootstrap();

    assert.ok(document.body.classList.contains("bg-zinc"));
    assert.equal(document.body.classList.contains("theme-neutral"), false);
    assert.equal(document.body.classList.contains("theme-invalid"), false);
    assert.equal(
      document.querySelectorAll("link[data-shark-theme-font]").length,
      0
    );
  });

  it("does not duplicate font links when the provider synchronizes", () => {
    window.localStorage.setItem(
      storageKey,
      JSON.stringify({ fontHeading: "inter", fontSans: "lora" })
    );

    runBootstrap();
    applyThemeFonts({
      fontHeading: "inter",
      fontSans: "lora",
    });

    assert.equal(
      document.querySelectorAll("link[data-shark-theme-font]").length,
      2
    );
  });

  it("fails open when storage contains malformed JSON", () => {
    window.localStorage.setItem(storageKey, "{");

    assert.doesNotThrow(runBootstrap);
    assert.equal(document.body.className, "");
  });

  it("fails open when localStorage is unavailable", () => {
    const descriptor = Object.getOwnPropertyDescriptor(window, "localStorage");

    Object.defineProperty(window, "localStorage", {
      configurable: true,
      get: () => {
        throw new Error("Storage is unavailable");
      },
    });

    try {
      assert.doesNotThrow(runBootstrap);
      assert.equal(document.body.className, "");
    } finally {
      if (descriptor) {
        Object.defineProperty(window, "localStorage", descriptor);
      }
    }
  });
});

describe("bootstrap pick contract", () => {
  const lists = createVisualThemeLists({
    baseColor: DEFAULT_THEME_CONFIG.baseColor,
    borderRadius: DEFAULT_THEME_CONFIG.borderRadius,
    fontHeading: DEFAULT_THEME_CONFIG.fontHeading,
    fontSans: DEFAULT_THEME_CONFIG.fontSans,
    primaryColor: DEFAULT_THEME_CONFIG.primaryColor,
    primaryTone: DEFAULT_THEME_CONFIG.primaryTone,
  });

  const assertBodyMatchesPick = (payload: unknown) => {
    window.localStorage.setItem(storageKey, JSON.stringify(payload));
    runBootstrap();

    const pick = pickVisualTheme(payload, lists);
    const normalized = normalizeThemeConfig(payload);

    assert.equal(pick.baseColor, normalized.baseColor);
    assert.equal(pick.borderRadius, normalized.borderRadius);
    assert.equal(pick.fontHeading, normalized.fontHeading);
    assert.equal(pick.fontSans, normalized.fontSans);
    assert.equal(pick.primaryColor, normalized.primaryColor);
    assert.equal(pick.primaryTone, normalized.primaryTone);
    assert.ok(document.body.classList.contains(`bg-${pick.baseColor}`));
    assert.ok(document.body.classList.contains(`radius-${pick.borderRadius}`));
    assert.ok(
      document.body.classList.contains(`primary-tone-${pick.primaryTone}`)
    );

    if (pick.primaryColor === DEFAULT_PRIMARY_COLOR) {
      for (const { value } of PRIMARY_COLORS) {
        assert.equal(document.body.classList.contains(`theme-${value}`), false);
      }
      return;
    }

    assert.ok(document.body.classList.contains(`theme-${pick.primaryColor}`));
  };

  it("matches normalizeThemeConfig for the Alga preset", () => {
    const alga = THEME_PRESETS.find((preset) => preset.label === "Alga");

    assert.ok(alga);
    assertBodyMatchesPick(applyThemePreset(alga));
  });

  it("matches normalizeThemeConfig when migrating grayColor", () => {
    assertBodyMatchesPick({ grayColor: "zinc" });
  });

  it("matches normalizeThemeConfig for invalid values", () => {
    assertBodyMatchesPick({
      baseColor: "unknown",
      borderRadius: "huge",
      fontHeading: "unknown",
      fontSans: "unknown",
      primaryColor: "invalid",
      primaryTone: "unknown",
    });
  });

  it("does not apply classes when storage is malformed", () => {
    window.localStorage.setItem(storageKey, "{");

    assert.doesNotThrow(runBootstrap);
    assert.equal(document.body.className, "");
  });
});
