import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { createCssVars } from "@/lib/theme/catalog";

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
});
