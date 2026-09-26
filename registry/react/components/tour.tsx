"use client";

import { ark } from "@ark-ui/react/factory";
import { Portal } from "@ark-ui/react/portal";
import {
  Tour as ArkTour,
  type TourStepDetails,
  type UseTourProps,
  useTour as useArkTour,
  useTourContext as useArkTourContext,
} from "@ark-ui/react/tour";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import type React from "react";
import { tv, type VariantProps } from "tailwind-variants";
import { cn } from "@/lib/utils";
import { Button } from "@/registry/react/components/button";
import {
  DialogBody,
  DialogFooter,
  dialogDescriptionVariants,
  dialogHeaderVariants,
  dialogOverlayVariants,
  dialogTitleVariants,
} from "@/registry/react/components/dialog";

export type TourStepType = TourStepDetails;
export type TourStatusChangeDetails = Parameters<
  NonNullable<UseTourProps["onStatusChange"]>
>[0];
export type TourStepChangeDetails = Parameters<
  NonNullable<UseTourProps["onStepChange"]>
>[0];

export const useTour = useArkTour;
export const useTourContext = useArkTourContext;

export const Tour = (props: React.ComponentProps<typeof ArkTour.Root>) => {
  const { children, lazyMount = true, unmountOnExit = true, ...rest } = props;

  return (
    <ArkTour.Root
      data-slot="tour"
      lazyMount={lazyMount}
      unmountOnExit={unmountOnExit}
      {...rest}
    >
      {children}
    </ArkTour.Root>
  );
};

export const TourTrigger = (props: React.ComponentProps<typeof ark.button>) => {
  const { onClick, ...rest } = props;

  const tour = useArkTourContext();

  return (
    <ark.button
      data-slot="tour-trigger"
      type="button"
      {...rest}
      onClick={(event) => {
        onClick?.(event);
        if (event.defaultPrevented) {
          return;
        }
        tour.start();
      }}
    />
  );
};

export const TourActionTrigger = (
  props: React.ComponentProps<typeof ArkTour.ActionTrigger>
) => <ArkTour.ActionTrigger data-slot="tour-action-trigger" {...props} />;

export const TourOverlay = (
  props: React.ComponentProps<typeof ArkTour.Backdrop>
) => {
  const { className, ...rest } = props;

  return (
    <ArkTour.Backdrop
      className={cn(
        dialogOverlayVariants(),
        "z-[calc(var(--tour-layer)+50+var(--layer-index,0))]",
        "duration-initial",
        className
      )}
      data-slot="tour-overlay"
      {...rest}
    />
  );
};

export const tourPositionerVariants = tv({
  base: [
    "z-[calc(var(--tour-layer)+50+var(--layer-index,0))]",
    "data-[type=dialog]:fixed data-[type=dialog]:inset-0 data-[type=dialog]:p-4",
    "data-[type=tooltip]:absolute",
    "data-[type=tooltip]:max-w-[calc(100dvw-1rem)] data-[type=tooltip]:max-sm:min-w-0!",
    "data-[type=floating]:fixed",
    "data-[type=floating]:data-[placement*=top]:top-6",
    "data-[type=floating]:data-[placement*=bottom]:bottom-6",
    "data-[type=floating]:data-[placement*=start]:inset-s-6",
    "data-[type=floating]:data-[placement*=end]:inset-e-6",
    "data-[type=floating]:w-[min(28rem,calc(100vw-3rem))]",
  ],
  defaultVariants: {
    bottomStickOnMobile: false,
  },
  variants: {
    bottomStickOnMobile: {
      false: [
        "data-[type=dialog]:flex data-[type=dialog]:items-center data-[type=dialog]:justify-center",
      ],
      true: [
        "data-[type=dialog]:max-sm:h-svh data-[type=dialog]:max-sm:w-screen",
        "data-[type=dialog]:max-sm:grid data-[type=dialog]:max-sm:grid-rows-[1fr_auto] data-[type=dialog]:max-sm:justify-items-center",
        "data-[type=dialog]:max-sm:pt-12",
        "data-[type=dialog]:sm:flex data-[type=dialog]:sm:items-center data-[type=dialog]:sm:justify-center",
      ],
    },
  },
});

interface TourPositionerProps
  extends React.ComponentProps<typeof ArkTour.Positioner>,
    VariantProps<typeof tourPositionerVariants> {
  /**
   * Stick dialog steps to the bottom of the screen on mobile
   *
   * @default false
   */
  bottomStickOnMobile?: boolean;
}

export const TourPositioner = (props: TourPositionerProps) => {
  const { bottomStickOnMobile = false, className, ...rest } = props;

  return (
    <ArkTour.Positioner
      className={cn(tourPositionerVariants({ bottomStickOnMobile }), className)}
      data-slot="tour-positioner"
      {...rest}
    />
  );
};

export const tourContentVariants = tv({
  defaultVariants: {
    bottomStickOnMobile: false,
  },
  slots: {
    content: [
      "[--space:--spacing(4)]",
      "relative z-[calc(var(--tour-layer,2)+50+var(--layer-index,0))]",
      "w-full max-w-md",
      "data-[type=tooltip]:w-fit data-[type=tooltip]:max-w-[min(28rem,calc(100dvw-2rem))] data-[type=tooltip]:max-sm:min-w-0 data-[type=tooltip]:sm:min-w-xs",
      "outline-hidden",
      "origin-center data-[type=tooltip]:origin-(--transform-origin)",
      "duration-200 ease-out",
      "data-[state=closed]:animate-out data-[state=open]:animate-in",
      "data-[state=open]:fade-in-0 data-[state=closed]:fade-out-0",
      "data-[state=open]:zoom-in-95 data-[state=closed]:zoom-out-95",
      "motion-reduce:animate-none",
      "motion-reduce:data-[state=closed]:animate-none motion-reduce:data-[state=open]:animate-none",
    ],
    panel: [
      "relative",
      "flex flex-col",
      "bg-popover",
      "text-popover-foreground",
      "rounded-2xl border shadow-lg/4",
      "overflow-hidden",
    ],
  },
  variants: {
    bottomStickOnMobile: {
      true: {
        content: [
          "data-[type=dialog]:max-sm:row-start-2 data-[type=dialog]:max-sm:min-w-0 data-[type=dialog]:max-sm:max-w-none",
          "data-[type=dialog]:max-sm:origin-bottom",
          "data-[type=dialog]:max-sm:data-[state=closed]:slide-out-to-bottom-1/2 data-[type=dialog]:max-sm:data-[state=closed]:zoom-out-100",
          "data-[type=dialog]:max-sm:data-[state=open]:slide-in-from-bottom-1/2 data-[type=dialog]:max-sm:data-[state=open]:zoom-in-100",
        ],
        panel: [
          "in-data-[type=dialog]:max-sm:max-h-[calc(100svh-3rem)] in-data-[type=dialog]:max-sm:min-h-0",
          "in-data-[type=dialog]:max-sm:pb-[env(safe-area-inset-bottom,0px)]",
        ],
      },
    },
  },
});

interface TourContentProps
  extends React.ComponentProps<typeof ArkTour.Content>,
    VariantProps<typeof tourContentVariants> {
  /**
   * Stick dialog steps to the bottom of the screen on mobile
   *
   * @default false
   */
  bottomStickOnMobile?: boolean;
  /**
   * Whether to show the arrow
   *
   * @default true
   */
  showArrow?: boolean;
  /**
   * Show close button at the top right corner
   *
   * @default true
   */
  showCloseButton?: boolean;
}

export const TourContent = (props: TourContentProps) => {
  const {
    bottomStickOnMobile = false,
    showArrow = true,
    showCloseButton = true,
    className,
    children,
    ...rest
  } = props;

  const { content, panel } = tourContentVariants({ bottomStickOnMobile });

  return (
    <Portal>
      <TourOverlay />
      <TourPositioner bottomStickOnMobile={bottomStickOnMobile}>
        <ArkTour.Content
          className={cn(content(), className)}
          data-slot="tour-content"
          {...rest}
        >
          <div className={panel()}>
            {children}

            {!!showCloseButton && (
              <TourClose asChild className="absolute inset-e-4 top-4">
                <Button
                  className="size-8 border-none text-muted-foreground hover:text-foreground"
                  size="icon-md"
                  variant="ghost"
                >
                  <X aria-hidden />

                  <span className="sr-only">Close</span>
                </Button>
              </TourClose>
            )}
          </div>

          {showArrow ? <TourArrow /> : null}
        </ArkTour.Content>
      </TourPositioner>

      <TourSpotlight />
    </Portal>
  );
};

export const TourArrow = (
  props: React.ComponentProps<typeof ArkTour.Arrow>
) => {
  const { style, children, ...rest } = props;

  return (
    <ArkTour.Arrow
      data-slot="tour-arrow"
      style={
        {
          "--arrow-background": "var(--popover)",
          "--arrow-size": "calc(1.5 * var(--spacing))",
          ...style,
        } as React.CSSProperties
      }
      {...rest}
    >
      {children ?? <ArkTour.ArrowTip className="border-t border-l" />}
    </ArkTour.Arrow>
  );
};

export const TourBody = (props: React.ComponentProps<typeof DialogBody>) => {
  const { className, ...rest } = props;

  return (
    <DialogBody
      className={cn(
        "in-[[data-slot=tour-content]:has([data-slot=tour-header]:not(.sr-only))]:pt-1",
        className
      )}
      data-slot="tour-body"
      {...rest}
    />
  );
};

export const TourSpotlight = (
  props: React.ComponentProps<typeof ArkTour.Spotlight>
) => {
  const { className, ...rest } = props;

  return (
    <ArkTour.Spotlight
      className={cn(
        "z-[calc(var(--tour-layer)+50+var(--layer-index,0))]",
        "border-2 border-ring/64 ring-2 ring-ring/24",
        className
      )}
      data-slot="tour-spotlight"
      {...rest}
    />
  );
};

interface TourHeaderProps extends React.ComponentProps<typeof ark.div> {
  /**
   * The description of the tour
   */
  description?: string;
  /**
   * The title of the tour
   */
  title?: string;
}

export const TourHeader = (props: TourHeaderProps) => {
  const { title, description, className, children, ...rest } = props;

  return (
    <ark.div
      data-slot="tour-header"
      {...rest}
      className={cn(
        dialogHeaderVariants(),
        "in-[[data-slot=tour-content]:has([data-slot=tour-body])]:pb-3",
        "max-sm:pb-4",
        className
      )}
    >
      {!!title && <TourTitle>{title}</TourTitle>}
      {!!description && <TourDescription>{description}</TourDescription>}
      {!title && typeof children === "string" ? (
        <TourTitle>{children}</TourTitle>
      ) : (
        children
      )}
    </ark.div>
  );
};

export const TourTitle = (
  props: React.ComponentProps<typeof ArkTour.Title>
) => {
  const { className, ...rest } = props;

  return (
    <ArkTour.Title
      className={cn(dialogTitleVariants(), className)}
      data-slot="tour-title"
      {...rest}
    />
  );
};

export const TourDescription = (
  props: React.ComponentProps<typeof ArkTour.Description>
) => {
  const { className, ...rest } = props;

  return (
    <ArkTour.Description
      className={cn(dialogDescriptionVariants(), className)}
      data-slot="tour-description"
      {...rest}
    />
  );
};

export const TourProgressText = (
  props: React.ComponentProps<typeof ArkTour.ProgressText>
) => {
  const { className, ...rest } = props;

  return (
    <ArkTour.ProgressText
      className={cn("text-muted-foreground text-sm", className)}
      data-slot="tour-progress-text"
      {...rest}
    />
  );
};

export const TourClose = (
  props: React.ComponentProps<typeof ArkTour.CloseTrigger>
) => <ArkTour.CloseTrigger data-slot="tour-close-trigger" {...props} />;

const tourActionPlacementVariants = tv({
  defaultVariants: {
    placement: "middle",
  },
  variants: {
    placement: {
      end: "col-start-3 row-start-1 justify-self-end",
      middle: "col-start-2 row-start-1 justify-self-end",
      start: "col-start-1 row-start-1 justify-self-start",
    },
  },
});

type TourStepAction = NonNullable<TourStepType["actions"]>[number];
type TourActionPlacement = "end" | "middle" | "start";

const getTourActionPlacement = (
  action: TourStepAction,
  hasNext: boolean
): TourActionPlacement => {
  const kind = action.action;

  if (typeof kind === "function" || kind === undefined) {
    return "middle";
  }

  switch (kind) {
    case "prev":
      return "start";
    case "next":
      return "end";
    case "skip":
      return "middle";
    case "dismiss":
      return hasNext ? "middle" : "end";
    default: {
      const _exhaustive: never = kind;
      return _exhaustive;
    }
  }
};

export const TourFooter = (
  props: React.ComponentProps<typeof DialogFooter>
) => {
  const { children, className, ...rest } = props;

  return (
    <ArkTour.Control {...rest} asChild>
      <DialogFooter
        className={cn(
          "w-full",
          "grid grid-cols-[minmax(0,1fr)_auto_auto] items-center gap-2",
          className
        )}
        data-slot="tour-control"
      >
        {children}
      </DialogFooter>
    </ArkTour.Control>
  );
};

export const TourActions = (
  props: Omit<React.ComponentProps<typeof DialogFooter>, "children">
) => {
  const { className, ...rest } = props;

  return (
    <ArkTour.Actions>
      {(actions) => {
        if (actions.length === 0) {
          return null;
        }

        const hasNext = actions.some((action) => action.action === "next");

        return (
          <ArkTour.Control {...rest} asChild>
            <DialogFooter
              className={cn(
                "w-full",
                "grid grid-cols-[minmax(0,1fr)_auto_auto] items-center gap-2",
                className
              )}
              data-slot="tour-actions"
            >
              {actions.map((action) => {
                const isOutline =
                  action.action === "prev" ||
                  action.action === "skip" ||
                  (action.action === "dismiss" && hasNext);

                return (
                  <TourActionTrigger action={action} asChild key={action.label}>
                    <Button
                      className={tourActionPlacementVariants({
                        placement: getTourActionPlacement(action, hasNext),
                      })}
                      disabled={action.attrs?.disabled ? true : undefined}
                      {...(isOutline ? { variant: "outline" as const } : {})}
                    >
                      {action.action === "prev" && (
                        <ChevronLeft
                          aria-hidden
                          className="size-3.5 rtl:rotate-180"
                        />
                      )}
                      {action.label}
                      {action.action === "next" && (
                        <ChevronRight
                          aria-hidden
                          className="size-3.5 rtl:rotate-180"
                        />
                      )}
                    </Button>
                  </TourActionTrigger>
                );
              })}
            </DialogFooter>
          </ArkTour.Control>
        );
      }}
    </ArkTour.Actions>
  );
};

export const TourPreviousStep = (
  props: Omit<React.ComponentProps<typeof TourActionTrigger>, "action">
) => {
  const { className, ...rest } = props;

  const tour = useArkTourContext();

  const prevAction = tour.step?.actions?.find(
    (action) => action.action === "prev"
  );

  if (!prevAction) {
    return null;
  }

  return (
    <TourActionTrigger
      data-slot="tour-previous-step"
      {...rest}
      action={prevAction}
      asChild
    >
      <Button
        className={cn(
          tourActionPlacementVariants({ placement: "start" }),
          className
        )}
        variant="outline"
      >
        <ChevronLeft aria-hidden className="size-3.5 rtl:rotate-180" />
        {prevAction.label}
      </Button>
    </TourActionTrigger>
  );
};

export const TourNextStep = (
  props: Omit<React.ComponentProps<typeof TourActionTrigger>, "action">
) => {
  const { className, ...rest } = props;

  const tour = useArkTourContext();

  const action = tour.step?.actions?.find(
    (stepAction) =>
      stepAction.action === "next" || stepAction.action === "dismiss"
  );

  if (!action) {
    return null;
  }

  return (
    <TourActionTrigger
      data-slot="tour-next-step"
      {...rest}
      action={action}
      asChild
    >
      <Button
        className={cn(
          tourActionPlacementVariants({ placement: "end" }),
          className
        )}
        disabled={action.attrs?.disabled ? true : undefined}
      >
        {action.label}

        {action.action === "next" && (
          <ChevronRight aria-hidden className="size-3.5 rtl:rotate-180" />
        )}
      </Button>
    </TourActionTrigger>
  );
};
