import type { RegistryItemType } from "@/lib/registry";
import { absoluteUrl } from "@/lib/url";

const dependencies = ["@ark-ui/react", "lucide-react"];

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
  name: "file-upload",
  type: "registry:ui",
  dependencies,
  registryDependencies: [absoluteUrl("/r/button.json")],
  cssVars,
};

export default manifest;
