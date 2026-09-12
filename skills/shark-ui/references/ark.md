# Ark UI, not Radix or Base UI

Shark wraps Ark UI. Do not port Radix, Base UI, or shadcn APIs by changing imports.

Human guides: `content/docs/migration/radix.mdx`, `content/docs/migration/base-ui.mdx`, `content/docs/migration/shadcn.mdx`.

Confirm anatomy and props in the component MDX + `registry/react/examples/<name>/`.

## Triggers

Radix uses `asChild`. Base UI uses `render`. Shark uses `asChild` with one child.

```tsx
// Base UI. Do not copy.
<Menu.Trigger render={<button type="button">Open</button>} />

// Shark / Ark
<MenuTrigger asChild>
  <Button variant="outline">Open</Button>
</MenuTrigger>
```

Radix `DropdownMenu` is Shark `Menu` (`MenuTrigger`, `MenuContent`, `MenuItem`).

## Select / Combobox / Listbox

Radix and Base UI treat JSX children as the list (`<Select.Item value="next">`). Shark reads an Ark `collection`. Pass `item={item}` on each row. Pattern: [`collections.md`](collections.md).

Controlled values are string arrays, not a single string.

## Toggle Group

```tsx
// Radix
<ToggleGroup type="single" defaultValue="daily">

// Shark / Ark
<ToggleGroup defaultValue={["daily"]}>
```

## Accordion

```tsx
// Radix
<Accordion type="single" collapsible defaultValue="item-1">

// Shark / Ark
<Accordion defaultValue={["item-1"]}>
```

## Input OTP

No `InputOTPGroup`. No `input-otp` package. One `InputOTPSlot` per character with `index`.

```tsx
<InputOTP>
  <InputOTPSlot index={0} />
  <InputOTPSlot index={1} />
  <InputOTPSlot index={2} />
  <InputOTPSeparator />
  <InputOTPSlot index={3} />
  <InputOTPSlot index={4} />
  <InputOTPSlot index={5} />
</InputOTP>
```

## Overlay titles

`DialogTitle`, `SheetTitle`, `DrawerTitle` are required. Hide with `className="sr-only"` when the title should not be visible.
