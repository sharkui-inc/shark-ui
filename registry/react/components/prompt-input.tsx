"use client";

import { ark } from "@ark-ui/react/factory";
import { createContext } from "@ark-ui/react/utils";
import { ArrowUpIcon, SquareIcon } from "lucide-react";
import React from "react";
import { cn } from "@/lib/utils";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupTextarea,
} from "@/registry/react/components/input-group";
import { Spinner } from "@/registry/react/components/spinner";

export type PromptInputStatus = "error" | "ready" | "streaming" | "submitted";

export interface PromptInputSubmitDetail {
  /**
   * The form submission event.
   */
  event: React.SubmitEvent<HTMLFormElement>;
  /**
   * The text of the prompt input.
   */
  text: string;
}

interface PromptInputProps
  extends Omit<React.ComponentProps<typeof ark.form>, "onSubmit"> {
  /**
   * The function to call when the prompt input is stopped.
   */
  onStop?: () => void;
  /**
   * The function to call when the prompt input is submitted.
   */
  onSubmit?: (detail: PromptInputSubmitDetail) => void;
  /**
   * The status of the prompt input.
   */
  status?: PromptInputStatus;
}

type PromptInputContextValue = Pick<PromptInputProps, "onStop"> &
  Required<Pick<PromptInputProps, "status">>;

const [PromptInputProvider, usePromptInput] =
  createContext<PromptInputContextValue>({
    name: "PromptInputContext",
    providerName: "PromptInput",
  });

export const PromptInputBottom = (
  props: React.ComponentProps<typeof ark.div>
) => {
  const { className, ...rest } = props;

  return (
    <ark.div
      className={cn(
        "w-full",
        "flex items-center gap-2",
        "px-6 pt-2",
        className
      )}
      data-slot="prompt-input-bottom"
      {...rest}
    />
  );
};

export const PromptInput = (props: PromptInputProps) => {
  const {
    status = "ready",
    onStop,
    onSubmit,
    className,
    children,
    ...rest
  } = props;

  const promptInputChildren = React.Children.toArray(children);

  const bottomChildren = promptInputChildren.filter(
    (child) => React.isValidElement(child) && child.type === PromptInputBottom
  );
  const inputGroupChildren = promptInputChildren.filter(
    (child) =>
      !(React.isValidElement(child) && child.type === PromptInputBottom)
  );

  return (
    <PromptInputProvider value={{ onStop, status }}>
      <ark.form
        className={cn("w-full", "flex flex-col", className)}
        data-slot="prompt-input"
        data-status={status}
        onSubmit={(event) => {
          event.preventDefault();

          const textarea = event.currentTarget.querySelector("textarea");
          const text = textarea?.value.trim() ?? "";

          if (!text) {
            textarea?.focus();
            return;
          }

          onSubmit?.({ event, text });
        }}
        {...rest}
      >
        <InputGroup
          className={cn(
            "h-auto md:h-auto",
            "flex-col items-stretch",
            "rounded-2xl"
          )}
        >
          {inputGroupChildren}
        </InputGroup>
        {bottomChildren}
      </ark.form>
    </PromptInputProvider>
  );
};

export const PromptInputHeader = (
  props: React.ComponentProps<typeof InputGroupAddon>
) => {
  const { className, ...rest } = props;

  return (
    <InputGroupAddon
      align="block-start"
      className={cn("h-auto", "flex-wrap items-start gap-2", className)}
      data-slot="prompt-input-header"
      {...rest}
    />
  );
};

export const PromptInputFooter = (
  props: React.ComponentProps<typeof InputGroupAddon>
) => {
  const { className, ...rest } = props;

  return (
    <InputGroupAddon
      align="block-end"
      className={cn(
        "h-auto min-h-8",
        "justify-between gap-0.5",
        "pb-2",
        className
      )}
      data-slot="prompt-input-footer"
      {...rest}
    />
  );
};

export const PromptInputTools = (
  props: React.ComponentProps<typeof ark.div>
) => {
  const { className, ...rest } = props;

  return (
    <ark.div
      className={cn("min-w-0 flex-1", "flex items-center gap-1", className)}
      data-slot="prompt-input-tools"
      {...rest}
    />
  );
};

export const PromptInputTextarea = (
  props: React.ComponentProps<typeof InputGroupTextarea>
) => {
  const { className, onKeyDown, ...rest } = props;

  const { status } = usePromptInput();

  return (
    <InputGroupTextarea
      className={cn(
        "max-h-52 min-h-12",
        "pt-2 pb-1",
        "leading-6",
        "overflow-y-auto",
        "scrollbar-thumb-foreground/24 scrollbar-thin scrollbar-track-transparent",
        className
      )}
      onKeyDown={(event) => {
        onKeyDown?.(event);

        if (event.defaultPrevented) {
          return;
        }

        if (
          event.key !== "Enter" ||
          event.shiftKey ||
          event.nativeEvent.isComposing
        ) {
          return;
        }

        if (status === "streaming" || status === "submitted") {
          event.preventDefault();
          return;
        }

        event.preventDefault();
        event.currentTarget.form?.requestSubmit();
      }}
      {...rest}
    />
  );
};

export const PromptInputButton = (
  props: React.ComponentProps<typeof InputGroupButton>
) => {
  const { className, ...rest } = props;

  return (
    <InputGroupButton
      className={cn("rounded-md", className)}
      data-slot="prompt-input-button"
      {...rest}
    />
  );
};

export const PromptInputSubmit = (
  props: React.ComponentProps<typeof InputGroupButton>
) => {
  const {
    disabled,
    size = "icon-sm",
    type,
    variant = "default",
    onClick,
    className,
    children,
    ...rest
  } = props;

  const { onStop, status } = usePromptInput();

  const isStreaming = status === "streaming";
  const isSubmitted = status === "submitted";
  const isDisabled = isStreaming ? false : Boolean(disabled ?? isSubmitted);

  let submitIcon = <ArrowUpIcon aria-hidden="true" className="size-4" />;

  if (isSubmitted) {
    submitIcon = <Spinner />;
  } else if (isStreaming) {
    submitIcon = (
      <SquareIcon aria-hidden="true" className={cn("size-3", "fill-current")} />
    );
  }

  return (
    <PromptInputButton
      aria-label={isStreaming ? "Stop generating" : "Send prompt"}
      className={cn("ms-auto", "rounded-full", className)}
      data-slot="prompt-input-submit"
      disabled={isDisabled ? true : undefined}
      onClick={(event) => {
        onClick?.(event);

        if (!isStreaming || event.defaultPrevented) {
          return;
        }

        event.preventDefault();
        onStop?.();
      }}
      size={size}
      type={isStreaming ? "button" : (type ?? "submit")}
      variant={variant}
      {...rest}
    >
      {children ?? submitIcon}
    </PromptInputButton>
  );
};
