import type { RegistryItemType } from "@/lib/registry";
import { absoluteUrl } from "@/lib/url";

const dependencies = ["@ark-ui/react", "tailwind-variants"];

const cssVars = {
  dark: {
    destructive: "var(--color-red-600)",
  },
  light: {
    destructive: "var(--color-red-600)",
  },
};

const manifest: RegistryItemType = {
  cssVars,
  dependencies,
  name: "button",
  registryDependencies: [absoluteUrl("/r/spinner.json")],
  type: "registry:ui",
};

export default manifest;
