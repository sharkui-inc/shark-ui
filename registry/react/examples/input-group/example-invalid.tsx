import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  InputGroupText,
} from "@/registry/react/components/input-group";

const Example = () => (
  <InputGroup className="max-w-64">
    <InputGroupInput
      aria-invalid
      aria-label="Website domain"
      className="pl-1"
      placeholder="example.com"
    />
    <InputGroupAddon>
      <InputGroupText>https://</InputGroupText>
    </InputGroupAddon>
  </InputGroup>
);

export default Example;
