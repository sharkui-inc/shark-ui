import { ScrollArea } from "@/registry/react/components/scroll-area";

const Example = () => (
  <ScrollArea
    className="h-64 w-48 rounded-md border"
    orientation="vertical"
    scrollbarGutter
  >
    <div className="grid gap-3 p-4 text-sm">
      {items.map((item) => (
        <div className="rounded-md bg-muted p-3" key={item}>
          {item}
        </div>
      ))}
    </div>
  </ScrollArea>
);

const items = Array.from({ length: 20 }, (_, index) => `Item ${index + 1}`);

export default Example;
