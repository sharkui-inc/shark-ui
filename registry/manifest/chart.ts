import type { RegistryItemType } from "@/lib/registry";

const dependencies = ["recharts"];

const manifest: RegistryItemType = {
  name: "chart",
  type: "registry:ui",
  dependencies,
};

export default manifest;
