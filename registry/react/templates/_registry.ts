import type { TemplateDefinition } from "@/lib/registry";
import { aiTemplates } from "./ai/_registry";
import { appsTemplates } from "./apps/_registry";

export const TEMPLATES = [
  ...aiTemplates,
  ...appsTemplates,
] as readonly TemplateDefinition[];
