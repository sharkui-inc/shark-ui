import assert from "node:assert/strict";
import { afterEach, beforeEach, describe, it } from "node:test";
import { createStore } from "jotai/vanilla";
import { applyThemePreset, THEME_PRESETS } from "@/lib/theme/config";
import {
  type Config,
  configAtom,
  DEFAULT_BASE_COLOR,
  DEFAULT_BORDER_RADIUS,
  DEFAULT_FONT_HEADING,
  DEFAULT_FONT_SANS,
  DEFAULT_PRIMARY_COLOR,
  DEFAULT_PRIMARY_TONE,
  DEFAULT_THEME_LOCKS,
  normalizeConfig,
  updateConfigAtom,
} from "@/store/config";

const storageKey = "config";

const savedConfig: Config = {
  baseColor: "zinc",
  borderRadius: "lg",
  fontHeading: "inter",
  fontSans: "lora",
  installationMethod: "manual",
  packageManager: "bun",
  primaryColor: "rose",
  primaryTone: "dark",
  themeLocks: {
    baseColor: true,
    borderRadius: false,
    fontHeading: false,
    fontSans: true,
    primaryColor: false,
    primaryTone: false,
  },
};

const mountConfigAtom = (store: ReturnType<typeof createStore>) =>
  store.sub(configAtom, () => undefined);

beforeEach(() => {
  Object.assign(globalThis, { localStorage: window.localStorage });
  window.localStorage.clear();
});

afterEach(() => {
  window.localStorage.clear();
});

describe("configAtom", () => {
  it("rehydrates a valid stored configuration", () => {
    window.localStorage.setItem(storageKey, JSON.stringify(savedConfig));
    const store = createStore();
    const unsubscribe = mountConfigAtom(store);

    assert.deepEqual(store.get(configAtom), savedConfig);

    unsubscribe();
  });

  it("rehydrates the Alga theme preset", () => {
    const alga = THEME_PRESETS.find((preset) => preset.label === "Alga");

    assert.ok(alga);
    window.localStorage.setItem(
      storageKey,
      JSON.stringify(applyThemePreset(alga))
    );
    const store = createStore();
    const unsubscribe = mountConfigAtom(store);
    const config = store.get(configAtom);

    assert.equal(config.baseColor, "olive");
    assert.equal(config.borderRadius, "sm");
    assert.equal(config.fontHeading, "lora");
    assert.equal(config.fontSans, "source-sans-3");
    assert.equal(config.primaryColor, "lime");
    assert.equal(config.primaryTone, "light");

    unsubscribe();
  });

  it("migrates the legacy grayColor field when writing the next update", () => {
    window.localStorage.setItem(
      storageKey,
      JSON.stringify({ grayColor: "zinc" })
    );
    const store = createStore();
    const unsubscribe = mountConfigAtom(store);

    store.set(updateConfigAtom, { borderRadius: "lg" });

    assert.deepEqual(
      JSON.parse(window.localStorage.getItem(storageKey) ?? ""),
      {
        ...store.get(configAtom),
        baseColor: "zinc",
        borderRadius: "lg",
      }
    );

    unsubscribe();
  });

  it("falls back safely when storage is malformed or contains invalid values", () => {
    window.localStorage.setItem(storageKey, "{");
    const malformedStore = createStore();
    const unsubscribeMalformed = mountConfigAtom(malformedStore);

    assert.equal(malformedStore.get(configAtom).baseColor, DEFAULT_BASE_COLOR);

    unsubscribeMalformed();
    window.localStorage.setItem(
      storageKey,
      JSON.stringify({
        baseColor: "not-a-color",
        borderRadius: "huge",
        fontHeading: "unknown",
        fontSans: "unknown",
        primaryColor: "unknown",
        primaryTone: "unknown",
        themeLocks: { baseColor: "yes" },
      })
    );
    const invalidStore = createStore();
    const unsubscribeInvalid = mountConfigAtom(invalidStore);

    assert.deepEqual(invalidStore.get(configAtom), {
      ...invalidStore.get(configAtom),
      baseColor: DEFAULT_BASE_COLOR,
      borderRadius: DEFAULT_BORDER_RADIUS,
      fontHeading: DEFAULT_FONT_HEADING,
      fontSans: DEFAULT_FONT_SANS,
      primaryColor: DEFAULT_PRIMARY_COLOR,
      primaryTone: DEFAULT_PRIMARY_TONE,
      themeLocks: DEFAULT_THEME_LOCKS,
    });
    assert.equal(normalizeConfig(null).baseColor, DEFAULT_BASE_COLOR);
    assert.equal(normalizeConfig([]).borderRadius, DEFAULT_BORDER_RADIUS);

    unsubscribeInvalid();
  });

  it("persists functional updates against the current configuration", () => {
    const store = createStore();
    const unsubscribe = mountConfigAtom(store);

    store.set(updateConfigAtom, (current) => ({
      baseColor: current.baseColor === "neutral" ? "zinc" : "neutral",
      primaryColor: "rose",
    }));

    assert.deepEqual(
      JSON.parse(window.localStorage.getItem(storageKey) ?? ""),
      {
        ...store.get(configAtom),
        baseColor: "zinc",
        primaryColor: "rose",
      }
    );

    unsubscribe();
  });

  it("does not write when a functional update returns undefined", () => {
    window.localStorage.setItem(storageKey, JSON.stringify(savedConfig));
    const store = createStore();
    const unsubscribe = mountConfigAtom(store);
    const before = window.localStorage.getItem(storageKey);

    store.set(updateConfigAtom, () => undefined);

    assert.equal(window.localStorage.getItem(storageKey), before);

    unsubscribe();
  });
});
