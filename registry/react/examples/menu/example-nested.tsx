import { Button } from "@/registry/react/components/button";
import {
  Menu,
  MenuContent,
  MenuList,
  MenuItem,
  MenuSub,
  MenuSubContent,
  MenuSubTrigger,
  MenuTrigger,
} from "@/registry/react/components/menu";

const Example = () => (
  <Menu>
    <MenuTrigger asChild>
      <Button variant="outline">Open</Button>
    </MenuTrigger>
    <MenuContent className="min-w-40">
      <MenuList>
        <MenuItem value="item-one">Item one</MenuItem>
        <MenuSub>
          <MenuSubTrigger>More</MenuSubTrigger>
          <MenuSubContent>
            <MenuList>
              <MenuItem value="sub-a">Sub item A</MenuItem>
              <MenuItem value="sub-b">Sub item B</MenuItem>

            </MenuList>
          </MenuSubContent>
        </MenuSub>
        <MenuItem value="item-two">Item two</MenuItem>

      </MenuList>
    </MenuContent>
  </Menu>
);

export default Example;
