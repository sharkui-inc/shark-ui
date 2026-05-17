import type { RegistryItemType } from "@/lib/registry";
import { absoluteUrl } from "@/lib/url";

const dependencies = ["@ark-ui/react", "tailwind-variants"];

const manifest: RegistryItemType = {
  name: "toggle-group",
  type: "registry:ui",
  dependencies,
  registryDependencies: [absoluteUrl("/r/toggle.json")],
};

export default manifest;
