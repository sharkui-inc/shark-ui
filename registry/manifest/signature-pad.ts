import type { RegistryItemType } from "@/lib/registry";
import { registryUrl } from "@/lib/url";

const dependencies = ["@ark-ui/react", "lucide-react"];

const manifest: RegistryItemType = {
  dependencies,
  name: "signature-pad",
  registryDependencies: [registryUrl("/r/button.json")],
  type: "registry:ui",
};

export default manifest;
