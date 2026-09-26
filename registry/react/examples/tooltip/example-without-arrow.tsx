import {
  BoldIcon,
  ItalicIcon,
  StrikethroughIcon,
  UnderlineIcon,
} from "lucide-react";
import { Button } from "@/registry/react/components/button";
import { ButtonGroup } from "@/registry/react/components/button-group";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/registry/react/components/tooltip";

const Example = () => (
  <ButtonGroup>
    <Tooltip>
      <TooltipTrigger asChild>
        <Button clickEffect={false} size="icon-md" variant="outline">
          <BoldIcon />
        </Button>
      </TooltipTrigger>
      <TooltipContent showArrow={false}>Bold</TooltipContent>
    </Tooltip>

    <Tooltip>
      <TooltipTrigger asChild>
        <Button clickEffect={false} size="icon-md" variant="outline">
          <ItalicIcon />
        </Button>
      </TooltipTrigger>
      <TooltipContent showArrow={false}>Italic</TooltipContent>
    </Tooltip>

    <Tooltip>
      <TooltipTrigger asChild>
        <Button clickEffect={false} size="icon-md" variant="outline">
          <UnderlineIcon />
        </Button>
      </TooltipTrigger>
      <TooltipContent showArrow={false}>Underline</TooltipContent>
    </Tooltip>

    <Tooltip>
      <TooltipTrigger asChild>
        <Button clickEffect={false} size="icon-md" variant="outline">
          <StrikethroughIcon />
        </Button>
      </TooltipTrigger>
      <TooltipContent showArrow={false}>Strikethrough</TooltipContent>
    </Tooltip>
  </ButtonGroup>
);

export default Example;
