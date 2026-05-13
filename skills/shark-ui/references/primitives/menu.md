# Shark Menu

## When to use

- Contextual action lists and dropdown commands.
- Mixed item types (regular, checkbox, radio, nested submenu).

## When NOT to use

- If the user needs to search/filter actions -> use Command instead.
- If the content is rich informational (not actions) -> use Popover instead.
- If the overlay is a full modal flow -> use Dialog instead.

## Install

```bash
npx shadcn@latest add @shark/menu
```

Manual deps from docs:

```bash
npm install @ark-ui/react
```

Also include the destructive foreground CSS variable snippet from the Shark menu docs when doing manual setup.

## Canonical imports

```tsx
import {
  Menu,
  MenuCheckboxItem,
  MenuGroup,
  MenuGroupLabel,
  MenuItem,
  MenuContent,
  MenuRadioGroup,
  MenuRadioItem,
  MenuSeparator,
  MenuShortcut,
  MenuSub,
  MenuSubContent,
  MenuSubTrigger,
  MenuTrigger,
} from "@/components/ui/menu"
```

## Minimal pattern

```tsx
<Menu>
  <MenuTrigger>Open</MenuTrigger>
  <MenuContent>
    <MenuItem>Profile</MenuItem>
    <MenuSeparator />
    <MenuCheckboxItem>Shuffle</MenuCheckboxItem>
  </MenuContent>
</Menu>
```

Use popup positioning props like `align` / `sideOffset` only when a layout needs explicit tuning.

### Key patterns

- **Portal forwarding**: optional `portalProps` on `MenuContent` → Ark UI `Menu.Portal` (`keepMounted`, `container`, …).
- Use `<MenuTrigger asChild><Button ... /></MenuTrigger>` as the default trigger composition.
- Use `openOnHover` on `MenuTrigger` only for explicit hover-driven UX.
- Use `<MenuItem asChild value="..."><Link ... /></MenuItem>` for navigational entries.
- Use `MenuItem closeOnClick` for action menus where selection should always dismiss the popup.
- Use `MenuCheckboxItem variant="switch"` for toggle-style preferences.
- Use `MenuRadioGroup` + `MenuRadioItem` with a `defaultValue` when enforcing single-choice selection.
- Use `MenuShortcut` to display keyboard hints in dense command menus.
- Use `variant="destructive"` on dangerous actions.
- For responsive action menus, keep desktop on `Menu` and switch mobile to `Drawer` + list-style actions as needed (see drawer examples).

## Common pitfalls

- Forgetting `MenuGroup` around grouped structures.
- Missing submenu pair (`MenuSubTrigger` + `MenuSubContent`) for nested actions.
- Mixing navigation and action items without clear close behavior (`closeOnClick`) and semantics.

## Registry example files

- [`example-checkboxes.tsx`](/registry/react/examples/menu/example-checkboxes.tsx)
- [`example-default.tsx`](/registry/react/examples/menu/example-default.tsx)
- [`example-destructive.tsx`](/registry/react/examples/menu/example-destructive.tsx)
- [`example-dialog.tsx`](/registry/react/examples/menu/example-dialog.tsx)
- [`example-group-label.tsx`](/registry/react/examples/menu/example-group-label.tsx)
- [`example-icons.tsx`](/registry/react/examples/menu/example-icons.tsx)
- [`example-link.tsx`](/registry/react/examples/menu/example-link.tsx)
- [`example-nested.tsx`](/registry/react/examples/menu/example-nested.tsx)
- [`example-positioning.tsx`](/registry/react/examples/menu/example-positioning.tsx)
- [`example-quick-item.tsx`](/registry/react/examples/menu/example-quick-item.tsx)
- [`example-radio-group.tsx`](/registry/react/examples/menu/example-radio-group.tsx)
- [`example-shortcuts.tsx`](/registry/react/examples/menu/example-shortcuts.tsx)
