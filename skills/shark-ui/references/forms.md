# Forms

`FieldGroup` + `Field` for stacked fields. Do not use `div` + `space-y-*`.

```tsx
<FieldGroup>
  <Field>
    <FieldLabel>Email</FieldLabel>
    <Input type="email" />
  </Field>
</FieldGroup>
```

`Field orientation="horizontal"` for settings rows. `FieldLabel className="sr-only"` when the label is visual-only elsewhere.

Do not set `id` / `htmlFor` inside Field. Ark wires that.

`invalid` and `disabled` go on `Field`; they forward to the control.

```tsx
<Field invalid>
  <FieldLabel>Email</FieldLabel>
  <Input type="email" />
  <FieldDescription>Invalid email address.</FieldDescription>
</Field>
```

`FieldLabel` works with Field-aware controls (`Input`, `Select`, `Combobox`, `Checkbox`, `Switch`, `NumberInput`, and similar). Controls that own a label part keep it inside their root:

- Slider → `SliderLabel`
- RadioGroup → `RadioGroupLabel` or `FieldSet` + `FieldLegend`
- DateInput / DatePicker / Listbox / Progress / CircularProgress / CircularSlider → their `*Label`
- ToggleGroup → title `id` + `aria-labelledby` on the group

`FieldTitle` is visual only. It does not set `htmlFor`.

Which control to pick: [`choose.md`](choose.md).

## InputGroup

Use `InputGroupInput` / `InputGroupTextarea`, not raw `Input` / `Textarea`. Put a focusing addon after the field in DOM order.

```tsx
<InputGroup>
  <InputGroupInput placeholder="Search..." />
  <InputGroupAddon>
    <Button size="icon" type="button">
      <SearchIcon aria-hidden="true" />
    </Button>
  </InputGroupAddon>
</InputGroup>
```

## FieldSet

Related checkboxes, radios, or switches:

```tsx
<FieldSet>
  <FieldLegend variant="label">Preferences</FieldLegend>
  <FieldDescription>Select all that apply.</FieldDescription>
  <FieldGroup className="gap-3">
    <Field orientation="horizontal">
      <Checkbox />
      <FieldLabel className="font-normal">Dark mode</FieldLabel>
    </Field>
  </FieldGroup>
</FieldSet>
```

Form libraries: `content/docs/forms/react-hook-form.mdx`, `tanstack-form.mdx`, `formisch.mdx`.
