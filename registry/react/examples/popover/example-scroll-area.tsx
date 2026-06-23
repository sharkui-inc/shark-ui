import { Button } from "@/registry/react/components/button";
import {
  Popover,
  PopoverBody,
  PopoverClose,
  PopoverContent,
  PopoverFooter,
  PopoverHeader,
  PopoverTrigger,
} from "@/registry/react/components/popover";

const Example = () => (
  <Popover>
    <PopoverTrigger asChild>
      <Button variant="outline">Open</Button>
    </PopoverTrigger>
    <PopoverContent className="h-80 w-72">
      <PopoverHeader title="Scrollable content" />
      <PopoverBody>
        <div className="flex flex-col gap-2">
          {Array.from({ length: 48 }, (_, i) => `box-${i}`).map((key) => (
            <div
              className="h-12 shrink-0 rounded-xl border bg-muted"
              key={key}
            />
          ))}
        </div>
      </PopoverBody>
      <PopoverFooter>
        <PopoverClose asChild>
          <Button>Close</Button>
        </PopoverClose>
      </PopoverFooter>
    </PopoverContent>
  </Popover>
);

export default Example;
