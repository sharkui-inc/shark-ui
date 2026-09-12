import { IconTile } from "@/registry/react/components/icon-tile";
import {
  Item,
  ItemContent,
  ItemDescription,
  ItemHeader,
  ItemTitle,
} from "@/registry/react/components/item";
import { appPanels } from "../_data/chat";

export const ChatAppsPanel = () => (
  <div className="flex min-h-0 flex-1 items-center justify-center p-4">
    <div className="grid w-full max-w-xs grid-cols-2 gap-3">
      {appPanels.map(({ description, icon: Icon, label }) => (
        <Item asChild key={label} variant="outline">
          <button className="w-full text-start" type="button">
            <ItemHeader>
              <IconTile aria-hidden="true" size="sm" variant="outline">
                <Icon aria-hidden="true" />
              </IconTile>
            </ItemHeader>
            <ItemContent>
              <ItemTitle>{label}</ItemTitle>
              <ItemDescription>{description}</ItemDescription>
            </ItemContent>
          </button>
        </Item>
      ))}
    </div>
  </div>
);
