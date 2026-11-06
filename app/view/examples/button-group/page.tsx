import { PreviewLocaleProvider } from "@/hooks/use-preview-locale";
import ExampleDefault from "@/registry/react/examples/button-group/example-default";
import ExampleNested from "@/registry/react/examples/button-group/example-nested";
import ExampleOrientationHorizontal from "@/registry/react/examples/button-group/example-orientation-horizontal";
import ExampleOrientationVertical from "@/registry/react/examples/button-group/example-orientation-vertical";
import ExampleRtl from "@/registry/react/examples/button-group/example-rtl";
import ExampleSeparator from "@/registry/react/examples/button-group/example-separator";
import ExampleWithInput from "@/registry/react/examples/button-group/example-with-input";
import ExampleWithMenu from "@/registry/react/examples/button-group/example-with-menu";
import ExampleWithPopover from "@/registry/react/examples/button-group/example-with-popover";
import ButtonGroupDropdownMenu from "./_examples/button-group-dropdown-menu";
import ButtonGroupInput from "./_examples/button-group-input";
import ButtonGroupInputGroup from "./_examples/button-group-input-group";
import ButtonGroupOrientation from "./_examples/button-group-orientation";
import ButtonGroupPopover from "./_examples/button-group-popover";
import ButtonGroupSelect from "./_examples/button-group-select";
import ButtonGroupSize from "./_examples/button-group-size";
import ButtonGroupSplit from "./_examples/button-group-split";

const ButtonGroupExamplePage = () => (
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
        <section aria-labelledby="rtl-heading" className="flex flex-col gap-5">
          <h2 className="text-muted-foreground font-medium" id="rtl-heading">
            RTL
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleRtl />
          </div>
        </section>
        <section
          aria-labelledby="separator-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="separator-heading"
          >
            Separator
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleSeparator />
          </div>
        </section>
        <section
          aria-labelledby="with-input-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="with-input-heading"
          >
            With Input
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleWithInput />
          </div>
        </section>
        <section
          aria-labelledby="with-menu-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="with-menu-heading"
          >
            With Menu
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleWithMenu />
          </div>
        </section>
        <section
          aria-labelledby="with-popover-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="with-popover-heading"
          >
            With Popover
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleWithPopover />
          </div>
        </section>
        <section
          aria-labelledby="local-dropdown-menu-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="local-dropdown-menu-heading"
          >
            Dropdown Menu
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ButtonGroupDropdownMenu />
          </div>
        </section>
        <section
          aria-labelledby="local-input-group-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="local-input-group-heading"
          >
            Input Group
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ButtonGroupInputGroup />
          </div>
        </section>
        <section
          aria-labelledby="local-input-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="local-input-heading"
          >
            Input
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ButtonGroupInput />
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
            <ButtonGroupOrientation />
          </div>
        </section>
        <section
          aria-labelledby="local-popover-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="local-popover-heading"
          >
            Popover
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ButtonGroupPopover />
          </div>
        </section>
        <section
          aria-labelledby="local-select-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="local-select-heading"
          >
            Select
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ButtonGroupSelect />
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
            <ButtonGroupSize />
          </div>
        </section>
        <section
          aria-labelledby="local-split-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="local-split-heading"
          >
            Split
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ButtonGroupSplit />
          </div>
        </section>
      </div>
    </div>
  </PreviewLocaleProvider>
);

export default ButtonGroupExamplePage;
