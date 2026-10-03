import CarouselDemo from "./_examples/carousel-demo";
import CarouselMultiple from "./_examples/carousel-multiple";
import CarouselOrientation from "./_examples/carousel-orientation";
import CarouselPlugin from "./_examples/carousel-plugin";
import CarouselRtl from "./_examples/carousel-rtl";
import CarouselSize from "./_examples/carousel-size";
import CarouselSpacing from "./_examples/carousel-spacing";

const CarouselExamplePage = () => (
  <div className="mx-auto flex w-full max-w-7xl flex-col gap-16 px-5 py-10 sm:px-8 sm:py-14 lg:px-10">
    <div className="grid min-w-0 grid-cols-1 gap-16 sm:grid-cols-2 [&>section]:min-w-0">
      <section aria-labelledby="demo-heading" className="flex flex-col gap-5">
        <h1 className="font-medium text-muted-foreground" id="demo-heading">
          Demo
        </h1>
        <div className="rounded-3xl bg-muted p-6 sm:p-10">
          <CarouselDemo />
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
          <CarouselMultiple />
        </div>
      </section>

      <section
        aria-labelledby="orientation-heading"
        className="flex flex-col gap-5"
      >
        <h2
          className="font-medium text-muted-foreground"
          id="orientation-heading"
        >
          Orientation
        </h2>
        <div className="rounded-3xl bg-muted p-6 sm:p-10">
          <CarouselOrientation />
        </div>
      </section>

      <section aria-labelledby="plugin-heading" className="flex flex-col gap-5">
        <h2 className="font-medium text-muted-foreground" id="plugin-heading">
          Plugin
        </h2>
        <div className="rounded-3xl border bg-card p-6 sm:p-10">
          <CarouselPlugin />
        </div>
      </section>

      <section aria-labelledby="rtl-heading" className="flex flex-col gap-5">
        <h2 className="font-medium text-muted-foreground" id="rtl-heading">
          RTL
        </h2>
        <div className="rounded-3xl bg-muted p-6 sm:p-10">
          <CarouselRtl />
        </div>
      </section>

      <section aria-labelledby="size-heading" className="flex flex-col gap-5">
        <h2 className="font-medium text-muted-foreground" id="size-heading">
          Size
        </h2>
        <div className="rounded-3xl border bg-card p-6 sm:p-10">
          <CarouselSize />
        </div>
      </section>

      <section
        aria-labelledby="spacing-heading"
        className="flex flex-col gap-5"
      >
        <h2 className="font-medium text-muted-foreground" id="spacing-heading">
          Spacing
        </h2>
        <div className="rounded-3xl bg-muted p-6 sm:p-10">
          <CarouselSpacing />
        </div>
      </section>
    </div>
  </div>
);

export default CarouselExamplePage;
