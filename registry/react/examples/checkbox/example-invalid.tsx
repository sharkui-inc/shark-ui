import { Checkbox } from "@/registry/react/components/checkbox";
import { Field, FieldLabel } from "@/registry/react/components/field";

const Example = () => (
  <div className="flex w-full justify-center">
    <Field className="w-max whitespace-nowrap" invalid orientation="horizontal">
      <Checkbox />
      <FieldLabel>Accept terms and conditions</FieldLabel>
    </Field>
  </div>
);

export default Example;
