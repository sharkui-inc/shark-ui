import { ArrowUpRightIcon } from "lucide-react";
import { Button } from "@/registry/react/components/button";

const ButtonRoundedExample = () => (
  <div className="flex gap-2">
    <Button className="rounded-full">Get Started</Button>
    <Button
      aria-label="Submit"
      className="rounded-full"
      size="icon-md"
      variant="outline"
    >
      <ArrowUpRightIcon />
    </Button>
  </div>
);

export default ButtonRoundedExample;
