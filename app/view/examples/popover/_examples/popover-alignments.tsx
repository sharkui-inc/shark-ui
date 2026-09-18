import { Button } from "@/registry/react/components/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/registry/react/components/popover";

const PopoverAlignments = () => (
  <div className="flex gap-6">
    <Popover positioning={{ placement: "bottom-start" }}>
      <PopoverTrigger asChild>
        <Button size="sm" variant="outline">
          Start
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-40">Aligned to start</PopoverContent>
    </Popover>

    <Popover>
      <PopoverTrigger asChild>
        <Button size="sm" variant="outline">
          Center
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-40">Aligned to center</PopoverContent>
    </Popover>

    <Popover positioning={{ placement: "bottom-end" }}>
      <PopoverTrigger asChild>
        <Button size="sm" variant="outline">
          End
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-40">Aligned to end</PopoverContent>
    </Popover>
  </div>
);

export default PopoverAlignments;
