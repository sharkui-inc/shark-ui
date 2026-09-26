"use client";

import {
  CoffeeIcon,
  PauseIcon,
  PlayIcon,
  RotateCcwIcon,
  SkipForwardIcon,
  TimerIcon,
} from "lucide-react";
import React from "react";
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
} from "@/registry/react/components/timer";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/registry/react/components/tooltip";

export const FocusTimerExample = (props: React.ComponentProps<"div">) => {
  const { className, ...rest } = props;

  const [session, setSession] = React.useState<"break" | "focus">("focus");
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
          <Badge variant={isFocus ? "default" : "secondary"}>
            {isFocus ? <TimerIcon aria-hidden /> : <CoffeeIcon aria-hidden />}
            {isFocus ? "Focus" : "Break"}
          </Badge>
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

          <TimerControl className="w-full justify-center">
            <Tooltip>
              <TooltipTrigger asChild>
                <span className="inline-flex">
                  <TimerReset asChild hidden={false}>
                    <Button aria-label="Reset" size="icon-md" variant="ghost">
                      <RotateCcwIcon aria-hidden />
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
                        <PauseIcon aria-hidden />
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
                        <PlayIcon aria-hidden className="translate-x-px" />
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
                  <SkipForwardIcon aria-hidden />
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

const breakMs = 5 * 60 * 1000;

const focusMs = 25 * 60 * 1000;
