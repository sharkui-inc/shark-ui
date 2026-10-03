import { Button } from "@/registry/react/components/button";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/registry/react/components/field";
import { Input } from "@/registry/react/components/input";

const InputFieldGroup = () => (
  <FieldGroup className="w-full max-w-64">
    <Field>
      <FieldLabel>Name</FieldLabel>
      <Input placeholder="Jordan Lee" />
    </Field>
    <Field>
      <FieldLabel>Email</FieldLabel>
      <Input placeholder="name@example.com" type="email" />
      <FieldDescription>We'll send updates to this address.</FieldDescription>
    </Field>
    <Field orientation="horizontal">
      <Button type="reset" variant="outline">
        Reset
      </Button>
      <Button type="submit">Submit</Button>
    </Field>
  </FieldGroup>
);

export default InputFieldGroup;
