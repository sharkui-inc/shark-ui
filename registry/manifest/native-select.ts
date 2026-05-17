import type { RegistryItemType } from "@/lib/registry";
import { absoluteUrl } from "@/lib/url";

const dependencies = ["@ark-ui/react", "lucide-react", "tailwind-variants"];

const manifest: RegistryItemType = {
  name: "native-select",
  type: "registry:ui",
  dependencies,
  registryDependencies: [absoluteUrl("/r/field.json")],
};

export default manifest;
