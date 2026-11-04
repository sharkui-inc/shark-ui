const TRAILING_NEWLINES = /\n+$/u;

export const slugify = (text: string) =>
  text
    .toLowerCase()
    .replace(/ /gu, "-")
    .replace(/[^\w-]+/gu, "");

export const replaceContentForCopy = (inputCode: string) =>
  replaceRegistryImportsForCopy(inputCode)
    .replaceAll(/export default (\w+);/gu, "")
    .replace(TRAILING_NEWLINES, "");

export const replaceRegistryImportsForCopy = (inputCode: string) =>
  inputCode
    .replaceAll("@/registry/react/components", "@/components/ui")
    .replaceAll("@/registry/react/hooks", "@/hooks")
    .replaceAll("@/registry/react/lib", "@/lib");
