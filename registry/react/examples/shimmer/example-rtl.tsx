const Example = () => (
  <div className="grid w-full gap-6 text-center text-muted-foreground text-sm sm:grid-cols-2">
    <div className="flex flex-col gap-3">
      <p className="shimmer" dir="ltr">
        Generating response&hellip;
      </p>
      <p className="font-mono text-xs">dir="ltr"</p>
    </div>
    <div className="flex flex-col gap-3">
      <p className="shimmer" dir="rtl">
        جارٍ إنشاء الرد&hellip;
      </p>
      <p className="font-mono text-xs">dir="rtl"</p>
    </div>
  </div>
);

export default Example;
