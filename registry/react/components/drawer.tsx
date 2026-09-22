"use client";

import { Checkbox as ArkCheckbox } from "@ark-ui/react/checkbox";
import {
  Drawer as ArkDrawer,
  DrawerContext,
  useDrawer as useArkDrawer,
  useDrawerContext as useArkDrawerContext,
} from "@ark-ui/react/drawer";
import { ark } from "@ark-ui/react/factory";
import { Portal } from "@ark-ui/react/portal";
import { RadioGroup as ArkRadioGroup } from "@ark-ui/react/radio-group";
import { createContext } from "@ark-ui/react/utils";
import { CheckIcon, ChevronRightIcon, XIcon } from "lucide-react";
import React from "react";
import { tv, type VariantProps } from "tailwind-variants";
import { cn } from "@/lib/utils";
import { Button } from "@/registry/react/components/button";
import {
  menuGroupLabelVariants,
  menuItemIndicatorVariants,
  menuItemVariants,
  menuSeparatorVariants,
} from "@/registry/react/components/menu";
import { ScrollArea } from "@/registry/react/components/scroll-area";
import {
  dialogDescriptionVariants,
  dialogHeaderVariants,
  dialogTitleVariants,
} from "./dialog";

export const useDrawer = useArkDrawer;
export const useDrawerContext = useArkDrawerContext;

interface DrawerModalContextProps {
  /**
   * Used internally to show or hide overlay
   *
   * @default true
   */
  modal?: boolean;
}

const [DrawerModalProvider, _useDrawerModal] =
  createContext<DrawerModalContextProps>({
    name: "DrawerModalContext",
    providerName: "Drawer",
  });

export interface DrawerRootProviderProps
  extends React.ComponentProps<typeof ArkDrawer.RootProvider> {
  /**
   * Used internally to show or hide overlay. Match the `modal` option
   * passed to `useDrawer` when non-default.
   *
   * @default true
   */
  modal?: boolean;
}

export const DrawerRootProvider = (props: DrawerRootProviderProps) => {
  const { modal = true, children, ...rest } = props;

  return (
    <DrawerModalProvider value={{ modal }}>
      <ArkDrawer.RootProvider {...rest}>{children}</ArkDrawer.RootProvider>
    </DrawerModalProvider>
  );
};

export const DrawerProvider = (
  props: React.ComponentProps<typeof ArkDrawer.Indent>
) => {
  const { className, children, ...rest } = props;

  return (
    <ArkDrawer.Stack>
      <ArkDrawer.IndentBackground
        className={cn("fixed inset-0 z-0", "bg-black", "pointer-events-none")}
        data-slot="drawer-indent-background"
      />
      <ArkDrawer.Indent
        className={cn(
          "relative z-10",
          "bg-background",
          "origin-top will-change-transform",
          "transition-[border-radius,transform] duration-[calc(450ms*(1-clamp(0,var(--drawer-swipe-progress,0)*100000,1)))] ease-[cubic-bezier(0.32,0.72,0,1)]",
          "data-active:transform-[scale(calc(0.97+(0.03*var(--drawer-swipe-progress,0))))_translateY(calc(0.5rem*(1-var(--drawer-swipe-progress,0))))] data-active:overflow-hidden data-active:rounded-[calc(1rem*(1-var(--drawer-swipe-progress,0)))]",
          "motion-reduce:transition-none",
          className
        )}
        data-slot="drawer-indent"
        {...rest}
      >
        {children}
      </ArkDrawer.Indent>
    </ArkDrawer.Stack>
  );
};

export interface DrawerProps
  extends React.ComponentProps<typeof ArkDrawer.Root> {}

export const Drawer = (props: DrawerProps) => {
  const {
    modal = true,
    lazyMount = true,
    unmountOnExit = true,
    ...rest
  } = props;

  return (
    <DrawerModalProvider
      value={{
        modal,
      }}
    >
      <ArkDrawer.Root
        data-slot="drawer"
        lazyMount={lazyMount}
        modal={modal}
        unmountOnExit={unmountOnExit}
        {...rest}
      />
    </DrawerModalProvider>
  );
};

export const DrawerTrigger = (
  props: React.ComponentProps<typeof ArkDrawer.Trigger>
) => <ArkDrawer.Trigger data-slot="drawer-trigger" {...props} />;

export const DrawerSwipeArea = (
  props: React.ComponentProps<typeof ArkDrawer.SwipeArea>
) => {
  const { className, ...rest } = props;

  return (
    <ArkDrawer.SwipeArea
      className={cn(
        "fixed z-[calc(50+var(--layer-index,0))] touch-none",
        "data-[swipe-direction=up]:inset-x-0 data-[swipe-direction=up]:bottom-0 data-[swipe-direction=up]:h-8",
        "data-[swipe-direction=down]:inset-x-0 data-[swipe-direction=down]:top-0 data-[swipe-direction=down]:h-8",
        "data-[swipe-direction=left]:inset-y-0 data-[swipe-direction=left]:right-0 data-[swipe-direction=left]:w-8",
        "data-[swipe-direction=right]:inset-y-0 data-[swipe-direction=right]:left-0 data-[swipe-direction=right]:w-8",
        className
      )}
      data-slot="drawer-swipe-area"
      {...rest}
    />
  );
};

const drawerOverlayVariants = tv({
  base: [
    "fixed inset-0 z-50",
    "peer peer-data-[slot=drawer-backdrop]:hidden",
    "bg-[rgb(0_0_0/calc(0.32*(1-max(0,var(--drawer-swipe-progress,0)))))] backdrop-blur-[calc(4px*(1-max(0,var(--drawer-swipe-progress,0))))]",
    "data-[has-nested=drawer]:pointer-events-none",
    "transition-opacity duration-300 ease-out",
    "data-[state=open]:fade-in-0 data-[state=open]:animate-in",
    "data-[state=closed]:fade-out-0 data-[state=closed]:animate-out data-[state=closed]:duration-[calc(var(--drawer-swipe-strength)*400ms)]",
    "motion-reduce:animate-none",
  ],
});

export const DrawerOverlay = (
  props: React.ComponentProps<typeof ArkDrawer.Backdrop>
) => {
  const { className, style, ...rest } = props;
  const { modal } = _useDrawerModal();
  const drawer = useArkDrawerContext();
  const restingOpen = React.useRef(1);
  const openAmount = drawer.getOpenPercentage();

  if (drawer.open && !drawer.dragging && openAmount > 0) {
    restingOpen.current = openAmount;
  }

  const overdrag =
    drawer.open && drawer.dragging && openAmount >= restingOpen.current;

  if (!modal) {
    return null;
  }

  return (
    <ArkDrawer.Backdrop
      className={cn(drawerOverlayVariants(), className)}
      data-slot="drawer-backdrop"
      style={
        overdrag
          ? ({
              "--drawer-swipe-progress": "0",
              ...style,
            } as React.CSSProperties)
          : style
      }
      {...rest}
    />
  );
};

const drawerPositionerVariants = tv({
  base: [
    "[--bleed:--spacing(12)]",
    "fixed inset-0 z-[calc(50+var(--layer-index,0))] overflow-hidden",
    "flex w-screen items-end justify-center",
    "data-[has-nested=drawer]:pointer-events-none",
    "data-[swipe-direction=up]:items-start",
    "[&[data-swipe-direction=left],&[data-swipe-direction=right]]:items-stretch",
    "data-[swipe-direction=left]:justify-start",
    "data-[swipe-direction=right]:justify-end",
  ],
  defaultVariants: {
    variant: "default",
  },
  variants: {
    variant: {
      default: "",
      inset: [
        "[--inset:--spacing(0)]",
        "px-(--inset) sm:[--inset:--spacing(4)]",
        "data-[swipe-direction=down]:pb-(--inset)",
        "data-[swipe-direction=up]:pt-(--inset)",
        "[&[data-swipe-direction=left],&[data-swipe-direction=right]]:py-(--inset)",
      ],
    },
  },
});

interface DrawerPositionerProps
  extends React.ComponentProps<typeof ArkDrawer.Positioner>,
    VariantProps<typeof drawerPositionerVariants> {}

export const DrawerPositioner = (props: DrawerPositionerProps) => {
  const { variant = "default", className, ...rest } = props;

  return (
    <ArkDrawer.Positioner
      className={cn(drawerPositionerVariants({ variant }), className)}
      data-slot="drawer-positioner"
      {...rest}
    />
  );
};

const drawerContentVariants = tv({
  base: [
    "[--space:--spacing(6)]",
    "[--stack-depth:max(0,calc(var(--nested-drawers,0)-clamp(0,var(--nested-swipe-progress,0),1)))]",
    "[--stack-scale:clamp(0,calc(1-(var(--stack-depth)*0.05)),1)]",
    "[--stack-peek-offset:calc(var(--stack-depth)*calc(--spacing(6)-1px))]",
    "[--stack-height:var(--drawer-frontmost-height,var(--drawer-rest-height,0px))]",
    "[--stack-x:0px] [--stack-y:0px]",
    "[--snap-gap:calc(var(--drawer-snap-point-offset-y,0px)+clamp(0,1,var(--drawer-snap-point-offset-y,0px)/1px)*var(--drawer-swipe-movement-y,0px))]",
    "group/drawer",
    "relative",
    "flex min-h-0 w-full flex-col",
    "[&[data-swipe-direction=up],&[data-swipe-direction=down]]:max-h-[96svh]",
    "[&[data-swipe-direction=up],&[data-swipe-direction=down]]:h-(--drawer-rest-height,auto)",
    "data-nested-drawer-open:[&[data-swipe-direction=up],&[data-swipe-direction=down]]:h-(--stack-height)!",
    "[&[data-swipe-direction=left],&[data-swipe-direction=right]]:h-full [&[data-swipe-direction=left],&[data-swipe-direction=right]]:max-h-none [&[data-swipe-direction=left],&[data-swipe-direction=right]]:min-h-0 [&[data-swipe-direction=left],&[data-swipe-direction=right]]:w-full [&[data-swipe-direction=left],&[data-swipe-direction=right]]:max-w-md",
    "data-nested-drawer-open:overflow-hidden",
    "data-nested-drawer-open:pointer-events-none",
    "bg-popover data-nested-drawer-open:bg-[color-mix(in_srgb,var(--popover),var(--foreground)_calc(4%*var(--stack-depth)))]",
    "text-popover-foreground",
    "shadow-lg/4",
    "outline-hidden",
    "transition-[background-color,box-shadow,height,transform] duration-450 ease-[cubic-bezier(0.32,0.72,0,1)]",
    "data-[state=closed]:duration-[calc(var(--drawer-swipe-strength)*400ms)]",
    "data-[state=closed]:animate-out data-[state=open]:animate-in",
    "data-swiping:select-none data-swiping:transition-none",
    "data-nested-drawer-open:shadow-sm/4",
    "data-nested-drawer-swiping:transition-none",
    "data-[swipe-direction=down]:origin-[center_bottom]",
    "data-[swipe-direction=down]:[--stack-y:calc(0px-var(--stack-peek-offset)-((1-var(--stack-scale))*var(--stack-height)))]",
    "data-[swipe-direction=up]:origin-[center_top]",
    "data-[swipe-direction=up]:[--stack-y:calc(0px+var(--stack-peek-offset)+((1-var(--stack-scale))*var(--stack-height)))]",
    "data-[swipe-direction=left]:origin-right",
    "data-[swipe-direction=left]:[--stack-x:calc(0px+var(--stack-peek-offset))]",
    "data-[swipe-direction=right]:origin-left",
    "data-[swipe-direction=right]:[--stack-x:calc(0px-var(--stack-peek-offset))]",
    "data-nested-drawer-open:transform-[translate3d(var(--stack-x),var(--stack-y),0)_scale(var(--stack-scale))]!",
    "after:pointer-events-none after:absolute after:bg-inherit after:content-['']",
    "data-[swipe-direction=down]:rounded-t-2xl data-[swipe-direction=down]:border-t",
    "data-[swipe-direction=down]:-mb-[max(0px,var(--snap-gap))]",
    "data-[swipe-direction=down]:pb-[max(0px,calc(env(safe-area-inset-bottom,0px)+var(--snap-gap)))]",
    "[&[data-swipe-direction=up],&[data-swipe-direction=down]]:after:inset-x-0 [&[data-swipe-direction=up],&[data-swipe-direction=down]]:after:h-(--bleed)",
    "data-[swipe-direction=down]:after:top-full",
    "data-[swipe-direction=up]:rounded-b-2xl data-[swipe-direction=up]:border-b",
    "data-[swipe-direction=up]:pt-[env(safe-area-inset-top,0)]",
    "data-[swipe-direction=up]:after:bottom-full",
    "data-[swipe-direction=left]:rounded-e-2xl data-[swipe-direction=left]:border-e",
    "data-[swipe-direction=left]:ps-[env(safe-area-inset-left,0)]",
    "data-[swipe-direction=left]:after:inset-e-full",
    "data-[swipe-direction=right]:rounded-s-2xl data-[swipe-direction=right]:border-s",
    "data-[swipe-direction=right]:pe-[env(safe-area-inset-right,0)]",
    "data-[swipe-direction=right]:after:inset-s-full",
    "[&[data-swipe-direction=left],&[data-swipe-direction=right]]:after:inset-y-0 [&[data-swipe-direction=left],&[data-swipe-direction=right]]:after:h-auto [&[data-swipe-direction=left],&[data-swipe-direction=right]]:after:w-(--bleed)",
    "motion-reduce:animate-none motion-reduce:transition-none",
  ],
  defaultVariants: {
    variant: "default",
  },
  variants: {
    variant: {
      default: "",
      inset: ["sm:rounded-2xl sm:border sm:[--bleed:0px]"],
    },
  },
});

const drawerAnimationVariants = tv({
  defaultVariants: {
    direction: "down",
  },
  variants: {
    direction: {
      down: "slide-in-from-bottom slide-out-to-bottom",
      end: "slide-in-from-end slide-out-to-end",
      start: "slide-in-from-start slide-out-to-start",
      up: "slide-in-from-top slide-out-to-top",
    },
  },
});

const DRAWER_REST_HEIGHT = "--drawer-rest-height";
const NESTED_SWIPE_PROGRESS = "--nested-swipe-progress";
const SWIPING_DRAWER = "[data-slot=drawer-content][data-swiping]";

function readSwipeProgress(front: HTMLElement) {
  const direction = front.getAttribute("data-swipe-direction");
  const horizontal = direction === "left" || direction === "right";
  const raw = front.style.getPropertyValue(
    horizontal ? "--drawer-swipe-movement-x" : "--drawer-swipe-movement-y"
  );
  const distance = Math.abs(Number.parseFloat(raw));
  const size = horizontal ? front.offsetWidth : front.offsetHeight;

  if (!(Number.isFinite(distance) && size > 0)) {
    return 0;
  }

  return Math.min(1, distance / size);
}

function transitionWait(content: HTMLElement) {
  const style = getComputedStyle(content);

  if (style.transitionProperty === "none") {
    return 0;
  }

  return style.transitionDuration.split(",").reduce((max, part) => {
    const time = Number.parseFloat(part);

    if (!Number.isFinite(time)) {
      return max;
    }

    const milliseconds = part.trim().endsWith("ms") ? time : time * 1000;
    return Math.max(max, milliseconds);
  }, 0);
}

function measureRestHeight(
  content: HTMLElement,
  resizeObserver: ResizeObserver
) {
  resizeObserver.unobserve(content);

  const previous = content.style.getPropertyValue(DRAWER_REST_HEIGHT);
  content.style.setProperty(DRAWER_REST_HEIGHT, "auto");
  const height = content.offsetHeight;

  if (height > 0) {
    content.style.setProperty(DRAWER_REST_HEIGHT, `${height}px`);
  } else if (previous) {
    content.style.setProperty(DRAWER_REST_HEIGHT, previous);
  } else {
    content.style.removeProperty(DRAWER_REST_HEIGHT);
  }

  resizeObserver.observe(content);
}

function bindNestedDrawerStack(content: HTMLElement) {
  let frame = 0;
  let tracking = false;
  let freeze = false;
  let wasNested = false;
  let unfreezeTimer = 0;
  let front: HTMLElement | null = null;

  const clearProgress = () => {
    front = null;
    content.style.removeProperty(NESTED_SWIPE_PROGRESS);
  };

  const setProgress = (value: number) => {
    content.style.setProperty(NESTED_SWIPE_PROGRESS, value.toFixed(4));
  };

  const resizeObserver = new ResizeObserver(() => {
    if (freeze || content.hasAttribute("data-nested-drawer-open")) {
      return;
    }

    measureRestHeight(content, resizeObserver);
  });

  const unfreeze = () => {
    window.clearTimeout(unfreezeTimer);
    unfreezeTimer = 0;

    if (content.hasAttribute("data-nested-drawer-open")) {
      return;
    }

    freeze = false;
    measureRestHeight(content, resizeObserver);
  };

  const scheduleUnfreeze = () => {
    window.clearTimeout(unfreezeTimer);
    const wait = transitionWait(content);

    if (wait === 0) {
      unfreeze();
      return;
    }

    unfreezeTimer = window.setTimeout(unfreeze, wait + 80);
  };

  const stopTracking = () => {
    tracking = false;

    if (frame) {
      cancelAnimationFrame(frame);
      frame = 0;
    }
  };

  const activeSwipe = () => {
    const swiping = document.querySelectorAll<HTMLElement>(SWIPING_DRAWER);
    return swiping.item(swiping.length - 1);
  };

  const endTracking = () => {
    stopTracking();

    const closing =
      front?.getAttribute("data-state") === "closed" &&
      content.hasAttribute("data-nested-drawer-open");

    if (closing) {
      setProgress(1);
      return;
    }

    clearProgress();
  };

  const tick = () => {
    frame = 0;

    if (!content.hasAttribute("data-nested-drawer-swiping")) {
      endTracking();
      return;
    }

    const swiping = activeSwipe();

    if (swiping) {
      front = swiping;
    }

    if (!front?.isConnected) {
      clearProgress();
      tracking = false;
      return;
    }

    if (front.getAttribute("data-state") === "closed") {
      setProgress(1);
      tracking = false;
      return;
    }

    setProgress(readSwipeProgress(front));
    frame = requestAnimationFrame(tick);
  };

  const startTracking = () => {
    if (tracking) {
      return;
    }

    tracking = true;
    frame = requestAnimationFrame(tick);
  };

  const sync = () => {
    const nested = content.hasAttribute("data-nested-drawer-open");
    const swiping = content.hasAttribute("data-nested-drawer-swiping");

    if (nested) {
      freeze = true;
    } else if (wasNested) {
      clearProgress();
      scheduleUnfreeze();
    }

    wasNested = nested;

    if (swiping) {
      startTracking();
      return;
    }

    if (tracking) {
      endTracking();
    }

    if (!(freeze || nested) && content.getAttribute("data-state") === "open") {
      measureRestHeight(content, resizeObserver);
    }
  };

  const onTransitionEnd = (event: TransitionEvent) => {
    if (event.target !== content || event.propertyName !== "height") {
      return;
    }

    unfreeze();
  };

  const attributeObserver = new MutationObserver(sync);

  resizeObserver.observe(content);
  attributeObserver.observe(content, {
    attributeFilter: [
      "data-nested-drawer-open",
      "data-nested-drawer-swiping",
      "data-state",
    ],
    attributes: true,
  });
  content.addEventListener("transitionend", onTransitionEnd);
  sync();

  return () => {
    stopTracking();
    window.clearTimeout(unfreezeTimer);
    resizeObserver.disconnect();
    attributeObserver.disconnect();
    content.removeEventListener("transitionend", onTransitionEnd);
    content.style.removeProperty(DRAWER_REST_HEIGHT);
    content.style.removeProperty(NESTED_SWIPE_PROGRESS);
  };
}

function useNestedDrawerStack(content: HTMLElement | null) {
  React.useEffect(() => {
    if (!content) {
      return;
    }

    return bindNestedDrawerStack(content);
  }, [content]);
}

type SnapPoint = number | string;

function needsFullHeightForSnapPoints(snapPoints: SnapPoint[]): boolean {
  if (snapPoints.length !== 1) {
    return true;
  }

  return snapPoints[0] !== 1;
}

interface DrawerContentProps
  extends React.ComponentProps<typeof ArkDrawer.Content>,
    VariantProps<typeof drawerContentVariants> {
  /**
   * Portal target. Keeps the drawer inside a frame instead of the document body.
   */
  container?: React.RefObject<HTMLElement | null>;
  /**
   * Show the drag bar indicator
   *
   * @default true
   */
  showBar?: boolean;
  /**
   * Show close button at the top right corner
   *
   * @default false
   */
  showCloseButton?: boolean;
}

export const DrawerContent = (props: DrawerContentProps) => {
  const {
    variant = "default",
    container,
    showBar,
    showCloseButton = false,
    className,
    children,
    ref,
    onPointerDown,
    ...rest
  } = props;
  const forwardedRef = React.useRef(ref);
  const [content, setContent] = React.useState<HTMLDivElement | null>(null);

  forwardedRef.current = ref;
  useNestedDrawerStack(content);

  const setContentRef = React.useCallback((node: HTMLDivElement | null) => {
    setContent((current) => (current === node ? current : node));

    const forwarded = forwardedRef.current;

    if (typeof forwarded === "function") {
      forwarded(node);
      return;
    }

    if (forwarded) {
      forwarded.current = node;
    }
  }, []);

  return (
    <Portal container={container}>
      <DrawerOverlay className={cn(container && "absolute")} />

      <DrawerContext>
        {({ snapPoints, swipeDirection }) => {
          const isVertical =
            swipeDirection === "down" || swipeDirection === "up";

          const fullHeight =
            isVertical && needsFullHeightForSnapPoints(snapPoints);

          return (
            <DrawerPositioner
              className={cn(container && "absolute w-full")}
              variant={variant}
            >
              <ArkDrawer.Content
                className={cn(
                  drawerContentVariants({ variant }),
                  drawerAnimationVariants({
                    direction: swipeDirection ?? "down",
                  }),
                  isVertical && "text-center",
                  fullHeight && "h-full",
                  className
                )}
                data-slot="drawer-content"
                {...rest}
                onPointerDown={(event) => {
                  onPointerDown?.(event);
                  if (event.defaultPrevented) {
                    return;
                  }
                  event.stopPropagation();
                }}
                ref={setContentRef}
              >
                <DrawerGrabber show={showBar} />

                {children}

                {!!showCloseButton && (
                  <DrawerClose asChild>
                    <Button
                      aria-label="Close"
                      className="absolute inset-e-4 top-4 opacity-64 hover:opacity-100 group-data-[swipe-direction=up]/drawer:top-[calc(1rem+env(safe-area-inset-top,0))]"
                      size="icon-sm"
                      variant="ghost"
                    >
                      <XIcon aria-hidden />
                    </Button>
                  </DrawerClose>
                )}
              </ArkDrawer.Content>
            </DrawerPositioner>
          );
        }}
      </DrawerContext>
    </Portal>
  );
};

interface DrawerGrabberProps
  extends React.ComponentProps<typeof ArkDrawer.Grabber> {
  /**
   * Whether to render the grabber for top and bottom drawers
   *
   * @default true
   */
  show?: boolean;
}

export const DrawerGrabber = (props: DrawerGrabberProps) => {
  const { show = true, className, ...rest } = props;

  if (!show) {
    return null;
  }

  return (
    <ArkDrawer.Grabber
      className={cn(
        "hidden shrink-0",
        "p-3",
        "select-none",
        "cursor-grab touch-none",
        "group-data-dragging/drawer:cursor-grabbing",
        "group-[&[data-swipe-direction=up],&[data-swipe-direction=down]]/drawer:flex group-[&[data-swipe-direction=up],&[data-swipe-direction=down]]/drawer:w-full group-[&[data-swipe-direction=up],&[data-swipe-direction=down]]/drawer:items-center group-[&[data-swipe-direction=up],&[data-swipe-direction=down]]/drawer:justify-center",
        "group-data-[swipe-direction=up]/drawer:z-10 group-data-[swipe-direction=up]/drawer:order-last",
        "group-data-nested-drawer-open/drawer:hidden",
        className
      )}
      data-slot="drawer-grabber"
      {...rest}
    >
      <ArkDrawer.GrabberIndicator
        className="h-1 w-10 rounded-full bg-muted-foreground/32 group-hover/drawer:bg-muted-foreground/48"
        data-slot="drawer-grabber-indicator"
      />
    </ArkDrawer.Grabber>
  );
};

interface DrawerHeaderProps extends React.ComponentProps<typeof ark.div> {
  /**
   * The description of the drawer
   */
  description?: string;
  /**
   * The title of the drawer
   */
  title?: string;
}

export const DrawerHeader = (props: DrawerHeaderProps) => {
  const { className, title, description, children, ...rest } = props;

  return (
    <ark.div
      className={cn(
        dialogHeaderVariants(),
        "in-[[data-slot=drawer-content]:has([data-slot=drawer-body])]:pb-3",
        "max-sm:pb-4",
        "group-data-[swipe-direction=down]/drawer:pt-4",
        className
      )}
      data-slot="drawer-header"
      {...rest}
    >
      {!!title && <DrawerTitle>{title}</DrawerTitle>}

      {!!description && <DrawerDescription>{description}</DrawerDescription>}

      {!title && typeof children === "string" ? (
        <DrawerTitle>{children}</DrawerTitle>
      ) : (
        children
      )}
    </ark.div>
  );
};

export const DrawerTitle = (
  props: React.ComponentProps<typeof ArkDrawer.Title>
) => {
  const { className, ...rest } = props;

  return (
    <ArkDrawer.Title
      className={cn(dialogTitleVariants(), className)}
      data-slot="drawer-title"
      {...rest}
    />
  );
};

export const DrawerDescription = (
  props: React.ComponentProps<typeof ArkDrawer.Description>
) => {
  const { className, ...rest } = props;

  return (
    <ArkDrawer.Description
      className={cn(dialogDescriptionVariants(), className)}
      data-slot="drawer-description"
      {...rest}
    />
  );
};

interface DrawerBodyProps extends React.ComponentProps<typeof ark.div> {
  /**
   * Add a fade effect to the scroll area
   *
   * @default true
   */
  scrollFade?: boolean;
}

export const DrawerBody = (props: DrawerBodyProps) => {
  const { scrollFade = true, className, ...rest } = props;

  return (
    <ScrollArea
      className={cn(
        "flex min-h-0 min-w-0 flex-1 touch-pan-y flex-col overflow-hidden",
        "*:data-[slot=scroll-area-viewport]:h-auto! *:data-[slot=scroll-area-viewport]:min-h-0 *:data-[slot=scroll-area-viewport]:flex-auto *:data-[slot=scroll-area-viewport]:touch-pan-y"
      )}
      orientation="vertical"
      overscrollContain
      scrollFade={scrollFade}
    >
      <ark.div
        className={cn(
          "p-(--space)",
          "group-data-[swipe-direction=down]/drawer:pt-0",
          "in-[[data-slot=drawer-content]:has([data-slot=drawer-header]:not(.sr-only))]:pt-1",
          "in-[[data-slot=drawer-content]:has([data-slot=drawer-footer])]:pb-1",
          className
        )}
        data-slot="drawer-body"
        {...rest}
      />
    </ScrollArea>
  );
};

export const DrawerClose = (
  props: React.ComponentProps<typeof ArkDrawer.CloseTrigger>
) => <ArkDrawer.CloseTrigger data-slot="drawer-close" {...props} />;

export const DrawerFooter = (props: React.ComponentProps<typeof ark.div>) => {
  const { className, ...rest } = props;

  return (
    <ark.div
      className={cn(
        "flex shrink-0 flex-col gap-2 sm:flex-row-reverse sm:justify-start",
        "px-(--space) py-4",
        "sm:rounded-none",
        className
      )}
      data-slot="drawer-footer"
      {...rest}
    />
  );
};

export const DrawerMenu = (props: React.ComponentProps<"div">) => {
  const { className, ...rest } = props;

  return (
    <div
      className={cn("flex flex-col p-1.5 text-start", className)}
      data-slot="drawer-menu"
      {...rest}
    />
  );
};

interface DrawerMenuItemProps
  extends React.ComponentProps<"button">,
    VariantProps<typeof menuItemVariants> {}

export const DrawerMenuItem = (props: DrawerMenuItemProps) => {
  const { className, type = "button", variant = "default", ...rest } = props;

  return (
    <button
      className={cn(
        menuItemVariants({ variant }),
        variant === "destructive"
          ? "hover:bg-destructive/8 dark:hover:bg-destructive-foreground/8"
          : "hover:bg-accent hover:text-accent-foreground",
        className
      )}
      data-slot="drawer-menu-item"
      data-variant={variant}
      type={type}
      {...rest}
    />
  );
};

export const DrawerMenuSeparator = (props: React.ComponentProps<"hr">) => {
  const { className, ...rest } = props;

  return (
    <hr
      className={cn(menuSeparatorVariants(), "border-0", className)}
      data-slot="drawer-menu-separator"
      {...rest}
    />
  );
};

export const DrawerMenuGroup = (props: React.ComponentProps<"div">) => {
  const { className, ...rest } = props;

  return (
    <div
      className={cn("flex flex-col", className)}
      data-slot="drawer-menu-group"
      {...rest}
    />
  );
};

export const DrawerMenuGroupLabel = (props: React.ComponentProps<"div">) => {
  const { className, ...rest } = props;

  return (
    <div
      className={cn(menuGroupLabelVariants(), className)}
      data-slot="drawer-menu-group-label"
      {...rest}
    />
  );
};

export const DrawerMenuTrigger = (
  props: React.ComponentProps<typeof DrawerTrigger>
) => {
  const { className, children, ...rest } = props;

  return (
    <DrawerTrigger
      className={cn(
        menuItemVariants(),
        "hover:bg-accent hover:text-accent-foreground",
        className
      )}
      data-slot="drawer-menu-trigger"
      {...rest}
    >
      {children}
      <ChevronRightIcon className="ms-auto size-3.5 rtl:rotate-180" />
    </DrawerTrigger>
  );
};

export const DrawerMenuCheckboxItem = (
  props: React.ComponentProps<typeof ArkCheckbox.Root>
) => {
  const { children, className, ...rest } = props;
  const { item, indicator } = menuItemIndicatorVariants();

  return (
    <ArkCheckbox.Root
      className={cn(
        menuItemVariants(),
        item(),
        "hover:bg-accent hover:text-accent-foreground",
        className
      )}
      data-slot="drawer-menu-checkbox-item"
      {...rest}
    >
      <ArkCheckbox.Indicator className={indicator()}>
        <CheckIcon />
      </ArkCheckbox.Indicator>
      <span className="flex min-w-0 flex-1 items-center gap-2">{children}</span>
      <ArkCheckbox.HiddenInput />
    </ArkCheckbox.Root>
  );
};

export const DrawerMenuRadioGroup = (
  props: React.ComponentProps<typeof ArkRadioGroup.Root>
) => {
  const { className, ...rest } = props;

  return (
    <ArkRadioGroup.Root
      className={cn("flex flex-col", className)}
      data-slot="drawer-menu-radio-group"
      {...rest}
    />
  );
};

export const DrawerMenuRadioItem = (
  props: React.ComponentProps<typeof ArkRadioGroup.Item>
) => {
  const { children, className, ...rest } = props;
  const { item, indicator } = menuItemIndicatorVariants();

  return (
    <ArkRadioGroup.Item
      className={cn(
        menuItemVariants(),
        item(),
        "hover:bg-accent hover:text-accent-foreground",
        className
      )}
      data-slot="drawer-menu-radio-item"
      {...rest}
    >
      <span
        className={cn(
          indicator(),
          "hidden group-data-[state=checked]/menu-item:flex"
        )}
      >
        <CheckIcon />
      </span>
      <ArkRadioGroup.ItemText className="flex min-w-0 flex-1 items-center gap-2">
        {children}
      </ArkRadioGroup.ItemText>
      <ArkRadioGroup.ItemHiddenInput />
    </ArkRadioGroup.Item>
  );
};
