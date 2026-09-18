import type { RegistryItemType } from "@/lib/registry";

const cssVars = {
  dark: {
    info: "var(--color-blue-500)",
    success: "var(--color-emerald-500)",
  },
  light: {
    info: "var(--color-blue-500)",
    success: "var(--color-emerald-500)",
  },
};

const css = {
  "@utility hitbox": {
    "&::before": {
      bottom: "var(--hitbox-b, 0px)",
      content: '""',
      left: "var(--hitbox-l, 0px)",
      "pointer-events": "inherit",
      position: "absolute",
      right: "var(--hitbox-r, 0px)",
      top: "var(--hitbox-t, 0px)",
    },
    position: "relative",
  },
  "@utility hitbox-*": {
    "--hitbox-b": "calc(--value([*]) * -1)",
    "--hitbox-l": "calc(--value([*]) * -1)",
    "--hitbox-r": "calc(--value([*]) * -1)",
    "--hitbox-t": "calc(--value([*]) * -1)",
    "&::before": {
      bottom: "var(--hitbox-b, 0px)",
      content: '""',
      left: "var(--hitbox-l, 0px)",
      "pointer-events": "inherit",
      position: "absolute",
      right: "var(--hitbox-r, 0px)",
      top: "var(--hitbox-t, 0px)",
    },
    position: "relative",
  },
  "@utility hitbox-b-*": {
    "--hitbox-b": "calc(--value([*]) * -1)",
    "&::before": {
      bottom: "var(--hitbox-b, 0px)",
      content: '""',
      left: "var(--hitbox-l, 0px)",
      "pointer-events": "inherit",
      position: "absolute",
      right: "var(--hitbox-r, 0px)",
      top: "var(--hitbox-t, 0px)",
    },
    position: "relative",
  },
  "@utility hitbox-debug": {
    "&::before": {
      "@apply border border-dashed border-info bg-info/8": {},
      bottom: "var(--hitbox-b, 0px)",
      content: '""',
      left: "var(--hitbox-l, 0px)",
      "pointer-events": "inherit",
      position: "absolute",
      right: "var(--hitbox-r, 0px)",
      top: "var(--hitbox-t, 0px)",
    },
    "&:hover::before": {
      "@apply border border-dashed border-success bg-success/8": {},
    },
    position: "relative",
  },
  "@utility hitbox-l-*": {
    "--hitbox-l": "calc(--value([*]) * -1)",
    "&::before": {
      bottom: "var(--hitbox-b, 0px)",
      content: '""',
      left: "var(--hitbox-l, 0px)",
      "pointer-events": "inherit",
      position: "absolute",
      right: "var(--hitbox-r, 0px)",
      top: "var(--hitbox-t, 0px)",
    },
    position: "relative",
  },
  "@utility hitbox-r-*": {
    "--hitbox-r": "calc(--value([*]) * -1)",
    "&::before": {
      bottom: "var(--hitbox-b, 0px)",
      content: '""',
      left: "var(--hitbox-l, 0px)",
      "pointer-events": "inherit",
      position: "absolute",
      right: "var(--hitbox-r, 0px)",
      top: "var(--hitbox-t, 0px)",
    },
    position: "relative",
  },
  "@utility hitbox-t-*": {
    "--hitbox-t": "calc(--value([*]) * -1)",
    "&::before": {
      bottom: "var(--hitbox-b, 0px)",
      content: '""',
      left: "var(--hitbox-l, 0px)",
      "pointer-events": "inherit",
      position: "absolute",
      right: "var(--hitbox-r, 0px)",
      top: "var(--hitbox-t, 0px)",
    },
    position: "relative",
  },
  "@utility hitbox-x-*": {
    "--hitbox-l": "calc(--value([*]) * -1)",
    "--hitbox-r": "calc(--value([*]) * -1)",
    "&::before": {
      bottom: "var(--hitbox-b, 0px)",
      content: '""',
      left: "var(--hitbox-l, 0px)",
      "pointer-events": "inherit",
      position: "absolute",
      right: "var(--hitbox-r, 0px)",
      top: "var(--hitbox-t, 0px)",
    },
    position: "relative",
  },
  "@utility hitbox-y-*": {
    "--hitbox-b": "calc(--value([*]) * -1)",
    "--hitbox-t": "calc(--value([*]) * -1)",
    "&::before": {
      bottom: "var(--hitbox-b, 0px)",
      content: '""',
      left: "var(--hitbox-l, 0px)",
      "pointer-events": "inherit",
      position: "absolute",
      right: "var(--hitbox-r, 0px)",
      top: "var(--hitbox-t, 0px)",
    },
    position: "relative",
  },
};

const manifest: RegistryItemType = {
  css,
  cssVars,
  dependencies: [],
  description:
    "Tailwind CSS v4 utilities that expand pointer hit areas without changing layout.",
  name: "hitbox",
  type: "registry:style",
};

export default manifest;
