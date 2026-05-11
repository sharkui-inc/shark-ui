# Shark Menu

## When to use

- Dropdown actions attached to a button or control.
- Nested submenus, checkbox/radio items, shortcuts, and grouped sections.

## When not to use

- **Right-click / context surface** → [`context-menu.md`](./context-menu.md) (different trigger pattern).
- **Command palette / typeahead list** → **Command** component docs (`content/docs/components/command.mdx`) if installed in the project.

## Install

```bash
npx shadcn@latest add @shark/menu
```

## Canonical imports (shark-ui repo)

```tsx
import {
  Menu,
  MenuTrigger,
  MenuContent,
  MenuItem,
  MenuGroup,
  MenuSeparator,
  MenuSub,
  MenuSubTrigger,
  MenuSubContent,
  MenuCheckboxItem,
  MenuRadioGroup,
  MenuRadioItem,
  MenuShortcut,
} from "@/registry/react/components/menu";
```

## Minimal pattern

```tsx
<Menu>
  <MenuTrigger asChild>
    <Button variant="outline" type="button">
      Open
    </Button>
  </MenuTrigger>
  <MenuContent className="w-40">
    <MenuGroup>
      <MenuItem value="copy">Copy</MenuItem>
      <MenuItem value="paste">Paste</MenuItem>
    </MenuGroup>
  </MenuContent>
</Menu>
```

## Registry examples

- [`../../registry/react/examples/menu/example-default.tsx`](../../registry/react/examples/menu/example-default.tsx) — submenus, shortcuts, radio + checkbox patterns.

## Ark / portal notes

- `MenuContent` and submenu content are portaled in Shark (`Portal` from `@ark-ui/react`)—see [`../portal.md`](../portal.md).
- Prefer **`overflow-y-auto`** on long menus if `ScrollArea` causes layout issues (`AGENTS.md`).

## Pitfalls

- Using Radix `onSelect` semantics—prefer patterns from MDX / examples for Ark menu item events.
- Missing `value` on items when the collection API requires it—confirm in `menu.tsx` + MDX.

## Further reading

- [Ark UI Menu](https://ark-ui.com/docs/components/menu)
- [`../../registry/react/components/menu.tsx`](../../registry/react/components/menu.tsx)
- [`../../content/docs/components/menu.mdx`](../../content/docs/components/menu.mdx)
