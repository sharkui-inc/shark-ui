import { PreviewLocaleProvider } from "@/hooks/use-preview-locale";
import ExampleControlled from "@/registry/react/examples/plan/example-controlled";
import ExampleCustomItemTrigger from "@/registry/react/examples/plan/example-custom-item-trigger";
import ExampleDefault from "@/registry/react/examples/plan/example-default";
import ExampleError from "@/registry/react/examples/plan/example-error";
import ExampleInProgress from "@/registry/react/examples/plan/example-in-progress";
import ExampleItemControlled from "@/registry/react/examples/plan/example-item-controlled";
import ExampleRtl from "@/registry/react/examples/plan/example-rtl";
import ExampleSingleItem from "@/registry/react/examples/plan/example-single-item";
import ExampleSuccess from "@/registry/react/examples/plan/example-success";
import ExampleWebhookRecovery from "@/registry/react/examples/plan/example-webhook-recovery";
import ExampleWithDescription from "@/registry/react/examples/plan/example-with-description";

const PlanExamplePage = () => (
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
          aria-labelledby="custom-item-trigger-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="custom-item-trigger-heading"
          >
            Custom Item Trigger
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleCustomItemTrigger />
          </div>
        </section>
        <section
          aria-labelledby="error-heading"
          className="flex flex-col gap-5"
        >
          <h2 className="text-muted-foreground font-medium" id="error-heading">
            Error
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleError />
          </div>
        </section>
        <section
          aria-labelledby="in-progress-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="in-progress-heading"
          >
            In Progress
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleInProgress />
          </div>
        </section>
        <section
          aria-labelledby="item-controlled-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="item-controlled-heading"
          >
            Item Controlled
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleItemControlled />
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
          aria-labelledby="single-item-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="single-item-heading"
          >
            Single Item
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleSingleItem />
          </div>
        </section>
        <section
          aria-labelledby="success-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="success-heading"
          >
            Success
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleSuccess />
          </div>
        </section>
        <section
          aria-labelledby="webhook-recovery-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="webhook-recovery-heading"
          >
            Webhook Recovery
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleWebhookRecovery />
          </div>
        </section>
        <section
          aria-labelledby="with-description-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="with-description-heading"
          >
            With Description
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleWithDescription />
          </div>
        </section>
      </div>
    </div>
  </PreviewLocaleProvider>
);

export default PlanExamplePage;
