import type { RegistryItemType } from "@/lib/registry";
import { registryUrl } from "@/lib/url";

const dependencies = ["@ark-ui/react"];

const cssVars = {
  theme: {
    "--animate-indeterminate": "indeterminate 1.5s ease-in-out infinite",
  },
};

const css = {
  "@keyframes indeterminate": {
    "0%": { transform: "translateX(-100%)" },
    "100%": { transform: "translateX(400%)" },
  },
};

const manifest: RegistryItemType = {
  css,
  cssVars,
  dependencies,
  name: "progress",
  registryDependencies: [registryUrl("/r/field.json")],
  type: "registry:ui",
};

export default manifest;
