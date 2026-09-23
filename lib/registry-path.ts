import { resolve, sep } from "node:path";

/**
 * Ensures `resolvedPath` is exactly `root` or a path under it.
 * Rejects `..` escapes and absolute paths outside the root.
 */
export const assertPathInsideRoot = (
  resolvedPath: string,
  root: string,
  label: string
) => {
  const normalizedRoot = resolve(root);
  const normalized = resolve(resolvedPath);

  if (
    normalized !== normalizedRoot &&
    !normalized.startsWith(`${normalizedRoot}${sep}`)
  ) {
    throw new Error(`${label} is outside ${normalizedRoot}`);
  }

  return normalized;
};
