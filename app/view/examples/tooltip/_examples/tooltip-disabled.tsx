import { Button } from "@/registry/react/components/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/registry/react/components/tooltip";

const TooltipDisabled = () => (
  <>
    <Tooltip>
      <TooltipTrigger asChild>
        <span className="inline-block w-fit">
          <Button disabled variant="outline">
            Disabled
          </Button>
        </span>
      </TooltipTrigger>
      <TooltipContent>
        <p>This feature is currently unavailable</p>
      </TooltipContent>
    </Tooltip>
  </>
);

export default TooltipDisabled;
