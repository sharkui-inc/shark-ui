import type { TemplateCategory } from "@/lib/registry";

export const TEMPLATE_CATEGORIES = [
  {
    description: "Conversational products and assistant workspaces.",
    label: "AI",
    order: 1,
    slug: "ai",
  },
  {
    description: "Dense product apps promoted from the Themes gallery.",
    label: "Apps",
    order: 2,
    slug: "apps",
  },
] as const satisfies readonly TemplateCategory[];
