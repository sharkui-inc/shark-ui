import { readdir } from "node:fs/promises";
import { join } from "node:path";
import { cwd } from "node:process";
import type React from "react";
import z from "zod";

// --- Registry item schemas (shadcn registry JSON) ---

export const registryItemFileTypes = z.enum([
  "registry:ui",
  "registry:hook",
  "registry:style",
  "registry:lib",
  "registry:block",
  "registry:component",
  "registry:page",
  "registry:file",
  "registry:item",
]);

export const registryItemFileEntrySchema = z.object({
  content: z.string().optional(),
  path: z.string(),
  target: z.string().optional(),
  type: registryItemFileTypes,
});

export const registryItemSchema = z.object({
  categories: z.array(z.string()).optional(),
  css: z.record(z.string(), z.unknown()).optional(),
  cssVars: z.record(z.string(), z.record(z.string(), z.string())).optional(),
  dependencies: z.array(z.string()).default([]),
  description: z.string().optional(),
  devDependencies: z.array(z.string()).optional(),
  extends: z.string().optional(),
  files: z.array(registryItemFileEntrySchema).optional(),
  meta: z.record(z.string(), z.unknown()).optional(),
  name: z.string(),
  registryDependencies: z.array(z.string()).optional(),
  title: z.string().optional(),
  type: registryItemFileTypes,
});

export type RegistryItemType = z.infer<typeof registryItemSchema>;

export const registrySchema = registryItemSchema.extend({
  files: z.array(registryItemFileEntrySchema),
});

export type RegistryType = z.infer<typeof registrySchema>;

// --- Composition catalog types (blocks / templates) ---

export interface CompositionCategory {
  description: string;
  label: string;
  order: number;
  slug: string;
}

export const COMPOSITION_FILE_TYPES = [
  "registry:block",
  "registry:component",
  "registry:page",
  "registry:file",
] as const;

export type CompositionFileType = (typeof COMPOSITION_FILE_TYPES)[number];

export interface CompositionFileDefinition {
  /** Path exposed in the registry JSON. */
  path: string;
  /** Path relative to the composition directory. */
  source: string;
  target?: string;
  type: CompositionFileType;
}

export interface CompositionMeta {
  featured?: boolean;
  order: number;
  previewHeight: number;
}

export interface CompositionDefinition {
  category: string;
  dependencies?: string[];
  description: string;
  files: CompositionFileDefinition[];
  meta: CompositionMeta;
  name: string;
  preview: () => Promise<{ default: React.ComponentType }>;
  registryDependencies: string[];
  title: string;
  type: "registry:block";
}

export interface CompositionArtifactFile extends CompositionFileDefinition {
  content: string;
  displayPath: string;
}

export type CompositionArtifact = Omit<
  CompositionDefinition,
  "files" | "preview"
> & {
  files: CompositionArtifactFile[];
};

export interface PublishedCompositionFile extends CompositionArtifactFile {
  highlightedContent: string;
}

export type PublishedComposition = Omit<
  CompositionDefinition,
  "files" | "preview"
> & {
  files: PublishedCompositionFile[];
};

export interface CompositionFileTreeNode {
  children?: CompositionFileTreeNode[];
  name: string;
  path?: string;
}

// Domain aliases — same shapes, clearer call-site names.
export type BlockCategory = CompositionCategory;
export type BlockFileType = CompositionFileType;
export type BlockFileDefinition = CompositionFileDefinition;
export type BlockDefinition = CompositionDefinition;
export type PublishedBlockFile = PublishedCompositionFile;
export type PublishedBlock = PublishedComposition;
export type BlockFileTreeNode = CompositionFileTreeNode;

export type TemplateCategory = CompositionCategory;
export type TemplateFileType = CompositionFileType;
export type TemplateFileDefinition = CompositionFileDefinition;
export type TemplateDefinition = CompositionDefinition;
export type PublishedTemplateFile = PublishedCompositionFile;
export type PublishedTemplate = PublishedComposition;
export type TemplateFileTreeNode = CompositionFileTreeNode;

// --- Filesystem listing for view routes ---

export const REGISTRY_FOLDER_TYPES = [
  "blocks",
  "examples",
  "templates",
] as const;

export type RegistryFolderType = (typeof REGISTRY_FOLDER_TYPES)[number];

export const REGISTRY_FRAMEWORKS = ["react", "vue", "solid", "svelte"] as const;

export type RegistryFramework = (typeof REGISTRY_FRAMEWORKS)[number];

export interface GetRegistryItemArgs {
  folderType: RegistryFolderType;
  /** @default "react" */
  framework?: RegistryFramework;
}

export interface RegistryListItem {
  category: string;
  name: string;
  path: string;
  type: RegistryFolderType;
}

/** Skip private `_`-prefixed registry entries. */
export const isPublicRegistryName = (name: string) => !name.startsWith("_");

export const toRegistryListItem = (args: {
  category: string;
  categoryPath: string;
  fileName: string;
  folderType: RegistryFolderType;
}): RegistryListItem => ({
  category: args.category,
  name: args.fileName,
  path: join(args.categoryPath, args.fileName),
  type: args.folderType,
});

export const getRegistryItem = async (args: GetRegistryItemArgs) => {
  const { framework = "react", folderType } = args;
  const registryPath = join(cwd(), "registry", framework, folderType);

  const categories = (
    await readdir(registryPath, { withFileTypes: true })
  ).filter((entry) => entry.isDirectory() && isPublicRegistryName(entry.name));

  const nested = await Promise.all(
    categories.map(async (category) => {
      const categoryPath = join(registryPath, category.name);
      const files = (
        await readdir(categoryPath, { withFileTypes: true })
      ).filter((entry) => entry.isFile() && isPublicRegistryName(entry.name));

      return files.map((file) =>
        toRegistryListItem({
          category: category.name,
          categoryPath,
          fileName: file.name,
          folderType,
        })
      );
    })
  );

  return nested.flat();
};
