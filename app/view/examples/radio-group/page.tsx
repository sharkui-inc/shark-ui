import RadioGroupChoiceCard from "./_examples/radio-group-choice-card";
import RadioGroupDemo from "./_examples/radio-group-demo";
import RadioGroupDescription from "./_examples/radio-group-description";
import RadioGroupDisabled from "./_examples/radio-group-disabled";
import RadioGroupFieldset from "./_examples/radio-group-fieldset";
import RadioGroupInvalid from "./_examples/radio-group-invalid";
import RadioGroupRtl from "./_examples/radio-group-rtl";

const RadioGroupExamplePage = () => (
  <div className="mx-auto flex w-full max-w-7xl flex-col gap-16 px-5 py-10 sm:px-8 sm:py-14 lg:px-10">
    <div className="grid gap-16 sm:grid-cols-2">
      <section aria-labelledby="demo-heading" className="flex flex-col gap-5">
        <h1 className="font-medium text-muted-foreground" id="demo-heading">
          Demo
        </h1>
        <div className="rounded-3xl bg-muted p-6 sm:p-10">
          <RadioGroupDemo />
        </div>
      </section>

      <section
        aria-labelledby="choice-card-heading"
        className="flex flex-col gap-5"
      >
        <h2
          className="font-medium text-muted-foreground"
          id="choice-card-heading"
        >
          Choice Card
        </h2>
        <div className="rounded-3xl border bg-card p-6 sm:p-10">
          <RadioGroupChoiceCard />
        </div>
      </section>

      <section
        aria-labelledby="description-heading"
        className="flex flex-col gap-5"
      >
        <h2
          className="font-medium text-muted-foreground"
          id="description-heading"
        >
          Description
        </h2>
        <div className="rounded-3xl bg-muted p-6 sm:p-10">
          <RadioGroupDescription />
        </div>
      </section>

      <section
        aria-labelledby="disabled-heading"
        className="flex flex-col gap-5"
      >
        <h2 className="font-medium text-muted-foreground" id="disabled-heading">
          Disabled
        </h2>
        <div className="rounded-3xl border bg-card p-6 sm:p-10">
          <RadioGroupDisabled />
        </div>
      </section>

      <section
        aria-labelledby="fieldset-heading"
        className="flex flex-col gap-5"
      >
        <h2 className="font-medium text-muted-foreground" id="fieldset-heading">
          Fieldset
        </h2>
        <div className="rounded-3xl bg-muted p-6 sm:p-10">
          <RadioGroupFieldset />
        </div>
      </section>

      <section
        aria-labelledby="invalid-heading"
        className="flex flex-col gap-5"
      >
        <h2 className="font-medium text-muted-foreground" id="invalid-heading">
          Invalid
        </h2>
        <div className="rounded-3xl border bg-card p-6 sm:p-10">
          <RadioGroupInvalid />
        </div>
      </section>

      <section aria-labelledby="rtl-heading" className="flex flex-col gap-5">
        <h2 className="font-medium text-muted-foreground" id="rtl-heading">
          RTL
        </h2>
        <div className="rounded-3xl bg-muted p-6 sm:p-10">
          <RadioGroupRtl />
        </div>
      </section>
    </div>
  </div>
);

export default RadioGroupExamplePage;
