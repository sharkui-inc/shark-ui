import { Button } from "@/registry/react/components/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/registry/react/components/tooltip";

const TooltipDemo = () => (
  <Tooltip>
    <TooltipTrigger render={<Button variant="outline" />}>Hover</TooltipTrigger>
    <TooltipContent>
      <p>Add to library</p>
    </TooltipContent>
  </Tooltip>
);

export default TooltipDemo;
