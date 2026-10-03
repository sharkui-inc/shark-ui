import { Button } from "@/registry/react/components/button";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/registry/react/components/hover-card";

const Example = () => (
  <HoverCard>
    <HoverCardTrigger asChild>
      <Button variant="link">Hover here</Button>
    </HoverCardTrigger>
    <HoverCardContent className="flex flex-col gap-1" showArrow={false}>
      <h4 className="font-medium">Hover Card</h4>
      <p className="text-muted-foreground text-sm">
        This hover card appears above the trigger.
      </p>
    </HoverCardContent>
  </HoverCard>
);

export default Example;
