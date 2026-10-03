import { Checkbox } from "@/registry/react/components/checkbox";
import {
  Field,
  FieldDescription,
  FieldLabel,
} from "@/registry/react/components/field";

const Example = () => (
  <Field className="w-full max-w-sm" orientation="horizontal">
    <Checkbox />
    <div className="flex flex-col gap-1">
      <FieldLabel>Receive product updates</FieldLabel>
      <FieldDescription>
        Get occasional news about features and improvements.
      </FieldDescription>
    </div>
  </Field>
);

export default Example;
