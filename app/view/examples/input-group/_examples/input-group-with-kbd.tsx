import { CheckIcon, InfoIcon, SearchIcon } from "lucide-react";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/registry/react/components/field";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/registry/react/components/input-group";
import { Kbd, KbdGroup } from "@/registry/react/components/kbd";
import { Spinner } from "@/registry/react/components/spinner";

const InputGroupWithKbd = () => (
  <FieldGroup>
    <Field>
      <FieldLabel>Input Group with Kbd</FieldLabel>
      <InputGroup>
        <InputGroupInput />
        <InputGroupAddon>
          <Kbd>⌘K</Kbd>
        </InputGroupAddon>
      </InputGroup>
      <InputGroup>
        <InputGroupInput />
        <InputGroupAddon align="inline-end">
          <Kbd>⌘K</Kbd>
        </InputGroupAddon>
      </InputGroup>
      <InputGroup>
        <InputGroupInput placeholder="Search for Apps..." />
        <InputGroupAddon align="inline-end">Ask AI</InputGroupAddon>
        <InputGroupAddon align="inline-end">
          <Kbd>Tab</Kbd>
        </InputGroupAddon>
      </InputGroup>
      <InputGroup>
        <InputGroupInput placeholder="Type to search..." />
        <InputGroupAddon align="inline-start">
          <SearchIcon aria-hidden />
        </InputGroupAddon>
        <InputGroupAddon align="inline-end">
          <KbdGroup>
            <Kbd>Ctrl</Kbd>
            <Kbd>C</Kbd>
          </KbdGroup>
        </InputGroupAddon>
      </InputGroup>
    </Field>
    <Field>
      <FieldLabel>Username</FieldLabel>
      <InputGroup>
        <InputGroupInput defaultValue="shadcn" />
        <InputGroupAddon align="inline-end">
          <div className="flex size-4 items-center justify-center rounded-full bg-green-500 dark:bg-green-800">
            <CheckIcon className="size-3 text-white" />
          </div>
        </InputGroupAddon>
      </InputGroup>
      <FieldDescription className="text-green-700">
        This username is available.
      </FieldDescription>
    </Field>
    <InputGroup>
      <InputGroupInput
        id="input-search-docs-27"
        placeholder="Search documentation..."
      />
      <InputGroupAddon>
        <SearchIcon aria-hidden />
      </InputGroupAddon>
      <InputGroupAddon align="inline-end">12 results</InputGroupAddon>
    </InputGroup>
    <InputGroup data-disabled>
      <InputGroupInput
        disabled
        id="input-search-disabled-28"
        placeholder="Search documentation..."
      />
      <InputGroupAddon>
        <SearchIcon aria-hidden />
      </InputGroupAddon>
      <InputGroupAddon align="inline-end">Disabled</InputGroupAddon>
    </InputGroup>
    <FieldGroup className="grid grid-cols-2 gap-4">
      <Field>
        <FieldLabel>First Name</FieldLabel>
        <InputGroup>
          <InputGroupInput placeholder="First Name" />
          <InputGroupAddon align="inline-end">
            <InfoIcon aria-hidden />
          </InputGroupAddon>
        </InputGroup>
      </Field>
      <Field>
        <FieldLabel>Last Name</FieldLabel>
        <InputGroup>
          <InputGroupInput placeholder="Last Name" />
          <InputGroupAddon align="inline-end">
            <InfoIcon aria-hidden />
          </InputGroupAddon>
        </InputGroup>
      </Field>
    </FieldGroup>
    <Field disabled>
      <FieldLabel>Loading (&quot;data-disabled=true&quot;)</FieldLabel>
      <InputGroup>
        <InputGroupInput defaultValue="shadcn" disabled />
        <InputGroupAddon align="inline-end">
          <Spinner />
        </InputGroupAddon>
      </InputGroup>
      <FieldDescription>
        This is a description of the input group.
      </FieldDescription>
    </Field>
  </FieldGroup>
);

export default InputGroupWithKbd;
