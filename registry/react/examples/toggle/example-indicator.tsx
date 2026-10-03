import { Toggle, ToggleIndicator } from "@/registry/react/components/toggle";

const Example = () => (
  <Toggle variant="outline">
    <ToggleIndicator fallback="Follow">Following</ToggleIndicator>
  </Toggle>
);

export default Example;
