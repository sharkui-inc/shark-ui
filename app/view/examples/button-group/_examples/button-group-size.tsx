import { PlusIcon } from "lucide-react";
import { Button } from "@/registry/react/components/button";
import { ButtonGroup } from "@/registry/react/components/button-group";

const ButtonGroupSizeExample = () => (
  <div className="flex flex-col items-start gap-8">
    <ButtonGroup>
      <Button size="sm" variant="outline">
        Small
      </Button>
      <Button size="sm" variant="outline">
        Button
      </Button>
      <Button size="sm" variant="outline">
        Group
      </Button>
      <Button size="icon-sm" variant="outline">
        <PlusIcon />
      </Button>
    </ButtonGroup>
    <ButtonGroup>
      <Button variant="outline">Default</Button>
      <Button variant="outline">Button</Button>
      <Button variant="outline">Group</Button>
      <Button size="icon-md" variant="outline">
        <PlusIcon />
      </Button>
    </ButtonGroup>
    <ButtonGroup>
      <Button size="lg" variant="outline">
        Large
      </Button>
      <Button size="lg" variant="outline">
        Button
      </Button>
      <Button size="lg" variant="outline">
        Group
      </Button>
      <Button size="icon-lg" variant="outline">
        <PlusIcon />
      </Button>
    </ButtonGroup>
  </div>
);

export default ButtonGroupSizeExample;
