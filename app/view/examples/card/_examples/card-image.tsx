import { Badge } from "@/registry/react/components/badge";
import { Button } from "@/registry/react/components/button";
import {
  Card,
  CardAction,
  CardFooter,
  CardHeader,
} from "@/registry/react/components/card";

const CardImage = () => (
  <Card className="relative mx-auto w-full max-w-sm pt-0">
    <div className="absolute inset-0 z-30 aspect-video bg-black/32" />
    <img
      alt="Event cover"
      className="relative z-20 aspect-video w-full object-cover brightness-60 grayscale dark:brightness-40"
      height="900"
      src="https://avatar.vercel.sh/shadcn1"
      width="1600"
    />
    <CardHeader
      description="A practical talk on component APIs, accessibility, and shipping faster."
      title="Design systems meetup"
    >
      <CardAction>
        <Badge variant="secondary">Featured</Badge>
      </CardAction>
    </CardHeader>
    <CardFooter>
      <Button className="w-full">View Event</Button>
    </CardFooter>
  </Card>
);

export default CardImage;
