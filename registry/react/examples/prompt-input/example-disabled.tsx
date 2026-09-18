import { LockKeyholeIcon, PaperclipIcon } from "lucide-react";
import {
  PromptInput,
  PromptInputButton,
  PromptInputFooter,
  PromptInputSubmit,
  PromptInputTextarea,
} from "@/registry/react/components/prompt-input";

const Example = () => (
  <div className="flex w-full max-w-lg flex-col gap-2">
    <span className="flex items-center gap-2 px-1 text-muted-foreground text-xs">
      <LockKeyholeIcon aria-hidden="true" className="size-3.5" />
      Workspace access required.
    </span>
    <PromptInput>
      <PromptInputTextarea
        aria-label="Prompt"
        defaultValue="Explain the architecture of this project."
        disabled
      />
      <PromptInputFooter>
        <PromptInputButton aria-label="Attach file" disabled size="icon-sm">
          <PaperclipIcon aria-hidden="true" />
        </PromptInputButton>
        <PromptInputSubmit disabled size="icon-sm" />
      </PromptInputFooter>
    </PromptInput>
  </div>
);

export default Example;
