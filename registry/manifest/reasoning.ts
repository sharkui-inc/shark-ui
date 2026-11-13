import type { RegistryItemType } from "@/lib/registry";
import { registryUrl } from "@/lib/url";

const manifest: RegistryItemType = {
  dependencies: ["lucide-react"],
  description: "Expandable model thinking with duration and streaming label.",
  name: "reasoning",
  registryDependencies: [
    registryUrl("/r/collapsible.json"),
    registryUrl("/r/shimmer.json"),
  ],
  type: "registry:ui",
};

export default manifest;
