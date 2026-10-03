import type { RegistryItemType } from "@/lib/registry";
import { registryUrl } from "@/lib/url";

const dependencies = ["@ark-ui/react", "lucide-react", "tailwind-variants"];

const manifest: RegistryItemType = {
  dependencies,
  name: "command",
  registryDependencies: [
    registryUrl("/r/combobox.json"),
    registryUrl("/r/dialog.json"),
    registryUrl("/r/input.json"),
    registryUrl("/r/input-group.json"),
    registryUrl("/r/menu.json"),
    registryUrl("/r/scroll-area.json"),
    registryUrl("/r/separator.json"),
  ],
  type: "registry:ui",
};

export default manifest;
