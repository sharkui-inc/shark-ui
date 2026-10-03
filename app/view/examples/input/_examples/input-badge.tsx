import { Badge } from "@/registry/react/components/badge";
import { Field, FieldLabel } from "@/registry/react/components/field";
import { Input } from "@/registry/react/components/input";

const InputBadge = () => (
  <Field className="w-full max-w-64">
    <FieldLabel>
      Webhook URL{" "}
      <Badge className="ml-auto" variant="secondary">
        Beta
      </Badge>
    </FieldLabel>
    <Input placeholder="https://api.example.com/webhook" type="url" />
  </Field>
);

export default InputBadge;
