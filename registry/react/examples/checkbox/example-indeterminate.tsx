import { Checkbox } from "@/registry/react/components/checkbox";
import {
  Field,
  FieldContent,
  FieldLabel,
} from "@/registry/react/components/field";

const Example = () => (
  <div className="flex w-full justify-center">
    <Field className="w-max whitespace-nowrap" orientation="horizontal">
      <Checkbox checked="indeterminate" />
      <FieldContent>
        <FieldLabel>Select all items</FieldLabel>
      </FieldContent>
    </Field>
  </div>
);

export default Example;
