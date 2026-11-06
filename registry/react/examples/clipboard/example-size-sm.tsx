import { Button } from "@/registry/react/components/button";
import {
  Clipboard,
  ClipboardIndicator,
  ClipboardTrigger,
  ClipboardValue,
} from "@/registry/react/components/clipboard";

const Example = () => (
  <Clipboard value="https://shark-ui.com">
    <ClipboardValue size="sm" />
    <ClipboardTrigger asChild>
      <Button aria-label="Copy URL" size="icon-sm">
        <ClipboardIndicator />
      </Button>
    </ClipboardTrigger>
  </Clipboard>
);

export default Example;
