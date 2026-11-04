import SliderControlled from "./_examples/slider-controlled";
import SliderDemo from "./_examples/slider-demo";
import SliderDisabled from "./_examples/slider-disabled";
import SliderMultiple from "./_examples/slider-multiple";
import SliderRange from "./_examples/slider-range";
import SliderRtl from "./_examples/slider-rtl";
import SliderVertical from "./_examples/slider-vertical";

const SliderExamplePage = () => (
  <div className="mx-auto flex w-full max-w-7xl flex-col gap-16 px-5 py-10 sm:px-8 sm:py-14 lg:px-10">
    <div className="grid min-w-0 grid-cols-1 gap-16 sm:grid-cols-2 [&>section]:min-w-0">
      <section aria-labelledby="demo-heading" className="flex flex-col gap-5">
        <h1 className="text-muted-foreground font-medium" id="demo-heading">
          Demo
        </h1>
        <div className="bg-muted rounded-3xl p-6 sm:p-10">
          <SliderDemo />
        </div>
      </section>

      <section
        aria-labelledby="controlled-heading"
        className="flex flex-col gap-5"
      >
        <h2
          className="text-muted-foreground font-medium"
          id="controlled-heading"
        >
          Controlled
        </h2>
        <div className="bg-card rounded-3xl border p-6 sm:p-10">
          <SliderControlled />
        </div>
      </section>

      <section
        aria-labelledby="disabled-heading"
        className="flex flex-col gap-5"
      >
        <h2 className="text-muted-foreground font-medium" id="disabled-heading">
          Disabled
        </h2>
        <div className="bg-muted rounded-3xl p-6 sm:p-10">
          <SliderDisabled />
        </div>
      </section>

      <section
        aria-labelledby="multiple-heading"
        className="flex flex-col gap-5"
      >
        <h2 className="text-muted-foreground font-medium" id="multiple-heading">
          Multiple
        </h2>
        <div className="bg-card rounded-3xl border p-6 sm:p-10">
          <SliderMultiple />
        </div>
      </section>

      <section aria-labelledby="range-heading" className="flex flex-col gap-5">
        <h2 className="text-muted-foreground font-medium" id="range-heading">
          Range
        </h2>
        <div className="bg-muted rounded-3xl p-6 sm:p-10">
          <SliderRange />
        </div>
      </section>

      <section aria-labelledby="rtl-heading" className="flex flex-col gap-5">
        <h2 className="text-muted-foreground font-medium" id="rtl-heading">
          RTL
        </h2>
        <div className="bg-card rounded-3xl border p-6 sm:p-10">
          <SliderRtl />
        </div>
      </section>

      <section
        aria-labelledby="vertical-heading"
        className="flex flex-col gap-5"
      >
        <h2 className="text-muted-foreground font-medium" id="vertical-heading">
          Vertical
        </h2>
        <div className="bg-muted rounded-3xl p-6 sm:p-10">
          <SliderVertical />
        </div>
      </section>
    </div>
  </div>
);

export default SliderExamplePage;
