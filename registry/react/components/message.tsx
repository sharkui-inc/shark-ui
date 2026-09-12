"use client";

import { ark } from "@ark-ui/react/factory";
import type React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/registry/react/components/button";

export const MessageGroup = (props: React.ComponentProps<typeof ark.div>) => {
  const { className, ...rest } = props;

  return (
    <ark.div
      className={cn("flex min-w-0 flex-col gap-2", className)}
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
        "group/message relative flex w-full min-w-0 gap-2 text-sm data-[align=end]:flex-row-reverse",
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
        "flex w-fit min-w-0 shrink-0 self-end",
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
        "wrap-break-word flex w-full min-w-0 flex-col gap-2.5 group-data-[align=end]/message:*:data-slot:self-end",
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
        "flex min-w-0 max-w-full items-center px-3 font-medium text-muted-foreground text-xs group-has-data-[variant=ghost]/message:px-0",
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
        "flex min-w-0 max-w-full items-center px-3 font-medium text-muted-foreground text-xs group-has-data-[variant=ghost]/message:px-0 group-data-[align=end]/message:justify-end",
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
}

export const MessageAction = (props: MessageActionProps) => {
  const {
    label,
    size = "icon-xs",
    type = "button",
    variant = "ghost",
    children,
    ...rest
  } = props;

  return (
    <Button
      aria-label={label}
      data-slot="message-action"
      size={size}
      type={type}
      variant={variant}
      {...rest}
    >
      {children}
    </Button>
  );
};
