import type { RegistryItemType } from "@/lib/registry";
import { absoluteUrl } from "@/lib/url";

const dependencies = ["@ark-ui/react"];

const manifest: RegistryItemType = {
  dependencies,
  name: "toggle-tooltip",
  registryDependencies: [
    absoluteUrl("/r/popover.json"),
    absoluteUrl("/r/tooltip.json"),
  ],
  type: "registry:ui",
};

export default manifest;
