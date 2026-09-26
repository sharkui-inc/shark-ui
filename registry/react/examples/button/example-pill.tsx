import { PlusIcon } from "lucide-react";
import { Button } from "@/registry/react/components/button";

const Example = () => (
  <Button pill variant="outline">
    <PlusIcon data-icon="inline-start" />
    Add
  </Button>
);

export default Example;
