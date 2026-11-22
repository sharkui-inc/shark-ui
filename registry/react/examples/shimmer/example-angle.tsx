const Example = () => (
  <div className="grid w-full gap-6 text-center text-muted-foreground text-sm sm:grid-cols-2">
    <div className="flex flex-col gap-3">
      <p className="shimmer">Generating response&hellip;</p>
      <p className="font-mono text-xs">shimmer</p>
    </div>
    <div className="flex flex-col gap-3">
      <p className="shimmer shimmer-angle-45">Generating response&hellip;</p>
      <p className="font-mono text-xs">shimmer-angle-45</p>
    </div>
  </div>
);

export default Example;
