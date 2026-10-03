import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { createRuntimeThemeCss } from "@/scripts/build-themes.mts";

const HEADER = "/* Generated from scripts/build-themes.mts. Do not edit. */";
const LOCALHOST_RE = /localhost|127\.0\.0\.1/i;

describe("createRuntimeThemeCss", () => {
  it("starts with the generated-file header", () => {
    const css = createRuntimeThemeCss();
    assert.ok(css.startsWith(`${HEADER}\n`));
  });

  it("emits theme and dark theme selectors", () => {
    const css = createRuntimeThemeCss();
    assert.ok(css.includes(".theme-blue {"));
    assert.ok(css.includes(".dark body.theme-blue {"));
  });

  it("emits primary-tone-dark rules", () => {
    const css = createRuntimeThemeCss();
    assert.ok(css.includes("body.primary-tone-dark.theme-blue {"));
    assert.ok(css.includes(".dark body.primary-tone-dark.theme-blue {"));
  });

  it("emits base palette aliases and dark variants", () => {
    const css = createRuntimeThemeCss();
    assert.ok(css.includes(".bg-slate {"));
    assert.ok(css.includes("--theme-color-500: var(--color-slate-500);"));
    assert.ok(css.includes("@variant dark {"));
  });

  it("emits radius rules", () => {
    const css = createRuntimeThemeCss();
    assert.ok(css.includes(".radius-md {"));
    assert.ok(css.includes("--radius:"));
  });

  it("does not include localhost URLs", () => {
    assert.equal(LOCALHOST_RE.test(createRuntimeThemeCss()), false);
  });

  it("is deterministic across calls", () => {
    assert.equal(createRuntimeThemeCss(), createRuntimeThemeCss());
  });
});
