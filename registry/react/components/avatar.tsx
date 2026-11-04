"use client";

import {
  Avatar as ArkAvatar,
  useAvatarContext as useArkAvatarContext,
} from "@ark-ui/react/avatar";
import { ark } from "@ark-ui/react/factory";
import type React from "react";
import { tv, type VariantProps } from "tailwind-variants";
import { cn } from "@/lib/utils";
import {
  Status,
  type statusVariants,
} from "@/registry/react/components/status";

const avatarVariants = tv({
  base: [
    "group/avatar",
    "relative",
    "size-8",
    "shrink-0",
    "inline-flex items-center justify-center",
    "bg-background",
    "text-xs font-medium",
    "select-none",
    "rounded-full",
    "after:border-border after:absolute after:inset-0 after:rounded-[inherit] after:border after:mix-blend-darken",
    "dark:after:mix-blend-lighten",
    "[--avatar-size:--spacing(8)]",
    "[--avatar-badge-offset:--spacing(1.25)]",
    "[--avatar-badge-x:calc(100%-var(--avatar-badge-offset))]",
    "rtl:[--avatar-badge-x:var(--avatar-badge-offset)]",
    "[--avatar-badge-mask:none]",
    "supports-[mask-composite:subtract]:[--avatar-badge-mask:linear-gradient(#000,#000),radial-gradient(circle_at_var(--avatar-badge-x)_calc(100%-var(--avatar-badge-offset)),#000_calc(var(--avatar-badge-offset)+2px),transparent_0)]",
    "has-data-[slot=avatar-badge]:bg-transparent",
    "has-data-[slot=avatar-badge]:**:data-[slot=avatar-image]:mask-(--avatar-badge-mask)",
    "has-data-[slot=avatar-badge]:**:data-[slot=avatar-image]:mask-subtract",
    "has-data-[slot=avatar-badge]:**:data-[slot=avatar-fallback]:mask-(--avatar-badge-mask)",
    "has-data-[slot=avatar-badge]:**:data-[slot=avatar-fallback]:mask-subtract",
    "has-data-[slot=avatar-badge]:after:mask-(--avatar-badge-mask)",
    "has-data-[slot=avatar-badge]:after:mask-subtract",
  ],
  defaultVariants: {
    size: "md",
  },
  variants: {
    size: {
      lg: [
        "size-10",
        "[--avatar-size:--spacing(10)]",
        "[--avatar-badge-offset:--spacing(1.5)]",
      ],
      md: [
        "size-8",
        "[--avatar-size:--spacing(8)]",
        "[--avatar-badge-offset:--spacing(1.25)]",
      ],
      sm: [
        "size-6",
        "[--avatar-size:--spacing(6)]",
        "[--avatar-badge-offset:--spacing(1)]",
      ],
    },
  },
});

interface AvatarProps
  extends React.ComponentProps<typeof ArkAvatar.Root>,
    VariantProps<typeof avatarVariants> {}

export const useAvatarContext = useArkAvatarContext;

export const Avatar = (props: AvatarProps) => {
  const { size = "md", className, ...rest } = props;

  return (
    <ArkAvatar.Root
      className={cn(avatarVariants({ size }), className)}
      data-size={size}
      data-slot="avatar"
      {...rest}
    />
  );
};

export const AvatarImage = (
  props: React.ComponentProps<typeof ArkAvatar.Image>
) => {
  const { className, ...rest } = props;

  return (
    <ArkAvatar.Image
      className={cn(
        "size-full",
        "aspect-square object-cover",
        "rounded-[inherit]",
        className
      )}
      data-slot="avatar-image"
      {...rest}
    />
  );
};

export const AvatarFallback = (
  props: React.ComponentProps<typeof ArkAvatar.Fallback>
) => {
  const { className, ...rest } = props;

  return (
    <ArkAvatar.Fallback
      className={cn(
        "size-full",
        "flex items-center justify-center",
        "bg-muted",
        "rounded-[inherit]",
        "[&_svg]:size-4 group-data-[size=lg]/avatar:[&_svg]:size-4.5 group-data-[size=sm]/avatar:[&_svg]:size-3",
        className
      )}
      data-slot="avatar-fallback"
      {...rest}
    />
  );
};

interface AvatarBadgeProps
  extends React.ComponentProps<typeof ark.span>,
    Pick<VariantProps<typeof statusVariants>, "variant"> {}

export const AvatarBadge = (props: AvatarBadgeProps) => {
  const { variant, className, ...rest } = props;

  return (
    <Status
      className={cn(
        "absolute inset-e-0 bottom-0 z-10",
        "flex items-center justify-center",
        "group-data-[size=sm]/avatar:size-2",
        "group-data-[size=sm]/avatar:[&_svg]:hidden",
        "group-data-[size=md]/avatar:size-2.5",
        "group-data-[size=md]/avatar:[&_svg]:size-2",
        "group-data-[size=lg]/avatar:size-3",
        "group-data-[size=lg]/avatar:[&_svg]:size-2",
        className
      )}
      data-slot="avatar-badge"
      variant={variant}
      {...rest}
    />
  );
};

export const AvatarGroup = (props: React.ComponentProps<typeof ark.div>) => {
  const { className, style, ...rest } = props;

  return (
    <ark.div
      className={cn(
        "flex w-fit items-center",
        "*:[--avatar-group-size:var(--avatar-size,--spacing(8))]",
        "*:[--avatar-group-gap:var(--avatar-gap,calc(var(--avatar-group-size)/16))]",
        "*:[--avatar-group-overlap:var(--avatar-overlap,calc(var(--avatar-group-size)*0.3))]",
        "*:[--avatar-group-cut-end:calc(var(--avatar-group-size)*1.5-var(--avatar-group-overlap))]",
        "*:[--avatar-group-cut-radius:calc(var(--avatar-group-size)/2+var(--avatar-group-gap))]",
        "*:[--avatar-group-cut-x:var(--avatar-group-cut-end)] rtl:*:[--avatar-group-cut-x:var(--avatar-group-cut-start)]",
        "*:[--avatar-group-cut-start:calc(var(--avatar-group-overlap)-var(--avatar-group-size)/2)]",
        "*:[--avatar-group-mask-position:0_0,calc(var(--avatar-group-cut-x)-var(--avatar-group-cut-radius))_50%]",
        "*:[--avatar-group-mask-size:100%_100%,calc(var(--avatar-group-cut-radius)*2)_calc(var(--avatar-group-cut-radius)*2)]",
        "*:[--avatar-group-mask:none]",
        "supports-[mask-composite:subtract]:*:[--avatar-group-mask:var(--avatar-group-cut-image),var(--avatar-group-cut-image)]",
        "*:[--avatar-group-nudge:var(--avatar-nudge,calc((var(--avatar-group-overlap)+var(--avatar-group-gap))*0.3))]",
        "*:not-first:-ms-(--avatar-group-overlap)",
        "*:not-last:mask-(--avatar-group-mask) *:not-last:mask-subtract *:not-last:mask-size-(--avatar-group-mask-size) *:not-last:mask-position-(--avatar-group-mask-position) *:not-last:mask-no-repeat",
        "*:not-last:**:data-[slot=avatar-fallback]:pe-[calc(var(--avatar-group-nudge)*2)]",
        "supports-[mask-composite:subtract]:*:not-last:rounded-none",
        "supports-[mask-composite:subtract]:*:not-last:after:rounded-full",
        className
      )}
      data-slot="avatar-group"
      style={
        {
          "--avatar-group-cut-image": AVATAR_GROUP_CUT,
          ...style,
        } as React.CSSProperties
      }
      {...rest}
    />
  );
};

export const AvatarGroupCount = (
  props: React.ComponentProps<typeof ark.div>
) => {
  const { className, ...rest } = props;

  return (
    <ark.div
      className={cn(
        "relative",
        "size-8",
        "shrink-0",
        "flex items-center justify-center",
        "bg-muted",
        "text-muted-foreground text-sm",
        "select-none",
        "rounded-full",
        "[--avatar-size:--spacing(8)]",
        "[&_svg]:size-4",
        className
      )}
      data-slot="avatar-group-count"
      {...rest}
    />
  );
};

const AVATAR_GROUP_CUT =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 2 2'%3E%3Ccircle cx='1' cy='1' r='1'/%3E%3C/svg%3E\")";
