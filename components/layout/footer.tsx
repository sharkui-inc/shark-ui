import { cn } from "@/lib/utils";

export const Footer = (props: React.ComponentProps<"footer">) => {
  const { className, ...rest } = props;

  return (
    <footer className={cn("container py-8 sm:py-10", className)} {...rest}>
      <p className="text-center text-muted-foreground text-sm">
        &copy; {new Date().getFullYear()} Built by{" "}
        <a
          className="underline-offset-2 outline-none hover:text-primary hover:underline focus-visible:text-primary focus-visible:underline"
          href="https://vini.one"
          rel="noopener noreferrer"
          target="_blank"
        >
          Vinicius Vicentini
        </a>
      </p>
    </footer>
  );
};
