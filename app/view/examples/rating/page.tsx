import { PreviewLocaleProvider } from "@/hooks/use-preview-locale";
import ExampleControlled from "@/registry/react/examples/rating/example-controlled";
import ExampleCount from "@/registry/react/examples/rating/example-count";
import ExampleCustomColor from "@/registry/react/examples/rating/example-custom-color";
import ExampleCustomIcon from "@/registry/react/examples/rating/example-custom-icon";
import ExampleCustomSize from "@/registry/react/examples/rating/example-custom-size";
import ExampleDefault from "@/registry/react/examples/rating/example-default";
import ExampleDisabled from "@/registry/react/examples/rating/example-disabled";
import ExampleForm from "@/registry/react/examples/rating/example-form";
import ExampleHalfStar from "@/registry/react/examples/rating/example-half-star";
import ExampleReadOnly from "@/registry/react/examples/rating/example-read-only";
import ExampleRtl from "@/registry/react/examples/rating/example-rtl";
import ExampleTestimonial from "@/registry/react/examples/rating/example-testimonial";
import ExampleWithField from "@/registry/react/examples/rating/example-with-field";

const RatingExamplePage = () => (
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
          aria-labelledby="count-heading"
          className="flex flex-col gap-5"
        >
          <h2 className="text-muted-foreground font-medium" id="count-heading">
            Count
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleCount />
          </div>
        </section>
        <section
          aria-labelledby="custom-color-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="custom-color-heading"
          >
            Custom Color
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleCustomColor />
          </div>
        </section>
        <section
          aria-labelledby="custom-icon-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="custom-icon-heading"
          >
            Custom Icon
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleCustomIcon />
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
          aria-labelledby="half-star-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="half-star-heading"
          >
            Half Star
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleHalfStar />
          </div>
        </section>
        <section
          aria-labelledby="read-only-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="read-only-heading"
          >
            Read-only
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleReadOnly />
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
          aria-labelledby="testimonial-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="testimonial-heading"
          >
            Testimonial
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleTestimonial />
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
      </div>
    </div>
  </PreviewLocaleProvider>
);

export default RatingExamplePage;
