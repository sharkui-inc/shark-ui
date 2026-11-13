import { Button } from "@/registry/react/components/button";
import {
  Context,
  ContextContent,
  ContextFooter,
  ContextHeader,
  ContextMeter,
  ContextMeterBar,
  ContextTitle,
  ContextTrigger,
  ContextTriggerLabel,
} from "@/registry/react/components/context";

const Example = () => (
  <div className="flex justify-center">
    <Context costLabel="$0.12" maxTokens={100_000} usedTokens={66_000}>
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
          <ContextMeter segments={contextUsage}>
            <ContextMeterBar />
          </ContextMeter>
        </ContextHeader>
        <ContextFooter />
      </ContextContent>
    </Context>
  </div>
);

const contextUsage = [
  { color: "var(--chart-1)", title: "Input", value: 34_000 },
  { color: "var(--chart-2)", title: "Output", value: 16_000 },
  { color: "var(--chart-3)", title: "Reasoning", value: 10_500 },
  { color: "var(--chart-4)", title: "Cache", value: 5500 },
];

export default Example;
