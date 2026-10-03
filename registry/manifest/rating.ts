import type { RegistryItemType } from "@/lib/registry";
import { registryUrl } from "@/lib/url";

const dependencies = ["@ark-ui/react", "lucide-react"];

const cssVars = {
  dark: {
    warning: "var(--color-amber-500)",
  },
  light: {
    warning: "var(--color-amber-500)",
  },
};

const manifest: RegistryItemType = {
  cssVars,
  dependencies,
  name: "rating",
  registryDependencies: [registryUrl("/r/field.json")],
  type: "registry:ui",
};

export default manifest;
