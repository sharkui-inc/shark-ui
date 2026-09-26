import { SearchIcon } from "lucide-react";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/registry/react/components/input-group";
import { Kbd } from "@/registry/react/components/kbd";

const InputGroupKbd = () => (
  <InputGroup className="max-w-sm">
    <InputGroupInput placeholder="Search..." />
    <InputGroupAddon>
      <SearchIcon aria-hidden />
    </InputGroupAddon>
    <InputGroupAddon align="inline-end">
      <Kbd>⌘K</Kbd>
    </InputGroupAddon>
  </InputGroup>
);

export default InputGroupKbd;
