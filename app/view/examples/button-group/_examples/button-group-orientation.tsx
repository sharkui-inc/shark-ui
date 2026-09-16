import { MinusIcon, PlusIcon } from "lucide-react";
import { Button } from "@/registry/react/components/button";
import { ButtonGroup } from "@/registry/react/components/button-group";

const ButtonGroupOrientationExample = () => (
  <ButtonGroup
    aria-label="Media controls"
    className="h-fit"
    orientation="vertical"
  >
    <Button size="icon-md" variant="outline">
      <PlusIcon />
    </Button>
    <Button size="icon-md" variant="outline">
      <MinusIcon />
    </Button>
  </ButtonGroup>
);

export default ButtonGroupOrientationExample;
