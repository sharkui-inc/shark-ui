import assert from "node:assert/strict";
import { after, describe, it } from "node:test";
import { SITE_CONFIG } from "@/config/site";
import { absoluteUrl, registryUrl } from "@/lib/url";

describe("absoluteUrl", () => {
  const previousSiteUrl = process.env.NEXT_PUBLIC_SITE_URL;
  const previousVercelUrl = process.env.VERCEL_URL;

  after(() => {
    if (previousSiteUrl === undefined) {
      delete process.env.NEXT_PUBLIC_SITE_URL;
    } else {
      process.env.NEXT_PUBLIC_SITE_URL = previousSiteUrl;
    }

    if (previousVercelUrl === undefined) {
      delete process.env.VERCEL_URL;
    } else {
      process.env.VERCEL_URL = previousVercelUrl;
    }
  });

  it("uses SITE_CONFIG.url even when NEXT_PUBLIC_SITE_URL is set", () => {
    process.env.NEXT_PUBLIC_SITE_URL = "https://shark.vini.one/";
    process.env.VERCEL_URL = "preview-shark-ui.vercel.app/";

    assert.equal(
      absoluteUrl("/docs/components/button"),
      `${SITE_CONFIG.url}/docs/components/button`
    );
  });

  it("ignores VERCEL_URL", () => {
    delete process.env.NEXT_PUBLIC_SITE_URL;
    process.env.VERCEL_URL = "preview-shark-ui.vercel.app/";

    assert.equal(absoluteUrl("/docs"), `${SITE_CONFIG.url}/docs`);
  });

  it("joins paths without a double slash", () => {
    assert.equal(
      absoluteUrl("/r/button.json"),
      `${SITE_CONFIG.url}/r/button.json`
    );
  });

  it("joins paths that omit a leading slash", () => {
    assert.equal(
      absoluteUrl("docs/components/button.md"),
      `${SITE_CONFIG.url}/docs/components/button.md`
    );
  });

  it("uses the canonical site URL for registry artifacts", () => {
    process.env.NEXT_PUBLIC_SITE_URL = "https://example.test";
    process.env.VERCEL_URL = "preview-shark-ui.vercel.app/";

    assert.equal(
      registryUrl("/r/button.json"),
      `${SITE_CONFIG.url}/r/button.json`
    );
  });
});
