import { PlusIcon } from "lucide-react";
import { Button } from "@/registry/react/components/button";
import {
  ButtonGroup,
  ButtonGroupSeparator,
} from "@/registry/react/components/button-group";

const ButtonGroupSplitExample = () => (
  <ButtonGroup aria-label="Create">
    <Button variant="secondary">Button</Button>
    <ButtonGroupSeparator />
    <Button aria-label="Add" size="icon-md" variant="secondary">
      <PlusIcon />
    </Button>
  </ButtonGroup>
);

export default ButtonGroupSplitExample;
