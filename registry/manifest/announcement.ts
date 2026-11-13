import type { RegistryItemType } from "@/lib/registry";
import { registryUrl } from "@/lib/url";

const dependencies = ["@ark-ui/react", "tailwind-variants"];

const manifest: RegistryItemType = {
  dependencies,
  name: "announcement",
  registryDependencies: [registryUrl("/r/badge.json")],
  type: "registry:ui",
};

export default manifest;
