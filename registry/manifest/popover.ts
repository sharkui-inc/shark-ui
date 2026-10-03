import type { RegistryItemType } from "@/lib/registry";
import { registryUrl } from "@/lib/url";

const dependencies = ["@ark-ui/react", "lucide-react"];

const manifest: RegistryItemType = {
  dependencies,
  name: "popover",
  registryDependencies: [
    registryUrl("/r/button.json"),
    registryUrl("/r/scroll-area.json"),
  ],
  type: "registry:ui",
};

export default manifest;
