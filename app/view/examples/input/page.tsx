import InputBadge from "./_examples/input-badge";
import InputBasic from "./_examples/input-basic";
import InputButtonGroup from "./_examples/input-button-group";
import InputDisabled from "./_examples/input-disabled";
import InputField from "./_examples/input-field";
import InputFieldGroup from "./_examples/input-fieldgroup";
import InputFile from "./_examples/input-file";
import InputForm from "./_examples/input-form";
import InputGrid from "./_examples/input-grid";
import InputInline from "./_examples/input-inline";
import InputInputGroup from "./_examples/input-input-group";
import InputInvalid from "./_examples/input-invalid";
import InputRequired from "./_examples/input-required";
import InputRtl from "./_examples/input-rtl";

const InputExamplePage = () => (
  <div className="mx-auto flex w-full max-w-7xl flex-col gap-16 px-5 py-10 sm:px-8 sm:py-14 lg:px-10">
    <div className="grid gap-16 sm:grid-cols-2">
      <section aria-labelledby="basic-heading" className="flex flex-col gap-5">
        <h1 className="font-medium text-muted-foreground" id="basic-heading">
          Basic
        </h1>
        <div className="rounded-3xl bg-muted p-6 sm:p-10">
          <InputBasic />
        </div>
      </section>

      <section aria-labelledby="badge-heading" className="flex flex-col gap-5">
        <h2 className="font-medium text-muted-foreground" id="badge-heading">
          Badge
        </h2>
        <div className="rounded-3xl border bg-card p-6 sm:p-10">
          <InputBadge />
        </div>
      </section>

      <section
        aria-labelledby="button-group-heading"
        className="flex flex-col gap-5"
      >
        <h2
          className="font-medium text-muted-foreground"
          id="button-group-heading"
        >
          Button Group
        </h2>
        <div className="rounded-3xl bg-muted p-6 sm:p-10">
          <InputButtonGroup />
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
          <InputDisabled />
        </div>
      </section>

      <section aria-labelledby="field-heading" className="flex flex-col gap-5">
        <h2 className="font-medium text-muted-foreground" id="field-heading">
          Field
        </h2>
        <div className="rounded-3xl bg-muted p-6 sm:p-10">
          <InputField />
        </div>
      </section>

      <section
        aria-labelledby="field-group-heading"
        className="flex flex-col gap-5"
      >
        <h2
          className="font-medium text-muted-foreground"
          id="field-group-heading"
        >
          Field Group
        </h2>
        <div className="rounded-3xl border bg-card p-6 sm:p-10">
          <InputFieldGroup />
        </div>
      </section>

      <section aria-labelledby="file-heading" className="flex flex-col gap-5">
        <h2 className="font-medium text-muted-foreground" id="file-heading">
          File
        </h2>
        <div className="rounded-3xl bg-muted p-6 sm:p-10">
          <InputFile />
        </div>
      </section>

      <section aria-labelledby="form-heading" className="flex flex-col gap-5">
        <h2 className="font-medium text-muted-foreground" id="form-heading">
          Form
        </h2>
        <div className="rounded-3xl border bg-card p-6 sm:p-10">
          <InputForm />
        </div>
      </section>

      <section aria-labelledby="grid-heading" className="flex flex-col gap-5">
        <h2 className="font-medium text-muted-foreground" id="grid-heading">
          Grid
        </h2>
        <div className="rounded-3xl bg-muted p-6 sm:p-10">
          <InputGrid />
        </div>
      </section>

      <section aria-labelledby="inline-heading" className="flex flex-col gap-5">
        <h2 className="font-medium text-muted-foreground" id="inline-heading">
          Inline
        </h2>
        <div className="rounded-3xl border bg-card p-6 sm:p-10">
          <InputInline />
        </div>
      </section>

      <section
        aria-labelledby="input-group-heading"
        className="flex flex-col gap-5"
      >
        <h2
          className="font-medium text-muted-foreground"
          id="input-group-heading"
        >
          Input Group
        </h2>
        <div className="rounded-3xl bg-muted p-6 sm:p-10">
          <InputInputGroup />
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
          <InputInvalid />
        </div>
      </section>

      <section
        aria-labelledby="required-heading"
        className="flex flex-col gap-5"
      >
        <h2 className="font-medium text-muted-foreground" id="required-heading">
          Required
        </h2>
        <div className="rounded-3xl bg-muted p-6 sm:p-10">
          <InputRequired />
        </div>
      </section>

      <section aria-labelledby="rtl-heading" className="flex flex-col gap-5">
        <h2 className="font-medium text-muted-foreground" id="rtl-heading">
          RTL
        </h2>
        <div className="rounded-3xl border bg-card p-6 sm:p-10">
          <InputRtl />
        </div>
      </section>
    </div>
  </div>
);

export default InputExamplePage;
