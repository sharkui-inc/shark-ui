import {
  ToggleGroup,
  ToggleGroupItem,
  ToggleGroupLabel,
} from "@/registry/react/components/toggle-group";

const Example = () => (
  <ToggleGroup defaultValue={["left"]}>
    <ToggleGroupLabel>Text alignment</ToggleGroupLabel>
    <ToggleGroupItem aria-label="Align left" value="left">
      Left
    </ToggleGroupItem>
    <ToggleGroupItem aria-label="Align center" value="center">
      Center
    </ToggleGroupItem>
    <ToggleGroupItem aria-label="Align right" value="right">
      Right
    </ToggleGroupItem>
  </ToggleGroup>
);

export default Example;
