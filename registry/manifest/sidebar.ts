import type { RegistryItemType } from "@/lib/registry";
import { registryUrl } from "@/lib/url";

const dependencies = ["@ark-ui/react", "tailwind-variants", "lucide-react"];

const manifest: RegistryItemType = {
  dependencies,
  name: "sidebar",
  registryDependencies: [
    registryUrl("/r/button.json"),
    registryUrl("/r/hotkeys.json"),
    registryUrl("/r/input.json"),
    registryUrl("/r/scroll-area.json"),
    registryUrl("/r/separator.json"),
    registryUrl("/r/sheet.json"),
    registryUrl("/r/skeleton.json"),
    registryUrl("/r/tooltip.json"),
    registryUrl("/r/use-media-query.json"),
  ],
  type: "registry:ui",
};

export default manifest;
