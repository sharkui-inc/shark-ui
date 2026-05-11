# Shark Label

## When to use

- Standalone **`Label`** from CLI install: plain styled `<label>` for simple `htmlFor` / `id` pairing.
- Rich Ark semantics + errors: prefer **`Field` + `FieldLabel`** ([`field.md`](./field.md)) instead of using this registry item alone.

## When not to use

Pick another registry row from [component-registry.md](../component-registry.md) if MDX points you elsewhere.

## Install

```bash
npx shadcn@latest add @shark/label
```

## Source of truth

| Kind | Path |
|------|------|
| Docs | [`content/docs/components/field.mdx`](../../content/docs/components/field.mdx) |
| Examples | [`registry/react/examples/field/`](../../registry/react/examples/field/) |
| Source | `label.tsx` is created in consumer projects via CLI; in-repo work often uses **`FieldLabel`** in [`../../registry/react/components/field.tsx`](../../registry/react/components/field.tsx) |

## Imports (shark-ui repo)

```tsx
import { /* named exports from MDX */ } from "@/registry/react/components/label";
```

Consumer apps: use paths from installation docs (often `@/components/ui/...`).

## Minimal pattern

Follow **Anatomy** and **Usage** in the MDX file; copy structure from an `example-*.tsx` under the examples path when present.

## Pitfalls

- Do not assume Radix-only APIs; confirm Ark/Shark props in MDX and source.
- Prefer registry examples over inventing markup.

## See also

- [Component registry](../component-registry.md)
