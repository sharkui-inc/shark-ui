const Example = () => (
  <div className="grid w-full gap-6 text-center text-muted-foreground text-sm sm:grid-cols-2">
    <div className="flex flex-col gap-3">
      <p className="shimmer shimmer-spread-4">Generating response&hellip;</p>
      <p className="font-mono text-xs">shimmer-spread-4</p>
    </div>
    <div className="flex flex-col gap-3">
      <p className="shimmer shimmer-spread-24">Generating response&hellip;</p>
      <p className="font-mono text-xs">shimmer-spread-24</p>
    </div>
  </div>
);

export default Example;
