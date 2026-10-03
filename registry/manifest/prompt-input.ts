import type { RegistryItemType } from "@/lib/registry";
import { registryUrl } from "@/lib/url";

const manifest: RegistryItemType = {
  dependencies: ["@ark-ui/react", "lucide-react"],
  description:
    "Chat composer with textarea, tool slots, attach, and send or stop.",
  name: "prompt-input",
  registryDependencies: [
    registryUrl("/r/input-group.json"),
    registryUrl("/r/spinner.json"),
  ],
  type: "registry:ui",
};

export default manifest;
