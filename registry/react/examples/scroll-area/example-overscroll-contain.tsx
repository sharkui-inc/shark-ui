import { ScrollArea } from "@/registry/react/components/scroll-area";

const Example = () => (
  <ScrollArea className="h-64 w-72 rounded-lg border text-sm">
    <div className="grid gap-3 p-4">
      <ScrollArea
        className="h-32 rounded-md border"
        orientation="vertical"
        overscrollContain
      >
        <div className="grid gap-2 p-3">
          {items.map((item) => (
            <div className="rounded-md bg-muted p-3" key={item}>
              {item}
            </div>
          ))}
        </div>
      </ScrollArea>
      <div className="grid gap-2">
        {outerItems.map((item) => (
          <div className="rounded-md bg-muted p-3" key={item}>
            {item}
          </div>
        ))}
      </div>
    </div>
  </ScrollArea>
);

const items = Array.from(
  { length: 12 },
  (_, index) => `Inner item ${index + 1}`
);
const outerItems = Array.from(
  { length: 8 },
  (_, index) => `Outer item ${index + 1}`
);

export default Example;
