import { Button } from "@/registry/react/components/button";
import {
  Context,
  ContextContent,
  ContextHeader,
  ContextMeter,
  ContextTrigger,
  ContextTriggerLabel,
} from "@/registry/react/components/context";

const Example = () => (
  <div className="flex justify-center">
    <Context maxTokens={128_000} usedTokens={61_300}>
      <ContextTrigger asChild>
        <Button
          className="text-muted-foreground font-normal"
          size="sm"
          variant="ghost"
        >
          <ContextTriggerLabel />
        </Button>
      </ContextTrigger>
      <ContextContent>
        <ContextHeader>
          <ContextMeter segments={contextUsage} />
        </ContextHeader>
      </ContextContent>
    </Context>
  </div>
);

const contextUsage = [
  { color: "var(--chart-1)", title: "Input", value: 28_400 },
  { color: "var(--chart-2)", title: "Output", value: 14_200 },
  { color: "var(--chart-3)", title: "Reasoning", value: 9600 },
  { color: "var(--chart-4)", title: "Cache", value: 9100 },
];

export default Example;
