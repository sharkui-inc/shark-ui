import type { RegistryItemType } from "@/lib/registry";
import { absoluteUrl } from "@/lib/url";

const dependencies = ["@ark-ui/react", "tailwind-variants", "lucide-react"];

const cssVars = {
  light: {
    info: "var(--color-blue-500)",
    success: "var(--color-emerald-500)",
    warning: "var(--color-amber-500)",
  },
  dark: {
    info: "var(--color-blue-500)",
    success: "var(--color-emerald-500)",
    warning: "var(--color-amber-500)",
  },
};

const manifest: RegistryItemType = {
  name: "toast",
  type: "registry:ui",
  dependencies,
  cssVars,
  registryDependencies: [
    absoluteUrl("/r/button.json"),
    absoluteUrl("/r/spinner.json"),
  ],
};

export default manifest;
