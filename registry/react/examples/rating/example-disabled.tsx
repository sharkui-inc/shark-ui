import { Rating, RatingStars } from "@/registry/react/components/rating";

const Example = () => (
  <Rating defaultValue={3} disabled>
    <RatingStars />
  </Rating>
);

export default Example;
