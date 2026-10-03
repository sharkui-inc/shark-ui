"use client";

import {
  RatingGroup as ArkRatingGroup,
  useRatingGroupContext as useArkRatingGroupContext,
} from "@ark-ui/react/rating-group";
import { StarIcon } from "lucide-react";
import type React from "react";
import { cn } from "@/lib/utils";
import { FieldLabel } from "@/registry/react/components/field";

interface RatingProps extends React.ComponentProps<typeof ArkRatingGroup.Root> {
  /** The icon used for each rating item. */
  icon?: React.JSX.ElementType;
}

export const useRatingContext = useArkRatingGroupContext;
export const Rating = (props: RatingProps) => {
  const {
    allowHalf = false,
    count = 5,
    className,
    children,
    icon = StarIcon,
    ...rest
  } = props;

  return (
    <ArkRatingGroup.Root
      allowHalf={allowHalf}
      className={cn(
        "**:data-[slot=rating-item-indicator]:size-6",
        "text-warning",
        "data-readonly:pointer-events-none",
        className
      )}
      count={count}
      data-slot="rating"
      {...rest}
    >
      {children ?? <RatingStars icon={icon} />}
    </ArkRatingGroup.Root>
  );
};

interface RatingStarsProps
  extends Omit<
    React.ComponentProps<typeof ArkRatingGroup.Control>,
    "children"
  > {
  /**
   * The icon to use for the rating.
   *
   * @default StarIcon
   */
  icon?: React.JSX.ElementType;
}

export const RatingStars = (props: RatingStarsProps) => {
  const { icon: Icon = StarIcon, className, ...rest } = props;

  return (
    <ArkRatingGroup.Control
      className={cn("inline-flex items-center gap-1", className)}
      data-slot="rating-control"
      {...rest}
    >
      <ArkRatingGroup.Context>
        {({ items }) =>
          items.map((item) => (
            <RatingItem index={item} key={item}>
              <ArkRatingGroup.ItemContext>
                {({ half, highlighted }) => (
                  <span
                    className={cn(
                      "relative inline-flex",
                      "**:data-fg:text-current **:data-fg:[clip-path:inset(0_0_0_0)]",
                      "[&[data-half]_[data-fg]]:[clip-path:inset(0_50%_0_0)]",
                      "rtl:[&[data-half]_[data-fg]]:[clip-path:inset(0_0_0_50%)]",
                      "[&:not([data-highlighted])_[data-fg]]:[clip-path:inset(0_100%_0_0)]",
                      "[&_svg]:absolute [&_svg]:inset-0 [&_svg]:size-full [&_svg]:text-current"
                    )}
                    data-half={half ? "" : undefined}
                    data-highlighted={highlighted ? "" : undefined}
                    data-slot="rating-item-indicator"
                  >
                    <Icon data-bg="" />
                    <Icon data-fg="" fill="currentColor" />
                  </span>
                )}
              </ArkRatingGroup.ItemContext>
            </RatingItem>
          ))
        }
      </ArkRatingGroup.Context>

      <ArkRatingGroup.HiddenInput />
    </ArkRatingGroup.Control>
  );
};

export const RatingLabel = (
  props: React.ComponentProps<typeof ArkRatingGroup.Label>
) => (
  <FieldLabel asChild>
    <ArkRatingGroup.Label data-slot="field-label" {...props} />
  </FieldLabel>
);

export const RatingItem = (
  props: React.ComponentProps<typeof ArkRatingGroup.Item>
) => {
  const { className, ...rest } = props;

  return (
    <ArkRatingGroup.Item
      className={cn(
        "inline-flex items-center justify-center",
        "not-[[data-disabled],[data-readonly]]:cursor-pointer",
        "data-disabled:opacity-64 data-disabled:grayscale",
        "outline-hidden",
        className
      )}
      data-slot="rating-item"
      {...rest}
    />
  );
};
