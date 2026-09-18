import type { RegistryItemType } from "@/lib/registry";
import { registryUrl } from "@/lib/url";

const dependencies = ["@ark-ui/react", "tailwind-variants", "lucide-react"];

const manifest: RegistryItemType = {
  dependencies,
  name: "combobox",
  registryDependencies: [
    registryUrl("/r/button.json"),
    registryUrl("/r/input.json"),
    registryUrl("/r/input-group.json"),
    registryUrl("/r/menu.json"),
    registryUrl("/r/scroll-area.json"),
  ],
  type: "registry:ui",
};

export default manifest;
