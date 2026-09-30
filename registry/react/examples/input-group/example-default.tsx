import { SearchIcon } from "lucide-react";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/registry/react/components/input-group";

const InputGroupDemo = () => (
  <InputGroup className="max-w-64">
    <InputGroupInput aria-label="Search" placeholder="Search..." />
    <InputGroupAddon>
      <SearchIcon />
    </InputGroupAddon>
  </InputGroup>
);

export default InputGroupDemo;
