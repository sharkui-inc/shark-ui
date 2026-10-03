"use client";

import React from "react";
import { NavLink } from "@/components/nav-link";
import { SITE_CONFIG } from "@/config/site";
import { Button } from "@/registry/react/components/button";

type ErrorAction =
  | { external?: boolean; href: string; label: string }
  | { label: string; onClick: () => void };

export interface RuntimeErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export type ErrorPageProps =
  | (RuntimeErrorProps & { kind: "error" })
  | { kind: "not-found" };

const ErrorActionButton = (props: {
  action: ErrorAction;
  variant?: "default" | "outline";
}) => {
  const { action, variant = "default" } = props;

  if ("onClick" in action) {
    return (
      <Button
        className="w-full sm:w-auto"
        onClick={action.onClick}
        size="xl"
        variant={variant}
      >
        {action.label}
      </Button>
    );
  }

  const link = action.external ? (
    <a href={action.href} rel="noopener noreferrer" target="_blank">
      {action.label}
    </a>
  ) : (
    <NavLink href={action.href}>{action.label}</NavLink>
  );

  return (
    <Button asChild className="w-full sm:w-auto" size="xl" variant={variant}>
      {link}
    </Button>
  );
};

const ErrorIllustration = (props: { code: string }) => {
  const { code } = props;

  return (
    <div
      aria-hidden="true"
      className="relative flex h-44 w-full max-w-sm items-center justify-center sm:h-48"
    >
      <div className="relative z-10 w-64 -rotate-2 overflow-hidden rounded-xl border border-border bg-card shadow-sm/4 sm:w-72">
        <div className="flex h-8 items-center gap-1.5 border-border border-b px-3">
          <span className="size-2 rounded-full bg-muted-foreground/24" />
          <span className="size-2 rounded-full bg-muted-foreground/24" />
          <span className="size-2 rounded-full bg-muted-foreground/24" />
          <span className="ms-2 h-1.5 w-20 rounded-full bg-muted" />
        </div>
        <div className="grid h-28 place-items-center bg-card">
          <span className="font-heading font-semibold text-4xl text-muted-foreground tracking-tight sm:text-5xl lg:text-6xl">
            {code}
          </span>
        </div>
      </div>
    </div>
  );
};

const ErrorAtmosphere = () => (
  <div
    aria-hidden="true"
    className="pointer-events-none absolute inset-x-0 bottom-0 z-0 h-[48%] overflow-hidden"
  >
    <svg
      aria-hidden="true"
      className="absolute inset-0 size-full animate-[pulse_8s_ease-in-out_infinite] motion-reduce:animate-none!"
      focusable="false"
      preserveAspectRatio="none"
      viewBox="0 0 1440 460"
    >
      <path
        d="M-80 235c150-92 250-84 390-3s210 82 330 15 205-97 335-27 215 96 350 10 195-87 295-43v273H-80Z"
        fill="var(--primary)"
        fillOpacity="0.04"
      />
      <path
        d="M-80 235c150-92 250-84 390-3s210 82 330 15 205-97 335-27 215 96 350 10 195-87 295-43"
        fill="none"
        stroke="var(--primary)"
        strokeOpacity="0.2"
        strokeWidth="2"
      />
    </svg>
  </div>
);

export const ErrorPage = (props: ErrorPageProps) => {
  const error = props.kind === "error" ? props.error : undefined;
  const isNotFound = props.kind === "not-found";

  React.useEffect(() => {
    if (error) {
      console.error(error);
    }
  }, [error]);

  const code = isNotFound ? "404" : "500";
  const description = isNotFound
    ? "We looked under the sea. No page. Just one fish."
    : "A wave broke our code. Please try again.";
  const titleLines = isNotFound
    ? ["Oops! This", "page sank."]
    : ["Oops! We", "hit a wave."];
  const primaryAction: ErrorAction =
    props.kind === "not-found"
      ? { href: "/", label: "Swim home" }
      : { label: "Try again", onClick: props.reset };
  const secondaryAction: ErrorAction = isNotFound
    ? {
        external: true,
        href: `${SITE_CONFIG.repoUrl}/issues`,
        label: "Report Issue",
      }
    : { href: "/", label: "Swim Home" };

  return (
    <main
      className="relative isolate flex min-h-[calc(100svh-var(--header-height))] w-full flex-col overflow-x-clip px-4 pt-8 pb-16 sm:px-6 sm:pt-10 sm:pb-20 [@media(max-height:42rem)]:pt-4 [@media(max-height:42rem)]:pb-8"
      id="skip-nav-content"
    >
      <ErrorAtmosphere />
      <section
        aria-describedby="error-state-description"
        aria-labelledby="error-state-title"
        className="relative z-10 mx-auto flex w-full max-w-5xl flex-1 -translate-y-16 flex-col items-center justify-center gap-6 text-center [@media(max-height:42rem)]:translate-y-0 [@media(max-height:42rem)]:gap-4"
      >
        <ErrorIllustration code={code} />

        <div className="flex w-full flex-col items-center gap-6">
          <div className="flex flex-col items-center gap-4">
            <h1
              className="w-fit max-w-full font-heading font-semibold text-5xl leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl"
              id="error-state-title"
            >
              {titleLines.map((line) => (
                <span className="block whitespace-nowrap" key={line}>
                  {line}
                </span>
              ))}
            </h1>
            <p
              className="max-w-xl text-lg text-muted-foreground leading-relaxed sm:text-xl"
              id="error-state-description"
            >
              {description}
            </p>
          </div>

          {error?.message && process.env.NODE_ENV === "development" && (
            <pre className="max-h-48 w-full max-w-[42ch] overflow-auto rounded-lg border border-border bg-muted px-3 py-2 text-start font-mono text-muted-foreground text-xs">
              {error.message}
            </pre>
          )}

          <div className="flex w-full flex-col items-center gap-3 sm:w-auto sm:flex-row">
            <ErrorActionButton action={primaryAction} />
            <ErrorActionButton action={secondaryAction} variant="outline" />
          </div>
        </div>
      </section>
    </main>
  );
};
