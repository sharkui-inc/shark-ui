import { DollarSignIcon } from "lucide-react";
import { Button } from "@/registry/react/components/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardMedia,
} from "@/registry/react/components/card";

const Example = () => (
  <div className="w-full max-w-xs">
    <Card>
      <CardMedia variant="icon">
        <DollarSignIcon />
      </CardMedia>
      <CardHeader
        description="Minimum purchase of $100 required. Use code at checkout."
        title="Get 15% OFF"
      />
      <CardContent>
        <pre className="bg-muted rounded-md p-2 text-center text-sm font-medium">
          <code>15OFF</code>
        </pre>
      </CardContent>
      <CardFooter className="flex-row-reverse">
        <Button size="sm">Copy code</Button>
      </CardFooter>
    </Card>
  </div>
);

export default Example;
