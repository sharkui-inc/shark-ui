import { posix } from "node:path";
import type { CompositionFileDefinition } from "@/lib/registry";
import { replaceRegistryImportsForCopy } from "@/utils/formatter";

const CODE_EXTENSION_PATTERN = /\.(?:tsx?|jsx?)$/u;

export const RELATIVE_IMPORT_PATTERN =
  /(?<prefix>from\s+["']|import\s+["'])(?<specifier>\.[^"']+)(?<suffix>["'])/gu;

const stripCodeExtension = (path: string) =>
  path.replace(CODE_EXTENSION_PATTERN, "");

export const toConsumerImport = (target: string) => {
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

export const toDisplayPath = (target: string) =>
  target
    .replace("@components/", "components/")
    .replace("@ui/", "components/ui/")
    .replace("@lib/", "lib/")
    .replace("@hooks/", "hooks/");

export const getConsumerImport = (
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

export const rewriteCompositionImports = (
  source: string,
  currentFile: CompositionFileDefinition,
  resolveRelativeFile: (
    specifier: string
  ) => CompositionFileDefinition | undefined
) => {
  const withConsumerImports = source.replace(
    RELATIVE_IMPORT_PATTERN,
    (match, prefix: string, specifier: string, suffix: string) => {
      const importedFile = resolveRelativeFile(specifier);
      if (!importedFile) {
        return match;
      }
      const consumerImport = getConsumerImport(currentFile, importedFile);
      return consumerImport ? `${prefix}${consumerImport}${suffix}` : match;
    }
  );
  return replaceRegistryImportsForCopy(withConsumerImports);
};
