import type { RegistryItemType } from "@/lib/registry";
import { registryUrl } from "@/lib/url";

const dependencies = ["@ark-ui/react", "lucide-react"];

const manifest: RegistryItemType = {
  dependencies,
  name: "date-picker",
  registryDependencies: [
    registryUrl("/r/button.json"),
    registryUrl("/r/calendar.json"),
    registryUrl("/r/field.json"),
    registryUrl("/r/input.json"),
    registryUrl("/r/input-group.json"),
  ],
  type: "registry:ui",
};

export default manifest;
