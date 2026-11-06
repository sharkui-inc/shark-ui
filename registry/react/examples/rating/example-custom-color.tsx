import { Rating, RatingStars } from "@/registry/react/components/rating";

const Example = () => (
  <div className="flex flex-wrap items-center gap-8">
    <Rating count={5} defaultValue={4}>
      <RatingStars className="text-info" />
    </Rating>
    <Rating count={5} defaultValue={4}>
      <RatingStars className="text-success" />
    </Rating>
  </div>
);

export default Example;
