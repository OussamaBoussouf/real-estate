import { useSearchParams } from 'react-router-dom';
import { PropertyFilter } from '../../../types/property';
import { filterEmptyQueryParams } from '../../../shared/utils/utils';
import { useCallback } from 'react';

export const usePropertyFilterParams = (
): [PropertyFilter, (arg: Partial<PropertyFilter>) => void] => {
  const [searchParams, setSearchParams] = useSearchParams();

  const filter: PropertyFilter = {
    type: searchParams.get('type') || '',
    category: searchParams.getAll('category'),
    city: searchParams.get('city') || '',
    bathrooms: searchParams.get('bathrooms') || '',
    bedrooms: searchParams.get('bedrooms') || '',
    min_price: searchParams.get('min_price') || '',
    max_price: searchParams.get('max_price') || '',
    page: searchParams.get('page') || '',
  };


  const setFilter = useCallback(
    (newFilters: Partial<PropertyFilter>) => {
      setSearchParams(filterEmptyQueryParams({ ...filter, ...newFilters }));
    },
    [filter, setSearchParams]
  );

  return [filter, setFilter];
};
