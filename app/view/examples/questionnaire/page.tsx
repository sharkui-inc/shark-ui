import QuestionnaireAnimated from "./_examples/questionnaire-animated";
import QuestionnaireCard from "./_examples/questionnaire-card";
import QuestionnaireConditional from "./_examples/questionnaire-conditional";
import QuestionnaireControlled from "./_examples/questionnaire-controlled";
import QuestionnaireDemo from "./_examples/questionnaire-demo";
import QuestionnaireDialog from "./_examples/questionnaire-dialog";
import QuestionnaireFreeform from "./_examples/questionnaire-freeform";
import QuestionnaireMultiple from "./_examples/questionnaire-multiple";
import QuestionnaireNavigationState from "./_examples/questionnaire-navigation-state";
import QuestionnaireProgressExample from "./_examples/questionnaire-progress";
import QuestionnaireResume from "./_examples/questionnaire-resume";
import QuestionnaireShortcuts from "./_examples/questionnaire-shortcuts";
import QuestionnaireSkipExample from "./_examples/questionnaire-skip";
import QuestionnaireValidation from "./_examples/questionnaire-validation";

const QuestionnaireExamplePage = () => (
  <div className="mx-auto flex w-full max-w-7xl flex-col gap-16 px-5 py-10 sm:px-8 sm:py-14 lg:px-10">
    <div className="grid min-w-0 grid-cols-1 gap-16 sm:grid-cols-2 [&>section]:min-w-0">
      <section aria-labelledby="demo-heading" className="flex flex-col gap-5">
        <h1 className="font-medium text-muted-foreground" id="demo-heading">
          Demo
        </h1>
        <div className="rounded-3xl bg-muted p-6 sm:p-10">
          <QuestionnaireDemo />
        </div>
      </section>

      <section
        aria-labelledby="animated-heading"
        className="flex flex-col gap-5"
      >
        <h2 className="font-medium text-muted-foreground" id="animated-heading">
          Animated
        </h2>
        <div className="rounded-3xl border bg-card p-6 sm:p-10">
          <QuestionnaireAnimated />
        </div>
      </section>

      <section aria-labelledby="card-heading" className="flex flex-col gap-5">
        <h2 className="font-medium text-muted-foreground" id="card-heading">
          Card
        </h2>
        <div className="rounded-3xl bg-muted p-6 sm:p-10">
          <QuestionnaireCard />
        </div>
      </section>

      <section
        aria-labelledby="conditional-heading"
        className="flex flex-col gap-5"
      >
        <h2
          className="font-medium text-muted-foreground"
          id="conditional-heading"
        >
          Conditional
        </h2>
        <div className="rounded-3xl border bg-card p-6 sm:p-10">
          <QuestionnaireConditional />
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
          <QuestionnaireControlled />
        </div>
      </section>

      <section aria-labelledby="dialog-heading" className="flex flex-col gap-5">
        <h2 className="font-medium text-muted-foreground" id="dialog-heading">
          Dialog
        </h2>
        <div className="rounded-3xl border bg-card p-6 sm:p-10">
          <QuestionnaireDialog />
        </div>
      </section>

      <section
        aria-labelledby="freeform-heading"
        className="flex flex-col gap-5"
      >
        <h2 className="font-medium text-muted-foreground" id="freeform-heading">
          Freeform
        </h2>
        <div className="rounded-3xl bg-muted p-6 sm:p-10">
          <QuestionnaireFreeform />
        </div>
      </section>

      <section
        aria-labelledby="multiple-heading"
        className="flex flex-col gap-5"
      >
        <h2 className="font-medium text-muted-foreground" id="multiple-heading">
          Multiple
        </h2>
        <div className="rounded-3xl border bg-card p-6 sm:p-10">
          <QuestionnaireMultiple />
        </div>
      </section>

      <section
        aria-labelledby="navigation-state-heading"
        className="flex flex-col gap-5"
      >
        <h2
          className="font-medium text-muted-foreground"
          id="navigation-state-heading"
        >
          Navigation State
        </h2>
        <div className="rounded-3xl bg-muted p-6 sm:p-10">
          <QuestionnaireNavigationState />
        </div>
      </section>

      <section
        aria-labelledby="progress-heading"
        className="flex flex-col gap-5"
      >
        <h2 className="font-medium text-muted-foreground" id="progress-heading">
          Progress
        </h2>
        <div className="rounded-3xl border bg-card p-6 sm:p-10">
          <QuestionnaireProgressExample />
        </div>
      </section>

      <section aria-labelledby="resume-heading" className="flex flex-col gap-5">
        <h2 className="font-medium text-muted-foreground" id="resume-heading">
          Resume
        </h2>
        <div className="rounded-3xl bg-muted p-6 sm:p-10">
          <QuestionnaireResume />
        </div>
      </section>

      <section
        aria-labelledby="shortcuts-heading"
        className="flex flex-col gap-5"
      >
        <h2
          className="font-medium text-muted-foreground"
          id="shortcuts-heading"
        >
          Shortcuts
        </h2>
        <div className="rounded-3xl border bg-card p-6 sm:p-10">
          <QuestionnaireShortcuts />
        </div>
      </section>

      <section aria-labelledby="skip-heading" className="flex flex-col gap-5">
        <h2 className="font-medium text-muted-foreground" id="skip-heading">
          Skip
        </h2>
        <div className="rounded-3xl bg-muted p-6 sm:p-10">
          <QuestionnaireSkipExample />
        </div>
      </section>

      <section
        aria-labelledby="validation-heading"
        className="flex flex-col gap-5"
      >
        <h2
          className="font-medium text-muted-foreground"
          id="validation-heading"
        >
          Validation
        </h2>
        <div className="rounded-3xl border bg-card p-6 sm:p-10">
          <QuestionnaireValidation />
        </div>
      </section>
    </div>
  </div>
);

export default QuestionnaireExamplePage;
