import InputGroupBasic from "./_examples/input-group-basic";
import InputGroupBlockEnd from "./_examples/input-group-block-end";
import InputGroupBlockStart from "./_examples/input-group-block-start";
import InputGroupButton from "./_examples/input-group-button";
import InputGroupButtonGroup from "./_examples/input-group-button-group";
import InputGroupCustom from "./_examples/input-group-custom";
import InputGroupDropdown from "./_examples/input-group-dropdown";
import InputGroupIcon from "./_examples/input-group-icon";
import InputGroupInCard from "./_examples/input-group-in-card";
import InputGroupInlineEnd from "./_examples/input-group-inline-end";
import InputGroupInlineStart from "./_examples/input-group-inline-start";
import InputGroupKbd from "./_examples/input-group-kbd";
import InputGroupLabel from "./_examples/input-group-label";
import InputGroupRtl from "./_examples/input-group-rtl";
import InputGroupSpinner from "./_examples/input-group-spinner";
import InputGroupText from "./_examples/input-group-text";
import InputGroupTextarea from "./_examples/input-group-textarea";
import InputGroupTextareaExamples from "./_examples/input-group-textarea-examples";
import InputGroupTooltip from "./_examples/input-group-tooltip";
import InputGroupWithAddons from "./_examples/input-group-with-addons";
import InputGroupWithButtons from "./_examples/input-group-with-buttons";
import InputGroupWithKbd from "./_examples/input-group-with-kbd";
import InputGroupWithTooltip from "./_examples/input-group-with-tooltip";

const InputGroupExamplePage = () => (
  <div className="mx-auto flex w-full max-w-7xl flex-col gap-16 px-5 py-10 sm:px-8 sm:py-14 lg:px-10">
    <div className="grid min-w-0 grid-cols-1 gap-16 sm:grid-cols-2 [&>section]:min-w-0">
      <section aria-labelledby="basic-heading" className="flex flex-col gap-5">
        <h1 className="font-medium text-muted-foreground" id="basic-heading">
          Basic
        </h1>
        <div className="rounded-3xl bg-muted p-6 sm:p-10">
          <InputGroupBasic />
        </div>
      </section>

      <section
        aria-labelledby="block-end-heading"
        className="flex flex-col gap-5"
      >
        <h2
          className="font-medium text-muted-foreground"
          id="block-end-heading"
        >
          Block End
        </h2>
        <div className="rounded-3xl border bg-card p-6 sm:p-10">
          <InputGroupBlockEnd />
        </div>
      </section>

      <section
        aria-labelledby="block-start-heading"
        className="flex flex-col gap-5"
      >
        <h2
          className="font-medium text-muted-foreground"
          id="block-start-heading"
        >
          Block Start
        </h2>
        <div className="rounded-3xl bg-muted p-6 sm:p-10">
          <InputGroupBlockStart />
        </div>
      </section>

      <section aria-labelledby="button-heading" className="flex flex-col gap-5">
        <h2 className="font-medium text-muted-foreground" id="button-heading">
          Button
        </h2>
        <div className="rounded-3xl border bg-card p-6 sm:p-10">
          <InputGroupButton />
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
          <InputGroupButtonGroup />
        </div>
      </section>

      <section aria-labelledby="custom-heading" className="flex flex-col gap-5">
        <h2 className="font-medium text-muted-foreground" id="custom-heading">
          Custom
        </h2>
        <div className="rounded-3xl border bg-card p-6 sm:p-10">
          <InputGroupCustom />
        </div>
      </section>

      <section
        aria-labelledby="dropdown-heading"
        className="flex flex-col gap-5"
      >
        <h2 className="font-medium text-muted-foreground" id="dropdown-heading">
          Dropdown
        </h2>
        <div className="rounded-3xl bg-muted p-6 sm:p-10">
          <InputGroupDropdown />
        </div>
      </section>

      <section aria-labelledby="icon-heading" className="flex flex-col gap-5">
        <h2 className="font-medium text-muted-foreground" id="icon-heading">
          Icon
        </h2>
        <div className="rounded-3xl border bg-card p-6 sm:p-10">
          <InputGroupIcon />
        </div>
      </section>

      <section
        aria-labelledby="in-card-heading"
        className="flex flex-col gap-5"
      >
        <h2 className="font-medium text-muted-foreground" id="in-card-heading">
          In Card
        </h2>
        <div className="rounded-3xl bg-muted p-6 sm:p-10">
          <InputGroupInCard />
        </div>
      </section>

      <section
        aria-labelledby="inline-end-heading"
        className="flex flex-col gap-5"
      >
        <h2
          className="font-medium text-muted-foreground"
          id="inline-end-heading"
        >
          Inline End
        </h2>
        <div className="rounded-3xl border bg-card p-6 sm:p-10">
          <InputGroupInlineEnd />
        </div>
      </section>

      <section
        aria-labelledby="inline-start-heading"
        className="flex flex-col gap-5"
      >
        <h2
          className="font-medium text-muted-foreground"
          id="inline-start-heading"
        >
          Inline Start
        </h2>
        <div className="rounded-3xl bg-muted p-6 sm:p-10">
          <InputGroupInlineStart />
        </div>
      </section>

      <section aria-labelledby="kbd-heading" className="flex flex-col gap-5">
        <h2 className="font-medium text-muted-foreground" id="kbd-heading">
          Kbd
        </h2>
        <div className="rounded-3xl border bg-card p-6 sm:p-10">
          <InputGroupKbd />
        </div>
      </section>

      <section aria-labelledby="label-heading" className="flex flex-col gap-5">
        <h2 className="font-medium text-muted-foreground" id="label-heading">
          Label
        </h2>
        <div className="rounded-3xl bg-muted p-6 sm:p-10">
          <InputGroupLabel />
        </div>
      </section>

      <section aria-labelledby="rtl-heading" className="flex flex-col gap-5">
        <h2 className="font-medium text-muted-foreground" id="rtl-heading">
          RTL
        </h2>
        <div className="rounded-3xl border bg-card p-6 sm:p-10">
          <InputGroupRtl />
        </div>
      </section>

      <section
        aria-labelledby="spinner-heading"
        className="flex flex-col gap-5"
      >
        <h2 className="font-medium text-muted-foreground" id="spinner-heading">
          Spinner
        </h2>
        <div className="rounded-3xl bg-muted p-6 sm:p-10">
          <InputGroupSpinner />
        </div>
      </section>

      <section aria-labelledby="text-heading" className="flex flex-col gap-5">
        <h2 className="font-medium text-muted-foreground" id="text-heading">
          Text
        </h2>
        <div className="rounded-3xl border bg-card p-6 sm:p-10">
          <InputGroupText />
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
          <InputGroupTextarea />
        </div>
      </section>

      <section
        aria-labelledby="textarea-examples-heading"
        className="flex flex-col gap-5"
      >
        <h2
          className="font-medium text-muted-foreground"
          id="textarea-examples-heading"
        >
          Textarea Examples
        </h2>
        <div className="rounded-3xl border bg-card p-6 sm:p-10">
          <InputGroupTextareaExamples />
        </div>
      </section>

      <section
        aria-labelledby="tooltip-heading"
        className="flex flex-col gap-5"
      >
        <h2 className="font-medium text-muted-foreground" id="tooltip-heading">
          Tooltip
        </h2>
        <div className="rounded-3xl bg-muted p-6 sm:p-10">
          <InputGroupTooltip />
        </div>
      </section>

      <section
        aria-labelledby="with-addons-heading"
        className="flex flex-col gap-5"
      >
        <h2
          className="font-medium text-muted-foreground"
          id="with-addons-heading"
        >
          With Addons
        </h2>
        <div className="rounded-3xl border bg-card p-6 sm:p-10">
          <InputGroupWithAddons />
        </div>
      </section>

      <section
        aria-labelledby="with-buttons-heading"
        className="flex flex-col gap-5"
      >
        <h2
          className="font-medium text-muted-foreground"
          id="with-buttons-heading"
        >
          With Buttons
        </h2>
        <div className="rounded-3xl bg-muted p-6 sm:p-10">
          <InputGroupWithButtons />
        </div>
      </section>

      <section
        aria-labelledby="with-kbd-heading"
        className="flex flex-col gap-5"
      >
        <h2 className="font-medium text-muted-foreground" id="with-kbd-heading">
          With Kbd
        </h2>
        <div className="rounded-3xl border bg-card p-6 sm:p-10">
          <InputGroupWithKbd />
        </div>
      </section>

      <section
        aria-labelledby="with-tooltip-heading"
        className="flex flex-col gap-5"
      >
        <h2
          className="font-medium text-muted-foreground"
          id="with-tooltip-heading"
        >
          With Tooltip
        </h2>
        <div className="rounded-3xl bg-muted p-6 sm:p-10">
          <InputGroupWithTooltip />
        </div>
      </section>
    </div>
  </div>
);

export default InputGroupExamplePage;
