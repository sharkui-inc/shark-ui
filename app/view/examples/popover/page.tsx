import PopoverAlignments from "./_examples/popover-alignments";
import PopoverBasic from "./_examples/popover-basic";
import PopoverDemo from "./_examples/popover-demo";
import PopoverForm from "./_examples/popover-form";
import PopoverRtl from "./_examples/popover-rtl";

const PopoverExamplePage = () => (
  <div className="mx-auto flex w-full max-w-7xl flex-col gap-16 px-5 py-10 sm:px-8 sm:py-14 lg:px-10">
    <div className="grid min-w-0 grid-cols-1 gap-16 sm:grid-cols-2 [&>section]:min-w-0">
      <section aria-labelledby="demo-heading" className="flex flex-col gap-5">
        <h1 className="text-muted-foreground font-medium" id="demo-heading">
          Demo
        </h1>
        <div className="bg-muted rounded-3xl p-6 sm:p-10">
          <PopoverDemo />
        </div>
      </section>

      <section
        aria-labelledby="alignments-heading"
        className="flex flex-col gap-5"
      >
        <h2
          className="text-muted-foreground font-medium"
          id="alignments-heading"
        >
          Alignments
        </h2>
        <div className="bg-card rounded-3xl border p-6 sm:p-10">
          <PopoverAlignments />
        </div>
      </section>

      <section aria-labelledby="basic-heading" className="flex flex-col gap-5">
        <h2 className="text-muted-foreground font-medium" id="basic-heading">
          Basic
        </h2>
        <div className="bg-muted rounded-3xl p-6 sm:p-10">
          <PopoverBasic />
        </div>
      </section>

      <section aria-labelledby="form-heading" className="flex flex-col gap-5">
        <h2 className="text-muted-foreground font-medium" id="form-heading">
          Form
        </h2>
        <div className="bg-card rounded-3xl border p-6 sm:p-10">
          <PopoverForm />
        </div>
      </section>

      <section aria-labelledby="rtl-heading" className="flex flex-col gap-5">
        <h2 className="text-muted-foreground font-medium" id="rtl-heading">
          RTL
        </h2>
        <div className="bg-muted rounded-3xl p-6 sm:p-10">
          <PopoverRtl />
        </div>
      </section>
    </div>
  </div>
);

export default PopoverExamplePage;
