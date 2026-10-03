import { Button } from "@/registry/react/components/button";
import { Field } from "@/registry/react/components/field";
import { Input } from "@/registry/react/components/input";

const InputInline = () => (
  <Field className="w-full max-w-64" orientation="horizontal">
    <Input placeholder="Search..." type="search" />
    <Button>Search</Button>
  </Field>
);

export default InputInline;
