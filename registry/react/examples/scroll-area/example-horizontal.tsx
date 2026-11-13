import { ScrollArea } from "@/registry/react/components/scroll-area";

const Example = () => (
  <ScrollArea
    className="h-auto max-w-96 rounded-lg border"
    orientation="horizontal"
  >
    <div className="flex w-max gap-4 p-4">
      {Array.from({ length: 20 }).map((_, i) => (
        <div
          className="bg-muted flex h-20 w-32 shrink-0 items-center justify-center rounded-md"
          key={String(i)}
        >
          <span className="text-sm font-medium">Item {i + 1}</span>
        </div>
      ))}
    </div>
  </ScrollArea>
);

export default Example;
