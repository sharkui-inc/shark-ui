# Shark Pagination

## When to use

- Paged navigation over long result sets.
- Prev/next and index controls paired with data tables/lists.

## Install

```bash
npx shadcn@latest add @shark/pagination
```

Manual deps from docs:

```bash
npm install @ark-ui/react
```

## Canonical imports

```tsx
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
```

## Minimal pattern

```tsx
<Pagination>
  <PaginationContent>
    <PaginationItem>
      <PaginationPrevious href="#" />
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="#">1</PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationEllipsis />
    </PaginationItem>
    <PaginationItem>
      <PaginationNext href="#" />
    </PaginationItem>
  </PaginationContent>
</Pagination>
```

### Key patterns

Full pagination with active page:

```tsx
<Pagination>
  <PaginationContent>
    <PaginationItem>
      <PaginationPrevious href="#" />
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="#">1</PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="#" isActive>2</PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="#">3</PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationEllipsis />
    </PaginationItem>
    <PaginationItem>
      <PaginationNext href="#" />
    </PaginationItem>
  </PaginationContent>
</Pagination>
```


## Common pitfalls

- Using pagination controls without synchronizing data/page state.
- Mixing pagination with infinite-scroll UX in the same surface.
- Missing disabled-state handling on prev/next boundaries.

## Registry example files

- [`example-controlled.tsx`](/registry/react/examples/pagination/example-controlled.tsx)
- [`example-default.tsx`](/registry/react/examples/pagination/example-default.tsx)
- [`example-links.tsx`](/registry/react/examples/pagination/example-links.tsx)
- [`example-page-range.tsx`](/registry/react/examples/pagination/example-page-range.tsx)
- [`example-table.tsx`](/registry/react/examples/pagination/example-table.tsx)
