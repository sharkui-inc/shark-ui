# Shark Native Select

## When to use

Use **native-select** when Shark docs describe this primitive for the task.

## When not to use

Pick another registry row from [component-registry.md](../component-registry.md) if MDX points you elsewhere.

## Install

```bash
npx shadcn@latest add @shark/native-select
```

## Source of truth

| Kind | Path |
|------|------|
| Docs | [`content/docs/components/native-select.mdx`](../../content/docs/components/native-select.mdx) |
| Examples | [`registry/react/examples/native-select/`](../../registry/react/examples/native-select/) |
| Source | [`registry/react/components/native-select.tsx`](../../registry/react/components/native-select.tsx) |

## Imports (shark-ui repo)

```tsx
import { /* named exports from MDX */ } from "@/registry/react/components/native-select";
```

Consumer apps: use paths from installation docs (often `@/components/ui/...`).

## Minimal pattern

Follow **Anatomy** and **Usage** in the MDX file; copy structure from an `example-*.tsx` under the examples path when present.

## Pitfalls

- Do not assume Radix-only APIs; confirm Ark/Shark props in MDX and source.
- Prefer registry examples over inventing markup.

## See also

- [Component registry](../component-registry.md)
