import type { RegistryItemType } from "@/lib/registry";
import { registryUrl } from "@/lib/url";

const dependencies = ["@ark-ui/react", "tailwind-variants"];

const manifest: RegistryItemType = {
  dependencies,
  name: "button",
  registryDependencies: [registryUrl("/r/spinner.json")],
  type: "registry:ui",
};

export default manifest;
