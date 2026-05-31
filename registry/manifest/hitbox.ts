import type { RegistryItemType } from "@/lib/registry";

const cssVars = {
  light: {
    info: "var(--color-blue-500)",
    success: "var(--color-emerald-500)",
  },
  dark: {
    info: "var(--color-blue-500)",
    success: "var(--color-emerald-500)",
  },
};

const css = {
  "@utility hitbox-debug": {
    position: "relative",
    "&::before": {
      position: "absolute",
      top: "var(--hitbox-t, 0px)",
      right: "var(--hitbox-r, 0px)",
      bottom: "var(--hitbox-b, 0px)",
      left: "var(--hitbox-l, 0px)",
      "pointer-events": "inherit",
      content: '""',
      "@apply border border-dashed border-info bg-info/10": {},
    },
    "&:hover::before": {
      "@apply border border-dashed border-success bg-success/10": {},
    },
  },
  "@utility hitbox": {
    position: "relative",
    "&::before": {
      position: "absolute",
      top: "var(--hitbox-t, 0px)",
      right: "var(--hitbox-r, 0px)",
      bottom: "var(--hitbox-b, 0px)",
      left: "var(--hitbox-l, 0px)",
      "pointer-events": "inherit",
      content: '""',
    },
  },
  "@utility hitbox-*": {
    "--hitbox-t": "calc(--value([*]) * -1)",
    "--hitbox-b": "calc(--value([*]) * -1)",
    "--hitbox-l": "calc(--value([*]) * -1)",
    "--hitbox-r": "calc(--value([*]) * -1)",
    position: "relative",
    "&::before": {
      position: "absolute",
      top: "var(--hitbox-t, 0px)",
      right: "var(--hitbox-r, 0px)",
      bottom: "var(--hitbox-b, 0px)",
      left: "var(--hitbox-l, 0px)",
      "pointer-events": "inherit",
      content: '""',
    },
  },
  "@utility hitbox-l-*": {
    "--hitbox-l": "calc(--value([*]) * -1)",
    position: "relative",
    "&::before": {
      position: "absolute",
      top: "var(--hitbox-t, 0px)",
      right: "var(--hitbox-r, 0px)",
      bottom: "var(--hitbox-b, 0px)",
      left: "var(--hitbox-l, 0px)",
      "pointer-events": "inherit",
      content: '""',
    },
  },
  "@utility hitbox-r-*": {
    "--hitbox-r": "calc(--value([*]) * -1)",
    position: "relative",
    "&::before": {
      position: "absolute",
      top: "var(--hitbox-t, 0px)",
      right: "var(--hitbox-r, 0px)",
      bottom: "var(--hitbox-b, 0px)",
      left: "var(--hitbox-l, 0px)",
      "pointer-events": "inherit",
      content: '""',
    },
  },
  "@utility hitbox-t-*": {
    "--hitbox-t": "calc(--value([*]) * -1)",
    position: "relative",
    "&::before": {
      position: "absolute",
      top: "var(--hitbox-t, 0px)",
      right: "var(--hitbox-r, 0px)",
      bottom: "var(--hitbox-b, 0px)",
      left: "var(--hitbox-l, 0px)",
      "pointer-events": "inherit",
      content: '""',
    },
  },
  "@utility hitbox-b-*": {
    "--hitbox-b": "calc(--value([*]) * -1)",
    position: "relative",
    "&::before": {
      position: "absolute",
      top: "var(--hitbox-t, 0px)",
      right: "var(--hitbox-r, 0px)",
      bottom: "var(--hitbox-b, 0px)",
      left: "var(--hitbox-l, 0px)",
      "pointer-events": "inherit",
      content: '""',
    },
  },
  "@utility hitbox-x-*": {
    "--hitbox-l": "calc(--value([*]) * -1)",
    "--hitbox-r": "calc(--value([*]) * -1)",
    position: "relative",
    "&::before": {
      position: "absolute",
      top: "var(--hitbox-t, 0px)",
      right: "var(--hitbox-r, 0px)",
      bottom: "var(--hitbox-b, 0px)",
      left: "var(--hitbox-l, 0px)",
      "pointer-events": "inherit",
      content: '""',
    },
  },
  "@utility hitbox-y-*": {
    "--hitbox-t": "calc(--value([*]) * -1)",
    "--hitbox-b": "calc(--value([*]) * -1)",
    position: "relative",
    "&::before": {
      position: "absolute",
      top: "var(--hitbox-t, 0px)",
      right: "var(--hitbox-r, 0px)",
      bottom: "var(--hitbox-b, 0px)",
      left: "var(--hitbox-l, 0px)",
      "pointer-events": "inherit",
      content: '""',
    },
  },
};

const manifest: RegistryItemType = {
  name: "hitbox",
  type: "registry:style",
  description:
    "Tailwind CSS v4 utilities that expand pointer hit areas without changing layout.",
  dependencies: [],
  cssVars,
  css,
};

export default manifest;
