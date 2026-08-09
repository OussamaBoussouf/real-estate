import Skeleton from '../../../shared/components/Skeleton';

function PriceSliderSkeleton() {
  return (
    <div>
      <Skeleton borderRadius="5px" className="w-md h-xs mb-sm" />
      <div className="d-flex-between mb-sm">
        <Skeleton borderRadius="5px" className="w-sm h-xs" />
        <Skeleton borderRadius="5px" className="w-sm h-xs" />
      </div>
      <Skeleton borderRadius="5px" className="w-full h-xxs" />
    </div>
  );
}

export default PriceSliderSkeleton;
