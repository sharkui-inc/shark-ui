"use client";

import { createListCollection } from "@ark-ui/react";
import { ArrowRightIcon } from "lucide-react";
import { useState } from "react";
import { Button } from "@/registry/react/components/button";
import { ButtonGroup } from "@/registry/react/components/button-group";
import { Input } from "@/registry/react/components/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
} from "@/registry/react/components/select";

const currencies = createListCollection({
  items: [
    { label: "US Dollar", value: "$" },
    { label: "Euro", value: "€" },
    { label: "British Pound", value: "£" },
  ],
});

const ButtonGroupSelectExample = () => {
  const [currency, setCurrency] = useState("$");

  return (
    <ButtonGroup>
      <ButtonGroup>
        <Select
          collection={currencies}
          onValueChange={({ value }) => setCurrency(value[0])}
          value={[currency]}
        >
          <SelectTrigger className="font-mono">{currency}</SelectTrigger>
          <SelectContent>
            <SelectGroup>
              {currencies.items.map((item) => (
                <SelectItem item={item} key={item.value}>
                  {item.value}{" "}
                  <span className="text-muted-foreground">{item.label}</span>
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
        <Input pattern="[0-9]*" placeholder="10.00" />
      </ButtonGroup>
      <ButtonGroup>
        <Button aria-label="Send" size="icon-md" variant="outline">
          <ArrowRightIcon />
        </Button>
      </ButtonGroup>
    </ButtonGroup>
  );
};

export default ButtonGroupSelectExample;
