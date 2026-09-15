import type { RegistryItemType } from "@/lib/registry";
import { absoluteUrl } from "@/lib/url";

const dependencies = ["@ark-ui/react"];

const manifest: RegistryItemType = {
  dependencies,
  name: "circular-slider",
  registryDependencies: [
    absoluteUrl("/r/field.json"),
    absoluteUrl("/r/format.json"),
  ],
  type: "registry:ui",
};

export default manifest;
