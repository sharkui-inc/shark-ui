import type { RegistryItemType } from "@/lib/registry";
import { registryUrl } from "@/lib/url";
import { styleFoundation } from "./style";

const manifest: RegistryItemType = {
  ...styleFoundation,
  description:
    "Complete Shark starter: the theme foundation and every installable Shark UI component. Use with `shadcn init` for a new project.",
  name: "starter",
  registryDependencies: [
    ...styleFoundation.registryDependencies,
    registryUrl("/r/ui.json"),
  ],
  type: "registry:style",
};

export default manifest;
