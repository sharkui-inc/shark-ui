import { PreviewLocaleProvider } from "@/hooks/use-preview-locale";
import ExampleBlurBehavior from "@/registry/react/examples/tags-input/example-blur-behavior";
import ExampleCombobox from "@/registry/react/examples/tags-input/example-combobox";
import ExampleControlled from "@/registry/react/examples/tags-input/example-controlled";
import ExampleControlledInputValue from "@/registry/react/examples/tags-input/example-controlled-input-value";
import ExampleCustomDelimiter from "@/registry/react/examples/tags-input/example-custom-delimiter";
import ExampleDefault from "@/registry/react/examples/tags-input/example-default";
import ExampleDisableEditing from "@/registry/react/examples/tags-input/example-disable-editing";
import ExampleDisabled from "@/registry/react/examples/tags-input/example-disabled";
import ExampleField from "@/registry/react/examples/tags-input/example-field";
import ExampleInvalid from "@/registry/react/examples/tags-input/example-invalid";
import ExampleMaxLength from "@/registry/react/examples/tags-input/example-max-length";
import ExampleMaxTags from "@/registry/react/examples/tags-input/example-max-tags";
import ExampleMaxWithOverflow from "@/registry/react/examples/tags-input/example-max-with-overflow";
import ExamplePasteBehavior from "@/registry/react/examples/tags-input/example-paste-behavior";
import ExamplePill from "@/registry/react/examples/tags-input/example-pill";
import ExampleRtl from "@/registry/react/examples/tags-input/example-rtl";
import ExampleSanitizeValue from "@/registry/react/examples/tags-input/example-sanitize-value";
import ExampleSizeLg from "@/registry/react/examples/tags-input/example-size-lg";
import ExampleSizeMd from "@/registry/react/examples/tags-input/example-size-md";
import ExampleSizeSm from "@/registry/react/examples/tags-input/example-size-sm";
import ExampleValidation from "@/registry/react/examples/tags-input/example-validation";

const TagsInputExamplePage = () => (
  <PreviewLocaleProvider>
    <div className="mx-auto flex w-full max-w-7xl flex-col gap-16 px-5 py-10 sm:px-8 sm:py-14 lg:px-10">
      <div className="grid gap-16 sm:grid-cols-2">
        <section
          aria-labelledby="default-heading"
          className="flex flex-col gap-5"
        >
          <h1
            className="font-medium text-muted-foreground"
            id="default-heading"
          >
            Default
          </h1>
          <div className="rounded-3xl bg-muted p-6 sm:p-10">
            <ExampleDefault />
          </div>
        </section>
        <section
          aria-labelledby="blur-behavior-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="font-medium text-muted-foreground"
            id="blur-behavior-heading"
          >
            Blur Behavior
          </h2>
          <div className="rounded-3xl border bg-card p-6 sm:p-10">
            <ExampleBlurBehavior />
          </div>
        </section>
        <section
          aria-labelledby="combobox-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="font-medium text-muted-foreground"
            id="combobox-heading"
          >
            Combobox
          </h2>
          <div className="rounded-3xl bg-muted p-6 sm:p-10">
            <ExampleCombobox />
          </div>
        </section>
        <section
          aria-labelledby="controlled-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="font-medium text-muted-foreground"
            id="controlled-heading"
          >
            Controlled
          </h2>
          <div className="rounded-3xl border bg-card p-6 sm:p-10">
            <ExampleControlled />
          </div>
        </section>
        <section
          aria-labelledby="controlled-input-value-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="font-medium text-muted-foreground"
            id="controlled-input-value-heading"
          >
            Controlled Input Value
          </h2>
          <div className="rounded-3xl bg-muted p-6 sm:p-10">
            <ExampleControlledInputValue />
          </div>
        </section>
        <section
          aria-labelledby="custom-delimiter-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="font-medium text-muted-foreground"
            id="custom-delimiter-heading"
          >
            Custom Delimiter
          </h2>
          <div className="rounded-3xl border bg-card p-6 sm:p-10">
            <ExampleCustomDelimiter />
          </div>
        </section>
        <section
          aria-labelledby="disable-editing-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="font-medium text-muted-foreground"
            id="disable-editing-heading"
          >
            Disable Editing
          </h2>
          <div className="rounded-3xl bg-muted p-6 sm:p-10">
            <ExampleDisableEditing />
          </div>
        </section>
        <section
          aria-labelledby="disabled-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="font-medium text-muted-foreground"
            id="disabled-heading"
          >
            Disabled
          </h2>
          <div className="rounded-3xl border bg-card p-6 sm:p-10">
            <ExampleDisabled />
          </div>
        </section>
        <section
          aria-labelledby="field-heading"
          className="flex flex-col gap-5"
        >
          <h2 className="font-medium text-muted-foreground" id="field-heading">
            Field
          </h2>
          <div className="rounded-3xl bg-muted p-6 sm:p-10">
            <ExampleField />
          </div>
        </section>
        <section
          aria-labelledby="invalid-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="font-medium text-muted-foreground"
            id="invalid-heading"
          >
            Invalid
          </h2>
          <div className="rounded-3xl border bg-card p-6 sm:p-10">
            <ExampleInvalid />
          </div>
        </section>
        <section
          aria-labelledby="max-length-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="font-medium text-muted-foreground"
            id="max-length-heading"
          >
            Max Length
          </h2>
          <div className="rounded-3xl bg-muted p-6 sm:p-10">
            <ExampleMaxLength />
          </div>
        </section>
        <section
          aria-labelledby="max-tags-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="font-medium text-muted-foreground"
            id="max-tags-heading"
          >
            Max Tags
          </h2>
          <div className="rounded-3xl border bg-card p-6 sm:p-10">
            <ExampleMaxTags />
          </div>
        </section>
        <section
          aria-labelledby="max-with-overflow-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="font-medium text-muted-foreground"
            id="max-with-overflow-heading"
          >
            Max With Overflow
          </h2>
          <div className="rounded-3xl bg-muted p-6 sm:p-10">
            <ExampleMaxWithOverflow />
          </div>
        </section>
        <section
          aria-labelledby="paste-behavior-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="font-medium text-muted-foreground"
            id="paste-behavior-heading"
          >
            Paste Behavior
          </h2>
          <div className="rounded-3xl border bg-card p-6 sm:p-10">
            <ExamplePasteBehavior />
          </div>
        </section>
        <section aria-labelledby="pill-heading" className="flex flex-col gap-5">
          <h2 className="font-medium text-muted-foreground" id="pill-heading">
            Pill
          </h2>
          <div className="rounded-3xl bg-muted p-6 sm:p-10">
            <ExamplePill />
          </div>
        </section>
        <section aria-labelledby="rtl-heading" className="flex flex-col gap-5">
          <h2 className="font-medium text-muted-foreground" id="rtl-heading">
            RTL
          </h2>
          <div className="rounded-3xl border bg-card p-6 sm:p-10">
            <ExampleRtl />
          </div>
        </section>
        <section
          aria-labelledby="sanitize-value-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="font-medium text-muted-foreground"
            id="sanitize-value-heading"
          >
            Sanitize Value
          </h2>
          <div className="rounded-3xl bg-muted p-6 sm:p-10">
            <ExampleSanitizeValue />
          </div>
        </section>
        <section
          aria-labelledby="size-lg-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="font-medium text-muted-foreground"
            id="size-lg-heading"
          >
            Size LG
          </h2>
          <div className="rounded-3xl border bg-card p-6 sm:p-10">
            <ExampleSizeLg />
          </div>
        </section>
        <section
          aria-labelledby="size-md-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="font-medium text-muted-foreground"
            id="size-md-heading"
          >
            Size MD
          </h2>
          <div className="rounded-3xl bg-muted p-6 sm:p-10">
            <ExampleSizeMd />
          </div>
        </section>
        <section
          aria-labelledby="size-sm-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="font-medium text-muted-foreground"
            id="size-sm-heading"
          >
            Size SM
          </h2>
          <div className="rounded-3xl border bg-card p-6 sm:p-10">
            <ExampleSizeSm />
          </div>
        </section>
        <section
          aria-labelledby="validation-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="font-medium text-muted-foreground"
            id="validation-heading"
          >
            Validation
          </h2>
          <div className="rounded-3xl bg-muted p-6 sm:p-10">
            <ExampleValidation />
          </div>
        </section>
      </div>
    </div>
  </PreviewLocaleProvider>
);

export default TagsInputExamplePage;
