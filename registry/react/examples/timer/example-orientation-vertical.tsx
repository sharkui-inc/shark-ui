import { Card, CardContent } from "@/registry/react/components/card";
import {
  Timer,
  TimerArea,
  TimerItem,
  TimerItemGroup,
  TimerItemLabel,
  TimerSeparator,
} from "@/registry/react/components/timer";

const Example = () => (
  <Card className="rounded-3xl [--space:--spacing(6)]">
    <CardContent>
      <Timer
        autoStart
        className="items-center gap-4"
        countdown
        startMs={5 * 60 * 1000}
      >
        <TimerArea className="flex-wrap justify-center">
          <TimerItemGroup orientation="vertical">
            <TimerItem type="minutes" />
            <TimerItemLabel>minutes</TimerItemLabel>
          </TimerItemGroup>
          <TimerSeparator />
          <TimerItemGroup orientation="vertical">
            <TimerItem type="seconds" />
            <TimerItemLabel>seconds</TimerItemLabel>
          </TimerItemGroup>
        </TimerArea>
      </Timer>
    </CardContent>
  </Card>
);

export default Example;
