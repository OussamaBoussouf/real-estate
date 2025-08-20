import PropertyCard from './PropertyCard';
import type { Property } from '../../../types/property';
import { useProperties } from '../hooks/useProperties';
import { useSearchParams } from 'react-router';
import { getQueryParams } from '../../../shared/utils/utils';
import Pagination from './Pagination';
import { usePagination } from '../../../shared/hooks/usePagination';
import { useMemo } from 'react';
import { useScrollTop } from '../../../shared/hooks/useScrollTop';
import PropertySkeleton from './PropertySkeleton';

function PropertyList() {
  const [searchParams] = useSearchParams();
  const filter = useMemo(() => getQueryParams(searchParams), [searchParams]); // return query string as a key value pair object

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
        <PropertySkeleton />
        <PropertySkeleton />
        <PropertySkeleton />
        <PropertySkeleton />
        <PropertySkeleton />
        <PropertySkeleton />
      </div>
    );

  if (isError)
    return <span>Error : {error?.message || 'Failed to load properties'}</span>;

  if (!hasProperties) return <span>No result found</span>;

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
