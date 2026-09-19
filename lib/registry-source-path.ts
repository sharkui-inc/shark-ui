import { resolve, sep } from "node:path";
import { REGISTRY_PATH } from "@/config/constants";

const REGISTRY_ROOT = "registry/react";

const LEADING_SLASHES = /^\/+/;

export const resolveRegistrySourcePath = (src: string) => {
  const relativeSrc = src.replace(LEADING_SLASHES, "");
  const resolved = resolve(process.cwd(), REGISTRY_PATH, relativeSrc);
  const root = resolve(process.cwd(), REGISTRY_ROOT);

  if (resolved !== root && !resolved.startsWith(`${root}${sep}`)) {
    throw new Error("ComponentSource src is outside the registry");
  }

  return resolved;
};
