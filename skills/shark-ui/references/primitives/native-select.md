# Shark Native Select

## When to use

- Native `<select>` UX with Shark styling (chevron, sizes, invalid state).
- Forms where you want browser-native option rendering and accessibility without a custom listbox.

## When NOT to use

- If the user must type to filter a long list → use Combobox or Autocomplete instead.
- If you need rich row content, virtualization, or multi-select in a popup → use Select or Listbox patterns instead.

## Install

```bash
npx shadcn@latest add @shark/native-select
```

Manual deps from docs:

```bash
npm install @ark-ui/react
```

## Canonical imports

```tsx
import {
  NativeSelect,
  NativeSelectOption,
  NativeSelectOptGroup,
} from "@/components/ui/native-select"
```

## Minimal pattern

```tsx
<NativeSelect className="w-full max-w-48">
  <NativeSelectOption value="">Select an option</NativeSelectOption>
  <NativeSelectOption value="a">Option A</NativeSelectOption>
  <NativeSelectOption value="b">Option B</NativeSelectOption>
</NativeSelect>
```

### Key patterns

Grouped options with `NativeSelectOptGroup` and a `label` prop; pair with `Field` + `FieldLabel` + `FieldError` for forms (see `example-with-field`).

Sizes `sm` | `md` | `lg` via `size` on `NativeSelect`; set `invalid` when validation fails.

## Common pitfalls

- Expecting the same collection-driven API as Shark `Select`—native select uses real `<option>` children.
- Omitting an empty-value option when you need an explicit “placeholder” row.
- Skipping `name` / controlled `value` wiring on the underlying select when used inside forms.

## Registry example files

- [`example-controlled.tsx`](/registry/react/examples/native-select/example-controlled.tsx)
- [`example-default.tsx`](/registry/react/examples/native-select/example-default.tsx)
- [`example-disabled.tsx`](/registry/react/examples/native-select/example-disabled.tsx)
- [`example-groups.tsx`](/registry/react/examples/native-select/example-groups.tsx)
- [`example-invalid.tsx`](/registry/react/examples/native-select/example-invalid.tsx)
- [`example-size-lg.tsx`](/registry/react/examples/native-select/example-size-lg.tsx)
- [`example-size-md.tsx`](/registry/react/examples/native-select/example-size-md.tsx)
- [`example-size-sm.tsx`](/registry/react/examples/native-select/example-size-sm.tsx)
- [`example-with-field.tsx`](/registry/react/examples/native-select/example-with-field.tsx)
