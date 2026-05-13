# Shark Button Group

## When to use

- Visually connected buttons (toolbar segments, zoom controls, editor actions).
- Splitting a control row with optional separators and inline text labels.

## Install

```bash
npx shadcn@latest add @shark/button-group
```

Manual deps from docs:

```bash
npm install @ark-ui/react tailwind-variants
```

## Canonical imports

```tsx
import {
  ButtonGroup,
  ButtonGroupSeparator,
  ButtonGroupText,
} from "@/components/ui/button-group"
```

## Minimal pattern

```tsx
<ButtonGroup>
  <Button>Left</Button>
  <Button>Right</Button>
</ButtonGroup>
```

### Key patterns

Use `ButtonGroupSeparator` between segments and `ButtonGroupText` for non-button labels inside the cluster. Orientation and spacing follow docs and examples. For broader “group” layout concepts, see [`group.md`](./group.md).

## Common pitfalls

- Nesting unrelated controls without grouping semantics—keep one logical cluster per `ButtonGroup`.
- Mixing standalone `Button` margins that break the connected look; rely on group styles.
- Forgetting extra packages: manual install includes **tailwind-variants**, not only Ark.

## Registry example files

- [`example-default.tsx`](/registry/react/examples/button-group/example-default.tsx)
- [`example-nested.tsx`](/registry/react/examples/button-group/example-nested.tsx)
- [`example-orientation-horizontal.tsx`](/registry/react/examples/button-group/example-orientation-horizontal.tsx)
- [`example-orientation-vertical.tsx`](/registry/react/examples/button-group/example-orientation-vertical.tsx)
- [`example-separator.tsx`](/registry/react/examples/button-group/example-separator.tsx)
- [`example-with-input.tsx`](/registry/react/examples/button-group/example-with-input.tsx)
- [`example-with-menu.tsx`](/registry/react/examples/button-group/example-with-menu.tsx)
- [`example-with-popover.tsx`](/registry/react/examples/button-group/example-with-popover.tsx)
