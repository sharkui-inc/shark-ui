"use client";

import { IconTile } from "@registry/react/components/icon-tile";
import { SharkIcon } from "@/components/icons/shark";
import {
  Item,
  ItemContent,
  ItemMedia,
  ItemTitle,
} from "@/registry/react/components/item";
import {
  State,
  StateContent,
  StateHeader,
  StateTitle,
} from "@/registry/react/components/state";
import { emptyStateSuggestions } from "../_data/chat-demo";

export const EmptyConversation = ({ onSelect }: { onSelect: () => void }) => (
  <State className="min-h-full">
    <StateHeader>
      <IconTile aria-hidden="true" size="sm">
        <SharkIcon aria-hidden="true" />
      </IconTile>
      <StateTitle asChild>
        <h2>What are we building?</h2>
      </StateTitle>
    </StateHeader>
    <StateContent className="max-w-3xl flex-row flex-nowrap">
      {emptyStateSuggestions.map((item) => {
        const Icon = item.icon;

        return (
          <Item asChild className="flex-1" key={item.label} variant="outline">
            <button onClick={onSelect} type="button">
              <ItemMedia className="text-primary" variant="icon">
                <Icon aria-hidden="true" />
              </ItemMedia>
              <ItemContent>
                <ItemTitle>{item.label}</ItemTitle>
              </ItemContent>
            </button>
          </Item>
        );
      })}
    </StateContent>
  </State>
);
