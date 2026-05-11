# Forms and inputs (Shark UI)

Use for field composition, validation UI, input groups, and form-heavy examples.

## Core rules

- Prefer **`Field`**, **`FieldLabel`**, **`FieldDescription`**, **`FieldError`** (and related exports) from Shark’s field primitive instead of unlabeled bare inputs.
- Set **`type`** on inputs (`text`, `email`, `number`, …) and on buttons (`button`, `submit`, `reset`) explicitly in forms.
- Preserve accessible naming: associate labels with controls (`htmlFor` / `id`), or provide `aria-label` / `aria-labelledby` when there is no visible label.
- Align invalid state: use `invalid` / `aria-invalid` patterns documented on `Field` and input MDX so error text and borders stay in sync.

## Input group

- Follow **`InputGroup`** docs: respect DOM order for addons vs input so focus behavior matches the implementation in `registry/react/components/input-group.tsx`.

## OTP

- Follow **`InputOTP`** / MDX for length, controlled values, and slot structure specific to Shark’s Ark-based OTP implementation.

## Textarea

- Use **`Textarea`** inside `Field` like other controls unless MDX shows a different composition for custom controls.

## Further reading

- Ark UI Field: [Field documentation](https://ark-ui.com/docs/components/field)
- Shark `field` MDX: `content/docs/components/field.mdx`
- Shark source: `registry/react/components/field.tsx`

## Do / don’t

```tsx
// Do
<Field>
  <FieldLabel>Email</FieldLabel>
  <Input type="email" />
  <FieldError />
</Field>

// Don’t
<input placeholder="Email" className="w-full" />
```
