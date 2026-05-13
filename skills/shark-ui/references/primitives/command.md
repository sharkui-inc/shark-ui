# Shark Command

## When to use

- Command palettes and keyboard-friendly searchable action lists.
- Power-user shortcuts surfaced as a dialog-backed palette.

## When NOT to use

- If the list is a simple static action menu without search → use `Menu` instead.
- If the user is selecting a value from a fixed set → use `Select` or `Combobox` instead.
- If the UI is a standard data entry form → use native `<form>` + `Field` instead.

## Install

```bash
npx shadcn@latest add @shark/command
```

## Manual dependencies

```bash
npm install @ark-ui/react
```

## Canonical imports

```tsx
import {
  Command,
  CommandContent,
  CommandDialog,
  CommandDialogContent,
  CommandDialogTrigger,
  CommandEmpty,
  CommandFooter,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";
```

## Minimal pattern

```tsx
const initialItems = [
  { label: "Search", value: "search"},
  { label: "Settings", value: "settings" },
];

const { contains } = useFilter({ sensitivity: "base" });
const { collection, filter } = useListCollection({
  initialItems,
  filter: contains,
});

<Command
  collection={collection}
  onInputValueChange={({ inputValue }) => filter(inputValue)}
>
  <CommandInput placeholder="Search…" />
  <CommandContent>
    <CommandEmpty>No results.</CommandEmpty>
    <CommandList>
      {items.map((item) => (
        <CommandItem item={item} key={item.value}>
          {item.label}
        </CommandItem>
      ))}
    </CommandList>
  </CommandContent>
</Command>
```

### Key patterns

Grouped items:

```tsx
<CommandList>
  {collection.group().map(([group, items]) => (
    <CommandGroup heading={group} key={group}>
      {items.map((item) => (
        <CommandItem item={item} key={item.value}>
          {item.label}
        </CommandItem>
      ))}
    </CommandGroup>
  ))}
</CommandList>
```

Shortcuts:

```tsx
// ...
<CommandItem item={item} key={item.value}>
  {item.label}
  <CommandShortcut>{item.shortcut}</CommandShortcut>
</CommandItem>
// ...
```
## Common pitfalls

- Using command list without clear grouping and action labels.
- Binding critical destructive actions without confirmation pathway.
- Missing keyboard accessibility checks for arrow/select/escape interactions.

## Registry example files

- [`example-default.tsx`](/registry/react/examples/command/example-default.tsx)
- [`example-dialog.tsx`](/registry/react/examples/command/example-dialog.tsx)
- [`example-groups.tsx`](/registry/react/examples/command/example-groups.tsx)
- [`example-shortcuts.tsx`](/registry/react/examples/command/example-shortcuts.tsx)
- [`example-with-footer.tsx`](/registry/react/examples/command/example-with-footer.tsx)
