import type { RegistryItemType } from "@/lib/registry";
import { absoluteUrl } from "@/lib/url";

const dependencies = ["@ark-ui/react", "lucide-react"];

const manifest: RegistryItemType = {
  name: "tags-input",
  type: "registry:ui",
  dependencies,
  registryDependencies: [
    absoluteUrl("/r/input.json"),
    absoluteUrl("/r/input-group.json"),
    absoluteUrl("/r/button.json"),
    absoluteUrl("/r/field.json"),
    absoluteUrl("/r/combobox.json"),
  ],
};

export default manifest;
