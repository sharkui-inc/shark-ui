import type { RegistryItemType } from "@/lib/registry";
import { absoluteUrl } from "@/lib/url";

const dependencies = ["@ark-ui/react", "lucide-react", "tailwind-variants"];

const cssVars = {
  theme: {
    "--animate-expand": "expand 0.2s ease-out",
    "--animate-collapse": "collapse 0.2s ease-out",
  },
};

const css = {
  "@keyframes expand": {
    from: { height: "var(--collapsed-height, 0)" },
    to: { height: "var(--height)" },
  },
  "@keyframes collapse": {
    from: { height: "var(--height)" },
    to: { height: "var(--collapsed-height, 0)" },
  },
};

const manifest: RegistryItemType = {
  name: "tree-view",
  type: "registry:ui",
  dependencies,
  cssVars,
  css,
  registryDependencies: [absoluteUrl("/r/checkbox.json")],
};

export default manifest;
