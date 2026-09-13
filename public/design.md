# Shark UI Design Contract

> Use this contract when generating or refining interfaces with Shark UI. It establishes the visual and interaction rules that keep copy-and-own components coherent.

## Product model

- Shark UI is a React component registry built on Ark UI and Tailwind CSS v4.
- Components are copied into the consumer's repository and customized there. Add them through the documented registry or CLI, then prefer Shark UI composition patterns over recreating primitives.
- Read the relevant component Markdown page before implementing. Do not substitute Radix UI or Base UI APIs.

## Color and surfaces

- Use semantic Tailwind utilities such as `bg-background`, `text-foreground`, `bg-card`, `text-muted-foreground`, `border-input`, and `ring-ring`. Do not choose raw palette classes when a semantic token expresses the role.
- Use `destructive`, `warning`, `success`, and `info` only for their semantic status. Do not use them as decoration.
- Keep cards, popovers, inputs, sidebars, and their foreground tokens paired. Preserve contrast in light and dark modes instead of hard-coding separate palette values.

## Typography and geometry

- Use the project's configured `font-sans` and `font-heading` roles. Do not introduce arbitrary font families for a single screen.
- Treat `--radius` as the source of truth. Use the derived radius scale instead of unrelated custom corner radii.
- Prefer consistent spacing with `flex` or `grid` and `gap-*`; use logical direction utilities so layouts work in RTL.

## Interaction and accessibility

- Use semantic interactive elements and the component's documented parts. Preserve visible focus treatment through `ring` tokens.
- Use existing variants and semantic tokens before adding custom classes. Do not introduce arbitrary colors, corner radii, font families, overlay z-index values, or generic visual patterns when Shark tokens, variants, and primitives cover the case.
- Respect each primitive's required composition: triggers compose with `asChild`; overlays need titles; collection controls use Ark collections.

## Detailed references

- [Foundations](https://shark-ui.com/llms/foundations.txt)
- [Styling](https://shark-ui.com/docs/styling.md)
- [Colors](https://shark-ui.com/docs/colors.md)
- [Component documentation](https://shark-ui.com/llms/components.txt)
