import { Checkbox } from "@/registry/react/components/checkbox";
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/registry/react/components/field";

const Example = () => (
  <div className="flex w-full justify-center">
    <FieldGroup className="w-full max-w-xs">
      <Field orientation="horizontal">
        <Checkbox defaultChecked />
        <FieldContent>
          <FieldLabel>Receive notifications</FieldLabel>
          <FieldDescription>
            You'll receive a notification when someone posts a comment on your
            post
          </FieldDescription>
        </FieldContent>
      </Field>
    </FieldGroup>
  </div>
);

export default Example;
