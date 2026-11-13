import type { RegistryItemType } from "@/lib/registry";
import { registryUrl } from "@/lib/url";

const manifest: RegistryItemType = {
  dependencies: ["@ark-ui/react", "lucide-react", "tailwind-variants"],
  description:
    "Context window usage meter with token breakdown and optional cost.",
  name: "context",
  registryDependencies: [
    registryUrl("/r/button.json"),
    registryUrl("/r/circular-progress.json"),
    registryUrl("/r/format.json"),
    registryUrl("/r/popover.json"),
    registryUrl("/r/progress.json"),
  ],
  type: "registry:ui",
};

export default manifest;
