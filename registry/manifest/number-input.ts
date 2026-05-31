import type { RegistryItemType } from "@/lib/registry";
import { absoluteUrl } from "@/lib/url";

const dependencies = ["@ark-ui/react", "lucide-react"];

const cssVars = {
  light: {
    "destructive-foreground": "var(--color-red-700)",
  },
  dark: {
    "destructive-foreground": "var(--color-red-400)",
  },
};

const manifest: RegistryItemType = {
  name: "number-input",
  type: "registry:ui",
  dependencies,
  cssVars,
  registryDependencies: [
    absoluteUrl("/r/button.json"),
    absoluteUrl("/r/field.json"),
    absoluteUrl("/r/input.json"),
  ],
};

export default manifest;
