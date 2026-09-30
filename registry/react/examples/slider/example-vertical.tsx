import { Slider, SliderLabel } from "@/registry/react/components/slider";

const Example = () => (
  <div className="mx-auto flex w-full max-w-sm items-center justify-center gap-10">
    <Slider
      className="h-40"
      defaultValue={[2]}
      markerInterval={1}
      max={4}
      orientation="vertical"
      showMarkers
    >
      <SliderLabel>Brightness</SliderLabel>
    </Slider>
    <Slider
      className="h-40"
      defaultValue={[25]}
      max={100}
      orientation="vertical"
      step={1}
    >
      <SliderLabel>Volume</SliderLabel>
    </Slider>
  </div>
);

export default Example;
