import type { RegistryItemType } from "@/lib/registry";
import { registryUrl } from "@/lib/url";

const cssVars = {
  dark: {
    "destructive-foreground": "var(--color-red-400)",
    "info-foreground": "var(--color-blue-400)",
    "success-foreground": "var(--color-emerald-400)",
  },
  light: {
    "destructive-foreground": "var(--color-red-700)",
    "info-foreground": "var(--color-blue-700)",
    "success-foreground": "var(--color-emerald-700)",
  },
};

const manifest: RegistryItemType = {
  cssVars,
  dependencies: ["@ark-ui/react", "lucide-react"],
  description:
    "Collapsible tool result row with title, meta, and trailing actions.",
  name: "tool-result",
  registryDependencies: [registryUrl("/r/collapsible.json")],
  type: "registry:ui",
};

export default manifest;
