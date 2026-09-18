import type { RegistryItemType } from "@/lib/registry";
import { registryUrl } from "@/lib/url";

const manifest: RegistryItemType = {
  dependencies: ["@ark-ui/react", "shiki"],
  description:
    "Composable code panel with Shiki highlighting, streaming support, copy, and line numbers.",
  name: "code-block",
  registryDependencies: [
    registryUrl("/r/button.json"),
    registryUrl("/r/clipboard.json"),
    registryUrl("/r/select.json"),
    registryUrl("/r/scroll-area.json"),
  ],
  type: "registry:ui",
};

export default manifest;
