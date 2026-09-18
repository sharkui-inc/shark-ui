import type { RegistryItemType } from "@/lib/registry";
import { registryUrl } from "@/lib/url";

const cssVars = {
  dark: {
    destructive: "var(--color-red-600)",
    "destructive-foreground": "var(--color-red-400)",
    success: "var(--color-emerald-500)",
    "success-foreground": "var(--color-emerald-400)",
  },
  light: {
    destructive: "var(--color-red-600)",
    "destructive-foreground": "var(--color-red-700)",
    success: "var(--color-emerald-500)",
    "success-foreground": "var(--color-emerald-700)",
  },
};

const manifest: RegistryItemType = {
  cssVars,
  dependencies: ["@ark-ui/react", "lucide-react", "tailwind-variants"],
  description: "Unified diff hunks with add, delete, and context lines.",
  name: "diff",
  registryDependencies: [registryUrl("/r/scroll-area.json")],
  type: "registry:ui",
};

export default manifest;
