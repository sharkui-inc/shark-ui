import { MinusIcon, PlusIcon } from "lucide-react";
import { Button } from "@/registry/react/components/button";
import {
  ButtonGroup,
  ButtonGroupSeparator,
} from "@/registry/react/components/button-group";

const Example = () => (
  <ButtonGroup>
    <Button
      aria-label="Decrease value"
      clickEffect={false}
      size="icon-md"
      variant="secondary"
    >
      <MinusIcon />
    </Button>
    <ButtonGroupSeparator />
    <Button
      aria-label="Increase value"
      clickEffect={false}
      size="icon-md"
      variant="secondary"
    >
      <PlusIcon />
    </Button>
  </ButtonGroup>
);

export default Example;
