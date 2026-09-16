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
    title: string;
  };
  slugs: string[];
  url: string;
}

const INDEX_DETAILS: Record<
  LLMIndexName,
  { description: string; title: string }
> = {
  changelog: {
    description: "Release notes and migration-relevant changes.",
    title: "Changelog",
  },
  components: {
    description: "Component APIs, installation, and examples.",
    title: "Components",
  },
  foundations: {
    description:
      "Copy-and-own architecture, Ark UI composition, Tailwind v4, tokens, RTL, and Skills.",
    title: "Foundations",
  },
  installation: {
    description: "Setup for supported frameworks and manual installation.",
    title: "Installation",
  },
  patterns: {
    description:
      "Forms, collections, overlays, AI elements, helpers, hooks, utilities, and migrations.",
    title: "Patterns",
  },
};

const PATTERN_SECTIONS = new Set([
  "ai-elements",
  "forms",
  "helpers",
  "hooks",
  "migration",
  "utilities",
]);

const PATTERN_COMPONENT_GROUPS = [
  {
    slugs: [
      "field",
      "input",
      "textarea",
      "checkbox",
      "radio-group",
      "switch",
      "date-input",
      "date-picker",
      "calendar",
      "number-input",
      "input-otp",
      "password-input",
      "file-upload",
      "tags-input",
      "rating",
      "signature-pad",
      "color-picker",
    ],
    title: "Forms",
  },
  {
    slugs: [
      "autocomplete",
      "combobox",
      "listbox",
      "select",
      "native-select",
      "command",
      "data-table",
      "tree-view",
    ],
    title: "Collections",
  },
  {
    slugs: [
      "action-bar",
      "alert-dialog",
      "dialog",
      "drawer",
      "floating-panel",
      "hover-card",
      "menu",
      "context-menu",
      "popover",
      "sheet",
      "tooltip",
      "tour",
    ],
    title: "Overlays",
  },
] as const;

const getIndexName = (page: LLMDocPage): LLMIndexName => {
  const [section] = page.slugs;
  if (section === "components") {
    return "components";
  }
  if (section === "installation") {
    return "installation";
  }
  if (section === "changelog") {
    return "changelog";
  }
  if (section && PATTERN_SECTIONS.has(section)) {
    return "patterns";
  }
  return "foundations";
};

const getMarkdownUrl = (page: LLMDocPage, baseUrl: string) =>
  `${baseUrl}${page.url}.md`;
const getPageDescription = (page: LLMDocPage) =>
  page.data.description ?? "Documentation for Shark UI.";

export const buildLLMIndex = (baseUrl = SITE_CONFIG.url) => {
  const lines = [
    "# Shark UI",
    "",
    "> Machine-readable guidance for building correct, visually coherent Shark UI interfaces.",
    "",
    "Shark UI is a copy-and-own React registry built with Ark UI and Tailwind CSS v4. Use the registry or CLI to add components; do not substitute Radix UI or Base UI APIs.",
    "",
    "How agents should use Shark UI:",
    "1. Read Foundations first.",
    "2. Load the smallest index for the task, then only the linked Markdown pages needed to implement it.",
    "3. Read the design contract before changing UI; use the handbook only when rationale or an extension decision is needed.",
    "",
    "## Core workflow",
    "",
  ];
  const primaryIndexes = LLM_INDEXES.filter(
    (candidate) => candidate !== "changelog"
  );
  for (const indexName of primaryIndexes) {
    const details = INDEX_DETAILS[indexName];
    lines.push(
      `- [${details.title}](${baseUrl}/llms/${indexName}.txt): ${details.description}`
    );
  }
  lines.push(
    `- [Design contract](${baseUrl}/design.md): Prescriptive visual rules and composition recipes for generated Shark UI interfaces.`,
    ""
  );
  const { changelog } = INDEX_DETAILS;
  lines.push(
    "",
    "## Optional",
    "",
    `- [${changelog.title}](${baseUrl}/llms/changelog.txt): ${changelog.description}`
  );
  return lines.join("\n");
};

const getMarkdownLink = (page: LLMDocPage, baseUrl: string) =>
  `- [${page.data.title}](${getMarkdownUrl(page, baseUrl)}): ${getPageDescription(page)}`;

const getPagesForPatternComponentGroup = (
  pages: LLMDocPage[],
  slugs: readonly string[]
) =>
  pages.filter(
    (page) =>
      page.slugs[0] === "components" && slugs.includes(page.slugs[1] ?? "")
  );

const PATTERN_CONTENT_GROUPS = [
  { section: "ai-elements", title: "AI elements" },
  { section: "forms", title: "Form integrations" },
  { section: "helpers", title: "Helpers" },
  { section: "hooks", title: "Hooks" },
  { section: "utilities", title: "Utilities" },
  { section: "migration", title: "Migrations" },
] as const;

const appendPatternGroups = (
  lines: string[],
  pages: LLMDocPage[],
  baseUrl: string
) => {
  for (const group of PATTERN_COMPONENT_GROUPS) {
    const groupPages = getPagesForPatternComponentGroup(pages, group.slugs);
    if (groupPages.length > 0) {
      lines.push(`## ${group.title}`, "");
      lines.push(
        ...groupPages.map((page) => getMarkdownLink(page, baseUrl)),
        ""
      );
    }
  }

  for (const group of PATTERN_CONTENT_GROUPS) {
    const groupPages = pages.filter((page) => page.slugs[0] === group.section);
    if (groupPages.length > 0) {
      lines.push(`## ${group.title}`, "");
      lines.push(
        ...groupPages.map((page) => getMarkdownLink(page, baseUrl)),
        ""
      );
    }
  }
};

export const buildLLMIndexSection = (
  index: LLMIndexName,
  pages: LLMDocPage[],
  baseUrl = SITE_CONFIG.url
) => {
  const details = INDEX_DETAILS[index];
  const lines = [
    `# Shark UI ${details.title}`,
    "",
    `> ${details.description}`,
    "",
  ];
  if (index === "foundations") {
    lines.push(
      "Shark UI is React components you copy into your project. It uses Ark UI and Tailwind CSS v4; do not substitute Radix UI or Base UI APIs. Install the Shark UI Skill when your agent supports Agent Skills.",
      ""
    );
  }

  if (index === "components") {
    lines.push(
      "Use the component documentation and shipped examples before writing code. Shark UI is built on Ark UI, not Radix UI or Base UI.",
      ""
    );
  }
  if (index === "patterns") {
    lines.push(
      "Choose the narrowest section below. Components are repeated here only when their composition is central to the task.",
      ""
    );
    appendPatternGroups(lines, pages, baseUrl);
    return lines.join("\n");
  }
  lines.push("## Documentation", "");
  for (const docPage of pages.filter(
    (candidate) => getIndexName(candidate) === index
  )) {
    lines.push(getMarkdownLink(docPage, baseUrl));
  }
  return lines.join("\n");
};

export const isLLMIndexName = (value: string): value is LLMIndexName =>
  LLM_INDEXES.includes(value as LLMIndexName);

export const createLLMIndexResponse = (content: string) =>
  new Response(content, {
    headers: { "Content-Type": LLM_INDEX_CONTENT_TYPE },
  });
