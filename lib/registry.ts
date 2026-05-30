import { readdir } from "node:fs/promises";
import { join } from "node:path";
import { cwd } from "node:process";
import z from "zod";

export const registryItemFileTypes = z.enum([
  "registry:ui",
  "registry:hook",
  "registry:style",
  "registry:lib",
]);

export const registryItemFileEntrySchema = z.object({
  path: z.string(),
  content: z.string(),
  type: registryItemFileTypes,
});

export const registryItemSchema = z.object({
  name: z.string(),
  type: registryItemFileTypes,
  description: z.string().optional(),
  extends: z.string().optional(),
  dependencies: z.array(z.string()),
  devDependencies: z.array(z.string()).optional(),
  registryDependencies: z.array(z.string()).optional(),
  cssVars: z.record(z.string(), z.record(z.string(), z.string())).optional(),
  css: z.record(z.string(), z.unknown()).optional(),
  files: z.array(registryItemFileEntrySchema).optional(),
});

export interface RegistryItemType extends z.infer<typeof registryItemSchema> {}

export const registrySchema = registryItemSchema.extend({
  files: z.array(registryItemFileEntrySchema),
});

export interface RegistryType extends z.infer<typeof registrySchema> {}

export interface GetRegistryItemArgs {
  /**
   * The folder type to get the registry items from.
   */
  folderType: "blocks" | "examples" | "templates";
  /**
   * The framework to get the registry items from.
   *
   * @default "react"
   */
  framework?: "react" | "vue" | "solid" | "svelte";
}

interface RegistryListItem {
  category: string;
  name: string;
  type: GetRegistryItemArgs["folderType"];
}

interface RegistryListItemWithPath extends RegistryListItem {
  path: string;
}

export const getAllRegistryItems = async (args: GetRegistryItemArgs) => {
  const { framework = "react", folderType } = args;

  const registryPath = join(cwd(), "registry", framework, folderType);

  const categories = await readdir(registryPath);

  const items: RegistryListItem[] = [];

  for (const category of categories) {
    const categoryPath = join(registryPath, category);
    const categoryItems = await readdir(categoryPath);
    for (const item of categoryItems) {
      items.push({
        type: folderType,
        category,
        name: item,
      });
    }
  }

  return items;
};

export const getRegistryItem = async (args: GetRegistryItemArgs) => {
  const { framework = "react", folderType } = args;

  const registryPath = join(cwd(), "registry", framework, folderType);

  const categories = await readdir(registryPath);

  const items: RegistryListItemWithPath[] = [];

  for (const category of categories) {
    const categoryPath = join(registryPath, category);

    const categoryComponents = await readdir(categoryPath);

    for (const component of categoryComponents) {
      items.push({
        type: folderType,
        category,
        name: component,
        path: `${registryPath}/${category}/${component}`,
      });
    }
  }

  return items;
};
