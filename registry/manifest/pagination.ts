import type { RegistryItemType } from "@/lib/registry";
import { registryUrl } from "@/lib/url";

const dependencies = ["@ark-ui/react", "lucide-react"];

const manifest: RegistryItemType = {
  dependencies,
  name: "pagination",
  registryDependencies: [
    registryUrl("/r/button.json"),
    registryUrl("/r/format.json"),
  ],
  type: "registry:ui",
};

export default manifest;
