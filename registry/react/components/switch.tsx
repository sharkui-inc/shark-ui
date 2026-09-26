"use client";

import {
  Switch as ArkSwitch,
  useSwitch as useArkSwitch,
  useSwitchContext as useArkSwitchContext,
} from "@ark-ui/react/switch";
import type React from "react";
import { cn } from "@/lib/utils";

export const useSwitch = useArkSwitch;
export const useSwitchContext = useArkSwitchContext;
export const SwitchRootProvider = ArkSwitch.RootProvider;

export const Switch = (props: React.ComponentProps<typeof ArkSwitch.Root>) => {
  const { className, tabIndex, ...rest } = props;

  return (
    <ArkSwitch.Root
      className={cn(
        "group/switch",
        "[--switch-size:var(--size,--spacing(5))]",
        "[--switch-thumb-height:calc(var(--switch-size)-4px)]",
        "[--switch-thumb-width:calc(var(--switch-thumb-height)*1.375)]",
        "[--switch-thumb-translate:calc((var(--switch-size)*2)-var(--switch-thumb-width)-4px)]",
        "h-(--switch-size) w-[calc(var(--switch-size)*2)]",
        "relative",
        "p-0.5",
        "inline-flex shrink-0 items-center",
        "touch-manipulation",
        "pointer-coarse:after:absolute pointer-coarse:after:size-full pointer-coarse:after:min-h-11 pointer-coarse:after:min-w-11",
        "rounded-full border border-transparent",
        "transition-[background-color,border-color,box-shadow,opacity] duration-200 ease-out",
        "outline-hidden data-focus-visible:ring-2",
        "data-focus-visible:border-ring/64 data-focus-visible:ring-ring/24",
        "data-[state=checked]:data-focus-visible:border-background",
        "data-invalid:border-destructive data-invalid:ring-destructive/24",
        "dark:data-invalid:border-destructive-foreground dark:data-invalid:ring-destructive-foreground/24",
        "data-[state=checked]:bg-primary",
        "data-[state=unchecked]:bg-input dark:data-[state=unchecked]:bg-input",
        "data-disabled:pointer-events-none data-disabled:opacity-64",
        "motion-reduce:transition-none",
        className
      )}
      data-slot="switch"
      {...rest}
    >
      <ArkSwitch.Control
        className="relative flex size-full items-center"
        data-slot="switch-control"
      >
        <ArkSwitch.Thumb
          className={cn(
            "absolute inset-s-[-1px] block",
            "h-(--switch-thumb-height) w-(--switch-thumb-width)",
            "bg-background",
            "rounded-full shadow-xs/4 ring-0",
            "pointer-events-none",
            "transition-[translate,background-color] duration-200 ease-out",
            "data-[state=checked]:translate-x-(--switch-thumb-translate) rtl:data-[state=checked]:-translate-x-(--switch-thumb-translate)",
            "dark:data-[state=checked]:bg-primary-foreground",
            "dark:data-[state=unchecked]:bg-foreground",
            "motion-reduce:transition-none"
          )}
          data-slot="switch-thumb"
        />
      </ArkSwitch.Control>

      <ArkSwitch.HiddenInput tabIndex={tabIndex} />
    </ArkSwitch.Root>
  );
};
