import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { join } from "node:path";
import { describe, it } from "node:test";
import { SITE_CONFIG } from "@/config/site";

describe("sitemap source", () => {
  it("does not schedule private catalogs or demo surfaces", () => {
    const source = readFileSync(join(process.cwd(), "app/sitemap.ts"), "utf8");

    assert.equal(SITE_CONFIG.url, "https://shark-ui.com");
    assert.equal(source.includes('"/blocks'), false);
    assert.equal(source.includes("'/blocks"), false);
    assert.equal(source.includes('"/templates'), false);
    assert.equal(source.includes('"/view'), false);
    assert.equal(source.includes('absoluteUrl("/")'), true);
    assert.equal(source.includes('absoluteUrl("/themes")'), true);
    assert.equal(source.includes("source.getPages()"), true);
  });
});
