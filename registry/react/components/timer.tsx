"use client";

import { ark } from "@ark-ui/react/factory";
import {
  Timer as ArkTimer,
  useTimerContext as useArkTimer,
} from "@ark-ui/react/timer";
import type React from "react";
import { cn } from "@/lib/utils";

export const useTimer = useArkTimer;

export const remainingMsUntilDate = (date: Date): number => {
  const end = new Date(date).getTime();

  return Math.max(0, end - Date.now());
};

export const Timer = (props: React.ComponentProps<typeof ArkTimer.Root>) => {
  const { className, ...rest } = props;

  return (
    <ArkTimer.Root
      className={cn(
        "min-w-0",
        "flex flex-col items-start gap-4",
        "text-foreground",
        className
      )}
      data-slot="timer"
      {...rest}
    />
  );
};

export const TimerArea = (
  props: React.ComponentProps<typeof ArkTimer.Area>
) => {
  const { className, ...rest } = props;

  return (
    <ArkTimer.Area
      className={cn(
        "flex items-center gap-2",
        "has-data-[slot=timer-item-label]:items-start",
        className
      )}
      data-slot="timer-area"
      {...rest}
    />
  );
};

interface TimerItemGroupProps extends React.ComponentProps<typeof ark.div> {
  /**
   * The orientation of the timer item group.
   *
   * @default "vertical"
   */
  orientation?: "horizontal" | "vertical";
}

export const TimerItemGroup = (props: TimerItemGroupProps) => {
  const { orientation = "vertical", className, ...rest } = props;

  return (
    <ark.div
      className={cn(
        "flex items-center",
        "data-[orientation=horizontal]:flex-row",
        "data-[orientation=vertical]:flex-col",
        className
      )}
      data-orientation={orientation}
      data-slot="timer-item-group"
      {...rest}
    />
  );
};

export const TimerItem = (
  props: React.ComponentProps<typeof ArkTimer.Item>
) => {
  const { className, ...rest } = props;

  return (
    <ArkTimer.Item
      className={cn(
        "w-fit min-w-[2.5ch]",
        "text-center font-semibold text-3xl text-foreground tabular-nums tracking-wider",
        className
      )}
      data-slot="timer-item"
      {...rest}
    />
  );
};

export const TimerItemLabel = (props: React.ComponentProps<typeof ark.div>) => {
  const { className, ...rest } = props;

  return (
    <ark.div
      className={cn("text-muted-foreground text-xs", className)}
      data-slot="timer-item-label"
      {...rest}
    />
  );
};

export const TimerSeparator = (
  props: React.ComponentProps<typeof ArkTimer.Separator>
) => {
  const { className, children, ...rest } = props;

  return (
    <ArkTimer.Separator
      className={cn("font-semibold text-2xl text-muted-foreground", className)}
      data-slot="timer-separator"
      {...rest}
    >
      {children ?? ":"}
    </ArkTimer.Separator>
  );
};

export const TimerControl = (
  props: React.ComponentProps<typeof ArkTimer.Control>
) => {
  const { className, ...rest } = props;

  return (
    <ArkTimer.Control
      className={cn("flex items-center gap-2", className)}
      data-slot="timer-control"
      {...rest}
    />
  );
};

export const TimerActionTrigger = (
  props: React.ComponentProps<typeof ArkTimer.ActionTrigger>
) => <ArkTimer.ActionTrigger data-slot="timer-action" {...props} />;

interface TimerActionProps
  extends Omit<React.ComponentProps<typeof ArkTimer.ActionTrigger>, "action"> {}

export const TimerPause = (props: TimerActionProps) => (
  <ArkTimer.ActionTrigger
    aria-label="Pause"
    data-slot="timer-pause"
    {...props}
    action="pause"
  />
);

export const TimerResume = (props: TimerActionProps) => (
  <ArkTimer.ActionTrigger
    aria-label="Resume"
    data-slot="timer-resume"
    {...props}
    action="resume"
  />
);

export const TimerStart = (props: TimerActionProps) => (
  <ArkTimer.ActionTrigger
    aria-label="Start"
    data-slot="timer-start"
    {...props}
    action="start"
  />
);

export const TimerReset = (props: TimerActionProps) => (
  <ArkTimer.ActionTrigger
    aria-label="Reset"
    data-slot="timer-reset"
    {...props}
    action="reset"
  />
);

export const TimerRestart = (props: TimerActionProps) => (
  <ArkTimer.ActionTrigger
    aria-label="Restart"
    data-slot="timer-restart"
    {...props}
    action="restart"
  />
);

export const TimerPlay = (props: TimerActionProps) => {
  const { paused } = useArkTimer();

  if (paused) {
    return <TimerResume {...props} />;
  }

  return <TimerStart {...props} />;
};
