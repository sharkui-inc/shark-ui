import { ChartNoAxesColumnIcon, EyeIcon, StarIcon } from "lucide-react";
import { FormatNumber } from "@/registry/react/components/format";
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
    {metrics.map((metric) => {
      const Icon = metric.icon;

      return (
        <Item key={metric.label} variant="outline">
          <ItemMedia variant="icon">
            <Icon aria-hidden />
          </ItemMedia>
          <ItemContent>
            <ItemTitle>{metric.label}</ItemTitle>
            <ItemDescription>
              <FormatNumber notation="compact" value={metric.value} />
              {metric.suffix}
            </ItemDescription>
          </ItemContent>
        </Item>
      );
    })}
  </ItemGroup>
);

const metrics = [
  {
    icon: StarIcon,
    label: "Stars",
    suffix: " on GitHub",
    value: 1_200_000,
  },
  {
    icon: EyeIcon,
    label: "Views",
    suffix: " this week",
    value: 120_000,
  },
  {
    icon: ChartNoAxesColumnIcon,
    label: "Downloads",
    suffix: " per month",
    value: 1_234_567,
  },
] as const;

export default Example;
