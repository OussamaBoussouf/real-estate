import PropertyCard from './PropertyCard';
import type { Property } from '../../../types/property';
import PropertyCardSkeleton from './PropertyCardSkeleton';
import NotFoundImg from '../../../assets/not_found.svg';

type PropertyListProps = {
  data: Property[] | undefined;
  isPending: boolean;
  isError: boolean;
  error: Error | null;
};

function PropertyList({ data, isPending, isError, error }: PropertyListProps) {
  const hasProperties = data && data.length > 0;

  if (isPending)
    return (
      <div className="property-grid-layout">
        {Array(9)
          .fill(0)
          .map((_, index) => (
            <PropertyCardSkeleton key={index} />
          ))}
      </div>
    );

  if (isError)
    return <span>Error : {error?.message || 'Failed to load properties'}</span>;

  if (!hasProperties)
    return (
      <div className="text-center d-flex-center h-full w-full min-h-md">
        <div>
          <img
            src={NotFoundImg}
            alt="search"
            width="350"
            style={{ width: '350px' }}
          />
          <h2 className="fs-xl mb-sm">OOPs!</h2>
          <p className="fs-sm">We couldn't find a match</p>
        </div>
      </div>
    );

  return (
    <>
      <div className="property-grid-layout">
        {data &&
          data.map((propertie: Property) => (
            <PropertyCard
              key={propertie.id}
              id={propertie.id}
              city={propertie.location.city}
              price={propertie.price}
              title={propertie.title}
              bedrooms={propertie.bedrooms}
              bathrooms={propertie.bathrooms}
              propertyType={propertie.propertyType}
              type={propertie.type}
            />
          ))}
      </div>
      {/* <Pagination
        onPageChange={handlePageChange}
        totalPages={totalPages}
        currentPage={currentPage}
      /> */}
    </>
  );
}

export default PropertyList;
