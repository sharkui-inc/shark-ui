"use client";

import { ark } from "@ark-ui/react/factory";
import {
  PinInput as ArkPinInput,
  usePinInputContext as useArkPinInputContext,
} from "@ark-ui/react/pin-input";
import type React from "react";
import { cn } from "@/lib/utils";
import { fieldLabelVariants } from "@/registry/react/components/field";
import {
  Input,
  type InputProps,
  inputHeightVars,
} from "@/registry/react/components/input";
import { Separator } from "@/registry/react/components/separator";

export const useInputOTPContext = useArkPinInputContext;
export const InputOTPLabel = (
  props: React.ComponentProps<typeof ArkPinInput.Label>
) => {
  const { className, ...rest } = props;

  return (
    <ArkPinInput.Label
      className={cn(fieldLabelVariants(), "basis-full", className)}
      data-slot="input-otp-label"
      {...rest}
    />
  );
};

interface InputOTPProps
  extends React.ComponentProps<typeof ArkPinInput.Root>,
    Pick<InputProps, "size"> {}

export const InputOTP = (props: InputOTPProps) => {
  const {
    size = "md",
    placeholder,
    otp = true,
    className,
    children,
    tabIndex,
    ...rest
  } = props;

  return (
    <ArkPinInput.Root
      className={cn("group/input-otp", inputHeightVars[size])}
      data-size={size}
      data-slot="input-otp"
      otp={otp}
      placeholder={placeholder ?? ""}
      {...rest}
    >
      <ArkPinInput.Control
        className={cn("flex w-full flex-wrap items-center gap-2", className)}
        data-slot="input-otp-control"
      >
        {children}
      </ArkPinInput.Control>

      <ArkPinInput.HiddenInput tabIndex={tabIndex} />
    </ArkPinInput.Root>
  );
};

export const InputOTPSlot = (
  props: React.ComponentProps<typeof ArkPinInput.Input>
) => {
  const { className, ...rest } = props;

  return (
    <ArkPinInput.Input asChild data-slot="input-otp-input" {...rest}>
      <Input
        className={cn(
          "relative w-(--field-height) p-0 text-center text-base tabular-nums [--field-height:inherit]",
          className
        )}
      />
    </ArkPinInput.Input>
  );
};

export const InputOTPSeparator = (
  props: React.ComponentProps<typeof ark.hr>
) => {
  const { className, ...rest } = props;

  return (
    <Separator
      asChild
      className={cn(
        "rounded-full border-0 bg-foreground",
        "data-[orientation=horizontal]:h-0.5 data-[orientation=horizontal]:w-2",
        className
      )}
    >
      <ark.hr data-slot="input-otp-separator" {...rest} />
    </Separator>
  );
};
