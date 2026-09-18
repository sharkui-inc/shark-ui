import { ArrowUpRightIcon, InfoIcon } from "lucide-react";
import Link from "next/link";
import type React from "react";
import { CodeBlockCommand } from "@/components/code-block-command";
import { CodeCollapsibleWrapper } from "@/components/code-collapsible-wrapper";
import { CodeTabs } from "@/components/code-tabs";
import { ComponentSource } from "@/components/component-source";
import { ComponentPreview } from "@/components/docs/component-preview/component-preview";
import { RTLComponentPreview } from "@/components/docs/component-preview/rtl-component-preview";
import { DocsCodeFrame } from "@/components/docs-code-block";
import { PreviewIframe } from "@/components/preview-iframe";
import { RegistryDependencies } from "@/components/registry-dependencies";
import { cn } from "@/lib/utils";
import {
  Alert,
  AlertAction,
  AlertDescription,
  AlertTitle,
} from "@/registry/react/components/alert";
import { Button } from "@/registry/react/components/button";
import { ScrollArea } from "@/registry/react/components/scroll-area";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/registry/react/components/tabs";
import {
  getIconForLanguageExtension,
  languageFromFileName,
} from "@/utils/file-extension";
import {
  Table,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./registry/react/components/table";

export const mdxComponents = {
  Alert: ({ className, ...props }: React.ComponentProps<typeof Alert>) => (
    <Alert className={cn("my-6", className)} {...props} />
  ),
  AlertAction,
  AlertDescription,
  AlertTitle,
  a: ({ href, className, children, ...props }: React.ComponentProps<"a">) => {
    const isExternal = typeof href === "string" && href.startsWith("http");

    return (
      <Link
        className={cn(
          "relative",
          "max-w-full",
          "inline-flex items-center gap-0.5",
          "-mx-1 px-1",
          "font-medium text-foreground",
          "rounded-md border border-transparent",
          "no-underline",
          "outline-hidden",
          "focus-visible:z-10 focus-visible:border-ring/64 focus-visible:ring-2 focus-visible:ring-ring/24",
          "**:[code]:decoration-primary",
          className
        )}
        href={href ?? "#"}
        {...(isExternal && {
          rel: "noopener noreferrer",
          target: "_blank",
        })}
        {...props}
      >
        <span className="underline underline-offset-4">{children}</span>
        {isExternal ? (
          <ArrowUpRightIcon className="size-3.5 opacity-80" />
        ) : null}
      </Link>
    );
  },
  Button,
  blockquote: ({ className, ...props }: React.ComponentProps<"blockquote">) => (
    <blockquote
      className={cn("mt-6 border-l-2 ps-6 italic", className)}
      {...props}
    />
  ),
  CodeCollapsibleWrapper,
  CodeTabs,
  ComponentPreview,
  ComponentSource,
  code: ({
    className,
    __raw__: _raw,
    __src__: _src,
    ...props
  }: React.ComponentProps<"code"> & {
    __raw__?: string;
    __src__?: string;
  }) => {
    // Inline Code.
    if (typeof props.children === "string") {
      return (
        <code
          className={cn(
            "relative",
            "px-1",
            "bg-primary/8",
            "font-mono text-primary text-sm",
            "rounded-md",
            className
          )}
          {...props}
        />
      );
    }

    return <code {...props} />;
  },
  figcaption: ({
    className,
    children,
    ...props
  }: React.ComponentProps<"figcaption">) => {
    const dataLanguage =
      "data-language" in props && typeof props["data-language"] === "string"
        ? props["data-language"]
        : undefined;

    const iconLanguage =
      languageFromFileName(
        typeof children === "string" ? children : undefined
      ) ?? dataLanguage;

    const iconExtension = iconLanguage
      ? getIconForLanguageExtension(iconLanguage)
      : null;

    return (
      <figcaption
        className={cn(
          "flex items-center gap-2",
          "text-[.8125rem] text-code-foreground",
          "[&_svg]:size-4.5 [&_svg]:text-code-foreground [&_svg]:opacity-64 sm:[&_svg]:size-4",
          className
        )}
        {...props}
      >
        {iconExtension}
        {children}
      </figcaption>
    );
  },
  h1: ({ className, ...props }: React.ComponentProps<"h1">) => (
    <h1
      className={cn(
        "mt-2 scroll-m-28",
        "font-heading font-semibold text-3xl tracking-tight",
        iframeAfterTextClassName,
        className
      )}
      {...props}
    />
  ),
  h2: ({ id, className, children, ...props }: React.ComponentProps<"h2">) => {
    const headingId = id ?? getHeadingId(children);

    return (
      <h2
        {...props}
        className={cn(
          "mt-10 scroll-m-28",
          "font-heading font-medium text-xl tracking-tight",
          "first:mt-0",
          "lg:mt-12",
          "[&+.steps>h3]:mt-4!",
          "[&+.steps]:mt-0!",
          "[&+h3]:mt-6!",
          "[&+p]:mt-4!",
          "[&+]*:[code]:text-xl",
          iframeAfterTextClassName,
          className
        )}
        id={headingId}
      >
        <HeadingAnchor id={headingId}>{children}</HeadingAnchor>
      </h2>
    );
  },
  h3: ({ id, className, children, ...props }: React.ComponentProps<"h3">) => {
    const headingId = id ?? getHeadingId(children);

    return (
      <h3
        className={cn(
          "mt-12 scroll-m-28",
          "font-heading text-lg",
          "font-medium tracking-tight",
          "[&+p]:mt-4!",
          "*:[code]:text-xl",
          iframeAfterTextClassName,
          className
        )}
        id={headingId}
        {...props}
      >
        <HeadingAnchor id={headingId}>{children}</HeadingAnchor>
      </h3>
    );
  },
  h4: ({ className, children, ...props }: React.ComponentProps<"h4">) => {
    const headingId = getHeadingId(children);

    return (
      <h4
        className={cn(
          "mt-8 scroll-m-28",
          "font-heading font-medium text-base tracking-tight",
          iframeAfterTextClassName,
          className
        )}
        id={headingId}
        {...props}
      >
        <HeadingAnchor id={headingId}>{children}</HeadingAnchor>
      </h4>
    );
  },
  h5: ({ id, className, children, ...props }: React.ComponentProps<"h5">) => {
    const headingId = id ?? getHeadingId(children);

    return (
      <h5
        className={cn(
          "mt-8 scroll-m-28",
          "font-heading font-medium text-base tracking-tight",
          iframeAfterTextClassName,
          className
        )}
        {...props}
      >
        <HeadingAnchor id={headingId}>{children}</HeadingAnchor>
      </h5>
    );
  },
  h6: ({ id, className, children, ...props }: React.ComponentProps<"h6">) => {
    const headingId = id ?? getHeadingId(children);

    return (
      <h6
        className={cn(
          "mt-8 scroll-m-28",
          "font-medium text-base tracking-tight",
          iframeAfterTextClassName,
          className
        )}
        id={headingId}
        {...props}
      >
        <HeadingAnchor id={headingId}>{children}</HeadingAnchor>
      </h6>
    );
  },
  hr: ({ ...props }: React.ComponentProps<"hr">) => (
    <hr className="my-4 md:my-8" {...props} />
  ),
  InfoIcon,
  img: ({
    alt = "",
    className,
    height,
    width,
    ...props
  }: React.ComponentProps<"img">) => (
    <img
      alt={alt}
      className={cn("rounded-lg", className)}
      height={height}
      width={width}
      {...props}
    />
  ),
  li: ({ className, ...props }: React.ComponentProps<"li">) => (
    <li className={cn("mt-2", className)} {...props} />
  ),
  ol: ({ className, ...props }: React.ComponentProps<"ol">) => (
    <ol
      className={cn("my-6 ms-6 list-decimal text-muted-foreground", className)}
      {...props}
    />
  ),
  PreviewIframe,
  p: ({ className, ...props }: React.ComponentProps<"p">) => (
    <p
      className={cn(
        "not-first:mt-6 text-muted-foreground leading-relaxed",
        iframeAfterTextClassName,
        className
      )}
      {...props}
    />
  ),
  pre: ({
    className,
    tabIndex: _tabIndex,
    id: _id,
    "data-language": language,
    "data-title": title,
    __npm__,
    __raw__,
    ...props
  }: React.ComponentProps<"pre"> & {
    "data-language"?: string;
    "data-title"?: string;
    __npm__?: string;
    __raw__?: string;
  }) => {
    if (__npm__) {
      return <CodeBlockCommand __npm__={__npm__} />;
    }

    return (
      <DocsCodeFrame
        copyValue={__raw__}
        data-slot="docs-mdx-code-block"
        language={language}
        rawCode={__raw__}
        title={title}
      >
        <pre className={className} data-language={language} {...props} />
      </DocsCodeFrame>
    );
  },
  RegistryDependencies,
  RTLComponentPreview,
  Step: ({ className, ...props }: React.ComponentProps<"h3">) => (
    <h3
      className={cn(
        "mt-8 scroll-m-32 tracking-tight first:mt-2",
        "before:me-2 before:inline-flex before:size-6 before:items-center before:justify-center before:bg-code",
        "before:text-center before:-indent-px before:font-mono before:text-xs before:tabular-nums",
        "before:rounded-full before:border before:border-border before:font-medium before:content-[counter(step)]",
        "md:before:absolute md:before:-ms-12.5 md:before:-mt-1 md:before:size-8",
        className
      )}
      data-slot="step"
      {...props}
    />
  ),
  Steps: ({ ...props }) => (
    <div
      className={cn(
        "steps mb-12 [counter-reset:step] md:ms-4 md:border-s md:ps-8",
        "*:data-[slot=step]:[counter-increment:step]"
      )}
      {...props}
    />
  ),
  strong: ({ className, ...props }: React.HTMLAttributes<HTMLElement>) => (
    <strong
      className={cn("font-medium text-foreground", className)}
      {...props}
    />
  ),
  Tabs,
  TabsContent: ({
    className,
    ...props
  }: React.ComponentProps<typeof TabsContent>) => (
    <TabsContent
      className={cn(
        "relative [&_h3]:font-medium [&_h3]:text-base *:[figure]:first:mt-0",
        className
      )}
      {...props}
    />
  ),
  TabsList,
  TabsTrigger,
  table: ({ className, ...props }: React.ComponentProps<typeof Table>) => (
    <ScrollArea className="my-6 rounded-xl border">
      <Table
        className={cn(
          "relative w-full border-none [&_tbody_tr:last-child]:border-b-0",
          className
        )}
        isHoverable={false}
        {...props}
      />
    </ScrollArea>
  ),
  td: ({ className, ...props }: React.ComponentProps<typeof TableCell>) => (
    <TableCell
      className={cn(
        "**:[code]:bg-transparent **:[code]:text-foreground",
        className
      )}
      {...props}
    />
  ),
  th: ({ className, ...props }: React.ComponentProps<typeof TableHead>) => (
    <TableHead className={cn("font-medium", className)} {...props} />
  ),
  thead: ({
    className,
    ...props
  }: React.ComponentProps<typeof TableHeader>) => (
    <TableHeader className={cn("bg-muted", className)} {...props} />
  ),
  tr: (props: React.ComponentProps<typeof TableRow>) => <TableRow {...props} />,
  ul: ({ className, ...props }: React.ComponentProps<"ul">) => (
    <ul
      className={cn("my-6 ms-6 list-disc text-muted-foreground", className)}
      {...props}
    />
  ),
};

const iframeAfterTextClassName =
  "[&+iframe]:my-6 [&+[data-slot=preview-iframe]]:my-6";

const getHeadingId = (children: React.ReactNode) =>
  children
    ?.toString()
    .replace(/ /g, "-")
    .replace(/'/g, "")
    .replace(/\?/g, "")
    .toLowerCase();

const HeadingAnchor = ({ id, children }: React.ComponentProps<"a">) => {
  if (!id) {
    return children;
  }

  return (
    <a
      className={cn(
        "group",
        "relative",
        "max-w-full",
        "inline-block",
        "-mx-1 px-1",
        "rounded-md border border-transparent",
        "no-underline underline-offset-4",
        "outline-hidden",
        "focus-visible:z-10 focus-visible:border-ring/64 focus-visible:ring-2 focus-visible:ring-ring/24"
      )}
      href={`#${id}`}
    >
      <span className="underline-offset-4 group-hover:underline">
        {children}
      </span>
      <span
        aria-hidden="true"
        className="ml-2 text-muted-foreground opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100"
      >
        #
      </span>
    </a>
  );
};
