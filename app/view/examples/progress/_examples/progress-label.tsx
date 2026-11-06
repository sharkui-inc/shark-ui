import { Field } from "@/registry/react/components/field";
import {
  Progress,
  ProgressLabel,
  ProgressValue,
} from "@/registry/react/components/progress";

const ProgressLabelExample = () => (
  <Field className="w-full max-w-sm">
    <Progress value={56}>
      <ProgressLabel>Upload progress</ProgressLabel>
      <ProgressValue />
    </Progress>
  </Field>
);

export default ProgressLabelExample;
