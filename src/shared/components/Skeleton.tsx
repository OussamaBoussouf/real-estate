type SkeletonProps = {
  height?: string | number;
  width?: string | number;
  borderRadius?: string;
  className?: string;
};

function Skeleton({ height, borderRadius, width, className }: SkeletonProps) {
  return (
    <span
      style={{
        height,
        width,
        borderRadius
      }}
      className={`skeleton-primitive ${className}`}
      aria-hidden="true"
    />
  );
}

export default Skeleton;
