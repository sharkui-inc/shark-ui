import { Button } from "@/registry/react/components/button";
import {
  Context,
  ContextContent,
  ContextHeader,
  ContextMeter,
  ContextTitle,
  ContextTrigger,
  ContextTriggerLabel,
} from "@/registry/react/components/context";

const Example = () => (
  <div className="flex justify-center">
    <Context maxTokens={256_000} usedTokens={116_200}>
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
          <ContextTitle showCloseButton>Context Usage</ContextTitle>
          <ContextMeter segments={contextUsage} />
        </ContextHeader>
      </ContextContent>
    </Context>
  </div>
);

const contextUsage = [
  { color: "var(--chart-1)", title: "Input", value: 41_300 },
  { color: "var(--chart-2)", title: "Output", value: 25_600 },
  { color: "var(--chart-3)", title: "Reasoning", value: 36_100 },
  { color: "var(--chart-4)", title: "Cache", value: 13_200 },
];

export default Example;
