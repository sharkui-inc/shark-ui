import type { RegistryItemType } from "@/lib/registry";
import { registryUrl } from "@/lib/url";

const dependencies = ["@ark-ui/react", "@tanstack/react-table", "lucide-react"];

const manifest: RegistryItemType = {
  dependencies,
  name: "data-table",
  registryDependencies: [
    registryUrl("/r/button.json"),
    registryUrl("/r/format.json"),
    registryUrl("/r/menu.json"),
    registryUrl("/r/native-select.json"),
    registryUrl("/r/pagination.json"),
    registryUrl("/r/table.json"),
  ],
  type: "registry:ui",
};

export default manifest;
