import type { RegistryItemType } from "@/lib/registry";
import { registryUrl } from "@/lib/url";

const dependencies = ["@ark-ui/react", "tailwind-variants", "lucide-react"];

const manifest: RegistryItemType = {
  dependencies,
  name: "select",
  registryDependencies: [
    registryUrl("/r/input.json"),
    registryUrl("/r/menu.json"),
    registryUrl("/r/scroll-area.json"),
    registryUrl("/r/separator.json"),
  ],
  type: "registry:ui",
};

export default manifest;
