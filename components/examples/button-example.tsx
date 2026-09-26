import { Button } from "@/registry/react/components/button";

const VARIANTS = [
  "default",
  "outline",
  "destructive",
  "secondary",
  "ghost",
  "link",
] as const;

export const ButtonExample = () => (
  <div className="grid grid-cols-3 gap-2">
    {VARIANTS.map((variant) => (
      <Button className="w-full" key={variant} tabIndex={-1} variant={variant}>
        {variant.charAt(0).toUpperCase() + variant.slice(1)}
      </Button>
    ))}
  </div>
);
