# Shark Clipboard

## When to use

Use **clipboard** when Shark docs describe this primitive for the task.

## When not to use

Pick another registry row from [component-registry.md](../component-registry.md) if MDX points you elsewhere.

## Install

```bash
npx shadcn@latest add @shark/clipboard
```

## Source of truth

| Kind | Path |
|------|------|
| Docs | [`content/docs/components/clipboard.mdx`](../../content/docs/components/clipboard.mdx) |
| Examples | [`registry/react/examples/clipboard/`](../../registry/react/examples/clipboard/) |
| Source | [`registry/react/components/clipboard.tsx`](../../registry/react/components/clipboard.tsx) |

## Imports (shark-ui repo)

```tsx
import { /* named exports from MDX */ } from "@/registry/react/components/clipboard";
```

Consumer apps: use paths from installation docs (often `@/components/ui/...`).

## Minimal pattern

Follow **Anatomy** and **Usage** in the MDX file; copy structure from an `example-*.tsx` under the examples path when present.

## Pitfalls

- Do not assume Radix-only APIs; confirm Ark/Shark props in MDX and source.
- Prefer registry examples over inventing markup.

## See also

- [Component registry](../component-registry.md)
