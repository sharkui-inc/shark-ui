import type { RegistryItemType } from "@/lib/registry";
import { registryUrl } from "@/lib/url";

const dependencies = ["@ark-ui/react", "lucide-react"];

const manifest: RegistryItemType = {
  dependencies,
  name: "date-input",
  registryDependencies: [
    registryUrl("/r/field.json"),
    registryUrl("/r/input-group.json"),
  ],
  type: "registry:ui",
};

export default manifest;
