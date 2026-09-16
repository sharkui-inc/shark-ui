"use client";

import { InfoIcon } from "lucide-react";
import { FieldLabel } from "@/registry/react/components/field";
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

const InputGroupLabel = () => (
  <div className="grid w-full max-w-sm gap-4">
    <InputGroup>
      <InputGroupInput id="email" placeholder="shadcn" />
      <InputGroupAddon>
        <FieldLabel htmlFor="email">@</FieldLabel>
      </InputGroupAddon>
    </InputGroup>
    <InputGroup>
      <InputGroupInput id="email-2" placeholder="shadcn@vercel.com" />
      <InputGroupAddon align="block-start">
        <FieldLabel className="text-foreground" htmlFor="email-2">
          Email
        </FieldLabel>
        <Tooltip>
          <TooltipTrigger asChild>
            <InputGroupButton
              aria-label="Help"
              className="ml-auto rounded-full"
              size="icon-xs"
              variant="ghost"
            >
              <InfoIcon aria-hidden />
            </InputGroupButton>
          </TooltipTrigger>
          <TooltipContent>
            <p>We&apos;ll use this to send you notifications</p>
          </TooltipContent>
        </Tooltip>
      </InputGroupAddon>
    </InputGroup>
  </div>
);

export default InputGroupLabel;
