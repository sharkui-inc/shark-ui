import { PreviewLocaleProvider } from "@/hooks/use-preview-locale";
import ExampleAlignBlockEnd from "@/registry/react/examples/input-group/example-align-block-end";
import ExampleAlignBlockStart from "@/registry/react/examples/input-group/example-align-block-start";
import ExampleAlignInlineEnd from "@/registry/react/examples/input-group/example-align-inline-end";
import ExampleAlignInlineStart from "@/registry/react/examples/input-group/example-align-inline-start";
import ExampleCodeFile from "@/registry/react/examples/input-group/example-code-file";
import ExampleDefault from "@/registry/react/examples/input-group/example-default";
import ExampleDisabled from "@/registry/react/examples/input-group/example-disabled";
import ExampleInvalid from "@/registry/react/examples/input-group/example-invalid";
import ExamplePill from "@/registry/react/examples/input-group/example-pill";
import ExampleRtl from "@/registry/react/examples/input-group/example-rtl";
import ExampleSizeLg from "@/registry/react/examples/input-group/example-size-lg";
import ExampleSizeMd from "@/registry/react/examples/input-group/example-size-md";
import ExampleSizeSm from "@/registry/react/examples/input-group/example-size-sm";
import ExampleWithBadge from "@/registry/react/examples/input-group/example-with-badge";
import ExampleWithButton from "@/registry/react/examples/input-group/example-with-button";
import ExampleWithInnerLabel from "@/registry/react/examples/input-group/example-with-inner-label";
import ExampleWithMenu from "@/registry/react/examples/input-group/example-with-menu";
import ExampleWithNumberInput from "@/registry/react/examples/input-group/example-with-number-input";
import ExampleWithShortcut from "@/registry/react/examples/input-group/example-with-shortcut";
import ExampleWithSpinner from "@/registry/react/examples/input-group/example-with-spinner";
import ExampleWithTextarea from "@/registry/react/examples/input-group/example-with-textarea";
import ExampleWithTooltip from "@/registry/react/examples/input-group/example-with-tooltip";
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
import InputGroupSpinner from "./_examples/input-group-spinner";
import InputGroupText from "./_examples/input-group-text";
import InputGroupTextarea from "./_examples/input-group-textarea";
import InputGroupTextareaExamples from "./_examples/input-group-textarea-examples";
import InputGroupTooltip from "./_examples/input-group-tooltip";
import InputGroupWithAddons from "./_examples/input-group-with-addons";
import InputGroupWithButtons from "./_examples/input-group-with-buttons";
import InputGroupWithKbd from "./_examples/input-group-with-kbd";

const InputGroupExamplePage = () => (
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
          aria-labelledby="align-block-end-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="align-block-end-heading"
          >
            Align Block End
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleAlignBlockEnd />
          </div>
        </section>
        <section
          aria-labelledby="align-block-start-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="align-block-start-heading"
          >
            Align Block Start
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleAlignBlockStart />
          </div>
        </section>
        <section
          aria-labelledby="align-inline-end-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="align-inline-end-heading"
          >
            Align Inline End
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleAlignInlineEnd />
          </div>
        </section>
        <section
          aria-labelledby="align-inline-start-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="align-inline-start-heading"
          >
            Align Inline Start
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleAlignInlineStart />
          </div>
        </section>
        <section
          aria-labelledby="code-file-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="code-file-heading"
          >
            Code File
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleCodeFile />
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
        <section aria-labelledby="pill-heading" className="flex flex-col gap-5">
          <h2 className="text-muted-foreground font-medium" id="pill-heading">
            Pill
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExamplePill />
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
          aria-labelledby="size-lg-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="size-lg-heading"
          >
            Size LG
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleSizeLg />
          </div>
        </section>
        <section
          aria-labelledby="size-md-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="size-md-heading"
          >
            Size MD
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleSizeMd />
          </div>
        </section>
        <section
          aria-labelledby="size-sm-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="size-sm-heading"
          >
            Size SM
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleSizeSm />
          </div>
        </section>
        <section
          aria-labelledby="with-badge-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="with-badge-heading"
          >
            With Badge
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleWithBadge />
          </div>
        </section>
        <section
          aria-labelledby="with-button-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="with-button-heading"
          >
            With Button
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleWithButton />
          </div>
        </section>
        <section
          aria-labelledby="with-inner-label-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="with-inner-label-heading"
          >
            With Inner Label
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleWithInnerLabel />
          </div>
        </section>
        <section
          aria-labelledby="with-menu-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="with-menu-heading"
          >
            With Menu
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleWithMenu />
          </div>
        </section>
        <section
          aria-labelledby="with-number-input-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="with-number-input-heading"
          >
            With Number Input
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleWithNumberInput />
          </div>
        </section>
        <section
          aria-labelledby="with-shortcut-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="with-shortcut-heading"
          >
            With Shortcut
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleWithShortcut />
          </div>
        </section>
        <section
          aria-labelledby="with-spinner-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="with-spinner-heading"
          >
            With Spinner
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleWithSpinner />
          </div>
        </section>
        <section
          aria-labelledby="with-textarea-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="with-textarea-heading"
          >
            With Textarea
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleWithTextarea />
          </div>
        </section>
        <section
          aria-labelledby="with-tooltip-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="with-tooltip-heading"
          >
            With Tooltip
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleWithTooltip />
          </div>
        </section>
        <section
          aria-labelledby="local-block-end-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="local-block-end-heading"
          >
            Block End
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <InputGroupBlockEnd />
          </div>
        </section>
        <section
          aria-labelledby="local-block-start-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="local-block-start-heading"
          >
            Block Start
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <InputGroupBlockStart />
          </div>
        </section>
        <section
          aria-labelledby="local-button-group-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="local-button-group-heading"
          >
            Button Group
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <InputGroupButtonGroup />
          </div>
        </section>
        <section
          aria-labelledby="local-button-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="local-button-heading"
          >
            Button
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <InputGroupButton />
          </div>
        </section>
        <section
          aria-labelledby="local-custom-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="local-custom-heading"
          >
            Custom
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <InputGroupCustom />
          </div>
        </section>
        <section
          aria-labelledby="local-dropdown-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="local-dropdown-heading"
          >
            Dropdown
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <InputGroupDropdown />
          </div>
        </section>
        <section
          aria-labelledby="local-icon-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="local-icon-heading"
          >
            Icon
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <InputGroupIcon />
          </div>
        </section>
        <section
          aria-labelledby="local-in-card-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="local-in-card-heading"
          >
            In Card
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <InputGroupInCard />
          </div>
        </section>
        <section
          aria-labelledby="local-inline-end-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="local-inline-end-heading"
          >
            Inline End
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <InputGroupInlineEnd />
          </div>
        </section>
        <section
          aria-labelledby="local-inline-start-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="local-inline-start-heading"
          >
            Inline Start
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <InputGroupInlineStart />
          </div>
        </section>
        <section
          aria-labelledby="local-kbd-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="local-kbd-heading"
          >
            Kbd
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <InputGroupKbd />
          </div>
        </section>
        <section
          aria-labelledby="local-label-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="local-label-heading"
          >
            Label
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <InputGroupLabel />
          </div>
        </section>
        <section
          aria-labelledby="local-spinner-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="local-spinner-heading"
          >
            Spinner
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <InputGroupSpinner />
          </div>
        </section>
        <section
          aria-labelledby="local-text-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="local-text-heading"
          >
            Text
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <InputGroupText />
          </div>
        </section>
        <section
          aria-labelledby="local-textarea-examples-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="local-textarea-examples-heading"
          >
            Textarea Examples
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <InputGroupTextareaExamples />
          </div>
        </section>
        <section
          aria-labelledby="local-textarea-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="local-textarea-heading"
          >
            Textarea
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <InputGroupTextarea />
          </div>
        </section>
        <section
          aria-labelledby="local-tooltip-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="local-tooltip-heading"
          >
            Tooltip
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <InputGroupTooltip />
          </div>
        </section>
        <section
          aria-labelledby="local-with-addons-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="local-with-addons-heading"
          >
            With Addons
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <InputGroupWithAddons />
          </div>
        </section>
        <section
          aria-labelledby="local-with-buttons-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="local-with-buttons-heading"
          >
            With Buttons
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <InputGroupWithButtons />
          </div>
        </section>
        <section
          aria-labelledby="local-with-kbd-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="local-with-kbd-heading"
          >
            With Kbd
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <InputGroupWithKbd />
          </div>
        </section>
      </div>
    </div>
  </PreviewLocaleProvider>
);

export default InputGroupExamplePage;
