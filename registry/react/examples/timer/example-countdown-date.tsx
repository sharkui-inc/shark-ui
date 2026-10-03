"use client";

import { Card, CardContent } from "@/registry/react/components/card";
import { ClientOnly } from "@/registry/react/components/client-only";
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
      <ClientOnly fallback={<Countdown />}>
        <Countdown live />
      </ClientOnly>
    </CardContent>
  </Card>
);

const Countdown = (props: { live?: boolean }) => {
  const { live = false } = props;

  const date = live ? daysFromNow(7) : null;

  return (
    <>
      <p className="text-center text-muted-foreground text-xs">
        {date ? `Until ${formatDate(date)}` : "7 days from today"}
      </p>
      <Timer
        autoStart={live}
        className="items-center gap-4"
        countdown
        startMs={date ? remainingMsUntilDate(date) : weekMs}
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
    </>
  );
};

const weekMs = 7 * 24 * 60 * 60 * 1000;

const daysFromNow = (days: number) => {
  const date = new Date();
  date.setDate(date.getDate() + days);
  return date;
};

const formatDate = (date: Date) =>
  new Intl.DateTimeFormat("en-US", {
    dateStyle: "medium",
    timeZone: "UTC",
  }).format(date);

export default Example;
