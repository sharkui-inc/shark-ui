import {
  SkipNavContent,
  SkipNavLink,
} from "@/registry/react/components/skip-nav";

const SkipNavDemo = () => (
  <>
    <SkipNavLink className="focus:absolute" contentId="demo-content" />

    <SkipNavContent
      className="bg-card max-w-sm rounded-lg border border-transparent p-4"
      id="demo-content"
    >
      <h2 className="mb-2 font-semibold">Main Content</h2>
      <p className="text-muted-foreground text-sm">
        This is the main content area. When users press Tab and then Enter on
        the skip link, focus jumps here.
      </p>
    </SkipNavContent>
  </>
);

export default SkipNavDemo;
