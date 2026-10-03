import {
  Field,
  FieldDescription,
  FieldLabel,
} from "@/registry/react/components/field";
import { Switch } from "@/registry/react/components/switch";

const Example = () => (
  <Field className="w-full max-w-sm" orientation="horizontal">
    <Switch name="weekly-summary" />
    <div className="flex flex-col gap-1">
      <FieldLabel>Weekly summary</FieldLabel>
      <FieldDescription>
        Receive a summary of your activity each week.
      </FieldDescription>
    </div>
  </Field>
);

export default Example;
