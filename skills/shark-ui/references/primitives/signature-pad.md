# Shark Signature pad

## When to use

- Capturing handwritten signatures (agreements, deliveries, kiosks).
- Clearing, previewing, or submitting signature bitmaps from a canvas.

## Install

```bash
npx shadcn@latest add @shark/signature-pad
```

Manual deps from docs:

```bash
npm install @ark-ui/react lucide-react
```

## Canonical imports

```tsx
import { SignaturePad, useSignaturePad } from "@/components/ui/signature-pad"
```

## Minimal pattern

```tsx
<SignaturePad />
```

### Key patterns

`useSignaturePad` exposes Ark context for custom toolbars (clear, undo) and image export. Pair with `Field` in `example-field` for labeled forms.

## Common pitfalls

- Expecting vector output—component works with raster canvas data; handle encoding yourself.
- Missing fixed width/height on the canvas container—layout can collapse on flex parents.
- Forgetting `lucide-react` when examples import icons for controls.

## Registry example files

- [`example-default.tsx`](/registry/react/examples/signature-pad/example-default.tsx)
- [`example-field.tsx`](/registry/react/examples/signature-pad/example-field.tsx)
- [`example-image-preview.tsx`](/registry/react/examples/signature-pad/example-image-preview.tsx)
