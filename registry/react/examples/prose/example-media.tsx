import { Prose } from "@/registry/react/components/prose";

const Example = () => (
  <Prose>
    <figure>
      <img
        alt="Green mesh gradient"
        height={200}
        src="https://api.dicebear.com/10.x/waves/svg?backgroundColor=eef4e6&scale=1.2&seed=prose+media&waveColor=1a6b5c"
        width={200}
      />
      <figcaption>A description of the image.</figcaption>
    </figure>
  </Prose>
);

export default Example;
