import { SITE_CONFIG } from "@/config/site";

export const LLM_INDEXES = [
  "foundations",
  "installation",
  "components",
  "patterns",
  "changelog",
] as const;

export type LLMIndexName = (typeof LLM_INDEXES)[number];

export const LLM_INDEX_CONTENT_TYPE = "text/plain; charset=utf-8";

export interface LLMDocPage {
  data: {
    description?: string;
    seo?: {
      description?: string;
    };
    title: string;
  };
  slugs: string[];
  url: string;
}

const INDEXES: Record<
  LLMIndexName,
  { description: string; intro?: string; title: string }
> = {
  changelog: {
    description: "Release notes and migration-relevant changes.",
    title: "Changelog",
  },
  components: {
    description: "Component APIs, installation, and examples.",
    intro:
      "Use the component documentation and shipped examples before writing code. Shark UI is built on Ark UI, not Radix UI or Base UI.",
    title: "Components",
  },
  foundations: {
    description:
      "Copy-and-own architecture, Ark UI composition, Tailwind v4, tokens, RTL, and Skills.",
    intro:
      "Shark UI is React components you copy into your project. It uses Ark UI and Tailwind CSS v4; do not substitute Radix UI or Base UI APIs. Install the Shark UI Skill when your agent supports Agent Skills.",
    title: "Foundations",
  },
  installation: {
    description: "Setup for supported frameworks and manual installation.",
    title: "Installation",
  },
  patterns: {
    description:
      "AI Components, form integrations, helpers, hooks, utilities, and migrations.",
    intro:
      "Load only the section below that matches the task. For form, collection, or overlay UI, use the Components index.",
    title: "Patterns",
  },
};

/** Top-level docs section → which LLM index owns it. Everything else is Foundations. */
const SECTION_INDEX: Record<string, LLMIndexName> = {
  "ai-components": "patterns",
  changelog: "changelog",
  components: "components",
  forms: "patterns",
  helpers: "patterns",
  hooks: "patterns",
  installation: "installation",
  migration: "patterns",
  utilities: "patterns",
};

const indexForPage = (page: LLMDocPage): LLMIndexName =>
  SECTION_INDEX[page.slugs[0] ?? ""] ?? "foundations";

const pageLink = (page: LLMDocPage, baseUrl: string) => {
  const description =
    page.data.seo?.description ??
    page.data.description ??
    "Documentation for Shark UI.";
  return `- [${page.data.title}](${baseUrl}${page.url}.md): ${description}`;
};

export const buildLLMIndexSection = (
  index: LLMIndexName,
  pages: LLMDocPage[],
  baseUrl: string = SITE_CONFIG.url
) => {
  const { description, intro, title } = INDEXES[index];

  const links = pages
    .filter((page) => indexForPage(page) === index)
    .map((page) => pageLink(page, baseUrl));

  return [
    `# Shark UI ${title}`,
    "",
    `> ${description}`,
    "",
    ...(intro ? [intro, ""] : []),
    "## Documentation",
    "",
    ...links,
  ].join("\n");
};

export const isLLMIndexName = (value: string): value is LLMIndexName =>
  (LLM_INDEXES as readonly string[]).includes(value);

export const createLLMIndexResponse = (content: string) =>
  new Response(content, {
    headers: { "Content-Type": LLM_INDEX_CONTENT_TYPE },
  });
