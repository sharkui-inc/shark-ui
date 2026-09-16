import assert from "node:assert/strict";
import { after, describe, it } from "node:test";
import { SITE_CONFIG } from "@/config/site";
import { absoluteUrl } from "@/lib/url";

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

  it("joins NEXT_PUBLIC_SITE_URL without a double slash", () => {
    delete process.env.VERCEL_URL;
    process.env.NEXT_PUBLIC_SITE_URL = "https://example.test/";
    assert.equal(
      absoluteUrl("/r/button.json"),
      "https://example.test/r/button.json"
    );
  });

  it("uses VERCEL_URL before NEXT_PUBLIC_SITE_URL", () => {
    process.env.NEXT_PUBLIC_SITE_URL = "https://example.test";
    process.env.VERCEL_URL = "preview-shark-ui.vercel.app/";

    assert.equal(
      absoluteUrl("docs/components/button.md"),
      "https://preview-shark-ui.vercel.app/docs/components/button.md"
    );
  });

  it("preserves the protocol when VERCEL_URL includes one", () => {
    delete process.env.NEXT_PUBLIC_SITE_URL;
    process.env.VERCEL_URL = "http://localhost:3000/";

    assert.equal(absoluteUrl("/docs"), "http://localhost:3000/docs");
  });

  it("falls back to SITE_CONFIG.url when env is unset", () => {
    delete process.env.NEXT_PUBLIC_SITE_URL;
    delete process.env.VERCEL_URL;
    assert.equal(absoluteUrl("/docs"), `${SITE_CONFIG.url}/docs`);
  });
});
