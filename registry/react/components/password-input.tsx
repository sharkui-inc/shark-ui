"use client";

import {
  PasswordInput as ArkPasswordInput,
  usePasswordInput as useArkPasswordInput,
  usePasswordInputContext as useArkPasswordInputContext,
} from "@ark-ui/react/password-input";
import { EyeIcon, EyeOffIcon } from "lucide-react";
import type React from "react";
import { cn } from "@/lib/utils";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
  type InputGroupProps,
} from "@/registry/react/components/input-group";

export const usePasswordInput = useArkPasswordInput;
export const usePasswordInputContext = useArkPasswordInputContext;
export const PasswordInputRootProvider = ArkPasswordInput.RootProvider;

type PasswordInputControlProps = Pick<
  React.ComponentProps<typeof InputGroupInput>,
  | "placeholder"
  | "value"
  | "defaultValue"
  | "onChange"
  | "onBlur"
  | "onFocus"
  | "autoFocus"
  | "maxLength"
  | "minLength"
  | "pattern"
  | "inputMode"
  | "spellCheck"
>;

interface PasswordInputProps
  extends Omit<React.ComponentProps<typeof ArkPasswordInput.Root>, "children">,
    Pick<InputGroupProps, "size">,
    PasswordInputControlProps {
  /**
   * Icon shown when the password is hidden.
   *
   * @default `<EyeOffIcon />`
   */
  hiddenIcon?: React.ReactNode;
  /**
   * Icon shown when the password is visible.
   *
   * @default `<EyeIcon />`
   */
  visibleIcon?: React.ReactNode;
}

export const PasswordInput = (props: PasswordInputProps) => {
  const {
    size = "md",
    visibleIcon,
    hiddenIcon,
    className,
    placeholder,
    value,
    defaultValue,
    onChange,
    onBlur,
    onFocus,
    autoFocus,
    maxLength,
    minLength,
    pattern,
    inputMode,
    spellCheck,
    ...rest
  } = props;

  return (
    <ArkPasswordInput.Root
      className={cn(
        "group/password-input",
        "w-full",
        "flex flex-col items-start gap-2",
        className
      )}
      data-size={size}
      data-slot="password-input"
      {...rest}
    >
      <ArkPasswordInput.Control asChild data-slot="password-input-control">
        <InputGroup
          className="data-disabled:pointer-events-none data-disabled:opacity-64"
          size={size}
        >
          <ArkPasswordInput.Input asChild data-slot="password-input-input">
            <InputGroupInput
              autoFocus={autoFocus}
              defaultValue={defaultValue}
              inputMode={inputMode}
              maxLength={maxLength}
              minLength={minLength}
              onBlur={onBlur}
              onChange={onChange}
              onFocus={onFocus}
              pattern={pattern}
              placeholder={placeholder}
              spellCheck={spellCheck}
              value={value}
            />
          </ArkPasswordInput.Input>
          <InputGroupAddon align="inline-end">
            <ArkPasswordInput.VisibilityTrigger
              asChild
              data-slot="password-input-visibility-trigger"
            >
              <InputGroupButton size="icon-xs" variant="ghost">
                <ArkPasswordInput.Indicator
                  data-slot="password-input-indicator"
                  fallback={hiddenIcon ?? <EyeOffIcon aria-hidden />}
                >
                  {visibleIcon ?? <EyeIcon aria-hidden />}
                </ArkPasswordInput.Indicator>
              </InputGroupButton>
            </ArkPasswordInput.VisibilityTrigger>
          </InputGroupAddon>
        </InputGroup>
      </ArkPasswordInput.Control>
    </ArkPasswordInput.Root>
  );
};
