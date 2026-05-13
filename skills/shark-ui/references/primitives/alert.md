# Shark Alert

## When to use

- Inline status messaging in content flows.
- Semantic feedback variants (`info`, `success`, `warning`, `error`) with optional icons and actions.

## When NOT to use

- If the message is transient and should auto-dismiss -> use Toast instead.
- If the message requires user action before proceeding -> use AlertDialog instead.
- If it's a brief hover hint -> use Tooltip instead.

## Install

```bash
npx shadcn@latest add @shark/alert
```

Manual deps from docs:

```bash
npm install @ark-ui/react
```

## Canonical imports

```tsx
import { Alert, AlertAction, AlertDescription, AlertTitle } from "@/components/ui/alert"
```

## Minimal pattern

```tsx
<Alert>
  <AlertTitle>Heads up!</AlertTitle>
  <AlertDescription>
    You can add components and dependencies to your app using the cli.
  </AlertDescription>
</Alert>
```

### Key patterns

Alert with semantic icon (do NOT use `aria-hidden` — icon conveys status):

```tsx
<Alert variant="info">
  <InfoIcon />
  <AlertTitle>Heads up!</AlertTitle>
  <AlertDescription>You can add components using the CLI.</AlertDescription>
</Alert>
```

Variants: `default`, `info`, `success`, `warning`, `error`.

Alert with action buttons (use `AlertAction`):

```tsx
<Alert>
  <InfoIcon />
  <AlertTitle>Heads up!</AlertTitle>
  <AlertDescription>Describe what can be done about it here.</AlertDescription>
  <AlertAction>
    <Button size="xs" variant="ghost">Dismiss</Button>
    <Button size="xs">Ok</Button>
  </AlertAction>
</Alert>
```

## Common pitfalls

- Using alert variants for passive decoration instead of meaningful semantic status.
- Missing title/description structure in complex alerts, reducing scannability.
- Hiding semantic alert icons with `aria-hidden` when they convey status meaning.

## Registry example files

- [`example-custom-color.tsx`](/registry/react/examples/alert/example-custom-color.tsx)
- [`example-default.tsx`](/registry/react/examples/alert/example-default.tsx)
- [`example-variant-default.tsx`](/registry/react/examples/alert/example-variant-default.tsx)
- [`example-variant-destructive.tsx`](/registry/react/examples/alert/example-variant-destructive.tsx)
- [`example-variant-info.tsx`](/registry/react/examples/alert/example-variant-info.tsx)
- [`example-variant-success.tsx`](/registry/react/examples/alert/example-variant-success.tsx)
- [`example-variant-warning.tsx`](/registry/react/examples/alert/example-variant-warning.tsx)
- [`example-with-action.tsx`](/registry/react/examples/alert/example-with-action.tsx)
- [`example-with-icon.tsx`](/registry/react/examples/alert/example-with-icon.tsx)
