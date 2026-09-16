import { SaveIcon } from "lucide-react";
import { Button } from "@/registry/react/components/button";
import { Kbd } from "@/registry/react/components/kbd";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/registry/react/components/tooltip";

const TooltipKeyboard = () => (
  <Tooltip>
    <TooltipTrigger render={<Button size="icon-sm" variant="outline" />}>
      <SaveIcon aria-hidden="true" />
    </TooltipTrigger>
    <TooltipContent>
      Save Changes <Kbd>S</Kbd>
    </TooltipContent>
  </Tooltip>
);

export default TooltipKeyboard;
