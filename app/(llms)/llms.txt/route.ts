import { SITE_CONFIG } from "@/config/site";

export const dynamic = "force-static";
export const revalidate = false;

const base = SITE_CONFIG.url;

const llmsTxt = `# Shark UI

> Machine-readable guidance for building correct, visually coherent Shark UI interfaces.

Shark UI is a copy-and-own React registry built with Ark UI and Tailwind CSS v4. Use the registry or CLI to add components; do not substitute Radix UI or Base UI APIs.

How agents should use Shark UI:
1. Read Foundations first.
2. Load the smallest index for the task, then only the linked Markdown pages needed to implement it.
3. Read the design contract before changing UI; use the handbook only when rationale or an extension decision is needed.

## Core workflow

- [Foundations](${base}/llms/foundations.txt): Copy-and-own architecture, Ark UI composition, Tailwind v4, tokens, RTL, and Skills.
- [Installation](${base}/llms/installation.txt): Setup for supported frameworks and manual installation.
- [Components](${base}/llms/components.txt): Component APIs, installation, and examples.
- [Patterns](${base}/llms/patterns.txt): AI Components, form integrations, helpers, hooks, utilities, and migrations.
- [Design contract](${base}/design.md): Prescriptive visual rules and composition recipes for generated Shark UI interfaces.

## Optional

- [Changelog](${base}/llms/changelog.txt): Release notes and migration-relevant changes.`;

export const GET = () =>
  new Response(llmsTxt, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
