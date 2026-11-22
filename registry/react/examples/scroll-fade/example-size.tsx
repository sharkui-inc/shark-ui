const items = Array.from({ length: 8 }, (_, index) => `Item ${index + 1}`);
const sizes = [
  { className: "scroll-fade-4", label: "scroll-fade-4" },
  { className: "scroll-fade-8", label: "scroll-fade-8" },
];

const Example = () => (
  <div className="mx-auto grid w-full max-w-lg gap-4 sm:grid-cols-2">
    {sizes.map(({ className, label }) => (
      <div className="flex flex-col gap-2" key={label}>
        <div className="overflow-hidden rounded-xl border">
          <div
            className={`scroll-fade scrollbar-none h-48 overflow-y-auto ${className}`}
          >
            <div className="flex flex-col gap-1.5 p-1.5">
              {items.map((item) => (
                <div
                  className="rounded-lg bg-muted px-3 py-2.5 text-sm"
                  key={item}
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
        <p className="text-center font-mono text-muted-foreground text-xs">
          {label}
        </p>
      </div>
    ))}
  </div>
);

export default Example;
