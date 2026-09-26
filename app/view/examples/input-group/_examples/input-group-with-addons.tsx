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
      <FieldLabel>Addon (inline-start)</FieldLabel>
      <InputGroup>
        <InputGroupInput />
        <InputGroupAddon>
          <SearchIcon aria-hidden />
        </InputGroupAddon>
      </InputGroup>
    </Field>
    <Field>
      <FieldLabel>Addon (inline-end)</FieldLabel>
      <InputGroup>
        <InputGroupInput />
        <InputGroupAddon align="inline-end">
          <EyeOffIcon aria-hidden />
        </InputGroupAddon>
      </InputGroup>
    </Field>
    <Field>
      <FieldLabel>Addon (inline-start and inline-end)</FieldLabel>
      <InputGroup>
        <InputGroupInput />
        <InputGroupAddon>
          <MicIcon aria-hidden />
        </InputGroupAddon>
        <InputGroupAddon align="inline-end">
          <RadioIcon aria-hidden className="animate-pulse text-red-500" />
        </InputGroupAddon>
      </InputGroup>
    </Field>
    <Field>
      <FieldLabel>Addon (block-start)</FieldLabel>
      <InputGroup className="h-auto">
        <InputGroupInput />
        <InputGroupAddon align="block-start">
          <InputGroupText>First Name</InputGroupText>
          <InfoIcon aria-hidden className="ml-auto text-muted-foreground" />
        </InputGroupAddon>
      </InputGroup>
    </Field>
    <Field>
      <FieldLabel>Addon (block-end)</FieldLabel>
      <InputGroup className="h-auto">
        <InputGroupInput />
        <InputGroupAddon align="block-end">
          <InputGroupText>20/240 characters</InputGroupText>
          <InfoIcon aria-hidden className="ml-auto text-muted-foreground" />
        </InputGroupAddon>
      </InputGroup>
    </Field>
    <Field>
      <FieldLabel>Multiple Icons</FieldLabel>
      <InputGroup>
        <InputGroupInput />
        <InputGroupAddon align="inline-end">
          <StarIcon aria-hidden />
          <InputGroupButton
            aria-label="Copy to clipboard"
            onClick={() => toast.create({ title: "Copied to clipboard" })}
            size="icon-xs"
          >
            <CopyIcon />
          </InputGroupButton>
        </InputGroupAddon>
        <InputGroupAddon>
          <RadioIcon aria-hidden className="animate-pulse text-red-500" />
        </InputGroupAddon>
      </InputGroup>
    </Field>
    <Field>
      <FieldLabel>Description</FieldLabel>
      <InputGroup>
        <InputGroupInput />
        <InputGroupAddon align="inline-end">
          <InfoIcon aria-hidden />
        </InputGroupAddon>
      </InputGroup>
      <FieldDescription>
        This is a description of the input group.
      </FieldDescription>
    </Field>
    <Field>
      <FieldLabel>Label</FieldLabel>
      <InputGroup>
        <InputGroupAddon>
          <FieldLabel>Label</FieldLabel>
        </InputGroupAddon>
        <InputGroupInput />
      </InputGroup>
      <InputGroup>
        <InputGroupInput aria-label="Optional" />
        <InputGroupAddon align="inline-end">
          <InputGroupText>(optional)</InputGroupText>
        </InputGroupAddon>
      </InputGroup>
    </Field>
  </FieldGroup>
);

export default InputGroupWithAddons;
