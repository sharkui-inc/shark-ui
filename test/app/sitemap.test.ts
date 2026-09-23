import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { join } from "node:path";
import { describe, it } from "node:test";
import { SITE_CONFIG } from "@/config/site";

describe("sitemap source", () => {
  it("schedules public catalogs and excludes demo surfaces", () => {
    const source = readFileSync(join(process.cwd(), "app/sitemap.ts"), "utf8");

    assert.equal(SITE_CONFIG.url, "https://shark-ui.com");
    assert.equal(source.includes('absoluteUrl("/blocks")'), true);
    assert.equal(source.includes('absoluteUrl("/templates")'), true);
    assert.equal(source.includes('"/view'), false);
    assert.equal(source.includes('absoluteUrl("/")'), true);
    assert.equal(source.includes('absoluteUrl("/themes")'), true);
    assert.equal(source.includes("source.getPages()"), true);
  });
});
