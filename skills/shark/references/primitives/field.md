# Shark Field

## When to use

- Labeled inputs, descriptions, and error text for form controls using Ark **Field** primitives underneath Shark styling.
- Any screen where multiple controls need consistent vertical rhythm and validation affordances.

## When not to use

- Standalone decorative labels without controls—consider typography components or simple text.
- When MDX recommends a simpler primitive-only pattern for special cases—follow docs.

## Install

```bash
npx shadcn@latest add @shark/field
```

Often co-installed with **`input`**, **`select`**, **`textarea`**, etc.

## Canonical imports (shark-ui repo)

```tsx
import {
  Field,
  FieldLabel,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldSet,
} from "@/registry/react/components/field";
```

`FieldLabel` wraps Ark `@ark-ui/react/field` label parts—see [`../../registry/react/components/field.tsx`](../../registry/react/components/field.tsx).

## Minimal pattern

```tsx
<Field>
  <FieldLabel htmlFor="email">Email</FieldLabel>
  <Input id="email" type="email" />
  <FieldDescription>We will never share your email.</FieldDescription>
  <FieldError />
</Field>
```

Wire **`invalid`** / error messages per MDX when using schema validation libraries.

## Registry examples

[`../../registry/react/examples/field/`](../../registry/react/examples/field/) — grouped fields, descriptions, error states.

## Pitfalls

- Using `placeholder` instead of an accessible label.
- Mismatched `htmlFor` / `id` pairs when composing custom slots.

## Further reading

- [Ark UI Field](https://ark-ui.com/docs/components/field)
- [`../../content/docs/components/field.mdx`](../../content/docs/components/field.mdx)
- Forms rules: [`../rules/forms.md`](../rules/forms.md)
