import { PreviewLocaleProvider } from "@/hooks/use-preview-locale";
import ExampleCloseButton from "@/registry/react/examples/drawer/example-close-button";
import ExampleControlled from "@/registry/react/examples/drawer/example-controlled";
import ExampleCustomSpacing from "@/registry/react/examples/drawer/example-custom-spacing";
import ExampleDefault from "@/registry/react/examples/drawer/example-default";
import ExampleIndentBackground from "@/registry/react/examples/drawer/example-indent-background";
import ExampleInset from "@/registry/react/examples/drawer/example-inset";
import ExampleInsetRtl from "@/registry/react/examples/drawer/example-inset-rtl";
import ExampleMultipleTriggers from "@/registry/react/examples/drawer/example-multiple-triggers";
import ExampleNested from "@/registry/react/examples/drawer/example-nested";
import ExampleNoCloseButton from "@/registry/react/examples/drawer/example-no-close-button";
import ExampleNoDragArea from "@/registry/react/examples/drawer/example-no-drag-area";
import ExampleNonDraggable from "@/registry/react/examples/drawer/example-non-draggable";
import ExampleNonModal from "@/registry/react/examples/drawer/example-non-modal";
import ExampleResponsiveContextMenu from "@/registry/react/examples/drawer/example-responsive-context-menu";
import ExampleResponsiveDialog from "@/registry/react/examples/drawer/example-responsive-dialog";
import ExampleResponsiveMenu from "@/registry/react/examples/drawer/example-responsive-menu";
import ExampleRtl from "@/registry/react/examples/drawer/example-rtl";
import ExampleScrollable from "@/registry/react/examples/drawer/example-scrollable";
import ExampleSnapPoints from "@/registry/react/examples/drawer/example-snap-points";
import ExampleSwipeDirections from "@/registry/react/examples/drawer/example-swipe-directions";
import ExampleVariantDefault from "@/registry/react/examples/drawer/example-variant-default";
import DrawerDialog from "./_examples/drawer-dialog";
import DrawerSides from "./_examples/drawer-sides";
import DrawerSwipeHandle from "./_examples/drawer-swipe-handle";

const DrawerExamplePage = () => (
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
          aria-labelledby="indent-background-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="indent-background-heading"
          >
            Indent Background
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleIndentBackground />
          </div>
        </section>
        <section
          aria-labelledby="inset-rtl-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="inset-rtl-heading"
          >
            Inset RTL
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleInsetRtl />
          </div>
        </section>
        <section
          aria-labelledby="inset-heading"
          className="flex flex-col gap-5"
        >
          <h2 className="text-muted-foreground font-medium" id="inset-heading">
            Inset
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleInset />
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
          aria-labelledby="no-drag-area-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="no-drag-area-heading"
          >
            No Drag Area
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleNoDragArea />
          </div>
        </section>
        <section
          aria-labelledby="non-draggable-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="non-draggable-heading"
          >
            Non Draggable
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleNonDraggable />
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
          aria-labelledby="responsive-context-menu-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="responsive-context-menu-heading"
          >
            Responsive Context Menu
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleResponsiveContextMenu />
          </div>
        </section>
        <section
          aria-labelledby="responsive-dialog-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="responsive-dialog-heading"
          >
            Responsive Dialog
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleResponsiveDialog />
          </div>
        </section>
        <section
          aria-labelledby="responsive-menu-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="responsive-menu-heading"
          >
            Responsive Menu
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleResponsiveMenu />
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
          aria-labelledby="scrollable-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="scrollable-heading"
          >
            Scrollable
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleScrollable />
          </div>
        </section>
        <section
          aria-labelledby="snap-points-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="snap-points-heading"
          >
            Snap Points
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleSnapPoints />
          </div>
        </section>
        <section
          aria-labelledby="swipe-directions-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="swipe-directions-heading"
          >
            Swipe Directions
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleSwipeDirections />
          </div>
        </section>
        <section
          aria-labelledby="variant-default-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="variant-default-heading"
          >
            Variant Default
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleVariantDefault />
          </div>
        </section>
        <section
          aria-labelledby="local-dialog-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="local-dialog-heading"
          >
            Dialog
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <DrawerDialog />
          </div>
        </section>
        <section
          aria-labelledby="local-sides-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="local-sides-heading"
          >
            Sides
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <DrawerSides />
          </div>
        </section>
        <section
          aria-labelledby="local-swipe-handle-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="local-swipe-handle-heading"
          >
            Swipe Handle
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <DrawerSwipeHandle />
          </div>
        </section>
      </div>
    </div>
  </PreviewLocaleProvider>
);

export default DrawerExamplePage;
