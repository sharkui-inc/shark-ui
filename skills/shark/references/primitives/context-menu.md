# Shark Context Menu

## When to use

- Right-click (or long-press) surfaces on targets that expose contextual actions.
- Parallel structure to dropdown **Menu** but with context-trigger semantics from Ark.

## When not to use

- Primary button-triggered actions → [`menu.md`](./menu.md).

## Install

```bash
npx shadcn@latest add @shark/context-menu
```

## Canonical imports (shark-ui repo)

`ContextMenu` reuses **Menu** internals with `ContextTrigger` wiring—see [`../../registry/react/components/context-menu.tsx`](../../registry/react/components/context-menu.tsx).

```tsx
import {
  ContextMenu,
  ContextMenuTrigger,
  ContextMenuContent,
  ContextMenuGroup,
  ContextMenuItem,
  ContextMenuSeparator,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuShortcut,
} from "@/registry/react/components/context-menu";
```

## Minimal pattern

Wrap the **surface** with `ContextMenuTrigger` and provide `ContextMenuContent` with items (see MDX anatomy).

## Registry examples

[`../../registry/react/examples/context-menu/`](../../registry/react/examples/context-menu/) — mirror submenu / item patterns from Menu where applicable.

## Pitfalls

- Confusing **Menu** vs **ContextMenu** trigger wiring—always start from the context-menu MDX anatomy.
- Forgetting keyboard accessibility on the trigger target (must remain focusable / actionable per MDX guidance).

## Further reading

- [Ark UI Context Menu](https://ark-ui.com/docs/components/context-menu)
- [`../../registry/react/components/context-menu.tsx`](../../registry/react/components/context-menu.tsx)
