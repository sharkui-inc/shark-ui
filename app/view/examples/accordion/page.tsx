import AccordionBasic from "./_examples/accordion-basic";
import AccordionMultiple from "./_examples/accordion-multiple";
import AccordionWithBorders from "./_examples/accordion-with-borders";

const AccordionExamplePage = () => (
  <div className="mx-auto flex w-full max-w-7xl flex-col gap-16 px-5 py-10 sm:px-8 sm:py-14 lg:px-10">
    <section aria-labelledby="basic-heading" className="flex flex-col gap-5">
      <h1 className="font-medium text-muted-foreground" id="basic-heading">
        Basic
      </h1>
      <div className="rounded-3xl bg-muted p-6 sm:p-10">
        <AccordionBasic />
      </div>
    </section>

    <section aria-labelledby="multiple-heading" className="flex flex-col gap-5">
      <h2 className="font-medium text-muted-foreground" id="multiple-heading">
        Multiple
      </h2>
      <div className="rounded-3xl bg-muted p-6 sm:p-10">
        <AccordionMultiple />
      </div>
    </section>

    <section aria-labelledby="borders-heading" className="flex flex-col gap-5">
      <h2 className="font-medium text-muted-foreground" id="borders-heading">
        With Borders
      </h2>
      <div className="rounded-3xl border bg-card p-6 sm:p-10">
        <AccordionWithBorders />
      </div>
    </section>
  </div>
);

export default AccordionExamplePage;
