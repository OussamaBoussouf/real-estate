import type { AxiosError } from 'axios';
import api from '../../../app/axios';
import type { PaginatedProperty } from '../../../types/property';

export async function getProperties(
  filter: Record<string, string | number | string[]>
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

export async function getPropertyById(id: string): Promise<any> {
  try {
    const { data } = await api.get(`/properties/${id}`);
    return data;
  } catch (error) {
    throw new Error(
      (error as AxiosError).message || 'Failed to fetch properties'
    );
  }
}

export async function getPropertyPriceRange(
  filter: Record<string, string | number | string[]>
): Promise<[number, number]> {
  try {
    const { data } = await api.get('/properties/price-range', {
      params: { ...filter },
    });
    
    return [ data[0], data[1] ];
  } catch (error) {
    throw new Error(
      (error as AxiosError).message || 'Failed to fetch properties'
    );
  }
}
