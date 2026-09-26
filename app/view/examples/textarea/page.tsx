import TextareaButton from "./_examples/textarea-button";
import TextareaDemo from "./_examples/textarea-demo";
import TextareaDisabled from "./_examples/textarea-disabled";
import TextareaField from "./_examples/textarea-field";
import TextareaInvalid from "./_examples/textarea-invalid";
import TextareaRtl from "./_examples/textarea-rtl";

const TextareaExamplePage = () => (
  <div className="mx-auto flex w-full max-w-7xl flex-col gap-16 px-5 py-10 sm:px-8 sm:py-14 lg:px-10">
    <div className="grid min-w-0 grid-cols-1 gap-16 sm:grid-cols-2 [&>section]:min-w-0">
      <section aria-labelledby="demo-heading" className="flex flex-col gap-5">
        <h1 className="font-medium text-muted-foreground" id="demo-heading">
          Demo
        </h1>
        <div className="rounded-3xl bg-muted p-6 sm:p-10">
          <TextareaDemo />
        </div>
      </section>

      <section aria-labelledby="button-heading" className="flex flex-col gap-5">
        <h2 className="font-medium text-muted-foreground" id="button-heading">
          Button
        </h2>
        <div className="rounded-3xl border bg-card p-6 sm:p-10">
          <TextareaButton />
        </div>
      </section>

      <section
        aria-labelledby="disabled-heading"
        className="flex flex-col gap-5"
      >
        <h2 className="font-medium text-muted-foreground" id="disabled-heading">
          Disabled
        </h2>
        <div className="rounded-3xl bg-muted p-6 sm:p-10">
          <TextareaDisabled />
        </div>
      </section>

      <section aria-labelledby="field-heading" className="flex flex-col gap-5">
        <h2 className="font-medium text-muted-foreground" id="field-heading">
          Field
        </h2>
        <div className="rounded-3xl border bg-card p-6 sm:p-10">
          <TextareaField />
        </div>
      </section>

      <section
        aria-labelledby="invalid-heading"
        className="flex flex-col gap-5"
      >
        <h2 className="font-medium text-muted-foreground" id="invalid-heading">
          Invalid
        </h2>
        <div className="rounded-3xl bg-muted p-6 sm:p-10">
          <TextareaInvalid />
        </div>
      </section>

      <section aria-labelledby="rtl-heading" className="flex flex-col gap-5">
        <h2 className="font-medium text-muted-foreground" id="rtl-heading">
          RTL
        </h2>
        <div className="rounded-3xl border bg-card p-6 sm:p-10">
          <TextareaRtl />
        </div>
      </section>
    </div>
  </div>
);

export default TextareaExamplePage;
