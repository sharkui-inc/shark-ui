import type { RegistryItemType } from "@/lib/registry";
import { absoluteUrl } from "@/lib/url";

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
  name: "listbox",
  type: "registry:ui",
  dependencies,
  cssVars,
  registryDependencies: [absoluteUrl("/r/menu.json")],
};

export default manifest;
