import { Button } from "@/registry/react/components/button";
import {
  Context,
  ContextBody,
  ContextContent,
  ContextFooter,
  ContextHeader,
  ContextMeter,
  ContextTitle,
  ContextTrigger,
  ContextTriggerLabel,
  ContextUsageRow,
} from "@/registry/react/components/context";

const Example = () => (
  <div className="flex justify-center">
    <Context costLabel="$0.15" maxTokens={128_000} usedTokens={67_000}>
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
          <ContextMeter />
        </ContextHeader>
        <ContextBody>
          {contextUsage.map((row) => (
            <ContextUsageRow
              color={row.color}
              key={row.title}
              title={row.title}
              value={row.value}
            />
          ))}
        </ContextBody>
        <ContextFooter />
      </ContextContent>
    </Context>
  </div>
);

const contextUsage = [
  { color: "var(--chart-1)", title: "Input", value: 31_200 },
  { color: "var(--chart-2)", title: "Output", value: 15_800 },
  { color: "var(--chart-3)", title: "Reasoning", value: 10_400 },
  { color: "var(--chart-4)", title: "Cache", value: 9600 },
];

export default Example;
