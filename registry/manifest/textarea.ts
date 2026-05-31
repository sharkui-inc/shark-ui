import type { RegistryItemType } from "@/lib/registry";

const dependencies = ["@ark-ui/react"];

const cssVars = {
  light: {
    "destructive-foreground": "var(--color-red-700)",
  },
  dark: {
    "destructive-foreground": "var(--color-red-400)",
  },
};

const manifest: RegistryItemType = {
  name: "textarea",
  type: "registry:ui",
  dependencies,
  cssVars,
};

export default manifest;
