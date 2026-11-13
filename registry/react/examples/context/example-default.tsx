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

const ContextDemo = () => (
  <div className="flex justify-center">
    <Context costLabel="$0.18" maxTokens={128_000} usedTokens={79_500}>
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
        <ContextFooter />
      </ContextContent>
    </Context>
  </div>
);

const contextUsage = [
  { color: "var(--chart-1)", title: "Input", value: 42_000 },
  { color: "var(--chart-2)", title: "Output", value: 18_500 },
  { color: "var(--chart-3)", title: "Reasoning", value: 12_800 },
  { color: "var(--chart-4)", title: "Cache", value: 6200 },
];

export default ContextDemo;
