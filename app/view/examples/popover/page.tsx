import { PreviewLocaleProvider } from "@/hooks/use-preview-locale";
import ExampleAnchor from "@/registry/react/examples/popover/example-anchor";
import ExampleCloseBehavior from "@/registry/react/examples/popover/example-close-behavior";
import ExampleCloseButton from "@/registry/react/examples/popover/example-close-button";
import ExampleControlled from "@/registry/react/examples/popover/example-controlled";
import ExampleCustomSpacing from "@/registry/react/examples/popover/example-custom-spacing";
import ExampleDefault from "@/registry/react/examples/popover/example-default";
import ExampleMultipleTriggers from "@/registry/react/examples/popover/example-multiple-triggers";
import ExampleNested from "@/registry/react/examples/popover/example-nested";
import ExampleNonModal from "@/registry/react/examples/popover/example-non-modal";
import ExamplePositioning from "@/registry/react/examples/popover/example-positioning";
import ExampleRtl from "@/registry/react/examples/popover/example-rtl";
import ExampleScrollArea from "@/registry/react/examples/popover/example-scroll-area";
import ExampleTooltip from "@/registry/react/examples/popover/example-tooltip";
import ExampleWithArrow from "@/registry/react/examples/popover/example-with-arrow";
import ExampleWithDialog from "@/registry/react/examples/popover/example-with-dialog";
import PopoverAlignments from "./_examples/popover-alignments";
import PopoverForm from "./_examples/popover-form";

const PopoverExamplePage = () => (
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
          aria-labelledby="anchor-heading"
          className="flex flex-col gap-5"
        >
          <h2 className="text-muted-foreground font-medium" id="anchor-heading">
            Anchor
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleAnchor />
          </div>
        </section>
        <section
          aria-labelledby="close-behavior-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="close-behavior-heading"
          >
            Close Behavior
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleCloseBehavior />
          </div>
        </section>
        <section
          aria-labelledby="close-button-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="close-button-heading"
          >
            Close Button
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleCloseButton />
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
          aria-labelledby="non-modal-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="non-modal-heading"
          >
            Non Modal
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleNonModal />
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
        <section aria-labelledby="rtl-heading" className="flex flex-col gap-5">
          <h2 className="text-muted-foreground font-medium" id="rtl-heading">
            RTL
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleRtl />
          </div>
        </section>
        <section
          aria-labelledby="scroll-area-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="scroll-area-heading"
          >
            Scroll Area
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleScrollArea />
          </div>
        </section>
        <section
          aria-labelledby="tooltip-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="tooltip-heading"
          >
            Tooltip
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleTooltip />
          </div>
        </section>
        <section
          aria-labelledby="with-arrow-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="with-arrow-heading"
          >
            With Arrow
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleWithArrow />
          </div>
        </section>
        <section
          aria-labelledby="with-dialog-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="with-dialog-heading"
          >
            With Dialog
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleWithDialog />
          </div>
        </section>
        <section
          aria-labelledby="local-alignments-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="local-alignments-heading"
          >
            Alignments
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <PopoverAlignments />
          </div>
        </section>
        <section
          aria-labelledby="local-form-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="local-form-heading"
          >
            Form
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <PopoverForm />
          </div>
        </section>
      </div>
    </div>
  </PreviewLocaleProvider>
);

export default PopoverExamplePage;
