import { SendIcon } from "lucide-react";
import { Button } from "@/registry/react/components/button";

const Example = () => (
  <Button disabled>
    Send <SendIcon data-icon="inline-end" />
  </Button>
);

export default Example;
