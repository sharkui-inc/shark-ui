# Shark Input

## When to use

- Single-line text entry with variants and addons.
- Email/password/search/file and other typed input flows.

## Install

```bash
npx shadcn@latest add @shark/input
```

Manual deps from docs:

```bash
npm install @ark-ui/react
```

## Canonical imports

```tsx
import { Input } from "@/components/ui/input"
```

## Minimal pattern

```tsx
<Input aria-label="Email" type="email" placeholder="name@company.com" />
```

Always set `type` explicitly on `Input` (`text`, `email`, `password`, `search`, `file`, etc.). Do not rely on browser defaults.
For form fields, prefer wrapping `Input` with `Field` + `FieldLabel` + `FieldError` instead of standalone usage.

### Key patterns

Field-wrapped input (preferred for forms):

```tsx
<Field>
  <FieldLabel>Email</FieldLabel>
  <Input type="email" placeholder="name@company.com" />
  <FieldError>Please enter a valid email.</FieldError>
</Field>
```

Input with addon (InputGroup):

```tsx
<InputGroup>
  <InputGroupInput aria-label="Search" placeholder="Search" type="search" />
  <InputGroupAddon>
    <SearchIcon />
  </InputGroupAddon>
</InputGroup>
```

Sizes: `sm`, `default`, `lg`. Always specify `type` explicitly.


## Common pitfalls

- Omitting explicit `type` and relying on browser defaults.
- Using icon-only affordances without label/aria context.
- Applying heavy class overrides before using built-in size/variant props.

## Registry example files

- [`example-badge.tsx`](/registry/react/examples/input/example-badge.tsx)
- [`example-button-group.tsx`](/registry/react/examples/input/example-button-group.tsx)
- [`example-default.tsx`](/registry/react/examples/input/example-default.tsx)
- [`example-disabled.tsx`](/registry/react/examples/input/example-disabled.tsx)
- [`example-field-group.tsx`](/registry/react/examples/input/example-field-group.tsx)
- [`example-field.tsx`](/registry/react/examples/input/example-field.tsx)
- [`example-file.tsx`](/registry/react/examples/input/example-file.tsx)
- [`example-grid.tsx`](/registry/react/examples/input/example-grid.tsx)
- [`example-inline.tsx`](/registry/react/examples/input/example-inline.tsx)
- [`example-input-group.tsx`](/registry/react/examples/input/example-input-group.tsx)
- [`example-invalid.tsx`](/registry/react/examples/input/example-invalid.tsx)
