import type { RegistryItemType } from "@/lib/registry";
import { absoluteUrl } from "@/lib/url";

const dependencies = ["@ark-ui/react"];

const manifest: RegistryItemType = {
  name: "bottom-navigation",
  type: "registry:ui",
  dependencies,
  registryDependencies: [absoluteUrl("/r/tabs.json")],
};

export default manifest;
