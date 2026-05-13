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
import { Switch } from "@/components/ui/switch"
```

## Minimal pattern

```tsx
<Label>
  <Switch />
  Enable notifications
</Label>
```

### Key patterns

Switch with description text (use `id`/`htmlFor` when additional content exists):

```tsx
const id = useId()

<div className="flex items-center justify-between gap-4">
  <div className="flex flex-col gap-1">
    <Label htmlFor={id}>Marketing emails</Label>
    <p className="text-muted-foreground text-xs">
      Receive updates about new products and features.
    </p>
  </div>
  <Switch id={id} />
</div>
```

Disabled switch:

```tsx
<Label>
  <Switch disabled />
  Marketing emails
</Label>
```


## Common pitfalls

- Using switch for multi-option selection that should use radio/toggle-group.
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
