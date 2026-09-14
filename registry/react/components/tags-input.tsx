"use client";

import {
  TagsInput as ArkTagsInput,
  useTagsInput as useArkTagsInput,
  useTagsInputContext as useArkTagsInputContext,
} from "@ark-ui/react/tags-input";
import { XIcon } from "lucide-react";
import type React from "react";
import { cn } from "@/lib/utils";
import {
  InputGroup,
  InputGroupButton,
  InputGroupInput,
  type InputGroupProps,
} from "@/registry/react/components/input-group";

export const useTagsInput = useArkTagsInput;
export const useTagsInputContext = useArkTagsInputContext;
export const TagsInputContext = ArkTagsInput.Context;

interface TagsInputProps
  extends React.ComponentProps<typeof ArkTagsInput.Root>,
    Pick<InputGroupProps, "size"> {
  /**
   * Whether tag chips use fully rounded corners.
   *
   * @default false
   */
  pill?: boolean;
  /**
   * Whether to show the clear button.
   *
   * @default true
   */
  showClear?: boolean;
}

export const TagsInput = (props: TagsInputProps) => {
  const {
    size = "md",
    showClear,
    pill = false,
    editable = false,
    tabIndex,
    className,
    children,
    ...rest
  } = props;

  return (
    <ArkTagsInput.Root
      className={cn(
        "group/tags-input",
        "flex w-full flex-col gap-2",
        className
      )}
      data-pill={pill}
      data-size={size}
      data-slot="tags-input"
      editable={editable}
      {...rest}
    >
      <TagsInputControl showClear={showClear}>
        {children}

        <TagsInputInput placeholder="Add framework" />
      </TagsInputControl>

      <ArkTagsInput.HiddenInput tabIndex={tabIndex} />
    </ArkTagsInput.Root>
  );
};

interface TagsInputControlProps
  extends React.ComponentProps<typeof ArkTagsInput.Control>,
    Pick<InputGroupProps, "size"> {
  /**
   * Whether to show the clear button.
   *
   * @default true
   */
  showClear?: boolean;
}

export const TagsInputControl = (props: TagsInputControlProps) => {
  const { size, showClear = true, className, children, ...rest } = props;

  const api = useTagsInputContext();

  return (
    <ArkTagsInput.Control asChild data-slot="tags-input-control">
      <InputGroup
        className={cn(
          "h-auto in-data-[size=lg]:min-h-9 in-data-[size=sm]:min-h-7 min-h-8",
          "py-1 [--input-group-inset:--spacing(1)]",
          "flex-wrap content-start items-center gap-1",
          "data-disabled:pointer-events-none data-disabled:opacity-64",
          "has-data-[slot=tags-input-item]:px-1",
          className
        )}
        size={size}
        {...rest}
      >
        {children}
        {showClear && api.value.length > 0 && (
          <TagsInputClearTrigger aria-label="Clear all tags" />
        )}
      </InputGroup>
    </ArkTagsInput.Control>
  );
};

interface TagsInputItemProps
  extends React.ComponentProps<typeof ArkTagsInput.Item>,
    Pick<InputGroupProps, "size"> {
  /**
   * Whether to show the clear trigger.
   *
   * @default true
   */
  showDelete?: boolean;
}

export const TagsInputItem = (props: TagsInputItemProps) => {
  const { showDelete = true, className, children, ...rest } = props;

  return (
    <ArkTagsInput.Item
      className={cn(
        "h-5.5 in-data-[size=lg]:h-6.5 in-data-[size=sm]:h-4.5 max-w-full",
        "in-data-[size=lg]:ps-2 in-data-[size=sm]:ps-1 ps-1.5 pe-0.5",
        "inline-flex shrink-0 items-center gap-1",
        "bg-secondary",
        "in-data-[size=lg]:text-sm text-secondary-foreground text-xs",
        "[--input-group-inset:--spacing(0.5)]",
        "in-data-[pill=true]/tags-input:rounded-full rounded-md border outline-none",
        "data-highlighted:border-primary/32 data-highlighted:bg-primary/8",
        className
      )}
      data-slot="tags-input-item"
      {...rest}
    >
      <TagsInputItemPreview>
        <TagsInputItemText>{children}</TagsInputItemText>
        {showDelete && <TagsInputItemDeleteTrigger />}
      </TagsInputItemPreview>
      <TagsInputItemInput />
    </ArkTagsInput.Item>
  );
};

export const TagsInputItemPreview = (
  props: React.ComponentProps<typeof ArkTagsInput.ItemPreview>
) => {
  const { className, ...rest } = props;

  return (
    <ArkTagsInput.ItemPreview
      className={cn("inline-flex max-w-full items-center gap-1", className)}
      data-slot="tags-input-item-preview"
      {...rest}
    />
  );
};

export const TagsInputItemText = (
  props: React.ComponentProps<typeof ArkTagsInput.ItemText>
) => {
  const { className, ...rest } = props;

  return (
    <ArkTagsInput.ItemText
      className={cn("truncate", className)}
      data-slot="tags-input-item-text"
      {...rest}
    />
  );
};

export const TagsInputItemDeleteTrigger = (
  props: React.ComponentProps<typeof ArkTagsInput.ItemDeleteTrigger>
) => {
  const { className, children, ...rest } = props;

  return (
    <ArkTagsInput.ItemDeleteTrigger
      asChild
      data-slot="tags-input-item-delete-trigger"
      {...rest}
    >
      <InputGroupButton
        className={cn(
          "in-data-[size=lg]:size-6 in-data-[size=sm]:size-4 size-5",
          "shrink-0",
          "text-muted-foreground",
          "[&_svg:not([class*='size-'])]:size-3",
          "hover:text-foreground",
          className
        )}
        size="icon-xs"
        variant="ghost"
      >
        {children ?? <XIcon aria-hidden />}
      </InputGroupButton>
    </ArkTagsInput.ItemDeleteTrigger>
  );
};

export const TagsInputItemInput = (
  props: React.ComponentProps<typeof ArkTagsInput.ItemInput>
) => (
  <ArkTagsInput.ItemInput asChild data-slot="tags-input-item-input" {...props}>
    <InputGroupInput
      className={cn(
        "px-1 text-xs",
        "h-5.5 in-data-[size=lg]:h-6.5 in-data-[size=sm]:h-4.5"
      )}
    />
  </ArkTagsInput.ItemInput>
);

export const TagsInputInput = (
  props: React.ComponentProps<typeof ArkTagsInput.Input>
) => (
  <ArkTagsInput.Input asChild data-slot="tags-input-input" {...props}>
    <InputGroupInput
      className={cn(
        "w-auto min-w-18 max-w-full flex-auto shrink basis-auto",
        "h-5.5 in-data-[size=lg]:h-6.5 in-data-[size=sm]:h-4.5"
      )}
    />
  </ArkTagsInput.Input>
);

export const TagsInputClearTrigger = (
  props: React.ComponentProps<typeof ArkTagsInput.ClearTrigger>
) => {
  const { className, children, ...rest } = props;

  return (
    <ArkTagsInput.ClearTrigger
      asChild
      data-slot="tags-input-clear-trigger"
      {...rest}
    >
      <InputGroupButton
        className={cn(
          "size-5.5 in-data-[size=lg]:size-6.5 in-data-[size=sm]:size-4.5",
          "ms-auto shrink-0 self-center text-muted-foreground hover:text-foreground",
          className
        )}
        size="icon-xs"
        variant="ghost"
      >
        {children ?? <XIcon aria-hidden />}
      </InputGroupButton>
    </ArkTagsInput.ClearTrigger>
  );
};

interface TagsInputRootProviderProps
  extends React.ComponentProps<typeof ArkTagsInput.RootProvider>,
    Pick<InputGroupProps, "size"> {
  /**
   * Whether tag chips use fully rounded corners.
   *
   * @default false
   */
  pill?: boolean;
  /**
   * Whether to show the clear button.
   *
   * @default true
   */
  showClear?: boolean;
}

export const TagsInputRootProvider = (props: TagsInputRootProviderProps) => {
  const {
    size = "md",
    showClear,
    pill = false,
    className,
    children,
    ...rest
  } = props;

  return (
    <ArkTagsInput.RootProvider
      className={cn(
        "group/tags-input",
        "flex w-full flex-col gap-2",
        className
      )}
      data-pill={pill}
      data-size={size}
      data-slot="tags-input-root-provider"
      {...rest}
    >
      <TagsInputControl showClear={showClear}>{children}</TagsInputControl>
      <ArkTagsInput.HiddenInput />
    </ArkTagsInput.RootProvider>
  );
};
