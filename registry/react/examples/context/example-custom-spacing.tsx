import { Button } from "@/registry/react/components/button";
import {
  Context,
  ContextContent,
  ContextFooter,
  ContextHeader,
  ContextMeter,
  ContextTitle,
  ContextTrigger,
  ContextTriggerLabel,
} from "@/registry/react/components/context";

const Example = () => (
  <div className="flex justify-center">
    <Context costLabel="$0.09" maxTokens={128_000} usedTokens={49_100}>
      <ContextTrigger asChild>
        <Button
          className="text-muted-foreground font-normal"
          size="sm"
          variant="ghost"
        >
          <ContextTriggerLabel />
        </Button>
      </ContextTrigger>
      <ContextContent className="[--space:--spacing(1)] sm:[--space:--spacing(3)]">
        <ContextHeader>
          <ContextTitle>Context Usage</ContextTitle>
          <ContextMeter segments={contextUsage} />
        </ContextHeader>
        <ContextFooter />
      </ContextContent>
    </Context>
  </div>
);

const contextUsage = [
  { color: "var(--chart-1)", title: "Input", value: 22_000 },
  { color: "var(--chart-2)", title: "Output", value: 11_500 },
  { color: "var(--chart-3)", title: "Reasoning", value: 8400 },
  { color: "var(--chart-4)", title: "Cache", value: 7200 },
];

export default Example;
