import { PreviewLocaleProvider } from "@/hooks/use-preview-locale";
import ExampleAutofocus from "@/registry/react/examples/dialog/example-autofocus";
import ExampleCenteredOnMobile from "@/registry/react/examples/dialog/example-centered-on-mobile";
import ExampleCloseBehavior from "@/registry/react/examples/dialog/example-close-behavior";
import ExampleCloseButton from "@/registry/react/examples/dialog/example-close-button";
import ExampleControlled from "@/registry/react/examples/dialog/example-controlled";
import ExampleCustomSpacing from "@/registry/react/examples/dialog/example-custom-spacing";
import ExampleDefault from "@/registry/react/examples/dialog/example-default";
import ExampleFinalFocus from "@/registry/react/examples/dialog/example-final-focus";
import ExampleMultipleTriggers from "@/registry/react/examples/dialog/example-multiple-triggers";
import ExampleNested from "@/registry/react/examples/dialog/example-nested";
import ExampleNoCloseButton from "@/registry/react/examples/dialog/example-no-close-button";
import ExampleNonModal from "@/registry/react/examples/dialog/example-non-modal";
import ExampleOpenFromMenu from "@/registry/react/examples/dialog/example-open-from-menu";
import ExampleRtl from "@/registry/react/examples/dialog/example-rtl";
import ExampleScrollArea from "@/registry/react/examples/dialog/example-scroll-area";
import ExampleSidebar from "@/registry/react/examples/dialog/example-sidebar";
import ExampleSize from "@/registry/react/examples/dialog/example-size";
import ExampleSizeRtl from "@/registry/react/examples/dialog/example-size-rtl";
import DialogScrollableContent from "./_examples/dialog-scrollable-content";
import DialogStickyFooter from "./_examples/dialog-sticky-footer";

const DialogExamplePage = () => (
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
          aria-labelledby="autofocus-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="autofocus-heading"
          >
            Autofocus
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleAutofocus />
          </div>
        </section>
        <section
          aria-labelledby="centered-on-mobile-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="centered-on-mobile-heading"
          >
            Centered On Mobile
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleCenteredOnMobile />
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
          aria-labelledby="final-focus-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="final-focus-heading"
          >
            Final Focus
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleFinalFocus />
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
          aria-labelledby="no-close-button-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="no-close-button-heading"
          >
            No Close Button
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleNoCloseButton />
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
          aria-labelledby="open-from-menu-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="open-from-menu-heading"
          >
            Open From Menu
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleOpenFromMenu />
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
          aria-labelledby="sidebar-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="sidebar-heading"
          >
            Sidebar
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleSidebar />
          </div>
        </section>
        <section
          aria-labelledby="size-rtl-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="size-rtl-heading"
          >
            Size RTL
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleSizeRtl />
          </div>
        </section>
        <section aria-labelledby="size-heading" className="flex flex-col gap-5">
          <h2 className="text-muted-foreground font-medium" id="size-heading">
            Size
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleSize />
          </div>
        </section>
        <section
          aria-labelledby="local-scrollable-content-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="local-scrollable-content-heading"
          >
            Scrollable Content
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <DialogScrollableContent />
          </div>
        </section>
        <section
          aria-labelledby="local-sticky-footer-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="local-sticky-footer-heading"
          >
            Sticky Footer
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <DialogStickyFooter />
          </div>
        </section>
      </div>
    </div>
  </PreviewLocaleProvider>
);

export default DialogExamplePage;
