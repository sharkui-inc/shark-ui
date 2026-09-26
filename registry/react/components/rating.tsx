"use client";

import {
  RatingGroup as ArkRatingGroup,
  useRatingGroup as useArkRatingGroup,
  useRatingGroupContext as useArkRatingGroupContext,
} from "@ark-ui/react/rating-group";
import { StarIcon } from "lucide-react";
import type React from "react";
import { cn } from "@/lib/utils";

export const useRating = useArkRatingGroup;
export const useRatingContext = useArkRatingGroupContext;
export const RatingRootProvider = ArkRatingGroup.RootProvider;

interface RatingProps extends React.ComponentProps<typeof ArkRatingGroup.Root> {
  /**
   * The icon to use for the rating.
   *
   * @default StarIcon
   */
  icon?: React.JSX.ElementType;
}

export const Rating = (props: RatingProps) => {
  const {
    icon: Icon = StarIcon,
    allowHalf = false,
    count = 5,
    className,
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
      <ArkRatingGroup.Control
        className="inline-flex items-center gap-1"
        data-slot="rating-control"
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
    </ArkRatingGroup.Root>
  );
};

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
