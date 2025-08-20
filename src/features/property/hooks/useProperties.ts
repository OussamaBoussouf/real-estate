import { useQuery } from '@tanstack/react-query';
import { getProperties } from '../services/PropertyService';

export const useProperties = function (filter: Record<string, string | number>) {

  const { data, isPending, isError, error } = useQuery({
    queryKey: ['properties', filter.page],
    queryFn: () => getProperties(filter),
  });

  return {
    data,
    isPending,
    isError,
    error,
  };
};
