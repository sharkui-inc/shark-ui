import type { RegistryItemType } from "@/lib/registry";
import { registryUrl } from "@/lib/url";

const dependencies = ["@ark-ui/react", "lucide-react", "tailwind-variants"];

const manifest: RegistryItemType = {
  dependencies,
  name: "autocomplete",
  registryDependencies: [
    registryUrl("/r/combobox.json"),
    registryUrl("/r/separator.json"),
  ],
  type: "registry:ui",
};

export default manifest;
