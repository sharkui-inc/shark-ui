import type { RegistryItemType } from "@/lib/registry";
import { registryUrl } from "@/lib/url";

const dependencies = ["@ark-ui/react", "lucide-react", "tailwind-variants"];

const manifest: RegistryItemType = {
  dependencies,
  files: [
    {
      path: "registry/react/components/drawer-menu.tsx",
      type: "registry:ui",
    },
  ],
  name: "drawer",
  registryDependencies: [
    registryUrl("/r/button.json"),
    registryUrl("/r/menu.json"),
    registryUrl("/r/scroll-area.json"),
  ],
  type: "registry:ui",
};

export default manifest;
