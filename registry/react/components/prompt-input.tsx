"use client";

import { ark } from "@ark-ui/react/factory";
import { createContext } from "@ark-ui/react/utils";
import { ArrowUpIcon, SquareIcon } from "lucide-react";
import type React from "react";
import { Children, isValidElement, useLayoutEffect, useState } from "react";
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
  event: React.SubmitEvent<HTMLFormElement>;
  text: string;
}

interface PromptInputContextValue {
  hasText: boolean;
  onStop?: () => void;
  setHasText: (hasText: boolean) => void;
  status: PromptInputStatus;
}

const [PromptInputProvider, usePromptInput] =
  createContext<PromptInputContextValue>({
    name: "PromptInputContext",
    providerName: "PromptInput",
  });

interface PromptInputProps
  extends Omit<React.ComponentProps<typeof ark.form>, "onSubmit"> {
  onStop?: () => void;
  onSubmit?: (detail: PromptInputSubmitDetail) => void;
  status?: PromptInputStatus;
}

export const PromptInputBottom = (
  props: React.ComponentProps<typeof ark.div>
) => {
  const { className, ...rest } = props;

  return (
    <ark.div
      className={cn("flex w-full items-center gap-2", "px-6 py-2", className)}
      data-slot="prompt-input-bottom"
      {...rest}
    />
  );
};

const getHasTextFromChildren = (children: React.ReactNode) => {
  for (const child of Children.toArray(children)) {
    if (isValidElement(child) && child.type === PromptInputTextarea) {
      const { defaultValue, value } = child.props as {
        defaultValue?: unknown;
        value?: unknown;
      };

      return Boolean(String(value ?? defaultValue ?? "").trim());
    }
  }

  return false;
};

export const PromptInput = (props: PromptInputProps) => {
  const {
    status = "ready",
    onStop,
    className,
    onSubmit,
    children,
    ...rest
  } = props;

  const [hasText, setHasText] = useState(() =>
    getHasTextFromChildren(children)
  );
  const promptInputChildren = Children.toArray(children);

  const bottomChildren = promptInputChildren.filter(
    (child) => isValidElement(child) && child.type === PromptInputBottom
  );
  const inputGroupChildren = promptInputChildren.filter(
    (child) => !(isValidElement(child) && child.type === PromptInputBottom)
  );

  return (
    <PromptInputProvider value={{ hasText, onStop, setHasText, status }}>
      <ark.form
        className={cn("flex w-full flex-col", className)}
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
        <InputGroup className="h-auto flex-col items-stretch rounded-2xl">
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
      className={cn("h-auto flex-wrap items-start gap-2", className)}
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
      className={cn("h-auto min-h-8 justify-between gap-0.5 pb-2", className)}
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
      className={cn("flex min-w-0 flex-1 items-center gap-1", className)}
      data-slot="prompt-input-tools"
      {...rest}
    />
  );
};

export const PromptInputTextarea = (
  props: React.ComponentProps<typeof InputGroupTextarea>
) => {
  const { className, defaultValue, onChange, onKeyDown, value, ...rest } =
    props;
  const { setHasText, status } = usePromptInput();

  useLayoutEffect(() => {
    setHasText(Boolean(String(value ?? defaultValue ?? "").trim()));
  }, [defaultValue, setHasText, value]);

  return (
    <InputGroupTextarea
      className={cn(
        "max-h-52 min-h-12 overflow-y-auto pt-2 pb-1 leading-6",
        className
      )}
      data-slot="prompt-input-textarea"
      defaultValue={defaultValue}
      onChange={(event) => {
        setHasText(Boolean(event.target.value.trim()));
        onChange?.(event);
      }}
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
      value={value}
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
    className,
    children,
    disabled,
    onClick,
    size = "icon-sm",
    type,
    variant = "default",
    ...rest
  } = props;
  const { hasText, onStop, status } = usePromptInput();
  const isStreaming = status === "streaming";
  const isSubmitted = status === "submitted";
  const isDisabled = disabled ?? (isSubmitted || !(isStreaming || hasText));

  let submitIcon = <ArrowUpIcon aria-hidden="true" className="size-4" />;
  if (isSubmitted) {
    submitIcon = <Spinner />;
  } else if (isStreaming) {
    submitIcon = (
      <SquareIcon aria-hidden="true" className="size-3 fill-current" />
    );
  }

  return (
    <PromptInputButton
      aria-label={isStreaming ? "Stop generating" : "Send prompt"}
      className={cn("ms-auto rounded-full", className)}
      data-slot="prompt-input-submit"
      disabled={isDisabled ? true : undefined}
      onClick={(event) => {
        if (isStreaming) {
          event.preventDefault();
          onStop?.();
        }
        onClick?.(event);
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
