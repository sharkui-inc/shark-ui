import type { RegistryItemType } from "@/lib/registry";
import { registryUrl } from "@/lib/url";

const dependencies = ["@ark-ui/react", "tailwind-variants", "lucide-react"];

const cssVars = {
  dark: {
    "destructive-foreground": "var(--color-red-400)",
    "info-foreground": "var(--color-blue-400)",
    "success-foreground": "var(--color-emerald-400)",
    "warning-foreground": "var(--color-amber-400)",
  },
  light: {
    "destructive-foreground": "var(--color-red-700)",
    "info-foreground": "var(--color-blue-700)",
    "success-foreground": "var(--color-emerald-700)",
    "warning-foreground": "var(--color-amber-700)",
  },
};

const manifest: RegistryItemType = {
  cssVars,
  dependencies,
  name: "toast",
  registryDependencies: [
    registryUrl("/r/button.json"),
    registryUrl("/r/spinner.json"),
  ],
  type: "registry:ui",
};

export default manifest;
