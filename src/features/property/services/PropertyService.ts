import type { AxiosError } from 'axios';
import api from '../../../app/axios';
import type { PaginatedProperty } from '../../../types/property';

export async function getProperties(
  filter: Record<string, string | number>
): Promise<PaginatedProperty> {
  try {
    const { data } = await api.get('/properties', {
      params: {
        ...filter,
      },
    });

    return data as PaginatedProperty;
  } catch (error) {
    throw new Error(
      (error as AxiosError).message || 'Failed to fetch properties'
    );
  }
}
