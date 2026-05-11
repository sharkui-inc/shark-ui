# Shark Textarea

## When to use

Use **textarea** when Shark docs describe this primitive for the task.

## When not to use

Pick another registry row from [component-registry.md](../component-registry.md) if MDX points you elsewhere.

## Install

```bash
npx shadcn@latest add @shark/textarea
```

## Source of truth

| Kind | Path |
|------|------|
| Docs | [`content/docs/components/textarea.mdx`](../../content/docs/components/textarea.mdx) |
| Examples | [`registry/react/examples/textarea/`](../../registry/react/examples/textarea/) |
| Source | [`registry/react/components/textarea.tsx`](../../registry/react/components/textarea.tsx) |

## Imports (shark-ui repo)

```tsx
import { /* named exports from MDX */ } from "@/registry/react/components/textarea";
```

Consumer apps: use paths from installation docs (often `@/components/ui/...`).

## Minimal pattern

Follow **Anatomy** and **Usage** in the MDX file; copy structure from an `example-*.tsx` under the examples path when present.

## Pitfalls

- Do not assume Radix-only APIs; confirm Ark/Shark props in MDX and source.
- Prefer registry examples over inventing markup.

## See also

- [Component registry](../component-registry.md)
