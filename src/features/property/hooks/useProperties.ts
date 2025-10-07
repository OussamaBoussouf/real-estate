import { useQuery } from '@tanstack/react-query';
import { getProperties } from '../services/PropertyService';

export const useProperties = function (
  filter: Record<string, string | number | string[]>
) {
  const { data, isPending, isError, error } = useQuery({
    queryKey: [
      'properties',
      filter.page,
      filter.type,
      filter.category,
      filter.city,
      filter.bedrooms,
      filter.bathrooms,
      filter.low_price,
      filter.high_price,
    ],
    queryFn: () => getProperties(filter),
  });

  return {
    data,
    isPending,
    isError,
    error,
  };
};
