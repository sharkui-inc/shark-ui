import { AudioLinesIcon, PlusIcon } from "lucide-react";
import { Button } from "@/registry/react/components/button";
import { ButtonGroup } from "@/registry/react/components/button-group";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/registry/react/components/input-group";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/registry/react/components/tooltip";

const ButtonGroupNestedExample = () => (
  <ButtonGroup>
    <ButtonGroup>
      <Button size="icon-md" variant="outline">
        <PlusIcon />
      </Button>
    </ButtonGroup>
    <ButtonGroup>
      <InputGroup>
        <InputGroupInput placeholder="Send a message..." />
        <Tooltip>
          <TooltipTrigger render={<InputGroupAddon align="inline-end" />}>
            <AudioLinesIcon />
          </TooltipTrigger>
          <TooltipContent>Voice Mode</TooltipContent>
        </Tooltip>
      </InputGroup>
    </ButtonGroup>
  </ButtonGroup>
);

export default ButtonGroupNestedExample;
