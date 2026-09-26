import type { RegistryItemType } from "@/lib/registry";
import { registryUrl } from "@/lib/url";

const dependencies = ["@ark-ui/react", "tailwind-variants"];

const manifest: RegistryItemType = {
  dependencies,
  name: "field",
  registryDependencies: [registryUrl("/r/separator.json")],
  type: "registry:ui",
};

export default manifest;
