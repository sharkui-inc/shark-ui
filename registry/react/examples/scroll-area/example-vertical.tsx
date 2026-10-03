import { ScrollArea } from "@/registry/react/components/scroll-area";

const Example = () => (
  <ScrollArea className="h-64 w-48 rounded-md border" orientation="vertical">
    <div className="p-4">
      <h4 className="mb-4 font-medium text-sm leading-none">Changelog</h4>
      <div className="grid gap-3 text-sm">
        {releases.map((release) => (
          <div className="rounded-md bg-muted p-3" key={release}>
            {release}
          </div>
        ))}
      </div>
    </div>
  </ScrollArea>
);

const releases = Array.from(
  { length: 20 },
  (_, index) => `Version 1.0.${index + 1}`
);

export default Example;
