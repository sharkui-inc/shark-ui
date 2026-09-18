import type { RegistryItemType } from "@/lib/registry";
import { registryUrl } from "@/lib/url";

const dependencies = ["@ark-ui/react", "tailwind-variants"];

const manifest: RegistryItemType = {
  dependencies,
  name: "tabs",
  registryDependencies: [registryUrl("/r/button.json")],
  type: "registry:ui",
};

export default manifest;
