import {
  Field,
  FieldContent,
  FieldDescription,
  FieldLabel,
  FieldTitle,
} from "@/registry/react/components/field";
import {
  RadioGroup,
  RadioGroupItem,
} from "@/registry/react/components/radio-group";

const Example = () => (
  <RadioGroup className="w-full max-w-sm" defaultValue="r-1">
    <FieldLabel>
      <Field orientation="horizontal">
        <FieldContent>
          <FieldTitle>Plus</FieldTitle>
          <FieldDescription>For individuals and small teams.</FieldDescription>
        </FieldContent>
        <RadioGroupItem
          className="**:data-[slot=radio-group-item-text]:hidden"
          value="r-1"
        />
      </Field>
    </FieldLabel>
    <FieldLabel>
      <Field orientation="horizontal">
        <FieldContent>
          <FieldTitle>Pro</FieldTitle>
          <FieldDescription>For growing businesses.</FieldDescription>
        </FieldContent>
        <RadioGroupItem
          className="**:data-[slot=radio-group-item-text]:hidden"
          value="r-2"
        />
      </Field>
    </FieldLabel>
    <FieldLabel>
      <Field orientation="horizontal">
        <FieldContent>
          <FieldTitle>Enterprise</FieldTitle>
          <FieldDescription>For large teams and enterprises.</FieldDescription>
        </FieldContent>
        <RadioGroupItem
          className="**:data-[slot=radio-group-item-text]:hidden"
          value="r-3"
        />
      </Field>
    </FieldLabel>
  </RadioGroup>
);

export default Example;
