import ScrollAreaDemo from "./_examples/scroll-area-demo";
import ScrollAreaHorizontalDemo from "./_examples/scroll-area-horizontal-demo";
import ScrollAreaRtl from "./_examples/scroll-area-rtl";

const ScrollAreaExamplePage = () => (
  <div className="mx-auto flex w-full max-w-7xl flex-col gap-16 px-5 py-10 sm:px-8 sm:py-14 lg:px-10">
    <div className="grid gap-16 sm:grid-cols-2">
      <section aria-labelledby="demo-heading" className="flex flex-col gap-5">
        <h1 className="font-medium text-muted-foreground" id="demo-heading">
          Demo
        </h1>
        <div className="rounded-3xl bg-muted p-6 sm:p-10">
          <ScrollAreaDemo />
        </div>
      </section>

      <section
        aria-labelledby="horizontal-demo-heading"
        className="flex flex-col gap-5"
      >
        <h2
          className="font-medium text-muted-foreground"
          id="horizontal-demo-heading"
        >
          Horizontal Demo
        </h2>
        <div className="rounded-3xl border bg-card p-6 sm:p-10">
          <ScrollAreaHorizontalDemo />
        </div>
      </section>

      <section aria-labelledby="rtl-heading" className="flex flex-col gap-5">
        <h2 className="font-medium text-muted-foreground" id="rtl-heading">
          RTL
        </h2>
        <div className="rounded-3xl bg-muted p-6 sm:p-10">
          <ScrollAreaRtl />
        </div>
      </section>
    </div>
  </div>
);

export default ScrollAreaExamplePage;
