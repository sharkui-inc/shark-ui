import type { RegistryItemType } from "@/lib/registry";
import { registryUrl } from "@/lib/url";

const manifest: RegistryItemType = {
  dependencies: ["@ark-ui/react", "lucide-react"],
  description:
    "Collapsible agent plan with status-aware items, progress, and details.",
  name: "plan",
  registryDependencies: [
    registryUrl("/r/badge.json"),
    registryUrl("/r/collapsible.json"),
    registryUrl("/r/spinner.json"),
  ],
  type: "registry:ui",
};

export default manifest;
