import { Highlight } from "@/registry/react/components/highlight";

const Example = () => (
  <p className="text-base text-foreground leading-relaxed">
    <Highlight
      query="component"
      text="Shark UI is a component library for building accessible web applications."
      variant="ghost"
    />
  </p>
);

export default Example;
