# Shark Radio Group

## When to use

- Mutually exclusive option selection.
- Single-choice settings with clear option labels.

## When NOT to use

- If multiple options can be selected -> use CheckboxGroup instead.
- If options are many and need search/filtering -> use Select or Combobox instead.
- If the choices are binary (on/off) -> use Switch or Checkbox instead.

## Install

```bash
npx shadcn@latest add @shark/radio-group
```

Manual deps from docs:

```bash
npm install @ark-ui/react
```

## Canonical imports

```tsx
import { Label } from "@/components/ui/label"
import { Radio, RadioGroup } from "@/components/ui/radio-group"
```

## Minimal pattern

```tsx
<RadioGroup defaultValue="next">
  <Label>
    <Radio value="next" /> Next.js
  </Label>
  <Label>
    <Radio value="vite" /> Vite
  </Label>
  <Label>
    <Radio value="astro" /> Astro
  </Label>
</RadioGroup>
```

For form-bound single-choice groups, prefer `Field` + `FieldSet` composition to keep legend and validation semantics consistent.

### Key patterns

Radio group with descriptions:

```tsx
<RadioGroup defaultValue="comfortable" aria-label="Spacing preference">
  <Label className="flex items-start gap-3">
    <Radio value="default" />
    <div>
      <span className="font-medium">Default</span>
      <p className="text-muted-foreground text-xs">Standard spacing for most layouts.</p>
    </div>
  </Label>
  <Label className="flex items-start gap-3">
    <Radio value="comfortable" />
    <div>
      <span className="font-medium">Comfortable</span>
      <p className="text-muted-foreground text-xs">Extra padding for readability.</p>
    </div>
  </Label>
</RadioGroup>
```

Controlled radio group:

```tsx
const [value, setValue] = useState("default")

<RadioGroup value={value} onValueChange={setValue}>
  ...
</RadioGroup>
```


## Common pitfalls

- Using radios for multi-select behavior that requires checkbox group.
- Missing label association for each radio option.
- Handling selected value as array when radio group returns single value.

## Registry example files

- [`example-card.tsx`](/registry/react/examples/radio-group/example-card.tsx)
- [`example-controlled.tsx`](/registry/react/examples/radio-group/example-controlled.tsx)
- [`example-default.tsx`](/registry/react/examples/radio-group/example-default.tsx)
- [`example-disabled.tsx`](/registry/react/examples/radio-group/example-disabled.tsx)
- [`example-invalid.tsx`](/registry/react/examples/radio-group/example-invalid.tsx)
- [`example-with-description.tsx`](/registry/react/examples/radio-group/example-with-description.tsx)
