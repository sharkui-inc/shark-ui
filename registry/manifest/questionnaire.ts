import type { RegistryItemType } from "@/lib/registry";
import { registryUrl } from "@/lib/url";

const manifest: RegistryItemType = {
  dependencies: ["@ark-ui/react"],
  description:
    "A composable questionnaire with single, multiple, freeform, and optional answers.",
  name: "questionnaire",
  registryDependencies: [
    registryUrl("/r/button.json"),
    registryUrl("/r/checkbox.json"),
    registryUrl("/r/field.json"),
    registryUrl("/r/format.json"),
    registryUrl("/r/hotkeys.json"),
    registryUrl("/r/input.json"),
    registryUrl("/r/kbd.json"),
    registryUrl("/r/radio-group.json"),
  ],
  type: "registry:ui",
};

export default manifest;
