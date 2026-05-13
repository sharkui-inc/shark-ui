# Shark Label

## When to use

- Visible accessible labels for inputs and controls.
- Simple `htmlFor`/`id` associations in forms and settings UIs.

## Install

```bash
npx shadcn@latest add @shark/label
```

Manual deps from docs:

```bash
npm install @ark-ui/react
```

## Canonical imports

```tsx
import { Label } from "@/components/ui/label"
```

## Minimal pattern

```tsx
<Label htmlFor="email">Email</Label>
```

### Key patterns

Label paired with input:

```tsx
const id = useId()

<div className="flex flex-col gap-2">
  <Label htmlFor={id}>Email</Label>
  <Input id={id} type="email" placeholder="name@example.com" />
</div>
```

Label wrapping a checkbox:

```tsx
<Label>
  <Checkbox />
  Accept terms and conditions
</Label>
```

Prefer `FieldLabel` within `Field` for validation-aware forms.


## Common pitfalls

- Using `aria-label` when visible `Label` text exists and can be associated.
- Mismatching `htmlFor`/`id` between label and control.
- Using label component as generic typography instead of form labeling.

## Useful example references

- with checkbox: `checkbox-demo`

## Registry example files

- [`example-autocomplete-field.tsx`](/registry/react/examples/field/example-autocomplete-field.tsx)
- [`example-checkbox-field.tsx`](/registry/react/examples/field/example-checkbox-field.tsx)
- [`example-checkbox-group-field.tsx`](/registry/react/examples/field/example-checkbox-group-field.tsx)
- [`example-combobox-field.tsx`](/registry/react/examples/field/example-combobox-field.tsx)
- [`example-combobox-multiple-field.tsx`](/registry/react/examples/field/example-combobox-multiple-field.tsx)
- [`example-default.tsx`](/registry/react/examples/field/example-default.tsx)
- [`example-disabled-field.tsx`](/registry/react/examples/field/example-disabled-field.tsx)
- [`example-field-group.tsx`](/registry/react/examples/field/example-field-group.tsx)
- [`example-input-group.tsx`](/registry/react/examples/field/example-input-group.tsx)
- [`example-number-input.tsx`](/registry/react/examples/field/example-number-input.tsx)
- [`example-orientation-horizontal.tsx`](/registry/react/examples/field/example-orientation-horizontal.tsx)
- [`example-orientation-vertical.tsx`](/registry/react/examples/field/example-orientation-vertical.tsx)
