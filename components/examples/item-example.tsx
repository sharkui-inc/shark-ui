"use client";

import { BadgeCheck, ChevronRight } from "lucide-react";
import { Button } from "@/registry/react/components/button";
import {
  Dialog,
  DialogBody,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTrigger,
} from "@/registry/react/components/dialog";
import {
  Item,
  ItemActions,
  ItemContent,
  ItemMedia,
  ItemTitle,
} from "@/registry/react/components/item";

export const ItemExample = () => (
  <Dialog>
    <DialogTrigger asChild>
      <Item asChild variant="outline">
        <button className="w-full text-start" type="button">
          <ItemMedia>
            <BadgeCheck aria-hidden="true" className="size-5" />
          </ItemMedia>
          <ItemContent>
            <ItemTitle>Your profile has been verified.</ItemTitle>
          </ItemContent>
          <ItemActions>
            <ChevronRight aria-hidden="true" className="size-4" />
          </ItemActions>
        </button>
      </Item>
    </DialogTrigger>
    <DialogContent>
      <DialogHeader
        description="A checkmark on your public profile means this account is verified."
        title="Verified profile"
      />
      <DialogBody>
        <p className="text-sm">
          Verified accounts can publish under a trusted name. This preview does
          not change a real account.
        </p>
      </DialogBody>
      <DialogFooter>
        <DialogClose asChild>
          <Button>Close</Button>
        </DialogClose>
      </DialogFooter>
    </DialogContent>
  </Dialog>
);
