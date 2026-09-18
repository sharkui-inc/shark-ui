import type { RegistryItemType } from "@/lib/registry";
import { registryUrl } from "@/lib/url";

const manifest: RegistryItemType = {
  dependencies: ["@ark-ui/react", "lucide-react"],
  description: "Combobox picker for models and agents with optional search.",
  name: "model-selector",
  registryDependencies: [
    registryUrl("/r/button.json"),
    registryUrl("/r/combobox.json"),
    registryUrl("/r/input-group.json"),
    registryUrl("/r/menu.json"),
  ],
  type: "registry:ui",
};

export default manifest;
