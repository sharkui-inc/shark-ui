import type { RegistryItemType } from "@/lib/registry";
import { registryUrl } from "@/lib/url";

const dependencies = ["@ark-ui/react"];

const manifest: RegistryItemType = {
  dependencies,
  name: "toggle-tooltip",
  registryDependencies: [
    registryUrl("/r/popover.json"),
    registryUrl("/r/tooltip.json"),
  ],
  type: "registry:ui",
};

export default manifest;
