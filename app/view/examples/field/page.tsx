import FieldCheckbox from "./_examples/field-checkbox";
import FieldChoiceCard from "./_examples/field-choice-card";
import FieldDemo from "./_examples/field-demo";
import FieldFieldset from "./_examples/field-fieldset";
import FieldGroupExample from "./_examples/field-group";
import FieldInput from "./_examples/field-input";
import FieldRadio from "./_examples/field-radio";
import FieldResponsive from "./_examples/field-responsive";
import FieldRtl from "./_examples/field-rtl";
import FieldSelect from "./_examples/field-select";
import FieldSlider from "./_examples/field-slider";
import FieldSwitch from "./_examples/field-switch";
import FieldTextarea from "./_examples/field-textarea";

const FieldExamplePage = () => (
  <div className="mx-auto flex w-full max-w-7xl flex-col gap-16 px-5 py-10 sm:px-8 sm:py-14 lg:px-10">
    <div className="grid min-w-0 grid-cols-1 gap-16 sm:grid-cols-2 [&>section]:min-w-0">
      <section aria-labelledby="demo-heading" className="flex flex-col gap-5">
        <h1 className="font-medium text-muted-foreground" id="demo-heading">
          Demo
        </h1>
        <div className="rounded-3xl bg-muted p-6 sm:p-10">
          <FieldDemo />
        </div>
      </section>

      <section
        aria-labelledby="checkbox-heading"
        className="flex flex-col gap-5"
      >
        <h2 className="font-medium text-muted-foreground" id="checkbox-heading">
          Checkbox
        </h2>
        <div className="rounded-3xl border bg-card p-6 sm:p-10">
          <FieldCheckbox />
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
        <div className="rounded-3xl bg-muted p-6 sm:p-10">
          <FieldChoiceCard />
        </div>
      </section>

      <section
        aria-labelledby="fieldset-heading"
        className="flex flex-col gap-5"
      >
        <h2 className="font-medium text-muted-foreground" id="fieldset-heading">
          Fieldset
        </h2>
        <div className="rounded-3xl border bg-card p-6 sm:p-10">
          <FieldFieldset />
        </div>
      </section>

      <section aria-labelledby="group-heading" className="flex flex-col gap-5">
        <h2 className="font-medium text-muted-foreground" id="group-heading">
          Group
        </h2>
        <div className="rounded-3xl bg-muted p-6 sm:p-10">
          <FieldGroupExample />
        </div>
      </section>

      <section aria-labelledby="input-heading" className="flex flex-col gap-5">
        <h2 className="font-medium text-muted-foreground" id="input-heading">
          Input
        </h2>
        <div className="rounded-3xl border bg-card p-6 sm:p-10">
          <FieldInput />
        </div>
      </section>

      <section aria-labelledby="radio-heading" className="flex flex-col gap-5">
        <h2 className="font-medium text-muted-foreground" id="radio-heading">
          Radio
        </h2>
        <div className="rounded-3xl bg-muted p-6 sm:p-10">
          <FieldRadio />
        </div>
      </section>

      <section
        aria-labelledby="responsive-heading"
        className="flex flex-col gap-5"
      >
        <h2
          className="font-medium text-muted-foreground"
          id="responsive-heading"
        >
          Responsive
        </h2>
        <div className="rounded-3xl border bg-card p-6 sm:p-10">
          <FieldResponsive />
        </div>
      </section>

      <section aria-labelledby="rtl-heading" className="flex flex-col gap-5">
        <h2 className="font-medium text-muted-foreground" id="rtl-heading">
          RTL
        </h2>
        <div className="rounded-3xl bg-muted p-6 sm:p-10">
          <FieldRtl />
        </div>
      </section>

      <section aria-labelledby="select-heading" className="flex flex-col gap-5">
        <h2 className="font-medium text-muted-foreground" id="select-heading">
          Select
        </h2>
        <div className="rounded-3xl border bg-card p-6 sm:p-10">
          <FieldSelect />
        </div>
      </section>

      <section aria-labelledby="slider-heading" className="flex flex-col gap-5">
        <h2 className="font-medium text-muted-foreground" id="slider-heading">
          Slider
        </h2>
        <div className="rounded-3xl bg-muted p-6 sm:p-10">
          <FieldSlider />
        </div>
      </section>

      <section aria-labelledby="switch-heading" className="flex flex-col gap-5">
        <h2 className="font-medium text-muted-foreground" id="switch-heading">
          Switch
        </h2>
        <div className="rounded-3xl border bg-card p-6 sm:p-10">
          <FieldSwitch />
        </div>
      </section>

      <section
        aria-labelledby="textarea-heading"
        className="flex flex-col gap-5"
      >
        <h2 className="font-medium text-muted-foreground" id="textarea-heading">
          Textarea
        </h2>
        <div className="rounded-3xl bg-muted p-6 sm:p-10">
          <FieldTextarea />
        </div>
      </section>
    </div>
  </div>
);

export default FieldExamplePage;
