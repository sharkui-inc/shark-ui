import type { RegistryItemType } from "@/lib/registry";

const dependencies = ["clsx", "tailwind-merge"];

const manifest: RegistryItemType = {
  name: "utils",
  type: "registry:lib",
  dependencies,
};

export default manifest;
