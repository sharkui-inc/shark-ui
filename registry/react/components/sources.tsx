"use client";

import { ark } from "@ark-ui/react/factory";
import { ArrowUpRightIcon, BookIcon } from "lucide-react";
import type React from "react";
import { cn } from "@/lib/utils";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleIndicator,
  CollapsibleTrigger,
} from "@/registry/react/components/collapsible";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/registry/react/components/hover-card";

export const Sources = (props: React.ComponentProps<typeof Collapsible>) => {
  const { className, ...rest } = props;

  return (
    <Collapsible
      className={cn("w-full min-w-0", "text-sm", className)}
      data-slot="sources"
      {...rest}
    />
  );
};

interface SourcesTriggerProps
  extends React.ComponentProps<typeof CollapsibleTrigger> {
  /**
   * The number of sources used.
   */
  count?: number;
  /**
   * Whether to show the trigger indicator.
   *
   * Defaults to `true`.
   */
  showTrigger?: boolean;
}

export const SourcesTrigger = (props: SourcesTriggerProps) => {
  const { count, showTrigger = true, className, children, ...rest } = props;

  return (
    <CollapsibleTrigger
      className={cn(
        "min-h-9 w-fit max-w-full",
        "flex items-center justify-start gap-2",
        "py-1",
        "text-muted-foreground text-start text-sm",
        "rounded-lg",
        "hover:text-foreground",
        "[&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-3.5",
        className
      )}
      data-align="start"
      data-slot="sources-trigger"
      {...rest}
    >
      {children ?? <span>Used {count ?? 0} sources</span>}
      {showTrigger ? <CollapsibleIndicator className="size-3.5" /> : null}
    </CollapsibleTrigger>
  );
};

export const SourcesContent = (
  props: React.ComponentProps<typeof CollapsibleContent>
) => {
  const { className, ...rest } = props;

  return (
    <CollapsibleContent
      className={cn("flex flex-col items-start gap-1", "mt-2", className)}
      data-slot="sources-content"
      {...rest}
    />
  );
};

const ALLOWED_HREF_PROTOCOLS = new Set(["http:", "https:", "mailto:"]);

const toSafeHref = (href: string | undefined): string | undefined => {
  if (!href) {
    return undefined;
  }

  const trimmed = href.trim();
  if (!trimmed || trimmed.startsWith("//")) {
    return undefined;
  }

  if (
    trimmed.startsWith("/") ||
    trimmed.startsWith("./") ||
    trimmed.startsWith("../") ||
    trimmed.startsWith("?") ||
    trimmed.startsWith("#")
  ) {
    return trimmed;
  }

  try {
    const url = new URL(trimmed);
    if (!ALLOWED_HREF_PROTOCOLS.has(url.protocol)) {
      return undefined;
    }
    return url.href;
  } catch {
    return undefined;
  }
};

interface SourceProps extends React.ComponentProps<typeof ark.a> {
  /**
   * The title of the source.
   */
  title?: string;
}

export const Source = (props: SourceProps) => {
  const { href, title, className, children, ...rest } = props;

  const safeHref = toSafeHref(href);

  return (
    <ark.a
      {...rest}
      className={cn(
        "min-h-8 w-fit max-w-full min-w-0",
        "inline-flex items-center gap-2",
        "px-2 py-1",
        "text-foreground text-sm",
        "rounded-lg",
        "border border-transparent",
        "outline-hidden",
        "hover:bg-muted",
        "[&_svg]:text-muted-foreground [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-3.5",
        "focus-visible:border-ring/64 focus-visible:ring-ring/24 focus-visible:ring-2",
        className
      )}
      data-slot="source"
      href={safeHref}
      rel="noreferrer"
      target={safeHref ? "_blank" : undefined}
    >
      <BookIcon aria-hidden="true" />
      <span className={cn("min-w-0", "truncate")}>{children ?? title}</span>
      <ArrowUpRightIcon aria-hidden="true" className="rtl:-scale-x-100" />
    </ark.a>
  );
};

interface InlineCitationProps extends React.ComponentProps<typeof ark.button> {
  /**
   * The href of the citation.
   */
  href?: string;
  /**
   * The index of the citation.
   */
  index?: number;
  /**
   * The title of the citation.
   */
  title?: string;
}

export const InlineCitation = (props: InlineCitationProps) => {
  const { href, index, title, className, children, ...rest } = props;

  const safeHref = toSafeHref(href);

  const label = index === undefined ? "Source" : String(index);

  const trigger = (
    <ark.button
      className={cn(
        "size-4",
        "inline-flex items-center justify-center",
        "ms-0.5",
        "bg-muted",
        "text-muted-foreground text-xs font-medium",
        "rounded-full",
        "-translate-y-0.5",
        "hover:bg-accent hover:text-accent-foreground",
        className
      )}
      data-slot="inline-citation"
      type="button"
      {...rest}
    >
      {children ?? label}
    </ark.button>
  );

  if (!(title || href)) {
    return trigger;
  }

  return (
    <HoverCard positioning={{ placement: "top" }}>
      <HoverCardTrigger asChild>{trigger}</HoverCardTrigger>
      <HoverCardContent className={cn("w-64", "gap-1", "p-3", "text-xs")}>
        {title ? <p className="text-foreground font-medium">{title}</p> : null}
        {safeHref ? (
          <a
            className={cn(
              "text-muted-foreground break-all underline-offset-2",
              "hover:underline"
            )}
            href={safeHref}
            rel="noreferrer"
            target="_blank"
          >
            {safeHref}
          </a>
        ) : null}
      </HoverCardContent>
    </HoverCard>
  );
};
