import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { join } from "node:path";
import { describe, it } from "node:test";
import { createMetadata } from "@/lib/metadata";

interface VercelConfig {
  headers: Array<{
    headers: Array<{ key: string; value: string }>;
    source: string;
  }>;
  routes: Array<{ src: string }>;
}

const root = process.cwd();
const designContract = readFileSync(join(root, "public/design.md"), "utf8");
const designHeading = /^# Shark UI Design Contract\n/m;
const arkAndTailwind = /Ark UI and Tailwind CSS v4/;
const semanticTokens = /semantic Tailwind/;
const concreteTokens =
  /bg-background.*text-foreground.*border-input.*ring-ring/;
const logicalDirections = /logical direction utilities/;
const consistencyRule =
  /arbitrary colors, corner radii, font families, overlay z-index values/;
const vercelConfig = JSON.parse(
  readFileSync(join(root, "vercel.json"), "utf8")
) as VercelConfig;

describe("agent-facing assets", () => {
  it("publishes a concise design contract", () => {
    assert.match(designContract, designHeading);
    assert.match(designContract, arkAndTailwind);
    assert.match(designContract, semanticTokens);
    assert.match(designContract, concreteTokens);
    assert.match(designContract, logicalDirections);
    assert.match(designContract, consistencyRule);
  });

  it("serves design.md as Markdown and protects it from training crawlers", () => {
    const designHeaders = vercelConfig.headers.find(
      (header) => header.source === "/design.md"
    );
    const crawlerRoute = vercelConfig.routes.find((route) =>
      route.src.includes("llms")
    );

    assert.deepEqual(designHeaders?.headers, [
      { key: "Content-Type", value: "text/markdown; charset=utf-8" },
    ]);
    assert.deepEqual(
      vercelConfig.headers.find((header) => header.source === "/docs/:path*")
        ?.headers,
      [{ key: "Link", value: '</llms.txt>; rel="describedby"' }]
    );
    assert.ok(crawlerRoute?.src.includes("design\\.md"));
  });

  it("announces Markdown alternatives for documentation pages", () => {
    const metadata = createMetadata({
      markdownUrl: "/docs/components/button.md",
      url: "/docs/components/button",
    });

    assert.deepEqual(metadata.alternates, {
      canonical: "https://shark-ui.com/docs/components/button",
      types: {
        "text/markdown": "https://shark-ui.com/docs/components/button.md",
      },
    });
  });
});
