import type { RegistryItemType } from "@/lib/registry";
import { absoluteUrl } from "@/lib/url";

const manifest: RegistryItemType = {
  dependencies: ["@ark-ui/react", "lucide-react"],
  description:
    "Collapsible agent plan with status-aware items, progress, and details.",
  name: "plan",
  registryDependencies: [
    absoluteUrl("/r/badge.json"),
    absoluteUrl("/r/collapsible.json"),
    absoluteUrl("/r/spinner.json"),
  ],
  type: "registry:ui",
};

export default manifest;
