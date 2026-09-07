import type { RegistryItemType } from "@/lib/registry";
import { absoluteUrl } from "@/lib/url";

const manifest: RegistryItemType = {
  dependencies: ["@ark-ui/react", "shiki"],
  description:
    "Composable code panel with Shiki highlighting, streaming support, copy, and line numbers.",
  name: "code-block",
  registryDependencies: [
    absoluteUrl("/r/button.json"),
    absoluteUrl("/r/clipboard.json"),
    absoluteUrl("/r/select.json"),
    absoluteUrl("/r/scroll-area.json"),
  ],
  type: "registry:ui",
};

export default manifest;
