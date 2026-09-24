import { Button } from "@/registry/react/components/button";
import {
  Menu,
  MenuContent,
  MenuGroup,
  MenuItem,
  MenuSeparator,
  MenuShortcut,
  MenuSub,
  MenuSubContent,
  MenuSubTrigger,
  MenuTrigger,
} from "@/registry/react/components/menu";

const MenuSubmenu = () => (
  <Menu>
    <MenuTrigger asChild>
      <Button variant="outline">Open</Button>
    </MenuTrigger>
    <MenuContent>
      <MenuGroup>
        <MenuItem value="team">Team</MenuItem>
        <MenuSub>
          <MenuSubTrigger>Invite users</MenuSubTrigger>
          <MenuSubContent>
            <MenuItem value="email">Email</MenuItem>
            <MenuItem value="message">Message</MenuItem>
            <MenuSub>
              <MenuSubTrigger>More options</MenuSubTrigger>
              <MenuSubContent>
                <MenuItem value="calendly">Calendly</MenuItem>
                <MenuItem value="slack">Slack</MenuItem>
                <MenuSeparator />
                <MenuItem value="webhook">Webhook</MenuItem>
              </MenuSubContent>
            </MenuSub>
            <MenuSeparator />
            <MenuItem value="advanced">Advanced...</MenuItem>
          </MenuSubContent>
        </MenuSub>
        <MenuItem value="new-team">
          New Team
          <MenuShortcut>⌘T</MenuShortcut>
        </MenuItem>
      </MenuGroup>
    </MenuContent>
  </Menu>
);

export default MenuSubmenu;
