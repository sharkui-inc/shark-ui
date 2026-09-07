import type { RegistryItemType } from "@/lib/registry";
import { absoluteUrl } from "@/lib/url";

const manifest: RegistryItemType = {
  description: "Compact queue of pending prompts and completed items.",
  name: "queue",
  registryDependencies: [absoluteUrl("/r/button.json")],
  type: "registry:ui",
};

export default manifest;
