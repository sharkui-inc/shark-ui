import type { RegistryItemType } from "@/lib/registry";

const dependencies = ["@ark-ui/react", "lucide-react", "tailwind-variants"];

const cssVars = {
  light: {
    "destructive-foreground": "var(--color-red-700)",
  },
  dark: {
    "destructive-foreground": "var(--color-red-400)",
  },
};

const manifest: RegistryItemType = {
  name: "checkbox",
  type: "registry:ui",
  dependencies,
  cssVars,
};

export default manifest;
