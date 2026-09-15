import { cn } from "@/lib/utils";

export const Footer = (props: React.ComponentProps<"footer">) => {
  const { className, ...rest } = props;

  return (
    <footer className={cn("container py-8 sm:py-10", className)} {...rest}>
      <p className="text-center text-muted-foreground text-sm">
        &copy; {new Date().getFullYear()} Built by{" "}
        <a
          className={cn(
            "group",
            "relative",
            "-mx-1 px-1",
            "rounded-md border border-transparent",
            "no-underline underline-offset-2",
            "outline-hidden",
            "hover:text-primary",
            "focus-visible:z-10 focus-visible:border-ring/64 focus-visible:ring-2 focus-visible:ring-ring/24"
          )}
          href="https://vini.one"
          rel="noopener noreferrer"
          target="_blank"
        >
          <span className="underline-offset-2 group-hover:underline">
            Vinicius Vicentini
          </span>
        </a>
      </p>
    </footer>
  );
};
