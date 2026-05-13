# Shark Textarea

## When to use

- Multi-line text entry (notes, feedback, descriptions).
- Comment/message inputs where text length is variable.

## Install

```bash
npx shadcn@latest add @shark/textarea
```

Manual deps from docs:

```bash
npm install @ark-ui/react
```

## Canonical imports

```tsx
import { Textarea } from "@/components/ui/textarea"
```

## Minimal pattern

```tsx
<Textarea aria-label="Message" placeholder="Write your message" />
```

For form fields, prefer wrapping `Textarea` with `Field` + `FieldLabel` + `FieldError` so labels, validation, and errors stay semantically linked.
`Textarea` already integrates with Ark field control semantics, so it can sit directly inside `Field` without extra wrappers.

### Key patterns

Textarea in a field with label:

```tsx
<Field name="bio">
  <FieldLabel>Bio</FieldLabel>
  <Textarea placeholder="Tell us about yourself..." />
  <FieldDescription>Max 500 characters.</FieldDescription>
  <FieldError />
</Field>
```

Sizes: `sm`, `default`, `lg` on `Textarea`.

`Textarea` wraps Ark UI `Field.Control` internally, so it works as a form control directly inside `Field`.


## Common pitfalls

- Using textarea when a constrained single-line input is expected.
- Missing labels/descriptions for required long-form fields.
- Forgetting explicit submit button type handling in textarea forms.
- Wrapping `Textarea` in unnecessary control wrappers when it already composes cleanly inside `Field`.

## Registry example files

- [`example-autoresize.tsx`](/registry/react/examples/textarea/example-autoresize.tsx)
- [`example-controlled.tsx`](/registry/react/examples/textarea/example-controlled.tsx)
- [`example-default.tsx`](/registry/react/examples/textarea/example-default.tsx)
- [`example-disabled.tsx`](/registry/react/examples/textarea/example-disabled.tsx)
- [`example-form.tsx`](/registry/react/examples/textarea/example-form.tsx)
- [`example-invalid.tsx`](/registry/react/examples/textarea/example-invalid.tsx)
- [`example-with-field.tsx`](/registry/react/examples/textarea/example-with-field.tsx)
