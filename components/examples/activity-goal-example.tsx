"use client";

import { MinusIcon, PlusIcon } from "lucide-react";
import { useState } from "react";
import { Button } from "@/registry/react/components/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/registry/react/components/card";
import {
  CircularProgress,
  CircularProgressLabel,
} from "@/registry/react/components/circular-progress";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/registry/react/components/tooltip";

export const ActivityGoalExample = (props: React.ComponentProps<"div">) => {
  const { className, ...rest } = props;

  const [goal, setGoal] = useState(350);

  function onClick(adjustment: number) {
    setGoal(Math.max(minGoal, Math.min(maxGoal, goal + adjustment)));
  }

  return (
    <Card className={className} {...rest}>
      <CardHeader>
        <CardTitle className="text-2xl tracking-[-0.02em]">Move goal</CardTitle>
        <CardDescription>Daily target</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col items-center gap-6">
        <div className="flex items-center gap-3">
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                aria-label="Decrease"
                disabled={goal <= minGoal}
                onClick={() => onClick(-10)}
                pill
                size="icon-md"
                variant="outline"
              >
                <MinusIcon aria-hidden="true" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>Decrease</TooltipContent>
          </Tooltip>
          <CircularProgress
            className="size-[11.5rem]"
            max={maxGoal}
            min={minGoal}
            size={184}
            thickness={12}
            value={goal}
          >
            <CircularProgressLabel className="sr-only">
              Daily calorie goal
            </CircularProgressLabel>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="font-heading font-semibold text-4xl tabular-nums tracking-[-0.03em]">
                {goal}
              </span>
              <span className="text-muted-foreground text-xs">
                Calories/day
              </span>
            </div>
          </CircularProgress>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                aria-label="Increase"
                disabled={goal >= maxGoal}
                onClick={() => onClick(10)}
                pill
                size="icon-md"
                variant="outline"
              >
                <PlusIcon aria-hidden="true" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>Increase</TooltipContent>
          </Tooltip>
        </div>
        <div className="flex justify-center gap-2.5">
          {week.map((entry) => (
            <div className="flex flex-col items-center gap-1" key={entry.day}>
              <CircularProgress size={22} thickness={3} value={entry.value}>
                <CircularProgressLabel className="sr-only">
                  {entry.label}: {entry.value}% of move goal
                </CircularProgressLabel>
              </CircularProgress>
              <span className="text-muted-foreground text-xs">
                {entry.label}
              </span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

const maxGoal = 400;
const minGoal = 200;
const week = [
  { day: "1", label: "S", value: 100 },
  { day: "2", label: "M", value: 0 },
  { day: "3", label: "T", value: 64 },
  { day: "4", label: "W", value: 100 },
  { day: "5", label: "T", value: 38 },
  { day: "6", label: "F", value: 0 },
  { day: "7", label: "S", value: 81 },
];
