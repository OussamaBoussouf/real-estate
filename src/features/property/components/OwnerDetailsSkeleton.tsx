import Skeleton from '../../../shared/components/Skeleton';

function OwnerDetailsSkeleton() {
  return (
    <div className="owner-details-skeleton">
      <div className="owner-details-skeleton__meta">
        <Skeleton height="50px" width="50px" borderRadius="50%" />
        <Skeleton height="30px" width="150px" borderRadius="5px" />
      </div>
      <Skeleton
        height="20px"
        width="100%"
        borderRadius="5px"
        className="my-md"
      />
      <Skeleton
        height="20px"
        width="50%"
        borderRadius="5px"
        className="my-md"
      />
    </div>
  );
}

export default OwnerDetailsSkeleton;
