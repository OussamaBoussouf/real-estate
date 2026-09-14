import { useQuery } from '@tanstack/react-query';
import { getProperties } from '../services/PropertyService';
import { PropertyFilter } from '../../../types/property';

export const useProperties = function (filter: Partial<PropertyFilter>) {
  const {
    data: properties,
    isPending,
    isError,
    error,
  } = useQuery({
    queryKey: ['properties', filter],
    queryFn: () => getProperties(filter),
  });

  return {
    properties,
    isPending,
    isError,
    error,
  };
};
