# Shark Switch

## When to use

- Binary preference toggles in settings flows.
- Immediate on/off state controls with explicit labels.

## When NOT to use

- If the control is a pressable command (not a preference) -> use Toggle instead.
- If you need grouped toggle selection -> use ToggleGroup instead.
- If it's a form agreement (terms/conditions) -> use Checkbox instead.

## Install

```bash
npx shadcn@latest add @shark/switch
```

Manual deps from docs:

```bash
npm install @ark-ui/react
```

## Canonical imports

```tsx
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldLabel,
} from "@/components/ui/field"
import { Switch } from "@/components/ui/switch"
```

## Minimal pattern

```tsx
<Field orientation="horizontal">
  <Switch defaultChecked />
  <FieldLabel>Enable notifications</FieldLabel>
</Field>
```

### Key patterns

Switch with description (no `id` / `htmlFor` — use `Field` + `FieldContent`):

```tsx
<Field orientation="horizontal">
  <Switch defaultChecked />
  <FieldContent>
    <FieldLabel>Marketing emails</FieldLabel>
    <FieldDescription>
      Receive updates about new products and features.
    </FieldDescription>
  </FieldContent>
</Field>
```

Disabled switch:

```tsx
<Field disabled orientation="horizontal">
  <Switch />
  <FieldContent>
    <FieldLabel>Marketing emails</FieldLabel>
  </FieldContent>
</Field>
```


## Common pitfalls

- Using switch for multi-option selection that should use radio/toggle-group.
- Adding manual `id` / `htmlFor` when `Field` / `FieldLabel` already associate the control.
- Omitting visible label or explicit `aria-label` for icon-only switch controls.
- Treating switch as form value without verifying checked-state wiring.

## Registry example files

- [`example-card.tsx`](/registry/react/examples/switch/example-card.tsx)
- [`example-controlled.tsx`](/registry/react/examples/switch/example-controlled.tsx)
- [`example-default.tsx`](/registry/react/examples/switch/example-default.tsx)
- [`example-description.tsx`](/registry/react/examples/switch/example-description.tsx)
- [`example-disabled.tsx`](/registry/react/examples/switch/example-disabled.tsx)
- [`example-form.tsx`](/registry/react/examples/switch/example-form.tsx)
- [`example-invalid.tsx`](/registry/react/examples/switch/example-invalid.tsx)
- [`example-size.tsx`](/registry/react/examples/switch/example-size.tsx)
