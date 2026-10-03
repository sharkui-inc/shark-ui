import { tv } from "tailwind-variants";

export const priorityIconVariants = tv({
  variants: {
    priority: {
      High: "text-warning-foreground",
      Low: "text-muted-foreground",
      Medium: "text-foreground",
    },
  },
});
