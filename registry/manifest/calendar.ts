import type { RegistryItemType } from "@/lib/registry";
import { registryUrl } from "@/lib/url";

const dependencies = ["@ark-ui/react", "lucide-react"];

const manifest: RegistryItemType = {
  dependencies,
  name: "calendar",
  registryDependencies: [
    registryUrl("/r/button.json"),
    registryUrl("/r/format.json"),
    registryUrl("/r/native-select.json"),
  ],
  type: "registry:ui",
};

export default manifest;
