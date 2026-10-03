import type { RegistryItemType } from "@/lib/registry";
import { registryUrl } from "@/lib/url";

const dependencies = ["@ark-ui/react", "tailwind-variants"];

const manifest: RegistryItemType = {
  dependencies,
  name: "action-bar",
  registryDependencies: [
    registryUrl("/r/badge.json"),
    registryUrl("/r/separator.json"),
  ],
  type: "registry:ui",
};

export default manifest;
