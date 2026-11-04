import { Checkbox } from "@/registry/react/components/checkbox";
import { Field, FieldLabel } from "@/registry/react/components/field";

const Example = () => (
  <div className="flex w-full justify-center">
    <Field
      className="w-max whitespace-nowrap"
      disabled
      orientation="horizontal"
    >
      <Checkbox />
      <FieldLabel>Receive newsletter</FieldLabel>
    </Field>
  </div>
);

export default Example;
