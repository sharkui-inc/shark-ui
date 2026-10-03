import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
} from "@/registry/react/components/input-group";
import { Textarea } from "@/registry/react/components/textarea";

const InputGroupCustom = () => (
  <div className="grid w-full max-w-sm gap-6">
    <InputGroup>
      <Textarea
        autoresize
        className="resize-none border-0 bg-transparent px-3 py-2.5 shadow-none"
        data-slot="input-group-control"
        placeholder="Autoresize textarea..."
      />
      <InputGroupAddon align="block-end">
        <InputGroupButton className="ml-auto" size="sm" variant="default">
          Submit
        </InputGroupButton>
      </InputGroupAddon>
    </InputGroup>
  </div>
);

export default InputGroupCustom;
