"use client";

import {
  CoffeeIcon,
  PauseIcon,
  PlayIcon,
  RotateCcwIcon,
  SkipForwardIcon,
  TimerIcon,
} from "lucide-react";
import { useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { Badge } from "@/registry/react/components/badge";
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
  useTimer,
} from "@/registry/react/components/timer";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/registry/react/components/tooltip";

export const FocusTimerExample = (props: React.ComponentProps<"div">) => {
  const { className, ...rest } = props;

  const [session, setSession] = useState<"break" | "focus">("focus");
  const isFocus = session === "focus";

  const skipSession = () => {
    setSession((current) => (current === "focus" ? "break" : "focus"));
  };

  return (
    <Card className={className} {...rest}>
      <CardContent>
        <Timer
          autoStart
          className="items-center"
          countdown
          key={session}
          onComplete={skipSession}
          startMs={isFocus ? focusMs : breakMs}
        >
          <TimerArea>
            <TimerItem
              className="font-mono text-5xl tracking-tight"
              type="minutes"
            />
            <TimerSeparator className="font-mono text-5xl" />
            <TimerItem
              className="font-mono text-5xl tracking-tight"
              type="seconds"
            />
          </TimerArea>
          <Badge variant={isFocus ? "default" : "secondary"}>
            {isFocus ? (
              <TimerIcon aria-hidden="true" />
            ) : (
              <CoffeeIcon aria-hidden="true" />
            )}
            {isFocus ? "Focus" : "Break"}
          </Badge>
          <MinuteTicks />
          <TimerControl className="w-full justify-center">
            <Tooltip>
              <TooltipTrigger asChild>
                <span className="inline-flex">
                  <TimerReset asChild hidden={false}>
                    <Button aria-label="Reset" size="icon-md" variant="ghost">
                      <RotateCcwIcon aria-hidden="true" />
                    </Button>
                  </TimerReset>
                </span>
              </TooltipTrigger>
              <TooltipContent>Reset</TooltipContent>
            </Tooltip>
            <div className="grid *:col-start-1 *:row-start-1">
              <Tooltip>
                <TooltipTrigger asChild>
                  <span className="inline-flex">
                    <TimerPause asChild>
                      <Button aria-label="Pause" pill size="icon-lg">
                        <PauseIcon aria-hidden="true" />
                      </Button>
                    </TimerPause>
                  </span>
                </TooltipTrigger>
                <TooltipContent>Pause</TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger asChild>
                  <span className="inline-flex">
                    <TimerPlay asChild>
                      <Button aria-label="Play" pill size="icon-lg">
                        <PlayIcon
                          aria-hidden="true"
                          className="translate-x-px"
                        />
                      </Button>
                    </TimerPlay>
                  </span>
                </TooltipTrigger>
                <TooltipContent>Play</TooltipContent>
              </Tooltip>
            </div>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  aria-label={isFocus ? "Skip to break" : "Skip to focus"}
                  onClick={skipSession}
                  size="icon-md"
                  variant="ghost"
                >
                  <SkipForwardIcon aria-hidden="true" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                {isFocus ? "Skip to break" : "Skip to focus"}
              </TooltipContent>
            </Tooltip>
          </TimerControl>
        </Timer>
      </CardContent>
    </Card>
  );
};

const MinuteTicks = () => {
  const timer = useTimer();
  const { days, hours, minutes, seconds } = timer.time;
  const finished = days + hours + minutes + seconds === 0;
  const remaining = finished ? 0 : seconds === 0 ? 60 : seconds;
  const exact = (remaining / 60) * tickHeights.length;
  const previousExact = useRef(tickHeights.length);
  const draining = exact <= previousExact.current;
  previousExact.current = exact;

  return (
    <div
      aria-label={`Seconds remaining this minute: ${remaining}`}
      aria-valuemax={60}
      aria-valuemin={0}
      aria-valuenow={remaining}
      className="flex h-8 items-end justify-center gap-1"
      role="meter"
    >
      {tickHeights.map((height, index) => {
        const fill = Math.min(1, Math.max(0, exact - index));

        return (
          <span
            className={cn(
              "relative w-1.5 overflow-hidden rounded-full bg-muted",
              height
            )}
            key={index}
          >
            <span
              className={cn(
                "absolute inset-x-0 bottom-0 rounded-full bg-primary motion-reduce:transition-none",
                draining && "transition-[height] duration-1000 ease-linear"
              )}
              style={{ height: `${fill * 100}%` }}
            />
          </span>
        );
      })}
    </div>
  );
};

const breakMs = 5 * 60 * 1000;
const focusMs = 25 * 60 * 1000;
const tickHeights = [
  "h-3",
  "h-4",
  "h-5",
  "h-6",
  "h-7",
  "h-8",
  "h-8",
  "h-7",
  "h-6",
  "h-5",
  "h-4",
  "h-3",
] as const;
