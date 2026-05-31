import type { RegistryItemType } from "@/lib/registry";

const dependencies = ["recharts"];

const cssVars = {
  theme: {
    "--color-chart-1": "var(--chart-1)",
    "--color-chart-2": "var(--chart-2)",
    "--color-chart-3": "var(--chart-3)",
    "--color-chart-4": "var(--chart-4)",
    "--color-chart-5": "var(--chart-5)",
  },
  light: {
    "chart-1": "var(--color-orange-600)",
    "chart-2": "var(--color-teal-600)",
    "chart-3": "var(--color-cyan-900)",
    "chart-4": "var(--color-amber-400)",
    "chart-5": "var(--color-amber-500)",
  },
  dark: {
    "chart-1": "var(--color-blue-700)",
    "chart-2": "var(--color-emerald-500)",
    "chart-3": "var(--color-amber-500)",
    "chart-4": "var(--color-purple-500)",
    "chart-5": "var(--color-rose-500)",
  },
};

const manifest: RegistryItemType = {
  name: "chart",
  type: "registry:ui",
  dependencies,
  cssVars,
};

export default manifest;
