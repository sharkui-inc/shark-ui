import { PreviewLocaleProvider } from "@/hooks/use-preview-locale";
import ExampleControlled from "@/registry/react/examples/questionnaire/example-controlled";
import ExampleDefault from "@/registry/react/examples/questionnaire/example-default";
import ExampleDisabled from "@/registry/react/examples/questionnaire/example-disabled";
import ExampleForm from "@/registry/react/examples/questionnaire/example-form";
import ExampleFreeform from "@/registry/react/examples/questionnaire/example-freeform";
import ExampleInvalid from "@/registry/react/examples/questionnaire/example-invalid";
import ExampleMultiple from "@/registry/react/examples/questionnaire/example-multiple";
import ExampleOptional from "@/registry/react/examples/questionnaire/example-optional";
import ExampleRtl from "@/registry/react/examples/questionnaire/example-rtl";
import ExampleShortcuts from "@/registry/react/examples/questionnaire/example-shortcuts";
import ExampleShortcutsNumbers from "@/registry/react/examples/questionnaire/example-shortcuts-numbers";
import ExampleUncontrolled from "@/registry/react/examples/questionnaire/example-uncontrolled";
import QuestionnaireAnimated from "./_examples/questionnaire-animated";
import QuestionnaireCard from "./_examples/questionnaire-card";
import QuestionnaireConditional from "./_examples/questionnaire-conditional";
import QuestionnaireDialog from "./_examples/questionnaire-dialog";
import QuestionnaireNavigationState from "./_examples/questionnaire-navigation-state";
import QuestionnaireProgress from "./_examples/questionnaire-progress";
import QuestionnaireResume from "./_examples/questionnaire-resume";
import QuestionnaireSkip from "./_examples/questionnaire-skip";
import QuestionnaireValidation from "./_examples/questionnaire-validation";

const QuestionnaireExamplePage = () => (
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
          aria-labelledby="freeform-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="freeform-heading"
          >
            Freeform
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleFreeform />
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
        <section
          aria-labelledby="multiple-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="multiple-heading"
          >
            Multiple
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleMultiple />
          </div>
        </section>
        <section
          aria-labelledby="optional-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="optional-heading"
          >
            Optional
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleOptional />
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
          aria-labelledby="shortcuts-numbers-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="shortcuts-numbers-heading"
          >
            Shortcuts Numbers
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleShortcutsNumbers />
          </div>
        </section>
        <section
          aria-labelledby="shortcuts-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="shortcuts-heading"
          >
            Shortcuts
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleShortcuts />
          </div>
        </section>
        <section
          aria-labelledby="uncontrolled-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="uncontrolled-heading"
          >
            Uncontrolled
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleUncontrolled />
          </div>
        </section>
        <section
          aria-labelledby="local-animated-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="local-animated-heading"
          >
            Animated
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <QuestionnaireAnimated />
          </div>
        </section>
        <section
          aria-labelledby="local-card-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="local-card-heading"
          >
            Card
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <QuestionnaireCard />
          </div>
        </section>
        <section
          aria-labelledby="local-conditional-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="local-conditional-heading"
          >
            Conditional
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <QuestionnaireConditional />
          </div>
        </section>
        <section
          aria-labelledby="local-dialog-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="local-dialog-heading"
          >
            Dialog
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <QuestionnaireDialog />
          </div>
        </section>
        <section
          aria-labelledby="local-navigation-state-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="local-navigation-state-heading"
          >
            Navigation State
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <QuestionnaireNavigationState />
          </div>
        </section>
        <section
          aria-labelledby="local-progress-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="local-progress-heading"
          >
            Progress
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <QuestionnaireProgress />
          </div>
        </section>
        <section
          aria-labelledby="local-resume-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="local-resume-heading"
          >
            Resume
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <QuestionnaireResume />
          </div>
        </section>
        <section
          aria-labelledby="local-skip-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="local-skip-heading"
          >
            Skip
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <QuestionnaireSkip />
          </div>
        </section>
        <section
          aria-labelledby="local-validation-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="local-validation-heading"
          >
            Validation
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <QuestionnaireValidation />
          </div>
        </section>
      </div>
    </div>
  </PreviewLocaleProvider>
);

export default QuestionnaireExamplePage;
