# Shark Avatar

## When to use

- Identity visuals for users/teams in compact spaces.
- Image + fallback initials patterns in cards, lists, and menus.

## Install

```bash
npx shadcn@latest add @shark/avatar
```

Manual deps from docs:

```bash
npm install @ark-ui/react
```

## Canonical imports

```tsx
import {
  Avatar,
  AvatarBadge,
  AvatarFallback,
  AvatarGroup,
  AvatarGroupCount,
  AvatarImage,
  useAvatar,
} from "@/components/ui/avatar"
```

## Minimal pattern

```tsx
<Avatar>
  <AvatarImage alt="@user" src="/avatars/01.png" />
  <AvatarFallback>VV</AvatarFallback>
</Avatar>
```

### Key patterns

Size via the `size` prop (`sm|md|lg`):

```tsx
<Avatar size="lg">
  <AvatarImage alt="…" src="…" />
  <AvatarFallback>VV</AvatarFallback>
</Avatar>
```

Status with badge:

```tsx
<Avatar>
  <AvatarImage alt="…" src="…" />
  <AvatarFallback>VV</AvatarFallback>
  <AvatarBadge variant="success" />
</Avatar>
```

Stack of avatars:

```tsx
<AvatarGroup>
  <Avatar>…</Avatar>
  <Avatar>…</Avatar>
  <Avatar>…</Avatar>
</AvatarGroup>
```

Stack of avatars with count:

```tsx
<AvatarGroup>
  <Avatar>…</Avatar>
  <Avatar>…</Avatar>
  <AvatarGroupCount>+5</AvatarGroupCount>
</AvatarGroup>
```

Stack of avatars with count as popover:

```tsx
<AvatarGroupCount asChild>
  <PopoverTrigger asChild>
    <Button pill size="icon-md" variant="ghost">
      +5
    </Button>
  </PopoverTrigger>
</AvatarGroupCount>
```

## Common pitfalls

- Omitting `AvatarFallback`, causing broken image states with no identity fallback.
- Using non-descriptive `alt` text on `AvatarImage` in accessible contexts.
- Relying on oversized custom wrappers instead of built-in size variants/classes.
- Recreating stacked avatars with raw `flex` / negative margin instead of `AvatarGroup`, which owns overlap and ring styling.

## Registry example files

- [`example-badge-with-icon.tsx`](/registry/react/examples/avatar/example-badge-with-icon.tsx)
- [`example-custom-colors.tsx`](/registry/react/examples/avatar/example-custom-colors.tsx)
- [`example-custom-radius.tsx`](/registry/react/examples/avatar/example-custom-radius.tsx)
- [`example-default.tsx`](/registry/react/examples/avatar/example-default.tsx)
- [`example-fallback-icon.tsx`](/registry/react/examples/avatar/example-fallback-icon.tsx)
- [`example-group-count-icon.tsx`](/registry/react/examples/avatar/example-group-count-icon.tsx)
- [`example-group-count.tsx`](/registry/react/examples/avatar/example-group-count.tsx)
- [`example-group-popover.tsx`](/registry/react/examples/avatar/example-group-popover.tsx)
- [`example-group.tsx`](/registry/react/examples/avatar/example-group.tsx)
- [`example-hover-card.tsx`](/registry/react/examples/avatar/example-hover-card.tsx)
- [`example-size-custom.tsx`](/registry/react/examples/avatar/example-size-custom.tsx)
- [`example-size-lg.tsx`](/registry/react/examples/avatar/example-size-lg.tsx)
- [`example-size-md.tsx`](/registry/react/examples/avatar/example-size-md.tsx)
- [`example-size-sm.tsx`](/registry/react/examples/avatar/example-size-sm.tsx)
- [`example-with-status.tsx`](/registry/react/examples/avatar/example-with-status.tsx)
