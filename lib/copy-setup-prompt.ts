import { SITE_CONFIG } from "@/config/site";
import {
  getInstallationFramework,
  getStarterCommand,
  type InstallationFramework,
  type InstallationFrameworkId,
} from "@/lib/installation-frameworks";

const base = SITE_CONFIG.url;
const handbookUrl =
  "https://github.com/sharkui-inc/shark-ui/blob/main/DESIGN.md";

export const buildCopySetupPrompt = (
  frameworkId: InstallationFrameworkId
): string => {
  const framework = getInstallationFramework(frameworkId);

  return [
    `Set up Shark UI in this ${framework.name} project.`,
    "",
    getInstallStep(framework),
    "",
    "2. If the agent supports skills, install the Shark UI skill:",
    "",
    "```bash",
    "npx skills add sharkui-inc/shark-ui",
    "```",
    "",
    "3. Write or merge this block into AGENTS.md (or equivalent):",
    "",
    "```md",
    "## Shark UI",
    "",
    "Use Shark UI (Ark UI + Tailwind CSS v4 registry). Install with `npx shadcn@latest add @shark/<name>`.",
    `Before writing UI, read ${base}/llms.txt, then the smallest matching index and Markdown pages.`,
    `Read ${base}/design.md before changing styles. Prefer the Shark UI skill when available; docs win on conflict.`,
    "Do not use Radix UI or Base UI APIs.",
    "```",
    "",
    "4. Before writing code, read the agent docs:",
    `- ${base}/llms.txt`,
    `- ${base}/llms/foundations.txt`,
    `- ${base}/llms/installation.txt`,
    `- ${base}${framework.href}.md`,
    `- ${base}/design.md`,
    "",
    "Load only the matching task index and Markdown pages you need:",
    `- Adding a component: ${base}/llms/components.txt, then that component's Markdown page`,
    `- Forms, AI Components, helpers, hooks, utilities, or migration: ${base}/llms/patterns.txt`,
    `- Rationale or an extension: ${handbookUrl}`,
    "",
    "5. Working rules:",
    "- Import from `@/components/ui/<name>`",
    "- Before inventing UI, run `npx shadcn@latest add @shark/<name>` (or search `@shark`), then read the component Markdown and one shipped example",
    "- Shark UI is Ark UI + Tailwind CSS v4. Use the registry or CLI. Do not use Radix UI or Base UI APIs.",
  ].join("\n");
};

const getInstallStep = (framework: InstallationFramework): string => {
  const starterCommand = getStarterCommand(framework);

  if (starterCommand) {
    return [
      `1. Initialize Shark UI with the ${framework.name} starter:`,
      "",
      "```bash",
      starterCommand,
      "```",
      "",
      "For a monorepo, add `--monorepo`. For an existing Tailwind CSS v4 project, prefer:",
      "",
      "```bash",
      "npx shadcn@latest init @shark/style",
      "npx shadcn@latest add @shark/ui",
      "```",
      "",
      `Or install individual components from ${base}/docs/components.`,
    ].join("\n");
  }

  return [
    "1. Follow the manual installation path:",
    `- Read ${base}${framework.href}.md`,
    "- Ensure Tailwind CSS v4 is set up",
    "- Add theme, utils, and animations:",
    "",
    "```bash",
    "npx shadcn@latest init @shark/style",
    "```",
    "",
    "- Then install the full catalog or individual components:",
    "",
    "```bash",
    "npx shadcn@latest add @shark/ui",
    "```",
    "",
    `Or install individual components from ${base}/docs/components.`,
  ].join("\n");
};
