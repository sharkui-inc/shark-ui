import type { RegistryItemType } from "@/lib/registry";
import { registryUrl } from "@/lib/url";

const dependencies = ["@ark-ui/react"];

const manifest: RegistryItemType = {
  dependencies,
  name: "textarea",
  registryDependencies: [registryUrl("/r/input.json")],
  type: "registry:ui",
};

export default manifest;
