import {
  Field,
  FieldContent,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldTitle,
} from "@/registry/react/components/field";
import { Switch } from "@/registry/react/components/switch";

const SwitchChoiceCard = () => (
  <FieldGroup className="w-full max-w-sm">
    <FieldLabel>
      <Field orientation="horizontal">
        <FieldContent>
          <FieldTitle>Share across devices</FieldTitle>
          <FieldDescription>
            Focus is shared across devices, and turns off when you leave the
            app.
          </FieldDescription>
        </FieldContent>
        <Switch />
      </Field>
    </FieldLabel>
    <FieldLabel>
      <Field orientation="horizontal">
        <FieldContent>
          <FieldTitle>Enable notifications</FieldTitle>
          <FieldDescription>
            Receive notifications when focus mode is enabled or disabled.
          </FieldDescription>
        </FieldContent>
        <Switch defaultChecked />
      </Field>
    </FieldLabel>
  </FieldGroup>
);

export default SwitchChoiceCard;
