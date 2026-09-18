import type { RegistryItemType } from "@/lib/registry";
import { registryUrl } from "@/lib/url";

const dependencies = ["@ark-ui/react"];

const manifest: RegistryItemType = {
  dependencies,
  name: "slider",
  registryDependencies: [registryUrl("/r/field.json")],
  type: "registry:ui",
};

export default manifest;
