import { Button } from "@registry/react/components/button";
import { PauseIcon, PlayIcon } from "lucide-react";
import { Card, CardContent } from "@/registry/react/components/card";
import {
  Timer,
  TimerArea,
  TimerControl,
  TimerItem,
  TimerItemGroup,
  TimerItemLabel,
  TimerPause,
  TimerPlay,
  TimerSeparator,
} from "@/registry/react/components/timer";

const Example = () => (
  <Card className="rounded-3xl [--space:--spacing(6)]">
    <CardContent>
      <Timer interval={100} targetMs={60 * 1000}>
        <TimerArea>
          <TimerItemGroup>
            <TimerItem type="seconds" />
            <TimerItemLabel>seconds</TimerItemLabel>
          </TimerItemGroup>
          <TimerSeparator />
          <TimerItemGroup>
            <TimerItem type="milliseconds" />
            <TimerItemLabel>ms</TimerItemLabel>
          </TimerItemGroup>
        </TimerArea>
        <TimerControl className="w-full justify-center">
          <TimerPlay asChild>
            <Button size="icon-sm" variant="ghost">
              <PlayIcon />
            </Button>
          </TimerPlay>
          <TimerPause asChild>
            <Button size="icon-sm" variant="ghost">
              <PauseIcon />
            </Button>
          </TimerPause>
        </TimerControl>
      </Timer>
    </CardContent>
  </Card>
);

export default Example;
