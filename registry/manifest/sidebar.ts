import type { RegistryItemType } from "@/lib/registry";
import { absoluteUrl } from "@/lib/url";

const dependencies = ["@ark-ui/react", "tailwind-variants", "lucide-react"];

const cssVars = {
  dark: {
    sidebar:
      "color-mix(in srgb, var(--color-neutral-950) 97%, var(--color-neutral-50))",
    "sidebar-accent":
      "color-mix(in srgb, var(--color-neutral-50) 4%, var(--sidebar))",
    "sidebar-accent-foreground": "var(--color-neutral-100)",
    "sidebar-border":
      "color-mix(in srgb, var(--color-neutral-50) 5%, var(--sidebar))",
    "sidebar-foreground":
      "color-mix(in srgb, var(--color-neutral-100) 80%, var(--sidebar))",
    "sidebar-primary": "var(--color-neutral-100)",
    "sidebar-primary-foreground": "var(--color-neutral-800)",
    "sidebar-ring": "var(--color-neutral-400)",
  },
  light: {
    sidebar: "var(--color-neutral-50)",
    "sidebar-accent":
      "color-mix(in srgb, var(--color-neutral-950) 4%, var(--sidebar))",
    "sidebar-accent-foreground": "var(--color-neutral-800)",
    "sidebar-border":
      "color-mix(in srgb, var(--color-neutral-950) 6%, var(--sidebar))",
    "sidebar-foreground":
      "color-mix(in srgb, var(--color-neutral-800) 80%, var(--sidebar))",
    "sidebar-primary": "var(--color-neutral-800)",
    "sidebar-primary-foreground": "var(--color-neutral-50)",
    "sidebar-ring": "var(--color-neutral-600)",
  },
};

const manifest: RegistryItemType = {
  cssVars,
  dependencies,
  name: "sidebar",
  registryDependencies: [
    absoluteUrl("/r/button.json"),
    absoluteUrl("/r/hotkeys.json"),
    absoluteUrl("/r/input.json"),
    absoluteUrl("/r/scroll-area.json"),
    absoluteUrl("/r/separator.json"),
    absoluteUrl("/r/sheet.json"),
    absoluteUrl("/r/skeleton.json"),
    absoluteUrl("/r/tooltip.json"),
    absoluteUrl("/r/use-is-mobile.json"),
  ],
  type: "registry:ui",
};

export default manifest;
