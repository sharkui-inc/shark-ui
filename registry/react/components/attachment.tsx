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
    "w-fit min-w-0 max-w-full",
    "flex shrink-0 flex-nowrap",
    "not-has-[>[data-variant=image]]:px-2.5",
    "bg-card text-card-foreground",
    "rounded-xl border border-input shadow-xs/4",
    "transition-colors",
    "motion-reduce:transition-none",
    "has-[>a,>button]:hover:bg-muted/48",
    "data-[state=idle]:border-dashed",
    "data-[state=error]:border-destructive/64 dark:data-[state=error]:border-destructive-foreground/64",
  ],
  defaultVariants: {
    orientation: "horizontal",
    size: "md",
  },
  variants: {
    orientation: {
      horizontal: "min-w-40 items-center",
      vertical: "w-24 flex-col has-data-[slot=attachment-content]:w-30",
    },
    size: {
      lg: "gap-3 text-base not-has-[>[data-variant=image]]:has-data-[slot=attachment-content]:py-2.5",
      md: "gap-2 text-sm not-has-[>[data-variant=image]]:has-data-[slot=attachment-content]:py-2",
      sm: "gap-2.5 text-xs not-has-[>[data-variant=image]]:has-data-[slot=attachment-content]:py-1.5",
      xs: "gap-1.5 rounded-lg text-xs not-has-[>[data-variant=image]]:has-data-[slot=attachment-content]:py-1",
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
    "flex shrink-0 items-center justify-center",
    "bg-muted",
    "text-foreground",
    "overflow-hidden",
    "group-data-[orientation=vertical]:w-full",
    "group-data-[size=lg]:w-12 group-data-[size=sm]:w-8 group-data-[size=xs]:w-7",
    "group-data-[orientation=vertical]:**:data-[slot=spinner]:size-6",
    "[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none",
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
        "w-8 overflow-visible bg-transparent",
        "group-data-[size=lg]:w-10",
        "group-data-[size=sm]:w-6.5",
        "group-data-[size=xs]:w-6",
      ],
      icon: "",
      image: [
        "rounded-[inherit]",
        "after:pointer-events-none after:absolute after:inset-0 after:rounded-[inherit] after:border after:border-border after:mix-blend-darken dark:after:mix-blend-lighten",
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
  const { children, className, format, variant = "icon", ...rest } = props;
  let content = children;

  if (variant === "file") {
    content = (
      <FileThumbnail
        className="group-data-[size=lg]:scale-[1.2] group-data-[size=sm]:scale-[.8] group-data-[size=xs]:scale-[.7]"
        format={format}
        size="sm"
      />
    );
  } else if (variant === "icon") {
    content = (
      <IconTile aria-hidden className="size-full">
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
        "min-w-0 max-w-full",
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
        "block min-w-0 max-w-full truncate font-medium",
        "group-data-[state=processing]:shimmer group-data-[state=uploading]:shimmer",
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
        "min-w-0 max-w-full",
        "mt-0.5",
        "truncate text-muted-foreground text-xs",
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
        "flex shrink-0 items-center self-start",
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
  const { className, "aria-label": ariaLabel = "Remove", ...rest } = props;

  return (
    <AttachmentAction
      aria-label={ariaLabel}
      className={cn(
        "transition-opacity duration-150 ease-out",
        "[@media(hover:hover)_and_(pointer:fine)]:opacity-0",
        "group-focus-within:opacity-100 group-hover:opacity-100",
        "motion-reduce:transition-none",
        className
      )}
      data-slot="attachment-remove"
      {...rest}
    >
      <XIcon aria-hidden />
    </AttachmentAction>
  );
};

export const AttachmentTrigger = (
  props: React.ComponentProps<typeof ark.button>
) => {
  const { className, type, ...rest } = props;

  return (
    <ark.button
      className={cn("absolute inset-0 z-10 outline-hidden", className)}
      data-slot="attachment-trigger"
      type={type ?? "button"}
      {...rest}
    />
  );
};

export const AttachmentGroup = (
  props: React.ComponentProps<typeof ark.div>
) => {
  const { children, className, ...rest } = props;

  return (
    <ScrollArea
      className={cn("h-auto", className)}
      orientation="horizontal"
      overscrollContain
      scrollFade
    >
      <ark.div
        className={cn(
          "flex h-14 w-max min-w-full gap-3",
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
