import Skeleton from "../../../shared/components/Skeleton";

function PropertyImageGallerySkeleton() {
  return (
    <div className="gallery-skeleton">
      <Skeleton borderRadius="5px"/>
      <Skeleton borderRadius="5px"/>
      <Skeleton borderRadius="5px"/>
    </div>
  );
}

export default PropertyImageGallerySkeleton;
