# Shark Input OTP

## When to use

- One-time passcode entry with segmented slots.
- Verification code flows with strict length formatting.

## Install

```bash
npx shadcn@latest add @shark/input-otp
```

Manual deps from docs:

```bash
npm install @ark-ui/react lucide-react
```

## Canonical imports

```tsx
import {
  InputOTP,
  InputOTPSlot,
  InputOTPSeparator,
} from "@/components/ui/otp-field"
```

## Minimal pattern

```tsx
<InputOTP aria-label="Verification code" length={6}>
  <InputOTPSlot aria-label="Character 1 of 6" />
  <InputOTPSlot aria-label="Character 2 of 6" />
  <InputOTPSlot aria-label="Character 3 of 6" />
  <InputOTPSeparator />
  <InputOTPSlot aria-label="Character 4 of 6" />
  <InputOTPSlot aria-label="Character 5 of 6" />
  <InputOTPSlot aria-label="Character 6 of 6" />
</InputOTP>
```

### Key patterns

OTP with label and controlled value:

```tsx
const [value, setValue] = useState("")

<div className="flex flex-col gap-2">
  <Label>Verification code</Label>
  <InputOTP
    length={6}
    value={value}
    onValueChange={setValue}
  >
    <InputOTPSlot aria-label="Character 1 of 6" />
    <InputOTPSlot aria-label="Character 2 of 6" />
    <InputOTPSlot aria-label="Character 3 of 6" />
    <InputOTPSeparator />
    <InputOTPSlot aria-label="Character 4 of 6" />
    <InputOTPSlot aria-label="Character 5 of 6" />
    <InputOTPSlot aria-label="Character 6 of 6" />
  </InputOTP>
</div>
```

Digit-only SMS-style codes use Ark UI’s default `validationType` (`numeric`) and matching `inputMode`; set those props explicitly only when you need different behavior.

Ensure slot count matches `length`.


## Common pitfalls

- Slot count mismatch with `length`, causing broken OTP UX.
- Missing `aria-label` when no visible label is present.
- Using OTP slots for arbitrary text input instead of fixed verification codes.

## Registry example files

- [`example-blur-on-complete.tsx`](/registry/react/examples/input-otp/example-blur-on-complete.tsx)
- [`example-controlled.tsx`](/registry/react/examples/input-otp/example-controlled.tsx)
- [`example-custom-size.tsx`](/registry/react/examples/input-otp/example-custom-size.tsx)
- [`example-default.tsx`](/registry/react/examples/input-otp/example-default.tsx)
- [`example-disabled.tsx`](/registry/react/examples/input-otp/example-disabled.tsx)
- [`example-four-digits.tsx`](/registry/react/examples/input-otp/example-four-digits.tsx)
- [`example-invalid.tsx`](/registry/react/examples/input-otp/example-invalid.tsx)
- [`example-mask.tsx`](/registry/react/examples/input-otp/example-mask.tsx)
- [`example-separator.tsx`](/registry/react/examples/input-otp/example-separator.tsx)
- [`example-with-placeholder.tsx`](/registry/react/examples/input-otp/example-with-placeholder.tsx)
