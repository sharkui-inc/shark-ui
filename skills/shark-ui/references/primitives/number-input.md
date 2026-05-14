# Shark Number input

## When to use

- Numeric entry with increment/decrement controls.
- Bounded stepper-style quantity/amount inputs.

## Install

```bash
npx shadcn@latest add @shark/number-input
```

Manual deps from docs:

```bash
npm install @ark-ui/react
```

## Canonical imports

```tsx
import {
  NumberInput,
  NumberInputDecrement,
  NumberInputGroup,
  NumberInputIncrement,
  NumberInputInput,
  NumberInputScrubArea,
} from "@/components/ui/number-input"
```

## Minimal pattern

```tsx
<NumberInput defaultValue={0}>
  <NumberInputScrubArea label="Quantity" />
  <NumberInputGroup>
    <NumberInputDecrement />
    <NumberInputInput />
    <NumberInputIncrement />
  </NumberInputGroup>
</NumberInput>
```

For form-bound numeric inputs, prefer wrapping `NumberInput` with `Field` + `FieldLabel` + `FieldError` instead of standalone usage.

### Key patterns

Number field with external label and bounds:

```tsx
<Field name="quantity">
  <FieldLabel>Quantity</FieldLabel>
  <NumberInput defaultValue={1} min={0} max={99}>
    <NumberInputGroup>
      <NumberInputDecrement />
      <NumberInputInput />
      <NumberInputIncrement />
    </NumberInputGroup>
  </NumberInput>
  <FieldError />
</Field>
```

Number field with scrub area (drag to adjust):

```tsx
<NumberInput defaultValue={50}>
  <NumberInputScrubArea label="Brightness" />
  <NumberInputGroup>
    <NumberInputDecrement />
    <NumberInputInput />
    <NumberInputIncrement />
  </NumberInputGroup>
</NumberInput>
```

Sizes: `sm`, `default`, `lg` on `NumberInputGroup`.


## Common pitfalls

- Treating number field value as free-form text without numeric bounds/steps.
- Missing increment/decrement controls in stepper-style UIs where expected.
- Not validating min/max constraints and resulting clamped behavior.

## Registry example files

- [`example-controlled.tsx`](/registry/react/examples/number-input/example-controlled.tsx)
- [`example-default.tsx`](/registry/react/examples/number-input/example-default.tsx)
- [`example-disabled.tsx`](/registry/react/examples/number-input/example-disabled.tsx)
- [`example-field-only.tsx`](/registry/react/examples/number-input/example-field-only.tsx)
- [`example-formatted.tsx`](/registry/react/examples/number-input/example-formatted.tsx)
- [`example-invalid.tsx`](/registry/react/examples/number-input/example-invalid.tsx)
- [`example-mouse-wheel.tsx`](/registry/react/examples/number-input/example-mouse-wheel.tsx)
- [`example-range.tsx`](/registry/react/examples/number-input/example-range.tsx)
- [`example-scrub.tsx`](/registry/react/examples/number-input/example-scrub.tsx)
- [`example-size-lg.tsx`](/registry/react/examples/number-input/example-size-lg.tsx)
- [`example-size-md.tsx`](/registry/react/examples/number-input/example-size-md.tsx)
- [`example-size-sm.tsx`](/registry/react/examples/number-input/example-size-sm.tsx)
