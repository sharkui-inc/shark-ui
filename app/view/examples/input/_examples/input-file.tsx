import {
  Field,
  FieldDescription,
  FieldLabel,
} from "@/registry/react/components/field";
import { Input } from "@/registry/react/components/input";

const InputFile = () => (
  <Field className="w-full max-w-64">
    <FieldLabel htmlFor="picture">Picture</FieldLabel>
    <Input id="picture" type="file" />
    <FieldDescription>Select a picture to upload.</FieldDescription>
  </Field>
);

export default InputFile;
