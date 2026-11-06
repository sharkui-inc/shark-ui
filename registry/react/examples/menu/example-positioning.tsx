import { Button } from "@/registry/react/components/button";
import {
  Menu,
  MenuContent,
  MenuList,
  MenuItem,
  MenuTrigger,
} from "@/registry/react/components/menu";

const Example = () => (
  <div className="flex flex-wrap justify-center gap-2">
    {placements.map((placement) => (
      <Menu key={placement} positioning={{ placement }}>
        <MenuTrigger asChild>
          <Button className="capitalize" variant="outline">
            {placement}
          </Button>
        </MenuTrigger>
        <MenuContent>
          <MenuList>
            <MenuItem value="edit">Edit</MenuItem>
            <MenuItem value="copy">Copy</MenuItem>
            <MenuItem value="share">Share</MenuItem>

          </MenuList>
        </MenuContent>
      </Menu>
    ))}
  </div>
);

const placements = ["left", "top", "bottom", "right"] as const;

export default Example;
