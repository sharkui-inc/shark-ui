import type { RegistryItemType } from "@/lib/registry";
import { registryUrl } from "@/lib/url";

const manifest: RegistryItemType = {
  dependencies: ["@ark-ui/react", "lucide-react"],
  description: "Collapsible citations and inline source footnotes.",
  name: "sources",
  registryDependencies: [
    registryUrl("/r/collapsible.json"),
    registryUrl("/r/hover-card.json"),
  ],
  type: "registry:ui",
};

export default manifest;
