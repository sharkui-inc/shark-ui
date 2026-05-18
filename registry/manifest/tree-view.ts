import type { RegistryItemType } from "@/lib/registry";
import { absoluteUrl } from "@/lib/url";

const dependencies = ["@ark-ui/react", "lucide-react", "tailwind-variants"];

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
  css,
  registryDependencies: [absoluteUrl("/r/checkbox.json")],
};

export default manifest;
