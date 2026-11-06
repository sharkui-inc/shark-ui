import { PreviewLocaleProvider } from "@/hooks/use-preview-locale";
import ExampleAutoplay from "@/registry/react/examples/carousel/example-autoplay";
import ExampleControlled from "@/registry/react/examples/carousel/example-controlled";
import ExampleDefault from "@/registry/react/examples/carousel/example-default";
import ExampleLoop from "@/registry/react/examples/carousel/example-loop";
import ExampleMouseDrag from "@/registry/react/examples/carousel/example-mouse-drag";
import ExampleOrientationHorizontal from "@/registry/react/examples/carousel/example-orientation-horizontal";
import ExampleOrientationVertical from "@/registry/react/examples/carousel/example-orientation-vertical";
import ExampleResponsive from "@/registry/react/examples/carousel/example-responsive";
import ExampleRtl from "@/registry/react/examples/carousel/example-rtl";
import ExampleSlidesPerPage from "@/registry/react/examples/carousel/example-slides-per-page";
import ExampleSpacing from "@/registry/react/examples/carousel/example-spacing";
import ExampleThumbnailIndicator from "@/registry/react/examples/carousel/example-thumbnail-indicator";
import ExampleThumbnailIndicatorVertical from "@/registry/react/examples/carousel/example-thumbnail-indicator-vertical";
import CarouselMultiple from "./_examples/carousel-multiple";
import CarouselOrientation from "./_examples/carousel-orientation";
import CarouselPlugin from "./_examples/carousel-plugin";
import CarouselSize from "./_examples/carousel-size";

const CarouselExamplePage = () => (
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
          aria-labelledby="autoplay-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="autoplay-heading"
          >
            Autoplay
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleAutoplay />
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
            <ExampleControlled />
          </div>
        </section>
        <section aria-labelledby="loop-heading" className="flex flex-col gap-5">
          <h2 className="text-muted-foreground font-medium" id="loop-heading">
            Loop
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleLoop />
          </div>
        </section>
        <section
          aria-labelledby="mouse-drag-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="mouse-drag-heading"
          >
            Mouse Drag
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleMouseDrag />
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
          aria-labelledby="responsive-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="responsive-heading"
          >
            Responsive
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleResponsive />
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
          aria-labelledby="slides-per-page-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="slides-per-page-heading"
          >
            Slides Per Page
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleSlidesPerPage />
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
          aria-labelledby="thumbnail-indicator-vertical-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="thumbnail-indicator-vertical-heading"
          >
            Thumbnail Indicator Vertical
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleThumbnailIndicatorVertical />
          </div>
        </section>
        <section
          aria-labelledby="thumbnail-indicator-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="thumbnail-indicator-heading"
          >
            Thumbnail Indicator
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleThumbnailIndicator />
          </div>
        </section>
        <section
          aria-labelledby="local-multiple-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="local-multiple-heading"
          >
            Multiple
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <CarouselMultiple />
          </div>
        </section>
        <section
          aria-labelledby="local-orientation-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="local-orientation-heading"
          >
            Orientation
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <CarouselOrientation />
          </div>
        </section>
        <section
          aria-labelledby="local-plugin-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="local-plugin-heading"
          >
            Plugin
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <CarouselPlugin />
          </div>
        </section>
        <section
          aria-labelledby="local-size-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="local-size-heading"
          >
            Size
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <CarouselSize />
          </div>
        </section>
      </div>
    </div>
  </PreviewLocaleProvider>
);

export default CarouselExamplePage;
