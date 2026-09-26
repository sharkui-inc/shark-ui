import assert from "node:assert/strict";
import { describe, it } from "node:test";
import {
  buildLLMIndexSection,
  createLLMIndexResponse,
  isLLMIndexName,
  LLM_INDEXES,
  type LLMDocPage,
} from "@/lib/llms";

const baseUrl = "https://example.test";
const formsDocsLink = /Forms\]\(https:\/\/example\.test\/docs\/forms\.md\)/;
const migrationLink =
  /From Radix\]\(https:\/\/example\.test\/docs\/migration\/radix\.md\)/;
const buttonComponentLink =
  /Button\]\(https:\/\/example\.test\/docs\/components\/button\.md\)/;
const fieldComponentLink =
  /Field\]\(https:\/\/example\.test\/docs\/components\/field\.md\)/;
const markdownLink = /\]\((https:\/\/[^)]+)\)/g;

const getMarkdownLinks = (content: string) =>
  [...content.matchAll(markdownLink)].map((match) => match[1]);

const pages: LLMDocPage[] = [
  {
    data: { description: "Copy-and-own components.", title: "Introduction" },
    slugs: [],
    url: "/docs",
  },
  {
    data: { description: "Install Shark UI.", title: "Installation" },
    slugs: ["installation"],
    url: "/docs/installation",
  },
  {
    data: { description: "Install with Next.js.", title: "Next.js" },
    slugs: ["installation", "next"],
    url: "/docs/installation/next",
  },
  {
    data: { description: "Button APIs.", title: "Button" },
    slugs: ["components", "button"],
    url: "/docs/components/button",
  },
  {
    data: { description: "Overlay content.", title: "Dialog" },
    slugs: ["components", "dialog"],
    url: "/docs/components/dialog",
  },
  {
    data: { description: "Collection selection.", title: "Select" },
    slugs: ["components", "select"],
    url: "/docs/components/select",
  },
  {
    data: { description: "Form labels and validation.", title: "Field" },
    slugs: ["components", "field"],
    url: "/docs/components/field",
  },
  {
    data: { description: "Styling guidance.", title: "Styling" },
    slugs: ["styling"],
    url: "/docs/styling",
  },
  {
    data: { description: "Form patterns.", title: "Forms" },
    slugs: ["forms"],
    url: "/docs/forms",
  },
  {
    data: { description: "Migration guidance.", title: "From Radix" },
    slugs: ["migration", "radix"],
    url: "/docs/migration/radix",
  },
  {
    data: { description: "Release notes.", title: "Release Candidate" },
    slugs: ["changelog", "release-candidate"],
    url: "/docs/changelog/release-candidate",
  },
];

describe("LLM indexes", () => {
  it("rejects unknown index names", () => {
    assert.equal(isLLMIndexName("handbook"), false);
    assert.equal(isLLMIndexName("guides"), false);
  });

  it("serves indexes as plain text", () => {
    const response = createLLMIndexResponse("ok");

    assert.equal(
      response.headers.get("Content-Type"),
      "text/plain; charset=utf-8"
    );
  });

  it("creates stable, complete indexes that link to Markdown pages", () => {
    const content = LLM_INDEXES.map((index) =>
      buildLLMIndexSection(index, pages, baseUrl)
    );
    const [foundations, installation, components, patterns, changelog] =
      content;
    const links = content.flatMap(getMarkdownLinks);
    const expectedLinks = pages.map((page) => `${baseUrl}${page.url}.md`);

    assert.deepEqual([...new Set(links)].sort(), [...expectedLinks].sort());
    assert.ok(links.every((link) => link.startsWith(`${baseUrl}/docs`)));
    assert.ok(links.every((link) => link.endsWith(".md")));
    assert.match(components, buttonComponentLink);
    assert.match(components, fieldComponentLink);
    assert.doesNotMatch(patterns, fieldComponentLink);
    assert.match(patterns, formsDocsLink);
    assert.match(patterns, migrationLink);
    assert.equal(buildLLMIndexSection("patterns", pages, baseUrl), patterns);
    assert.ok(
      foundations.length > 0 && installation.length > 0 && changelog.length > 0
    );
  });
});
