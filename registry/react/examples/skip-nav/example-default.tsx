import {
  SkipNavContent,
  SkipNavLink,
} from "@/registry/react/components/skip-nav";

const SkipNavDemo = () => (
  <>
    <SkipNavLink className="focus:absolute" id="demo-content" />

    <SkipNavContent
      className="max-w-sm rounded-lg border border-transparent bg-card p-4 outline-hidden focus:border-ring/64 focus:ring-2 focus:ring-ring/24"
      id="demo-content"
      tabIndex={undefined}
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
