export type InstallationFrameworkId =
  | "next"
  | "vite"
  | "tanstack-start"
  | "astro"
  | "react-router"
  | "remix"
  | "laravel"
  | "manual";

export type StarterFlag =
  | "next"
  | "vite"
  | "start"
  | "astro"
  | "react-router"
  | "laravel";

export interface InstallationFramework {
  hasStarter: boolean;
  href: string;
  id: InstallationFrameworkId;
  name: string;
  /** `-t` for `@shark/starter`. Null means no flag (Remix) or no starter (Manual). */
  starterFlag: StarterFlag | null;
}

export const INSTALLATION_FRAMEWORKS: readonly InstallationFramework[] = [
  {
    hasStarter: true,
    href: "/docs/installation/next",
    id: "next",
    name: "Next.js",
    starterFlag: "next",
  },
  {
    hasStarter: true,
    href: "/docs/installation/vite",
    id: "vite",
    name: "Vite",
    starterFlag: "vite",
  },
  {
    hasStarter: true,
    href: "/docs/installation/tanstack-start",
    id: "tanstack-start",
    name: "TanStack Start",
    starterFlag: "start",
  },
  {
    hasStarter: true,
    href: "/docs/installation/astro",
    id: "astro",
    name: "Astro",
    starterFlag: "astro",
  },
  {
    hasStarter: true,
    href: "/docs/installation/react-router",
    id: "react-router",
    name: "React Router",
    starterFlag: "react-router",
  },
  {
    hasStarter: true,
    href: "/docs/installation/remix",
    id: "remix",
    name: "Remix",
    starterFlag: null,
  },
  {
    hasStarter: true,
    href: "/docs/installation/laravel",
    id: "laravel",
    name: "Laravel",
    starterFlag: "laravel",
  },
  {
    hasStarter: false,
    href: "/docs/installation/manual",
    id: "manual",
    name: "Manual",
    starterFlag: null,
  },
] as const;

export const DEFAULT_INSTALLATION_FRAMEWORK_ID: InstallationFrameworkId =
  "next";

const INSTALLATION_FRAMEWORKS_BY_ID = Object.fromEntries(
  INSTALLATION_FRAMEWORKS.map((framework) => [framework.id, framework])
) as Record<InstallationFrameworkId, InstallationFramework>;

export const getInstallationFramework = (
  id: InstallationFrameworkId
): InstallationFramework => INSTALLATION_FRAMEWORKS_BY_ID[id];

export const getStarterCommand = (
  framework: InstallationFramework
): string | null => {
  if (!framework.hasStarter) {
    return null;
  }

  if (framework.starterFlag) {
    return `npx shadcn@latest init @shark/starter -t ${framework.starterFlag}`;
  }

  return "npx shadcn@latest init @shark/starter";
};
