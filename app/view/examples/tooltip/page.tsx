import { PreviewLocaleProvider } from "@/hooks/use-preview-locale";
import ExampleControlled from "@/registry/react/examples/tooltip/example-controlled";
import ExampleDefault from "@/registry/react/examples/tooltip/example-default";
import ExampleDisabledButton from "@/registry/react/examples/tooltip/example-disabled-button";
import ExampleMultipleTriggers from "@/registry/react/examples/tooltip/example-multiple-triggers";
import ExamplePositioning from "@/registry/react/examples/tooltip/example-positioning";
import ExampleRtl from "@/registry/react/examples/tooltip/example-rtl";
import ExampleWithShortcut from "@/registry/react/examples/tooltip/example-with-shortcut";
import ExampleWithoutArrow from "@/registry/react/examples/tooltip/example-without-arrow";
import TooltipDisabled from "./_examples/tooltip-disabled";
import TooltipKeyboard from "./_examples/tooltip-keyboard";

const TooltipExamplePage = () => (
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
        <section
          aria-labelledby="disabled-button-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="disabled-button-heading"
          >
            Disabled Button
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleDisabledButton />
          </div>
        </section>
        <section
          aria-labelledby="multiple-triggers-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="multiple-triggers-heading"
          >
            Multiple Triggers
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleMultipleTriggers />
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
          aria-labelledby="positioning-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="positioning-heading"
          >
            Positioning
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExamplePositioning />
          </div>
        </section>
        <section
          aria-labelledby="with-shortcut-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="with-shortcut-heading"
          >
            With Shortcut
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleWithShortcut />
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
        <section
          aria-labelledby="local-disabled-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="local-disabled-heading"
          >
            Disabled
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <TooltipDisabled />
          </div>
        </section>
        <section
          aria-labelledby="local-keyboard-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="local-keyboard-heading"
          >
            Keyboard
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <TooltipKeyboard />
          </div>
        </section>
      </div>
    </div>
  </PreviewLocaleProvider>
);

export default TooltipExamplePage;
