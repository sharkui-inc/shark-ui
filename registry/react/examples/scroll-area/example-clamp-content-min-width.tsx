import { ScrollArea } from "@/registry/react/components/scroll-area";

const Example = () => (
  <div className="flex w-full max-w-sm flex-col gap-3">
    <ScrollArea
      clampContentMinWidth
      className="h-28 rounded-lg border"
      orientation="horizontal"
    >
      <div className="flex w-max gap-3 p-3">
        {items.map((item) => (
          <div
            className="flex h-16 w-36 shrink-0 items-center justify-center rounded-md bg-muted text-sm"
            key={item}
          >
            {item}
          </div>
        ))}
      </div>
    </ScrollArea>
  </div>
);

const items = ["Inbox", "Drafts", "Sent", "Archive", "Trash"];

export default Example;
