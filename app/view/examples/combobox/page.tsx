import ComboboxAutoHighlight from "./_examples/combobox-auto-highlight";
import ComboboxBasic from "./_examples/combobox-basic";
import ComboboxClear from "./_examples/combobox-clear";
import ComboboxCustom from "./_examples/combobox-custom";
import ComboboxDisabled from "./_examples/combobox-disabled";
import ComboboxGroups from "./_examples/combobox-groups";
import ComboboxInputGroup from "./_examples/combobox-input-group";
import ComboboxInvalid from "./_examples/combobox-invalid";
import ComboboxMultiple from "./_examples/combobox-multiple";
import ComboboxPopup from "./_examples/combobox-popup";
import ComboboxRtl from "./_examples/combobox-rtl";

const ComboboxExamplePage = () => (
  <div className="mx-auto flex w-full max-w-7xl flex-col gap-16 px-5 py-10 sm:px-8 sm:py-14 lg:px-10">
    <div className="grid gap-16 sm:grid-cols-2">
      <section aria-labelledby="basic-heading" className="flex flex-col gap-5">
        <h1 className="font-medium text-muted-foreground" id="basic-heading">
          Basic
        </h1>
        <div className="rounded-3xl bg-muted p-6 sm:p-10">
          <ComboboxBasic />
        </div>
      </section>

      <section
        aria-labelledby="auto-highlight-heading"
        className="flex flex-col gap-5"
      >
        <h2
          className="font-medium text-muted-foreground"
          id="auto-highlight-heading"
        >
          Auto Highlight
        </h2>
        <div className="rounded-3xl border bg-card p-6 sm:p-10">
          <ComboboxAutoHighlight />
        </div>
      </section>

      <section aria-labelledby="clear-heading" className="flex flex-col gap-5">
        <h2 className="font-medium text-muted-foreground" id="clear-heading">
          Clear
        </h2>
        <div className="rounded-3xl bg-muted p-6 sm:p-10">
          <ComboboxClear />
        </div>
      </section>

      <section aria-labelledby="custom-heading" className="flex flex-col gap-5">
        <h2 className="font-medium text-muted-foreground" id="custom-heading">
          Custom
        </h2>
        <div className="rounded-3xl border bg-card p-6 sm:p-10">
          <ComboboxCustom />
        </div>
      </section>

      <section
        aria-labelledby="disabled-heading"
        className="flex flex-col gap-5"
      >
        <h2 className="font-medium text-muted-foreground" id="disabled-heading">
          Disabled
        </h2>
        <div className="rounded-3xl bg-muted p-6 sm:p-10">
          <ComboboxDisabled />
        </div>
      </section>

      <section aria-labelledby="groups-heading" className="flex flex-col gap-5">
        <h2 className="font-medium text-muted-foreground" id="groups-heading">
          Groups
        </h2>
        <div className="rounded-3xl border bg-card p-6 sm:p-10">
          <ComboboxGroups />
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
        <div className="rounded-3xl bg-muted p-6 sm:p-10">
          <ComboboxInputGroup />
        </div>
      </section>

      <section
        aria-labelledby="invalid-heading"
        className="flex flex-col gap-5"
      >
        <h2 className="font-medium text-muted-foreground" id="invalid-heading">
          Invalid
        </h2>
        <div className="rounded-3xl border bg-card p-6 sm:p-10">
          <ComboboxInvalid />
        </div>
      </section>

      <section
        aria-labelledby="multiple-heading"
        className="flex flex-col gap-5"
      >
        <h2 className="font-medium text-muted-foreground" id="multiple-heading">
          Multiple
        </h2>
        <div className="rounded-3xl bg-muted p-6 sm:p-10">
          <ComboboxMultiple />
        </div>
      </section>

      <section aria-labelledby="popup-heading" className="flex flex-col gap-5">
        <h2 className="font-medium text-muted-foreground" id="popup-heading">
          Popup
        </h2>
        <div className="rounded-3xl border bg-card p-6 sm:p-10">
          <ComboboxPopup />
        </div>
      </section>

      <section aria-labelledby="rtl-heading" className="flex flex-col gap-5">
        <h2 className="font-medium text-muted-foreground" id="rtl-heading">
          RTL
        </h2>
        <div className="rounded-3xl bg-muted p-6 sm:p-10">
          <ComboboxRtl />
        </div>
      </section>
    </div>
  </div>
);

export default ComboboxExamplePage;
