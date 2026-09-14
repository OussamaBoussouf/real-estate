import { useState } from 'react';
import CustomDoubleThumbSlider from '../../../shared/components/CustomDoubleThumbSlider';
 

type PriceSliderProps = {
  maxPrice: number;
  minPrice: number;
  currentMinPrice: number | undefined;
  currentMaxPrice: number | undefined;
  onValueCommit: (val: [number, number]) => void;
};

function PriceSlider({
  minPrice,
  maxPrice,
  currentMinPrice,
  currentMaxPrice,
  onValueCommit : handleValueCommit,
}: PriceSliderProps) {
  const [currentPrice, setCurrentPrice] = useState<[number, number]>([
    currentMinPrice || minPrice,
    currentMaxPrice || maxPrice,
  ]);


  const handleValueChange = (val: [number, number]) => {
    setCurrentPrice(val);
  };

  return (
    <fieldset className="fieldset">
      <legend className="fieldset-legend">Price</legend>
      <div className="price-slider__values">
        <span>${currentPrice[0] ?? minPrice}</span>
        <span>${currentPrice[1] ?? maxPrice}</span>
      </div>
      <CustomDoubleThumbSlider
        step={5}
        min={minPrice}
        max={maxPrice}
        onChange={handleValueChange}
        onValueCommit={handleValueCommit}
        currentValue={currentPrice}
      />
    </fieldset>
  );
}

export default PriceSlider;
