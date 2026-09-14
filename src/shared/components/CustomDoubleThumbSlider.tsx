import { Slider } from 'radix-ui';

type CustomDoubleThumbSliderProps = {
  min: number;
  max: number;
  step?: number;
  currentValue: [number, number] | undefined;
  onChange: (val: [number, number]) => void;
  onValueCommit: (val: [number, number]) => void;
};

function CustomDoubleThumbSlider({
  min,
  max,
  step = 1,
  currentValue,
  onChange,
  onValueCommit
}: CustomDoubleThumbSliderProps) {
  return (
    <Slider.Root
      className="slider"
      value={currentValue ?? [min, max]}
      minStepsBetweenThumbs={1}
      onValueChange={onChange}
      onValueCommit={onValueCommit}
      min={min}
      max={max}
      step={step}
    >
      <Slider.Track className="slider__track">
        <Slider.Range className="slider__range" />
      </Slider.Track>
      <Slider.Thumb className="slider__thumb" aria-label="Volume" />
      <Slider.Thumb className="slider__thumb" aria-label="Volume" />
    </Slider.Root>
  );
}

export default CustomDoubleThumbSlider;
