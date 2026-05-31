import type { RegistryItemType } from "@/lib/registry";
import { absoluteUrl } from "@/lib/url";

const dependencies = ["@ark-ui/react", "tailwind-variants"];

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
  name: "input-group",
  type: "registry:ui",
  dependencies,
  registryDependencies: [
    absoluteUrl("/r/input.json"),
    absoluteUrl("/r/button.json"),
    absoluteUrl("/r/textarea.json"),
  ],
  cssVars,
};

export default manifest;
