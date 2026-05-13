# Shark Color Picker

## When to use

- Choosing colors in settings, themes, or design tools (area, sliders, swatches, channel inputs).
- Inline or popover color editing with optional alpha and format-specific channels.

## Install

```bash
npx shadcn@latest add @shark/color-picker
```

Manual deps from docs:

```bash
npm install @ark-ui/react lucide-react
```

## Canonical imports

```tsx
import {
  ColorPicker,
  ColorPickerArea,
  ColorPickerChannelInput,
  ColorPickerContent,
  ColorPickerEyeDropperTrigger,
  ColorPickerSwatchGroup,
  ColorPickerTrigger,
  /* …other parts from docs/source */
} from "@/components/ui/color-picker"
```

## Minimal pattern

Follow the **anatomy in component MDX**—Color Picker composes many optional parts (area, sliders, swatch picker, inputs). A typical flow wraps a `ColorPickerTrigger` and portals `ColorPickerContent` with channel controls.

```tsx
<ColorPicker>
  <ColorPickerTrigger asChild>
    <Button variant="outline">Pick color</Button>
  </ColorPickerTrigger>
  <ColorPickerContent>{/* area / sliders / swatches */}</ColorPickerContent>
</ColorPicker>
```

### Key patterns

Use **controlled** `value` / `onValueChange` when syncing to forms. Combine with `Field` for validation UX (`example-with-field`). Swatch and slider variants have dedicated examples—copy the closest registry example before inventing markup.

## Common pitfalls

- Importing only the root without content parts—popover surface must include real controls.
- Ignoring color format (hex vs hsla)—align inputs with the format you store in state.
- Missing `lucide-react` when examples use icons (manual deps include it).

## Registry example files

- [`example-area-channels.tsx`](/registry/react/examples/color-picker/example-area-channels.tsx)
- [`example-area-dots.tsx`](/registry/react/examples/color-picker/example-area-dots.tsx)
- [`example-custom-spacing.tsx`](/registry/react/examples/color-picker/example-custom-spacing.tsx)
- [`example-default.tsx`](/registry/react/examples/color-picker/example-default.tsx)
- [`example-input-channel.tsx`](/registry/react/examples/color-picker/example-input-channel.tsx)
- [`example-input-compact.tsx`](/registry/react/examples/color-picker/example-input-compact.tsx)
- [`example-input-controlled.tsx`](/registry/react/examples/color-picker/example-input-controlled.tsx)
- [`example-input-disabled.tsx`](/registry/react/examples/color-picker/example-input-disabled.tsx)
- [`example-input-invalid.tsx`](/registry/react/examples/color-picker/example-input-invalid.tsx)
- [`example-input-with-popover.tsx`](/registry/react/examples/color-picker/example-input-with-popover.tsx)
- [`example-input-with-swatch-preview.tsx`](/registry/react/examples/color-picker/example-input-with-swatch-preview.tsx)
- [`example-popover-disabled.tsx`](/registry/react/examples/color-picker/example-popover-disabled.tsx)
- [`example-popover-sliders-only.tsx`](/registry/react/examples/color-picker/example-popover-sliders-only.tsx)
- [`example-popover-with-channel-editing.tsx`](/registry/react/examples/color-picker/example-popover-with-channel-editing.tsx)
- [`example-popover-with-swatch-picker.tsx`](/registry/react/examples/color-picker/example-popover-with-swatch-picker.tsx)
- [`example-slider-alpha-channel.tsx`](/registry/react/examples/color-picker/example-slider-alpha-channel.tsx)
- [`example-slider-controlled.tsx`](/registry/react/examples/color-picker/example-slider-controlled.tsx)
- [`example-slider-disabled.tsx`](/registry/react/examples/color-picker/example-slider-disabled.tsx)
- [`example-slider-hsba-channels.tsx`](/registry/react/examples/color-picker/example-slider-hsba-channels.tsx)
- [`example-slider-hsl-channels.tsx`](/registry/react/examples/color-picker/example-slider-hsl-channels.tsx)
- [`example-slider-rgb-channels.tsx`](/registry/react/examples/color-picker/example-slider-rgb-channels.tsx)
- [`example-slider-vertical.tsx`](/registry/react/examples/color-picker/example-slider-vertical.tsx)
- [`example-swatch-picker-controlled.tsx`](/registry/react/examples/color-picker/example-swatch-picker-controlled.tsx)
- [`example-swatch-picker-custom-indicator.tsx`](/registry/react/examples/color-picker/example-swatch-picker-custom-indicator.tsx)
- [`example-swatch-picker-custom-radius.tsx`](/registry/react/examples/color-picker/example-swatch-picker-custom-radius.tsx)
- [`example-swatch-picker-custom-size.tsx`](/registry/react/examples/color-picker/example-swatch-picker-custom-size.tsx)
- [`example-swatch-picker-disabled.tsx`](/registry/react/examples/color-picker/example-swatch-picker-disabled.tsx)
- [`example-swatch-picker.tsx`](/registry/react/examples/color-picker/example-swatch-picker.tsx)
- [`example-with-field.tsx`](/registry/react/examples/color-picker/example-with-field.tsx)
