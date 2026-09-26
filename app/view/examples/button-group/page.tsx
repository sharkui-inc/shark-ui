import ButtonGroupBasic from "./_examples/button-group-basic";
import ButtonGroupDropdownMenu from "./_examples/button-group-dropdown-menu";
import ButtonGroupInput from "./_examples/button-group-input";
import ButtonGroupInputGroup from "./_examples/button-group-input-group";
import ButtonGroupNested from "./_examples/button-group-nested";
import ButtonGroupOrientation from "./_examples/button-group-orientation";
import ButtonGroupPopover from "./_examples/button-group-popover";
import ButtonGroupRtl from "./_examples/button-group-rtl";
import ButtonGroupSelect from "./_examples/button-group-select";
import ButtonGroupSeparatorExample from "./_examples/button-group-separator";
import ButtonGroupSize from "./_examples/button-group-size";
import ButtonGroupSplit from "./_examples/button-group-split";

const ButtonGroupExamplePage = () => (
  <div className="mx-auto flex w-full max-w-7xl flex-col gap-16 px-5 py-10 sm:px-8 sm:py-14 lg:px-10">
    <div className="grid min-w-0 grid-cols-1 gap-16 sm:grid-cols-2 [&>section]:min-w-0">
      <section aria-labelledby="basic-heading" className="flex flex-col gap-5">
        <h1 className="font-medium text-muted-foreground" id="basic-heading">
          Basic
        </h1>
        <div className="rounded-3xl bg-muted p-6 sm:p-10">
          <ButtonGroupBasic />
        </div>
      </section>

      <section
        aria-labelledby="orientation-heading"
        className="flex flex-col gap-5"
      >
        <h2
          className="font-medium text-muted-foreground"
          id="orientation-heading"
        >
          Orientation
        </h2>
        <div className="rounded-3xl border bg-card p-6 sm:p-10">
          <ButtonGroupOrientation />
        </div>
      </section>

      <section aria-labelledby="size-heading" className="flex flex-col gap-5">
        <h2 className="font-medium text-muted-foreground" id="size-heading">
          Size
        </h2>
        <div className="rounded-3xl bg-muted p-6 sm:p-10">
          <ButtonGroupSize />
        </div>
      </section>

      <section aria-labelledby="nested-heading" className="flex flex-col gap-5">
        <h2 className="font-medium text-muted-foreground" id="nested-heading">
          Nested
        </h2>
        <div className="rounded-3xl border bg-card p-6 sm:p-10">
          <ButtonGroupNested />
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
        <div className="rounded-3xl bg-muted p-6 sm:p-10">
          <ButtonGroupSeparatorExample />
        </div>
      </section>

      <section aria-labelledby="split-heading" className="flex flex-col gap-5">
        <h2 className="font-medium text-muted-foreground" id="split-heading">
          Split
        </h2>
        <div className="rounded-3xl border bg-card p-6 sm:p-10">
          <ButtonGroupSplit />
        </div>
      </section>

      <section aria-labelledby="input-heading" className="flex flex-col gap-5">
        <h2 className="font-medium text-muted-foreground" id="input-heading">
          Input
        </h2>
        <div className="rounded-3xl bg-muted p-6 sm:p-10">
          <ButtonGroupInput />
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
        <div className="rounded-3xl border bg-card p-6 sm:p-10">
          <ButtonGroupInputGroup />
        </div>
      </section>

      <section
        aria-labelledby="dropdown-menu-heading"
        className="flex flex-col gap-5"
      >
        <h2
          className="font-medium text-muted-foreground"
          id="dropdown-menu-heading"
        >
          Dropdown Menu
        </h2>
        <div className="rounded-3xl bg-muted p-6 sm:p-10">
          <ButtonGroupDropdownMenu />
        </div>
      </section>

      <section aria-labelledby="select-heading" className="flex flex-col gap-5">
        <h2 className="font-medium text-muted-foreground" id="select-heading">
          Select
        </h2>
        <div className="rounded-3xl border bg-card p-6 sm:p-10">
          <ButtonGroupSelect />
        </div>
      </section>

      <section
        aria-labelledby="popover-heading"
        className="flex flex-col gap-5"
      >
        <h2 className="font-medium text-muted-foreground" id="popover-heading">
          Popover
        </h2>
        <div className="rounded-3xl bg-muted p-6 sm:p-10">
          <ButtonGroupPopover />
        </div>
      </section>

      <section aria-labelledby="rtl-heading" className="flex flex-col gap-5">
        <h2 className="font-medium text-muted-foreground" id="rtl-heading">
          RTL
        </h2>
        <div className="rounded-3xl border bg-card p-6 sm:p-10">
          <ButtonGroupRtl />
        </div>
      </section>
    </div>
  </div>
);

export default ButtonGroupExamplePage;
