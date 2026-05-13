# Shark Kbd

## When to use

- Keyboard shortcut keycaps near commands.
- Single or grouped key hint display in action UIs.

## Install

```bash
npx shadcn@latest add @shark/kbd
```

Manual deps from docs:

```bash
npm install @ark-ui/react
```

## Canonical imports

```tsx
import { Kbd, KbdGroup } from "@/components/ui/kbd"
```

## Minimal pattern

```tsx
<Kbd>K</Kbd>
```

### Key patterns

Multi-key shortcut with `KbdGroup` (each key gets its own `Kbd`):

```tsx
<KbdGroup>
  <Kbd>⌘</Kbd>
  <Kbd>K</Kbd>
</KbdGroup>
```

Button with keyboard shortcut:

```tsx
<Button variant="outline">
  Print
  <KbdGroup className="-me-1">
    <Kbd>⌘</Kbd>
    <Kbd>P</Kbd>
  </KbdGroup>
</Button>
```

Single key shortcut in a button:

```tsx
<Button variant="outline">
  Save
  <Kbd className="-me-1">⌘S</Kbd>
</Button>
```


## Common pitfalls

- Placing multi-key sequences in a single `Kbd` when `KbdGroup` is clearer.
- Using decorative keycaps without tying them to nearby actionable controls.
- Overusing kbd hints in simple UIs, adding noise instead of clarity.

## Registry example files

- [`example-button.tsx`](/registry/react/examples/kbd/example-button.tsx)
- [`example-default.tsx`](/registry/react/examples/kbd/example-default.tsx)
- [`example-input-group.tsx`](/registry/react/examples/kbd/example-input-group.tsx)
- [`example-kbd-group.tsx`](/registry/react/examples/kbd/example-kbd-group.tsx)
- [`example-tooltip.tsx`](/registry/react/examples/kbd/example-tooltip.tsx)
- [`example-variant-outline.tsx`](/registry/react/examples/kbd/example-variant-outline.tsx)
