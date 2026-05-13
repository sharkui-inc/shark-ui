# Shark Input Group

## When to use

- Text fields with leading/trailing icons, labels, buttons, or badges in one control.
- Compact search bars, URL editors, and password fields with inline actions.

## Install

```bash
npx shadcn@latest add @shark/input-group
```

Manual deps from docs:

```bash
npm install @ark-ui/react tailwind-variants
```

## Canonical imports

```tsx
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
  InputGroupText,
  InputGroupTextarea,
} from "@/components/ui/input-group"
```

## Minimal pattern

```tsx
<InputGroup>
  <InputGroupAddon align="inline-start">https://</InputGroupAddon>
  <InputGroupInput placeholder="example.com" />
</InputGroup>
```

### Key patterns

Use `InputGroupAddon` for non-focusable prefixes/suffixes; `InputGroupButton` for actions; `InputGroupText` for inline readouts. `align` props control block/inline placement—see alignment examples.

## Common pitfalls

- Nesting a raw `<input>` instead of `InputGroupInput` / `InputGroupTextarea`—you lose slot styling and focus ring cohesion.
- Mixing multiple focusable elements without clear tab order—keep one primary input.
- Forgetting `tailwind-variants` in manual installs.

## Registry example files

- [`example-align-block-end.tsx`](/registry/react/examples/input-group/example-align-block-end.tsx)
- [`example-align-block-start.tsx`](/registry/react/examples/input-group/example-align-block-start.tsx)
- [`example-align-inline-end.tsx`](/registry/react/examples/input-group/example-align-inline-end.tsx)
- [`example-align-inline-start.tsx`](/registry/react/examples/input-group/example-align-inline-start.tsx)
- [`example-default.tsx`](/registry/react/examples/input-group/example-default.tsx)
- [`example-disabled.tsx`](/registry/react/examples/input-group/example-disabled.tsx)
- [`example-input-group.tsx`](/registry/react/examples/input-group/example-input-group.tsx)
- [`example-invalid.tsx`](/registry/react/examples/input-group/example-invalid.tsx)
- [`example-password-strength-checker.tsx`](/registry/react/examples/input-group/example-password-strength-checker.tsx)
- [`example-size-lg.tsx`](/registry/react/examples/input-group/example-size-lg.tsx)
- [`example-size-md.tsx`](/registry/react/examples/input-group/example-size-md.tsx)
- [`example-size-sm.tsx`](/registry/react/examples/input-group/example-size-sm.tsx)
- [`example-with-badge.tsx`](/registry/react/examples/input-group/example-with-badge.tsx)
- [`example-with-button.tsx`](/registry/react/examples/input-group/example-with-button.tsx)
- [`example-with-inner-label.tsx`](/registry/react/examples/input-group/example-with-inner-label.tsx)
- [`example-with-keyboard-shortcut.tsx`](/registry/react/examples/input-group/example-with-keyboard-shortcut.tsx)
- [`example-with-menu.tsx`](/registry/react/examples/input-group/example-with-menu.tsx)
- [`example-with-number-input.tsx`](/registry/react/examples/input-group/example-with-number-input.tsx)
- [`example-with-spinner.tsx`](/registry/react/examples/input-group/example-with-spinner.tsx)
- [`example-with-textarea.tsx`](/registry/react/examples/input-group/example-with-textarea.tsx)
- [`example-with-tooltip.tsx`](/registry/react/examples/input-group/example-with-tooltip.tsx)
