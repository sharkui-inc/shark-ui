import { SearchIcon } from "lucide-react";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/registry/react/components/input-group";
import { Kbd, KbdGroup } from "@/registry/react/components/kbd";

const Example = () => (
  <InputGroup className="w-full max-w-64">
    <InputGroupInput placeholder="Search..." />
    <InputGroupAddon>
      <SearchIcon />
    </InputGroupAddon>
    <InputGroupAddon align="inline-end">
      <KbdGroup>
        <Kbd>⌘</Kbd>
        <Kbd>K</Kbd>
      </KbdGroup>
    </InputGroupAddon>
  </InputGroup>
);

export default Example;
