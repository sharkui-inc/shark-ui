import { Card, CardContent } from "@/registry/react/components/card";
import {
  Timer,
  TimerArea,
  TimerItem,
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
        <TimerArea>
          <TimerItem type="minutes" />
          <TimerSeparator>{"//"}</TimerSeparator>
          <TimerItem type="seconds" />
        </TimerArea>
      </Timer>
    </CardContent>
  </Card>
);

export default Example;
