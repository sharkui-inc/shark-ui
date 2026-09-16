import { Button } from "@/registry/react/components/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/registry/react/components/tooltip";

const TooltipSides = () => (
  <div className="flex flex-wrap gap-2">
    {(["left", "top", "bottom", "right"] as const).map((side) => (
      <Tooltip key={side} positioning={{ placement: side }}>
        <TooltipTrigger
          render={<Button className="w-fit capitalize" variant="outline" />}
        >
          {side}
        </TooltipTrigger>
        <TooltipContent>
          <p>Add to library</p>
        </TooltipContent>
      </Tooltip>
    ))}
  </div>
);

export default TooltipSides;
