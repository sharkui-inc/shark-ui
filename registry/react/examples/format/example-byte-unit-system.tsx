import { HardDriveIcon } from "lucide-react";
import { FormatByte } from "@/registry/react/components/format";
import {
  Item,
  ItemContent,
  ItemDescription,
  ItemGroup,
  ItemMedia,
  ItemTitle,
} from "@/registry/react/components/item";

const Example = () => (
  <ItemGroup className="w-full max-w-sm gap-2">
    {unitSystems.map((system) => (
      <Item key={system.unitSystem} variant="outline">
        <ItemMedia variant="icon">
          <HardDriveIcon aria-hidden />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>{system.title}</ItemTitle>
          <ItemDescription>
            <FormatByte unitSystem={system.unitSystem} value={1024} />
            {" free of 1\u00A0TB"}
          </ItemDescription>
        </ItemContent>
      </Item>
    ))}
  </ItemGroup>
);

const unitSystems = [
  {
    title: "Decimal (SI)",
    unitSystem: "decimal",
  },
  {
    title: "Binary (IEC)",
    unitSystem: "binary",
  },
] as const;

export default Example;
