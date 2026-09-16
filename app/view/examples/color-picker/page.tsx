import ExampleAreaChannels from "@/registry/react/examples/color-picker/example-area-channels";
import ExampleAreaDots from "@/registry/react/examples/color-picker/example-area-dots";
import ExampleAreaRtl from "@/registry/react/examples/color-picker/example-area-rtl";
import ExampleCustomSpacing from "@/registry/react/examples/color-picker/example-custom-spacing";
import ExampleDefault from "@/registry/react/examples/color-picker/example-default";
import ExampleInputChannel from "@/registry/react/examples/color-picker/example-input-channel";
import ExampleInputCompact from "@/registry/react/examples/color-picker/example-input-compact";
import ExampleInputControlled from "@/registry/react/examples/color-picker/example-input-controlled";
import ExampleInputDisabled from "@/registry/react/examples/color-picker/example-input-disabled";
import ExampleInputInvalid from "@/registry/react/examples/color-picker/example-input-invalid";
import ExampleInputRtl from "@/registry/react/examples/color-picker/example-input-rtl";
import ExampleInputWithPopover from "@/registry/react/examples/color-picker/example-input-with-popover";
import ExampleInputWithSwatchPreview from "@/registry/react/examples/color-picker/example-input-with-swatch-preview";
import ExamplePopoverDisabled from "@/registry/react/examples/color-picker/example-popover-disabled";
import ExamplePopoverRtl from "@/registry/react/examples/color-picker/example-popover-rtl";
import ExamplePopoverSlidersOnly from "@/registry/react/examples/color-picker/example-popover-sliders-only";
import ExamplePopoverWithChannelEditing from "@/registry/react/examples/color-picker/example-popover-with-channel-editing";
import ExamplePopoverWithSwatchPicker from "@/registry/react/examples/color-picker/example-popover-with-swatch-picker";
import ExampleSliderAlphaChannel from "@/registry/react/examples/color-picker/example-slider-alpha-channel";
import ExampleSliderControlled from "@/registry/react/examples/color-picker/example-slider-controlled";
import ExampleSliderDisabled from "@/registry/react/examples/color-picker/example-slider-disabled";
import ExampleSliderHsbaChannels from "@/registry/react/examples/color-picker/example-slider-hsba-channels";
import ExampleSliderHslChannels from "@/registry/react/examples/color-picker/example-slider-hsl-channels";
import ExampleSliderRgbChannels from "@/registry/react/examples/color-picker/example-slider-rgb-channels";
import ExampleSliderRtl from "@/registry/react/examples/color-picker/example-slider-rtl";
import ExampleSliderVertical from "@/registry/react/examples/color-picker/example-slider-vertical";
import ExampleSwatchPicker from "@/registry/react/examples/color-picker/example-swatch-picker";
import ExampleSwatchPickerControlled from "@/registry/react/examples/color-picker/example-swatch-picker-controlled";
import ExampleSwatchPickerCustomIndicator from "@/registry/react/examples/color-picker/example-swatch-picker-custom-indicator";
import ExampleSwatchPickerCustomRadius from "@/registry/react/examples/color-picker/example-swatch-picker-custom-radius";
import ExampleSwatchPickerCustomSize from "@/registry/react/examples/color-picker/example-swatch-picker-custom-size";
import ExampleSwatchPickerDisabled from "@/registry/react/examples/color-picker/example-swatch-picker-disabled";
import ExampleSwatchPickerRtl from "@/registry/react/examples/color-picker/example-swatch-picker-rtl";
import ExampleWithField from "@/registry/react/examples/color-picker/example-with-field";

const ColorPickerExamplePage = () => (
  <div className="mx-auto flex w-full max-w-7xl flex-col gap-16 px-5 py-10 sm:px-8 sm:py-14 lg:px-10">
    <div className="grid gap-16 sm:grid-cols-2">
      <section
        aria-labelledby="default-heading"
        className="flex flex-col gap-5"
      >
        <h1 className="font-medium text-muted-foreground" id="default-heading">
          Default
        </h1>
        <div className="rounded-3xl bg-muted p-6 sm:p-10">
          <ExampleDefault />
        </div>
      </section>
      <section
        aria-labelledby="area-channels-heading"
        className="flex flex-col gap-5"
      >
        <h2
          className="font-medium text-muted-foreground"
          id="area-channels-heading"
        >
          Area Channels
        </h2>
        <div className="rounded-3xl border bg-card p-6 sm:p-10">
          <ExampleAreaChannels />
        </div>
      </section>
      <section
        aria-labelledby="area-dots-heading"
        className="flex flex-col gap-5"
      >
        <h2
          className="font-medium text-muted-foreground"
          id="area-dots-heading"
        >
          Area Dots
        </h2>
        <div className="rounded-3xl bg-muted p-6 sm:p-10">
          <ExampleAreaDots />
        </div>
      </section>
      <section
        aria-labelledby="area-rtl-heading"
        className="flex flex-col gap-5"
      >
        <h2 className="font-medium text-muted-foreground" id="area-rtl-heading">
          Area RTL
        </h2>
        <div className="rounded-3xl border bg-card p-6 sm:p-10">
          <ExampleAreaRtl />
        </div>
      </section>
      <section
        aria-labelledby="input-channel-heading"
        className="flex flex-col gap-5"
      >
        <h2
          className="font-medium text-muted-foreground"
          id="input-channel-heading"
        >
          Input Channel
        </h2>
        <div className="rounded-3xl bg-muted p-6 sm:p-10">
          <ExampleInputChannel />
        </div>
      </section>
      <section
        aria-labelledby="input-compact-heading"
        className="flex flex-col gap-5"
      >
        <h2
          className="font-medium text-muted-foreground"
          id="input-compact-heading"
        >
          Input Compact
        </h2>
        <div className="rounded-3xl border bg-card p-6 sm:p-10">
          <ExampleInputCompact />
        </div>
      </section>
      <section
        aria-labelledby="input-controlled-heading"
        className="flex flex-col gap-5"
      >
        <h2
          className="font-medium text-muted-foreground"
          id="input-controlled-heading"
        >
          Input Controlled
        </h2>
        <div className="rounded-3xl bg-muted p-6 sm:p-10">
          <ExampleInputControlled />
        </div>
      </section>
      <section
        aria-labelledby="input-disabled-heading"
        className="flex flex-col gap-5"
      >
        <h2
          className="font-medium text-muted-foreground"
          id="input-disabled-heading"
        >
          Input Disabled
        </h2>
        <div className="rounded-3xl border bg-card p-6 sm:p-10">
          <ExampleInputDisabled />
        </div>
      </section>
      <section
        aria-labelledby="input-invalid-heading"
        className="flex flex-col gap-5"
      >
        <h2
          className="font-medium text-muted-foreground"
          id="input-invalid-heading"
        >
          Input Invalid
        </h2>
        <div className="rounded-3xl bg-muted p-6 sm:p-10">
          <ExampleInputInvalid />
        </div>
      </section>
      <section
        aria-labelledby="input-rtl-heading"
        className="flex flex-col gap-5"
      >
        <h2
          className="font-medium text-muted-foreground"
          id="input-rtl-heading"
        >
          Input RTL
        </h2>
        <div className="rounded-3xl border bg-card p-6 sm:p-10">
          <ExampleInputRtl />
        </div>
      </section>
      <section
        aria-labelledby="input-with-popover-heading"
        className="flex flex-col gap-5"
      >
        <h2
          className="font-medium text-muted-foreground"
          id="input-with-popover-heading"
        >
          Input With Popover
        </h2>
        <div className="rounded-3xl bg-muted p-6 sm:p-10">
          <ExampleInputWithPopover />
        </div>
      </section>
      <section
        aria-labelledby="input-with-swatch-preview-heading"
        className="flex flex-col gap-5"
      >
        <h2
          className="font-medium text-muted-foreground"
          id="input-with-swatch-preview-heading"
        >
          Input With Swatch Preview
        </h2>
        <div className="rounded-3xl border bg-card p-6 sm:p-10">
          <ExampleInputWithSwatchPreview />
        </div>
      </section>
      <section
        aria-labelledby="custom-spacing-heading"
        className="flex flex-col gap-5"
      >
        <h2
          className="font-medium text-muted-foreground"
          id="custom-spacing-heading"
        >
          Custom Spacing
        </h2>
        <div className="rounded-3xl bg-muted p-6 sm:p-10">
          <ExampleCustomSpacing />
        </div>
      </section>
      <section
        aria-labelledby="popover-disabled-heading"
        className="flex flex-col gap-5"
      >
        <h2
          className="font-medium text-muted-foreground"
          id="popover-disabled-heading"
        >
          Popover Disabled
        </h2>
        <div className="rounded-3xl border bg-card p-6 sm:p-10">
          <ExamplePopoverDisabled />
        </div>
      </section>
      <section
        aria-labelledby="popover-rtl-heading"
        className="flex flex-col gap-5"
      >
        <h2
          className="font-medium text-muted-foreground"
          id="popover-rtl-heading"
        >
          Popover RTL
        </h2>
        <div className="rounded-3xl bg-muted p-6 sm:p-10">
          <ExamplePopoverRtl />
        </div>
      </section>
      <section
        aria-labelledby="popover-sliders-only-heading"
        className="flex flex-col gap-5"
      >
        <h2
          className="font-medium text-muted-foreground"
          id="popover-sliders-only-heading"
        >
          Popover Sliders Only
        </h2>
        <div className="rounded-3xl border bg-card p-6 sm:p-10">
          <ExamplePopoverSlidersOnly />
        </div>
      </section>
      <section
        aria-labelledby="popover-with-channel-editing-heading"
        className="flex flex-col gap-5"
      >
        <h2
          className="font-medium text-muted-foreground"
          id="popover-with-channel-editing-heading"
        >
          Popover With Channel Editing
        </h2>
        <div className="rounded-3xl bg-muted p-6 sm:p-10">
          <ExamplePopoverWithChannelEditing />
        </div>
      </section>
      <section
        aria-labelledby="popover-with-swatch-picker-heading"
        className="flex flex-col gap-5"
      >
        <h2
          className="font-medium text-muted-foreground"
          id="popover-with-swatch-picker-heading"
        >
          Popover With Swatch Picker
        </h2>
        <div className="rounded-3xl border bg-card p-6 sm:p-10">
          <ExamplePopoverWithSwatchPicker />
        </div>
      </section>
      <section
        aria-labelledby="slider-alpha-channel-heading"
        className="flex flex-col gap-5"
      >
        <h2
          className="font-medium text-muted-foreground"
          id="slider-alpha-channel-heading"
        >
          Slider Alpha Channel
        </h2>
        <div className="rounded-3xl bg-muted p-6 sm:p-10">
          <ExampleSliderAlphaChannel />
        </div>
      </section>
      <section
        aria-labelledby="slider-controlled-heading"
        className="flex flex-col gap-5"
      >
        <h2
          className="font-medium text-muted-foreground"
          id="slider-controlled-heading"
        >
          Slider Controlled
        </h2>
        <div className="rounded-3xl border bg-card p-6 sm:p-10">
          <ExampleSliderControlled />
        </div>
      </section>
      <section
        aria-labelledby="slider-disabled-heading"
        className="flex flex-col gap-5"
      >
        <h2
          className="font-medium text-muted-foreground"
          id="slider-disabled-heading"
        >
          Slider Disabled
        </h2>
        <div className="rounded-3xl bg-muted p-6 sm:p-10">
          <ExampleSliderDisabled />
        </div>
      </section>
      <section
        aria-labelledby="slider-hsba-channels-heading"
        className="flex flex-col gap-5"
      >
        <h2
          className="font-medium text-muted-foreground"
          id="slider-hsba-channels-heading"
        >
          Slider HSBA Channels
        </h2>
        <div className="rounded-3xl border bg-card p-6 sm:p-10">
          <ExampleSliderHsbaChannels />
        </div>
      </section>
      <section
        aria-labelledby="slider-hsl-channels-heading"
        className="flex flex-col gap-5"
      >
        <h2
          className="font-medium text-muted-foreground"
          id="slider-hsl-channels-heading"
        >
          Slider HSL Channels
        </h2>
        <div className="rounded-3xl bg-muted p-6 sm:p-10">
          <ExampleSliderHslChannels />
        </div>
      </section>
      <section
        aria-labelledby="slider-rgb-channels-heading"
        className="flex flex-col gap-5"
      >
        <h2
          className="font-medium text-muted-foreground"
          id="slider-rgb-channels-heading"
        >
          Slider RGB Channels
        </h2>
        <div className="rounded-3xl border bg-card p-6 sm:p-10">
          <ExampleSliderRgbChannels />
        </div>
      </section>
      <section
        aria-labelledby="slider-rtl-heading"
        className="flex flex-col gap-5"
      >
        <h2
          className="font-medium text-muted-foreground"
          id="slider-rtl-heading"
        >
          Slider RTL
        </h2>
        <div className="rounded-3xl bg-muted p-6 sm:p-10">
          <ExampleSliderRtl />
        </div>
      </section>
      <section
        aria-labelledby="slider-vertical-heading"
        className="flex flex-col gap-5"
      >
        <h2
          className="font-medium text-muted-foreground"
          id="slider-vertical-heading"
        >
          Slider Vertical
        </h2>
        <div className="rounded-3xl border bg-card p-6 sm:p-10">
          <ExampleSliderVertical />
        </div>
      </section>
      <section
        aria-labelledby="swatch-picker-heading"
        className="flex flex-col gap-5"
      >
        <h2
          className="font-medium text-muted-foreground"
          id="swatch-picker-heading"
        >
          Swatch Picker
        </h2>
        <div className="rounded-3xl bg-muted p-6 sm:p-10">
          <ExampleSwatchPicker />
        </div>
      </section>
      <section
        aria-labelledby="swatch-picker-controlled-heading"
        className="flex flex-col gap-5"
      >
        <h2
          className="font-medium text-muted-foreground"
          id="swatch-picker-controlled-heading"
        >
          Swatch Picker Controlled
        </h2>
        <div className="rounded-3xl border bg-card p-6 sm:p-10">
          <ExampleSwatchPickerControlled />
        </div>
      </section>
      <section
        aria-labelledby="swatch-picker-custom-indicator-heading"
        className="flex flex-col gap-5"
      >
        <h2
          className="font-medium text-muted-foreground"
          id="swatch-picker-custom-indicator-heading"
        >
          Swatch Picker Custom Indicator
        </h2>
        <div className="rounded-3xl bg-muted p-6 sm:p-10">
          <ExampleSwatchPickerCustomIndicator />
        </div>
      </section>
      <section
        aria-labelledby="swatch-picker-custom-radius-heading"
        className="flex flex-col gap-5"
      >
        <h2
          className="font-medium text-muted-foreground"
          id="swatch-picker-custom-radius-heading"
        >
          Swatch Picker Custom Radius
        </h2>
        <div className="rounded-3xl border bg-card p-6 sm:p-10">
          <ExampleSwatchPickerCustomRadius />
        </div>
      </section>
      <section
        aria-labelledby="swatch-picker-custom-size-heading"
        className="flex flex-col gap-5"
      >
        <h2
          className="font-medium text-muted-foreground"
          id="swatch-picker-custom-size-heading"
        >
          Swatch Picker Custom Size
        </h2>
        <div className="rounded-3xl bg-muted p-6 sm:p-10">
          <ExampleSwatchPickerCustomSize />
        </div>
      </section>
      <section
        aria-labelledby="swatch-picker-disabled-heading"
        className="flex flex-col gap-5"
      >
        <h2
          className="font-medium text-muted-foreground"
          id="swatch-picker-disabled-heading"
        >
          Swatch Picker Disabled
        </h2>
        <div className="rounded-3xl border bg-card p-6 sm:p-10">
          <ExampleSwatchPickerDisabled />
        </div>
      </section>
      <section
        aria-labelledby="swatch-picker-rtl-heading"
        className="flex flex-col gap-5"
      >
        <h2
          className="font-medium text-muted-foreground"
          id="swatch-picker-rtl-heading"
        >
          Swatch Picker RTL
        </h2>
        <div className="rounded-3xl bg-muted p-6 sm:p-10">
          <ExampleSwatchPickerRtl />
        </div>
      </section>
      <section
        aria-labelledby="with-field-heading"
        className="flex flex-col gap-5"
      >
        <h2
          className="font-medium text-muted-foreground"
          id="with-field-heading"
        >
          With Field
        </h2>
        <div className="rounded-3xl border bg-card p-6 sm:p-10">
          <ExampleWithField />
        </div>
      </section>
    </div>
  </div>
);

export default ColorPickerExamplePage;
