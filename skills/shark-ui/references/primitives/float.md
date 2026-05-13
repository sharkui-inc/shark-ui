# Shark Float

## When to use

- Anchored floating UI that is **not** a full popover/dialog—lightweight positioning helper.
- Custom surfaces that still need collision-aware placement relative to a reference element.

## Install

```bash
npx shadcn@latest add @shark/float
```

Manual deps from docs:

```bash
npm install @ark-ui/react tailwind-variants
```

## Canonical imports

```tsx
import { Float } from "@/components/ui/float"
```

## Minimal pattern

```tsx
<Float positioning={{ placement: "bottom-start" }}>{/* anchor + content */}</Float>
```

### Key patterns

Prefer `positioning` options from Ark floating patterns; combine with your own trigger and content elements as shown in registry examples (`example-placement`).

## Common pitfalls

- Using `Float` when `Popover`, `Menu`, or `Tooltip` already cover the interaction—avoid reinventing focus management.
- Hard-coding pixel offsets instead of `positioning` options—let the engine flip on overflow.
- Omitting `tailwind-variants` from manual install when styles depend on it.

## Registry example files

- [`example-default.tsx`](/registry/react/examples/float/example-default.tsx)
- [`example-placement.tsx`](/registry/react/examples/float/example-placement.tsx)
