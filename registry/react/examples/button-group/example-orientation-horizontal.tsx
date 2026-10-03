import { PlayIcon, SkipBackIcon, SkipForwardIcon } from "lucide-react";
import { Button } from "@/registry/react/components/button";
import { ButtonGroup } from "@/registry/react/components/button-group";

const Example = () => (
  <ButtonGroup orientation="horizontal">
    <Button
      aria-label="Previous track"
      clickEffect={false}
      size="icon-md"
      variant="outline"
    >
      <SkipBackIcon />
    </Button>
    <Button
      aria-label="Play"
      clickEffect={false}
      size="icon-md"
      variant="outline"
    >
      <PlayIcon />
    </Button>
    <Button
      aria-label="Next track"
      clickEffect={false}
      size="icon-md"
      variant="outline"
    >
      <SkipForwardIcon />
    </Button>
  </ButtonGroup>
);

export default Example;
