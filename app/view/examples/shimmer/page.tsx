import { PreviewLocaleProvider } from "@/hooks/use-preview-locale";
import ExampleAngle from "@/registry/react/examples/shimmer/example-angle";
import ExampleColor from "@/registry/react/examples/shimmer/example-color";
import ExampleDefault from "@/registry/react/examples/shimmer/example-default";
import ExampleDuration from "@/registry/react/examples/shimmer/example-duration";
import ExampleNone from "@/registry/react/examples/shimmer/example-none";
import ExampleOnce from "@/registry/react/examples/shimmer/example-once";
import ExampleReverse from "@/registry/react/examples/shimmer/example-reverse";
import ExampleRtl from "@/registry/react/examples/shimmer/example-rtl";
import ExampleSpread from "@/registry/react/examples/shimmer/example-spread";

const ShimmerExamplePage = () => (
  <PreviewLocaleProvider>
    <div className="mx-auto flex w-full max-w-7xl flex-col gap-16 px-5 py-10 sm:px-8 sm:py-14 lg:px-10">
      <div className="grid min-w-0 grid-cols-1 gap-16 sm:grid-cols-2 [&>section]:min-w-0">
        <section
          aria-labelledby="default-heading"
          className="flex flex-col gap-5"
        >
          <h1
            className="text-muted-foreground font-medium"
            id="default-heading"
          >
            Default
          </h1>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleDefault />
          </div>
        </section>
        <section
          aria-labelledby="angle-heading"
          className="flex flex-col gap-5"
        >
          <h2 className="text-muted-foreground font-medium" id="angle-heading">
            Angle
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleAngle />
          </div>
        </section>
        <section
          aria-labelledby="color-heading"
          className="flex flex-col gap-5"
        >
          <h2 className="text-muted-foreground font-medium" id="color-heading">
            Color
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleColor />
          </div>
        </section>
        <section
          aria-labelledby="duration-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="duration-heading"
          >
            Duration
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleDuration />
          </div>
        </section>
        <section aria-labelledby="none-heading" className="flex flex-col gap-5">
          <h2 className="text-muted-foreground font-medium" id="none-heading">
            None
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleNone />
          </div>
        </section>
        <section aria-labelledby="once-heading" className="flex flex-col gap-5">
          <h2 className="text-muted-foreground font-medium" id="once-heading">
            Once
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleOnce />
          </div>
        </section>
        <section
          aria-labelledby="reverse-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="reverse-heading"
          >
            Reverse
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleReverse />
          </div>
        </section>
        <section aria-labelledby="rtl-heading" className="flex flex-col gap-5">
          <h2 className="text-muted-foreground font-medium" id="rtl-heading">
            RTL
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleRtl />
          </div>
        </section>
        <section
          aria-labelledby="spread-heading"
          className="flex flex-col gap-5"
        >
          <h2 className="text-muted-foreground font-medium" id="spread-heading">
            Spread
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleSpread />
          </div>
        </section>
      </div>
    </div>
  </PreviewLocaleProvider>
);

export default ShimmerExamplePage;
