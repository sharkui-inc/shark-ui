import { Button } from "@/registry/react/components/button";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/registry/react/components/hover-card";

const HOVER_CARD_SIDES = ["left", "top", "bottom", "right"] as const;

const HoverCardSides = () => (
  <div className="flex flex-wrap justify-center gap-2">
    {HOVER_CARD_SIDES.map((side) => (
      <HoverCard
        closeDelay={100}
        key={side}
        openDelay={100}
        positioning={{ placement: side }}
      >
        <HoverCardTrigger
          render={<Button className="capitalize" variant="outline" />}
        >
          {side}
        </HoverCardTrigger>
        <HoverCardContent>
          <div className="flex flex-col gap-1">
            <h4 className="font-medium">Hover Card</h4>
            <p>This hover card appears on the {side} side of the trigger.</p>
          </div>
        </HoverCardContent>
      </HoverCard>
    ))}
  </div>
);

export default HoverCardSides;
