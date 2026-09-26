import { Button } from "@/registry/react/components/button";
import {
  Popover,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
} from "@/registry/react/components/popover";

const Example = () => (
  <Popover>
    <PopoverTrigger asChild>
      <Button variant="outline">Open</Button>
    </PopoverTrigger>
    <PopoverContent className="w-72" showArrow>
      <PopoverHeader
        description="Set the dimensions for the layer."
        title="Dimensions"
      />
    </PopoverContent>
  </Popover>
);

export default Example;
