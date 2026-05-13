import type { RegistryItemType } from "@/lib/registry";
import { absoluteUrl } from "@/lib/url";

const dependencies = ["@base-ui/react", "tailwind-variants", "lucide-react"];

const devDependencies = ["tw-animate-css"];

const registryDependencies = [absoluteUrl("/r/utils.json")];

const cssVars = {
  theme: {
    "font-sans": "var(--font-sans, ui-sans-serif, system-ui, sans-serif)",
  },
  light: {
    accent:
      "color-mix(in srgb, var(--color-neutral-950) 4%, var(--background))",
    "accent-foreground": "var(--color-neutral-800)",
    background: "var(--color-neutral-50)",
    border:
      "color-mix(in srgb, var(--color-neutral-950) 8%, var(--background))",
    card: "var(--color-neutral-50)",
    "card-foreground": "var(--color-neutral-800)",
    destructive: "var(--color-red-500)",
    "destructive-foreground": "var(--color-red-700)",
    foreground: "var(--color-neutral-800)",
    info: "var(--color-blue-500)",
    "info-foreground": "var(--color-blue-700)",
    input:
      "color-mix(in srgb, var(--color-neutral-950) 10%, var(--background))",
    muted: "color-mix(in srgb, var(--color-neutral-950) 4%, var(--background))",
    "muted-foreground":
      "color-mix(in srgb, var(--color-neutral-500) 80%, var(--color-neutral-950))",
    popover: "var(--color-neutral-50)",
    "popover-foreground": "var(--color-neutral-800)",
    primary: "var(--color-neutral-800)",
    "primary-foreground": "var(--color-neutral-50)",
    ring: "var(--color-neutral-400)",
    secondary:
      "color-mix(in srgb, var(--color-neutral-950) 4%, var(--background))",
    "secondary-foreground": "var(--color-neutral-800)",
    success: "var(--color-emerald-500)",
    "success-foreground": "var(--color-emerald-700)",
    warning: "var(--color-amber-500)",
    "warning-foreground": "var(--color-amber-700)",
    "chart-1": "var(--color-orange-600)",
    "chart-2": "var(--color-teal-600)",
    "chart-3": "var(--color-cyan-900)",
    "chart-4": "var(--color-amber-400)",
    "chart-5": "var(--color-amber-500)",
    code: "color-mix(in srgb, var(--background) 98%, var(--color-neutral-950))",
    "code-foreground": "var(--foreground)",
    "code-highlight":
      "color-mix(in srgb, var(--color-neutral-950) 4%, var(--code))",
    radius: "0.5rem",
    sidebar: "var(--color-neutral-50)",
    "sidebar-accent":
      "color-mix(in srgb, var(--color-neutral-950) 4%, var(--sidebar))",
    "sidebar-accent-foreground": "var(--color-neutral-800)",
    "sidebar-border":
      "color-mix(in srgb, var(--color-neutral-950) 6%, var(--sidebar))",
    "sidebar-foreground":
      "color-mix(in srgb, var(--color-neutral-800) 64%, var(--sidebar))",
    "sidebar-primary": "var(--color-neutral-800)",
    "sidebar-primary-foreground": "var(--color-neutral-50)",
    "sidebar-ring": "var(--color-neutral-400)",
  },
  dark: {
    accent: "color-mix(in srgb, var(--color-neutral-50) 4%, var(--background))",
    "accent-foreground": "var(--color-neutral-100)",
    background:
      "color-mix(in srgb, var(--color-neutral-950) 100%, var(--color-neutral-50))",
    border: "color-mix(in srgb, var(--color-neutral-50) 8%, var(--background))",
    card: "color-mix(in srgb, var(--background) 98%, var(--color-neutral-50))",
    "card-foreground": "var(--color-neutral-100)",
    destructive:
      "color-mix(in srgb, var(--color-red-600) 90%, var(--color-neutral-50))",
    "destructive-foreground": "var(--color-red-400)",
    foreground: "var(--color-neutral-100)",
    info: "var(--color-blue-500)",
    "info-foreground": "var(--color-blue-400)",
    input: "color-mix(in srgb, var(--color-neutral-50) 10%, var(--background))",
    muted: "color-mix(in srgb, var(--color-neutral-50) 4%, var(--background))",
    "muted-foreground":
      "color-mix(in srgb, var(--color-neutral-500) 70%, var(--color-neutral-50))",
    popover:
      "color-mix(in srgb, var(--background) 100%, var(--color-neutral-50))",
    "popover-foreground": "var(--color-neutral-100)",
    primary: "var(--color-neutral-100)",
    "primary-foreground": "var(--color-neutral-800)",
    ring: "var(--color-neutral-500)",
    secondary: "color-mix(in srgb, var(--color-white) 4%, var(--background))",
    "secondary-foreground": "var(--color-neutral-100)",
    success: "var(--color-emerald-500)",
    "success-foreground": "var(--color-emerald-400)",
    warning: "var(--color-amber-500)",
    "warning-foreground": "var(--color-amber-400)",
    "chart-1": "var(--color-blue-700)",
    "chart-2": "var(--color-emerald-500)",
    "chart-3": "var(--color-amber-500)",
    "chart-4": "var(--color-purple-500)",
    "chart-5": "var(--color-rose-500)",
    code: "color-mix(in srgb, var(--background) 99%, var(--color-neutral-50))",
    "code-foreground": "var(--foreground)",
    "code-highlight":
      "color-mix(in srgb, var(--color-neutral-50) 4%, var(--code))",
    sidebar:
      "color-mix(in srgb, var(--color-neutral-950) 97%, var(--color-neutral-50))",
    "sidebar-accent":
      "color-mix(in srgb, var(--color-neutral-50) 4%, var(--sidebar))",
    "sidebar-accent-foreground": "var(--color-neutral-100)",
    "sidebar-border":
      "color-mix(in srgb, var(--color-neutral-50) 5%, var(--sidebar))",
    "sidebar-foreground":
      "color-mix(in srgb, var(--color-neutral-100) 64%, var(--sidebar))",
    "sidebar-primary": "var(--color-neutral-100)",
    "sidebar-primary-foreground": "var(--color-neutral-800)",
    "sidebar-ring": "var(--color-neutral-400)",
  },
};

const css = {
  "@layer base": {
    "::selection": {
      "@apply bg-primary/80 text-primary-foreground": {},
    },
    "*": {
      "@apply border-border outline-ring/50 ring-ring": {},
    },
    html: {
      "@apply antialiased scroll-smooth": {},
    },
    body: {
      "@apply bg-background text-foreground flex min-h-svh flex-col": {},
    },
    main: {
      "@apply flex-1 flex flex-col": {},
    },
    'button:not(:disabled), [role="button"]:not(:disabled)': {
      cursor: "pointer",
    },
  },
};

const manifest: RegistryItemType = {
  extends: "none",
  name: "style",
  type: "registry:style",
  description:
    "Complete Shark theme: colors, sidebar, fonts, and base styles. Use with the shadcn CLI after `init` (e.g. `npx shadcn@latest init @shark/style`).",
  dependencies,
  devDependencies,
  registryDependencies,
  cssVars,
  css,
};

export default manifest;
