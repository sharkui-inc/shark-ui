# Shark QR Code

## When to use

- Encoding URLs or short strings as a scannable QR image.
- Pairing a code with optional center overlay (logo) or download affordance.

## When NOT to use

- If you only need a static asset generated server-side once → pre-render an image instead.
- If the payload is very large or non-string binary → QR is the wrong format.

## Install

```bash
npx shadcn@latest add @shark/qr-code
```

Manual deps from docs:

```bash
npm install @ark-ui/react
```

## Canonical imports

```tsx
import {
  QrCode,
  QrCodeDownload,
  QrCodeFrame,
  QrCodeOverlay,
  useQrCode,
} from "@/components/ui/qr-code"
```

## Minimal pattern

```tsx
<QrCode value="https://example.com">
  <QrCodeFrame />
</QrCode>
```

### Key patterns

Size and framing use CSS variables on the root (for example `[--qr-code-size:…]`); add `QrCodeOverlay` for a centered logo; use `QrCodeDownload` when you need a file download trigger.

Error correction and pixel shape are controlled via Ark `QrCode.Root` props—see component MDX.

## Common pitfalls

- Forgetting the `value` string (nothing renders meaningfully without it).
- Using extreme overlay size relative to the code (scanning can fail).
- Assuming print contrast without testing light/dark theme fills.

## Registry example files

- [`example-default.tsx`](/registry/react/examples/qr-code/example-default.tsx)
- [`example-download.tsx`](/registry/react/examples/qr-code/example-download.tsx)
- [`example-error-correction.tsx`](/registry/react/examples/qr-code/example-error-correction.tsx)
- [`example-overlay.tsx`](/registry/react/examples/qr-code/example-overlay.tsx)
- [`example-size.tsx`](/registry/react/examples/qr-code/example-size.tsx)
