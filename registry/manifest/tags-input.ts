import type { RegistryItemType } from "@/lib/registry";
import { absoluteUrl } from "@/lib/url";

const dependencies = ["@ark-ui/react", "lucide-react"];

const manifest: RegistryItemType = {
  name: "tags-input",
  type: "registry:ui",
  dependencies,
  registryDependencies: [absoluteUrl("/r/input-group.json")],
};

export default manifest;
