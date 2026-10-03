import { Button } from "@/registry/react/components/button";
import {
  ButtonGroup,
  ButtonGroupSeparator,
} from "@/registry/react/components/button-group";

const ButtonGroupSeparatorExample = () => (
  <ButtonGroup aria-label="Copy paste">
    <Button size="sm" variant="secondary">
      Copy
    </Button>
    <ButtonGroupSeparator />
    <Button size="sm" variant="secondary">
      Paste
    </Button>
  </ButtonGroup>
);

export default ButtonGroupSeparatorExample;
