import { Button } from "@/registry/react/components/button";
import {
  Context,
  ContextContent,
  ContextHeader,
  ContextIcon,
  ContextMeter,
  ContextTrigger,
} from "@/registry/react/components/context";

const Example = () => (
  <div className="flex justify-center">
    <Context maxTokens={128_000} usedTokens={91_000}>
      <ContextTrigger asChild>
        <Button
          aria-label="Context usage"
          className="text-muted-foreground font-normal"
          size="icon-sm"
          variant="ghost"
        >
          <ContextIcon />
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
  { color: "var(--chart-1)", title: "Input", value: 51_200 },
  { color: "var(--chart-2)", title: "Output", value: 22_400 },
  { color: "var(--chart-3)", title: "Reasoning", value: 11_000 },
  { color: "var(--chart-4)", title: "Cache", value: 6400 },
];

export default Example;
