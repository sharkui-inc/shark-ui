---
name: shark-ui
description: >-
  Implements and migrates Shark UI components (Ark UI + Tailwind, shadcn-style
  registry). Use when building overlays, forms, collections (Select, Combobox,
  Listbox), menus, sidebar, charts, AI chat UI, or converting Radix, Base UI, or
  shadcn snippets. Shark is Ark UI, not Radix or Base UI: triggers use asChild,
  lists use collection and item.
compatibility: Requires Tailwind CSS v4 and @ark-ui/react.
---

# Shark UI

Registry on [Ark UI](https://ark-ui.com). Install with `npx shadcn@latest add @shark/<name>`. Do not copy Radix or Base UI APIs.

## Source

1. [`CODE_STYLE.md`](../../CODE_STYLE.md)
2. Component MDX + one file in `registry/react/examples/<name>/`
3. Props and parts: `registry/react/components/<name>.tsx`

Do not invent Shark or Ark props.

## Workflow

1. Unsure which primitive? [`references/choose.md`](references/choose.md)
2. Read its MDX and one example.
3. Migrating Radix, Base UI, or shadcn? [`references/ark.md`](references/ark.md)
4. Select / Combobox / Listbox / Autocomplete: [`references/collections.md`](references/collections.md)
5. Forms: [`references/forms.md`](references/forms.md)
6. Overlay, menu, card parts: [`references/composition.md`](references/composition.md)
7. Chat UI: [`references/ai-elements.md`](references/ai-elements.md)
8. Editing registry `tv()`: [`references/styling.md`](references/styling.md)

Consumer apps import from `@/components/ui/<name>`. In-repo examples import from `@/registry/react/components/<name>`.

## CLI

Match the repo package runner (`npx`, `pnpm dlx`, or `bunx`).

```bash
npx shadcn@latest add @shark/<name>
npx shadcn@latest add @shark/ui
npx shadcn@latest add @shark/<name> --dry-run
npx shadcn@latest add @shark/<name> --diff
```

Never `--overwrite` without an explicit ask. Do not invent CLI flags. Do not hand-edit `public/r/<name>.json`.

## Hard rules

- Triggers that merge with a host: `asChild` with exactly one child. Do not use `render`.
- Select, Combobox, Listbox: Ark `collection`. Map `collection.items`. Pass `item={item}` (not `value={item}` as the list data).
- Combobox: `useFilter` + `useListCollection`; filter from `onInputValueChange`.
- `invalid` on `Field` (it forwards to the control). No manual `id` / `htmlFor` inside Field.
- Overlays need `DialogTitle` / `SheetTitle` / `DrawerTitle` (`className="sr-only"` if hidden).
- `TabsTrigger` lives in `TabsList`.
- No `InputOTPGroup`. One `InputOTPSlot` per character with `index`.
- Radix `DropdownMenu` is Shark `Menu`.
