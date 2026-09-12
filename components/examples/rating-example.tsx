"use client";

import { useState } from "react";
import { toast } from "@/components/examples/example-toast";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/registry/react/components/avatar";
import { Button } from "@/registry/react/components/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/registry/react/components/card";
import { Field, FieldLabel } from "@/registry/react/components/field";
import { Rating } from "@/registry/react/components/rating";
import {
  ToggleGroup,
  ToggleGroupItem,
} from "@/registry/react/components/toggle-group";

export const RatingExample = (props: React.ComponentProps<"div">) => {
  const [rating, setRating] = useState(5);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  return (
    <Card {...props}>
      <CardHeader className="flex flex-row items-center gap-3">
        <Avatar size="lg">
          <AvatarImage
            alt="Vinicius Vicentini"
            src="https://github.com/vinihvc.png"
          />
          <AvatarFallback>VV</AvatarFallback>
        </Avatar>
        <div className="flex min-w-0 flex-col gap-0.5">
          <CardTitle>Vinicius Vicentini</CardTitle>
          <CardDescription>Today · Mercado N.89</CardDescription>
        </div>
      </CardHeader>
      <CardContent className="flex flex-col gap-5">
        <div className="flex flex-col gap-2">
          <p className="font-heading font-semibold text-xl tracking-[-0.02em]">
            {copyForRating(rating)}
          </p>
          <Rating
            aria-label="How was your trip?"
            onValueChange={(details) => setRating(details.value ?? 0)}
            readOnly={isSubmitted}
            value={rating}
          />
        </div>
        {rating > 0 ? (
          <Field>
            <FieldLabel>What stood out</FieldLabel>
            <ToggleGroup
              aria-label="What stood out"
              className="flex-wrap"
              defaultValue={["on-time", "navigation"]}
              disabled={isSubmitted}
              multiple
              pill
              size="sm"
              spacing={2}
              variant="outline"
            >
              {tripTags.map((tag) => (
                <ToggleGroupItem
                  className="text-muted-foreground data-[state=on]:border-transparent data-[state=on]:bg-foreground data-[state=on]:text-background data-[state=on]:hover:bg-foreground data-[state=on]:hover:text-background dark:data-[state=on]:bg-foreground dark:data-[state=on]:text-background dark:data-[state=on]:hover:bg-foreground dark:data-[state=on]:hover:text-background"
                  key={tag.value}
                  value={tag.value}
                >
                  {tag.label}
                </ToggleGroupItem>
              ))}
            </ToggleGroup>
          </Field>
        ) : null}
      </CardContent>
      <CardFooter>
        <Button
          className="w-full"
          disabled={rating === 0 || isSubmitted}
          isLoading={isSubmitting}
          onClick={async () => {
            setIsSubmitting(true);
            await new Promise((resolve) => {
              window.setTimeout(resolve, 600);
            });
            setIsSubmitting(false);
            setIsSubmitted(true);
            toast.success({
              description: copyForRating(rating),
              title: "Review sent",
            });
          }}
        >
          {isSubmitted ? "Thanks for the review" : "Send"}
        </Button>
      </CardFooter>
    </Card>
  );
};

const copyForRating = (value: number) => {
  const stars = Math.min(5, Math.max(0, Math.round(value))) as Stars;

  switch (stars) {
    case 0:
      return "How was your trip?";
    case 1:
      return "Rough ride";
    case 2:
      return "It was okay";
    case 3:
      return "Pretty good";
    case 4:
      return "Great trip";
    case 5:
      return "Loved it";
    default: {
      const _never: never = stars;
      return _never;
    }
  }
};

const tripTags = [
  { label: "On time", value: "on-time" },
  { label: "Expert navigation", value: "navigation" },
  { label: "Clean car", value: "clean" },
  { label: "Great conversation", value: "conversation" },
];

type Stars = 0 | 1 | 2 | 3 | 4 | 5;
