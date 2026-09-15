import { createWavesAvatar } from "@/lib/dicebear";
import { Prose } from "@/registry/react/components/prose";

const Example = () => (
  <Prose>
    <figure>
      <img
        alt="Green mesh gradient"
        height={200}
        src={createWavesAvatar("prose media", "green-dark")}
        width={200}
      />
      <figcaption>A description of the image.</figcaption>
    </figure>
  </Prose>
);

export default Example;
