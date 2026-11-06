import {
  BoldIcon,
  BracesIcon,
  ImagePlusIcon,
  ItalicIcon,
  UnderlineIcon,
} from "lucide-react";
import { Button } from "@/registry/react/components/button";
import { ButtonGroup } from "@/registry/react/components/button-group";

const Example = () => (
  <ButtonGroup>
    <ButtonGroup>
      <Button
        aria-label="Italic"
        clickEffect={false}
        size="icon-md"
        variant="outline"
      >
        <ItalicIcon />
      </Button>
      <Button
        aria-label="Bold"
        clickEffect={false}
        size="icon-md"
        variant="outline"
      >
        <BoldIcon />
      </Button>
      <Button
        aria-label="Underline"
        clickEffect={false}
        size="icon-md"
        variant="outline"
      >
        <UnderlineIcon />
      </Button>
    </ButtonGroup>

    <ButtonGroup>
      <Button
        aria-label="Add image"
        clickEffect={false}
        size="icon-md"
        variant="outline"
      >
        <ImagePlusIcon />
      </Button>
      <Button
        aria-label="Insert code"
        clickEffect={false}
        size="icon-md"
        variant="outline"
      >
        <BracesIcon />
      </Button>
    </ButtonGroup>
  </ButtonGroup>
);

export default Example;
