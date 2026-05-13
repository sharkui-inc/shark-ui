# Shark Table

## When to use

- Structured tabular datasets.
- Sortable/filterable row and column displays.

## Install

```bash
npx shadcn@latest add @shark/table
```

Manual deps from docs:

```bash
npm install @ark-ui/react
```

## Canonical imports

```tsx
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
```

## Minimal pattern

```tsx
<Table>
  <TableHeader>
    <TableRow>
      <TableHead>Name</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell>Ada Lovelace</TableCell>
    </TableRow>
  </TableBody>
</Table>
```

### Key patterns

- **Semantic baseline**: start with `TableHeader`/`TableBody`/`TableRow`/`TableHead`/`TableCell`, then add `TableCaption` and `TableFooter` as needed.
- **Status-rich rows**: combine `Badge` and decorative dots/icons for state columns while keeping text primary.
- **Interactive data grids**: pair Shark table parts with TanStack Table (`flexRender`, row models, selection state) for sorting/pagination/selection.
- **No-results state**: always render an explicit empty-state row with `colSpan` matching visible columns.
- **Fixed layout control**: use `className="table-fixed"` and column width styles when predictable column sizing is required.

## Common pitfalls

- Assuming `Table` itself provides sorting/filter/pagination state; these come from your data layer (for example TanStack Table).
- Mixing header/body cell semantics (`TableHead` in body rows or `TableCell` in headers).
- Forgetting to align `colSpan` with actual visible columns in footer/empty rows.
- Using table patterns where card/list layouts are more suitable on small screens without responsive handling.
- Omitting `aria-label` for row-selection checkboxes in interactive tables.

## Registry example files

- [`example-action-bar.tsx`](/registry/react/examples/table/example-action-bar.tsx)
- [`example-actions.tsx`](/registry/react/examples/table/example-actions.tsx)
- [`example-context-menu.tsx`](/registry/react/examples/table/example-context-menu.tsx)
- [`example-default.tsx`](/registry/react/examples/table/example-default.tsx)
- [`example-footer.tsx`](/registry/react/examples/table/example-footer.tsx)
- [`example-not-hoverable.tsx`](/registry/react/examples/table/example-not-hoverable.tsx)
- [`example-striped.tsx`](/registry/react/examples/table/example-striped.tsx)
