import { SearchIcon } from "lucide-react";
import { Button } from "@/registry/react/components/button";
import { ButtonGroup } from "@/registry/react/components/button-group";
import { Input } from "@/registry/react/components/input";

const Example = () => (
  <ButtonGroup>
    <Input
      aria-label="Search"
      className="max-w-64"
      placeholder="Search..."
      type="search"
    />
    <Button aria-label="Submit search" variant="outline">
      <SearchIcon />
    </Button>
  </ButtonGroup>
);

export default Example;
