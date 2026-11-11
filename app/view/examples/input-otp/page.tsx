import { PreviewLocaleProvider } from "@/hooks/use-preview-locale";
import ExampleAutoSubmit from "@/registry/react/examples/input-otp/example-auto-submit";
import ExampleBlurOnComplete from "@/registry/react/examples/input-otp/example-blur-on-complete";
import ExampleControlled from "@/registry/react/examples/input-otp/example-controlled";
import ExampleCustomSize from "@/registry/react/examples/input-otp/example-custom-size";
import ExampleDefault from "@/registry/react/examples/input-otp/example-default";
import ExampleDisabled from "@/registry/react/examples/input-otp/example-disabled";
import ExampleForm from "@/registry/react/examples/input-otp/example-form";
import ExampleInvalid from "@/registry/react/examples/input-otp/example-invalid";
import ExampleMask from "@/registry/react/examples/input-otp/example-mask";
import ExampleRtl from "@/registry/react/examples/input-otp/example-rtl";
import ExampleSanitizeValue from "@/registry/react/examples/input-otp/example-sanitize-value";
import ExampleSeparator from "@/registry/react/examples/input-otp/example-separator";
import ExampleWithField from "@/registry/react/examples/input-otp/example-with-field";
import ExampleWithPlaceholder from "@/registry/react/examples/input-otp/example-with-placeholder";
import InputOtpAlphanumeric from "./_examples/input-otp-alphanumeric";
import InputOtpPattern from "./_examples/input-otp-pattern";

const InputOtpExamplePage = () => (
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
          aria-labelledby="auto-submit-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="auto-submit-heading"
          >
            Auto Submit
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleAutoSubmit />
          </div>
        </section>
        <section
          aria-labelledby="blur-on-complete-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="blur-on-complete-heading"
          >
            Blur On Complete
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleBlurOnComplete />
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
          aria-labelledby="custom-size-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="custom-size-heading"
          >
            Custom Size
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleCustomSize />
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
            Form Integration
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleForm />
          </div>
        </section>
        <section
          aria-labelledby="invalid-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="invalid-heading"
          >
            Invalid
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleInvalid />
          </div>
        </section>
        <section aria-labelledby="mask-heading" className="flex flex-col gap-5">
          <h2 className="text-muted-foreground font-medium" id="mask-heading">
            Mask
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleMask />
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
          aria-labelledby="sanitize-value-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="sanitize-value-heading"
          >
            Sanitize Value
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleSanitizeValue />
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
          aria-labelledby="with-placeholder-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="with-placeholder-heading"
          >
            With Placeholder
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleWithPlaceholder />
          </div>
        </section>
        <section
          aria-labelledby="local-alphanumeric-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="local-alphanumeric-heading"
          >
            Alphanumeric
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <InputOtpAlphanumeric />
          </div>
        </section>
        <section
          aria-labelledby="local-pattern-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="local-pattern-heading"
          >
            Pattern
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <InputOtpPattern />
          </div>
        </section>
      </div>
    </div>
  </PreviewLocaleProvider>
);

export default InputOtpExamplePage;
