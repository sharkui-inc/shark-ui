# Shark Button

## When to use

- Primary and secondary action triggers.
- Icon, loading, and shortcut-enhanced actions across forms and toolbars.

## Install

```bash
npx shadcn@latest add @shark/button
```

Manual deps from docs:

```bash
npm install @ark-ui/react
```

## Canonical imports

```tsx
import { Button } from "@/components/ui/button"
```

## Minimal pattern

```tsx
<Button>Button</Button>
```

`Button` defaults to `type="button"` when rendered as the native button part. In form flows, set `type` explicitly (`button` / `submit` / `reset`) to match intent, especially when using `asChild` composition.

### Key patterns

Variants are set via the `variant` prop:

```tsx
<Button>Default</Button>
<Button variant="outline">Outline</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="destructive">Destructive</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="link">Link</Button>
```

Icon-only button (always needs `aria-label`):

```tsx
<Button aria-label="Close" size="icon" variant="ghost">
  <XIcon />
</Button>
```

Button with icon and text (no opacity on the icon):

```tsx
<Button>
  <PlusIcon />
  Add Item
</Button>
```

Sizes: `xs`, `sm`, `default`, `lg`, `icon-xs`, `icon-sm`, `icon`, `icon-lg`.

### Loading state

Built-in `isLoading` prop (disables and shows spinner automatically):

```tsx
<Button isLoading={isLoading} onClick={handleClick}>Submit</Button>
```

Composite approach (manual `Spinner` + `disabled`):

```tsx
<Button disabled>
  <Spinner />
  Loading...
</Button>
```

Prefer the `isLoading` prop for typical async actions. Use the composite approach when you need custom spinner placement or label.

## Common pitfalls

- Omitting explicit `type` inside forms/dialogs and triggering unintended submit behavior.
- Using icon-only buttons without `aria-label` on the button.
- Rebuilding button state styling with ad-hoc classes instead of variants/sizes.

## Registry example files

- [`example-custom-color.tsx`](/registry/react/examples/button/example-custom-color.tsx)
- [`example-default.tsx`](/registry/react/examples/button/example-default.tsx)
- [`example-disabled.tsx`](/registry/react/examples/button/example-disabled.tsx)
- [`example-hitbox.tsx`](/registry/react/examples/button/example-hitbox.tsx)
- [`example-icon.tsx`](/registry/react/examples/button/example-icon.tsx)
- [`example-loading.tsx`](/registry/react/examples/button/example-loading.tsx)
- [`example-no-click-effect.tsx`](/registry/react/examples/button/example-no-click-effect.tsx)
- [`example-pill.tsx`](/registry/react/examples/button/example-pill.tsx)
- [`example-size-lg.tsx`](/registry/react/examples/button/example-size-lg.tsx)
- [`example-size-md.tsx`](/registry/react/examples/button/example-size-md.tsx)
- [`example-size-sm.tsx`](/registry/react/examples/button/example-size-sm.tsx)
- [`example-size-xl.tsx`](/registry/react/examples/button/example-size-xl.tsx)
