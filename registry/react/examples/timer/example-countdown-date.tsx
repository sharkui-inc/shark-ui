"use client";

import { Card, CardContent } from "@/registry/react/components/card";
import {
  remainingMsUntilDate,
  Timer,
  TimerArea,
  TimerItem,
  TimerItemGroup,
  TimerItemLabel,
  TimerSeparator,
} from "@/registry/react/components/timer";

const Example = () => (
  <Card className="rounded-3xl [--space:--spacing(6)]">
    <CardContent className="flex flex-col items-center gap-3">
      <p className="text-center text-muted-foreground text-xs">
        Until {formatDate(targetDate)}
      </p>
      <Timer
        autoStart
        className="items-center gap-4"
        countdown
        startMs={remainingMsUntilDate(targetDate)}
      >
        <TimerArea>
          <TimerItemGroup>
            <TimerItem type="days" />
            <TimerItemLabel>days</TimerItemLabel>
          </TimerItemGroup>
          <TimerSeparator />
          <TimerItemGroup>
            <TimerItem type="hours" />
            <TimerItemLabel>hours</TimerItemLabel>
          </TimerItemGroup>
          <TimerSeparator />
          <TimerItemGroup>
            <TimerItem type="minutes" />
            <TimerItemLabel>minutes</TimerItemLabel>
          </TimerItemGroup>
          <TimerSeparator />
          <TimerItemGroup>
            <TimerItem type="seconds" />
            <TimerItemLabel>seconds</TimerItemLabel>
          </TimerItemGroup>
        </TimerArea>
      </Timer>
    </CardContent>
  </Card>
);

const formatDate = (date: Date) =>
  date.toLocaleDateString(undefined, { dateStyle: "medium" });

const targetDate = new Date();
targetDate.setDate(targetDate.getDate() + 7);

export default Example;
