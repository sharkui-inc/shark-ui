import { Checkbox } from "@/registry/react/components/checkbox";
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldLabel,
} from "@/registry/react/components/field";

const Example = () => (
  <Field className="w-full max-w-sm" orientation="horizontal">
    <Checkbox />
    <FieldContent>
      <FieldLabel>Receive product updates</FieldLabel>
      <FieldDescription>
        Get occasional news about features and improvements.
      </FieldDescription>
    </FieldContent>
  </Field>
);

export default Example;
