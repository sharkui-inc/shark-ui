import type React from "react";
import { AstroIcon } from "@/components/icons/astro";
import { LaravelIcon } from "@/components/icons/laravel";
import { NextIcon } from "@/components/icons/next";
import { ReactIcon } from "@/components/icons/react";
import { ReactRouterIcon } from "@/components/icons/react-router";
import { RemixIcon } from "@/components/icons/remix";
import { TanstackIcon } from "@/components/icons/tanstack-start";
import { ViteIcon } from "@/components/icons/vite";
import type { InstallationFrameworkId } from "@/lib/installation-frameworks";

export const FRAMEWORK_ICONS: Record<InstallationFrameworkId, React.ReactNode> =
  {
    astro: <AstroIcon className="size-8" />,
    laravel: <LaravelIcon className="size-8" />,
    manual: <ReactIcon className="size-8" />,
    next: <NextIcon className="size-8" />,
    "react-router": <ReactRouterIcon className="size-8" />,
    remix: <RemixIcon className="size-8" />,
    "tanstack-start": <TanstackIcon className="size-8" />,
    vite: <ViteIcon className="size-8" />,
  };
