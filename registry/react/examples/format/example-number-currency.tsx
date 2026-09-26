import { FormatNumber } from "@/registry/react/components/format";

const Example = () => (
  <ul className="w-full max-w-xs overflow-hidden rounded-xl border">
    {prices.map((price) => (
      <li
        className="flex items-center justify-between gap-4 border-b px-4 py-3 text-sm last:border-b-0"
        key={price.currency}
      >
        <span className="text-muted-foreground">{price.label}</span>
        <span className="font-medium tabular-nums tracking-tight">
          <FormatNumber
            currency={price.currency}
            style="currency"
            value={price.value}
          />
        </span>
      </li>
    ))}
  </ul>
);

const prices = [
  { currency: "USD", label: "United States", value: 99.99 },
  { currency: "EUR", label: "Eurozone", value: 99.99 },
  { currency: "BRL", label: "Brazil", value: 99.99 },
] as const;

export default Example;
