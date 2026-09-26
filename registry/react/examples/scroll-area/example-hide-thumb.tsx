import { ScrollArea } from "@/registry/react/components/scroll-area";

const Example = () => (
  <ScrollArea
    className="h-64 w-48 rounded-md border **:data-[slot=scroll-area-thumb]:hidden"
    orientation="vertical"
  >
    <div className="p-4">
      <h4 className="mb-4 font-medium text-sm leading-none">Notifications</h4>
      <div className="grid gap-3 text-sm">
        {notifications.map((notification) => (
          <div className="rounded-md bg-muted p-3" key={notification}>
            {notification}
          </div>
        ))}
      </div>
    </div>
  </ScrollArea>
);

const notifications = Array.from(
  { length: 20 },
  (_, index) => `Notification ${index + 1}`
);

export default Example;
