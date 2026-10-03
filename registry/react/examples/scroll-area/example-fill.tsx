import { ScrollArea } from "@/registry/react/components/scroll-area";

const Example = () => (
  <ScrollArea className="h-64 w-64 rounded-lg border" fill>
    <div className="flex min-h-full flex-col gap-3 p-4">
      <h3 className="font-medium text-sm">Project space</h3>
      <div className="mt-auto rounded-md bg-muted p-3 text-sm">
        Latest activity
      </div>
    </div>
  </ScrollArea>
);

export default Example;
