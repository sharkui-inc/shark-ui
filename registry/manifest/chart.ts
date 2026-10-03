import type { RegistryItemType } from "@/lib/registry";
import { registryUrl } from "@/lib/url";

const dependencies = ["@ark-ui/react", "recharts"];

const manifest: RegistryItemType = {
  dependencies,
  name: "chart",
  registryDependencies: [registryUrl("/r/format.json")],
  type: "registry:ui",
};

export default manifest;
