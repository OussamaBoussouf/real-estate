function OwnerDetailsSkeleton() {
  return (
    <div className="owner-details__skeleton">
      <div className="owner-details__skeleton-meta">
        <span className="owner-details__skeleton-avatar pulsate"></span>
        <span className="owner-details__skeleton-info pulsate"></span>
      </div>
      <div className="owner-details__skeleton-text pulsate my-md"></div>
      <div className="owner-details__skeleton-text pulsate my-md"></div>
    </div>
  );
}

export default OwnerDetailsSkeleton;
