import SliderControlled from "./_examples/slider-controlled";
import SliderDemo from "./_examples/slider-demo";
import SliderDisabled from "./_examples/slider-disabled";
import SliderMultiple from "./_examples/slider-multiple";
import SliderRange from "./_examples/slider-range";
import SliderRtl from "./_examples/slider-rtl";
import SliderVertical from "./_examples/slider-vertical";

const SliderExamplePage = () => (
  <div className="mx-auto flex w-full max-w-7xl flex-col gap-16 px-5 py-10 sm:px-8 sm:py-14 lg:px-10">
    <div className="grid gap-16 sm:grid-cols-2">
      <section aria-labelledby="demo-heading" className="flex flex-col gap-5">
        <h1 className="font-medium text-muted-foreground" id="demo-heading">
          Demo
        </h1>
        <div className="rounded-3xl bg-muted p-6 sm:p-10">
          <SliderDemo />
        </div>
      </section>

      <section
        aria-labelledby="controlled-heading"
        className="flex flex-col gap-5"
      >
        <h2
          className="font-medium text-muted-foreground"
          id="controlled-heading"
        >
          Controlled
        </h2>
        <div className="rounded-3xl border bg-card p-6 sm:p-10">
          <SliderControlled />
        </div>
      </section>

      <section
        aria-labelledby="disabled-heading"
        className="flex flex-col gap-5"
      >
        <h2 className="font-medium text-muted-foreground" id="disabled-heading">
          Disabled
        </h2>
        <div className="rounded-3xl bg-muted p-6 sm:p-10">
          <SliderDisabled />
        </div>
      </section>

      <section
        aria-labelledby="multiple-heading"
        className="flex flex-col gap-5"
      >
        <h2 className="font-medium text-muted-foreground" id="multiple-heading">
          Multiple
        </h2>
        <div className="rounded-3xl border bg-card p-6 sm:p-10">
          <SliderMultiple />
        </div>
      </section>

      <section aria-labelledby="range-heading" className="flex flex-col gap-5">
        <h2 className="font-medium text-muted-foreground" id="range-heading">
          Range
        </h2>
        <div className="rounded-3xl bg-muted p-6 sm:p-10">
          <SliderRange />
        </div>
      </section>

      <section aria-labelledby="rtl-heading" className="flex flex-col gap-5">
        <h2 className="font-medium text-muted-foreground" id="rtl-heading">
          RTL
        </h2>
        <div className="rounded-3xl border bg-card p-6 sm:p-10">
          <SliderRtl />
        </div>
      </section>

      <section
        aria-labelledby="vertical-heading"
        className="flex flex-col gap-5"
      >
        <h2 className="font-medium text-muted-foreground" id="vertical-heading">
          Vertical
        </h2>
        <div className="rounded-3xl bg-muted p-6 sm:p-10">
          <SliderVertical />
        </div>
      </section>
    </div>
  </div>
);

export default SliderExamplePage;
