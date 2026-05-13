# Shark Toggle

## When to use

- Pressable two-state commands (formatting/tool modes).
- Single-command active/inactive interactions without group state.

## When NOT to use

- If the control is a binary preference setting -> use Switch instead.
- If multiple toggles share state -> use ToggleGroup instead.

## Install

```bash
npx shadcn@latest add @shark/toggle
```

Manual deps from docs:

```bash
npm install @ark-ui/react
```

## Canonical imports

```tsx
import { Toggle } from "@/components/ui/toggle"
```

## Minimal pattern

```tsx
<Toggle>Toggle</Toggle>
```

### Key patterns

Icon toggle with `aria-label` (always required for icon-only):

```tsx
<Toggle aria-label="Toggle bold" value="bold">
  <BoldIcon />
</Toggle>
```

ToggleGroup with icon toggles:

```tsx
<ToggleGroup defaultValue={["bold"]}>
  <Toggle aria-label="Toggle bold" value="bold">
    <BoldIcon />
  </Toggle>
  <Toggle aria-label="Toggle italic" value="italic">
    <ItalicIcon />
  </Toggle>
  <Toggle aria-label="Toggle underline" value="underline">
    <UnderlineIcon />
  </Toggle>
</ToggleGroup>
```

Variants: `default`, `outline`. Sizes: `sm`, `default`, `lg`.


## Common pitfalls

- Using toggle for destructive/submit actions better represented by `Button`.
- Missing pressed-state semantics in controlled toggle flows.
- Using standalone toggles when mutually exclusive behavior needs `ToggleGroup`.

## Registry example files

- [`example-controlled.tsx`](/registry/react/examples/toggle/example-controlled.tsx)
- [`example-default.tsx`](/registry/react/examples/toggle/example-default.tsx)
- [`example-disabled.tsx`](/registry/react/examples/toggle/example-disabled.tsx)
- [`example-icon-group.tsx`](/registry/react/examples/toggle/example-icon-group.tsx)
- [`example-outline.tsx`](/registry/react/examples/toggle/example-outline.tsx)
- [`example-size-lg.tsx`](/registry/react/examples/toggle/example-size-lg.tsx)
- [`example-size-md.tsx`](/registry/react/examples/toggle/example-size-md.tsx)
- [`example-size-sm.tsx`](/registry/react/examples/toggle/example-size-sm.tsx)
- [`example-with-icon.tsx`](/registry/react/examples/toggle/example-with-icon.tsx)
