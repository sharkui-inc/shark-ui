import { SearchIcon } from "lucide-react";
import { Button } from "@/registry/react/components/button";
import { ButtonGroup } from "@/registry/react/components/button-group";
import { Input } from "@/registry/react/components/input";

const Example = () => (
  <ButtonGroup className="w-full max-w-64">
    <Input aria-label="Search" placeholder="Search..." type="search" />
    <Button aria-label="Submit search" variant="outline">
      <SearchIcon />
    </Button>
  </ButtonGroup>
);

export default Example;
