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

`FieldLabel` is the label of a `Field`. It renders a `<label>` wired to that field (`htmlFor`, `id`, disabled, invalid, readonly, required). Use it when the control has no label part (`Input`, `Textarea`, `NativeSelect`, `Checkbox`, `Switch`, `Combobox`).

A control that owns a label part styles that part with `fieldLabelVariants()` and keeps the part's element, `id`, `htmlFor`, and `aria-labelledby`. Put that `*Label` inside the control root:

- Slider → `SliderLabel`
- RadioGroup → `RadioGroupLabel` or `FieldSet` + `FieldLegend`
- Select / SignaturePad / Rating / DateInput / DatePicker / Listbox / TagsInput / ColorPicker / Calendar / NumberInput / Progress / CircularProgress / CircularSlider / TreeView → their `*Label`
- ToggleGroup → `ToggleGroupLabel` directly inside `ToggleGroup`

Value text that uses the same type (`SliderValue`, `ProgressValue`, `CircularSliderValue`) uses `fieldLabelVariants()` on the value part.

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
