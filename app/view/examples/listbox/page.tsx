import { PreviewLocaleProvider } from "@/hooks/use-preview-locale";
import ExampleControlled from "@/registry/react/examples/listbox/example-controlled";
import ExampleDefault from "@/registry/react/examples/listbox/example-default";
import ExampleDisabled from "@/registry/react/examples/listbox/example-disabled";
import ExampleDisabledItem from "@/registry/react/examples/listbox/example-disabled-item";
import ExampleForm from "@/registry/react/examples/listbox/example-form";
import ExampleGrid from "@/registry/react/examples/listbox/example-grid";
import ExampleGrouping from "@/registry/react/examples/listbox/example-grouping";
import ExampleHorizontal from "@/registry/react/examples/listbox/example-horizontal";
import ExampleRtl from "@/registry/react/examples/listbox/example-rtl";
import ExampleScrollable from "@/registry/react/examples/listbox/example-scrollable";
import ExampleSelectionExtended from "@/registry/react/examples/listbox/example-selection-extended";
import ExampleSelectionMultiple from "@/registry/react/examples/listbox/example-selection-multiple";
import ExampleSelectionNone from "@/registry/react/examples/listbox/example-selection-none";
import ExampleTransferList from "@/registry/react/examples/listbox/example-transfer-list";
import ExampleVariantDestructive from "@/registry/react/examples/listbox/example-variant-destructive";
import ExampleVertical from "@/registry/react/examples/listbox/example-vertical";
import ExampleWithDescription from "@/registry/react/examples/listbox/example-with-description";
import ExampleWithField from "@/registry/react/examples/listbox/example-with-field";
import ExampleWithFilter from "@/registry/react/examples/listbox/example-with-filter";
import ExampleWithIcon from "@/registry/react/examples/listbox/example-with-icon";
import ExampleWithPopover from "@/registry/react/examples/listbox/example-with-popover";
import ExampleWithoutIndicator from "@/registry/react/examples/listbox/example-without-indicator";

const ListboxExamplePage = () => (
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
          aria-labelledby="disabled-item-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="disabled-item-heading"
          >
            Disabled Item
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleDisabledItem />
          </div>
        </section>
        <section
          aria-labelledby="disabled-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="disabled-heading"
          >
            Disabled
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleDisabled />
          </div>
        </section>
        <section aria-labelledby="form-heading" className="flex flex-col gap-5">
          <h2 className="text-muted-foreground font-medium" id="form-heading">
            Form
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleForm />
          </div>
        </section>
        <section aria-labelledby="grid-heading" className="flex flex-col gap-5">
          <h2 className="text-muted-foreground font-medium" id="grid-heading">
            Grid
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleGrid />
          </div>
        </section>
        <section
          aria-labelledby="grouping-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="grouping-heading"
          >
            Grouping
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleGrouping />
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
          aria-labelledby="selection-extended-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="selection-extended-heading"
          >
            Selection Extended
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleSelectionExtended />
          </div>
        </section>
        <section
          aria-labelledby="selection-multiple-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="selection-multiple-heading"
          >
            Selection Multiple
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleSelectionMultiple />
          </div>
        </section>
        <section
          aria-labelledby="selection-none-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="selection-none-heading"
          >
            Selection None
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleSelectionNone />
          </div>
        </section>
        <section
          aria-labelledby="transfer-list-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="transfer-list-heading"
          >
            Transfer List
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleTransferList />
          </div>
        </section>
        <section
          aria-labelledby="variant-destructive-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="variant-destructive-heading"
          >
            Variant Destructive
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleVariantDestructive />
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
        <section
          aria-labelledby="with-description-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="with-description-heading"
          >
            With Description
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleWithDescription />
          </div>
        </section>
        <section
          aria-labelledby="with-field-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="with-field-heading"
          >
            With Field
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleWithField />
          </div>
        </section>
        <section
          aria-labelledby="with-filter-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="with-filter-heading"
          >
            With Filter
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleWithFilter />
          </div>
        </section>
        <section
          aria-labelledby="with-icon-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="with-icon-heading"
          >
            With Icon
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleWithIcon />
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
          aria-labelledby="without-indicator-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="without-indicator-heading"
          >
            Without Indicator
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleWithoutIndicator />
          </div>
        </section>
      </div>
    </div>
  </PreviewLocaleProvider>
);

export default ListboxExamplePage;
