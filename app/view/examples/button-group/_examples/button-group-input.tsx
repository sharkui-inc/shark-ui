import { SearchIcon } from "lucide-react";
import { Button } from "@/registry/react/components/button";
import { ButtonGroup } from "@/registry/react/components/button-group";
import { Input } from "@/registry/react/components/input";

const ButtonGroupInputExample = () => (
  <ButtonGroup>
    <Input placeholder="Search..." />
    <Button aria-label="Search" variant="outline">
      <SearchIcon />
    </Button>
  </ButtonGroup>
);

export default ButtonGroupInputExample;
