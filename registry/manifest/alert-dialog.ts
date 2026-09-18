import type { RegistryItemType } from "@/lib/registry";
import { registryUrl } from "@/lib/url";

const dependencies = ["@ark-ui/react", "tailwind-variants", "lucide-react"];

const manifest: RegistryItemType = {
  dependencies,
  name: "alert-dialog",
  registryDependencies: [
    registryUrl("/r/button.json"),
    registryUrl("/r/dialog.json"),
  ],
  type: "registry:ui",
};

export default manifest;
