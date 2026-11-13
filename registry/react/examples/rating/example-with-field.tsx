import {
  Field,
  FieldContent,
  FieldDescription,
} from "@/registry/react/components/field";
import {
  Rating,
  RatingLabel,
  RatingStars,
} from "@/registry/react/components/rating";

const Example = () => (
  <Field className="w-full max-w-sm">
    <Rating defaultValue={4}>
      <FieldContent>
        <RatingLabel>How was your experience?</RatingLabel>
        <RatingStars />
        <FieldDescription>Shown on your review.</FieldDescription>
      </FieldContent>
    </Rating>
  </Field>
);

export default Example;
