import type { RegistryItemType } from "@/lib/registry";
import { registryUrl } from "@/lib/url";

const dependencies = ["@ark-ui/react"];

const manifest: RegistryItemType = {
  dependencies,
  name: "segment-group",
  registryDependencies: [registryUrl("/r/button.json")],
  type: "registry:ui",
};

export default manifest;
