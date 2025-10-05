import { Slider } from 'radix-ui';

type CustomDoubleThumbSliderProps = {
  min: number;
  max: number;
  step?: number;
  currentValue: number[] | undefined;
  handleValueChange: (val: number[]) => void;
};

function CustomDoubleThumbSlider({
  min,
  max,
  step = 1,
  currentValue,
  handleValueChange,
}: CustomDoubleThumbSliderProps) {
  return (
    <Slider.Root
      className="slider"
      value={currentValue ?? [min, max]}
      minStepsBetweenThumbs={1}
      onValueChange={handleValueChange}
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
