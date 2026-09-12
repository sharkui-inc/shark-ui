"use client";

import type { ReactNode } from "react";
import { Button } from "@/registry/react/components/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/registry/react/components/tooltip";

interface MailToolbarButtonProps {
  children: ReactNode;
  form?: string;
  label: string;
  onClick?: () => void;
  pressed?: boolean;
  size?: "icon-sm" | "icon-md";
  tooltip?: boolean;
  type?: "button" | "submit";
  variant?: "default" | "outline" | "secondary";
}

export const MailToolbarButton = ({
  children,
  form,
  label,
  onClick,
  pressed,
  size = "icon-sm",
  tooltip = true,
  type = "button",
  variant,
}: MailToolbarButtonProps) => {
  const button = (
    <Button
      aria-label={label}
      aria-pressed={pressed}
      clickEffect={false}
      form={form}
      onClick={onClick}
      size={size}
      type={type}
      variant={variant ?? "outline"}
    >
      {children}
    </Button>
  );

  if (!tooltip) {
    return button;
  }

  return (
    <Tooltip>
      <TooltipTrigger asChild>{button}</TooltipTrigger>
      <TooltipContent>{label}</TooltipContent>
    </Tooltip>
  );
};
