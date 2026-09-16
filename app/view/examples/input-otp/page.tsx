import InputOTPAlphanumeric from "./_examples/input-otp-alphanumeric";
import InputOTPControlled from "./_examples/input-otp-controlled";
import InputOTPDemo from "./_examples/input-otp-demo";
import InputOTPDisabled from "./_examples/input-otp-disabled";
import InputOTPForm from "./_examples/input-otp-form";
import InputOTPFourDigits from "./_examples/input-otp-four-digits";
import InputOTPInvalid from "./_examples/input-otp-invalid";
import InputOTPPattern from "./_examples/input-otp-pattern";
import InputOTPRtl from "./_examples/input-otp-rtl";
import InputOTPSeparatorExample from "./_examples/input-otp-separator";

const InputOTPExamplePage = () => (
  <div className="mx-auto flex w-full max-w-7xl flex-col gap-16 px-5 py-10 sm:px-8 sm:py-14 lg:px-10">
    <div className="grid gap-16 sm:grid-cols-2">
      <section aria-labelledby="demo-heading" className="flex flex-col gap-5">
        <h1 className="font-medium text-muted-foreground" id="demo-heading">
          Demo
        </h1>
        <div className="rounded-3xl bg-muted p-6 sm:p-10">
          <InputOTPDemo />
        </div>
      </section>

      <section
        aria-labelledby="alphanumeric-heading"
        className="flex flex-col gap-5"
      >
        <h2
          className="font-medium text-muted-foreground"
          id="alphanumeric-heading"
        >
          Alphanumeric
        </h2>
        <div className="rounded-3xl border bg-card p-6 sm:p-10">
          <InputOTPAlphanumeric />
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
        <div className="rounded-3xl bg-muted p-6 sm:p-10">
          <InputOTPControlled />
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
          <InputOTPDisabled />
        </div>
      </section>

      <section aria-labelledby="form-heading" className="flex flex-col gap-5">
        <h2 className="font-medium text-muted-foreground" id="form-heading">
          Form
        </h2>
        <div className="rounded-3xl bg-muted p-6 sm:p-10">
          <InputOTPForm />
        </div>
      </section>

      <section
        aria-labelledby="four-digits-heading"
        className="flex flex-col gap-5"
      >
        <h2
          className="font-medium text-muted-foreground"
          id="four-digits-heading"
        >
          Four Digits
        </h2>
        <div className="rounded-3xl border bg-card p-6 sm:p-10">
          <InputOTPFourDigits />
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
          <InputOTPInvalid />
        </div>
      </section>

      <section
        aria-labelledby="pattern-heading"
        className="flex flex-col gap-5"
      >
        <h2 className="font-medium text-muted-foreground" id="pattern-heading">
          Pattern
        </h2>
        <div className="rounded-3xl border bg-card p-6 sm:p-10">
          <InputOTPPattern />
        </div>
      </section>

      <section aria-labelledby="rtl-heading" className="flex flex-col gap-5">
        <h2 className="font-medium text-muted-foreground" id="rtl-heading">
          RTL
        </h2>
        <div className="rounded-3xl bg-muted p-6 sm:p-10">
          <InputOTPRtl />
        </div>
      </section>

      <section
        aria-labelledby="separator-heading"
        className="flex flex-col gap-5"
      >
        <h2
          className="font-medium text-muted-foreground"
          id="separator-heading"
        >
          Separator
        </h2>
        <div className="rounded-3xl border bg-card p-6 sm:p-10">
          <InputOTPSeparatorExample />
        </div>
      </section>
    </div>
  </div>
);

export default InputOTPExamplePage;
