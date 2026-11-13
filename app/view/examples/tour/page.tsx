import { PreviewLocaleProvider } from "@/hooks/use-preview-locale";
import ExampleAsync from "@/registry/react/examples/tour/example-async";
import ExampleBottomStickOnMobile from "@/registry/react/examples/tour/example-bottom-stick-on-mobile";
import ExampleCustomProgress from "@/registry/react/examples/tour/example-custom-progress";
import ExampleCustomSpacing from "@/registry/react/examples/tour/example-custom-spacing";
import ExampleDefault from "@/registry/react/examples/tour/example-default";
import ExampleEvents from "@/registry/react/examples/tour/example-events";
import ExampleKeyboardNavigation from "@/registry/react/examples/tour/example-keyboard-navigation";
import ExampleRtl from "@/registry/react/examples/tour/example-rtl";
import ExampleSkip from "@/registry/react/examples/tour/example-skip";
import ExampleStepTypes from "@/registry/react/examples/tour/example-step-types";
import ExampleWaitForClick from "@/registry/react/examples/tour/example-wait-for-click";
import ExampleWaitForElement from "@/registry/react/examples/tour/example-wait-for-element";
import ExampleWaitForInput from "@/registry/react/examples/tour/example-wait-for-input";
import ExampleWithoutArrow from "@/registry/react/examples/tour/example-without-arrow";
import ExampleWithoutBackdrop from "@/registry/react/examples/tour/example-without-backdrop";

const TourExamplePage = () => (
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
          aria-labelledby="async-heading"
          className="flex flex-col gap-5"
        >
          <h2 className="text-muted-foreground font-medium" id="async-heading">
            Async
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleAsync />
          </div>
        </section>
        <section
          aria-labelledby="bottom-stick-on-mobile-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="bottom-stick-on-mobile-heading"
          >
            Bottom Stick On Mobile
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleBottomStickOnMobile />
          </div>
        </section>
        <section
          aria-labelledby="custom-progress-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="custom-progress-heading"
          >
            Custom Progress
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleCustomProgress />
          </div>
        </section>
        <section
          aria-labelledby="custom-spacing-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="custom-spacing-heading"
          >
            Custom Spacing
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleCustomSpacing />
          </div>
        </section>
        <section
          aria-labelledby="events-heading"
          className="flex flex-col gap-5"
        >
          <h2 className="text-muted-foreground font-medium" id="events-heading">
            Events
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleEvents />
          </div>
        </section>
        <section
          aria-labelledby="without-backdrop-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="without-backdrop-heading"
          >
            Without Backdrop
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleWithoutBackdrop />
          </div>
        </section>
        <section
          aria-labelledby="keyboard-navigation-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="keyboard-navigation-heading"
          >
            Keyboard Navigation
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleKeyboardNavigation />
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
        <section aria-labelledby="skip-heading" className="flex flex-col gap-5">
          <h2 className="text-muted-foreground font-medium" id="skip-heading">
            Skip
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleSkip />
          </div>
        </section>
        <section
          aria-labelledby="step-types-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="step-types-heading"
          >
            Step Types
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleStepTypes />
          </div>
        </section>
        <section
          aria-labelledby="wait-for-click-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="wait-for-click-heading"
          >
            Wait For Click
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleWaitForClick />
          </div>
        </section>
        <section
          aria-labelledby="wait-for-element-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="wait-for-element-heading"
          >
            Wait For Element
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleWaitForElement />
          </div>
        </section>
        <section
          aria-labelledby="wait-for-input-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="wait-for-input-heading"
          >
            Wait For Input
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleWaitForInput />
          </div>
        </section>
        <section
          aria-labelledby="without-arrow-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="without-arrow-heading"
          >
            Without Arrow
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleWithoutArrow />
          </div>
        </section>
      </div>
    </div>
  </PreviewLocaleProvider>
);

export default TourExamplePage;
