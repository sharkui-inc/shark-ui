import type { RegistryItemType } from "@/lib/registry";
import { absoluteUrl } from "@/lib/url";

const dependencies = ["@ark-ui/react", "tailwind-variants", "lucide-react"];

const manifest: RegistryItemType = {
  dependencies,
  name: "menu",
  registryDependencies: [absoluteUrl("/r/button.json")],
  type: "registry:ui",
};

export default manifest;
