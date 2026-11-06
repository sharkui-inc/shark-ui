import {
  CopyIcon,
  CornerDownLeftIcon,
  FileCodeIcon,
  RefreshCwIcon,
} from "lucide-react";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupText,
  InputGroupTextarea,
} from "@/registry/react/components/input-group";

const InputGroupTextareaExample = () => (
  <div className="grid w-full max-w-md gap-4">
    <InputGroup>
      <InputGroupTextarea
        className="min-h-50"
        id="textarea-code-32"
        placeholder="console.log('Hello, world!');"
      />
      <InputGroupAddon align="block-end" className="border-t">
        <InputGroupText>Line 1, Column 1</InputGroupText>
        <InputGroupButton className="ms-auto" size="sm">
          Run
          <CornerDownLeftIcon aria-hidden="true" />
        </InputGroupButton>
      </InputGroupAddon>
      <InputGroupAddon align="block-start" className="border-b">
        <InputGroupText className="font-mono font-medium">
          <FileCodeIcon aria-hidden="true" />
          script.js
        </InputGroupText>
        <InputGroupButton
          aria-label="Refresh"
          className="ms-auto"
          size="icon-xs"
        >
          <RefreshCwIcon />
        </InputGroupButton>
        <InputGroupButton aria-label="Copy" size="icon-xs" variant="ghost">
          <CopyIcon />
        </InputGroupButton>
      </InputGroupAddon>
    </InputGroup>
  </div>
);

export default InputGroupTextareaExample;
