import type { RegistryItemType } from "@/lib/registry";
import { registryUrl } from "@/lib/url";

const dependencies = ["@ark-ui/react", "lucide-react", "tailwind-variants"];

const manifest: RegistryItemType = {
  dependencies,
  name: "tree-view",
  registryDependencies: [registryUrl("/r/checkbox.json")],
  type: "registry:ui",
};

export default manifest;
