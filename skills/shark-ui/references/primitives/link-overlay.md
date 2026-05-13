# Shark Link Overlay

## When to use

- Cards or rows where **one primary link** should navigate the whole hit area while inner links still work.
- Editorial lists, product tiles, or notification rows with nested actions.

## Install

```bash
npx shadcn@latest add @shark/link-overlay
```

Manual deps from docs:

```bash
npm install @ark-ui/react
```

## Canonical imports

```tsx
import { LinkBox, LinkOverlay } from "@/components/ui/link-overlay"
```

## Minimal pattern

```tsx
<LinkBox className="rounded-lg border p-4">
  <h2 className="font-semibold">
    <LinkOverlay href="/posts/slug">Article title</LinkOverlay>
  </h2>
  <p className="text-muted-foreground text-sm">Summary text…</p>
  <a href="/author">Author</a>
</LinkBox>
```

### Key patterns

`LinkBox` sets `position: relative` and raises normal links above the overlay; `LinkOverlay` is the stretched primary `a` with `data-slot="link-overlay"`. Keep exactly **one** overlay link per box unless docs show otherwise.

## Common pitfalls

- Using `LinkOverlay` without `LinkBox`—stacking context breaks and nested links misbehave.
- Putting important actions only under the overlay without their own `<a>` or `button` above the overlay z-index.
- Duplicating `href` on both overlay and heading text without `asChild` patterns—follow examples to avoid nested interactive elements.

## Registry example files

- [`example-article.tsx`](/registry/react/examples/link-overlay/example-article.tsx)
- [`example-default.tsx`](/registry/react/examples/link-overlay/example-default.tsx)
- [`example-with-link.tsx`](/registry/react/examples/link-overlay/example-with-link.tsx)
