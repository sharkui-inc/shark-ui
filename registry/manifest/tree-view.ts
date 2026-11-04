import type { RegistryItemType } from "@/lib/registry";
import { registryUrl } from "@/lib/url";

const dependencies = ["@ark-ui/react", "lucide-react", "tailwind-variants"];

const cssVars = {
  theme: {
    "--animate-collapse-down":
      "collapse-down 200ms ease-out",
    "--animate-collapse-up":
      "collapse-up 200ms ease-out",
  },
};

const css = {
  "@keyframes collapse-down": {
    from: { height: "var(--collapsed-height, 0)" },
    to: { height: "var(--height)" },
  },
  "@keyframes collapse-up": {
    from: { height: "var(--height)" },
    to: { height: "var(--collapsed-height, 0)" },
  },
};

const manifest: RegistryItemType = {
  css,
  cssVars,
  dependencies,
  name: "tree-view",
  registryDependencies: [
    registryUrl("/r/checkbox.json"),
    registryUrl("/r/field.json"),
  ],
  type: "registry:ui",
};

export default manifest;
