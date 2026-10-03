import { Rating, RatingStars } from "@/registry/react/components/rating";

const Example = () => (
  <Rating>
    <RatingStars className="**:data-[slot=rating-item-indicator]:size-8" />
  </Rating>
);

export default Example;
