import type { RegistryItemType } from "@/lib/registry";

const dependencies = ["@ark-ui/react", "lucide-react"];

const cssVars = {
  light: {
    info: "var(--color-blue-500)",
    success: "var(--color-emerald-500)",
    warning: "var(--color-amber-500)",
  },
  dark: {
    info: "var(--color-blue-500)",
    success: "var(--color-emerald-500)",
    warning: "var(--color-amber-500)",
  },
};

const manifest: RegistryItemType = {
  name: "json-tree-view",
  type: "registry:ui",
  dependencies,
  cssVars,
};

export default manifest;
