import { ArrowUpRightIcon } from "lucide-react";
import { Button } from "@/registry/react/components/button";

const ButtonSizeExample = () => (
  <div className="flex flex-col items-start gap-8 sm:flex-row">
    <div className="flex items-start gap-2">
      <Button size="xs" variant="outline">
        Extra Small
      </Button>
      <Button aria-label="Submit" size="icon-xs" variant="outline">
        <ArrowUpRightIcon />
      </Button>
    </div>
    <div className="flex items-start gap-2">
      <Button size="sm" variant="outline">
        Small
      </Button>
      <Button aria-label="Submit" size="icon-sm" variant="outline">
        <ArrowUpRightIcon />
      </Button>
    </div>
    <div className="flex items-start gap-2">
      <Button size="md" variant="outline">
        Default
      </Button>
      <Button aria-label="Submit" size="icon-md" variant="outline">
        <ArrowUpRightIcon />
      </Button>
    </div>
    <div className="flex items-start gap-2">
      <Button size="lg" variant="outline">
        Large
      </Button>
      <Button aria-label="Submit" size="icon-lg" variant="outline">
        <ArrowUpRightIcon />
      </Button>
    </div>
  </div>
);

export default ButtonSizeExample;
