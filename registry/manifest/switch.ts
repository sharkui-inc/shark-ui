import type { RegistryItemType } from "@/lib/registry";

const dependencies = ["@ark-ui/react"];

const cssVars = {
  theme: {
    "--color-destructive": "var(--destructive)",
    "--color-destructive-foreground": "var(--destructive-foreground)",
  },
  light: {
    destructive: "var(--color-red-500)",
    "destructive-foreground": "var(--color-red-700)",
  },
  dark: {
    destructive:
      "color-mix(in srgb, var(--color-red-600) 90%, var(--color-neutral-50))",
    "destructive-foreground": "var(--color-red-400)",
  },
};

const manifest: RegistryItemType = {
  name: "switch",
  type: "registry:ui",
  dependencies,
  cssVars,
};

export default manifest;
