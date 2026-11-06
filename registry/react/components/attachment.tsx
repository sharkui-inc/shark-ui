"use client";

import { ark } from "@ark-ui/react/factory";
import { XIcon } from "lucide-react";
import type React from "react";
import { tv, type VariantProps } from "tailwind-variants";
import { cn } from "@/lib/utils";
import { Button, type ButtonProps } from "@/registry/react/components/button";
import { FileThumbnail } from "@/registry/react/components/file-thumbnail";
import { IconTile } from "@/registry/react/components/icon-tile";
import { ScrollArea } from "@/registry/react/components/scroll-area";

export const attachmentVariants = tv({
  base: [
    "group",
    "relative",
    "w-fit max-w-full min-w-0",
    "shrink-0",
    "flex flex-nowrap",
    "not-has-[>[data-variant=image]]:px-2.5",
    "bg-card",
    "text-card-foreground",
    "border-input rounded-xl border shadow-xs/4",
    "transition-colors",
    "motion-reduce:transition-none",
    "has-[>a,>button]:hover:bg-muted/48",
    "data-[state=idle]:border-dashed",
    "data-[state=error]:border-destructive/64",
    "dark:data-[state=error]:border-destructive-foreground/64",
  ],
  defaultVariants: {
    orientation: "horizontal",
    size: "md",
  },
  variants: {
    orientation: {
      horizontal: ["min-w-40", "items-center"],
      vertical: ["w-24 has-data-[slot=attachment-content]:w-30", "flex-col"],
    },
    size: {
      lg: [
        "gap-3",
        "text-base",
        "not-has-[>[data-variant=image]]:has-data-[slot=attachment-content]:py-2.5",
      ],
      md: [
        "gap-2",
        "text-sm",
        "not-has-[>[data-variant=image]]:has-data-[slot=attachment-content]:py-2",
      ],
      sm: [
        "gap-2.5",
        "text-xs",
        "not-has-[>[data-variant=image]]:has-data-[slot=attachment-content]:py-1.5",
      ],
      xs: [
        "gap-1.5",
        "text-xs",
        "rounded-lg",
        "not-has-[>[data-variant=image]]:has-data-[slot=attachment-content]:py-1",
      ],
    },
  },
});

interface AttachmentProps
  extends React.ComponentProps<typeof ark.div>,
    VariantProps<typeof attachmentVariants> {
  /**
   * Set the state of the attachment
   */
  state?: "done" | "error" | "idle" | "processing" | "uploading";
}

export const Attachment = (props: AttachmentProps) => {
  const {
    state = "done",
    size = "md",
    orientation = "horizontal",
    className,
    ...rest
  } = props;

  return (
    <ark.div
      className={cn(attachmentVariants({ orientation, size }), className)}
      data-orientation={orientation}
      data-size={size}
      data-slot="attachment"
      data-state={state}
      {...rest}
    />
  );
};

export const attachmentMediaVariants = tv({
  base: [
    "relative",
    "aspect-square w-10",
    "shrink-0",
    "flex items-center justify-center",
    "bg-muted",
    "text-foreground",
    "overflow-hidden",
    "group-data-[orientation=vertical]:w-full",
    "group-data-[size=lg]:w-12",
    "group-data-[size=sm]:w-8",
    "group-data-[size=xs]:w-7",
    "group-data-[orientation=vertical]:**:data-[slot=spinner]:size-6",
    "[&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4",
    "group-data-[orientation=vertical]:[&_svg:not([class*='size-'])]:size-6",
    "group-data-[size=lg]:[&_svg:not([class*='size-'])]:size-5",
    "group-data-[size=xs]:[&_svg:not([class*='size-'])]:size-3.5",
  ],
  defaultVariants: {
    variant: "icon",
  },
  variants: {
    variant: {
      file: [
        "w-8",
        "bg-transparent",
        "overflow-visible",
        "group-data-[size=lg]:w-10",
        "group-data-[size=sm]:w-6.5",
        "group-data-[size=xs]:w-6",
      ],
      icon: "",
      image: [
        "rounded-[inherit]",
        "after:border-border after:pointer-events-none after:absolute after:inset-0 after:rounded-[inherit] after:border after:mix-blend-darken",
        "dark:after:mix-blend-lighten",
        "[&>img]:aspect-square [&>img]:size-full [&>img]:object-cover",
      ],
    },
  },
});

interface AttachmentMediaProps
  extends React.ComponentProps<typeof ark.div>,
    VariantProps<typeof attachmentMediaVariants> {
  /**
   * The format of the attachment
   */
  format?: string;
}

export const AttachmentMedia = (props: AttachmentMediaProps) => {
  const { format, variant = "icon", className, children, ...rest } = props;
  let content = children;

  if (variant === "file") {
    content = (
      <FileThumbnail
        className={cn(
          "group-data-[size=lg]:scale-[1.2]",
          "group-data-[size=sm]:scale-[.8]",
          "group-data-[size=xs]:scale-[.7]"
        )}
        format={format}
        size="sm"
      />
    );
  } else if (variant === "icon") {
    content = (
      <IconTile aria-hidden="true" className="size-full">
        {children}
      </IconTile>
    );
  }

  return (
    <ark.div
      className={cn(attachmentMediaVariants({ variant }), className)}
      data-slot="attachment-media"
      data-variant={variant}
      {...rest}
    >
      {content}
    </ark.div>
  );
};

export const AttachmentContent = (
  props: React.ComponentProps<typeof ark.div>
) => {
  const { className, ...rest } = props;

  return (
    <ark.div
      className={cn(
        "max-w-full min-w-0",
        "flex-1",
        "leading-tight",
        "group-data-[orientation=vertical]:px-1",
        className
      )}
      data-slot="attachment-content"
      {...rest}
    />
  );
};

export const AttachmentTitle = (
  props: React.ComponentProps<typeof ark.span>
) => {
  const { className, ...rest } = props;

  return (
    <ark.span
      className={cn(
        "max-w-full min-w-0",
        "block",
        "truncate font-medium",
        "group-data-[state=processing]:shimmer",
        "group-data-[state=uploading]:shimmer",
        className
      )}
      data-slot="attachment-title"
      {...rest}
    />
  );
};

export const AttachmentDescription = (
  props: React.ComponentProps<typeof ark.span>
) => {
  const { className, ...rest } = props;

  return (
    <ark.span
      className={cn(
        "block",
        "max-w-full min-w-0",
        "mt-0.5",
        "text-muted-foreground truncate text-xs",
        "group-data-[state=error]:text-destructive",
        "dark:group-data-[state=error]:text-destructive-foreground",
        className
      )}
      data-slot="attachment-description"
      {...rest}
    />
  );
};

export const AttachmentActions = (
  props: React.ComponentProps<typeof ark.div>
) => {
  const { className, ...rest } = props;

  return (
    <ark.div
      className={cn(
        "relative z-20",
        "shrink-0",
        "flex items-center self-start",
        "gap-1",
        "group-data-[orientation=vertical]:absolute group-data-[orientation=vertical]:inset-e-1.5 group-data-[orientation=vertical]:top-1.5",
        "group-data-[orientation=vertical]:*:data-[slot=attachment-action]:size-5",
        className
      )}
      data-slot="attachment-actions"
      {...rest}
    />
  );
};

export const AttachmentAction = (props: ButtonProps) => {
  const { variant = "ghost", size = "icon-xs", pill = true, ...rest } = props;

  return (
    <Button
      data-slot="attachment-action"
      pill={pill}
      size={size}
      variant={variant}
      {...rest}
    />
  );
};

export const AttachmentRemove = (props: ButtonProps) => {
  const { "aria-label": ariaLabel = "Remove", className, ...rest } = props;

  return (
    <AttachmentAction
      aria-label={ariaLabel}
      className={cn(
        "transition-opacity duration-150 ease-out",
        "[@media(hover:hover)_and_(pointer:fine)]:opacity-0",
        "group-focus-within:opacity-100",
        "group-hover:opacity-100",
        className
      )}
      data-slot="attachment-remove"
      {...rest}
    >
      <XIcon aria-hidden="true" />
    </AttachmentAction>
  );
};

export const AttachmentTrigger = (
  props: React.ComponentProps<typeof ark.button>
) => {
  const { type, className, ...rest } = props;

  return (
    <ark.button
      className={cn("absolute inset-0 z-10", "outline-hidden", className)}
      data-slot="attachment-trigger"
      type={type ?? "button"}
      {...rest}
    />
  );
};

export const AttachmentGroup = (
  props: React.ComponentProps<typeof ark.div>
) => {
  const { className, children, ...rest } = props;

  return (
    <ScrollArea
      className={cn("h-auto", className)}
      orientation="horizontal"
      overscrollContain
      scrollFade
    >
      <ark.div
        className={cn(
          "h-14 w-max min-w-full",
          "flex gap-3",
          "*:data-[slot=attachment]:h-full *:data-[slot=attachment]:flex-none",
          "[&>[data-slot=attachment]:not(:has([data-slot=attachment-content]))]:w-14"
        )}
        data-slot="attachment-group"
        {...rest}
      >
        {children}
      </ark.div>
    </ScrollArea>
  );
};
