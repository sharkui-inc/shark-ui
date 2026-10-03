"use client";

import { Building2Icon, CreditCardIcon, WalletIcon } from "lucide-react";
import React from "react";
import { Button } from "@/registry/react/components/button";
import {
  Menu,
  MenuContent,
  MenuGroup,
  MenuRadioGroup,
  MenuRadioItem,
  MenuTrigger,
} from "@/registry/react/components/menu";

const MenuRadioIcons = () => {
  const [paymentMethod, setPaymentMethod] = React.useState("card");

  return (
    <Menu>
      <MenuTrigger asChild>
        <Button variant="outline">Payment Method</Button>
      </MenuTrigger>
      <MenuContent className="min-w-56">
        <MenuGroup heading="Select Payment Method">
          <MenuRadioGroup
            onValueChange={({ value }) => setPaymentMethod(value)}
            value={paymentMethod}
          >
            <MenuRadioItem value="card">
              <CreditCardIcon />
              Credit Card
            </MenuRadioItem>
            <MenuRadioItem value="paypal">
              <WalletIcon />
              PayPal
            </MenuRadioItem>
            <MenuRadioItem value="bank">
              <Building2Icon />
              Bank Transfer
            </MenuRadioItem>
          </MenuRadioGroup>
        </MenuGroup>
      </MenuContent>
    </Menu>
  );
};

export default MenuRadioIcons;
