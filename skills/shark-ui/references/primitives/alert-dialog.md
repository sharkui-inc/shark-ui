# Shark Alert Dialog

## When to use

- Critical confirmation flows before destructive actions.
- Blocking decisions that require explicit acknowledgement.

## When NOT to use

- If the content is informational (no destructive action) -> use Dialog instead.
- If the message is transient feedback -> use Toast instead.
- If the content is contextual and non-blocking -> use Popover instead.

## Install

```bash
npx shadcn@latest add @shark/alert-dialog
```

Manual deps from docs:

```bash
npm install @ark-ui/react
```

## Canonical imports

```tsx
import {
  AlertDialog,
  AlertDialogClose,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
```

## Minimal pattern

```tsx
<AlertDialog>
  <AlertDialogTrigger asChild>
    <Button variant="destructive-outline">Delete Account</Button>
  </AlertDialogTrigger>
  <AlertDialogContent>
    <AlertDialogHeader>
      <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
      <AlertDialogDescription>
        This action cannot be undone.
      </AlertDialogDescription>
    </AlertDialogHeader>
    <AlertDialogFooter>
      <AlertDialogClose asChild>
        <Button variant="ghost">Cancel</Button>
      </AlertDialogClose>
      <AlertDialogClose asChild>
        <Button variant="destructive">Delete Account</Button>
      </AlertDialogClose>
    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog>
```

### Key patterns

Shorthand Title and Description

```tsx
// …
<AlertDialogHeader 
  title="Are you absolutely sure?" 
  description="This action cannot be undone." 
/>
// …
```

Destructive action:

```tsx
// ...
<AlertDialogAction variant="destructive">Delete Account</AlertDialogAction>
// ...
```

## Common pitfalls

- Using AlertDialog as a generic content modal instead of high-risk confirmation UI.
- Omitting explicit destructive/cancel action distinction.
- Wrapping dialog sections in extra containers that break built-in layout (use `className="contents"` only when needed).
- Mixing Dialog/Popover composition APIs without validating this primitive's parts.
- Skipping focus-return and escape-key verification on real trigger flows.

## Registry example files

- [`example-default.tsx`](/registry/react/examples/alert-dialog/example-default.tsx)
- [`example-variant-destructive.tsx`](/registry/react/examples/alert-dialog/example-variant-destructive.tsx)