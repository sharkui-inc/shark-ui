import { Rating, RatingStars } from "@/registry/react/components/rating";

const Example = () => (
  <Rating allowHalf defaultValue={3.5}>
    <RatingStars />
  </Rating>
);

export default Example;
