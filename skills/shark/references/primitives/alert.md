# Shark Alert

## When to use

Use **alert** when Shark docs describe this primitive for the task.

## When not to use

Pick another registry row from [component-registry.md](../component-registry.md) if MDX points you elsewhere.

## Install

```bash
npx shadcn@latest add @shark/alert
```

## Source of truth

| Kind | Path |
|------|------|
| Docs | [`content/docs/components/alert.mdx`](../../content/docs/components/alert.mdx) |
| Examples | [`registry/react/examples/alert/`](../../registry/react/examples/alert/) |
| Source | [`registry/react/components/alert.tsx`](../../registry/react/components/alert.tsx) |

## Imports (shark-ui repo)

```tsx
import { /* named exports from MDX */ } from "@/registry/react/components/alert";
```

Consumer apps: use paths from installation docs (often `@/components/ui/...`).

## Minimal pattern

Follow **Anatomy** and **Usage** in the MDX file; copy structure from an `example-*.tsx` under the examples path when present.

## Pitfalls

- Do not assume Radix-only APIs; confirm Ark/Shark props in MDX and source.
- Prefer registry examples over inventing markup.

## See also

- [Component registry](../component-registry.md)
