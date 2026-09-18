import { StarIcon } from "lucide-react";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/registry/react/components/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/registry/react/components/card";
import { Rating } from "@/registry/react/components/rating";

const Example = () => (
  <Card className="w-full max-w-xs">
    <CardContent className="space-y-2">
      <Rating
        defaultValue={5}
        icon={<StarIcon className="size-4" />}
        readOnly
      />
      <blockquote className="text-muted-foreground">
        &ldquo;This completely changed our workflow. Fast, reliable, and the
        team loves it. Would recommend to anyone.&rdquo;
      </blockquote>
      <div className="flex gap-2">
        <Avatar size="lg">
          <AvatarImage alt="@vinihvc" src="https://github.com/vinihvc.png" />
          <AvatarFallback>VV</AvatarFallback>
        </Avatar>
        <div>
          <CardTitle className="font-medium text-sm">
            Vinicius Vicentini
          </CardTitle>
          <CardDescription>Frontend Developer</CardDescription>
        </div>
      </div>
    </CardContent>
  </Card>
);

export default Example;
