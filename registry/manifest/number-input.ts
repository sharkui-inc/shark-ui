import type { RegistryItemType } from "@/lib/registry";
import { registryUrl } from "@/lib/url";

const dependencies = ["@ark-ui/react", "lucide-react"];

const manifest: RegistryItemType = {
  dependencies,
  name: "number-input",
  registryDependencies: [
    registryUrl("/r/button.json"),
    registryUrl("/r/field.json"),
    registryUrl("/r/input.json"),
  ],
  type: "registry:ui",
};

export default manifest;
