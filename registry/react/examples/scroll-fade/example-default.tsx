const items = Array.from({ length: 12 }, (_, index) => `Item ${index + 1}`);

const Example = () => (
  <div className="mx-auto w-full max-w-xs overflow-hidden rounded-2xl border">
    <div className="scroll-fade scrollbar-none h-72 overflow-y-auto">
      <div className="flex flex-col gap-1.5 p-1.5">
        {items.map((item) => (
          <div className="rounded-lg bg-muted px-3 py-2.5 text-sm" key={item}>
            {item}
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default Example;
