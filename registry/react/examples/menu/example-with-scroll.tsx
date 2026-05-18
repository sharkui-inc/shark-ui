import { Button } from "@/registry/react/components/button";
import {
  Menu,
  MenuContent,
  MenuItem,
  MenuTrigger,
} from "@/registry/react/components/menu";

const Example = () => (
  <Menu>
    <MenuTrigger asChild>
      <Button variant="outline">Open</Button>
    </MenuTrigger>
    <MenuContent className="max-h-60 min-w-40">
      {items.map((label, index) => (
        <MenuItem key={label} value={`item-${index + 1}`}>
          {label}
        </MenuItem>
      ))}
    </MenuContent>
  </Menu>
);

const items = Array.from({ length: 15 }, (_, i) => `Item ${i + 1}`);

export default Example;
