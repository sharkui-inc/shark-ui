import { Button } from "@/registry/react/components/button";
import {
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from "@/registry/react/components/popover";

const PopoverBasic = () => (
  <Popover positioning={{ placement: "bottom-start" }}>
    <PopoverTrigger asChild>
      <Button className="w-fit" variant="outline">
        Open Popover
      </Button>
    </PopoverTrigger>
    <PopoverContent>
      <PopoverHeader>
        <PopoverTitle>Dimensions</PopoverTitle>
        <PopoverDescription>
          Set the dimensions for the layer.
        </PopoverDescription>
      </PopoverHeader>
    </PopoverContent>
  </Popover>
);

export default PopoverBasic;
