"use client";

import { CheckIcon, CopyIcon, InfoIcon, StarIcon } from "lucide-react";
import React from "react";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
  InputGroupText,
} from "@/registry/react/components/input-group";
import {
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from "@/registry/react/components/popover";

const InputGroupButtonExample = () => {
  const [isCopied, setIsCopied] = React.useState(false);
  const [isFavorite, setIsFavorite] = React.useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText("https://x.com/shadcn");
    setIsCopied(true);
    window.setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <div className="grid w-full max-w-sm gap-6">
      <InputGroup>
        <InputGroupInput
          placeholder="https://x.com/shadcn"
          readOnly
          value="https://x.com/shadcn"
        />
        <InputGroupAddon align="inline-end">
          <InputGroupButton
            aria-label="Copy"
            onClick={copyToClipboard}
            size="icon-xs"
          >
            {isCopied ? <CheckIcon /> : <CopyIcon />}
          </InputGroupButton>
        </InputGroupAddon>
      </InputGroup>

      <InputGroup pill>
        <Popover>
          <PopoverTrigger asChild>
            <InputGroupAddon>
              <InputGroupButton
                aria-label="Connection info"
                size="icon-xs"
                variant="secondary"
              >
                <InfoIcon />
              </InputGroupButton>
            </InputGroupAddon>
          </PopoverTrigger>
          <PopoverContent className="w-64">
            <PopoverHeader>
              <PopoverTitle>Your connection is not secure.</PopoverTitle>
              <PopoverDescription>
                You should not enter any sensitive information on this site.
              </PopoverDescription>
            </PopoverHeader>
          </PopoverContent>
        </Popover>
        <InputGroupAddon>
          <InputGroupText>https://</InputGroupText>
        </InputGroupAddon>
        <InputGroupInput id="input-secure-19" />
        <InputGroupAddon align="inline-end">
          <InputGroupButton
            aria-label="Toggle favorite"
            onClick={() => setIsFavorite(!isFavorite)}
            size="icon-xs"
          >
            <StarIcon
              className="data-[favorite=true]:fill-blue-600 data-[favorite=true]:stroke-blue-600"
              data-favorite={isFavorite}
            />
          </InputGroupButton>
        </InputGroupAddon>
      </InputGroup>

      <InputGroup>
        <InputGroupInput placeholder="Type to search..." />
        <InputGroupAddon align="inline-end">
          <InputGroupButton variant="secondary">Search</InputGroupButton>
        </InputGroupAddon>
      </InputGroup>
    </div>
  );
};

export default InputGroupButtonExample;
