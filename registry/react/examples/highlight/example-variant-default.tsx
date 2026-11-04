import { Highlight } from "@/registry/react/components/highlight";

const Example = () => (
  <p className="text-foreground text-base leading-relaxed">
    <Highlight
      query="component"
      text="Shark UI is a component library for building accessible web applications."
    />
  </p>
);

export default Example;
