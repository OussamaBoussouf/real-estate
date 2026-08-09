import Skeleton from '../../../shared/components/Skeleton';

function PropertyDetailsSkeleton() {
  return (
    <div className="property-details__skeleton">
      <Skeleton
        height="40px"
        width="100%"
        borderRadius="5px"
        className="my-md"
      />
      <Skeleton
        height="30px"
        width="70%"
        borderRadius="5px"
        className="my-md"
      />
      <Skeleton
        height="30px"
        width="70%"
        borderRadius="5px"
        className="my-md"
      />
    </div>
  );
}

export default PropertyDetailsSkeleton;
