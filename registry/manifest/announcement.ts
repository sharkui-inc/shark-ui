import type { RegistryItemType } from "@/lib/registry";
import { absoluteUrl } from "@/lib/url";

const dependencies = ["@ark-ui/react", "tailwind-variants"];

const manifest: RegistryItemType = {
  dependencies,
  name: "announcement",
  registryDependencies: [absoluteUrl("/r/badge.json")],
  type: "registry:ui",
};

export default manifest;
