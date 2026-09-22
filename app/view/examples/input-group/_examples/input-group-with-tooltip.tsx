"use client";

import { ChevronDownIcon, InfoIcon, StarIcon } from "lucide-react";
import React from "react";
import {
  ButtonGroup,
  ButtonGroupText,
} from "@/registry/react/components/button-group";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/registry/react/components/field";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
  InputGroupText,
} from "@/registry/react/components/input-group";
import {
  Menu,
  MenuContent,
  MenuItem,
  MenuTrigger,
} from "@/registry/react/components/menu";
import {
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from "@/registry/react/components/popover";
import { toast } from "@/registry/react/components/toast";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/registry/react/components/tooltip";

const InputGroupWithTooltip = () => {
  const [country, setCountry] = React.useState("+1");

  return (
    <FieldGroup>
      <Field>
        <FieldLabel htmlFor="input-tooltip-20">Tooltip</FieldLabel>
        <InputGroup>
          <InputGroupInput id="input-tooltip-20" />
          <InputGroupAddon align="inline-end">
            <Tooltip>
              <TooltipTrigger asChild>
                <InputGroupButton
                  aria-label="Info"
                  className="rounded-full"
                  size="icon-xs"
                >
                  <InfoIcon aria-hidden />
                </InputGroupButton>
              </TooltipTrigger>
              <TooltipContent>This is content in a tooltip.</TooltipContent>
            </Tooltip>
          </InputGroupAddon>
        </InputGroup>
        <FieldDescription>
          This is a description of the input group.
        </FieldDescription>
      </Field>

      <Field>
        <FieldLabel htmlFor="input-dropdown-21">Dropdown</FieldLabel>
        <InputGroup>
          <InputGroupInput id="input-dropdown-21" />
          <InputGroupAddon>
            <Menu
              positioning={{
                offset: { crossAxis: -8, mainAxis: 10 },
                placement: "bottom-start",
              }}
            >
              <MenuTrigger asChild>
                <InputGroupButton className="text-muted-foreground tabular-nums">
                  {country}
                  <ChevronDownIcon aria-hidden />
                </InputGroupButton>
              </MenuTrigger>
              <MenuContent className="min-w-16">
                <MenuItem onClick={() => setCountry("+1")} value="+1">
                  +1
                </MenuItem>
                <MenuItem onClick={() => setCountry("+44")} value="+44">
                  +44
                </MenuItem>
                <MenuItem onClick={() => setCountry("+46")} value="+46">
                  +46
                </MenuItem>
              </MenuContent>
            </Menu>
          </InputGroupAddon>
        </InputGroup>
        <FieldDescription>
          This is a description of the input group.
        </FieldDescription>
      </Field>

      <Field>
        <FieldLabel htmlFor="input-secure-19">Popover</FieldLabel>
        <InputGroup>
          <Popover positioning={{ placement: "bottom-start" }}>
            <PopoverTrigger asChild>
              <InputGroupAddon>
                <InputGroupButton
                  aria-label="Security info"
                  size="icon-xs"
                  variant="secondary"
                >
                  <InfoIcon aria-hidden />
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
              aria-label="Add to favorites"
              onClick={() => toast.create({ title: "Added to favorites" })}
              size="icon-xs"
            >
              <StarIcon aria-hidden />
            </InputGroupButton>
          </InputGroupAddon>
        </InputGroup>
        <FieldDescription>
          This is a description of the input group.
        </FieldDescription>
      </Field>

      <Field>
        <FieldLabel htmlFor="input-url-group">Button Group</FieldLabel>
        <ButtonGroup>
          <ButtonGroupText>https://</ButtonGroupText>
          <InputGroup>
            <InputGroupInput id="input-url-group" />
            <InputGroupAddon align="inline-end">
              <InfoIcon aria-hidden />
            </InputGroupAddon>
          </InputGroup>
          <ButtonGroupText>.com</ButtonGroupText>
        </ButtonGroup>
        <FieldDescription>
          This is a description of the input group.
        </FieldDescription>
      </Field>
    </FieldGroup>
  );
};

export default InputGroupWithTooltip;
