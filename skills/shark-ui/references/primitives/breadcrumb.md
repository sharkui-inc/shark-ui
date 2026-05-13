# Shark Breadcrumb

## When to use

- Hierarchy/location indicators for current page context.
- Compact navigation trails for nested routes and detail pages.

## Install

```bash
npx shadcn@latest add @shark/breadcrumb
```

Manual deps from docs:

```bash
npm install @ark-ui/react
```

## Canonical imports

```tsx
import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
```

## Minimal pattern

```tsx
<Breadcrumb>
  <BreadcrumbList>
    <BreadcrumbItem>
      <BreadcrumbLink href="/">Home</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbEllipsis />
    </BreadcrumbItem>
    <BreadcrumbItem>
      <BreadcrumbLink href="/components">Components</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
    </BreadcrumbItem>
  </BreadcrumbList>
</Breadcrumb>
```

### Key patterns

Icon-only home link (requires `aria-label`):

```tsx
<BreadcrumbItem>
  <BreadcrumbLink aria-label="Home" href="/">
    <HomeIcon aria-hidden="true" className="size-4" />
  </BreadcrumbLink>
</BreadcrumbItem>
```

Custom separator:

```tsx
<BreadcrumbSeparator>
  <SlashIcon className="size-3.5" />
</BreadcrumbSeparator>
```

## Common pitfalls

- Using breadcrumb as primary nav menu instead of contextual trail.
- Omitting `aria-label` on icon-only breadcrumb items.
- Adding deep breadcrumb chains without meaningful hierarchy.

## Registry example files

- [`example-collapsed.tsx`](/registry/react/examples/breadcrumb/example-collapsed.tsx)
- [`example-custom-separator.tsx`](/registry/react/examples/breadcrumb/example-custom-separator.tsx)
- [`example-default.tsx`](/registry/react/examples/breadcrumb/example-default.tsx)
- [`example-with-link.tsx`](/registry/react/examples/breadcrumb/example-with-link.tsx)
- [`example-with-menu.tsx`](/registry/react/examples/breadcrumb/example-with-menu.tsx)
