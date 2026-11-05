import { Link2Icon } from "lucide-react";
import {
  ButtonGroup,
  ButtonGroupText,
} from "@/registry/react/components/button-group";
import { FieldLabel } from "@/registry/react/components/field";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/registry/react/components/input-group";

const InputGroupButtonGroup = () => (
  <div className="grid w-full max-w-sm gap-6">
    <ButtonGroup>
      <ButtonGroupText>
        <FieldLabel className="gap-0" htmlFor="url">
          https://
        </FieldLabel>
      </ButtonGroupText>
      <InputGroup>
        <InputGroupInput id="url" />
        <InputGroupAddon align="inline-end">
          <Link2Icon aria-hidden="true" />
        </InputGroupAddon>
      </InputGroup>
      <ButtonGroupText>.com</ButtonGroupText>
    </ButtonGroup>
  </div>
);

export default InputGroupButtonGroup;
