# Shark Select

## When to use

- Single-choice selection from a predefined list.
- Select-style triggers with popup options.

## When NOT to use

- If the user needs to type/filter options -> use Combobox instead.
- If the list is very short (2-3 items) with visible options -> consider RadioGroup.
- If the selection drives complex search/autocomplete -> use Autocomplete instead.

## Install

```bash
npx shadcn@latest add @shark/select
```

Manual deps from docs:

```bash
npm install @ark-ui/react
```

## Canonical imports

```tsx
import {
  Select,
  SelectGroup,
  SelectGroupLabel,
  SelectItem,
  SelectLabel,
  SelectContent,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
```

## Minimal pattern

```tsx
const items = [
  { label: "Next.js", value: "next" },
  { label: "Vite", value: "vite" },
]

<Select items={items}>
  <SelectTrigger>
    <SelectValue placeholder="Select framework" />
  </SelectTrigger>
  <SelectContent>
    <SelectLabel>Frameworks</SelectLabel>
    {items.map((item) => (
      <SelectItem key={item.value} value={item}>
        {item.label}
      </SelectItem>
    ))}
  </SelectContent>
</Select>
```

Prefer this `items`-first pattern for migration work to keep options known before hydration and avoid SSR mismatch edge cases.

For form-bound selects, prefer wrapping with `Field` + `FieldLabel` + `FieldError` so value, label, and validation stay semantically linked.

### Key patterns

- **Portal forwarding**: optional `portalProps` on `SelectContent` → Ark UI `Select.Portal` (`keepMounted`, `container`, …).
- **Trigger composition**: keep `SelectTrigger` as the interaction entry point; where you need a custom trigger element, use `asChild` on supported parts per the component MDX and examples.
- **Multiple selection**: use `multiple` with array values (for example `defaultValue={["javascript", "typescript"]}`) and a custom `SelectValue` render function for compact summaries.
- **Object values**: use full objects in `SelectItem value={item}` with `itemToStringValue` for stable form value serialization.
- **Grouped options**: use `SelectGroup` + `SelectGroupLabel`; combine with `SelectSeparator` between groups when needed.
- **Disabled options**: pass `disabled` on individual `SelectItem` rows (for unavailable choices).
- **Rich row/trigger rendering**: render custom content (icons, avatars, secondary text) in both `SelectValue` and `SelectItem`; adjust row density via `className` where needed.
- **Alignment tuning**: use `alignItemWithTrigger={false}` only when the default selected-item alignment causes layout issues.

## Common pitfalls

- Keeping children-only Radix select patterns without adding `items`.
- Forgetting to render `SelectValue` inside `SelectTrigger`.
- Placing placeholder on the wrong part; use `placeholder` on `SelectValue` when needed.
- Using object item values without `itemToStringValue` when stable string value serialization is required.
- Treating `multiple` select values as scalars instead of arrays.
- Mixing select and combobox APIs without validating docs.

## Registry example files

- [`example-controlled.tsx`](/registry/react/examples/select/example-controlled.tsx)
- [`example-default.tsx`](/registry/react/examples/select/example-default.tsx)
- [`example-disabled.tsx`](/registry/react/examples/select/example-disabled.tsx)
- [`example-empty.tsx`](/registry/react/examples/select/example-empty.tsx)
- [`example-grouping.tsx`](/registry/react/examples/select/example-grouping.tsx)
- [`example-invalid.tsx`](/registry/react/examples/select/example-invalid.tsx)
- [`example-max-selection.tsx`](/registry/react/examples/select/example-max-selection.tsx)
- [`example-multiple.tsx`](/registry/react/examples/select/example-multiple.tsx)
- [`example-size-lg.tsx`](/registry/react/examples/select/example-size-lg.tsx)
- [`example-size-md.tsx`](/registry/react/examples/select/example-size-md.tsx)
- [`example-size-sm.tsx`](/registry/react/examples/select/example-size-sm.tsx)
- [`example-with-field.tsx`](/registry/react/examples/select/example-with-field.tsx)
