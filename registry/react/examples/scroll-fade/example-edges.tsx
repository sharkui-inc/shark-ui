const items = [
  "Inbox triage",
  "Design review",
  "API contract",
  "QA pass",
  "Launch notes",
];
const tags = ["Design", "Engineering", "Product", "Research", "Sales"];

const Example = () => (
  <div className="mx-auto flex max-w-xs flex-col gap-5">
    <div className="flex flex-col gap-2">
      <div className="overflow-hidden rounded-xl border">
        <div className="scroll-fade-t scrollbar-none h-32 overflow-y-auto">
          <div className="flex flex-col gap-1.5 p-1.5">
            {items.map((item) => (
              <div className="rounded-lg bg-muted px-3 py-2 text-sm" key={item}>
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
      <p className="text-center font-mono text-muted-foreground text-xs">
        scroll-fade-t
      </p>
    </div>
    <div className="flex flex-col gap-2">
      <div className="overflow-hidden rounded-xl border">
        <div className="scroll-fade-s scrollbar-none overflow-x-auto">
          <div className="flex w-max gap-1.5 p-1.5">
            {tags.map((tag) => (
              <div
                className="shrink-0 rounded-lg bg-muted px-3 py-2 text-sm"
                key={tag}
              >
                {tag}
              </div>
            ))}
          </div>
        </div>
      </div>
      <p className="text-center font-mono text-muted-foreground text-xs">
        scroll-fade-s
      </p>
    </div>
  </div>
);

export default Example;
