import { BotIcon, ChevronDownIcon } from "lucide-react";
import { Button } from "@/registry/react/components/button";
import { ButtonGroup } from "@/registry/react/components/button-group";
import {
  Field,
  FieldDescription,
  FieldLabel,
} from "@/registry/react/components/field";
import {
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from "@/registry/react/components/popover";
import { Textarea } from "@/registry/react/components/textarea";

const ButtonGroupPopoverExample = () => (
  <ButtonGroup>
    <Button variant="outline">
      <BotIcon />
      Copilot
    </Button>
    <Popover positioning={{ placement: "bottom-end" }}>
      <PopoverTrigger
        render={
          <Button aria-label="Open Popover" size="icon-md" variant="outline" />
        }
      >
        <ChevronDownIcon />
      </PopoverTrigger>
      <PopoverContent className="rounded-xl text-sm">
        <PopoverHeader>
          <PopoverTitle>Start a new task with Copilot</PopoverTitle>
          <PopoverDescription>
            Describe your task in natural language.
          </PopoverDescription>
        </PopoverHeader>
        <Field>
          <FieldLabel className="sr-only" htmlFor="task">
            Task Description
          </FieldLabel>
          <Textarea
            className="resize-none"
            id="task"
            placeholder="I need to..."
          />
          <FieldDescription>
            Copilot will open a pull request for review.
          </FieldDescription>
        </Field>
      </PopoverContent>
    </Popover>
  </ButtonGroup>
);

export default ButtonGroupPopoverExample;
