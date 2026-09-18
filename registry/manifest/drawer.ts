import type { RegistryItemType } from "@/lib/registry";
import { registryUrl } from "@/lib/url";

const dependencies = ["@ark-ui/react", "lucide-react", "tailwind-variants"];

const manifest: RegistryItemType = {
  dependencies,
  name: "drawer",
  registryDependencies: [
    registryUrl("/r/button.json"),
    registryUrl("/r/scroll-area.json"),
  ],
  type: "registry:ui",
};

export default manifest;
