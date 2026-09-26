import type { RegistryItemType } from "@/lib/registry";
import { registryUrl } from "@/lib/url";

const manifest: RegistryItemType = {
  dependencies: ["@ark-ui/react"],
  description: "A composable card for approval flows.",
  name: "approval-card",
  registryDependencies: [
    registryUrl("/r/button.json"),
    registryUrl("/r/card.json"),
    registryUrl("/r/questionnaire.json"),
  ],
  type: "registry:ui",
};

export default manifest;
