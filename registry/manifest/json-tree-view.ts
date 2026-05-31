import type { RegistryItemType } from "@/lib/registry";

const dependencies = ["@ark-ui/react", "lucide-react"];

const cssVars = {
  theme: {
    "--color-info": "var(--info)",
    "--color-info-foreground": "var(--info-foreground)",
    "--color-success": "var(--success)",
    "--color-success-foreground": "var(--success-foreground)",
    "--color-warning": "var(--warning)",
    "--color-warning-foreground": "var(--warning-foreground)",
  },
  light: {
    info: "var(--color-blue-500)",
    "info-foreground": "var(--color-blue-700)",
    success: "var(--color-emerald-500)",
    "success-foreground": "var(--color-emerald-700)",
    warning: "var(--color-amber-500)",
    "warning-foreground": "var(--color-amber-700)",
  },
  dark: {
    info: "var(--color-blue-500)",
    "info-foreground": "var(--color-blue-400)",
    success: "var(--color-emerald-500)",
    "success-foreground": "var(--color-emerald-400)",
    warning: "var(--color-amber-500)",
    "warning-foreground": "var(--color-amber-400)",
  },
};

const manifest: RegistryItemType = {
  name: "json-tree-view",
  type: "registry:ui",
  dependencies,
  cssVars,
};

export default manifest;
