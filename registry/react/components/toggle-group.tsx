"use client";

import {
  ToggleGroup as ArkToggleGroup,
  useToggleGroup as useArkToggleGroup,
  useToggleGroupContext as useArkToggleGroupContext,
} from "@ark-ui/react/toggle-group";
import { createContext } from "@ark-ui/react/utils";
import React from "react";
import { tv } from "tailwind-variants";
import { cn } from "@/lib/utils";
import { FieldLabel } from "@/registry/react/components/field";
import { Toggle, type ToggleProps } from "@/registry/react/components/toggle";

export const useToggleGroup = useArkToggleGroup;
export const useToggleGroupContext = useArkToggleGroupContext;

type ToggleGroupContextProps = Pick<
  ToggleProps,
  "pill" | "size" | "variant"
> & {
  /**
   * Gap between items.
   *
   * @default 0
   */
  spacing?: number;
};

const [ToggleGroupProvider, _useToggleGroup] =
  createContext<ToggleGroupContextProps>({
    name: "ToggleGroupContext",
    providerName: "ToggleGroup",
  });

export interface ToggleGroupRootProviderProps
  extends React.ComponentProps<typeof ArkToggleGroup.RootProvider>,
    ToggleGroupContextProps {}

export const ToggleGroupRootProvider = (
  props: ToggleGroupRootProviderProps
) => {
  const {
    pill = false,
    size = "md",
    spacing = 0,
    variant = "ghost",
    children,
    ...rest
  } = props;

  return (
    <ToggleGroupProvider value={{ pill, size, spacing, variant }}>
      <ArkToggleGroup.RootProvider {...rest}>
        {children}
      </ArkToggleGroup.RootProvider>
    </ToggleGroupProvider>
  );
};

interface ToggleGroupProps
  extends React.ComponentProps<typeof ArkToggleGroup.Root>,
    ToggleGroupContextProps {}

type ToggleGroupLabelProps = React.ComponentProps<"span">;

export const ToggleGroupLabel = (props: ToggleGroupLabelProps) => {
  const { children, ...rest } = props;

  return (
    <FieldLabel asChild>
      <span data-slot="toggle-group-label" {...rest}>
        {children}
      </span>
    </FieldLabel>
  );
};

const toggleGroupVariants = tv({
  base: ["w-fit", "flex items-center gap-[--spacing(var(--gap))]"],
  defaultVariants: {
    orientation: "horizontal",
    pill: false,
  },
  variants: {
    orientation: {
      horizontal: "flex-row pointer-coarse:*:after:min-w-auto",
      vertical: "flex-col items-stretch pointer-coarse:*:after:min-h-auto",
    },
    pill: {
      false: "rounded-lg",
      true: "rounded-full",
    },
  },
});

export const ToggleGroup = (props: ToggleGroupProps) => {
  const {
    multiple = true,
    orientation = "horizontal",
    variant = "ghost",
    size = "md",
    spacing = 0,
    pill = false,
    className,
    style,
    children,
    "aria-labelledby": ariaLabelledby,
    ...rest
  } = props;

  const childrenArray = React.Children.toArray(children);
  const labelElement = childrenArray.find(
    (child) => React.isValidElement(child) && child.type === ToggleGroupLabel
  );
  const groupChildren = childrenArray.filter(
    (child) => !(React.isValidElement(child) && child.type === ToggleGroupLabel)
  );
  const generatedLabelId = React.useId();
  const labelId = React.isValidElement<ToggleGroupLabelProps>(labelElement)
    ? (labelElement.props.id ?? generatedLabelId)
    : undefined;
  const label = React.isValidElement<ToggleGroupLabelProps>(labelElement)
    ? React.cloneElement(labelElement, { id: labelId })
    : null;
  const labelledBy = [labelId, ariaLabelledby].filter(Boolean).join(" ");
  const rootChildren = (label ? groupChildren : childrenArray).map(
    (child, index) => (
      <React.Fragment key={React.isValidElement(child) ? child.key : index}>
        {child}
      </React.Fragment>
    )
  );

  const toggleGroup = (
    <ArkToggleGroup.Root
      aria-labelledby={labelledBy || undefined}
      className={cn(toggleGroupVariants({ orientation, pill }), className)}
      data-slot="toggle-group"
      multiple={multiple}
      orientation={orientation}
      style={
        {
          ...style,
          "--gap": spacing,
        } as React.CSSProperties
      }
      {...rest}
    >
      {rootChildren}
    </ArkToggleGroup.Root>
  );

  return (
    <ToggleGroupProvider value={{ pill, size, spacing, variant }}>
      {label ? (
        <div className="flex flex-col items-start gap-2">
          {label}
          {toggleGroup}
        </div>
      ) : (
        toggleGroup
      )}
    </ToggleGroupProvider>
  );
};

interface ToggleGroupItemProps
  extends React.ComponentProps<typeof ArkToggleGroup.Item> {}

export const ToggleGroupItem = (props: ToggleGroupItemProps) => {
  const { value, className, ...rest } = props;

  const { pill, variant, size, spacing } = _useToggleGroup();

  return (
    <ArkToggleGroup.Item asChild data-slot="toggle-group-item" value={value}>
      <Toggle
        className={cn(
          "shrink-0 focus:z-10 focus-visible:z-10",
          "data-[spacing=0]:rounded-none",
          "data-[spacing=0]:px-2",
          "data-[orientation=horizontal]:data-[spacing=0]:data-[pill=false]:first:rounded-s-lg",
          "data-[orientation=vertical]:data-[spacing=0]:data-[pill=false]:first:rounded-t-lg",
          "data-[orientation=horizontal]:data-[spacing=0]:data-[pill=false]:last:rounded-e-lg",
          "data-[orientation=vertical]:data-[spacing=0]:data-[pill=false]:last:rounded-b-lg",
          "data-[orientation=horizontal]:data-[spacing=0]:data-[pill=true]:first:rounded-s-full",
          "data-[orientation=vertical]:data-[spacing=0]:data-[pill=true]:first:rounded-t-full",
          "data-[orientation=horizontal]:data-[spacing=0]:data-[pill=true]:last:rounded-e-full",
          "data-[orientation=vertical]:data-[spacing=0]:data-[pill=true]:last:rounded-b-full",
          "data-[orientation=horizontal]:data-[spacing=0]:data-[variant=outline]:border-s-0",
          "data-[orientation=vertical]:data-[spacing=0]:data-[variant=outline]:border-t-0",
          "data-[orientation=horizontal]:data-[spacing=0]:data-[variant=outline]:first:border-s",
          className
        )}
        data-pill={pill}
        data-spacing={spacing}
        data-variant={variant}
        pill={false}
        size={size}
        variant={variant}
        {...rest}
      />
    </ArkToggleGroup.Item>
  );
};
