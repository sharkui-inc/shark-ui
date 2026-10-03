import type { RegistryItemType } from "@/lib/registry";
import { registryUrl } from "@/lib/url";

const dependencies = ["@ark-ui/react", "tailwind-variants"];

const manifest: RegistryItemType = {
  dependencies,
  name: "input-group",
  registryDependencies: [
    registryUrl("/r/input.json"),
    registryUrl("/r/button.json"),
    registryUrl("/r/textarea.json"),
  ],
  type: "registry:ui",
};

export default manifest;
