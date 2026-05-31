import type { RegistryItemType } from "@/lib/registry";

const dependencies = ["@ark-ui/react", "lucide-react"];

const cssVars = {
  light: {
    warning: "var(--color-amber-500)",
  },
  dark: {
    warning: "var(--color-amber-500)",
  },
};

const manifest: RegistryItemType = {
  name: "rating",
  type: "registry:ui",
  dependencies,
  cssVars,
};

export default manifest;
