import { PreviewLocaleProvider } from "@/hooks/use-preview-locale";
import ExampleAutofill from "@/registry/react/examples/marquee/example-autofill";
import ExampleCustomSpeed from "@/registry/react/examples/marquee/example-custom-speed";
import ExampleDefault from "@/registry/react/examples/marquee/example-default";
import ExampleOrientationHorizontal from "@/registry/react/examples/marquee/example-orientation-horizontal";
import ExampleOrientationVertical from "@/registry/react/examples/marquee/example-orientation-vertical";
import ExamplePauseOnHover from "@/registry/react/examples/marquee/example-pause-on-hover";
import ExampleReverse from "@/registry/react/examples/marquee/example-reverse";
import ExampleRtl from "@/registry/react/examples/marquee/example-rtl";
import ExampleSpacing from "@/registry/react/examples/marquee/example-spacing";
import ExampleWithoutFade from "@/registry/react/examples/marquee/example-without-fade";

const MarqueeExamplePage = () => (
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
          aria-labelledby="autofill-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="autofill-heading"
          >
            Autofill
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleAutofill />
          </div>
        </section>
        <section
          aria-labelledby="custom-speed-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="custom-speed-heading"
          >
            Custom Speed
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleCustomSpeed />
          </div>
        </section>
        <section
          aria-labelledby="orientation-horizontal-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="orientation-horizontal-heading"
          >
            Orientation Horizontal
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleOrientationHorizontal />
          </div>
        </section>
        <section
          aria-labelledby="orientation-vertical-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="orientation-vertical-heading"
          >
            Orientation Vertical
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleOrientationVertical />
          </div>
        </section>
        <section
          aria-labelledby="pause-on-hover-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="pause-on-hover-heading"
          >
            Pause On Hover
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExamplePauseOnHover />
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
          aria-labelledby="spacing-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="spacing-heading"
          >
            Spacing
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleSpacing />
          </div>
        </section>
        <section
          aria-labelledby="without-fade-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="without-fade-heading"
          >
            Without Fade
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleWithoutFade />
          </div>
        </section>
      </div>
    </div>
  </PreviewLocaleProvider>
);

export default MarqueeExamplePage;
