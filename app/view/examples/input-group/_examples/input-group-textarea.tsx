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
        className="min-h-[200px]"
        id="textarea-code-32"
        placeholder="console.log('Hello, world!');"
      />
      <InputGroupAddon align="block-end" className="border-t">
        <InputGroupText>Line 1, Column 1</InputGroupText>
        <InputGroupButton className="ml-auto" size="sm" variant="default">
          Run
          <CornerDownLeftIcon aria-hidden />
        </InputGroupButton>
      </InputGroupAddon>
      <InputGroupAddon align="block-start" className="border-b">
        <InputGroupText className="font-medium font-mono">
          <FileCodeIcon aria-hidden />
          script.js
        </InputGroupText>
        <InputGroupButton
          aria-label="Refresh"
          className="ml-auto"
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
