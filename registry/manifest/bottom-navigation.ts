import type { RegistryItemType } from "@/lib/registry";
import { registryUrl } from "@/lib/url";

const dependencies = ["@ark-ui/react"];

const manifest: RegistryItemType = {
  dependencies,
  name: "bottom-navigation",
  registryDependencies: [registryUrl("/r/tabs.json")],
  type: "registry:ui",
};

export default manifest;
