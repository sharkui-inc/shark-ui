"use client";

import { HelpCircleIcon, InfoIcon } from "lucide-react";
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

const InputGroupTooltip = () => (
  <div className="grid w-full max-w-sm gap-4">
    <InputGroup>
      <InputGroupInput placeholder="Enter password" type="password" />
      <InputGroupAddon align="inline-end">
        <Tooltip>
          <TooltipTrigger asChild>
            <InputGroupButton aria-label="Info" size="icon-xs" variant="ghost">
              <InfoIcon aria-hidden />
            </InputGroupButton>
          </TooltipTrigger>
          <TooltipContent>
            <p>Password must be at least 8 characters</p>
          </TooltipContent>
        </Tooltip>
      </InputGroupAddon>
    </InputGroup>
    <InputGroup>
      <InputGroupInput placeholder="Your email address" />
      <InputGroupAddon align="inline-end">
        <Tooltip>
          <TooltipTrigger asChild>
            <InputGroupButton aria-label="Help" size="icon-xs" variant="ghost">
              <HelpCircleIcon aria-hidden />
            </InputGroupButton>
          </TooltipTrigger>
          <TooltipContent>
            <p>We&apos;ll use this to send you notifications</p>
          </TooltipContent>
        </Tooltip>
      </InputGroupAddon>
    </InputGroup>
    <InputGroup>
      <InputGroupInput placeholder="Enter API key" />
      <Tooltip positioning={{ placement: "left" }}>
        <TooltipTrigger asChild>
          <InputGroupAddon>
            <InputGroupButton aria-label="Help" size="icon-xs" variant="ghost">
              <HelpCircleIcon aria-hidden />
            </InputGroupButton>
          </InputGroupAddon>
        </TooltipTrigger>
        <TooltipContent>
          <p>Click for help with API keys</p>
        </TooltipContent>
      </Tooltip>
    </InputGroup>
  </div>
);

export default InputGroupTooltip;
