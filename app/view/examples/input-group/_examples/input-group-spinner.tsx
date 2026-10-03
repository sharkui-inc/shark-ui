import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  InputGroupText,
} from "@/registry/react/components/input-group";
import { Spinner } from "@/registry/react/components/spinner";

const InputGroupSpinner = () => (
  <div className="grid w-full max-w-sm gap-4">
    <InputGroup>
      <InputGroupInput placeholder="Searching..." />
      <InputGroupAddon align="inline-end">
        <Spinner />
      </InputGroupAddon>
    </InputGroup>
    <InputGroup>
      <InputGroupInput placeholder="Processing..." />
      <InputGroupAddon>
        <Spinner />
      </InputGroupAddon>
    </InputGroup>
    <InputGroup>
      <InputGroupInput placeholder="Saving changes..." />
      <InputGroupAddon align="inline-end">
        <InputGroupText>Saving...</InputGroupText>
        <Spinner />
      </InputGroupAddon>
    </InputGroup>
    <InputGroup>
      <InputGroupInput placeholder="Refreshing data..." />
      <InputGroupAddon>
        <Spinner aria-hidden />
      </InputGroupAddon>
      <InputGroupAddon align="inline-end">
        <InputGroupText>Please wait...</InputGroupText>
      </InputGroupAddon>
    </InputGroup>
  </div>
);

export default InputGroupSpinner;
