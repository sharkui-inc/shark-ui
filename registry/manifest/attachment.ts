import type { RegistryItemType } from "@/lib/registry";
import { registryUrl } from "@/lib/url";

const dependencies = ["@ark-ui/react", "lucide-react", "tailwind-variants"];

const manifest: RegistryItemType = {
  dependencies,
  description:
    "File and image attachment card with upload state, actions, and a full-card trigger.",
  name: "attachment",
  registryDependencies: [
    registryUrl("/r/button.json"),
    registryUrl("/r/file-thumbnail.json"),
    registryUrl("/r/icon-tile.json"),
    registryUrl("/r/scroll-area.json"),
    registryUrl("/r/shimmer.json"),
  ],
  type: "registry:ui",
};

export default manifest;
