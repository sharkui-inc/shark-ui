import { Button } from "@/registry/react/components/button";
import { Kbd } from "@/registry/react/components/kbd";

const KbdButton = () => (
  <Button variant="outline">
    Accept
    <Kbd className="translate-x-0.5" data-icon="inline-end">
      ⏎
    </Kbd>
  </Button>
);

export default KbdButton;
