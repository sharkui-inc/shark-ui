import type { RegistryItemType } from "@/lib/registry";

const dependencies = ["@ark-ui/react", "tailwind-variants"];

const cssVars = {
  dark: {
    destructive: "var(--color-red-600)",
    info: "var(--color-blue-500)",
    success: "var(--color-emerald-500)",
    warning: "var(--color-amber-500)",
  },
  light: {
    destructive: "var(--color-red-600)",
    info: "var(--color-blue-500)",
    success: "var(--color-emerald-500)",
    warning: "var(--color-amber-500)",
  },
};

const manifest: RegistryItemType = {
  cssVars,
  dependencies,
  name: "status",
  type: "registry:ui",
};

export default manifest;
