import { Field, FieldHelper } from "@/registry/react/components/field";
import {
  SignaturePad,
  SignaturePadLabel,
} from "@/registry/react/components/signature-pad";

const Example = () => (
  <Field className="w-full max-w-md">
    <SignaturePad>
      <SignaturePadLabel>Signature</SignaturePadLabel>
    </SignaturePad>
    <FieldHelper>Draw your signature in the box above</FieldHelper>
  </Field>
);

export default Example;
