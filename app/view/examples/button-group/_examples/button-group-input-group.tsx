"use client";

import { AudioLinesIcon, PlusIcon } from "lucide-react";
import { useState } from "react";
import { Button } from "@/registry/react/components/button";
import { ButtonGroup } from "@/registry/react/components/button-group";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "@/registry/react/components/input-group";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/registry/react/components/tooltip";

const ButtonGroupInputGroupExample = () => {
  const [voiceEnabled, setVoiceEnabled] = useState(false);

  return (
    <ButtonGroup>
      <ButtonGroup>
        <Button pill size="icon-md" variant="outline">
          <PlusIcon />
        </Button>
      </ButtonGroup>
      <ButtonGroup>
        <InputGroup pill>
          <InputGroupInput
            disabled={voiceEnabled}
            placeholder={
              voiceEnabled ? "Record and send audio..." : "Send a message..."
            }
          />
          <InputGroupAddon align="inline-end">
            <Tooltip>
              <TooltipTrigger
                render={
                  <InputGroupButton
                    aria-pressed={voiceEnabled}
                    className="data-[active=true]:bg-orange-100 data-[active=true]:text-orange-700 dark:data-[active=true]:bg-orange-800 dark:data-[active=true]:text-orange-100"
                    data-active={voiceEnabled}
                    onClick={() => setVoiceEnabled(!voiceEnabled)}
                    size="icon-xs"
                  />
                }
              >
                <AudioLinesIcon />
              </TooltipTrigger>
              <TooltipContent>Voice Mode</TooltipContent>
            </Tooltip>
          </InputGroupAddon>
        </InputGroup>
      </ButtonGroup>
    </ButtonGroup>
  );
};

export default ButtonGroupInputGroupExample;
