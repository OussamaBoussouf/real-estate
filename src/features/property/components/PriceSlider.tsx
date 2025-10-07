import { useEffect, useState } from 'react';
import { useDebounce } from '../../../shared/hooks/useDebounce';
import { getPropertyPriceRange } from '../services/PropertyService';
import { useQuery } from '@tanstack/react-query';
import { useSearchParams } from 'react-router';
import CustomDoubleThumbSlider from '../../../shared/components/CustomDoubleThumbSlider';
import PriceSliderSkeleton from './PriceSliderSkeleton';

type PriceSliderProps = {
  onChange: (val: Record<string, number>) => void;
};

function PriceSlider({ onChange }: PriceSliderProps) {
  const [searchParams] = useSearchParams();
  const [currentPrice, setCurrentPrice] = useState<number[] | undefined>(
    undefined
  );

  const filter = {
    type: searchParams.get('type') || '',
    category: searchParams.getAll('category') || [],
    city: searchParams.get('city') || '',
    bedrooms: searchParams.get('bedrooms') || '',
  };

  const { data, isPending, isError, error } = useQuery({
    queryKey: ['price-range', filter],
    queryFn: () => getPropertyPriceRange(filter),
  });

  const debouncedPrice = useDebounce(currentPrice, 500);

  const handleValueChange = (val: number[]) => {
    setCurrentPrice(val);
  };

  useEffect(() => {
    if (!data) return;
    setCurrentPrice(undefined);
  }, [data]);

  //Update the URL params low and max prices when the debounced price changes
  useEffect(() => {
    if (!data || !debouncedPrice) return;
    if (!currentPrice) return;

    const [low, high] = debouncedPrice;

    onChange({
      low_price: low ?? data[0],
      high_price: high ?? data[1],
    });
  }, [debouncedPrice]);

  if (isPending)
    return <PriceSliderSkeleton/>

  if (isError) return <p>{(error as Error).message}</p>;

  if (data[0] === data[1]) return null;

  return (
    <fieldset className="fieldset">
      <legend className="fieldset-legend">Price</legend>
      <div className="price-slider__values">
        <span>${currentPrice ? currentPrice[0] : data[0]}</span>
        <span>${currentPrice ? currentPrice[1] : data[1]}</span>
      </div>
      <CustomDoubleThumbSlider
        step={5}
        min={data[0]}
        max={data[1]}
        handleValueChange={handleValueChange}
        currentValue={currentPrice}
      />
    </fieldset>
  );
}

export default PriceSlider;
