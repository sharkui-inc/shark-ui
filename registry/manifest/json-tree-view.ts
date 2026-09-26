import type { RegistryItemType } from "@/lib/registry";

const dependencies = ["@ark-ui/react", "lucide-react"];

const cssVars = {
  dark: {
    "info-foreground": "var(--color-blue-400)",
    "success-foreground": "var(--color-emerald-400)",
    "warning-foreground": "var(--color-amber-400)",
  },
  light: {
    "info-foreground": "var(--color-blue-700)",
    "success-foreground": "var(--color-emerald-700)",
    "warning-foreground": "var(--color-amber-700)",
  },
};

const manifest: RegistryItemType = {
  cssVars,
  dependencies,
  name: "json-tree-view",
  type: "registry:ui",
};

export default manifest;
