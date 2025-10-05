import PropertyCard from './PropertyCard';
import type { Property } from '../../../types/property';
import { useProperties } from '../hooks/useProperties';
import { useSearchParams } from 'react-router';
import Pagination from './Pagination';
import { usePagination } from '../../../shared/hooks/usePagination';
import { useScrollTop } from '../../../shared/hooks/useScrollTop';
import PropertySkeleton from './PropertySkeleton';
import NotFoundImg from '../../../assets/not_found.svg';

function PropertyList() {
  const [searchParams] = useSearchParams();

  const filter = {
    type: searchParams.get('type') || '',
    category: searchParams.getAll('category') || [],
    city: searchParams.get('city') || '',
    bathrooms: searchParams.get('bathrooms') || '',
    bedrooms: searchParams.get('bedrooms') || '',
    low_price: searchParams.get('low_price') || '',
    high_price: searchParams.get('high_price') || '',
  };

  const { currentPage, handlePageChange } = usePagination();
  const { data, isPending, isError, error } = useProperties({
    page: currentPage,
    ...filter,
  });

  useScrollTop([currentPage]);

  const totalPages = data?.totalPages;
  const hasProperties = data?.properties && data.properties.length > 0;

  if (isPending)
    return (
      <div className="grid-layout">
        {Array(9)
          .fill(0)
          .map((_, index) => (
            <PropertySkeleton key={index} />
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
      <div className="grid-layout">
        {data?.properties &&
          data?.properties.map((propertie: Property) => (
            <PropertyCard
              key={propertie.id}
              city={propertie.location.city}
              price={propertie.price}
              title={propertie.title}
              bedrooms={propertie.bedrooms}
              bathrooms={propertie.bathrooms}
              size={propertie.size}
            />
          ))}
      </div>
      <Pagination
        onPageChange={handlePageChange}
        totalPages={totalPages}
        currentPage={currentPage}
      />
    </>
  );
}

export default PropertyList;
