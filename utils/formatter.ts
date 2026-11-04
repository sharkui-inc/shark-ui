const TRAILING_NEWLINES = /\n+$/u;
const BIOME_LINE_IGNORE = /^[ \t]*\/\/\s*biome-ignore\b.*\n?/gmu;
const BIOME_JSX_IGNORE =
  /^[ \t]*\{\s*\/\*\s*biome-ignore\b[\s\S]*?\*\/\s*\}\n?/gmu;

const stripBiomeIgnoreComments = (inputCode: string) =>
  inputCode.replaceAll(BIOME_JSX_IGNORE, "").replaceAll(BIOME_LINE_IGNORE, "");

export const slugify = (text: string) =>
  text
    .toLowerCase()
    .replace(/ /gu, "-")
    .replace(/[^\w-]+/gu, "");

export const replaceContentForCopy = (inputCode: string) =>
  replaceRegistryImportsForCopy(inputCode)
    .replaceAll(/export default \w+;/gu, "")
    .replace(TRAILING_NEWLINES, "");

export const replaceRegistryImportsForCopy = (inputCode: string) =>
  stripBiomeIgnoreComments(inputCode)
    .replaceAll("@/registry/react/components", "@/components/ui")
    .replaceAll("@/registry/react/hooks", "@/hooks")
    .replaceAll("@/registry/react/lib", "@/lib");
