# Shark Announcement

## When to use

- Short, high-visibility notices (releases, maintenance, promos) inline in a page or layout.
- Status-colored banners with optional title and actions.

## Install

```bash
npx shadcn@latest add @shark/announcement
```

Manual deps from docs:

```bash
npm install @ark-ui/react tailwind-variants
```

## Canonical imports

```tsx
import { Announcement, AnnouncementTitle } from "@/components/ui/announcement"
```

## Minimal pattern

```tsx
<Announcement variant="info">
  <AnnouncementTitle>New version available</AnnouncementTitle>
</Announcement>
```

### Key patterns

`announcementVariants` (from source) drives `variant` styling—match docs for `default`, `success`, `warning`, `destructive`, `info`. Compose icons and links as children per examples.

## Common pitfalls

- Using `Announcement` for long-form content; keep copy short and scannable.
- Assuming Radix `Alert` API; Shark announcement uses `tailwind-variants` and local part names—check MDX tables.
- Missing semantic structure when you need a heading—use `AnnouncementTitle` when appropriate.

## Registry example files

- [`example-default.tsx`](/registry/react/examples/announcement/example-default.tsx)
- [`example-variant-default.tsx`](/registry/react/examples/announcement/example-variant-default.tsx)
- [`example-variant-destructive.tsx`](/registry/react/examples/announcement/example-variant-destructive.tsx)
- [`example-variant-info.tsx`](/registry/react/examples/announcement/example-variant-info.tsx)
- [`example-variant-success.tsx`](/registry/react/examples/announcement/example-variant-success.tsx)
- [`example-variant-warning.tsx`](/registry/react/examples/announcement/example-variant-warning.tsx)
- [`example-with-icon.tsx`](/registry/react/examples/announcement/example-with-icon.tsx)
- [`example-with-link.tsx`](/registry/react/examples/announcement/example-with-link.tsx)
- [`example-without-badge.tsx`](/registry/react/examples/announcement/example-without-badge.tsx)
