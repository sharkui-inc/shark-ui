import type { RegistryItemType } from "@/lib/registry";
import { registryUrl } from "@/lib/url";

const dependencies = ["@ark-ui/react", "lucide-react", "tailwind-variants"];

const manifest: RegistryItemType = {
  dependencies,
  name: "native-select",
  registryDependencies: [
    registryUrl("/r/field.json"),
    registryUrl("/r/input.json"),
  ],
  type: "registry:ui",
};

export default manifest;
