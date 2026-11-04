const Example = () => (
  <div className="text-muted-foreground mx-auto grid w-full max-w-lg gap-6 text-center text-sm sm:grid-cols-2">
    <div className="flex flex-col gap-1">
      <p className="shimmer">Generating response…</p>
      <span className="text-xs">shimmer</span>
    </div>
    <div className="flex flex-col gap-1">
      <p className="shimmer shimmer-angle-45">Generating response…</p>
      <span className="text-xs">shimmer-angle-45</span>
    </div>
  </div>
);

export default Example;
