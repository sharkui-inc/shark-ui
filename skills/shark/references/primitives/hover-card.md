# Shark Hover Card

## When to use

Use **hover-card** when Shark docs describe this primitive for the task.

## When not to use

Pick another registry row from [component-registry.md](../component-registry.md) if MDX points you elsewhere.

## Install

```bash
npx shadcn@latest add @shark/hover-card
```

## Source of truth

| Kind | Path |
|------|------|
| Docs | [`content/docs/components/hover-card.mdx`](../../content/docs/components/hover-card.mdx) |
| Examples | [`registry/react/examples/hover-card/`](../../registry/react/examples/hover-card/) |
| Source | [`registry/react/components/hover-card.tsx`](../../registry/react/components/hover-card.tsx) |

## Imports (shark-ui repo)

```tsx
import { /* named exports from MDX */ } from "@/registry/react/components/hover-card";
```

Consumer apps: use paths from installation docs (often `@/components/ui/...`).

## Minimal pattern

Follow **Anatomy** and **Usage** in the MDX file; copy structure from an `example-*.tsx` under the examples path when present.

## Pitfalls

- Do not assume Radix-only APIs; confirm Ark/Shark props in MDX and source.
- Prefer registry examples over inventing markup.

## See also

- [Component registry](../component-registry.md)
