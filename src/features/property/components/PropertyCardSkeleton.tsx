import Skeleton from "../../../shared/components/Skeleton";

function PropertyCardSkeleton() {
    return (
        <div className="property-card-skeleton">
            <Skeleton className="property-card-skeleton__image" />
            <Skeleton height="25px" width="80%" borderRadius="5px" className="mt-md" />
            <Skeleton height="15px" width="50%" borderRadius="5px" className="mt-md" />
        </div>
    );
}

export default PropertyCardSkeleton;