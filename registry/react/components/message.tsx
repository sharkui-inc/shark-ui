"use client";

import { ark } from "@ark-ui/react/factory";
import type React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/registry/react/components/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/registry/react/components/tooltip";

export const MessageGroup = (props: React.ComponentProps<typeof ark.div>) => {
  const { className, ...rest } = props;

  return (
    <ark.div
      className={cn("min-w-0", "flex flex-col gap-2", className)}
      data-slot="message-group"
      {...rest}
    />
  );
};

interface MessageProps extends React.ComponentProps<typeof ark.div> {
  align?: "end" | "start";
}

export const Message = (props: MessageProps) => {
  const { align = "start", className, ...rest } = props;

  return (
    <ark.div
      className={cn(
        "group/message",
        "relative",
        "w-full min-w-0",
        "flex gap-2",
        "text-sm",
        "data-[align=end]:flex-row-reverse",
        className
      )}
      data-align={align}
      data-slot="message"
      {...rest}
    />
  );
};

export const MessageAvatar = (props: React.ComponentProps<typeof ark.div>) => {
  const { className, ...rest } = props;

  return (
    <ark.div
      className={cn(
        "w-fit min-w-0 shrink-0",
        "flex self-end",
        "group-has-data-[slot=message-footer]/message:-translate-y-8",
        "group-has-[[data-slot=message-bubble-reactions][data-side=bottom]]/message:-translate-y-5",
        className
      )}
      data-slot="message-avatar"
      {...rest}
    />
  );
};

export const MessageContent = (props: React.ComponentProps<typeof ark.div>) => {
  const { className, ...rest } = props;

  return (
    <ark.div
      className={cn(
        "w-full min-w-0",
        "flex flex-col gap-2.5",
        "wrap-break-word",
        "group-data-[align=end]/message:*:data-slot:self-end",
        className
      )}
      data-slot="message-content"
      {...rest}
    />
  );
};

export const MessageHeader = (props: React.ComponentProps<typeof ark.div>) => {
  const { className, ...rest } = props;

  return (
    <ark.div
      className={cn(
        "max-w-full min-w-0",
        "flex items-center",
        "px-3",
        "text-muted-foreground text-xs font-medium",
        "group-has-data-[variant=ghost]/message:px-0",
        className
      )}
      data-slot="message-header"
      {...rest}
    />
  );
};

export const MessageFooter = (props: React.ComponentProps<typeof ark.div>) => {
  const { className, ...rest } = props;

  return (
    <ark.div
      className={cn(
        "max-w-full min-w-0",
        "flex items-center",
        "px-3",
        "text-muted-foreground text-xs font-medium",
        "group-has-data-[variant=ghost]/message:px-0",
        "group-data-[align=end]/message:justify-end",
        className
      )}
      data-slot="message-footer"
      {...rest}
    />
  );
};

export const MessageActions = (props: React.ComponentProps<typeof ark.div>) => {
  const { className, ...rest } = props;

  return (
    <ark.div
      className={cn("flex items-center gap-1", className)}
      data-slot="message-actions"
      {...rest}
    />
  );
};

interface MessageActionProps extends React.ComponentProps<typeof Button> {
  label?: string;
  /** The tooltip to display for icon-only actions. */
  tooltip?: string;
}

export const MessageAction = (props: MessageActionProps) => {
  const {
    label,
    tooltip,
    size = "icon-xs",
    type = "button",
    variant = "ghost",
    children,
    ...rest
  } = props;

  const button = (
    <Button
      aria-label={label ?? tooltip}
      data-slot="message-action"
      size={size}
      type={type}
      variant={variant}
      {...rest}
    >
      {children}
    </Button>
  );

  return tooltip ? (
    <Tooltip>
      <TooltipTrigger asChild>{button}</TooltipTrigger>
      <TooltipContent>{tooltip}</TooltipContent>
    </Tooltip>
  ) : (
    button
  );
};
