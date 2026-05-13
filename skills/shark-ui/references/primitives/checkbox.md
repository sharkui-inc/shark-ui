# Shark Checkbox

## When to use

- Single boolean consent/selection controls.
- Standalone yes/no options with explicit labeling.

## When NOT to use

- If the control is a preference toggle (on/off) in settings -> use Switch instead.
- If selecting from mutually exclusive options -> use RadioGroup instead.
- If multiple checkboxes share grouped state -> use CheckboxGroup instead.

## Install

```bash
npx shadcn@latest add @shark/checkbox
```

Manual deps from docs:

```bash
npm install @ark-ui/react
```

## Canonical imports

```tsx
import { Checkbox } from "@/components/ui/checkbox"
```

## Minimal pattern

```tsx
<Label>
  <Checkbox value="terms" />
  Accept terms and conditions
</Label>
```

### Key patterns

CheckboxGroup with label-wrapped options:

```tsx
 <CheckboxGroup defaultValue={["checkbox-1"]}>
  <Field orientation="horizontal">
    <Checkbox value="checkbox-1" />
    <FieldLabel />
  </Field>
  <Field orientation="horizontal">
    <Checkbox value="checkbox-2" />
    <FieldLabel />
  </Field>
  <Field orientation="horizontal">
    <Checkbox value="checkbox-3" />
    <FieldLabel />
  </Field>
  <Field orientation="horizontal">
    <Checkbox value="checkbox-4" />
    <FieldLabel />
  </Field>
</CheckboxGroup>
```

## Common pitfalls

- Using checkbox for exclusive single-choice options that should be radios.
- Missing visible label association (`FieldLabel` within `Field`) for each checkbox.
- Treating `onCheckedChange` values as plain boolean without handling indeterminate where relevant.

## Registry example files

- [`example-card.tsx`](/registry/react/examples/checkbox/example-card.tsx)
- [`example-checkbox-group.tsx`](/registry/react/examples/checkbox/example-checkbox-group.tsx)
- [`example-controlled.tsx`](/registry/react/examples/checkbox/example-controlled.tsx)
- [`example-default.tsx`](/registry/react/examples/checkbox/example-default.tsx)
- [`example-disabled.tsx`](/registry/react/examples/checkbox/example-disabled.tsx)
- [`example-indeterminate.tsx`](/registry/react/examples/checkbox/example-indeterminate.tsx)
- [`example-invalid.tsx`](/registry/react/examples/checkbox/example-invalid.tsx)
- [`example-with-description.tsx`](/registry/react/examples/checkbox/example-with-description.tsx)
