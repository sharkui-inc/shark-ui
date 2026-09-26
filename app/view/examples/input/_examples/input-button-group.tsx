import { Button } from "@/registry/react/components/button";
import { ButtonGroup } from "@/registry/react/components/button-group";
import { Field, FieldLabel } from "@/registry/react/components/field";
import { Input } from "@/registry/react/components/input";

const InputButtonGroup = () => (
  <Field className="w-full max-w-64">
    <FieldLabel>Search</FieldLabel>
    <ButtonGroup className="w-full">
      <Input placeholder="Type to search..." />
      <Button variant="outline">Search</Button>
    </ButtonGroup>
  </Field>
);

export default InputButtonGroup;
