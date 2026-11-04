"use client";

import { PauseIcon, PlayIcon, RotateCcwIcon, SettingsIcon } from "lucide-react";
import { Button } from "@/registry/react/components/button";
import { Card, CardContent } from "@/registry/react/components/card";
import {
  Timer,
  TimerArea,
  TimerControl,
  TimerItem,
  TimerPause,
  TimerPlay,
  TimerReset,
  TimerSeparator,
} from "@/registry/react/components/timer";

const Example = () => (
  <Card className="w-full max-w-64 rounded-3xl [--space:--spacing(6)]">
    <CardContent>
      <Timer
        className="items-center justify-center px-10"
        countdown
        startMs={25 * 60 * 1000}
      >
        <span>🍅</span>
        <TimerArea>
          <TimerItem className="text-5xl" type="minutes" />
          <TimerSeparator />
          <TimerItem className="text-5xl" type="seconds" />
        </TimerArea>

        <span className="text-muted-foreground mt-0.5 text-[0.5625rem] font-medium tracking-[0.22em] uppercase">
          Focus
        </span>

        <TimerControl className="w-full justify-center">
          <TimerReset asChild hidden={false}>
            <Button aria-label="Reset" size="icon-md" variant="ghost">
              <RotateCcwIcon />
            </Button>
          </TimerReset>
          <TimerPause asChild>
            <Button aria-label="Pause" className="w-full" variant="ghost">
              <PauseIcon />
            </Button>
          </TimerPause>
          <TimerPlay asChild>
            <Button aria-label="Play" className="w-full" variant="ghost">
              <PlayIcon />
            </Button>
          </TimerPlay>
          <Button aria-label="Settings" size="icon-md" variant="ghost">
            <SettingsIcon />
          </Button>
        </TimerControl>
      </Timer>
    </CardContent>
  </Card>
);

export default Example;
