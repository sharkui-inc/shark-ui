"use client";

import {
  Timer,
  TimerArea,
  TimerItem,
  TimerItemGroup,
  TimerItemLabel,
  TimerSeparator,
} from "@/registry/react/components/timer";

const Example = () => (
  <Timer autoStart>
    <TimerArea>
      <TimerItemGroup>
        <TimerItem type="days" />
        <TimerItemLabel>Days</TimerItemLabel>
      </TimerItemGroup>
      <TimerSeparator />
      <TimerItemGroup>
        <TimerItem type="hours" />
        <TimerItemLabel>Hours</TimerItemLabel>
      </TimerItemGroup>
      <TimerSeparator />
      <TimerItemGroup>
        <TimerItem type="minutes" />
        <TimerItemLabel>Minutes</TimerItemLabel>
      </TimerItemGroup>
      <TimerSeparator />
      <TimerItemGroup>
        <TimerItem type="seconds" />
        <TimerItemLabel>Seconds</TimerItemLabel>
      </TimerItemGroup>
    </TimerArea>
  </Timer>
);

export default Example;
