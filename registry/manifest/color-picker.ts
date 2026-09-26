import type { RegistryItemType } from "@/lib/registry";
import { registryUrl } from "@/lib/url";

const manifest: RegistryItemType = {
  dependencies: ["@ark-ui/react", "lucide-react"],
  name: "color-picker",
  registryDependencies: [registryUrl("/r/button.json")],
  type: "registry:ui",
};

export default manifest;
