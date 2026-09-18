import { Button } from "@/registry/react/components/button";
import { ButtonGroup } from "@/registry/react/components/button-group";
import { Kbd, KbdGroup } from "@/registry/react/components/kbd";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/registry/react/components/tooltip";

const KbdTooltip = () => (
  <div className="flex flex-wrap gap-4">
    <ButtonGroup>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline">Save</Button>
        </TooltipTrigger>
        <TooltipContent>
          Save Changes <Kbd>S</Kbd>
        </TooltipContent>
      </Tooltip>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline">Print</Button>
        </TooltipTrigger>
        <TooltipContent>
          Print Document
          <KbdGroup>
            <Kbd>Ctrl</Kbd>
            <Kbd>P</Kbd>
          </KbdGroup>
        </TooltipContent>
      </Tooltip>
    </ButtonGroup>
  </div>
);

export default KbdTooltip;
