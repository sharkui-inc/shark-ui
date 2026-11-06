import { PreviewLocaleProvider } from "@/hooks/use-preview-locale";
import ExampleBothDirections from "@/registry/react/examples/scroll-area/example-both-directions";
import ExampleClampContentMinWidth from "@/registry/react/examples/scroll-area/example-clamp-content-min-width";
import ExampleDefault from "@/registry/react/examples/scroll-area/example-default";
import ExampleFill from "@/registry/react/examples/scroll-area/example-fill";
import ExampleHideThumb from "@/registry/react/examples/scroll-area/example-hide-thumb";
import ExampleHorizontal from "@/registry/react/examples/scroll-area/example-horizontal";
import ExampleNested from "@/registry/react/examples/scroll-area/example-nested";
import ExampleOverscrollContain from "@/registry/react/examples/scroll-area/example-overscroll-contain";
import ExampleRtl from "@/registry/react/examples/scroll-area/example-rtl";
import ExampleScrollFade from "@/registry/react/examples/scroll-area/example-scroll-fade";
import ExampleScrollbarGutter from "@/registry/react/examples/scroll-area/example-scrollbar-gutter";
import ExampleVertical from "@/registry/react/examples/scroll-area/example-vertical";

const ScrollAreaExamplePage = () => (
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
          aria-labelledby="both-directions-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="both-directions-heading"
          >
            Both Directions
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleBothDirections />
          </div>
        </section>
        <section
          aria-labelledby="clamp-content-min-width-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="clamp-content-min-width-heading"
          >
            Clamp Content Min Width
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleClampContentMinWidth />
          </div>
        </section>
        <section aria-labelledby="fill-heading" className="flex flex-col gap-5">
          <h2 className="text-muted-foreground font-medium" id="fill-heading">
            Fill
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleFill />
          </div>
        </section>
        <section
          aria-labelledby="hide-thumb-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="hide-thumb-heading"
          >
            Hide Thumb
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleHideThumb />
          </div>
        </section>
        <section
          aria-labelledby="horizontal-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="horizontal-heading"
          >
            Horizontal
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleHorizontal />
          </div>
        </section>
        <section
          aria-labelledby="nested-heading"
          className="flex flex-col gap-5 sm:col-span-2"
        >
          <h2 className="text-muted-foreground font-medium" id="nested-heading">
            Nested
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleNested />
          </div>
        </section>
        <section
          aria-labelledby="overscroll-contain-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="overscroll-contain-heading"
          >
            Overscroll Contain
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleOverscrollContain />
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
          aria-labelledby="scroll-fade-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="scroll-fade-heading"
          >
            Scroll Fade
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleScrollFade />
          </div>
        </section>
        <section
          aria-labelledby="scrollbar-gutter-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="scrollbar-gutter-heading"
          >
            Scrollbar Gutter
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleScrollbarGutter />
          </div>
        </section>
        <section
          aria-labelledby="vertical-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="vertical-heading"
          >
            Vertical
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleVertical />
          </div>
        </section>
      </div>
    </div>
  </PreviewLocaleProvider>
);

export default ScrollAreaExamplePage;
