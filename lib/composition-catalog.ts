import { readFile } from "node:fs/promises";
import { dirname, extname, join, posix, resolve } from "node:path";
import React from "react";
import { highlightCode } from "@/lib/highlight-code";
import type {
  CompositionArtifact,
  CompositionArtifactFile,
  CompositionCategory,
  CompositionDefinition,
  CompositionFileDefinition,
  CompositionFileTreeNode,
  PublishedComposition,
  PublishedCompositionFile,
} from "@/lib/registry";
import { BLOCK_CATEGORIES } from "@/registry/react/blocks/_categories";
import { BLOCKS } from "@/registry/react/blocks/_registry";
import { TEMPLATE_CATEGORIES } from "@/registry/react/templates/_categories";
import { TEMPLATES } from "@/registry/react/templates/_registry";
import { replaceRegistryImportsForCopy } from "@/utils/formatter";

const SOURCE_EXTENSIONS = [".tsx", ".ts", ".jsx", ".js", ".json"] as const;
const RELATIVE_IMPORT_PATTERN = /(from\s+["']|import\s+["'])(\.[^"']+)(["'])/g;
const REGISTRY_COMPONENT_IMPORT_PATTERN =
  /@\/registry\/react\/components\/([a-z0-9-]+)/g;
const CODE_EXTENSION_PATTERN = /\.(?:tsx?|jsx?)$/;

export const COMPOSITION_KINDS = ["blocks", "templates"] as const;
export type CompositionKind = (typeof COMPOSITION_KINDS)[number];

export interface CommandCompositionItem {
  group: "Blocks";
  installName: string;
  isComponent: true;
  keywords: string;
  label: string;
  url: string;
  value: string;
}

interface CompositionCatalogOptions {
  categories: readonly CompositionCategory[];
  definitions: readonly CompositionDefinition[];
  kind: CompositionKind;
}

const COMPOSITION_CATALOGS = {
  blocks: {
    categories: BLOCK_CATEGORIES,
    definitions: BLOCKS,
    kind: "blocks",
  },
  templates: {
    categories: TEMPLATE_CATEGORIES,
    definitions: TEMPLATES,
    kind: "templates",
  },
} as const satisfies Record<CompositionKind, CompositionCatalogOptions>;

const stripCodeExtension = (path: string) =>
  path.replace(CODE_EXTENSION_PATTERN, "");

const toConsumerImport = (target: string) => {
  if (target.startsWith("@components/")) {
    return stripCodeExtension(target.replace("@components/", "@/components/"));
  }
  if (target.startsWith("@ui/")) {
    return stripCodeExtension(target.replace("@ui/", "@/components/ui/"));
  }
  if (target.startsWith("@lib/")) {
    return stripCodeExtension(target.replace("@lib/", "@/lib/"));
  }
  if (target.startsWith("@hooks/")) {
    return stripCodeExtension(target.replace("@hooks/", "@/hooks/"));
  }
  return null;
};

const getConsumerImport = (
  currentFile: CompositionFileDefinition,
  importedFile: CompositionFileDefinition
) => {
  const aliasedTarget = importedFile.target
    ? toConsumerImport(importedFile.target)
    : null;
  if (aliasedTarget) {
    return aliasedTarget;
  }
  if (!(currentFile.target && importedFile.target)) {
    return null;
  }

  const relativeTarget = posix.relative(
    posix.dirname(currentFile.target),
    importedFile.target
  );
  const normalized = relativeTarget.startsWith(".")
    ? relativeTarget
    : `./${relativeTarget}`;
  return stripCodeExtension(normalized);
};

const getLanguage = (path: string) => extname(path).slice(1) || "tsx";

export const getDisplayPath = (file: CompositionFileDefinition) => {
  if (!file.target) {
    return file.path;
  }
  return file.target
    .replace("@components/", "components/")
    .replace("@ui/", "components/ui/")
    .replace("@lib/", "lib/")
    .replace("@hooks/", "hooks/");
};

export const getFileTree = (files: CompositionFileDefinition[]) => {
  const root: CompositionFileTreeNode[] = [];
  for (const file of files) {
    const path = getDisplayPath(file);
    const parts = path.split("/");
    let level = root;

    for (const [index, part] of parts.entries()) {
      const isFile = index === parts.length - 1;
      let node = level.find((entry) => entry.name === part);
      if (!node) {
        node = isFile ? { name: part, path } : { children: [], name: part };
        level.push(node);
      }
      if (!isFile) {
        node.children ??= [];
        level = node.children;
      }
    }
  }
  return root;
};

const assertUniqueNames = (
  collections: readonly (readonly Pick<CompositionDefinition, "name">[])[]
) => {
  const names = new Set<string>();
  for (const collection of collections) {
    for (const composition of collection) {
      if (names.has(composition.name)) {
        throw new Error(
          `[registry] duplicate public composition name: ${composition.name}.`
        );
      }
      names.add(composition.name);
    }
  }
};

const assertUniquePublicNames = () =>
  assertUniqueNames(
    COMPOSITION_KINDS.map((kind) => COMPOSITION_CATALOGS[kind].definitions)
  );

const createCatalog = ({
  categories,
  definitions,
  kind,
}: CompositionCatalogOptions) => {
  const toSourcePath = (
    composition: CompositionDefinition,
    file: CompositionFileDefinition
  ) =>
    join(
      process.cwd(),
      "registry",
      "react",
      kind,
      composition.category,
      composition.name,
      file.source
    );

  const resolveRelativeFile = (
    composition: CompositionDefinition,
    currentFile: CompositionFileDefinition,
    specifier: string
  ) => {
    const sourceRoot = join(
      process.cwd(),
      "registry",
      "react",
      kind,
      composition.category,
      composition.name
    );
    const base = resolve(sourceRoot, dirname(currentFile.source), specifier);
    const candidates = [
      base,
      ...SOURCE_EXTENSIONS.map((extension) => `${base}${extension}`),
      ...SOURCE_EXTENSIONS.map((extension) => join(base, `index${extension}`)),
    ];
    return composition.files.find((candidate) =>
      candidates.includes(toSourcePath(composition, candidate))
    );
  };

  const prepareFileContent = (
    composition: CompositionDefinition,
    file: CompositionFileDefinition,
    source: string
  ) => {
    const withConsumerImports = source.replace(
      RELATIVE_IMPORT_PATTERN,
      (match, prefix: string, specifier: string, suffix: string) => {
        const importedFile = resolveRelativeFile(composition, file, specifier);
        if (!importedFile) {
          return match;
        }
        const consumerImport = getConsumerImport(file, importedFile);
        return consumerImport ? `${prefix}${consumerImport}${suffix}` : match;
      }
    );
    return replaceRegistryImportsForCopy(withConsumerImports);
  };

  const validateComposition = (composition: CompositionDefinition) => {
    const knownCategory = categories.some(
      (category) => category.slug === composition.category
    );
    if (!knownCategory) {
      throw new Error(
        `[${kind}] ${composition.name}: unknown category "${composition.category}".`
      );
    }

    const pageFiles = composition.files.filter(
      (file) => file.type === "registry:page"
    );
    if (pageFiles.length !== 1) {
      throw new Error(
        `[${kind}] ${composition.name}: expected exactly one registry:page file.`
      );
    }

    const sourcePaths = new Set(composition.files.map((file) => file.source));
    if (sourcePaths.size !== composition.files.length) {
      throw new Error(`[${kind}] ${composition.name}: duplicate source file.`);
    }
  };

  const loadPreparedFile = async (
    composition: CompositionDefinition,
    file: CompositionFileDefinition
  ): Promise<CompositionArtifactFile> => {
    if (
      (file.type === "registry:page" || file.type === "registry:file") &&
      !file.target
    ) {
      throw new Error(
        `[${kind}] ${composition.name}: ${file.type} ${file.source} requires a target.`
      );
    }

    let source: string;
    try {
      source = await readFile(toSourcePath(composition, file), "utf8");
    } catch (error) {
      throw new Error(
        `[${kind}] ${composition.name}: source file not found: ${file.source}.`,
        { cause: error }
      );
    }

    for (const match of source.matchAll(RELATIVE_IMPORT_PATTERN)) {
      const [, , specifier] = match;
      if (specifier && !resolveRelativeFile(composition, file, specifier)) {
        throw new Error(
          `[${kind}] ${composition.name}: relative import "${specifier}" from ${file.source} is missing from files.`
        );
      }
    }

    for (const match of source.matchAll(REGISTRY_COMPONENT_IMPORT_PATTERN)) {
      const [, dependency] = match;
      const declared = composition.registryDependencies.some((entry) =>
        entry.endsWith(`/r/${dependency}.json`)
      );
      if (!declared) {
        throw new Error(
          `[${kind}] ${composition.name}: @shark/${dependency} is imported by ${file.source} but not declared as a registry dependency.`
        );
      }
    }

    return {
      ...file,
      content: prepareFileContent(composition, file, source),
      displayPath: getDisplayPath(file),
    };
  };

  const loadPreparedFiles = (
    composition: CompositionDefinition
  ): Promise<CompositionArtifactFile[]> => {
    validateComposition(composition);
    return Promise.all(
      composition.files.map((file) => loadPreparedFile(composition, file))
    );
  };

  const assertUniqueDefinitions = () => assertUniqueNames([definitions]);

  const toArtifact = (
    composition: CompositionDefinition,
    files: CompositionArtifactFile[]
  ): CompositionArtifact => {
    const { preview: _preview, ...published } = composition;
    return { ...published, files };
  };

  const loadPublishedComposition = React.cache(
    async (
      composition: CompositionDefinition
    ): Promise<PublishedComposition> => {
      const prepared = await loadPreparedFiles(composition);
      const files = await Promise.all(
        prepared.map(
          async (file): Promise<PublishedCompositionFile> => ({
            ...file,
            highlightedContent: await highlightCode(
              file.content,
              getLanguage(file.path)
            ),
          })
        )
      );
      return { ...toArtifact(composition, prepared), files };
    }
  );

  const sortCompositions = <
    Item extends { category: string; meta: { order: number } },
  >(
    items: Item[]
  ) =>
    items.toSorted((a, b) => {
      const categoryA = categories.find(
        (category) => category.slug === a.category
      );
      const categoryB = categories.find(
        (category) => category.slug === b.category
      );
      return (
        (categoryA?.order ?? 999) - (categoryB?.order ?? 999) ||
        a.meta.order - b.meta.order
      );
    });

  const getArtifacts = React.cache(async () => {
    assertUniqueDefinitions();
    const compositions = await Promise.all(
      definitions.map(async (composition) =>
        toArtifact(composition, await loadPreparedFiles(composition))
      )
    );
    return sortCompositions(compositions);
  });

  const getPublished = React.cache(async () => {
    assertUniqueDefinitions();
    return sortCompositions(
      await Promise.all(definitions.map(loadPublishedComposition))
    );
  });

  const getPublishedByName = React.cache((category: string, name: string) => {
    const composition = definitions.find(
      (item) => item.category === category && item.name === name
    );
    return composition ? loadPublishedComposition(composition) : null;
  });

  const getDefinition = (category: string, name: string) =>
    definitions.find(
      (composition) =>
        composition.category === category && composition.name === name
    ) ?? null;

  const validate = async () => {
    assertUniqueDefinitions();
    await Promise.all(definitions.map(loadPreparedFiles));
  };

  return {
    getArtifacts,
    getDefinition,
    getPublished,
    getPublishedByName,
    validate,
  };
};

const catalogs = {
  blocks: createCatalog(COMPOSITION_CATALOGS.blocks),
  templates: createCatalog(COMPOSITION_CATALOGS.templates),
};

export const getCategories = (kind: CompositionKind) =>
  COMPOSITION_CATALOGS[kind].categories;

export const getDefinitions = (kind: CompositionKind) =>
  COMPOSITION_CATALOGS[kind].definitions;

export const getRegistryArtifacts = (kind: CompositionKind) => {
  assertUniquePublicNames();
  return catalogs[kind].getArtifacts();
};

export const getPublishedCompositions = (kind: CompositionKind) => {
  assertUniquePublicNames();
  return catalogs[kind].getPublished();
};

export const getPublishedComposition = (
  kind: CompositionKind,
  category: string,
  name: string
) => {
  assertUniquePublicNames();
  return catalogs[kind].getPublishedByName(category, name);
};

export const getCompositionDefinition = (
  kind: CompositionKind,
  category: string,
  name: string
) => {
  assertUniquePublicNames();
  return catalogs[kind].getDefinition(category, name);
};

export const validateCompositionDefinitions = async () => {
  assertUniquePublicNames();
  await Promise.all(COMPOSITION_KINDS.map((kind) => catalogs[kind].validate()));
};

const toCommandItem = (
  definition: Pick<
    CompositionDefinition,
    "category" | "description" | "name" | "title"
  >
): CommandCompositionItem => {
  const url = `/blocks/${definition.category}?block=${definition.name}`;
  return {
    group: "Blocks",
    installName: definition.name,
    isComponent: true,
    keywords: [
      definition.name,
      definition.title,
      definition.description,
      definition.category,
    ].join(" "),
    label: definition.title,
    url,
    value: url,
  };
};

export const getCommandCompositionItems = (): CommandCompositionItem[] =>
  getDefinitions("blocks").map(toCommandItem);
