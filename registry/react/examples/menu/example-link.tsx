import { ArrowUpRightIcon } from "lucide-react";
import Link from "next/link";
import { Button } from "@/registry/react/components/button";
import {
  Menu,
  MenuContent,
  MenuItem,
  MenuShortcut,
  MenuTrigger,
} from "@/registry/react/components/menu";

const Example = () => (
  <Menu>
    <MenuTrigger asChild>
      <Button variant="outline">Open</Button>
    </MenuTrigger>
    <MenuContent className="min-w-40">
      <MenuItem asChild value="docs">
        <a href="#">
          External link
          <MenuShortcut className="hidden sm:inline-flex">
            <ArrowUpRightIcon />
          </MenuShortcut>
        </a>
      </MenuItem>
      <MenuItem asChild value="components">
        <Link href="#">View docs</Link>
      </MenuItem>
    </MenuContent>
  </Menu>
);

export default Example;
