# Shark Toggle Group

## When to use

- Grouped pressed-state controls (single or multiple).
- Formatting/action sets needing button-like toggles with shared state.

## Install

```bash
npx shadcn@latest add @shark/toggle-group
```

Manual deps from docs:

```bash
npm install @ark-ui/react
```

## Canonical imports

```tsx
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
```

## Minimal pattern

```tsx
<ToggleGroup>
  <ToggleGroupItem>Bold</ToggleGroupItem>
  <ToggleGroupItem>Italic</ToggleGroupItem>
  <ToggleGroupItem>Underline</ToggleGroupItem>
</ToggleGroup>
```

### Key patterns

Toggle group with icon buttons:

```tsx
<ToggleGroup defaultValue={["bold"]}>
  <ToggleGroupItem aria-label="Toggle bold" value="bold">
    <BoldIcon />
  </ToggleGroupItem>
  <ToggleGroupItem aria-label="Toggle italic" value="italic">
    <ItalicIcon />
  </ToggleGroupItem>
  <ToggleGroupItem aria-label="Toggle underline" value="underline">
    <UnderlineIcon />
  </ToggleGroupItem>
</ToggleGroup>
```

Multiple selection (default). For single selection use `type="single"`.

Controlled toggle group:

```tsx
const [value, setValue] = useState(["bold"])

<ToggleGroup value={value} onValueChange={({ value }) => setValue(value)}>
  <ToggleGroupItem value="bold">Bold</ToggleGroupItem>
  ...
</ToggleGroup>
```


## Common pitfalls

- Using toggle-group when plain buttons (no pressed state) are more appropriate.
- Wrong value shape for mode (`multiple` array vs single selection).
- Missing accessible labels on icon-only toggle items.

## Registry example files

- [`example-controlled.tsx`](/registry/react/examples/toggle-group/example-controlled.tsx)
- [`example-custom.tsx`](/registry/react/examples/toggle-group/example-custom.tsx)
- [`example-default.tsx`](/registry/react/examples/toggle-group/example-default.tsx)
- [`example-disabled-item.tsx`](/registry/react/examples/toggle-group/example-disabled-item.tsx)
- [`example-disabled.tsx`](/registry/react/examples/toggle-group/example-disabled.tsx)
- [`example-ghost.tsx`](/registry/react/examples/toggle-group/example-ghost.tsx)
- [`example-horizontal.tsx`](/registry/react/examples/toggle-group/example-horizontal.tsx)
- [`example-outline.tsx`](/registry/react/examples/toggle-group/example-outline.tsx)
- [`example-single.tsx`](/registry/react/examples/toggle-group/example-single.tsx)
- [`example-size-lg.tsx`](/registry/react/examples/toggle-group/example-size-lg.tsx)
- [`example-size-sm.tsx`](/registry/react/examples/toggle-group/example-size-sm.tsx)
- [`example-spacing.tsx`](/registry/react/examples/toggle-group/example-spacing.tsx)
- [`example-vertical.tsx`](/registry/react/examples/toggle-group/example-vertical.tsx)
