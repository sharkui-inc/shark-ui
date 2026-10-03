import { ChevronRightIcon } from "lucide-react";
import { Button } from "@/registry/react/components/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/registry/react/components/card";

const CardSmall = () => {
  const featureName = "Scheduled reports";

  return (
    <Card className="mx-auto w-full max-w-xs [--space:--spacing(4)]">
      <CardHeader
        description="Weekly snapshots. No more manual exports."
        title={featureName}
      />
      <CardContent>
        <ul className="grid gap-2 py-2 text-sm">
          <li className="flex gap-2">
            <ChevronRightIcon
              aria-hidden
              className="mt-0.5 size-4 shrink-0 text-muted-foreground"
            />
            <span>Choose a schedule (daily, or weekly).</span>
          </li>
          <li className="flex gap-2">
            <ChevronRightIcon
              aria-hidden
              className="mt-0.5 size-4 shrink-0 text-muted-foreground"
            />
            <span>Send to channels or specific teammates.</span>
          </li>
          <li className="flex gap-2">
            <ChevronRightIcon
              aria-hidden
              className="mt-0.5 size-4 shrink-0 text-muted-foreground"
            />
            <span>Include charts, tables, and key metrics.</span>
          </li>
        </ul>
      </CardContent>
      <CardFooter className="flex-col gap-2">
        <Button className="w-full" size="sm">
          Set up scheduled reports
        </Button>
        <Button className="w-full" size="sm" variant="outline">
          See what&apos;s new
        </Button>
      </CardFooter>
    </Card>
  );
};

export default CardSmall;
