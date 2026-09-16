"use client";

import {
  CopyIcon,
  EyeOffIcon,
  InfoIcon,
  MicIcon,
  RadioIcon,
  SearchIcon,
  StarIcon,
} from "lucide-react";
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
import { toast } from "@/registry/react/components/toast";

const InputGroupWithAddons = () => (
  <FieldGroup>
    <Field>
      <FieldLabel htmlFor="input-icon-left-05">Addon (inline-start)</FieldLabel>
      <InputGroup>
        <InputGroupInput id="input-icon-left-05" />
        <InputGroupAddon>
          <SearchIcon aria-hidden="true" />
        </InputGroupAddon>
      </InputGroup>
    </Field>
    <Field>
      <FieldLabel htmlFor="input-icon-right-07">Addon (inline-end)</FieldLabel>
      <InputGroup>
        <InputGroupInput id="input-icon-right-07" />
        <InputGroupAddon align="inline-end">
          <EyeOffIcon aria-hidden="true" />
        </InputGroupAddon>
      </InputGroup>
    </Field>
    <Field>
      <FieldLabel htmlFor="input-icon-both-09">
        Addon (inline-start and inline-end)
      </FieldLabel>
      <InputGroup>
        <InputGroupInput id="input-icon-both-09" />
        <InputGroupAddon>
          <MicIcon aria-hidden="true" />
        </InputGroupAddon>
        <InputGroupAddon align="inline-end">
          <RadioIcon
            aria-hidden="true"
            className="animate-pulse text-red-500"
          />
        </InputGroupAddon>
      </InputGroup>
    </Field>
    <Field>
      <FieldLabel htmlFor="input-addon-20">Addon (block-start)</FieldLabel>
      <InputGroup className="h-auto">
        <InputGroupInput id="input-addon-20" />
        <InputGroupAddon align="block-start">
          <InputGroupText>First Name</InputGroupText>
          <InfoIcon aria-hidden className="ml-auto text-muted-foreground" />
        </InputGroupAddon>
      </InputGroup>
    </Field>
    <Field>
      <FieldLabel htmlFor="input-addon-21">Addon (block-end)</FieldLabel>
      <InputGroup className="h-auto">
        <InputGroupInput id="input-addon-21" />
        <InputGroupAddon align="block-end">
          <InputGroupText>20/240 characters</InputGroupText>
          <InfoIcon aria-hidden className="ml-auto text-muted-foreground" />
        </InputGroupAddon>
      </InputGroup>
    </Field>
    <Field>
      <FieldLabel htmlFor="input-icon-both-10">Multiple Icons</FieldLabel>
      <InputGroup>
        <InputGroupInput id="input-icon-both-10" />
        <InputGroupAddon align="inline-end">
          <StarIcon aria-hidden="true" />
          <InputGroupButton
            aria-label="Copy to clipboard"
            onClick={() => toast.create({ title: "Copied to clipboard" })}
            size="icon-xs"
          >
            <CopyIcon />
          </InputGroupButton>
        </InputGroupAddon>
        <InputGroupAddon>
          <RadioIcon
            aria-hidden="true"
            className="animate-pulse text-red-500"
          />
        </InputGroupAddon>
      </InputGroup>
    </Field>
    <Field>
      <FieldLabel htmlFor="input-description-10">Description</FieldLabel>
      <InputGroup>
        <InputGroupInput id="input-description-10" />
        <InputGroupAddon align="inline-end">
          <InfoIcon aria-hidden="true" />
        </InputGroupAddon>
      </InputGroup>
      <FieldDescription>
        This is a description of the input group.
      </FieldDescription>
    </Field>
    <Field>
      <FieldLabel htmlFor="input-label-10">Label</FieldLabel>
      <InputGroup>
        <InputGroupAddon>
          <FieldLabel htmlFor="input-label-10">Label</FieldLabel>
        </InputGroupAddon>
        <InputGroupInput id="input-label-10" />
      </InputGroup>
      <InputGroup>
        <InputGroupInput aria-label="Optional" id="input-optional-12" />
        <InputGroupAddon align="inline-end">
          <InputGroupText>(optional)</InputGroupText>
        </InputGroupAddon>
      </InputGroup>
    </Field>
  </FieldGroup>
);

export default InputGroupWithAddons;
