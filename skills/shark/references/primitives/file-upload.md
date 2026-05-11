# Shark File Upload

## When to use

Use **file-upload** when Shark docs describe this primitive for the task.

## When not to use

Pick another registry row from [component-registry.md](../component-registry.md) if MDX points you elsewhere.

## Install

```bash
npx shadcn@latest add @shark/file-upload
```

## Source of truth

| Kind | Path |
|------|------|
| Docs | [`content/docs/components/file-upload.mdx`](../../content/docs/components/file-upload.mdx) |
| Examples | [`registry/react/examples/file-upload/`](../../registry/react/examples/file-upload/) |
| Source | [`registry/react/components/file-upload.tsx`](../../registry/react/components/file-upload.tsx) |

## Imports (shark-ui repo)

```tsx
import { /* named exports from MDX */ } from "@/registry/react/components/file-upload";
```

Consumer apps: use paths from installation docs (often `@/components/ui/...`).

## Minimal pattern

Follow **Anatomy** and **Usage** in the MDX file; copy structure from an `example-*.tsx` under the examples path when present.

## Pitfalls

- Do not assume Radix-only APIs; confirm Ark/Shark props in MDX and source.
- Prefer registry examples over inventing markup.

## See also

- [Component registry](../component-registry.md)
