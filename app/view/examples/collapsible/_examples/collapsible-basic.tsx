import { ChevronDownIcon } from "lucide-react";
import { Button } from "@/registry/react/components/button";
import { Card, CardContent } from "@/registry/react/components/card";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/registry/react/components/collapsible";

const CollapsibleBasic = () => (
  <Card className="mx-auto w-full max-w-sm">
    <CardContent>
      <Collapsible className="rounded-md data-[state=open]:bg-muted">
        <CollapsibleTrigger asChild>
          <Button className="w-full" variant="ghost">
            Product details
            <ChevronDownIcon
              aria-hidden="true"
              className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180"
              data-icon="inline-end"
            />
          </Button>
        </CollapsibleTrigger>
        <CollapsibleContent className="flex flex-col items-start gap-2 p-2.5 pt-0 text-sm">
          <div>
            This panel can be expanded or collapsed to reveal additional
            content.
          </div>
          <Button size="xs">Learn More</Button>
        </CollapsibleContent>
      </Collapsible>
    </CardContent>
  </Card>
);

export default CollapsibleBasic;
