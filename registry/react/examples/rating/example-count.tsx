import { Rating, RatingStars } from "@/registry/react/components/rating";

const Example = () => (
  <Rating count={3} defaultValue={3}>
    <RatingStars />
  </Rating>
);

export default Example;
