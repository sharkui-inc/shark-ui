import type { RegistryItemType } from "@/lib/registry";

const dependencies = ["@ark-ui/react", "tailwind-variants"];

const cssVars = {
  light: {
    "destructive-foreground": "var(--color-red-700)",
    info: "var(--color-blue-500)",
    success: "var(--color-emerald-500)",
    warning: "var(--color-amber-500)",
  },
  dark: {
    "destructive-foreground": "var(--color-red-400)",
    info: "var(--color-blue-500)",
    success: "var(--color-emerald-500)",
    warning: "var(--color-amber-500)",
  },
};

const manifest: RegistryItemType = {
  name: "badge",
  type: "registry:ui",
  dependencies,
  cssVars,
};

export default manifest;
