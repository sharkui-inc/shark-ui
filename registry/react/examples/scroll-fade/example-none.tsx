const items = Array.from({ length: 8 }, (_, index) => `Item ${index + 1}`);

const Example = () => (
  <div className="mx-auto grid w-full max-w-xs gap-4 sm:grid-cols-2">
    {["scroll-fade", "scroll-fade scroll-fade-none"].map((classes) => (
      <div className="flex flex-col gap-2" key={classes}>
        <div className="overflow-hidden rounded-xl border">
          <div className={`scrollbar-none h-48 overflow-y-auto ${classes}`}>
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
          {classes}
        </p>
      </div>
    ))}
  </div>
);

export default Example;
