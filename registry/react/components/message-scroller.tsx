"use client";

import { ark } from "@ark-ui/react/factory";
import { ScrollArea as ArkScrollArea } from "@ark-ui/react/scroll-area";
import { createContext } from "@ark-ui/react/utils";
import { ArrowDownIcon } from "lucide-react";
import React from "react";
import { cn } from "@/lib/utils";
import { Button, type ButtonProps } from "@/registry/react/components/button";
import {
  ScrollAreaScrollbar,
  useScrollAreaContext,
} from "@/registry/react/components/scroll-area";

const NEAR_BOTTOM_PX = 64;

export const useMessageScroller = useScrollAreaContext;

interface MessageScrollerContextValue {
  atBottomRef: React.MutableRefObject<boolean>;
  setShowJump: (showJump: boolean | null) => void;
  showJump: boolean | null;
  stickEnabledRef: React.MutableRefObject<boolean>;
  viewportRef: React.MutableRefObject<HTMLDivElement | null>;
}

const [MessageScrollerProvider, useMessageScrollerContext] =
  createContext<MessageScrollerContextValue>({
    name: "MessageScrollerContext",
    providerName: "MessageScroller",
  });

const isNearBottom = (viewport: HTMLElement) =>
  viewport.scrollHeight - viewport.scrollTop - viewport.clientHeight <
  NEAR_BOTTOM_PX;

const assignRef = <T,>(ref: React.Ref<T> | undefined, value: T) => {
  if (typeof ref === "function") {
    ref(value);
    return;
  }

  if (ref) {
    ref.current = value;
  }
};

export const MessageScroller = (
  props: React.ComponentProps<typeof ArkScrollArea.Root>
) => {
  const { className, children, ...rest } = props;

  const viewportRef = React.useRef<HTMLDivElement | null>(null);
  const atBottomRef = React.useRef(true);
  const stickEnabledRef = React.useRef(false);
  const [showJump, setShowJump] = React.useState<boolean | null>(null);

  return (
    <MessageScrollerProvider
      value={{
        atBottomRef,
        setShowJump,
        showJump,
        stickEnabledRef,
        viewportRef,
      }}
    >
      <ArkScrollArea.Root
        className={cn(
          "[--fade-size:1.5rem]",
          "group/message-scroller",
          "relative",
          "size-full min-h-0",
          "flex flex-col",
          "overflow-hidden",
          className
        )}
        data-slot="message-scroller"
        {...rest}
      >
        {children}
        <ScrollAreaScrollbar orientation="vertical" />
        <ArkScrollArea.Corner data-slot="message-scroller-corner" />
      </ArkScrollArea.Root>
    </MessageScrollerProvider>
  );
};

export const MessageScrollerViewport = (
  props: React.ComponentProps<typeof ArkScrollArea.Viewport>
) => {
  const { className, onScroll, ref, ...rest } = props;

  const { atBottomRef, setShowJump, stickEnabledRef, viewportRef } =
    useMessageScrollerContext();

  return (
    <ArkScrollArea.Viewport
      className={cn(
        "size-full min-h-0 min-w-0",
        "scrollbar-none overflow-y-auto overscroll-y-contain contain-content",
        "outline-hidden",
        "data-overflow-y:not-data-at-top:mask-t-from-[calc(100%-var(--fade-size))]",
        "data-overflow-y:not-data-at-bottom:mask-b-from-[calc(100%-var(--fade-size))]",
        "data-overflow-x:not-data-at-left:mask-l-from-[calc(100%-var(--fade-size))]",
        "data-overflow-x:not-data-at-right:mask-r-from-[calc(100%-var(--fade-size))]",
        "motion-reduce:scroll-auto",
        className
      )}
      data-slot="message-scroller-viewport"
      onScroll={(event) => {
        onScroll?.(event);

        const viewport = event.currentTarget;
        atBottomRef.current = isNearBottom(viewport);

        if (stickEnabledRef.current) {
          setShowJump(!atBottomRef.current);
        }
      }}
      ref={(node) => {
        viewportRef.current = node;
        assignRef(ref, node);
      }}
      {...rest}
    />
  );
};

export const MessageScrollerContent = (
  props: React.ComponentProps<typeof ArkScrollArea.Content>
) => {
  const { className, ...rest } = props;

  return (
    <ArkScrollArea.Content
      className={cn("h-max min-h-full", "flex flex-col gap-8", className)}
      data-slot="message-scroller-content"
      {...rest}
    />
  );
};

export const MessageScrollerItem = (
  props: React.ComponentProps<typeof ark.div>
) => {
  const { className, ...rest } = props;

  return (
    <ark.div
      className={cn(
        "[contain-intrinsic-size:auto_10rem] [content-visibility:auto]",
        "min-w-0 shrink-0",
        className
      )}
      data-slot="message-scroller-item"
      {...rest}
    />
  );
};

interface MessageScrollerStickProps {
  enabled?: boolean;
  itemCount: number;
  layoutKey?: string | number;
  paused?: boolean;
}

export const useMessageScrollerStick = (props: MessageScrollerStickProps) => {
  const { enabled = true, paused = false, itemCount, layoutKey } = props;

  const { atBottomRef, setShowJump, stickEnabledRef, viewportRef } =
    useMessageScrollerContext();
  const [showJump, setLocalShowJump] = React.useState(false);
  const active = enabled && !paused;

  React.useEffect(() => {
    stickEnabledRef.current = active;

    if (!active) {
      setShowJump(null);
      return;
    }

    setShowJump(showJump);
  }, [active, setShowJump, showJump, stickEnabledRef]);

  React.useEffect(
    () => () => {
      stickEnabledRef.current = false;
      setShowJump(null);
    },
    [setShowJump, stickEnabledRef]
  );

  // Follow content changes before scroll events can misinterpret the new height.
  // biome-ignore lint/correctness/useExhaustiveDependencies: itemCount/layoutKey intentionally retrigger pin before paint
  React.useLayoutEffect(() => {
    const viewport = viewportRef.current;

    if (!(active && viewport)) {
      return;
    }

    if (atBottomRef.current) {
      viewport.scrollTop = viewport.scrollHeight;
      setLocalShowJump(false);
      return;
    }

    setLocalShowJump(!isNearBottom(viewport));
  }, [active, atBottomRef, itemCount, layoutKey, viewportRef]);

  React.useEffect(() => {
    if (!active) {
      return;
    }

    let observer: ResizeObserver | undefined;
    const frame = requestAnimationFrame(() => {
      const viewport = viewportRef.current;

      if (!viewport) {
        return;
      }

      observer = new ResizeObserver(() => {
        if (atBottomRef.current) {
          viewport.scrollTop = viewport.scrollHeight;
        }
      });
      observer.observe(viewport);

      if (viewport.firstElementChild) {
        observer.observe(viewport.firstElementChild);
      }
    });

    return () => {
      cancelAnimationFrame(frame);
      observer?.disconnect();
    };
  }, [active, atBottomRef, viewportRef]);

  return { showJump };
};

export const MessageScrollerStick = (props: MessageScrollerStickProps) => {
  useMessageScrollerStick(props);

  return null;
};

interface MessageScrollerButtonProps extends ButtonProps {
  direction?: "end" | "start";
}

export const MessageScrollerButton = (props: MessageScrollerButtonProps) => {
  const {
    direction = "end",
    variant = "secondary",
    size = "icon-sm",
    onClick,
    className,
    children,
    ...rest
  } = props;

  const scrollArea = useScrollAreaContext();
  const { atBottomRef, setShowJump, showJump } = useMessageScrollerContext();
  const [ready, setReady] = React.useState(false);

  // Zag defaults hasOverflowY=true / isAtBottom=false before ResizeObserver.
  // Wait two frames so the first measure settles before revealing the button.
  React.useEffect(() => {
    let innerFrame = 0;
    const outerFrame = requestAnimationFrame(() => {
      innerFrame = requestAnimationFrame(() => {
        setReady(true);
      });
    });

    return () => {
      cancelAnimationFrame(outerFrame);
      cancelAnimationFrame(innerFrame);
    };
  }, []);

  const isAtEdge =
    direction === "end" ? scrollArea.isAtBottom : scrollArea.isAtTop;
  const leaveEdge =
    direction === "end" && showJump !== null ? showJump : !isAtEdge;
  const isActive = ready && scrollArea.hasOverflowY && leaveEdge;

  let ariaLabel: string | undefined;
  if (!children) {
    ariaLabel = direction === "end" ? "Scroll to end" : "Scroll to start";
  }

  return (
    <Button
      aria-label={ariaLabel}
      className={cn(
        "absolute inset-s-1/2",
        "bg-background",
        "text-foreground",
        "border-border",
        "-translate-x-1/2",
        "rtl:translate-x-1/2",
        "transition-[translate,scale,opacity] duration-150 ease-out",
        "data-[ready=false]:transition-none",
        "hover:bg-muted hover:text-foreground",
        "data-[active=false]:pointer-events-none data-[active=false]:scale-95 data-[active=false]:opacity-0",
        "data-[active=true]:translate-y-0 data-[active=true]:scale-100 data-[active=true]:opacity-100",
        "data-[direction=end]:bottom-4 data-[direction=end]:data-[active=false]:translate-y-full",
        "data-[direction=start]:top-4 data-[direction=start]:data-[active=false]:-translate-y-full",
        "data-[direction=start]:[&_svg]:rotate-180",
        className
      )}
      data-active={isActive}
      data-direction={direction}
      data-ready={ready}
      data-slot="message-scroller-button"
      size={size}
      variant={variant}
      {...rest}
      onClick={(event) => {
        onClick?.(event);

        if (event.defaultPrevented) {
          return;
        }

        if (direction === "end") {
          atBottomRef.current = true;

          if (showJump !== null) {
            setShowJump(false);
          }
        }

        scrollArea.scrollToEdge({
          behavior: window.matchMedia("(prefers-reduced-motion: reduce)")
            .matches
            ? "auto"
            : "smooth",
          edge: direction === "end" ? "bottom" : "top",
        });
      }}
    >
      {children ?? <ArrowDownIcon aria-hidden="true" />}
    </Button>
  );
};
