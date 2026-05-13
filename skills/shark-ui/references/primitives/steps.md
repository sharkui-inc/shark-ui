# Shark Steps

## When to use

- Multi-step flows with a visible progress rail (horizontal or vertical).
- Wizards where each step has its own panel content and next/previous navigation.

## When NOT to use

- If steps are really routes → use real URL segments or Tabs instead.
- If you only need a static numbered list without interaction → use ordered markup, not `Steps`.

## Install

```bash
npx shadcn@latest add @shark/steps
```

Manual deps from docs:

```bash
npm install @ark-ui/react
```

## Canonical imports

```tsx
import {
  Steps,
  StepsCompletedContent,
  StepsContent,
  StepsDescription,
  StepsIndicator,
  StepsItem,
  StepsList,
  StepsNext,
  StepsPrevious,
  StepsSeparator,
  StepsTitle,
  StepsTrigger,
  useSteps,
} from "@/components/ui/steps"
```

## Minimal pattern

```tsx
<Steps count={3}>
  <StepsList>
    <StepsItem index={0}>
      <StepsTrigger>
        <StepsIndicator>1</StepsIndicator>
      </StepsTrigger>
      <StepsSeparator />
    </StepsItem>
    {/* …repeat for each index */}
  </StepsList>
  <StepsContent index={0}>Step 1 body</StepsContent>
  <StepsCompletedContent>Done</StepsCompletedContent>
</Steps>
```

### Key patterns

Drive `count` and render `StepsItem` + `StepsContent` per index; use `StepsNext` / `StepsPrevious` with `asChild` + `Button`; add `StepsTitle` / `StepsDescription` inside triggers when you need labels; `orientation="vertical"` for vertical rails.

## Common pitfalls

- Mismatching `StepsItem` index and `StepsContent` index (panels will not line up).
- Forgetting `StepsSeparator` between items when you expect a continuous rail.
- Omitting `StepsCompletedContent` when the flow should show a finished state.

## Registry example files

- [`example-controlled.tsx`](/registry/react/examples/steps/example-controlled.tsx)
- [`example-default.tsx`](/registry/react/examples/steps/example-default.tsx)
- [`example-description.tsx`](/registry/react/examples/steps/example-description.tsx)
- [`example-icon.tsx`](/registry/react/examples/steps/example-icon.tsx)
- [`example-loading.tsx`](/registry/react/examples/steps/example-loading.tsx)
- [`example-title.tsx`](/registry/react/examples/steps/example-title.tsx)
- [`example-vertical.tsx`](/registry/react/examples/steps/example-vertical.tsx)
