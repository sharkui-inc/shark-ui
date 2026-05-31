import type { RegistryItemType } from "@/lib/registry";
import { absoluteUrl } from "@/lib/url";

const dependencies = ["@ark-ui/react", "tailwind-variants"];

const cssVars = {
  light: {
    "destructive-foreground": "var(--color-red-700)",
  },
  dark: {
    "destructive-foreground": "var(--color-red-400)",
  },
};

const manifest: RegistryItemType = {
  name: "input-group",
  type: "registry:ui",
  dependencies,
  cssVars,
  registryDependencies: [
    absoluteUrl("/r/input.json"),
    absoluteUrl("/r/button.json"),
    absoluteUrl("/r/textarea.json"),
  ],
};

export default manifest;
