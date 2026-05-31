import type { RegistryItemType } from "@/lib/registry";

const dependencies = ["@ark-ui/react", "tailwind-variants"];

const cssVars = {
  theme: {
    "--color-destructive": "var(--destructive)",
    "--color-destructive-foreground": "var(--destructive-foreground)",
    "--color-info": "var(--info)",
    "--color-info-foreground": "var(--info-foreground)",
    "--color-success": "var(--success)",
    "--color-success-foreground": "var(--success-foreground)",
    "--color-warning": "var(--warning)",
    "--color-warning-foreground": "var(--warning-foreground)",
  },
  light: {
    destructive: "var(--color-red-500)",
    "destructive-foreground": "var(--color-red-700)",
    info: "var(--color-blue-500)",
    "info-foreground": "var(--color-blue-700)",
    success: "var(--color-emerald-500)",
    "success-foreground": "var(--color-emerald-700)",
    warning: "var(--color-amber-500)",
    "warning-foreground": "var(--color-amber-700)",
  },
  dark: {
    destructive:
      "color-mix(in srgb, var(--color-red-600) 90%, var(--color-neutral-50))",
    "destructive-foreground": "var(--color-red-400)",
    info: "var(--color-blue-500)",
    "info-foreground": "var(--color-blue-400)",
    success: "var(--color-emerald-500)",
    "success-foreground": "var(--color-emerald-400)",
    warning: "var(--color-amber-500)",
    "warning-foreground": "var(--color-amber-400)",
  },
};

const manifest: RegistryItemType = {
  name: "badge",
  type: "registry:ui",
  dependencies,
  cssVars,
};

export default manifest;
